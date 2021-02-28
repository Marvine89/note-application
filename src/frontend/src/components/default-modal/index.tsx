import React from "react";
import { Backdrop } from "@material-ui/core";

import { useSpring, animated } from "react-spring/web.cjs";
import { CloseIconModal, ModalCloseIconBlock, ModalContainer, ModalWrapper } from "./styles";

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div style={style} {...other}>
      {children}
    </animated.div>
  );
});

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
