import React from 'react';
import { Store as AppStore, Store as PlayStore, Bell, Palette, Quote } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <img
            src="/images/icon.png"
            alt="Entrepreneur Quotes Logo"
            className="w-12 h-12 object-contain"
          />
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:justify-start">
              <a
                href="https://apple.co/3X8MT2P"
                className="hover:opacity-80 transition-opacity w-fit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/app_store.webp"
                  alt="Download on the App Store"
                  className="h-[40px] w-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity w-fit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/play_store.webp"
                  alt="Get it on Google Play"
                  className="h-[40px] w-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </a>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex-1 relative flex justify-center items-center">
            <div className="relative w-[300px] h-auto">
              <img
                src="/images/iphone.webp"
                alt="Entrepreneur Quotes App Screenshot"
                className="w-full h-auto object-contain"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/fallback-mockup.png';
                }}
              />
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
      <footer className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Left side - Made with love */}
          <div className="text-coffee-600">
            Made with ❤️ by{' '}
            <a
              href="https://spicytaco.xyz"
              className="text-terra-600 hover:text-terra-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spicy Taco
            </a>
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/entrepreneurapp/"
              className="text-coffee-600 hover:text-terra-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="https://www.facebook.com/entrepreneurquotesapp"
              className="text-coffee-600 hover:text-terra-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a
              href="mailto:hello@spicytaco.xyz"
              className="text-coffee-600 hover:text-terra-600 transition-colors"
              aria-label="Contact us via email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;