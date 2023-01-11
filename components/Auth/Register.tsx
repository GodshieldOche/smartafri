import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Button from "../Common/Button";
import Input from "../Formik/input";
import { useRouter } from "next/router";
import useAppDispatch from "../../hooks/useDispatch";
import { postRegister, reset } from "../../redux/slice/auth/register";
import { toast } from "react-toastify";

const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email address is incorrect")
    .required("This field is required."),
  full_name: yup.string().required("This field is required."),
  password: yup.string().required("This field is required."),
  confirmPassword: yup
    .string()
    .required("This field is required.")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

interface registerValues {
  email: string;
  full_name: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const initialValues: registerValues = {
    email: "",
    full_name: "",
    password: "",
    confirmPassword: "",
  };

  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleRouting = () => {
    router.push("/auth/signin");
  };

  const handleRegister = (
    data: registerValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    const body: any = { ...data };
    delete body.confirmPassword;
    dispatch(postRegister(body)).then((res: any) => {
      if (res.error) {
        toast.error("Email already Exist");
        dispatch(reset());
        return setSubmitting(false);
      }
      toast.success("Successful");
      handleRouting();
      dispatch(reset());
      setSubmitting(false);
    });
  };

  return (
    <div className="flex flex-col w-full h-full space-y-10">
      <div className="w-full flex flex-col space-y-3 items-center">
        <h1 className="dash-header !text-lg md:!text-2xl">Lets Get Started!</h1>
        <h2 className="text-sm md:text-base">
          Fill in details below to create your new account
        </h2>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={(data, { setSubmitting }) => {
          handleRegister(data, setSubmitting);
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
              label="Full Name"
              name="full_name"
              type="text"
              value={values.full_name}
              handleChange={handleChange}
              placeholder="Full Name"
              handleBlur={handleBlur}
              errors={errors.full_name}
              touched={touched.full_name}
            />
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
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              handleChange={handleChange}
              placeholder="Confirm Password"
              handleBlur={handleBlur}
              errors={errors.confirmPassword}
              touched={touched.confirmPassword}
            />
            <div className="!mt-14 space-y-6">
              <Button
                text="Create Account"
                width="w-full"
                action={handleSubmit}
                loading={isSubmitting}
              />
              <div className="w-full flex items-center justify-center">
                <h1 className="text-grayOne text-sm md:text-base">
                  Old User?{" "}
                  <span
                    onClick={handleRouting}
                    className="text-primaryOne cursor-pointer"
                  >
                    Sign in now
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

export default Register;
