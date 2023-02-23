import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { FC, memo } from "react";

export type ErrorProps = {
  error: FetchBaseQueryError | SerializedError | undefined;
};
const Error: FC<ErrorProps> = ({ error }) => {
  if (!error) {
    return null;
  }

  if ("status" in error) {
    return (
      <div className="flex flex-col justify-end h-screen mx-48 mb-10">
        <div className="p-2 text-white bg-red-800 position">
          <div>Error with status : {error.status} </div>
          {/* <div>{error.data}</div> */}
        </div>
      </div>
    );
  } else {
    return <div>Serialized error: {error.message}</div>;
  }
};

Error.defaultProps = {};

export default memo(Error);
