import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, Shield, Award, BookOpen, CheckCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { LearningAdvantage } from '../components/LearningAdvantage';
import { Footer } from '../components/Footer';
import { useCart } from '../context/CartContext';

export const CheckoutPage: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-[#FAFBFC] dark:bg-[#070A31] font-sans transition-colors duration-300">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-20">
        
        {/* Continue Shopping link */}
        <Link 
          to="/courses"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Continue Shopping
        </Link>

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-gray-905 dark:text-white mb-1.5">Checkout</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {cartItems.length} {cartItems.length === 1 ? 'course' : 'courses'} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] rounded-3xl p-8 max-w-xl mx-auto">
            <CheckCircle size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-bold text-gray-950 dark:text-white mb-2">Your cart is empty</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
              You do not have any courses in your cart yet. Go browse our awesome courses!
            </p>
            <Link 
              to="/courses"
              className="bg-brand-primary hover:bg-brand-primary-hover text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              Explore Courses
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column - Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] rounded-2xl p-5 flex gap-5 hover:shadow-md transition-shadow relative"
                >
                  {/* Thumbnail */}
                  <div className="w-24 h-16 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 pr-12">
                    <h3 className="font-bold text-md text-gray-900 dark:text-white line-clamp-1 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                      {item.instructor}
                    </p>
                    <span className="inline-block px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/20 text-[#1ABC9C] text-[10px] font-semibold rounded-md">
                      Beginner
                    </span>
                  </div>

                  {/* Price & Delete Row */}
                  <div className="flex flex-col justify-between items-end text-right">
                    <span className="font-extrabold text-md text-gray-950 dark:text-white">
                      ₦{item.price.toLocaleString()}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 p-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1e1e36] transition-colors cursor-pointer"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Order Summary Box */}
            <div className="space-y-6">
              
              {/* Order Summary Card */}
              <div className="bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                <h2 className="text-lg font-bold text-gray-950 dark:text-white">
                  Order Summary
                </h2>

                {/* Sub-items */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-start gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <span className="truncate flex-1">{item.title}</span>
                      <span className="font-bold flex-shrink-0 text-gray-800 dark:text-white">₦{item.price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 dark:border-[#23264A] pt-4 flex justify-between items-baseline">
                  <span className="text-md font-bold text-gray-950 dark:text-white">Total</span>
                  <span className="text-2xl font-extrabold text-gray-950 dark:text-white">
                    ₦{totalPrice.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => {
                    alert('Log in to enroll and start learning!');
                    window.location.href = '/login';
                  }}
                  className="w-full bg-[#5A12EC] hover:bg-brand-primary-hover text-white py-3.5 px-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg cursor-pointer text-sm text-center"
                >
                  Log in to Enroll
                </button>

                {/* Benefits */}
                <ul className="space-y-3.5 pt-2 text-xs text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-[#23264A]">
                  <li className="flex items-center gap-2.5">
                    <Shield size={16} className="text-[#1ABC9C] flex-shrink-0" />
                    <span>30-day money-back guarantee</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Award size={16} className="text-[#1ABC9C] flex-shrink-0" />
                    <span>Certificate of completion included</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <BookOpen size={16} className="text-[#1ABC9C] flex-shrink-0" />
                    <span>Lifetime access to all course content</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        )}
      </main>

      <LearningAdvantage />
      <Footer />
    </div>
  );
};
