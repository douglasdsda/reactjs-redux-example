import { IProduct, ActionTypes } from './types';

export function addProductToCardRequest(product: IProduct){
 return {
   type: ActionTypes.addProductToCartRequest,
   payload: {
     product,
   }
 };
}

export function addProductToCardSucess(product: IProduct){
 return {
   type: ActionTypes.addProductToCartSuccess,
   payload: {
     product,
   }
 };
}

export function addProductToCardFailure(productId: number){
 return {
   type: ActionTypes.addProductToCartFailure,
   payload: {
    productId,
   }
 };
}

