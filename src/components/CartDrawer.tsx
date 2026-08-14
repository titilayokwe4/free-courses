import React, { useEffect } from 'react';
import { X, Trash2, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { cartItems, isCartOpen, closeCart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  // Prevent background scrolling when cart drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Semi-transparent Backdrop overlay - NO BLUR GLASS EFFECT */}
      <div 
        className="fixed inset-0 bg-black/60 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Slide-in Drawer Container */}
      <div className="relative w-full max-w-md h-full bg-white dark:bg-[#070A31] shadow-2xl flex flex-col z-10 animate-slide-in transition-colors duration-300 border-l border-gray-100 dark:border-[#23264A]">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-[#23264A] flex justify-between items-center bg-gray-50 dark:bg-[#11143B]">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-gray-900 dark:text-white">Your Cart</span>
            {cartItems.length > 0 && (
              <span className="bg-brand-primary text-white text-xs font-bold px-2.5 py-1 rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>
          <button 
            onClick={closeCart}
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-[#1e1e36] transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content / Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-[#11143B] rounded-full flex items-center justify-center text-gray-400 mb-4">
                <Lock size={28} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">Your cart is empty</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                Explore our courses and practice labs to find items to add to your cart.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] rounded-xl p-4 flex gap-4 hover:shadow-md transition-shadow relative group"
              >
                {/* Image */}
                <div className="w-20 h-14 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 pr-6">
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white line-clamp-1 mb-0.5" title={item.title}>
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {item.instructor}
                  </p>
                  <p className="text-sm font-bold text-[#1ABC9C]">
                    ₦{item.price.toLocaleString()}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1e1e36] transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer / Summary Area */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-200 dark:border-[#23264A] bg-gray-50 dark:bg-[#11143B] space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Total ({cartItems.length} {cartItems.length === 1 ? 'course' : 'courses'})
              </span>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ₦{totalPrice.toLocaleString()}
              </span>
            </div>

            <button
              onClick={() => {
                closeCart();
                navigate('/checkout');
              }}
              className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer text-sm"
            >
              <Lock size={16} />
              <span>Proceed to Checkout</span>
            </button>

            <div className="text-center">
              <button
                onClick={clearCart}
                className="text-xs text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white font-medium hover:underline transition-colors"
              >
                Clear cart
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Local keyframes style for slide-in animation */}
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
