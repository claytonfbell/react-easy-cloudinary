import React from "react"
import { CloudinaryImage, CloudinaryProvider } from "react-easy-cloudinary"

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
        width={100}
        height={60}
        resize="fill"
      />
      <CloudinaryImage
        publicId="claybell-net/keyboards/stainless1.jpg"
        width={300}
        height={50}
        resize="fill"
        fullWidth
      />
    </CloudinaryProvider>
  )
}
