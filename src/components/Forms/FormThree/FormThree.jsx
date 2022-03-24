import React from "react";
import Button from "../../Button/Button";
import SelectedCard from "../../SelectedCard/SelectedCard";
import FormTitle from "../../FormTitle/FormTitle";

const FormThree = ({ onChange }) => {
  return (
    <div>
      <div className=" mb-12">
        <FormTitle
          title="How are you planning to use Eden?"
          subTitle="We'll streamline your setup experience accordingly."
        />
      </div>
      <div className="p-4 md:p-0 md:max-w-[350px] w-full mx-auto">
        <SelectedCard />
        <Button
          text="Create Workspace"
          onClick={() => onChange()}
          type="submit"
        />
      </div>
    </div>
  );
};

export default FormThree