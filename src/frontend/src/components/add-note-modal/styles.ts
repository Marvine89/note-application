import styled from "styled-components";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { device } from "../../styles/media-query";
import { APP_COLORS } from "../../config/colors";

export const Title = styled.h2`
  margin: 0px 0px 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const InputForm = styled.form`
  width: 100%;
  padding: 20px 0px 0px;
  box-sizing: border-box;
`;

export const InputGroup = styled.div`
  margin-bottom: 30px;
  position: relative;
`;

export const Input = styled(TextField).attrs({
  variant: "outlined",
}) <{ error?: boolean }>`
  width: 100%;
`;

export const InputError = styled.p`
  position: absolute;
  left: 2px;
  bottom: -27px;
  width: 100%;
  color: ${APP_COLORS.red};
  font-size: 11px;
  letter-spacing: .5px;
`;

export const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const ModalButton = styled(Button).attrs({
  variant: "contained"
})`
  min-width: 45%;

  &:last-child {
    margin-left: 30px;
  }

  @media ${device.tablet} {
    min-width: 150px;
  }
`;