import React from "react";
import { Input, InputBlock } from "./styles";

interface SearchInputProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ label, value, onChange }) => {
  return (
    <InputBlock>
      <Input label={label} variant="outlined" value={value} onChange={(e) => onChange(e.target.value)} />
    </InputBlock>
  );
};
