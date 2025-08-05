import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../index";
import { useSelector } from "react-redux";
import appwriteConfig from "../../appwrite/config";
import { useNavigate } from "react-router-dom";

const PostForm = ({ post }) => {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    const file = data.image?.[0]
      ? await appwriteConfig.uploadFile(data.image[0])
      : null;

    if (post) {
      if (file) {
        appwriteConfig.deleteFile(post.featuredImage);
      }

      const postUpdated = await appwriteConfig.updatePost({
        ...data,
        slug: post.$id,
        featuredImage: file ? file.$id : post.featuredImage,
      });

      if (postUpdated) navigate(`/post/${postUpdated.$id}`);
    } else {
      if (file) {
        data.featuredImage = file.$id;
      }
      console.log(data);
      console.log(userData);
      console.log(userData.user.$id);

      const createdPost = await appwriteConfig.createPost({
        ...data,
        userId: userData.user.$id,
      });

      if (createdPost) navigate(`/post/${createdPost.$id}`);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s+/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscriptionObject = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscriptionObject.unsubscribe();
  }, [watch, setValue, slugTransform]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>

      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteConfig.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
