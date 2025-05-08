"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "@/Redux/Store/Store";

const ClientProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
