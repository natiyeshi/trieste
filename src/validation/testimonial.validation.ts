import * as Yup from 'yup';

export const testimonialValidation = Yup.object({
  name: Yup.string()
    .required("Testimony name is required")
    .min(3, "Must be at least 3 characters")
    .max(45, "Must be less than 45 characters"),
    
  message: Yup.string()
    .required("Description is required")
    .min(5, "Must be at least 5 characters")
    .max(1000, "Must be less than 1000 characters"),

});


