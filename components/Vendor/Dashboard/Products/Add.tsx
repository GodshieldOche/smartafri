import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import InputV2 from "../../../Formik/InputV2";
import { Icon } from "@iconify/react";
import TextAreaInput from "../../../Formik/TextAreaInput";
import Button from "../../../Common/Button";
import OutlineTwo from "../../../Common/OutlineTwo";
import DashHeader from "../DashHeader";

const productSchema = yup.object().shape({
  title: yup.string(),
  price: yup.string(),
  origin: yup.string(),
  quantity: yup.string(),
  details: yup.string(),
  type: yup.string(),
  description: yup.string(),
});
// .required("This field is required.")
interface productValues {
  title: string;
  price: string;
  origin: string;
  quantity: string;
  details: string;
  type: string;
  description: string;
}

const Add = () => {
  const initialValues: productValues = {
    title: "",
    price: "",
    origin: "",
    quantity: "",
    details: "",
    type: "",
    description: "",
  };

  return (
    <div className="w-full">
      <DashHeader page="Add Products" />
      <div className="vendor_starter">
        <Formik
          initialValues={initialValues}
          validationSchema={productSchema}
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
              <div className="grid grid-cols-2 gap-[40px] ">
                <InputV2
                  label="Title"
                  name="title"
                  type="text"
                  value={values.title}
                  handleChange={handleChange}
                  placeholder="Title"
                  handleBlur={handleBlur}
                  errors={errors.title}
                  touched={touched.title}
                />
                <InputV2
                  label="Price"
                  name="price"
                  type="text"
                  value={values.price}
                  handleChange={handleChange}
                  placeholder="Price"
                  handleBlur={handleBlur}
                  errors={errors.price}
                  touched={touched.price}
                />
                <InputV2
                  label="Origin"
                  name="origin"
                  type="text"
                  value={values.origin}
                  handleChange={handleChange}
                  placeholder="Origin"
                  handleBlur={handleBlur}
                  errors={errors.origin}
                  touched={touched.origin}
                />
                <InputV2
                  label="Details"
                  name="details"
                  type="text"
                  value={values.details}
                  handleChange={handleChange}
                  placeholder="Details"
                  handleBlur={handleBlur}
                  errors={errors.details}
                  touched={touched.details}
                />
                <InputV2
                  label="Quantity"
                  name="quantity"
                  type="text"
                  value={values.quantity}
                  handleChange={handleChange}
                  placeholder="Quantity"
                  handleBlur={handleBlur}
                  errors={errors.quantity}
                  touched={touched.quantity}
                />
                <InputV2
                  label="Type"
                  name="type"
                  type="text"
                  value={values.type}
                  handleChange={handleChange}
                  placeholder="Type"
                  handleBlur={handleBlur}
                  errors={errors.type}
                  touched={touched.type}
                />
              </div>

              <div className="w-full h-full !mt-14 space-y-8">
                <h1 className="text-xl font-semibold">Description</h1>
                <h3 className="text-grayOne !mt-4">
                  Upload the images for your product here
                </h3>

                <div className="w-full h-full space-y-4 ">
                  <h2 className="">Click below to upload images</h2>
                  <div className="grid grid-cols-2 w-full gap-10 ">
                    <div className="w-full py-[18px] cursor-pointer rounded-[5px] flex space-x-3 justify-center items-center bg-[#4082E6]/10">
                      <Icon
                        icon="ic:baseline-photo-camera"
                        className="!text-xl !text-primaryOne"
                      />
                      <h1 className="text-sm text-primaryOne font-medium">
                        Take Photo
                      </h1>
                    </div>
                    <div className="w-full py-[18px] cursor-pointer rounded-[5px] flex space-x-3 justify-center items-center bg-[#4082E6]/10">
                      <Icon
                        icon="bi:image"
                        className="!text-xl !text-primaryOne"
                      />
                      <h1 className="text-sm text-primaryOne font-medium">
                        Gallery
                      </h1>
                    </div>
                  </div>
                </div>

                <TextAreaInput
                  label="Description"
                  name="description"
                  value={values.description}
                  handleChange={handleChange}
                  placeholder="More details about the product."
                  handleBlur={handleBlur}
                  errors={errors.description}
                  touched={touched.description}
                />

                <div className="flex justify-between items-center space-x-5">
                  <Button
                    text="Save as Draft"
                    color="bg-[#63C092]"
                    width="w-full"
                  />
                  <Button text="Submit" width="w-full" />
                  <OutlineTwo text="Submit and add another" width="w-full" />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Add;
