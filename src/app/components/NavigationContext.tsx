import { createContext, useContext, ReactNode } from "react";

interface NavigationContextType {
  setActive?: (id: string) => void;
}

const NavigationContext = createContext<NavigationContextType>({});

export function NavigationProvider({ 
  children, 
  setActive 
}: { 
  children: ReactNode;
  setActive: (id: string) => void;
}) {
  return (
    <NavigationContext.Provider value={{ setActive }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
