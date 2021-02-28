import styled from "styled-components";
import { Modal } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { APP_COLORS } from "../../config/colors";
import { device } from "../../styles/media-query";

export const ModalWrapper = styled(Modal).attrs({
  "aria-labelledby": "add-note",
  "aria-describedby": "add-note-modal",
  closeAfterTransition: true,
})`
  display: flex;
  align-items: center;
  justify-content: center;

  * {
    outline: none !important;
  }
`;

export const ModalContainer = styled.div`
    background-color: ${APP_COLORS.white};
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
    padding: 0px 10px 6px;
    width: 90%;
    margin: auto;
    box-sizing: border-box;

    @media ${device.tablet} {
      width: 450px;
      padding: 0px 20px 20px;
    }
`;

export const ModalCloseIconBlock = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   padding: 20px 0px 2px;
`;

export const CloseIconModal = styled(CloseIcon)`
  font-size: 40px;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    transition: all .2s ease-in-out;
    color: ${APP_COLORS.blue};
  }
`;