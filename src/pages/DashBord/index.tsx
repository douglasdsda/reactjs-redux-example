import React, { useEffect, useState  } from "react";

import { Container, ListProducts } from "./styles";
 import Cart from "../../components/Cart";
import Catalog from "../../components/Catalog";
import Header from "../../Header";
import logo from "../../assets/logo.png";
import ProductItem from "../../components/ProductItem";
import api from "../../services/api";
import { IProduct } from '../../store/modules/cart/types';
const DashBord: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    })
 }, [ ])

  return (
    <Container>
      <Header />
      {/* <News /> */}
      {/* <Catalog />  */}
       {/* <Cart /> */}

      <ListProducts>
      {catalog.map(product =>  (
        <ProductItem  key={product.id} product={product} />
      ))}
      </ListProducts>
    </Container>
  );
};

export default DashBord;
