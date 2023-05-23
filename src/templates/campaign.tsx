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
import Banner from "../components/banner";
import Details from "../components/details";
import Hours from "../components/hours";
import List from "../components/list";
import PageLayout from "../components/page-layout";
import StaticMap from "../components/static-map";
import Favicon from "../public/yext-favicon.ico";
import "../index.css";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "campaign",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "slug",
      "meta",
      "name",
      "description",
      "c_participatingProviders.name",
      "c_participatingProviders.headshot",
      "c_participatingProviders.slug",
      "c_participatingProviders.landingPageUrl",
      "c_participatingProviders.c_relatedSpecialty.name",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityIds: ["1108233005948279075"],
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
  return document.slug ? document.slug : `${document.id.toString()}`;
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
const Campaign: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const { _site, name, description, c_participatingProviders } = document;

  return (
    <>
      <PageLayout _site={_site}>
        <div className="centered-container">
          <div className="section space-y-4">
            <div className="text-center text-3xl font-light">{name}</div>
            <div>{description}</div>
            <div className="mx-auto max-w-7xl pb-16 sm:px-2 lg:px-4">
              <div className="mx-auto   px-4   mt-16">
                <div className="text-2xl my-6 tracking-tight text-gray-900">
                  Providers at {name} campaign:
                </div>
              </div>
              {c_participatingProviders && (
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 w-full"
                >
                  {c_participatingProviders.map((person: any, index: any) => (
                    <li
                      key={index}
                      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                    >
                      <a href={person.landingPageUrl}>
                        <div className="flex flex-1 flex-col p-8">
                          <img
                            className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                            src={person.headshot.url}
                            alt=""
                          />
                          <h3 className="mt-6 text-sm font-medium text-gray-900">
                            {person.name}
                          </h3>
                          <dl className="mt-1 flex flex-grow flex-col justify-between">
                            <dt className="sr-only">Title</dt>
                            <dd className="text-sm text-gray-500">
                              {person.c_relatedSpecialty.map(
                                (subItem: any, index: any) => (
                                  <span key={index}>
                                    {subItem.name}
                                    {index !=
                                    person.c_relatedSpecialty.length - 1
                                      ? ", "
                                      : ""}
                                  </span>
                                )
                              )}
                            </dd>
                          </dl>
                        </div>
                        <div>
                          <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="flex w-0 flex-1">
                              <a
                                href=""
                                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                              >
                                <EnvelopeIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                Email
                              </a>
                            </div>
                            <div className="-ml-px flex w-0 flex-1">
                              <a
                                href=""
                                className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                              >
                                <PhoneIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                Call
                              </a>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Campaign;
