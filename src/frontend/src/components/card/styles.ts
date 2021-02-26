import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const CardWrapper = styled(Card)`
  max-width: 340px;
  min-width: 280px;
`;

export const CardButtonActions = styled.div`
  padding: 4px 4px;
  display: flex;
  justify-content: space-between;
`;