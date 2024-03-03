"use client";
import { useSelector } from "react-redux";
import { UiContext } from "./context";
import { RootState } from "@/redux/store";

export const UiProvider = ({ children }: any) => {
  const { isOpen } = useSelector((state: RootState) => state.menuMobile);
  return (
    <UiContext.Provider value={{}}>
      <body style={{ overflow: isOpen ? "hidden" : "auto" }}>{children}</body>
    </UiContext.Provider>
  );
};
