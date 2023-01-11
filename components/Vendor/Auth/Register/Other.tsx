import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import VendorInput from "../../../Formik/VendorInput";
import FileInput from "../../../Formik/FileInput";
import Buttonv2 from "../../../Common/Butonv2";
import DropdownInput from "../../../Formik/DropdownInput";
import OutlineBtn from "../../../Common/OutlineBtn";
import { RegisterProps } from "../../../../interface";
import TextAreaInput from "../../../Formik/TextAreaInput";
import { useRouter } from "next/router";

const profileSchema = yup.object().shape({
  other_docs: yup.string(),
  niche: yup.string().required("This field is required."),
  sub_niche: yup.string().required("This field is required."),
  description: yup.string().required("This field is required."),
  bank_name: yup.string().required("This field is required."),
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

const Other: React.FC<RegisterProps> = ({ scrollToTop, setPage }) => {
  const initialValues: profileValues = {
    other_docs: "",
    niche: "",
    sub_niche: "",
    description: "",
    bank_name: "",
    account_number: "",
  };

  const router = useRouter();

  const handleNext = () => {
    scrollToTop();
    router.push("/vendor/auth/register/otp");
  };

  const handlePrev = () => {
    scrollToTop();
    setPage((prev) => prev - 1);
  };

  return (
    <div className="pb-16 !mt-[42px]">
      <Formik
        initialValues={initialValues}
        validationSchema={profileSchema}
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
          <Form autoComplete="off" className="space-y-8">
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
            <div className="w-full h-fit grid grid-cols-2 gap-x-[15px] md:gap-x-6 ">
              <DropdownInput
                label="Niche"
                name="niche"
                options={[{ name: "Niche", value: "Niche" }]}
                value={values.niche}
                handleChange={handleChange}
                errors={errors.niche}
                touched={touched.niche}
              />
              <DropdownInput
                label="Sub Niche"
                name="sub_niche"
                options={[{ name: "Sub Niche", value: "Sub Niche" }]}
                value={values.sub_niche}
                handleChange={handleChange}
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

            <div className="w-full !mt-6 lg:!mt-8 space-y-6">
              <h1 className="font-semibold text-base  lg:text-lg text-primaryOne ">
                Payout Information
              </h1>
              <h3 className="text-grayOne text-xs sm:text-sm tracking-[0.02em] !mt-3  ">
                All sales payments will be sent to this account details
              </h3>
              <div className="w-full h-fit grid grid-cols-2 gap-x-[15px] md:gap-x-6 ">
                <DropdownInput
                  label="Bank Name"
                  name="bank_name"
                  options={[{ name: "Bank Name", value: "Bank Name" }]}
                  value={values.bank_name}
                  handleChange={handleChange}
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

            <div className="w-full !mt-16 flex justify-between items-center space-x-[15px] md:space-x-6">
              <OutlineBtn text="Previous" width="w-full" action={handlePrev} />
              <Buttonv2 text="Next" width="w-full" action={handleNext} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Other;
