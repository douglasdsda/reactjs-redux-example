import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import { useSelector } from "react-redux";
import { IState } from "../../store";
import { ICardItem } from "../../store/modules/cart/types";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen?: () => void;
}

const Modal: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);
  const cart = useSelector<IState, ICardItem[]>((state) => state.cart.items);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setModalStatus(false);
    if (setIsOpen) setIsOpen();
  };

  return (
    <div>
      <Dialog
        onEscapeKeyDown={handleClose}
        onExit={handleClose}
        onClose={handleClose}
        open={modalStatus}
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Carrinho
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                { cart.length > 0 ? cart.map((item) => (
                  <tr key={item.product.id}>
                    <td>{item.product.title}</td>
                    <td>{item.product.price}</td>
                    <td>{item.quantity}</td>
                    <td>{(item.product.price * item.quantity).toFixed(2)}</td>
                  </tr>
                )) : (<div>Sem produtos</div>)}
              </tbody>
            </table>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Efetuar Compra
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
