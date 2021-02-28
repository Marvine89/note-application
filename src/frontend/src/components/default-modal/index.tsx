import React from "react";
import { Backdrop } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import { CloseIconModal, ModalCloseIconBlock, ModalContainer, ModalWrapper } from "./styles";

interface DefaultModalProps {
  open: boolean;
  onClose: () => void;
}

export const DefaultModal: React.FC<DefaultModalProps> = ({ open, onClose, children }) => {
  return (
    <ModalWrapper
      open={open}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <ModalContainer>
          <ModalCloseIconBlock>
            <CloseIconModal onClick={onClose} />
          </ModalCloseIconBlock>
          {children}
        </ModalContainer>
      </Fade>
    </ModalWrapper>
  );
};
