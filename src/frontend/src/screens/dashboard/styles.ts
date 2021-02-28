import styled from "styled-components";
import { device } from "../../styles/media-query";
import { Grid } from "@material-ui/core";

export const GridContainer = styled(Grid).attrs({
  container: true,
})`
    padding: 40px 4% 80px;

    @media ${device.laptop} {
      padding: 100px 4%;
    }
`;