import React, { useContext, createContext, useReducer } from "react";

export const DatalayerContext = createContext();

const DataLayer = ({ initialState, reducer, children }) => {
  <DatalayerContext.Provider value={useReducer(reducer, initialState)}>
    {" "}
    {children}{" "}
  </DatalayerContext.Provider>;
};

export const useDataLayerValue = useContext(DatalayerContext);

export default DataLayer;
