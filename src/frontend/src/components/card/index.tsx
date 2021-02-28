import React from "react";
import { CardActionArea, CardContent, CardMedia, Button, Typography, CircularProgress } from "@material-ui/core";
import { CardWrapper, CardButtonActions, NoteText } from "./styles";
import { NoteResponse } from "../../redux/modules/note/types";
import { truncate } from "../../utils/helpers/helpers";

interface NoteCardProps {
  note: NoteResponse;
  onClick: () => void;
  onDelete: () => void;
  isDeleting: boolean;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note, onClick, onDelete, isDeleting }) => {
  return (
    <CardWrapper>
      <CardActionArea disableTouchRipple={true} onClick={onClick}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://via.placeholder.com/1440px288.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {note.title}
          </Typography>
          <NoteText>{truncate(note.text, 135)}</NoteText>
        </CardContent>
      </CardActionArea>
      <CardButtonActions>
        <Button size="medium" color="primary" onClick={onClick}>
          View
        </Button>
        <Button size="medium" color="secondary" onClick={onDelete}>
          {isDeleting ? <CircularProgress color="primary" /> : "Delete"}
        </Button>
      </CardButtonActions>
    </CardWrapper>
  );
};
