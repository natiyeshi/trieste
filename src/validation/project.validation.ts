import * as yup from 'yup';

const projectValidationSchema = yup.object().shape({
  name: yup.string().required('Image is required'),
  desc: yup.string().required('Tag is required'),
});

export default projectValidationSchema;