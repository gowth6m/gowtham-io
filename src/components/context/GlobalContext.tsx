import { createContext, useContext } from "react";

export type GlobalContent = {
    lightThemeGlobal: boolean;
    setLightThemeGlobal: (_value: boolean) => void;
  };
  
  export const MyGlobalContext = createContext<GlobalContent>({
    lightThemeGlobal: false, // set a default value
    setLightThemeGlobal: () => {},
  });
  
  export const useGlobalContext = () => useContext(MyGlobalContext);