import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Button from "../Common/Button";
import Input from "../Formik/input";
import { useRouter } from "next/router";

const signinSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email address is incorrect")
    .required("This field is required."),
  password: yup.string().required("This field is required."),
});

interface signinValues {
  email: string;
  password: string;
}

const SignIn = () => {
  const initialValues: signinValues = {
    email: "",
    password: "",
  };

  const router = useRouter();

  const handleRouting = () => {
    router.push("/auth/register");
  };

  return (
    <div className="flex flex-col w-full h-full space-y-10">
      <div className="w-full flex flex-col space-y-3 items-center">
        <h1 className="dash-header !text-lg md:!text-2xl">Welcome Back!</h1>
        <h2 className="text-sm md:text-base">
          Fill in details below to get acess to your account
        </h2>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={signinSchema}
        onSubmit={(data, { resetForm, setSubmitting }) => {
          console.log(data);
        }}
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
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={values.email}
              handleChange={handleChange}
              placeholder="Email Address"
              handleBlur={handleBlur}
              errors={errors.email}
              touched={touched.email}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              value={values.password}
              handleChange={handleChange}
              placeholder="Password"
              handleBlur={handleBlur}
              errors={errors.password}
              touched={touched.password}
            />
            <div className="!mt-14 space-y-6">
              <Button
                text="Log In"
                width="w-full"
                action={handleSubmit}
                loading={isSubmitting}
              />
              <div className="w-full flex items-center justify-center">
                <h1 className="text-grayOne text-sm md:text-base">
                  New User?{" "}
                  <span
                    onClick={handleRouting}
                    className="text-primaryOne cursor-pointer"
                  >
                    Create Account
                  </span>
                </h1>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
