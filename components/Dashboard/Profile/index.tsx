import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Input from "../../Formik/input";
import Button from "../../Common/Button";

const profileSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email address is incorrect")
    .required("This field is required."),
  firstName: yup.string().required("This field is required."),
  lastName: yup.string().required("This field is required."),
  address: yup.string().required("This field is required."),
});

interface profileValues {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
}

const Profile = () => {
  const initialValues: profileValues = {
    email: "",
    firstName: "Johnson",
    lastName: "",
    address: "",
  };
  return (
    <div className="space-y-6">
      <h1 className="dash-header ">Personal Details</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={profileSchema}
        onSubmit={(data, { resetForm, setSubmitting }) => {}}
      >
        {({
          errors,
          touched,
          handleSubmit,
          handleBlur,
          values,
          handleChange,
          isSubmitting,
        }) => (
          <Form autoComplete="off" className="">
            <div className="w-full space-y-7 pb-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-7 lg:gap-x-7">
                <Input
                  label="First Name"
                  name="firstName"
                  type="name"
                  value={values.firstName}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  placeholder="First Name"
                  errors={errors.firstName}
                  touched={touched.firstName}
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  type="name"
                  value={values.lastName}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  placeholder="Last Name"
                  errors={errors.lastName}
                  touched={touched.lastName}
                />
              </div>
              <Input
                label="Email Address"
                name="email"
                type="email"
                value={values.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
                placeholder="Email Address"
                errors={errors.email}
                touched={touched.email}
              />
            </div>
            <div className="w-full space-y-7 pb-10">
              <h1 className="dash-header ">Shipping Address</h1>
              <Input
                label="Billing Address"
                name="address"
                type="name"
                value={values.address}
                handleChange={handleChange}
                placeholder="Billing Address"
                errors={errors.address}
                handleBlur={handleBlur}
                touched={touched.address}
              />
            </div>

            <Button text="Save Changes" width="w-full" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Profile;
