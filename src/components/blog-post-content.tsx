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
        <div className="uppercase py-8 gap-x-2 flex">
          <Cta
            buttonText="Original Text"
            url="#"
            style="text-white bg-brand-cta shadow-xl hover:bg-brand-cta-hover hover:underline w-fit flex font-normal"
            target="_self"
          ></Cta>
          <Cta
            buttonText="Simplified English"
            url="#"
            style="text-white bg-brand-cta shadow-xl hover:bg-brand-cta-hover hover:underline w-fit flex font-normal"
            target="_self"
          ></Cta>
          <Cta
            buttonText="For Kids"
            url="#"
            style="text-white bg-brand-cta shadow-xl hover:bg-brand-cta-hover hover:underline w-fit flex font-normal"
            target="_self"
          ></Cta>
        </div>
        <div className="py-4">{c_blogPostContentOriginal}</div>
    </>
  );
};

export default BlogPostContent;
