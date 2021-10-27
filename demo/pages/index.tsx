import React from 'react';
import { CloudinaryImage, CloudinaryProvider } from 'react-easy-cloudinary';

export default function App() {
  return (
    <CloudinaryProvider cloudinaryId="doqodlq85">
      <CloudinaryImage
        publicId="claybell-net/keyboards/stainless1.jpg"
        width={300}
        resize="scale"
      />
      <CloudinaryImage
        publicId="claybell-net/keyboards/stainless1.jpg"
        width={300}
        height={200}
        resize="fill"
      />
    </CloudinaryProvider>
  );
}
