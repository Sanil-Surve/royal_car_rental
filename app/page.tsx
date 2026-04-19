'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Check,
  MapPin,
  Calendar,
  Users,
  Zap,
  Shield,
  Phone,
  Mail,
  Star,
  ChevronRight,
  Car,
  Clock,
  Award,
  Fuel,
  Settings,
  Menu,
  X,
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Shield,
    title: 'Insurance Included',
    description: 'Comprehensive coverage included with every rental. Drive worry-free with our protection plans.',
    color: 'rgba(124, 58, 237, 0.2)',
    glow: 'rgba(124, 58, 237, 0.4)',
    accent: '#a78bfa',
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Reserve your car in seconds. Get instant confirmation and pickup instructions via email.',
    color: 'rgba(37, 99, 235, 0.2)',
    glow: 'rgba(37, 99, 235, 0.4)',
    accent: '#60a5fa',
  },
  {
    icon: MapPin,
    title: 'Multiple Locations',
    description: 'Pick up and drop off at any of our 50+ locations nationwide for maximum convenience.',
    color: 'rgba(6, 182, 212, 0.2)',
    glow: 'rgba(6, 182, 212, 0.4)',
    accent: '#22d3ee',
  },
  {
    icon: Users,
    title: '24/7 Support',
    description: 'Our dedicated support team is available round the clock to assist you anytime.',
    color: 'rgba(245, 158, 11, 0.2)',
    glow: 'rgba(245, 158, 11, 0.4)',
    accent: '#fbbf24',
  },
  {
    icon: Award,
    title: 'Well-Maintained Fleet',
    description: 'All vehicles are regularly serviced and thoroughly inspected before every rental.',
    color: 'rgba(52, 211, 153, 0.2)',
    glow: 'rgba(52, 211, 153, 0.4)',
    accent: '#34d399',
  },
  {
    icon: Calendar,
    title: 'Flexible Terms',
    description: 'Customize your rental period. Hourly, daily, weekly, or monthly plans available.',
    color: 'rgba(244, 63, 94, 0.2)',
    glow: 'rgba(244, 63, 94, 0.4)',
    accent: '#fb7185',
  },
];

const vehicles = [
  {
    name: 'Economy',
    tag: 'Best Value',
    emoji: '🚗',
    price: '₹2,500',
    period: 'per day',
    features: ['Fuel Efficient', 'Perfect for City', 'Manual / Automatic', 'AC Fitted'],
    accentColor: '#60a5fa',
    glowColor: 'rgba(37, 99, 235, 0.35)',
    gradient: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(6,182,212,0.10) 100%)',
  },
  {
    name: 'SUV',
    tag: 'Most Popular',
    emoji: '🚙',
    price: '₹3,500',
    period: 'per day',
    features: ['4WD Available', 'Spacious Interior', 'Comfortable Seats', 'Sunroof'],
    accentColor: '#a78bfa',
    glowColor: 'rgba(124, 58, 237, 0.45)',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(37,99,235,0.12) 100%)',
    featured: true,
  },
  {
    name: 'Luxury',
    tag: 'Premium',
    emoji: '🏎️',
    price: '₹5,500',
    period: 'per day',
    features: ['Premium Features', 'Latest Tech', 'Maximum Comfort', 'Chauffeur Ready'],
    accentColor: '#fbbf24',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(244,63,94,0.10) 100%)',
  },
];

const testimonials = [
  {
    name: 'Sanil Surve',
    role: 'Business Traveler',
    text: 'Royal Rentals made my business trip so much easier. The booking process was seamless and the car was in perfect condition. Highly recommended!',
    rating: 5,
    avatar: 'SS',
    color: 'rgba(124, 58, 237, 0.3)',
  },
  {
    name: 'Sagar Puthran',
    role: 'Family Vacationer',
    text: 'Excellent service! The entire family loved the spacious SUV. Will definitely rent again on our next trip. Amazing experience end to end.',
    rating: 5,
    avatar: 'SP',
    color: 'rgba(37, 99, 235, 0.3)',
  },
  {
    name: 'Ramesh Yadav',
    role: 'Weekend Explorer',
    text: 'Great prices, well-maintained vehicles, and amazing customer support. The best car rental service I have ever used!',
    rating: 5,
    avatar: 'RY',
    color: 'rgba(6, 182, 212, 0.3)',
  },
];

const stats = [
  { value: '5+', label: 'Pickup Locations', icon: MapPin },
  { value: '10+', label: 'Cars Available', icon: Car },
  { value: '500+', label: 'Happy Customers', icon: Users },
  { value: '24/7', label: 'Customer Support', icon: Clock },
];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeVehicle, setActiveVehicle] = useState(1);

  return (
    <>
      {/* ── Aurora Background ── */}
      <div className="aurora-bg" aria-hidden="true">
        <div className="aurora-blob-mid" />
      </div>

      <div className="relative z-10 w-full">

        {/* ╔══════════════════════════════════════════╗
            ║  NAVIGATION                              ║
            ╚══════════════════════════════════════════╝ */}
        <nav className="glass-nav sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-[70px]">

              {/* Logo */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center pulse-ring"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
                    boxShadow: '0 4px 16px rgba(124,58,237,0.5)',
                  }}
                >
                  <Car className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white tracking-tight">Royal</span>
                  <span className="text-xl font-bold gradient-text ml-1">Rentals</span>
                </div>
              </div>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center gap-8">
                {['Features', 'Fleet', 'Testimonials', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-violet-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>

              {/* CTA + Mobile toggle */}
              <div className="flex items-center gap-3">
                <a
                  href="#booking"
                  className="hidden md:block btn-glass-primary px-5 py-2.5 rounded-xl text-sm font-semibold cursor-pointer"
                >
                  Book Now
                </a>
                <button
                  className="md:hidden p-2 rounded-lg glass text-white/70 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden glass-card mb-4 p-4 space-y-3">
                {['Features', 'Fleet', 'Testimonials', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-white/70 hover:text-white font-medium py-2 border-b border-white/5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#booking"
                  className="block btn-glass-primary text-center px-5 py-3 rounded-xl text-sm font-semibold mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Now
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* ╔══════════════════════════════════════════╗
            ║  HERO SECTION                            ║
            ╚══════════════════════════════════════════╝ */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
          {/* Decorative grid lines */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left – Hero copy */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="fade-in-up">
                  <span className="badge-glass">
                    <Zap className="w-3.5 h-3.5" />
                    Mumbai&apos;s Premier Car Rental
                  </span>
                </div>

                {/* Heading */}
                <div className="fade-in-up fade-in-up-d1 space-y-3">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
                    Your Journey,
                    <br />
                    <span className="gradient-text">Our Premium</span>
                    <br />
                    <span className="text-white/90">Service.</span>
                  </h1>
                </div>

                {/* Sub-copy */}
                <p className="fade-in-up fade-in-up-d2 text-lg text-white/55 leading-relaxed max-w-lg">
                  Experience luxury car rentals with transparent pricing, 24/7 support, and
                  hassle-free booking. Drive with confidence, drive with Royal Rentals.
                </p>

                {/* CTA buttons */}
                <div className="fade-in-up fade-in-up-d3 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#booking"
                    className="btn-glass-primary inline-flex items-center justify-center gap-2 h-13 px-8 py-3.5 rounded-xl text-base font-semibold"
                  >
                    Book Now <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#vehicles"
                    className="btn-glass-outline inline-flex items-center justify-center gap-2 h-13 px-8 py-3.5 rounded-xl text-base font-medium"
                  >
                    Explore Fleet <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Trust badges */}
                <div className="fade-in-up fade-in-up-d4 flex flex-wrap gap-6">
                  {[
                    { icon: Check, text: 'No Hidden Charges' },
                    { icon: Shield, text: 'Fully Insured' },
                    { icon: Clock, text: '24/7 Support' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-sm text-white/50">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Icon className="w-3 h-3 text-emerald-400" />
                      </div>
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right – Quick Booking Glass Card */}
              <div id="booking" className="fade-in-up fade-in-up-d2">
                <div
                  className="glass-card p-8 relative overflow-hidden"
                  style={{
                    boxShadow: '0 25px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.10)',
                  }}
                >
                  {/* Inner glow */}
                  <div
                    className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                    style={{ background: 'rgba(124,58,237,0.25)' }}
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}
                      >
                        <Car className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">Quick Booking</h2>
                    </div>

                    <div className="space-y-5">
                      {/* Location */}
                      <div>
                        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                          Pick-up Location
                        </label>
                        <div className="flex items-center glass-input rounded-xl px-4 py-3.5 gap-3">
                          <MapPin className="w-5 h-5 text-violet-400 flex-shrink-0" />
                          <input
                            id="pickup-location"
                            type="text"
                            placeholder="Enter city or area…"
                            className="w-full bg-transparent outline-none text-sm text-white/90 placeholder:text-white/30"
                          />
                        </div>
                      </div>

                      {/* Dates */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                            Pick-up Date
                          </label>
                          <div className="flex items-center glass-input rounded-xl px-3 py-3.5 gap-2">
                            <Calendar className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <input
                              id="pickup-date"
                              type="date"
                              className="w-full bg-transparent outline-none text-xs text-white/80 [color-scheme:dark]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                            Return Date
                          </label>
                          <div className="flex items-center glass-input rounded-xl px-3 py-3.5 gap-2">
                            <Calendar className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <input
                              id="return-date"
                              type="date"
                              className="w-full bg-transparent outline-none text-xs text-white/80 [color-scheme:dark]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Vehicle type */}
                      <div>
                        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                          Vehicle Type
                        </label>
                        <div className="flex gap-2">
                          {['Economy', 'SUV', 'Luxury'].map((type, i) => (
                            <button
                              key={type}
                              onClick={() => setActiveVehicle(i)}
                              className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${activeVehicle === i
                                  ? 'border-violet-500/60 bg-violet-500/20 text-violet-300'
                                  : 'border-white/10 bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/70'
                                }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        id="search-cars-btn"
                        className="btn-glass-primary w-full py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2 mt-2"
                      >
                        Search Available Cars
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <p className="text-center text-xs text-white/30">
                        Free cancellation · No credit card required to search
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ╔══════════════════════════════════════════╗
            ║  STATS BAR                               ║
            ╚══════════════════════════════════════════╝ */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="glass-card grid grid-cols-2 md:grid-cols-4 gap-0 overflow-hidden"
              style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)' }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center justify-center py-8 px-4 text-center transition-all duration-300 hover:bg-white/5 ${i < stats.length - 1 ? 'border-r border-white/[0.06]' : ''
                    } ${i >= 2 ? 'border-t border-white/[0.06] md:border-t-0' : ''}`}
                >
                  <stat.icon className="w-5 h-5 text-violet-400 mb-2 opacity-70" />
                  <span className="text-3xl md:text-4xl font-extrabold gradient-text">{stat.value}</span>
                  <span className="text-sm text-white/45 mt-1 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ╔══════════════════════════════════════════╗
            ║  FEATURES SECTION                        ║
            ╚══════════════════════════════════════════╝ */}
        <section id="features" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-16 space-y-4">
              <span className="badge-glass">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 leading-tight">
                Everything You Need,
                <br />
                <span className="gradient-text">Nothing You Don&apos;t</span>
              </h2>
              <p className="text-lg text-white/45 max-w-xl mx-auto">
                We provide the best car rental experience with unmatched quality and service
              </p>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="glass-card glass-card-hover p-7 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: feature.color,
                      boxShadow: `0 4px 20px ${feature.glow}`,
                    }}
                  >
                    <feature.icon className="w-7 h-7" style={{ color: feature.accent }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{feature.description}</p>

                  {/* Bottom line accent */}
                  <div
                    className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${feature.accent}, transparent)` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ╔══════════════════════════════════════════╗
            ║  VEHICLES / FLEET SECTION                ║
            ╚══════════════════════════════════════════╝ */}
        <section id="fleet" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-16 space-y-4">
              <span className="badge-glass">Our Fleet</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 leading-tight">
                Choose Your
                <span className="gradient-text"> Perfect Ride</span>
              </h2>
              <p className="text-lg text-white/45 max-w-lg mx-auto">
                From city-friendly compacts to head-turning luxury — we have a vehicle for every occasion.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {vehicles.map((vehicle, index) => (
                <div
                  key={vehicle.name}
                  className={`glass-card relative overflow-hidden transition-all duration-500 cursor-pointer ${vehicle.featured
                      ? 'ring-1 ring-violet-500/40 scale-[1.02]'
                      : 'glass-card-hover'
                    }`}
                  style={{
                    boxShadow: vehicle.featured
                      ? `0 25px 80px rgba(0,0,0,0.5), 0 0 60px ${vehicle.glowColor}, inset 0 1px 0 rgba(255,255,255,0.12)`
                      : undefined,
                  }}
                >
                  {/* Featured badge */}
                  {vehicle.featured && (
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}
                    >
                      ★ POPULAR
                    </div>
                  )}

                  {/* Car visual area */}
                  <div
                    className="h-52 flex items-center justify-center relative overflow-hidden"
                    style={{ background: vehicle.gradient }}
                  >
                    {/* Glow behind emoji */}
                    <div
                      className="absolute w-32 h-32 rounded-full blur-3xl"
                      style={{ background: vehicle.glowColor }}
                      aria-hidden="true"
                    />
                    <span className="text-8xl relative float-animation" style={{ animationDelay: `${index * 2}s` }}>
                      {vehicle.emoji}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-7">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span
                          className="text-xs font-bold uppercase tracking-widest"
                          style={{ color: vehicle.accentColor }}
                        >
                          {vehicle.tag}
                        </span>
                        <h3 className="text-2xl font-extrabold text-white mt-1">{vehicle.name}</h3>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-extrabold text-white">{vehicle.price}</span>
                        <p className="text-xs text-white/40">{vehicle.period}</p>
                      </div>
                    </div>

                    <div className="glass-divider my-5" />

                    <ul className="space-y-2.5 mb-7">
                      {vehicle.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3 text-sm text-white/60">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: vehicle.accentColor }}
                          />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <button
                      id={`book-${vehicle.name.toLowerCase()}-btn`}
                      className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${vehicle.featured
                          ? 'btn-glass-primary'
                          : 'btn-glass-outline hover:border-white/30'
                        }`}
                    >
                      Book {vehicle.name}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Extra vehicle specs strip */}
            <div className="mt-10 glass-card p-6">
              <div className="flex flex-wrap justify-center gap-10 text-center">
                {[
                  { icon: Fuel, label: 'Fuel Types', value: 'Petrol · Diesel · EV' },
                  { icon: Settings, label: 'Transmission', value: 'Manual & Automatic' },
                  { icon: Users, label: 'Capacity', value: '2 – 8 Passengers' },
                  { icon: MapPin, label: 'Coverage', value: 'Pan Mumbai + Outstation' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-violet-400 flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-xs text-white/40 font-medium">{label}</p>
                      <p className="text-sm text-white/80 font-semibold">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ╔══════════════════════════════════════════╗
            ║  TESTIMONIALS                            ║
            ╚══════════════════════════════════════════╝ */}
        <section id="testimonials" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-16 space-y-4">
              <span className="badge-glass">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
                What Our <span className="gradient-text">Customers Say</span>
              </h2>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={t.name} className="glass-card glass-card-hover p-7 flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="w-4 h-4 star-fill fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/60 text-sm leading-relaxed flex-1 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="glass-divider my-5" />

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: t.color, border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-xs text-white/40 mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ╔══════════════════════════════════════════╗
            ║  CTA BANNER                              ║
            ╚══════════════════════════════════════════╝ */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="glass-card relative overflow-hidden py-16 px-8 md:px-16 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.20) 0%, rgba(37,99,235,0.15) 50%, rgba(6,182,212,0.10) 100%)',
                boxShadow: '0 25px 80px rgba(124,58,237,0.2), inset 0 1px 0 rgba(255,255,255,0.12)',
              }}
            >
              {/* Inner glows */}
              <div
                className="absolute -top-24 -left-24 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'rgba(124,58,237,0.3)' }}
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'rgba(6,182,212,0.2)' }}
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-6">
                <span className="badge-glass">Limited Time Offer</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                  Ready to Hit the Road?
                </h2>
                <p className="text-xl text-white/50 max-w-lg mx-auto">
                  Book your next car rental today and experience the Royal Rentals difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                  <a
                    href="#booking"
                    id="cta-book-now"
                    className="btn-glass-primary inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-base font-bold"
                  >
                    Book Your Car Now <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:+918369434018"
                    className="btn-glass-outline inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-base font-medium"
                  >
                    <Phone className="w-4 h-4" /> Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ╔══════════════════════════════════════════╗
            ║  FOOTER                                  ║
            ╚══════════════════════════════════════════╝ */}
        <footer id="contact" className="py-16 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-10 mb-12">

              {/* Brand */}
              <div className="md:col-span-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)' }}
                  >
                    <Car className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xl font-bold text-white">Royal</span>
                    <span className="text-xl font-bold gradient-text ml-1">Rentals</span>
                  </div>
                </div>
                <p className="text-sm text-white/40 leading-relaxed">
                  Premium car rental service for your every need. Experience freedom on wheels with our well-maintained fleet.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
                <ul className="space-y-3 text-sm">
                  {['About Us', 'Our Fleet', 'Blog', 'Careers'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/40 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group">
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Support</h4>
                <ul className="space-y-3 text-sm">
                  {['Help Center', 'FAQs', 'Contact Us', 'Terms & Conditions'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/40 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group">
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <a href="tel:+918369434018" className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group">
                      <div className="w-8 h-8 rounded-lg glass flex items-center justify-center flex-shrink-0 group-hover:border-violet-500/50 transition-colors">
                        <Phone className="w-3.5 h-3.5 text-violet-400" />
                      </div>
                      +91 836 943 4018
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@royalrentals.in" className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group">
                      <div className="w-8 h-8 rounded-lg glass flex items-center justify-center flex-shrink-0 group-hover:border-violet-500/50 transition-colors">
                        <Mail className="w-3.5 h-3.5 text-violet-400" />
                      </div>
                      support@royalrentals.in
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center gap-3 text-white/40">
                      <div className="w-8 h-8 rounded-lg glass flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-3.5 h-3.5 text-violet-400" />
                      </div>
                      Mumbai, Maharashtra
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass-divider mb-8" />

            {/* Bottom bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
              <p>© 2026 Royal Rentals. All rights reserved.</p>
              <div className="flex gap-6">
                {['Privacy Policy', 'Terms', 'Refund Policy'].map((link) => (
                  <a key={link} href="#" className="hover:text-white/60 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
