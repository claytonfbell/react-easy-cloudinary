// @ts-ignore
import { CloudinaryContext } from 'cloudinary-react';
import React from 'react';

type ContextType = {
  cloudinaryId: string;
};

const Context = React.createContext<ContextType | undefined>(undefined);
export function useCloudinary() {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error(`useCloudinary must be used within a CloudinaryProvider`);
  }
  return context;
}

type Props = {
  children: React.ReactNode;
  cloudinaryId: string;
};

export function CloudinaryProvider(props: Props) {
  const { cloudinaryId } = props;

  const value = React.useMemo(
    (): ContextType => ({
      cloudinaryId,
    }),
    [cloudinaryId]
  );
  return (
    <Context.Provider value={value}>
      <CloudinaryContext cloudName={props.cloudinaryId}>
        {props.children}
      </CloudinaryContext>
    </Context.Provider>
  );
}
