import * as React from "react";
import { useState } from "react";

const SpecialtyProviders = (props: any) => {
  const { name, c_treatedBy } = props;
  const [items, setItems] = useState(c_treatedBy.slice(0, 10));
  const [showAll, setShowAll] = useState(false);
  const remaining = c_treatedBy.length - 30;

  const toggleGridItems = () => {
    setShowAll(!showAll);
    if (showAll) {
      setItems(c_treatedBy.slice(0, 10));
    } else {
      setItems(c_treatedBy);
    }
  };

  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-16 sm:px-2 sm:py-24 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="text-2xl my-6 tracking-tight text-gray-900">
            Providers who specialize in {name}:
          </div>
        </div>
        {items && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            {items.map((item: any, index: any) => (
              <a
                href={item.slug}
                key={index}
                className={`relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-gray-50 hover:bg-gray-200 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400   transition-opacity duration-500 delay-${
                  index * 50
                }`}
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={item.headshot.url}
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className=" font-medium text-blue-600">{item.name}</p>
                    {item.c_relatedSpecialty && (
                      <p className="truncate   text-gray-500">
                        {item.c_relatedSpecialty.map(
                          (subItem: any, index: any) => (
                            <span key={index}>
                              {subItem.name}
                              {index != item.c_relatedSpecialty.length - 1
                                ? ", "
                                : ""}
                            </span>
                          )
                        )}
                      </p>
                    )}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
        <button
          className="mt-4 mx-auto py-2 px-4 bg-gray-100 text-black rounded hover:bg-gray-300 transition text-center flex  "
          onClick={toggleGridItems}
        >
          {showAll
            ? "Show Less"
            : "Show All Providers Who Specialize in Family Medicine"}
        </button>
      </div>
    </div>
  );
};

export default SpecialtyProviders;
