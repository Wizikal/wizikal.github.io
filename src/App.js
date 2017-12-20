import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './ui/title'
import Display from './ui/display'

var url = "http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsByKeywords";
    url += "&SERVICE-VERSION=1.0.0";
    url += "&SECURITY-APPNAME=MyAppID";
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&callback=_cb_findItemsByKeywords";
    url += "&REST-PAYLOAD";
    url += "&keywords=harry%20potter";
    url += "&paginationInput.entriesPerPage=3";

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Display />
      </div>
    );
  }
}

export default App;
