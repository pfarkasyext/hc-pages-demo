import * as React from "react";
import { useEffect, useState } from "react";

const SpecialtyProviders = (props: any) => {
  const { title, showAllText, data } = props;
  const [items, setItems] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    data.length >= 11 ? setItems(data.slice(0, 10)) : setItems(data);
  }, []);

  const toggleGridItems = () => {
    setShowAll(!showAll);
    if (showAll) {
      data.length >= 11 && setItems(data.slice(0, 10));
    } else {
      setItems(data);
    }
  };
  /**/
  return (
    <div className="mx-auto max-w-7xl  sm:px-2 lg:px-4">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div className="text-2xl my-6 tracking-tight text-gray-900">
          {title}
        </div>
      </div>
      {items && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map((item: any, index: any) => (
            <a
              href={item.slug ? item.slug : "#"}
              key={index}
              className={`relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-gray-50 hover:bg-gray-200 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400   transition-opacity duration-500 delay-${
                index * 50
              }`}
            >
              {(item.logo || item.headshot) && (
                <div className="flex-shrink-0">
                  {item.logo ? (
                    <img
                      className="h-10 w-10 rounded-full"
                      src={item.logo.image.url}
                      alt=""
                    />
                  ) : (
                    <img
                      className="h-10 w-10 rounded-full"
                      src={item.headshot.url}
                      alt=""
                    />
                  )}
                </div>
              )}
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
      {data.length >= 11 && (
        <button
          className="mt-4 mx-auto py-2 px-4 bg-gray-100 text-black rounded hover:bg-gray-300 transition text-center flex  "
          onClick={toggleGridItems}
        >
          {showAll ? "Show Less" : showAllText}
        </button>
      )}
    </div>
  );
};

export default SpecialtyProviders;
