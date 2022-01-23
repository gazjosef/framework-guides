import React, { createContext } from "react";

interface AppStateValue {
  cart: {
    items: { name: string; price: number }[];
  };
}

const defaultStateValue: AppStateValue = {
  cart: {
    items: [],
  },
};

export const AppStateContext = createContext(defaultStateValue);
