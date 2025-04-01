import { useFormStatus } from "react-dom";
import Button from "./Button";
import SvgLoaderComponent from "./SvgLoaderComponent";

function SubmitButton({ children, className, ...rest }) {
  const { pending } = useFormStatus();

  return (
    <Button
      className={`${className} flex items-center justify-center gap-x-4`}
      disabled={pending}
      {...rest}
    >
      {children}
      {pending && <SvgLoaderComponent />}
    </Button>
  );
}
export default SubmitButton;
