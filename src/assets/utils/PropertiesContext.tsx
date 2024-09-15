import { createContext, Dispatch, SetStateAction, useState } from 'react';

type PropertiesContextType = {
  uncheckBoxes: boolean;
  setUncheckBoxes: Dispatch<SetStateAction<boolean>>;
};

export const PropertiesContext = createContext<PropertiesContextType>({
  uncheckBoxes: false,
  setUncheckBoxes: () => false,
});

export const ContextAPI: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [uncheckBoxes, setUncheckBoxes] = useState<boolean>(false);

  return (
    <PropertiesContext.Provider value={{ uncheckBoxes, setUncheckBoxes }}>
      {children}
    </PropertiesContext.Provider>
  );
};
