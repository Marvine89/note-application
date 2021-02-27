import { CircularProgress } from "@material-ui/core";
import React from "react";
import { LoaderWrapper } from "./styles";

export const LoadingContainer: React.FC<{ height?: number }> = ({ height }) => {
  return (
    <LoaderWrapper height={height}>
      <CircularProgress />
    </LoaderWrapper>
  );
};
