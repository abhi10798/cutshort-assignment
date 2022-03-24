import React from "react";
import Button from "../../Button/Button";
import FormTitle from "../../FormTitle/FormTitle";
import Input from "../../Input/Input";

const FormOne = ({ onChange }) => {
  return (
    <div>
      <div className=" mb-12">
        <FormTitle
          title="Welcome! First things First..."
          subTitle="You can always change them later."
        />
      </div>
      <div className="p-4 md:p-0 md:max-w-[350px] w-full mx-auto">
        <Input
          placeholder="Steve Jobs"
          label="Full Name"
          labelHelper=""
          type="text"
          name="fullName"
          inputHelper=""
        />
        <Input
          placeholder="Steve"
          label="Display Name"
          labelHelper=""
          type="text"
          name="displayName"
          inputHelper=""
        />
        <Button
          text="Create Workspace"
          onClick={() => onChange()}
          type="submit"
        />
      </div>
    </div>
  );
};

export default FormOne