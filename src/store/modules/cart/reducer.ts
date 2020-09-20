import { ICartState } from './types';
import { Reducer } from "redux";
import produce from "immer";

const INITIAL_STATE: ICartState = {
  items: []
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CARD': {

        const { product } = action.payload;

        const productCartIndex = draft.items.findIndex(item => item.product.id === product.id);

        if(productCartIndex >= 0){
        draft.items[productCartIndex].quantity += 1;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }
          
        break;
      }
      default: {
        return draft;
      }
    }
  });

}

export default cart;