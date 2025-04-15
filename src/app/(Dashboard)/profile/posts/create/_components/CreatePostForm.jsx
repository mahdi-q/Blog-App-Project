"use client";

import { useCategories } from "@/hooks/useCategories";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  title: yup.string().required("عنوان الزامی است"),
  briefText: yup.string().required("خلاصه متن الزامی است"),
  text: yup.string().required("متن الزامی است"),
  slug: yup.string().required("اسلاگ الزامی است"),
  readingTime: yup
    .number()
    .typeError("زمان مطالعه باید فقط عدد باشد")
    .required("زمان مطالعه الزامی است"),
});

function CreatePostForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { categories } = useCategories();

  return (
    <form className="post__form">
      <RHFTextField
        name="title"
        label="عنوان"
        register={register}
        errors={errors}
        isRequired
      />

      <RHFTextField
        name="briefText"
        label="خلاصه متن"
        register={register}
        errors={errors}
        isRequired
      />

      <RHFTextField
        name="text"
        label="متن"
        register={register}
        errors={errors}
        isRequired
      />

      <RHFTextField
        name="slug"
        label="اسلاگ"
        register={register}
        errors={errors}
        isRequired
      />

      <RHFTextField
        name="readingTime"
        label="زمان مطالعه"
        type="number"
        register={register}
        errors={errors}
        isRequired
      />

      <RHFSelect
        name="category"
        label="دسته بندی"
        register={register}
        errors={errors}
        isRequired
        options={categories}
      />
    </form>
  );
}
export default CreatePostForm;
