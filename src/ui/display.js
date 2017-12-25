import React from 'react'
import Listing from './listing'

const Display = ({getItems=f=>f, getAucItems=f=>f, results=[]}) =>
  <div className = "display">
    <div className="button">
      <button className="fix" type='submit' onClick={getItems}>Fixed Price</button>
      <button className="auc" type='submit' onClick={getAucItems}>Auction</button>
    </div>
    <div>
      {results.map((item,index) => <Listing item={item} key={index}/>)}
    </div>
  </div>

export default Display
