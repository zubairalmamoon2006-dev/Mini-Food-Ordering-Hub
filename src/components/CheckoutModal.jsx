import { useCart } from '../context/CartContext';

export default function CheckoutModal({ open, onClose }) {
  const { cart, totalPrice, dispatch } = useCart();

  if (!open) return null;

  const handleConfirm = () => {
    dispatch({ type: 'CLEAR_CART' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 animate-fade-in" onClick={onClose} />
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-6 animate-bounce-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Order Confirmed!</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Thank you for your order</p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 mb-4 max-h-40 overflow-y-auto">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between text-sm py-1.5 text-gray-700 dark:text-gray-300">
              <span>{item.name} x{item.quantity}</span>
              <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mb-6 px-1">
          <span className="text-gray-600 dark:text-gray-400 font-medium">Total</span>
          <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        <button
          onClick={handleConfirm}
          className="w-full py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25 active:scale-[0.98]"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}
