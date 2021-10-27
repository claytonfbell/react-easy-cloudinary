# react-easy-cloudinary

[![npm version](https://badge.fury.io/js/react-easy-cloudinary.svg)](https://badge.fury.io/js/react-easy-cloudinary)

This is an easy to use wrapper for [cloudinary-react](https://www.npmjs.com/package/cloudinary-react) that is written in **TypeScript**.

Use this library if you just want to use Cloudinary images in your TypeScript project without any fuss until their new SDK with TypeScript support is ready.

<https://cloudinary.com/>

## installation

```bash
// npm
npm install react-easy-cloudinary

// yarn
yarn add react-easy-cloudinary
```

## usage

```tsx
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
```

### Props

These are the component props

```tsx
interface CloudinaryImageProps {
  /** Your publicId for your image */
  publicId: string
  /** Used when resize property is set */
  width?: number
  /** Used when resize property is set */
  height?: number
  /** Scale to resize, fill to resize and crop */
  resize?: "scale" | "fill"
  /** For responsive design to stretch image 100% width space available to it */
  fullWidth?: boolean
}
```
