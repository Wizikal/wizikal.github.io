import React from 'react'

const Listing = ({item=[]}) => {
  const title = item.title[0];
  const img = item.galleryURL[0];
  const price = item.sellingStatus[0].currentPrice[0].__value__ + ' ' + item.sellingStatus[0].currentPrice[0]['@currencyId'];
  const url = item.viewItemURL[0];
  const shipping = item.shippingInfo[0].shippingServiceCost[0].__value__ + ' ' + item.shippingInfo[0].shippingServiceCost[0]['@currencyId'];
  const timeLeft = item.sellingStatus[0].timeLeft[0].replace(/P|T/g, '')

  return (
    <div className = 'listings'>
      <h4>{title}</h4>
      <img src={img}></img>
      <p>Price: {price}</p>
      <p>Shipping: {shipping}</p>
      <p>Time Left: {timeLeft}</p>
      <a target='_blank' href={url}>URL</a>
      </div>
    )}




export default Listing
