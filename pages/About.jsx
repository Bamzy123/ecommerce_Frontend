import { Users, Award, Globe, Heart } from "lucide-react"

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About EliteShop</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about bringing you the finest products from around the world. Our mission is to make quality
          shopping accessible, enjoyable, and meaningful.
        </p>
      </section>

      {/* Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, EliteShop began as a small startup with a big dream: to create an online shopping
            experience that puts customers first. We started with just a handful of products and a commitment to
            quality.
          </p>
          <p className="text-gray-600 mb-4">
            Today, we've grown into a trusted platform serving thousands of customers worldwide, but our core values
            remain the same. We believe in transparency, quality, and exceptional customer service.
          </p>
          <p className="text-gray-600">
            Every product we offer is carefully selected and tested to ensure it meets our high standards. We're not
            just selling products; we're building relationships and creating experiences that matter.
          </p>
        </div>
        <div>
          <img src="/placeholder.svg?height=400&width=500" alt="Our team" className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer First</h3>
            <p className="text-gray-600">Every decision we make is guided by what's best for our customers.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Excellence</h3>
            <p className="text-gray-600">We never compromise on quality and continuously strive for excellence.</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-600">Connecting customers worldwide with amazing products and experiences.</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">Building a community of satisfied customers and trusted partners.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white rounded-lg p-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">50K+</div>
            <div className="text-gray-300">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-gray-300">Products Sold</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">99%</div>
            <div className="text-gray-300">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-gray-300">Customer Support</div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
            <p className="text-gray-600 mb-2">CEO & Founder</p>
            <p className="text-sm text-gray-500">Passionate about creating exceptional customer experiences.</p>
          </div>
          <div className="text-center">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
            <p className="text-gray-600 mb-2">Head of Product</p>
            <p className="text-sm text-gray-500">Ensures every product meets our high-quality standards.</p>
          </div>
          <div className="text-center">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Emily Rodriguez</h3>
            <p className="text-gray-600 mb-2">Customer Success</p>
            <p className="text-sm text-gray-500">Dedicated to making every customer interaction amazing.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
