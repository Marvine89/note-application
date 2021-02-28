import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAddNoteModal } from "../../redux/modules/modal/actions";
import { getShowAddNoteModal } from "../../redux/modules/modal/selectors";
import { DefaultModal } from "../default-modal";
import { ButtonBlock, Input, InputContainer, ModalButton, Title } from "./styles";

export const AddNoteModal: React.FC = () => {
  const dispatch = useDispatch();
  const open = useSelector(getShowAddNoteModal);
  if (!open) return null;

  const handleClose = () => {
    dispatch(showAddNoteModal(false));
  };

  return (
    <DefaultModal open={open} onClose={handleClose}>
      <Title>Add New Note</Title>
      <InputContainer>
        <Input label="Note title" required />
        <Input label="Note sub-title" />
        <Input label="Note" placeholder="Enter your note here..." multiline rows={4} required />
        <ButtonBlock>
          <ModalButton color="secondary" onClick={handleClose}>
            Cancel
          </ModalButton>
          <ModalButton color="primary">Add note</ModalButton>
        </ButtonBlock>
      </InputContainer>
    </DefaultModal>
  );
};
