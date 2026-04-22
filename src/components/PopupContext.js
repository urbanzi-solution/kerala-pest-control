"use client";

import { createContext, useContext, useState } from "react";
import PopupForm from "./PopupForm";

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openPopup = () => setOpen(true);

  return (
    <PopupContext.Provider value={{ openPopup }}>
      {children}

      {/* ✅ GLOBAL POPUP */}
      <PopupForm open={open} setOpen={setOpen} />
    </PopupContext.Provider>
  );
}

export function usePopup() {
  return useContext(PopupContext);
}