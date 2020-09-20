import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCard } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

// import { Container } from './styles';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCard = useCallback(
    () => {
      dispatch(addProductToCard(product));
    },
    [dispatch, product],
  )

  return (
    <article key={product.id}>
    <strong>{product.title}</strong>{" - "}
    <span>{product.price}</span> {" "}
    <button onClick={handleAddProductToCard} type="button">Comprar</button>
  </article>
  );
}

export default CatalogItem;