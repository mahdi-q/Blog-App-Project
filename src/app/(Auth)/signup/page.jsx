"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { signupApi } from "@/services/authServices";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const schema = yup
  .object({
    fullname: yup
      .string()
      .required("نام و نام خانوادگی الزامی است")
      .min(5, "نام باید بیشتر از ۵ کارکتر باشد")
      .max(30, "نام باید کمتر از ۳۰ کارکتر باشد"),
    email: yup.string().required("ایمیل الزامی است").email("ایمیل نامعتبر است"),
    password: yup
      .string()
      .required("رمز عبور الزامی است")
      .min(8, "رمز عبور باید بیشتر از ۸ کارکتر باشد"),
  })
  .required();

function Signup() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    const userData = {
      name: values.fullname,
      email: values.email,
      password: values.password,
    };

    try {
      const { user, message } = await signupApi(userData);
      
      router.push("/profile");
      toast.success(message);
      reset();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
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
