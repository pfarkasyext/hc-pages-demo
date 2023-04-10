import * as React from "react";
import Cta from "./cta";
import { render } from "../templates/robots";
import { Image } from "@yext/pages/components";

type Image = {
  height: number;
  url: string;
  width: number;
}

const BlogPostTitle = (props: any) => {
  const {
    name,
    photoGallery,
    c_author,
    datePosted,
    c_summary,
  } = props;

  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold pt-8">{name}</h1>
        <div className="text-lg pt-4 text-brand-primary-dark font-semibold">{c_author}   |   {datePosted}</div>
        <div className="text-lg italic">{c_summary}</div>
      </div>
    </>
  );
};

export default BlogPostTitle;
