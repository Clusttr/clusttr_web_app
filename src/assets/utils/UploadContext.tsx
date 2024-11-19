import { createContext, Dispatch, SetStateAction, useState } from 'react';

type FormDataType = {
  propertyName: string;
  location: string;
  description: string;
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  singleImage: null | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  multipleImages: any[];
};
type SetFormDataType = Dispatch<SetStateAction<FormDataType>>;

type descriptionType = {
  name: string;
  size: number;
  width: number;
  height: number;
  type: string;
  url: string;
};

type PropertiesContextType = {
  formData: FormDataType;
  setFormData: SetFormDataType;
  maxSize: number;
  maxWidth: number;
  maxHeight: number;
  allowedTypes: string[];
  formDataDefaults: FormDataType;
  singleImageDescriptionDefault: descriptionType;
  singleImageDescription: descriptionType;
  multipleImagesDescription: descriptionType[];
  setSingleImageDescription: Dispatch<SetStateAction<descriptionType>>;
  setMultipleImagesDescription: Dispatch<SetStateAction<descriptionType[]>>;
  singleFileIsSelected: boolean;
  setSingleFileIsSelected: Dispatch<SetStateAction<boolean>>;
};

export const UploadContext = createContext<PropertiesContextType>(
  {} as PropertiesContextType
);

export const UploadAPI: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const formDataDefaults = {
    propertyName: '',
    location: '',
    description: '',
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
    singleImage: null,
    multipleImages: [],
  };
  const singleImageDescriptionDefault = {
    name: '',
    size: 0,
    width: 0,
    height: 0,
    type: '',
    url: '',
  };
  const [formData, setFormData] = useState<FormDataType>({
    //temporary test data
    propertyName: 'faj',
    location: 'fa',
    description: 'fa',
    propertyType: 'fa',
    year: '4222',
    propertySize: 10,
    bedrooms: 10,
    bathrooms: 10,
    pricePerFragment: 10,
    totalAssetPrice: 10,
    totalAssetValue: 10,
    landArea: 10,
    latitude: 10,
    longitude: 10,
    singleImage: null,
    multipleImages: [],
    //formDataDefaults
  });
  const maxSize = 10;
  const maxWidth = 800;
  const maxHeight = 400;
  const allowedTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/svg'];

  // ? Image Description:
  const [singleImageDescription, setSingleImageDescription] = useState(
    singleImageDescriptionDefault
  );
  const [multipleImagesDescription, setMultipleImagesDescription] = useState<
    descriptionType[]
  >([]);
  const [singleFileIsSelected, setSingleFileIsSelected] = useState(false);

  const value = {
    formData,
    setFormData,
    maxSize,
    maxWidth,
    maxHeight,
    allowedTypes,
    formDataDefaults,
    singleImageDescription,
    multipleImagesDescription,
    singleFileIsSelected,
    singleImageDescriptionDefault,
    setSingleImageDescription,
    setMultipleImagesDescription,
    setSingleFileIsSelected,
  };

  return (
    <UploadContext.Provider value={value}>{children}</UploadContext.Provider>
  );
};
