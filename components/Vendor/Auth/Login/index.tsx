import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import VendorInput from "../../../Formik/VendorInput";
import Buttonv2 from "../../../Common/Butonv2";
import TextButton from "../../../Common/TextButton";
import { useRouter } from "next/router";
import useAppDispatch from "../../../../hooks/useDispatch";
import {
  postVendorSignIn,
  reset,
} from "../../../../redux/slice/vendor/vendorSignin";
import { toast } from "react-toastify";

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email address is incorrect")
    .required("This field is required."),
  password: yup.string().required("This field is required."),
});

export interface signupValues {
  email: string;
  password: string;
}

const Login = () => {
  const initialValues: signupValues = {
    email: "",
    password: "",
  };

  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className="w-full space-y-8">
      <div className="w-full space-y-2">
        <h1 className=" vendorHeading  ">Welcome Back</h1>
        <h2 className="text-sm lg:text-base ">
          Sign in to get access to your SmartAfri Account
        </h2>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={(data, { resetForm, setSubmitting }) => {
          dispatch(postVendorSignIn(data)).then((res: any) => {
            console.log(res);
            if (res.error) {
              toast.error("Invalid Email or Password");
              dispatch(reset());
              return setSubmitting(false);
            }
            toast.success("Successful");
            dispatch(reset());
            setSubmitting(false);
            setTimeout(() => {
              location.reload();
            }, 1500);
            setSubmitting(false);
          });
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
            <div className="flex justify-end md:justify-between items-center">
              <div className="hidden md:flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="stay"
                  name="stay"
                  // onChange={() => setStay(!stay)}
                  className="accent-primaryOne"
                />
                <label
                  htmlFor="stay"
                  className="text-[13px] sm:text-sm pt-[2px] text-grayOne"
                >
                  Remember me
                </label>
              </div>
              <span className="text-[13px] sm:text-sm text-black cursor-pointer">
                Forgot Password?
              </span>
            </div>

            <div className="w-full !mt-10 lg:!mt-16 flex flex-col justify-between items-center space-y-8">
              <Buttonv2
                text="Sign In"
                width="w-full"
                action={handleSubmit}
                loading={isSubmitting}
              />
              <TextButton
                text="Create Account"
                action={() => router.push("/vendor/auth/register")}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
