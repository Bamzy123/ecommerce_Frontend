"use client"

import { useState } from "react"
import { Grid, List } from "lucide-react"
import ProductCard from "../components/ProductCard"
import { products } from "../data/products"

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState("grid")

  const categories = ["all", ...new Set(products.map((product) => product.category))]

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
    if (category === "all") {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter((product) => product.category === category))
    }
  }

  const handleSort = (sortOption) => {
    setSortBy(sortOption)
    const sorted = [...filteredProducts].sort((a, b) => {
      switch (sortOption) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })
    setFilteredProducts(sorted)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-xl text-gray-600">Discover our complete collection of amazing products</p>
      </div>

      {/* Filters and Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <select
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>

          <div className="flex border border-gray-300 rounded-lg">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${viewMode === "grid" ? "bg-blue-600 text-white" : "text-gray-600"}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${viewMode === "list" ? "bg-blue-600 text-white" : "text-gray-600"}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div
        className={`grid gap-6 ${
          viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
        }`}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} viewMode={viewMode} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No products found in this category.</p>
        </div>
      )}
    </div>
  )
}
