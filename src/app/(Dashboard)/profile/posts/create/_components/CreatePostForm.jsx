"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import FileInput from "@/ui/FileInput";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import { TrashIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import useCreatePost from "../_hooks/useCreatePost";
import { useRouter } from "next/navigation";
import SubmitButton from "@/ui/SubmitButton";
import useEditPost from "../../[postId]/edit/_hooks/useEditPost";
import { imageUrlToFile } from "@/utils/fileFormatter";
import { useGetCategories } from "@/hooks/useCategories";

const schema = yup.object({
  title: yup
    .string()
    .required("عنوان الزامی است")
    .min(5, "عنوان باید حداقل ۵ کاراکتر باشد"),

  briefText: yup
    .string()
    .required("خلاصه متن الزامی است")
    .min(10, "خلاصه متن باید حداقل ۱۰ کاراکتر باشد"),

  text: yup
    .string()
    .required("متن الزامی است")
    .min(10, "متن باید حداقل ۱۰ کاراکتر باشد"),

  slug: yup.string().required("اسلاگ الزامی است"),

  readingTime: yup
    .number()
    .positive("زمان مطالعه باید عدد مثبت باشد")
    .integer("زمان مطالعه باید عدد صحیح باشد")
    .typeError("زمان مطالعه باید فقط عدد باشد")
    .required("زمان مطالعه الزامی است"),

  category: yup.string().required("دسته بندی الزامی است"),

  coverImage: yup
    .mixed()
    .test("required", "کاور پست الزامی است", (value) => {
      return value;
    })
    .test("fileSize", "حجم فایل باید کمتر از 2 مگابایت باشد", (value) => {
      return value && value.size <= 2 * 1024 * 1024;
    })
    .test("fileType", "فرمت فایل نامعتبر است", (value) => {
      return (
        value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
      );
    }),
});

function CreatePostForm({ postToEdit = {} }) {
  const editId = postToEdit._id;
  const isEditMode = Boolean(editId);
  const {
    title,
    briefText,
    text,
    slug,
    readingTime,
    category,
    coverImage,
    coverImageUrl: prevCoverImageUrl,
  } = postToEdit;

  const [coverImageUrl, setCoverImageUrl] = useState(prevCoverImageUrl || null);

  const router = useRouter();

  const { categories } = useGetCategories();

  const { isCreating, createPost } = useCreatePost();
  const { isEditing, editPost } = useEditPost();

  let editValues = {};
  if (isEditMode) {
    editValues = {
      title,
      briefText,
      text,
      slug,
      readingTime,
      category: category._id,
      coverImage,
    };
  }

  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: editValues,
  });

  useEffect(() => {
    if (prevCoverImageUrl) {
      async function changeImage() {
        const file = await imageUrlToFile(prevCoverImageUrl);
        setValue("coverImage", file);
      }

      changeImage();
    }
  }, [editId]);

  const onSubmit = (data) => {
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    if (isEditMode) {
      editPost(
        { id: editId, postData: formData },
        {
          onSuccess: () => {
            reset();
            setCoverImageUrl(null);
            router.push("/profile/posts");
          },
        },
      );
    } else {
      createPost(formData, {
        onSuccess: () => {
          reset();
          setCoverImageUrl(null);
          router.push("/profile/posts");
        },
      });
    }
  };

  return (
    <form className="post__form" onSubmit={handleSubmit(onSubmit)}>
      {/* Title Input */}
      <RHFTextField
        name="title"
        label="عنوان"
        register={register}
        errors={errors}
        isRequired
      />

      {/* Brief Text Input */}
      <RHFTextField
        name="briefText"
        label="خلاصه متن"
        register={register}
        errors={errors}
        isRequired
      />

      {/* Text Input */}
      <RHFTextField
        name="text"
        label="متن"
        register={register}
        errors={errors}
        isRequired
      />

      {/* Slug Input */}
      <RHFTextField
        name="slug"
        label="اسلاگ"
        register={register}
        errors={errors}
        isRequired
      />

      {/* Reading Time Input */}
      <RHFTextField
        name="readingTime"
        label="زمان مطالعه"
        type="number"
        register={register}
        errors={errors}
        isRequired
      />

      {/* Category Select Input */}
      <RHFSelect
        name="category"
        label="دسته بندی"
        register={register}
        errors={errors}
        isRequired
        options={categories}
      />

      {/* Cover Post Input */}
      <Controller
        name="coverImage"
        control={control}
        rules={{ required: "کاور پست الزامی است" }}
        render={({ field: { value, onChange, ...rest } }) => (
          <FileInput
            label="انتخاب کاور پست"
            name="coverPost"
            value={value?.fileName}
            errors={errors}
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

      {/* Showing Cover Post */}
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

      <SubmitButton
        isLoading={isCreating || isEditing}
        className="lg:col-start-2 lg:row-start-5 lg:w-1/2 lg:justify-self-end"
      >
        تایید
      </SubmitButton>
    </form>
  );
}
export default CreatePostForm;
