import { StoreItem } from "../api";

  export interface CartActionType {
    type: "add" | "remove",
    item: StoreItem
  }
  
  export const cartReducer = (state: StoreItem[], action: CartActionType) => {
    switch (action.type) {
      case 'add': {
        const onCart = state.filter((item) => item.id == action.item.id).length

        return onCart ? state : [...state, action.item]

      }
      case 'remove': {
        return state.filter((item) => item.id != action.item.id)
      }
      default: {
        throw Error('unknown action: ' + action.type);
      }
    }
  }