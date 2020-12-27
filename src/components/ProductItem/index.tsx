import React, { useCallback, useEffect, useState } from "react";
import { Container } from "./styles";
import { IProduct } from "../../store/modules/cart/types";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal";
import { addProductToCardRequest } from "../../store/modules/cart/actions";
import { IState } from "../../store";
interface ProdutoItemProps {
  product: IProduct;
}

const ProductItem: React.FC<ProdutoItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    dispatch(addProductToCardRequest(product));
    setModalOpen(true);
  }, [dispatch, product]);
  function toggleModal(): void {
    setModalOpen(false);
  }

  const hasFailedStockCheck = useSelector<IState, boolean>((state) => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  //  const handleAddProductToCard = useCallback(
  //    () => {
  //      dispatch(addProductToCardRequest(product));
  //    },
  //    [dispatch, product],
  //  )

 

  return (
    <>
      <Container onClick={handleOpenModal}>
        <div>
          <strong>#{product.id}</strong>
          <h1>{product.title}</h1>
        </div>
        <img src={product.img} alt="" />
        <div>
          <strong>
            {!hasFailedStockCheck ? (
              <span>Disponivel</span>
            ) : (
              <span>Indisponivel</span>
            )}{" "}
          </strong>
          <span>R$ {product.price.toFixed(2)}</span>
        </div>
      </Container>
      <Modal isOpen={modalOpen} setIsOpen={toggleModal} />
    </>
  );
};

export default ProductItem;
