import * as React from "react";
import Cta from "./cta";
import { render } from "../templates/robots";

type BlogPostContent = {
    c_blogPostContentOriginal?: string;
    c_blogPostContentSimpleEnglish?: string;
    c_blogPostContentForKids?: string;
  };

const BlogPostContent = (props: BlogPostContent) => {
  const {
    c_blogPostContentOriginal,
    c_blogPostContentSimpleEnglish,
    c_blogPostContentForKids
  } = props;

  return (
    <>
        <div className="py-8">{c_blogPostContentOriginal}</div>
    </>
  );
};

export default BlogPostContent;
