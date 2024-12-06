import { useOptimistic, useState } from "react";

import { FormButton } from "../components/FormButton";
import { utils } from "../utils";

type Props = {
  name: string;
  onChanged: (newName: string) => void;
};

const ChangeName: React.FC<Props> = ({ name, onChanged }) => {
  const [optName, setOptName] = useOptimistic(name);

  const handleSubmit = async (formData: FormData) => {
    const newName = formData.get("name")?.toString() || "";
    setOptName(newName);
    const response = await utils.api.mockCall<string>(() => newName);
    onChanged(response);
  };

  return (
    <>
      <div className="grid">
        <form action={handleSubmit}>
          <input disabled={name !== optName} name="name" />
          <FormButton>Change it</FormButton>
        </form>
      </div>
      <div className="grid">
        <p>Your optimistic name is: {optName}</p>
      </div>
    </>
  );
};

export const UseOptimistic = () => {
  const [name, setName] = useState<string>("Matheus");
  return (
    <>
      <title>UseOptimistic</title>
      <h1>UseOptimistic</h1>
      <p>
        A common UI pattern when performing a data mutation is to show the final
        state optimistically while the async request is underway. In React 19,
        we&apos;re adding a new hook called <code>useOptimistic</code> to make
        this easier.
      </p>
      <h3>Example: Changing name</h3>
      <ChangeName name={name} onChanged={(newName) => setName(newName)} />
      <div className="grid">
        <p>Your real name is: {name}</p>
      </div>
    </>
  );
};
