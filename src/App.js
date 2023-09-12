import React, { useEffect, useState } from "react";

const STARTDATE = '2023-09-13'

export default function App() {
  const [isQueried, setIsQueried] = useState(false);
  const [queryParams, setQueryParams] = useState(DEFAULT_QUERY_PARAMS);

  useEffect()

  return (
    <QueryContext.Provider
      value={{
        isQueried: isQueried,
        queryParams: queryParams,
        clearResults: clearResultHandler,
        updateQueryParameters: updateQueryParameters,
        generateFilter: getQueryParams,
      }}
    >
      {!isQueried && (
        <Modal>
          <QueryForm />
        </Modal>
      )}
      {isQueried && <Result />}
    </QueryContext.Provider>
  );
}
