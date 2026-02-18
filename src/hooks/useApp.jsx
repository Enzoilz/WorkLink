import { createContext, useContext } from "react";

export const AppContext = createContext(null)

export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("Le context ne peux que être utilisé dans le provider")
    };
    return context
}