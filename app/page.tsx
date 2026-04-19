

'use client';

import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Check,
  MapPin,
  Calendar,
  Users,
  Zap,
  Shield,
  MapPinIcon,
  Phone,
  Mail,
  ChevronRight,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Royal Rentals</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#vehicles" className="text-gray-600 hover:text-gray-900">Vehicles</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Sign In</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Your Journey, Our <span className="text-blue-600">Premium Service</span>
              </h1>
              <p className="text-lg text-gray-600">
                Experience luxury car rentals with transparent pricing, 24/7 support, and hassle-free booking. Drive with confidence, drive with Royal Rentals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 h-12 px-6 text-base">
                  Book Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="h-12 px-6 text-base">
                  Learn More
                </Button>
              </div>
              <div className="flex gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>No Hidden Charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Booking</h3>
                <div className="space-y-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pick-up Location
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
                      <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                      <input
                        type="text"
                        placeholder="Select location"
                        className="w-full outline-none text-gray-700 placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pick-up Date
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
                        <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                        <input
                          type="date"
                          className="w-full outline-none text-gray-700 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Return Date
                      </label>
                      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3">
                        <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                        <input
                          type="date"
                          className="w-full outline-none text-gray-700 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12">
                    Search Cars
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Royal Rentals?
            </h2>
            <p className="text-lg text-gray-600">
              We provide the best car rental experience with unmatched quality and service
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Insurance Included',
                description: 'Comprehensive coverage included with every rental. Drive worry-free with our protection plans.',
              },
              {
                icon: Zap,
                title: 'Instant Booking',
                description: 'Reserve your car in seconds. Get instant confirmation and pickup instructions via email.',
              },
              {
                icon: MapPin,
                title: 'Multiple Locations',
                description: 'Pick up and drop off at any of our 50+ locations nationwide for maximum convenience.',
              },
              {
                icon: Users,
                title: '24/7 Support',
                description: 'Our dedicated support team is available round the clock to assist you anytime.',
              },
              {
                icon: Check,
                title: 'Well-Maintained Fleet',
                description: 'All vehicles are regularly serviced and thoroughly inspected before rental.',
              },
              {
                icon: Calendar,
                title: 'Flexible Terms',
                description: 'Customize your rental period. Hourly, daily, weekly, or monthly plans available.',
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="vehicles" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vehicle Fleet
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our wide range of premium vehicles
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Economy',
                image: '🚗',
                price: '$35/day',
                features: ['Fuel Efficient', 'Perfect for City', 'Manual/Automatic'],
              },
              {
                name: 'SUV',
                image: '🚙',
                price: '$75/day',
                features: ['4WD Available', 'Spacious Interior', 'Comfortable'],
              },
              {
                name: 'Luxury',
                image: '🚓',
                price: '$150/day',
                features: ['Premium Features', 'Latest Tech', 'Maximum Comfort'],
              },
            ].map((vehicle, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-b from-blue-100 to-indigo-100 h-48 flex items-center justify-center text-6xl">
                  {vehicle.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{vehicle.price}</p>
                  <ul className="space-y-2 mb-6">
                    {vehicle.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Anderson',
                role: 'Business Traveler',
                text: 'Royal Rentals made my business trip so much easier. The booking process was seamless and the car was perfect.',
                rating: 5,
              },
              {
                name: 'Sarah Mitchell',
                role: 'Family Vacationer',
                text: 'Excellent service! The entire family loved the spacious SUV. Will definitely rent again on our next trip.',
                rating: 5,
              },
              {
                name: 'Mike Chen',
                role: 'Weekend Explorer',
                text: 'Great prices, well-maintained vehicles, and amazing customer support. Highly recommended!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">`{testimonial.text}`</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">
              No hidden charges. What you see is what you pay.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { duration: 'Hourly', price: 'From $15/hr', features: ['1-4 Hours', 'Perfect for Errands', 'Local Trips'] },
              { duration: 'Daily', price: '$35/day', features: ['1-6 Days', 'Best for Short Trips', 'Flexible Return'], highlight: true },
              { duration: 'Weekly', price: '$200/week', features: ['7-29 Days', 'Save 20%', 'Free Upgrade'] },
              { duration: 'Monthly', price: '$800/month', features: ['30+ Days', 'Save 50%', 'Premium Support'] },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 border transition-all ${plan.highlight
                  ? 'border-blue-600 bg-white shadow-lg scale-105'
                  : 'border-gray-200 bg-white'
                  }`}
              >
                {plan.highlight && (
                  <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    POPULAR
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.duration}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{plan.price}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <ChevronRight className="w-4 h-4 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={plan.highlight ? 'w-full bg-blue-600 hover:bg-blue-700' : 'w-full border border-blue-600 text-blue-600 hover:bg-blue-50'}>
                  Choose Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your next car rental today and experience the Royal Rentals difference
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Book Your Car Now <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Royal Rentals</span>
              </div>
              <p className="text-sm">Premium car rental service for your every need.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Fleet</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (800) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>support@royalrentals.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4" />
                  <span>123 Main St, City, State</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
