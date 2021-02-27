import styled from "styled-components";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";

export const CardWrapper = styled(Card)`
  max-width: 340px;
  min-width: 280px;
`;

export const CardButtonActions = styled.div`
  padding: 4px 4px;
  display: flex;
  justify-content: space-between;
`;


export const NoteText = styled(Typography).attrs({
  variant: "body2",
  color: "textSecondary",
  component: "p"
})`
  min-height: 80px;
`;