"use client"

import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, Heart, Share2, Minus, Plus, ShoppingCart } from "lucide-react"
import { products } from "../data/products"
import { useCart } from "../context/CartContext"

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const product = products.find((p) => p.id === Number.parseInt(id))

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-blue-600 hover:text-blue-800">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    alert("Product added to cart!")
  }

  const images = [product.image, product.image, product.image, product.image]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <span className="text-gray-400">/</span>
          </li>
          <li>
            <Link to="/products" className="text-gray-500 hover:text-gray-700">
              Products
            </Link>
          </li>
          <li>
            <span className="text-gray-400">/</span>
          </li>
          <li>
            <span className="text-gray-900">{product.name}</span>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <img
              src={images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border-2 rounded-lg overflow-hidden ${
                  selectedImage === index ? "border-blue-600" : "border-gray-200"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">({product.rating}) • 127 reviews</span>
          </div>

          <div className="mb-6">
            <span className="text-3xl font-bold text-gray-900">${product.price}</span>
            <span className="ml-2 text-lg text-gray-500 line-through">$99.99</span>
            <span className="ml-2 text-sm text-green-600 font-medium">20% OFF</span>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Quantity</h3>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
              <Heart className="w-5 h-5 mr-2" />
              Wishlist
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          <div className="border-t pt-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <strong>SKU:</strong> {product.id}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Tags:</strong> trending, popular
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={relatedProduct.image || "/placeholder.svg"}
                alt={relatedProduct.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                <p className="text-blue-600 font-bold">${relatedProduct.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
