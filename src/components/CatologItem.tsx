import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';
import { addProductToCardRequest } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

   const hasFailedStockCheck = useSelector<IState, boolean>(state => {
      return state.cart.failedStockCheck.includes(product.id);
   });

  const handleAddProductToCard = useCallback(
    () => {
      dispatch(addProductToCardRequest(product));
    },
    [dispatch, product],
  )

  return (
    <article key={product.id}>
    <strong>{product.title}</strong>{" - "}
    <span>{product.price}</span> {" "}
    <button onClick={handleAddProductToCard} type="button">Comprar</button>
    { hasFailedStockCheck && <span style={{ color: 'red' }}> Falta de estoque </span> }
  </article>
  );
}

export default CatalogItem;