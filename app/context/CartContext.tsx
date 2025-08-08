"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Handle hydration mismatch
  useEffect(() => {
    setIsMounted(true)
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  // Update total whenever items change
  useEffect(() => {
    if (isMounted) {
      const newTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      setTotal(newTotal)
      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(items))
    }
  }, [items, isMounted])

  const addItem = (item: CartItem) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(i => i.id === item.id)
      if (existingItem) {
        return currentItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        )
      }
      return [...currentItems, item]
    })
  }

  const removeItem = (id: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  // Don't render anything until after hydration
  if (!isMounted) {
    return null
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
} 