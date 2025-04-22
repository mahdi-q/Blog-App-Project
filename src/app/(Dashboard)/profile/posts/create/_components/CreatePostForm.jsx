"use client";

import { useCategories } from "@/hooks/useCategories";
import ButtonIcon from "@/ui/ButtonIcon";
import FileInput from "@/ui/FileInput";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import { TrashIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
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
  const [coverImageUrl, setCoverImageUrl] = useState(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
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

      <Controller
        name="coverImage"
        control={control}
        rules={{ required: "کاور پست الزامی است" }}
        render={({ field: { value, onChange, ...rest } }) => (
          <FileInput
            label="انتخاب کاور پست"
            name="coverPost"
            value={value?.fileName}
            onChange={(event) => {
              const file = event.target.files[0];
              onChange(file);
              setCoverImageUrl(URL.createObjectURL(file));
              event.target.value = null;
            }}
            {...rest}
          />
        )}
      />

      {coverImageUrl && (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            fill
            alt="cover-image"
            src={coverImageUrl}
            className="object-cover object-center"
          />

          <ButtonIcon
            varient="red"
            className="absolute bottom-2 left-2"
            onClick={() => {
              setCoverImageUrl(null);
              setValue("coverImage", null);
            }}
          >
            <TrashIcon />
          </ButtonIcon>
        </div>
      )}
    </form>
  );
}
export default CreatePostForm;
