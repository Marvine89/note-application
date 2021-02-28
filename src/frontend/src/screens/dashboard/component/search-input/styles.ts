import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { device } from "../../../../styles/media-query";

export const InputBlock = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 10px;
margin-bottom: 20px;

@media ${device.tablet} {
  margin-bottom: 50px;
}
`;

export const Input = styled(TextField)`
width: 220px;

@media ${device.tablet} {
  width: 400px;
}
`;