import styled from "styled-components";
import Tooltip from '@material-ui/core/Tooltip';
import { device } from "../../css/media-query";
import { Grid } from "@material-ui/core";

export const GridContainer = styled(Grid).attrs({
  container: true,
})`
    padding: 40px 4%;

    @media ${device.laptop} {
      padding: 100px 4%;
    }
`;

export const FloatingButtonBlock = styled(Tooltip)`
  position: fixed;
  bottom: 3%;
  right: 20px;
  z-index: 1000;

  @media ${device.tablet} {
    right: 35px;
  }
`;
