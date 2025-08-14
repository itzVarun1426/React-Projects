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
    <form
      onSubmit={handleSubmit(submit)}
      className="glass-card max-w-2xl mx-auto p-6 rounded-xl border border-white/10 backdrop-blur-lg bg-white/10 flex flex-col gap-6"
    >
      <Input
        label="Title"
        labelclassname="text-green font-semibold"
        placeholder="Enter post title"
        className="w-full text-red placeholder-gray-500"
        {...register("title", { required: true })}
      />

      <Input
        label="Slug"
        labelclassname="text-black font-semibold"
        placeholder="Auto-generated from title"
        className="w-full text-black placeholder-gray-500"
        {...register("slug", { required: true })}
        onInput={(e) => {
          setValue("slug", slugTransform(e.currentTarget.value), {
            shouldValidate: true,
          });
        }}
      />
      <Input
        label="Featured Image"
        labelclassname="text-black font-semibold"
        type="file"
        accept="image/png, image/jpg, image/jpeg, image/gif"
        className="text-black"
        {...register("image", { required: !post })}
      />
      <RTE
        label="Content"
        labelclassname="text-black font-semibold"
        name="content"
        control={control}
        defaultValue={getValues("content")}
      />

      {post && (
        <div className="w-full">
          <img
            src={appwriteConfig.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-lg shadow-lg border border-white/10 object-cover"
          />
        </div>
      )}

      <Select
        options={["active", "inactive"]}
        label="Status"
        labelclassname="text-black font-semibold"
        className="text-black"
        {...register("status", { required: true })}
      />

      <Button
        type="submit"
        bgColor={
          post
            ? "bg-green-500 hover:bg-green-600"
            : "bg-cyan-500 hover:bg-cyan-600"
        }
        className="w-full text-white font-semibold rounded-lg shadow-md transition"
      >
        {post ? "Update" : "Submit"}
      </Button>
    </form>
  );
};

export default PostForm;
