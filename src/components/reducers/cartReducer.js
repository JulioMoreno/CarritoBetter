import { ADD_TO_CART} from '../actions/action-types/cart-actions';

const initState = {
  items: [
    {
      id: 1,
      name: "Servi Carrito",
      img:
        "https://www.betterware.com.mx/app/templates/better/images/productos/20833tb.jpg",
      precio: 799,
    },
    {
      id: 2,
      name: "Tabla chef",
      img:
        "https://www.betterware.com.mx/app/templates/better/images/productos/20535tb2.jpg",
      precio: 249.00,
    },
    {
      id: 3,
      name: "Multi Alacena",
      img:
        "https://www.betterware.com.mx//app/templates/better/images/productos/20838tb2.jpg",
      precio: 999,
    },
    {
      id: 4,
      name: "Gabinete Resist",
      img:
        "https://www.betterware.com.mx/app/templates/better/images/productos/20837tb2.jpg",
      precio: 549.00,
    },
    {
      id: 5,
      name: "Deco Frutas",
      img:
        "https://www.betterware.com.mx/app/templates/better/images/productos/20538tb2.jpg",
      precio: 189.00,
    },
    {
      id: 6,
      name: "Minitas",
      img:
        "https://www.betterware.com.mx/app/templates/better/images/productos/20025tb.jpg",
      precio: 69.00,
    },
  ],
  addedItems: [],
  total: 0,
};
const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  } else {
    return state;
  }
};
export default cartReducer;
