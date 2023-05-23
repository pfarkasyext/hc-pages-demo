import { CardProps } from "@yext/search-ui-react";
import * as React from "react";
const SpecialityCard = (props: CardProps<any>): JSX.Element => {
  const { result } = props;
  return (
    <div className="border p-4 m-4 flex flex-col gap-y-2 text-xl font-light">
      <div>{result.name}</div>
      <div className="font-medium">
        <a href={result.rawData.slug} className="text-blue-500">
          View Details
        </a>
      </div>
    </div>
  );
};

export default SpecialityCard;
