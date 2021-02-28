import { Tooltip } from "@material-ui/core";
import styled from "styled-components";
import { device } from "../../styles/media-query";

export const FloatingButtonBlock = styled(Tooltip)`
  position: fixed;
  bottom: 3%;
  right: 20px;
  z-index: 1000;

  @media ${device.tablet} {
    right: 35px;
  }
`;
