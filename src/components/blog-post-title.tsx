import * as React from "react";
import Cta from "./cta";
import { render } from "../templates/robots";

export type Headshot = {
    url: string;
  };

const BlogPostTitle = (props: any) => {
  const {
    name,
    photoGallery
  } = props;

  return (
    <>
        <img src=""></img>
        <h1 className="text-3xl font-semibold pt-8">{name}</h1>
    </>
  );
};

export default BlogPostTitle;
