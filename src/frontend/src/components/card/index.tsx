import React from "react";
import { CardActionArea, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import { CardWrapper, CardButtonActions } from "./styles";

interface NoteCardProps {}

export const NoteCard: React.FC<NoteCardProps> = () => {
  return (
    <CardWrapper>
      <CardActionArea disableTouchRipple={true}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://via.placeholder.com/690x388.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardButtonActions>
        <Button size="medium" color="primary">
          View
        </Button>
        <Button size="medium" color="secondary">
          Delete
        </Button>
      </CardButtonActions>
    </CardWrapper>
  );
};
