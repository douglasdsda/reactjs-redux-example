import React, {useState , useCallback } from "react";
 
import { Container, Menu, Line } from "./styles";

import logo from "../assets/logo.png";
import { Button } from "@material-ui/core";
import Modal from "../components/Modal";

const Header: React.FC = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = useCallback(
    () => {
      setModalOpen(true);
    },
    [ ],
  )

  function toggleModal(): void {
    setModalOpen(false);
  }

  return (
    <>
    <Container>
      <Menu>
        <img src={logo} alt="Logo" />
        <div>
        <Button onClick={handleOpenModal} variant="contained">Carrinho</Button>
        <Button variant="contained">Sobre</Button>
        </div>
      </Menu>
      <Line />
    </Container>
     <Modal isOpen={modalOpen} setIsOpen={toggleModal} />
    </>
     
  );
};

export default Header;
