import styled from "styled-components";

export const LoaderWrapper = styled.div<{ height?: number }>`
  width: 100%;
  height: ${({ height }) => height || 100}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;