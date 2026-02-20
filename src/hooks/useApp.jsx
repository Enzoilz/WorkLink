import { createContext, useContext } from "react";
import { AppContext } from "../App";

export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("Le context ne peux que être utilisé dans le provider")
    };
    return context
}