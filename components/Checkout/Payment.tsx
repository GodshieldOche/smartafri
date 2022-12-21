import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Input from "../Formik/input";
import Button from "../Common/Button";
import { useRouter } from "next/router";
import Dropdown from "../Formik/Dropdown";

const cardSchema = yup.object().shape({
  cardNumber: yup.string().required("This field is required."),
  cvv: yup.string().required("This field is required."),
  expiryDate: yup.string().required("This field is required."),
});

interface cardValues {
  cardNumber: string;
  cvv: string;
  expiryDate: string;
}

const Payment = () => {
  const [method, setMethod] = useState("Debit Card");

  const router = useRouter();
  const cardInitValues: cardValues = {
    cardNumber: "",
    cvv: "",
    expiryDate: "",
  };
  return (
    <div className="w-full space-y-7">
      <h1 className="dash-header ">Payment Method</h1>
      <Formik
        initialValues={cardInitValues}
        validationSchema={cardSchema}
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
              <Dropdown
                name="method"
                options={[
                  { name: "Debit Card", value: "Debit Card" },
                  { name: "Bank Transfer", value: "Bank Transfer" },
                ]}
                handleChange={setMethod}
                label="Select preferred Method"
                value={method}
              />
              {method === "Debit Card" && (
                <div className="flex justify-between items-start space-x-6 ">
                  <Input
                    label="Card Number"
                    name="cardNumber"
                    type="text"
                    value={values.cardNumber}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    placeholder="Card Number"
                    errors={errors.cardNumber}
                    touched={touched.cardNumber}
                  />
                  <Input
                    label="CVV"
                    name="cvv"
                    type="text"
                    value={values.cvv}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    placeholder="CVV"
                    errors={errors.cvv}
                    touched={touched.cvv}
                  />
                  <Input
                    label="Expiry Date"
                    name="expiryDate"
                    type="text"
                    value={values.expiryDate}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    placeholder="Expiry Date"
                    errors={errors.expiryDate}
                    touched={touched.expiryDate}
                  />
                </div>
              )}
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

export default Payment;
