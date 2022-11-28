import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import VendorInput from "../../../Formik/VendorInput";

const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email address is incorrect")
    .required("This field is required."),
  full_name: yup.string().required("This field is required."),
  phone_number: yup.string().required("This field is required."),
  id: yup.string().required("This field is required."),
});

interface basicValues {
  email: string;
  full_name: string;
  phone_number: string;
  id: string;
}

const Basic = () => {
  const initialValues: basicValues = {
    email: "",
    full_name: "",
    phone_number: "",
    id: "",
  };
  return (
    <div className="pb-16 !mt-[42px]">
      <Formik
        initialValues={initialValues}
        validationSchema={basicSchema}
        onSubmit={(data, { resetForm, setSubmitting }) => {}}
      >
        {({
          errors,
          touched,
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <Form autoComplete="off" className="space-y-6">
            <VendorInput
              label="Full Name"
              name="full_name"
              type="text"
              icon="bi:person"
              value={values.full_name}
              handleChange={handleChange}
              placeholder="Full Name"
              handleBlur={handleBlur}
              errors={errors.full_name}
              touched={touched.full_name}
            />
            <VendorInput
              label="Email Address"
              name="email"
              type="text"
              icon="bi:person"
              value={values.email}
              handleChange={handleChange}
              placeholder="Email Address"
              handleBlur={handleBlur}
              errors={errors.email}
              touched={touched.email}
            />
            <VendorInput
              label="Phone Number"
              name="phone_number"
              type="text"
              icon="clarity:phone-handset-line"
              value={values.phone_number}
              handleChange={handleChange}
              placeholder="Phone Number"
              handleBlur={handleBlur}
              errors={errors.phone_number}
              touched={touched.phone_number}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;
