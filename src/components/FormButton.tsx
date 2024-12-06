import { useFormStatus } from "react-dom";

type Props = {
  children: React.ReactNode;
};

export const FormButton: React.FC<Props> = ({ children }) => {
  const { pending } = useFormStatus();

  return (
    <button aria-busy={pending} disabled={pending}>
      {pending ? "Please wait..." : children}
    </button>
  );
};
