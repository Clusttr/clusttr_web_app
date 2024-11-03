import { createContext, Dispatch, SetStateAction, useState } from 'react';

type PropertiesContextType = {
  formData: {
    propertyName: string;
    location: string;
    description: string;
    address: string;
    propertyType: string;
    year: string;
    propertySize: number;
    bedrooms: number;
    bathrooms: number;
    pricePerFragment: number;
    totalAssetPrice: number;
    totalAssetValue: number;
    landArea: number;
    latitude: number;
    longitude: number;
  };
  setFormData: Dispatch<
    SetStateAction<{
      propertyName: string;
      location: string;
      description: string;
      address: string;
      propertyType: string;
      year: string;
      propertySize: number;
      bedrooms: number;
      bathrooms: number;
      pricePerFragment: number;
      totalAssetPrice: number;
      totalAssetValue: number;
      landArea: number;
      latitude: number;
      longitude: number;
    }>
  >;
};

export const UploadContext = createContext<PropertiesContextType>(
  {} as PropertiesContextType
);

export const UploadAPI: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState({
    propertyName: '',
    location: '',
    description: '',
    address: '',
    propertyType: '',
    year: '',
    propertySize: 0,
    bedrooms: 0,
    bathrooms: 0,
    pricePerFragment: 0,
    totalAssetPrice: 0,
    totalAssetValue: 0,
    landArea: 0,
    latitude: 0,
    longitude: 0,
  });

  const value = {
    formData,
    setFormData,
  };

  return (
    <UploadContext.Provider value={value}>{children}</UploadContext.Provider>
  );
};
