import { useSearchActions } from "@yext/search-headless-react";
import {
  AppliedFilters,
  CardProps,
  Pagination,
  ResultsCount,
  StandardCard,
  StandardFacets,
  VerticalResults,
  LocationBias,
} from "@yext/search-ui-react";
import * as React from "react";
import { useLayoutEffect } from "react";
import SpecialityCard from "./specialityCard";

const Specialities_res = () => {
  const searchActions = useSearchActions();
  useLayoutEffect(() => {
    searchActions.setVertical("specialties");
    searchActions.executeVerticalQuery();
  }, []);
  return (
    <div className="max-w-7xl mx-auto mt-4">
      <div className="flex">
        <div
          className=" shrink-0 px-5  pt-5 mr-4"
          style={{ maxWidth: "18rem" }}
        >
          <StandardFacets />
        </div>
        <div className="flex-grow">
          <div className="flex items-baseline">
            <ResultsCount />
            <AppliedFilters />
          </div>
          <VerticalResults CardComponent={SpecialityCard} />
          <Pagination customCssClasses={{ paginationContainer: "mt-4" }} />
          <LocationBias />
        </div>
      </div>
    </div>
  );
};

export default Specialities_res;
