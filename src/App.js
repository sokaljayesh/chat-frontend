import React, { useState, useEffect, createContext } from "react";
import Routing from "./Components/Routing";
export const ThemeContext = createContext();

export default function App() {
  return (
    <>
      <Routing />
    </>
  );
}
