"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { signinApi } from "@/services/authServices";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const schema = yup
  .object({
    email: yup.string().required("ایمیل الزامی است").email("ایمیل نامعتبر است"),
    password: yup
      .string()
      .required("رمز عبور الزامی است")
      .min(8, "رمز عبور باید بیشتر از ۸ کارکتر باشد"),
  })
  .required();

function Signin() {
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
      email: values.email,
      password: values.password,
    };

    try {
      const { user, message } = await signinApi(userData);

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
        ورود به حساب کاربری
      </h1>

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

      <Link href="/signup" className="text-secondary-600">
        ایجاد حساب کاربری
      </Link>
    </div>
  );
}
export default Signin;
