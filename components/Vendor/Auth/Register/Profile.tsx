import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import VendorInput from "../../../Formik/VendorInput";
import FileInput from "../../../Formik/FileInput";
import Buttonv2 from "../../../Common/Butonv2";
import DropdownInput from "../../../Formik/DropdownInput";
import OutlineBtn from "../../../Common/OutlineBtn";
import { RegisterProps } from "../../../../interface";
import TextAreaInput from "../../../Formik/TextAreaInput";
import { contactSchema, contactValues } from "./Contact";
import axios from "axios";

const profileSchema = yup.object().shape({
  other_docs: yup.string(),
  description: yup.string().required("This field is required."),
  account_number: yup.string().required("This field is required."),
});

interface profileValues {
  other_docs: string;
  niche: string;
  sub_niche: string;
  description: string;
  bank_name: string;
  account_number: string;
}

const Profile: React.FC<RegisterProps> = ({
  scrollToTop,
  setPage,
  business,
  data,
}) => {
  const [niche, setNiche] = useState("Niche");
  const [subNiche, setSubNiche] = useState("Sub Niche");
  const [bankName, setBankName] = useState("Bank Name");
  const initialValues: profileValues = {
    other_docs: "",
    niche: "",
    sub_niche: "",
    description: "",
    bank_name: "",
    account_number: "",
  };

  const initialValuesBusiness: contactValues = {
    logo: "",
    country: "",
    state: "",
    address: "",
    password: "",
    confirmPassword: "",
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
          validationSchema={profileSchema}
          onSubmit={async (
            { account_number },
            { resetForm, setSubmitting }
          ) => {
            console.log("Working");
            try {
              const res = await axios.post(
                "https://apis.smartafri.com/api/vendor/auth/register",
                data,
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              console.log(res);
            } catch (error) {
              console.log(error);
            }
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
              <FileInput
                label="Other Docs (Optional)"
                name="other_docs"
                value={values.other_docs}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors.other_docs}
                touched={touched.other_docs}
                des="You can Upload more documents"
              />
              <div className="w-full h-fit grid grid-cols-2 gap-x-6 ">
                <DropdownInput
                  label="Niche"
                  name="niche"
                  options={[{ name: "Niche", value: "Niche" }]}
                  value={niche}
                  handleChange={setNiche}
                  errors={errors.niche}
                  touched={touched.niche}
                />
                <DropdownInput
                  label="Sub Niche"
                  name="sub_niche"
                  options={[{ name: "Sub Niche", value: "Sub Niche" }]}
                  value={subNiche}
                  handleChange={setSubNiche}
                  errors={errors.sub_niche}
                  touched={touched.sub_niche}
                />
              </div>
              <TextAreaInput
                label="Description"
                name="description"
                value={values.description}
                handleChange={handleChange}
                placeholder="More details about the brand/business"
                handleBlur={handleBlur}
                errors={errors.description}
                touched={touched.description}
              />

              <div className="w-full !mt-8 space-y-6">
                <h1 className="font-semibold text-lg text-primaryOne ">
                  Payout Information
                </h1>
                <h3 className="text-grayOne text-base tracking-[0.02em] !mt-1 ">
                  All sales payments will be sent to this account details
                </h3>
                <div className="w-full h-fit grid grid-cols-2 gap-x-6 ">
                  <DropdownInput
                    label="Bank Name"
                    name="bank_name"
                    options={[{ name: "Bank Name", value: "Bank Name" }]}
                    value={bankName}
                    handleChange={setBankName}
                    errors={errors.bank_name}
                    touched={touched.bank_name}
                  />
                  <VendorInput
                    label="Account Number"
                    name="account_number"
                    value={values.account_number}
                    handleChange={handleChange}
                    placeholder="Account Number"
                    type="text"
                    errors={errors.account_number}
                    touched={touched.account_number}
                  />
                </div>
              </div>

              <div className="w-full !mt-16 flex justify-between items-center space-x-6">
                <OutlineBtn
                  text="Previous"
                  width="w-full"
                  action={handlePrev}
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
                  value={values.country}
                  handleChange={handleChange}
                  errors={errors.country}
                  touched={touched.country}
                />
                <DropdownInput
                  label="State"
                  name="state"
                  options={[{ name: "FCT", value: "FCT" }]}
                  value={values.state}
                  handleChange={handleChange}
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
    </div>
  );
};

export default Profile;
