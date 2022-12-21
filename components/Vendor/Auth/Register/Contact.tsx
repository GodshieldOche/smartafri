import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import VendorInput from "../../../Formik/VendorInput";
import FileInput from "../../../Formik/FileInput";
import Buttonv2 from "../../../Common/Butonv2";
import DropdownInput from "../../../Formik/DropdownInput";
import OutlineBtn from "../../../Common/OutlineBtn";
import { RegisterProps } from "../../../../interface";
import { basicSchema, basicValues } from "./Basic";

export const contactSchema = yup.object().shape({
  logo: yup.string().required("This field is required."),
  country: yup.string().required("This field is required."),
  state: yup.string().required("This field is required."),
  address: yup.string().required("This field is required."),
  password: yup.string().required("This field is required."),
  confirmPassword: yup
    .string()
    .required("This field is required.")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export interface contactValues {
  logo: string;
  country: string;
  state: string;
  address: string;
  password: string;
  confirmPassword: string;
}

const Contact: React.FC<RegisterProps> = ({
  scrollToTop,
  setPage,
  business,
}) => {
  const [country, setCountry] = useState("Nigeria");
  const [state, setState] = useState("State");
  const [countryId, setCountryId] = useState("Nigeria");

  const initialValues: contactValues = {
    logo: "",
    country: "",
    state: "",
    address: "",
    password: "",
    confirmPassword: "",
  };

  const initialValuesBusiness: basicValues = {
    email: "",
    full_name: "",
    phone_number: "",
    means_of_id: "",
  };

  const handleNext = () => {
    scrollToTop();
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    scrollToTop();
    setPage((prev) => prev - 1);
  };

  return (
    <div className="pb-16 !mt-[42px]">
      {!business && (
        <Formik
          initialValues={initialValues}
          validationSchema={contactSchema}
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
              <FileInput
                label="Logo"
                name="means_of_id"
                value={values.logo}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors.logo}
                touched={touched.logo}
              />
              <div className="w-full h-fit grid grid-cols-2 gap-x-6 ">
                <DropdownInput
                  label="Country"
                  name="country"
                  icon="carbon:earth-southeast-asia"
                  options={[{ name: "Nigeria", value: "Nigeria" }]}
                  value={country}
                  handleChange={setCountry}
                  errors={errors.country}
                  touched={touched.country}
                />
                <DropdownInput
                  label="State"
                  name="state"
                  options={[{ name: "FCT", value: "FCT" }]}
                  value={state}
                  handleChange={setState}
                  errors={errors.state}
                  touched={touched.state}
                />
              </div>

              <VendorInput
                label="Address"
                name="address"
                type="text"
                icon="cil:house"
                value={values.address}
                handleChange={handleChange}
                placeholder="Address"
                handleBlur={handleBlur}
                errors={errors.address}
                touched={touched.address}
              />
              <VendorInput
                label="Password"
                name="password"
                type="password"
                icon="codicon:lock"
                value={values.password}
                handleChange={handleChange}
                placeholder="Password"
                handleBlur={handleBlur}
                errors={errors.password}
                touched={touched.password}
              />
              <VendorInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                icon="codicon:lock"
                value={values.confirmPassword}
                handleChange={handleChange}
                placeholder="Confirm Password"
                handleBlur={handleBlur}
                errors={errors.confirmPassword}
                touched={touched.confirmPassword}
              />

              <div className="w-full !mt-16 flex justify-between items-center space-x-6">
                <OutlineBtn
                  text="Previous"
                  width="w-full"
                  action={handlePrev}
                />
                <Buttonv2 text="Next" width="w-full" action={handleNext} />
              </div>
            </Form>
          )}
        </Formik>
      )}

      {business && (
        <Formik
          initialValues={initialValuesBusiness}
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
              <FileInput
                label="Means of ID"
                name="means_of_id"
                value={values.means_of_id}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors.means_of_id}
                touched={touched.means_of_id}
                des="Drivers License, Intl Passport, NIN"
              />
              <div className="w-full !mt-16 flex justify-between items-center space-x-6">
                <OutlineBtn
                  text="Previous"
                  width="w-full"
                  action={handlePrev}
                />
                <Buttonv2 text="Next" width="w-full" action={handleNext} />
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Contact;
