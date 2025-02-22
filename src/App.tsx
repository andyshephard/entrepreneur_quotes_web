import React from 'react';
import { Store as AppStore, Store as PlayStore, Bell, Palette, Quote } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <span className="text-5xl font-serif font-bold text-coffee-800">E.</span>
          <h1 className="text-3xl font-bold text-coffee-800">Entrepreneur Quotes</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-coffee-800 mb-6">
              Daily Inspiration for Entrepreneurs
            </h2>
            <p className="text-xl text-coffee-600 mb-8 max-w-2xl">
              Start your day with powerful quotes from successful entrepreneurs. Customize your experience with beautiful themes and personalized notifications to keep you motivated.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-2 bg-coffee-800 text-cream px-8 py-4 rounded-lg hover:bg-coffee-700 transition-colors">
                <AppStore className="w-6 h-6" />
                <span>Download for iOS</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-terra-600 text-cream px-8 py-4 rounded-lg hover:bg-terra-500 transition-colors">
                <PlayStore className="w-6 h-6" />
                <span>Download for Android</span>
              </button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex-1 relative">
            <div className="relative mx-auto w-[280px] h-[580px] bg-coffee-800 rounded-[3rem] p-4 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-coffee-800 rounded-b-3xl"></div>
              <div className="h-full w-full rounded-[2.5rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=1000&fit=crop"
                  alt="App Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Quote className="w-8 h-8 text-terra-600 mb-4" />,
              title: 'Curated Quotes',
              description: 'Hand-picked quotes from successful entrepreneurs and business leaders',
            },
            {
              icon: <Palette className="w-8 h-8 text-terra-600 mb-4" />,
              title: 'Custom Themes',
              description: 'Personalize your experience with beautiful color themes',
            },
            {
              icon: <Bell className="w-8 h-8 text-terra-600 mb-4" />,
              title: 'Smart Notifications',
              description: 'Set daily, weekly, or custom reminders for your favorite quotes',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-sand-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-coffee-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-coffee-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-coffee-600">
        <p>
          Made with ❤️ by{' '}
          <a
            href="https://spicytaco.xyz"
            className="text-terra-600 hover:text-terra-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spicy Taco
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;