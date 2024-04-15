import React, { useState, useEffect } from 'react'
import './Body.css'


export default function Body() {
  const [data, setData] = useState([]);
  const [card, setCard] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMount = true;

  useEffect(()=> {
    const getProduct = async ()=> {
      setLoading(true)
      const response = await fetch('https://fakestoreapi.com/products');
      if(componentMount) {
        setData(await response.clone().json())
        setCard(await response.json())
        setLoading(false)
      }

      return ()=> {
        componentMount = false;
      }
    }

    getProduct()
  }, [])

  const Loading = ()=>{
    return(
      <>
      Loading....
      </>
    )
  }

  const Products = ()=>{
    return(
      <>
      <div className="card-container content-center">
      <div className="button-head">
        <button className="btn">All</button>
        <button className="btn">Woman's Clothing</button>
        <button className="btn">Men's Clothing</button>
        <button className="btn">Jewelery</button>
        <button className="btn">Electronic</button>
      </div>

      {card.map(product=>{
        return(
          <>
          
          <div className="card">
            <div className="img-contain">
                <img src={product.image} width="100%" height="100%" alt="img" />
            </div>
            <div classNameName="desc">
                <h3 className="title">{product.title.slice(0,20)}...</h3>
                <h3>{product.price} XAF</h3>
                <p className="description">{product.description.slice(0,70)}...</p>
            </div>
            <button className="addToCard">Buy Now</button>
        </div>
        
          </>
        )
      })}
      </div>
      </>
    )
  }

  return (
    <main>
    <div className="card-container ">
        {loading ? <Loading /> : <Products />}
    </div>
    </main>
  )
}
