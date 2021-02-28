import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import { showEditNoteModal, showSnackBar } from "../../redux/modules/modal/actions";
import { getShowEditNoteModal } from "../../redux/modules/modal/selectors";
import { DefaultModal } from "../default-modal";
import { ButtonBlock, Input, InputForm, InputError, InputGroup, ModalButton, Title } from "./styles";
import { editNoteRequest } from "../../utils/api/note";
import { CircularProgress } from "@material-ui/core";
import { getNote } from "../../redux/modules/note/selectors";
import { Note } from "../../redux/modules/note/types";

const FORM_SCHEMA = Yup.object().shape({
  id: Yup.string().required("The title is required"),
  title: Yup.string().required("The title is required"),
  subTitle: Yup.string(),
  text: Yup.string().required("The note text is required"),
});

interface FormState {
  id?: string;
  title?: string;
  subTitle?: string;
  text?: string;
}

export const EditNoteModal: React.FC = () => {
  const dispatch = useDispatch();
  const open = useSelector(getShowEditNoteModal);
  const note = useSelector(getNote);
  const { values, touched, errors, isValid, handleChange, handleBlur, handleSubmit, setValues } = useFormik<FormState>({
    validationSchema: FORM_SCHEMA,
    validateOnChange: true,
    initialValues: {
      id: note?.id,
      title: note?.title,
      subTitle: note?.subTitle,
      text: note?.text,
    },
    onSubmit: submitNote,
  });

  useEffect(() => {
    setValues({
      id: note?.id,
      title: note?.title,
      subTitle: note?.subTitle,
      text: note?.text,
    });
  }, [note, setValues]);

  const { mutate, isLoading } = useMutation(editNoteRequest, { onSuccess: onSuccess });
  const isFormValid = isValid && values.id && values.title && values.subTitle && values.text;

  function submitNote() {
    if (isFormValid) {
      mutate(values as Note);
    }
  }

  function onSuccess() {
    dispatch(showSnackBar({ open: true, type: "success", message: "Note successfully modified" }));
    handleClose();
  }

  const handleClose = () => {
    dispatch(showEditNoteModal(false));
  };

  if (!open || !note) return null;

  return (
    <DefaultModal open={open} onClose={handleClose}>
      <Title>Edit New Note</Title>
      <InputForm onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            label="Title"
            value={values.title}
            onChange={handleChange("title")}
            onBlur={handleBlur("title")}
            required
            error={Boolean(touched.title && errors.title)}
          />
          {touched.title && errors.title && <InputError>{errors.title}</InputError>}
        </InputGroup>

        <InputGroup>
          <Input label="Sub-title" value={values.subTitle} onChange={handleChange("subTitle")} onBlur={handleBlur("subTitle")} />
        </InputGroup>

        <InputGroup>
          <Input
            label="Note"
            placeholder="Enter your note here..."
            multiline
            rows={4}
            value={values.text}
            onChange={handleChange("text")}
            onBlur={handleBlur("text")}
            required
            error={Boolean(touched.text && errors.text)}
          />
          {touched.text && errors.text && <InputError>{errors.text}</InputError>}
        </InputGroup>
        <ButtonBlock>
          <ModalButton color="secondary" onClick={handleClose}>
            Cancel
          </ModalButton>
          <ModalButton color="primary" type="submit">
            {isLoading ? <CircularProgress color="primary" /> : "Add note"}
          </ModalButton>
        </ButtonBlock>
      </InputForm>
    </DefaultModal>
  );
};
