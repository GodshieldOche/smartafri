import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../Common/Button";
import Dropdown from "../Formik/Dropdown";

const Delivery = () => {
  const [method, setMethod] = useState("Pick Up Station");
  const [station, setStation] = useState("Select here");

  const router = useRouter();

  return (
    <div className="w-full space-y-7">
      <h1 className="dash-header ">Delivery Method</h1>
      <form autoComplete="off" className=" w-full space-y-8">
        <Dropdown
          label="Select preferred Method"
          name="method"
          value={method}
          handleChange={setMethod}
          options={[
            { name: "Pick Up Station", value: "Pick Up Station" },
            { name: "Doorstep Delivery", value: "Doorstep Delivery" },
          ]}
        />
        {method === "Pick Up Station" && (
          <Dropdown
            label="Select Station"
            name="station"
            value={station}
            handleChange={setStation}
            options={[{ name: "Select Station", value: "Select Station" }]}
          />
        )}
        {method === "Doorstep Delivery" && (
          <div className="w-full flex flex-col space-y-2">
            <h1 className="text-grayFour text-base ">Delivery Address</h1>
            <h1 className="text-black/80 text-base font-medium">
              Lanre Shittu Motors, Mabushi. FCT
            </h1>
          </div>
        )}
        <div className="w-full !mt-14">
          <Button
            text="Proceed"
            width="w-full"
            action={() => router.push("/checkout/payment")}
          />
        </div>
      </form>
    </div>
  );
};

export default Delivery;
