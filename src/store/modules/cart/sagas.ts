import { all, takeLatest } from 'redux-saga/effects';
import { addProductToCard } from './actions';

type CheckProductStockRequest = ReturnType<typeof addProductToCard>;

function* checkProductStock({ payload }: CheckProductStockRequest){
  console.log('payload', payload)
  console.log('adicionou ao carrinho.');
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CARD', checkProductStock)
]);