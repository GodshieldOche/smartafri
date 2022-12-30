import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Input from "../Formik/input";
import Button from "../Common/Button";
import { useRouter } from "next/router";

const addressSchema = yup.object().shape({
  phoneNumber: yup.string().required("This field is required."),
  fullName: yup.string().required("This field is required."),
  address: yup.string().required("This field is required."),
});

interface addressValues {
  phoneNumber: string;
  fullName: string;
  address: string;
}

const Address = () => {
  const router = useRouter();
  const initialValues: addressValues = {
    phoneNumber: "",
    fullName: "Johnson",
    address: "",
  };
  return (
    <div className="w-full space-y-7">
      <h1 className="dash-header ">Address Details</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={addressSchema}
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
            <div className="w-full space-y-8">
              <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:justify-between lg:items-start lg:space-x-6 ">
                <Input
                  label="Full Name"
                  name="fullName"
                  type="text"
                  value={values.fullName}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  placeholder="Full Name"
                  errors={errors.fullName}
                  touched={touched.fullName}
                />
                <Input
                  label="Phone Number"
                  name="phoneNumber"
                  type="name"
                  value={values.phoneNumber}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  placeholder="Phone Number"
                  errors={errors.phoneNumber}
                  touched={touched.phoneNumber}
                />
              </div>
              <Input
                label="Delivery Address"
                name="address"
                type="address"
                value={values.address}
                handleChange={handleChange}
                handleBlur={handleBlur}
                placeholder="Delivery Address"
                errors={errors.address}
                touched={touched.address}
              />
            </div>
            <div className="w-full !mt-14">
              <Button
                text="Proceed"
                width="w-full"
                action={() => router.push("/checkout/delivery")}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Address;
