import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Trash2,
  Shield,
  Award,
  BookOpen,
  CheckCircle
} from 'lucide-react';
import { Header } from '../components/Header';
import { LearningAdvantage } from '../components/LearningAdvantage';
import { Footer } from '../components/Footer';
import { useCart } from '../context/CartContext';

export const CheckoutPage: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-background text-text-primary font-sans transition-colors duration-300">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-20">

        {/* Continue Shopping */}
        <Link
          to="/courses"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Continue Shopping
        </Link>

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-text-primary mb-1.5">
            Checkout
          </h1>

          <p className="text-text-secondary text-sm">
            {cartItems.length}{' '}
            {cartItems.length === 1 ? 'course' : 'courses'} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* =========================================================
             EMPTY CART
          ========================================================= */
          <div className="text-center py-20 bg-surface border border-border rounded-3xl p-8 max-w-xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-surface-hover flex items-center justify-center">
              <CheckCircle
                size={32}
                className="text-brand-secondary"
              />
            </div>

            <h3 className="text-lg font-bold text-text-primary mb-2">
              Your cart is empty
            </h3>

            <p className="text-text-secondary text-sm mb-6">
              You do not have any courses in your cart yet.
              Go browse our awesome courses!
            </p>

            <Link
              to="/courses"
              className="inline-flex items-center justify-center bg-brand-primary hover:bg-brand-primary-hover text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              Explore Courses
            </Link>
          </div>
        ) : (
          /* =========================================================
             CHECKOUT CONTENT
          ========================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* =====================================================
                LEFT COLUMN — CART ITEMS
            ===================================================== */}
            <div className="lg:col-span-2 space-y-4">

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="
                    bg-surface
                    border border-border
                    rounded-2xl
                    p-5
                    flex gap-5
                    hover:shadow-md
                    transition-shadow
                    relative
                  "
                >

                  {/* Thumbnail */}
                  <div className="w-24 h-16 rounded-xl overflow-hidden bg-surface-hover flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 pr-12">
                    <h3 className="font-bold text-md text-text-primary line-clamp-1 mb-1">
                      {item.title}
                    </h3>

                    <p className="text-xs text-text-secondary mb-3">
                      {item.instructor}
                    </p>

                    <span className="
                      inline-block
                      px-2.5 py-0.5
                      bg-brand-secondary/10
                      text-brand-secondary
                      text-[10px]
                      font-semibold
                      rounded-md
                    ">
                      Beginner
                    </span>
                  </div>

                  {/* Price & Delete */}
                  <div className="flex flex-col justify-between items-end text-right">

                    <span className="font-extrabold text-md text-text-primary">
                      ₦{item.price.toLocaleString()}
                    </span>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="
                        text-text-tertiary
                        hover:text-red-500
                        p-1.5
                        rounded-lg
                        hover:bg-surface-hover
                        transition-colors
                        cursor-pointer
                      "
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>

                  </div>
                </div>
              ))}

            </div>

            {/* =====================================================
                RIGHT COLUMN — ORDER SUMMARY
            ===================================================== */}
            <div className="space-y-6">

              <div className="
                bg-surface
                border border-border
                rounded-3xl
                p-6 md:p-8
                shadow-sm
                space-y-6
              ">

                {/* Heading */}
                <h2 className="text-lg font-bold text-text-primary">
                  Order Summary
                </h2>

                {/* Items */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="
                        flex
                        justify-between
                        items-start
                        gap-4
                        text-sm
                        text-text-secondary
                      "
                    >
                      <span className="truncate flex-1">
                        {item.title}
                      </span>

                      <span className="font-bold flex-shrink-0 text-text-primary">
                        ₦{item.price.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="
                  border-t
                  border-border
                  pt-4
                  flex
                  justify-between
                  items-baseline
                ">
                  <span className="text-md font-bold text-text-primary">
                    Total
                  </span>

                  <span className="text-2xl font-extrabold text-text-primary">
                    ₦{totalPrice.toLocaleString()}
                  </span>
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    alert('Log in to enroll and start learning!');
                    window.location.href = '/login';
                  }}
                  className="
                    w-full
                    bg-brand-primary
                    hover:bg-brand-primary-hover
                    text-white
                    py-3.5
                    px-4
                    rounded-xl
                    font-bold
                    transition-all
                    shadow-md
                    hover:shadow-lg
                    cursor-pointer
                    text-sm
                    text-center
                  "
                >
                  Log in to Enroll
                </button>

                {/* Benefits */}
                <ul className="
                  space-y-3.5
                  pt-2
                  text-xs
                  text-text-secondary
                  border-t
                  border-border
                ">

                  <li className="flex items-center gap-2.5">
                    <Shield
                      size={16}
                      className="text-brand-secondary flex-shrink-0"
                    />
                    <span>
                      30-day money-back guarantee
                    </span>
                  </li>

                  <li className="flex items-center gap-2.5">
                    <Award
                      size={16}
                      className="text-brand-secondary flex-shrink-0"
                    />
                    <span>
                      Certificate of completion included
                    </span>
                  </li>

                  <li className="flex items-center gap-2.5">
                    <BookOpen
                      size={16}
                      className="text-brand-secondary flex-shrink-0"
                    />
                    <span>
                      Lifetime access to all course content
                    </span>
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