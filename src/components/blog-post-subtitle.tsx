import * as React from "react";
import Cta from "./cta";
import { render } from "../templates/robots";

const BlogPostSubtitle = (props: any) => {
  const {
    c_author,
    datePosted,
    c_summary,
  } = props;

  return (
    <>
        <div className="text-lg pt-4 text-brand-primary-dark font-semibold">{c_author}   |   {datePosted}</div>
        <div className="text-lg italic">{c_summary}</div>
    </>
  );
};

export default BlogPostSubtitle;
