// @ts-ignore
import { Image, Transformation } from 'cloudinary-react';
import React from 'react';

interface Props {
  publicId: string;
  width?: number;
  height?: number;
  resize?: 'scale' | 'fill';
  fullWidth?: boolean;
}

export function CloudinaryImage(props: Props) {
  return (
    <Image
      publicId={props.publicId}
      width={props.fullWidth ? '100%' : undefined}
    >
      {props.resize !== undefined ? (
        <Transformation
          width={props.width}
          height={props.height}
          crop={props.resize}
        />
      ) : null}
    </Image>
  );
}
