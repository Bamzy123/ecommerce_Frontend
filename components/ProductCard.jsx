"use client"

import { Link } from "react-router-dom"
import { Star, ShoppingCart } from "lucide-react"
import { useCart } from "../context/CartContext"

export default function ProductCard({ product, viewMode = "grid" }) {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
    alert("Product added to cart!")
  }

  if (viewMode === "list") {
    return (
      <Link to={`/product/${product.id}`} className="block">
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-48 h-32 object-cover" />
          <div className="p-6 flex-1 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
          <button
            onClick={handleAddToCart}
            className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <ShoppingCart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-1 text-sm text-gray-600">({product.rating})</span>
            </div>
            <p className="text-xl font-bold text-blue-600">${product.price}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
