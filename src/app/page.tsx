'use client'

import React, { useState, useEffect } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown, 
  Zap, 
  Layers, 
  Microscope, 
  Cpu, 
  Thermometer,
  Atom,
  Menu,
  X
} from 'lucide-react'

const ChemTechConsultancy = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ]

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electrochemistry",
      description: "Advanced electrochemical analysis, battery technology development, corrosion studies, and electroplating optimization for industrial applications."
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Materials Science",
      description: "Comprehensive materials characterization, property analysis, failure investigation, and materials selection for challenging chemical environments."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Thin Film Deposition",
      description: "Expert guidance on PVD, CVD, ALD processes, coating optimization, adhesion enhancement, and surface engineering solutions."
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Materials Characterisation",
      description: "State-of-the-art analytical techniques including XRD, SEM, XPS, FTIR, and thermal analysis for comprehensive materials understanding."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Electronic Devices",
      description: "Development and optimization of sensors, semiconductors, photovoltaic cells, and electronic components for chemical applications."
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Thermoelectrics",
      description: "Thermoelectric materials development, waste heat recovery systems, and energy harvesting solutions for industrial processes."
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Atom className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">ChemTech Solutions</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-primary-600"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Atom className="w-24 h-24 text-primary-600 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              ChemTech Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert consultancy services for practical and technological challenges in the chemistry industry
            </p>
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Discover Our Expertise
              <ChevronDown className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide specialized consultancy services to solve complex practical and technological 
              challenges in the chemistry industry, leveraging cutting-edge scientific expertise and 
              industry experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Advanced electrochemical processes and energy storage solutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Materials science and engineering for industrial applications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Thin film technologies and surface engineering</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Comprehensive materials characterization and analysis</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Electronic device development and optimization</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Thermoelectric materials and energy harvesting systems</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Industry Experience</h4>
                  <p className="text-gray-700 text-sm">Decades of combined experience in chemistry, materials science, and industrial applications.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Scientific Rigor</h4>
                  <p className="text-gray-700 text-sm">Evidence-based solutions backed by rigorous scientific methodology and testing.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Practical Solutions</h4>
                  <p className="text-gray-700 text-sm">Focus on implementable solutions that address real-world industrial challenges.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Custom Approach</h4>
                  <p className="text-gray-700 text-sm">Tailored consulting services adapted to your specific needs and constraints.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consultancy services covering the full spectrum of chemistry industry challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to solve your chemistry industry challenges? Contact us for a consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
                  >
                    <option value="">Select a service...</option>
                    <option value="electrochemistry">Electrochemistry</option>
                    <option value="materials-science">Materials Science</option>
                    <option value="thin-film">Thin Film Deposition</option>
                    <option value="characterisation">Materials Characterisation</option>
                    <option value="electronic-devices">Electronic Devices</option>
                    <option value="thermoelectrics">Thermoelectrics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
                    placeholder="Tell us about your project or challenge..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:contact@chemtech-solutions.com" className="text-primary-600 hover:text-primary-700">
                      contact@chemtech-solutions.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:+1234567890" className="text-primary-600 hover:text-primary-700">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-700">
                      123 Innovation Drive<br />
                      Science Park, ST 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 h-64 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">Replace with actual map integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Atom className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold">ChemTech Solutions</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2025 ChemTech Solutions. All rights reserved.</p>
              <p className="text-sm text-gray-500 mt-1">Expert Chemistry Industry Consultancy</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ChemTechConsultancy