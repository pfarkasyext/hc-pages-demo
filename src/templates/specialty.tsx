/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
import PageLayout from "../components/page-layout";
import Favicon from "../public/yext-favicon.ico";
import "../index.css";
import SpecialtyBanner from "../components/specialty-banner";
import SpecialtyProviders from "../components/specialty-providers";
import { useState } from "react";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-4",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "slug",
      "name",
      "c_area",
      "c_specialtyDescription",
      "c_pageBannerImage",
      "c_treatedBy.name",
      "c_treatedBy.headshot",
      "c_treatedBy.slug",
      "c_treatedBy.c_relatedSpecialty.name",
      "c_treatedAt.name",
      "c_treatedAt.logo",
      "c_treatedAt.slug",
      "c_treatedAt.c_relatedSpecialty.name",
      "c_relatedReasonsForVisit.name",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["ce_specialty"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${
        document.address.line1
      }-${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and produce a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: Favicon,
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Specialty: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    _site,
    id,
    uid,
    slug,
    name,
    c_area,
    c_specialtyDescription,
    c_pageBannerImage,
    c_treatedBy,
    c_treatedAt,
    c_relatedReasonsForVisit,
  } = document;
  console.log(c_treatedAt);

  return (
    <>
      <PageLayout _site={_site} c_siteLogo={_site.c_siteLogo}>
        <div className="">
          <SpecialtyBanner
            name={name}
            c_area={c_area}
            c_specialtyDescription={c_specialtyDescription}
            c_pageBannerImage={c_pageBannerImage}
          ></SpecialtyBanner>
          {c_treatedBy && (
            <SpecialtyProviders
              title={`Providers who specialize in ${name}:`}
              data={c_treatedBy}
              showAllText={`Show All Providers Who Specialize in ${name}`}
            ></SpecialtyProviders>
          )}
          {c_treatedAt && (
            <SpecialtyProviders
              title={`Related facilities:`}
              showAllText={`Show All Facilities`}
              data={c_treatedAt}
            ></SpecialtyProviders>
          )}
          {c_relatedReasonsForVisit && (
            <SpecialtyProviders
              title={`Reasons for Visit:`}
              showAllText={`Show All Reasons`}
              data={c_relatedReasonsForVisit}
            ></SpecialtyProviders>
          )}
        </div>
      </PageLayout>
    </>
  );
};

export default Specialty;
