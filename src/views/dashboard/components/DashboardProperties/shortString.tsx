type shortStringType = {
  propertySize: string;
  pricePerFragment: string;
  totalAssetPrice: string;
  location: string;
  propertyName: string;
};

export const getShortString = (
  str: string,
  makeStringShort: React.Dispatch<React.SetStateAction<shortStringType>>,
  valueName: string,
  len: number
) => {
  if (str.length > len)
    makeStringShort(prev => {
      return {
        ...prev,
        [valueName]: str
          .split('')
          .splice(0, len)
          .join('')
          .padEnd(len + 3, '.'),
      };
    });
};
