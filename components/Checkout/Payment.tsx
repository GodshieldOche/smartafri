import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Input from "../Formik/input";
import Button from "../Common/Button";
import { useRouter } from "next/router";
import Dropdown from "../Formik/Dropdown";
import axios from "axios";

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

  const verifyPayment = async (reference: string) => {
    try {
      const { data } = await axios.get(
        `https://api.paystack.co/transaction/verify/${reference}`,
        {
          headers: {
            Authorization:
              "Bearer sk_test_6db217e6fbac2cc4e993a74a7a09762741ce3321",
          },
        }
      );
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handlePay = () => {
    let handler = PaystackPop.setup({
      key: "pk_test_3c12528ec7390e552ff520c320c1a287564218e5", // Replace with your public key
      email: "goddyartz@gmail.com",
      amount: 5000 * 100,
      ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      // label: "Optional string that replaces customer email"
      onClose: function () {
        alert("Window closed.");
      },
      callback: function (response: any) {
        verifyPayment(response.reference).then((data) => {
          if (data.status === true) {
            router.push("/dashboard/orders");
          }
        });
      },
    });

    handler.openIframe();
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
              <Button text="Proceed" width="w-full" action={handlePay} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Payment;
