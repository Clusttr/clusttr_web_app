import { createContext, Dispatch, SetStateAction, useState } from 'react';

type PropertiesContextType = {
  isGrid: boolean;
  checked: never[];
  setIsGrid: Dispatch<SetStateAction<boolean>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setChecked: any;
  checkCount:number;
};

export const PropertiesContext = createContext<PropertiesContextType>(
  {} as PropertiesContextType
);

export const ContextAPI: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isGrid, setIsGrid] = useState(true);
  const [checked, setChecked] = useState([]);
  const checkCount = checked.filter(item => item).length;


  const value = {
    isGrid,
    checked,
    checkCount,
    setIsGrid,
    setChecked,
  };

  return (
    <PropertiesContext.Provider value={value}>
      {children}
    </PropertiesContext.Provider>
  );
};
