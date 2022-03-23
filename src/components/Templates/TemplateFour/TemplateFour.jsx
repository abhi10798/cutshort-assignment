import React from "react";
import Button from "../../Button/Button";
import FormTitle from "../../FormTitle/FormTitle";
import SuccessLogo from "../../SuccessLogo/SuccessLogo";

const TemplateFour = ({ onChange }) => {
  return (
    <div>
      <div className="flex items-center justify-center mb-10">
        <SuccessLogo />
      </div>
      <div className=" mb-8">
        <FormTitle
          title="Congratulations, Eren!"
          subTitle="You have completed onboarding, you can start using Eden!"
        />
      </div>
      <div className="p-4 md:p-0 md:max-w-[350px] w-full mx-auto">
        <Button text="Launch Eden" onClick={() => onChange()} type="submit" />
      </div>
    </div>
  );
};

export default TemplateFour