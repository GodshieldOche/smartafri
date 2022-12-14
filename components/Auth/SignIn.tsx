import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Button from "../Common/Button";
import Input from "../Formik/input";
import { useRouter } from "next/router";
import useAppDispatch, { useAppSelector } from "../../hooks/useDispatch";
import { postSignin, reset } from "../../redux/slice/auth/signin";
import { toast } from "react-toastify";

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

  const dispatch = useAppDispatch();
  const router = useRouter();
  const { redirect } = useAppSelector((state) => state.menu);

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
          dispatch(postSignin(data)).then((res: any) => {
            if (res.error) {
              toast.error("Invalid Email or Password");
              dispatch(reset());
              return setSubmitting(false);
            }
            toast.success("Successful");
            dispatch(reset());
            setSubmitting(false);
            setTimeout(() => {
              const origin = location.origin;
              const newUrl: any = origin + redirect;
              location = newUrl as Location;
            }, 1500);
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
