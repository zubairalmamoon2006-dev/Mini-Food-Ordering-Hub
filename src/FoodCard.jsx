import { useCart } from '../context/CartContext';

export default function FoodCard({ item }) {
  const { cart, dispatch } = useCart();
  const inCart = cart.find(c => c.id === item.id);

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-3 left-3 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
          {item.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg leading-tight mb-1">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-1">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
            ${item.price.toFixed(2)}
          </span>
          {inCart ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch({ type: 'DECREMENT', payload: { id: item.id } })}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900 dark:hover:text-primary-400 transition-colors font-medium"
              >
                -
              </button>
              <span className="w-6 text-center font-semibold text-gray-800 dark:text-gray-200">
                {inCart.quantity}
              </span>
              <button
                onClick={() => dispatch({ type: 'INCREMENT', payload: { id: item.id } })}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors font-medium"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => dispatch({ type: 'ADD_ITEM', payload: item })}
              className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25 active:scale-95"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
