import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Input from "../Formik/input";
import Button from "../Common/Button";
import Router, { useRouter } from "next/router";
import Dropdown from "../Formik/Dropdown";
import axios from "axios";
import useAppDispatch from "../../hooks/useDispatch";
import { usePaystackPayment } from "react-paystack";

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

  const config = {
    reference: new Date().getTime().toString(),
    email: "uniccongroup@gmail.com",
    amount: 5000 * 100,
    publicKey: "pk_test_3c12528ec7390e552ff520c320c1a287564218e5",
  };

  const initializePayment = usePaystackPayment(config);

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

  const onSuccess = (reference?: any) => {
    verifyPayment(reference.reference!).then((data: any) => {
      data.status && router.push("/dashboard/orders");
    });
  };

  const onClose = () => {
    console.log("closed");
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
                <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:justify-between lg:items-start lg:space-x-6 ">
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
                action={() => initializePayment(onSuccess, onClose)}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Payment;
