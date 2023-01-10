import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import VendorInput from "../../../Formik/VendorInput";
import FileInput from "../../../Formik/FileInput";
import Buttonv2 from "../../../Common/Butonv2";
import { useRouter } from "next/router";
import { RegisterProps } from "../../../../interface";
import DropdownInput from "../../../Formik/DropdownInput";
import OutlineBtn from "../../../Common/OutlineBtn";

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email address is incorrect")
    .required("This field is required."),
  full_name: yup.string().required("This field is required."),
  phone_number: yup.string().required("This field is required."),
  means_of_id: yup.string().required("This field is required."),
});

const basicSchemaBusiness = yup.object().shape({
  company_name: yup.string().required("This field is required."),
  is_business_registered: yup.string().required("This field is required."),
  registration_code: yup.string().required("This field is required."),
  registration_file: yup.string().required("This field is required."),
  business_role: yup.string().required("This field is required."),
});

export interface basicValues {
  email: string;
  full_name: string;
  phone_number: string;
  means_of_id: string;
}

interface basicValuesBusiness {
  company_name: string;
  is_business_registered: string;
  registration_code: string;
  registration_file: string;
  business_role: string;
}

const Basic: React.FC<RegisterProps> = ({
  setPage,
  scrollToTop,
  business,
  setData,
}) => {
  const [isRegistered, setIsRegistered] = useState("No");
  const [role, setRole] = useState("Your Role");
  const router = useRouter();
  const initialValues: basicValues = {
    email: "",
    full_name: "",
    phone_number: "",
    means_of_id: "",
  };

  const initialValuesBusiness: basicValuesBusiness = {
    registration_file: "",
    company_name: "",
    is_business_registered: "",
    business_role: "",
    registration_code: "",
  };

  const handleClick = () => {
    scrollToTop();
    setPage((prev) => prev + 1);
  };
  return (
    <div className="pb-16 !mt-[42px]">
      {!business && (
        <Formik
          initialValues={initialValues}
          validationSchema={basicSchema}
          onSubmit={(
            { full_name, email, phone_number },
            { resetForm, setSubmitting }
          ) => {
            setData!(
              (prev) =>
                (prev = {
                  ...prev,
                  full_name,
                  email,
                  phone_no: phone_number,
                })
            );

            scrollToTop();
            setPage((prev) => prev + 1);
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
              <div className="w-full  !mt-12 lg:!mt-16 flex justify-between items-center  space-x-4 md:space-x-6">
                <OutlineBtn
                  text="Previous"
                  width="w-full"
                  action={() => router.back()}
                />
                <Buttonv2 text="Next" width="w-full" action={handleSubmit} />
              </div>
            </Form>
          )}
        </Formik>
      )}

      {business && (
        <Formik
          initialValues={initialValuesBusiness}
          validationSchema={basicSchemaBusiness}
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
                label="Comapany Name"
                name="company_name"
                type="text"
                icon="bi:person"
                value={values.company_name}
                handleChange={handleChange}
                placeholder="Company Name"
                handleBlur={handleBlur}
                errors={errors.company_name}
                touched={touched.company_name}
              />

              <div className="w-full h-fit grid grid-cols-2 gap-x-6 ">
                <DropdownInput
                  label="Registered Business"
                  name="is_business_registered"
                  options={[
                    { name: "No", value: "No" },
                    { name: "Yes", value: "Yes" },
                  ]}
                  value={isRegistered}
                  handleChange={setIsRegistered}
                  errors={errors.is_business_registered}
                  touched={touched.is_business_registered}
                />
                <VendorInput
                  label="Reg Number"
                  name="registration_code"
                  type="text"
                  value={values.registration_code}
                  handleChange={handleChange}
                  placeholder="Reg Number"
                  handleBlur={handleBlur}
                  errors={errors.registration_code}
                  touched={touched.registration_code}
                />
              </div>

              <FileInput
                label="Business Document (Picture/PDF)"
                name="registration_file"
                value={values.registration_file}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors.registration_file}
                touched={touched.registration_file}
                des="Business License/Registration etc."
              />
              <DropdownInput
                label="Your Role"
                name="business_role"
                options={[{ name: "Your Role", value: "Your Role" }]}
                value={role}
                handleChange={setRole}
                errors={errors.business_role}
                touched={touched.business_role}
              />
              <div className="w-full !mt-12 lg:!mt-16 flex justify-between items-center space-x-4 md:space-x-6">
                <OutlineBtn
                  text="Previous"
                  width="w-full"
                  action={() => router.back()}
                />
                <Buttonv2 text="Next" width="w-full" action={handleClick} />
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Basic;
