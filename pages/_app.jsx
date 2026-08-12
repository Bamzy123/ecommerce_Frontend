"use client"

import { BrowserRouter, MemoryRouter } from "react-router-dom"
import { CartProvider } from "../context/CartContext"

export default function App({ Component, pageProps }) {
  const Router = typeof window === "undefined" ? MemoryRouter : BrowserRouter

  return (
    <CartProvider>
      <Router>
        <Component {...pageProps} />
      </Router>
    </CartProvider>
  )
}
