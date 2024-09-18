import * as Yup from "yup";

export const serviceValidation = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(3, "Must be at least 3 characters")
      .max(45, "Name must be less than 45 characters"), 
    desc: Yup.string()
      .required('Description is required')
      .min(5, "Must be at least 5 characters")
      .max(2000, "Must be less than 2000 characters"),
 });