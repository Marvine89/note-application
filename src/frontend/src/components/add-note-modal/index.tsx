import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import { showAddNoteModal, showSnackBar } from "../../redux/modules/modal/actions";
import { getShowAddNoteModal } from "../../redux/modules/modal/selectors";
import { DefaultModal } from "../default-modal";
import { ButtonBlock, Input, InputForm, InputError, InputGroup, ModalButton, Title } from "./styles";
import { addNoteRequest } from "../../utils/api/note";
import { CircularProgress } from "@material-ui/core";

const FORM_SCHEMA = Yup.object().shape({
  title: Yup.string().required("The title is required"),
  subTitle: Yup.string(),
  text: Yup.string().required("The note text is required"),
});

interface FormState {
  title: string;
  subTitle?: string;
  text: string;
}

export const AddNoteModal: React.FC = () => {
  const dispatch = useDispatch();
  const open = useSelector(getShowAddNoteModal);
  const { values, touched, errors, isValid, handleChange, handleBlur, handleSubmit, resetForm } = useFormik<FormState>({
    validationSchema: FORM_SCHEMA,
    validateOnChange: true,
    initialValues: {
      title: "",
      subTitle: "",
      text: "",
    },
    onSubmit: submitNote,
  });

  const { mutate, isLoading } = useMutation(addNoteRequest, { onSuccess: onSuccess });

  function submitNote() {
    if (isValid) {
      mutate(values);
    }
  }

  function onSuccess() {
    dispatch(showSnackBar({ open: true, type: "success", message: "Note successfully added" }));
    dispatch(showAddNoteModal(false));
  }

  useEffect(() => {
    resetForm();
  }, [open, resetForm]);

  const handleClose = () => {
    dispatch(showAddNoteModal(false));
  };

  if (!open) return null;

  return (
    <DefaultModal open={open} onClose={handleClose}>
      <Title>Add New Note</Title>
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
