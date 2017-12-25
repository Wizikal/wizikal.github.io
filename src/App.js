import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './ui/title'
import Display from './ui/display'
import fetch from 'isomorphic-fetch'

class App extends Component {
  constructor(props) {
    super(props)
    this.getItems = this.getItems.bind(this)
    this.getAucItems = this.getAucItems.bind(this)
    this.state = {
      items:[],
      results:[],
    }
  }

  componentDidMount() {
    var url = "http://svcs.ebay.com/services/search/FindingService/v1";
        url += "?OPERATION-NAME=findItemsByKeywords";
        url += "&SERVICE-VERSION=1.0.0";
        url += "&SECURITY-APPNAME=WilliamW-FlipBot-PRD-d5d705b3d-4df18583";
        url += "&GLOBAL-ID=EBAY-ENCA";
        url += "&RESPONSE-DATA-FORMAT=JSON";
        url += "&REST-PAYLOAD";
        url += "&keywords=pokemon%20card";
        url += "&paginationInput.entriesPerPage=100";
        url += "&sortOrder=StartTimeNewest";
        url += "&itemFilter(0).name=ListingType&itemFilter(0).value=FixedPrice";
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({
        items: json.findItemsByKeywordsResponse[0].searchResult[0].item.filter(item => item.shippingInfo[0].hasOwnProperty('shippingServiceCost'))
      }))
      .then(items => this.setState({
        results: this.state.items.filter(item => item.shippingInfo[0].shippingServiceCost[0].__value__ <= 10.00)
      }))
  }

  getItems() {
    clearInterval(this.start);
    var url = "http://svcs.ebay.com/services/search/FindingService/v1";
        url += "?OPERATION-NAME=findItemsByKeywords";
        url += "&SERVICE-VERSION=1.0.0";
        url += "&SECURITY-APPNAME=WilliamW-FlipBot-PRD-d5d705b3d-4df18583";
        url += "&GLOBAL-ID=EBAY-ENCA";
        url += "&RESPONSE-DATA-FORMAT=JSON";
        url += "&REST-PAYLOAD";
        url += "&keywords=pokemon%20card";
        url += "&paginationInput.entriesPerPage=100";
        url += "&sortOrder=StartTimeNewest";
        url += "&itemFilter(0).name=ListingType&itemFilter(0).value=FixedPrice";
        fetch(url).then(response => response.json())
                  .then(json => this.setState({
                    items:json.findItemsByKeywordsResponse[0].searchResult[0].item.filter(item => item.shippingInfo[0].hasOwnProperty('shippingServiceCost'))
                  }))
                  .then(items => this.setState({
                    results: this.state.items.filter(item => item.shippingInfo[0].shippingServiceCost[0].__value__ <= 10.00)
                  }))
        this.start = setInterval(function(){
          fetch(url).then(response => response.json())
                    .then(json => this.setState({
                      items:json.findItemsByKeywordsResponse[0].searchResult[0].item.filter(item => item.shippingInfo[0].hasOwnProperty('shippingServiceCost'))
                    }))
                    .then(items => this.setState({
                      results: this.state.items.filter(item => item.shippingInfo[0].shippingServiceCost[0].__value__ <= 10.00)
                    }))
        }.bind(this), 30000)
  }

  getAucItems() {
    clearInterval(this.start);
    var url = "http://svcs.ebay.com/services/search/FindingService/v1";
        url += "?OPERATION-NAME=findItemsByKeywords";
        url += "&SERVICE-VERSION=1.0.0";
        url += "&SECURITY-APPNAME=WilliamW-FlipBot-PRD-d5d705b3d-4df18583";
        url += "&GLOBAL-ID=EBAY-ENCA";
        url += "&RESPONSE-DATA-FORMAT=JSON";
        url += "&REST-PAYLOAD";
        url += "&keywords=pokemon%20card";
        url += "&paginationInput.entriesPerPage=100";
        url += "&sortOrder=EndTimeSoonest";
        url += "&itemFilter(0).name=ListingType&itemFilter(0).value=Auction";
        fetch(url)
          .then(response => response.json())
          .then(json => this.setState({
            items:json.findItemsByKeywordsResponse[0].searchResult[0].item.filter(item => item.shippingInfo[0].hasOwnProperty('shippingServiceCost'))
          }))
          .then(items => this.setState({
            results: this.state.items.filter(item => item.shippingInfo[0].shippingServiceCost[0].__value__ <= 10.00)
          }))
        this.start = setInterval(function(){
          fetch(url)
            .then(response => response.json())
            .then(json => this.setState({
              items:json.findItemsByKeywordsResponse[0].searchResult[0].item.filter(item => item.shippingInfo[0].hasOwnProperty('shippingServiceCost'))
            }))
            .then(items => this.setState({
              results: this.state.items.filter(item => item.shippingInfo[0].shippingServiceCost[0].__value__ <= 10.00)
            }))
        }.bind(this), 30000)
  }

  render() {

    return (
      <div className='app'>
        <Title />
        <Display getItems={this.getItems} getAucItems={this.getAucItems} results = {this.state.results}/>
      </div>
    );
  }
}

export default App;
