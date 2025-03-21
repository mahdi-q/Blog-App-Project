"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    email: yup.string().required("ایمیل الزامی است").email("ایمیل نامعتبر است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required();

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="form">
      <h1 className="text-lg font-bold text-secondary-800">ورود</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          errors={errors}
          isRequired
          dir="ltr"
        />

        <RHFTextField
          label="رمز عبور"
          name="password"
          register={register}
          errors={errors}
          isRequired
          type="password"
          dir="ltr"
        />

        <Button className="mt-2 font-bold">ورود</Button>
      </form>
    </div>
  );
}
export default Signin;
