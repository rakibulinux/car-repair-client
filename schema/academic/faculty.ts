import * as yup from "yup";

export const facultySchema = yup.object().shape({
  password: yup.string().min(6).max(32).required(),
  faculty: yup.object({
    name: yup.object().shape({
      firstName: yup.string().required("First Name is Required"),
      middleName: yup.string().required("Middle Name is Required"),
      lastName: yup.string().required("Last Name is Required"),
    }),
    email: yup.string().email().required("Email is Required"),
    dateOfBirth: yup.string().required("Date Of Birth is Required"),
    designation: yup.string().required("Designation is Required"),
  }),
});
