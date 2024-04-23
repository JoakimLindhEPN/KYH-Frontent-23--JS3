'use client'

import ProductCard from "./product-card"
import { useEffect, useState } from "react"

import { db } from "@/firebase/config";
import { collection, onSnapshot, query } from "firebase/firestore";

export const ProductList = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const q = query(collection(db, 'products'))
    const unsub = onSnapshot(q, querySnapshot => {
      const _products = []
      querySnapshot.forEach(doc => {
        _products.push({id: doc.id, ...doc.data()})
      })

      setProducts(_products)
    })


    return () => unsub()
  },[])

  return (
    <div className="space-y-2">
      {
        products.map(product => (
         <ProductCard key={product.id} imageURL={product.imageURL} id={product.id} name={product.name} price={product.price} />
        ))
      }
    </div>
  )
}