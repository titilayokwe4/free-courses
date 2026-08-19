import React, { useEffect } from 'react';
import { X, Trash2, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    clearCart,
  } = useCart();

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

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end">

      {/* Semi-transparent Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Slide-in Drawer */}
      <div
        className="
          relative
          w-full
          max-w-md
          h-full
          bg-white
          dark:bg-[#333333]
          shadow-2xl
          flex
          flex-col
          z-10
          animate-slide-in
          transition-colors
          duration-300
          border-l
          border-gray-200
          dark:border-white/10
        "
      >

        {/* Header */}
        <div
          className="
            p-6
            border-b
            border-gray-200
            dark:border-white/10
            flex
            justify-between
            items-center
            bg-gray-50
            dark:bg-[#2A2A2A]
          "
        >
          <div className="flex items-center gap-3">

            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Your Cart
            </span>

            {cartItems.length > 0 && (
              <span
                className="
                  bg-brand-primary
                  text-[#333333]
                  text-xs
                  font-bold
                  px-2.5
                  py-1
                  rounded-full
                "
              >
                {cartItems.length}
              </span>
            )}

          </div>

          <button
            onClick={closeCart}
            className="
              text-gray-500
              hover:text-[#333333]
              dark:text-gray-400
              dark:hover:text-white
              p-1
              rounded-lg
              hover:bg-gray-100
              dark:hover:bg-white/10
              transition-colors
              cursor-pointer
            "
            aria-label="Close cart"
          >
            <X size={22} />
          </button>

        </div>


        {/* Content / Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">

          {cartItems.length === 0 ? (

            /* Empty Cart */
            <div className="h-full flex flex-col items-center justify-center text-center">

              <div
                className="
                  w-16
                  h-16
                  bg-brand-secondary/10
                  dark:bg-brand-secondary/15
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-brand-secondary
                  mb-4
                "
              >
                <Lock size={28} />
              </div>

              <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                Your cart is empty
              </h3>

              <p className="text-gray-500 dark:text-gray-300 text-sm max-w-xs">
                Explore our courses and practice labs to find items to add
                to your cart.
              </p>

            </div>

          ) : (

            /* Cart Items */
            cartItems.map((item) => (
              <div
                key={item.id}
                className="
                  bg-white
                  dark:bg-[#2A2A2A]
                  border
                  border-gray-200
                  dark:border-white/10
                  rounded-xl
                  p-4
                  flex
                  gap-4
                  hover:shadow-md
                  transition-shadow
                  relative
                  group
                "
              >

                {/* Image */}
                <div
                  className="
                    w-20
                    h-14
                    rounded-lg
                    overflow-hidden
                    bg-gray-100
                    dark:bg-[#333333]
                    flex-shrink-0
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>


                {/* Details */}
                <div className="flex-1 min-w-0 pr-6">

                  <h4
                    className="
                      font-semibold
                      text-sm
                      text-gray-900
                      dark:text-white
                      line-clamp-1
                      mb-0.5
                    "
                    title={item.title}
                  >
                    {item.title}
                  </h4>

                  <p className="text-xs text-gray-500 dark:text-gray-300 mb-2">
                    {item.instructor}
                  </p>

                  <p className="text-sm font-bold text-brand-secondary">
                    ₦{item.price.toLocaleString()}
                  </p>

                </div>


                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                    hover:text-red-500
                    dark:text-gray-400
                    dark:hover:text-red-400
                    p-2
                    rounded-lg
                    hover:bg-gray-50
                    dark:hover:bg-white/10
                    transition-colors
                    cursor-pointer
                  "
                  aria-label={`Remove ${item.title} from cart`}
                >
                  <Trash2 size={16} />
                </button>

              </div>
            ))

          )}

        </div>


        {/* Footer / Summary */}
        {cartItems.length > 0 && (

          <div
            className="
              p-6
              border-t
              border-gray-200
              dark:border-white/10
              bg-gray-50
              dark:bg-[#2A2A2A]
              space-y-4
            "
          >

            <div className="flex justify-between items-center text-sm">

              <span className="text-gray-600 dark:text-gray-300 font-medium">
                Total ({cartItems.length}{' '}
                {cartItems.length === 1 ? 'course' : 'courses'})
              </span>

              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ₦{totalPrice.toLocaleString()}
              </span>

            </div>


            {/* Checkout Button */}
            <button
              onClick={() => {
                closeCart();
                navigate('/checkout');
              }}
              className="
                w-full
                bg-brand-primary
                hover:bg-brand-primary-hover
                text-[#333333]
                py-3
                px-4
                rounded-xl
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                shadow-lg
                hover:shadow-xl
                transition-all
                cursor-pointer
                text-sm
              "
            >
              <Lock size={16} />
              <span>Proceed to Checkout</span>
            </button>


            {/* Clear Cart */}
            <div className="text-center">

              <button
                onClick={clearCart}
                className="
                  text-xs
                  text-gray-500
                  hover:text-[#333333]
                  dark:text-gray-400
                  dark:hover:text-white
                  font-medium
                  hover:underline
                  transition-colors
                  cursor-pointer
                "
              >
                Clear cart
              </button>

            </div>

          </div>

        )}

      </div>


      {/* Slide-in Animation */}
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