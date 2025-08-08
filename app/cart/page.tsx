"use client"

import { useCart } from "../context/CartContext"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Link from "next/link"

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
            <Link 
              href="/products" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Product</th>
                    <th className="text-center py-2">Quantity</th>
                    <th className="text-right py-2">Price</th>
                    <th className="text-right py-2">Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-4">{item.name}</td>
                      <td className="text-center">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className="w-20 text-center border rounded"
                        />
                      </td>
                      <td className="text-right">${item.price.toFixed(2)}</td>
                      <td className="text-right">${(item.price * item.quantity).toFixed(2)}</td>
                      <td className="text-right">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-xl font-semibold">
                Total: ${total.toFixed(2)}
              </div>
              <div className="space-x-4">
                <Link
                  href="/products"
                  className="inline-block bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700"
                >
                  Continue Shopping
                </Link>
                <Link
                  href="/checkout"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  )
} 