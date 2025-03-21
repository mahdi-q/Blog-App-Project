"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

const schema = yup
  .object({
    fullname: yup
      .string()
      .required("نام و نام خانوادگی الزامی است")
      .min(5, "نام باید بیشتر از ۵ کارکتر باشد")
      .max(30, "نام باید کمتر از ۳۰ کارکتر باشد"),
    email: yup.string().required("ایمیل الزامی است").email("ایمیل نامعتبر است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required();

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="form">
      <h1 className="text-lg font-bold text-secondary-800">
        ایجاد حساب کاربری
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          label="نام و نام خانوادگی"
          name="fullname"
          register={register}
          errors={errors}
          isRequired
        />

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

        <Button className="mt-2 font-bold">ثبت نام</Button>
      </form>

      <Link href="/signin" className="text-secondary-600">
        ورود به حساب کاربری
      </Link>
    </div>
  );
}
export default Signup;
