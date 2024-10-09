import { createContext, Dispatch, SetStateAction, useState } from 'react';

type PropertiesContextType = {
  isGrid: boolean;
  checked: never[];
  setIsGrid: Dispatch<SetStateAction<boolean>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setChecked: any;
  checkCount: number;
  // deleteIndex: any;
  // setDeleteIndex: Dispatch<SetStateAction<any>>;
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
  // ? for getting the index of the individual list item about to be deleted
  // const [deleteIndex, setDeleteIndex] = useState();

  const value = {
    isGrid,
    checked,
    checkCount,
    // deleteIndex,
    setIsGrid,
    setChecked,
    // setDeleteIndex,
  };

  return (
    <PropertiesContext.Provider value={value}>
      {children}
    </PropertiesContext.Provider>
  );
};
