import React from 'react';
import { Rocket, Target, TrendingUp, Users, Mail, Phone, MapPin, CheckCircle, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      {/* Hero Section with Background */}
      <div 
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(11, 0, 51, 0.85), rgba(26, 0, 102, 0.9)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute top-0 w-full py-6">
          <nav className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-electric-400" />
              <span className="text-2xl font-bold text-white">Qik Launch Marketing</span>
            </div>
          </nav>
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Leads Ready to Close <span className="text-accent-500">Right Now</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your potential into profit with our high-value lead generation service. We don't just find leads - we deliver ready-to-convert opportunities.
            </p>
            <button className="bg-accent-500 hover:bg-accent-400 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-accent-500/20">
              Start Converting Today
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-primary-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Why Choose Qik Launch Marketing?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Target className="h-12 w-12 text-electric-400" />,
                title: "Precision Targeting",
                description: "We identify and engage only the most qualified leads in your market"
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-electric-400" />,
                title: "Rapid Scaling",
                description: "Scale your business quickly with our proven lead generation system"
              },
              {
                icon: <Users className="h-12 w-12 text-electric-400" />,
                title: "High-Value Prospects",
                description: "Connect with decision-makers who are ready to invest"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-primary-800/50 p-8 rounded-xl hover:transform hover:scale-105 transition-all border border-electric-400/20 hover:border-electric-400/40 hover:shadow-lg hover:shadow-electric-400/10">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-primary-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "C. Irwin",
                company: "Global Personnel",
                text: "Qik Launch transformed our lead generation process. Our sales team now has a constant flow of qualified prospects."
              },
              {
                name: "W. Kang",
                company: "Alchemist",
                text: "The quality of leads we receive is exceptional. Our conversion rates have doubled since partnering with Qik Launch."
              },
              {
                name: "M. Rigby",
                company: "Schlam Cru",
                text: "Their approach to lead generation is revolutionary. We're seeing unprecedented growth in our sales pipeline."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-primary-900/50 p-8 rounded-xl relative border border-accent-500/20">
                <div className="absolute -top-4 left-4">
                  <Star className="h-8 w-8 text-accent-500 fill-current" />
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div>
                    <p className="text-white font-bold">{testimonial.name}</p>
                    <p className="text-accent-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-primary-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Our Process</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              "Advanced lead scoring and qualification",
              "Real-time lead tracking and analytics",
              "Multi-channel engagement strategies",
              "Customized lead nurturing campaigns",
              "Integration with your existing CRM",
              "24/7 lead monitoring and optimization"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary-800/30 transition-all">
                <CheckCircle className="h-6 w-6 text-electric-400 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary-800 py-12 border-t border-electric-400/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-8 md:mb-0">
              <Rocket className="h-8 w-8 text-electric-400" />
              <span className="text-2xl font-bold text-white">Qik Launch Marketing</span>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-5 w-5 text-accent-500" />
                <a href="mailto:terry@qiklaunchmarketing.com" className="hover:text-electric-400 transition-colors">
                  terry@qiklaunchmarketing.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-5 w-5 text-accent-500" />
                <a href="tel:0223442729" className="hover:text-electric-400 transition-colors">
                  022 344 2729
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-5 w-5 text-accent-500" />
                <span>Auckland, New Zealand</span>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            © {new Date().getFullYear()} Qik Launch Marketing. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;