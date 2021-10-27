// @ts-ignore
import { Image, Transformation } from "cloudinary-react"
import React from "react"
import PropTypes from "prop-types"

function CloudinaryImage(props: CloudinaryImageProps) {
  return (
    <Image
      publicId={props.publicId}
      width={props.fullWidth ? "100%" : undefined}
    >
      {props.resize !== undefined ? (
        <Transformation
          width={props.width}
          height={props.height}
          crop={props.resize}
        />
      ) : null}
    </Image>
  )
}

export interface CloudinaryImageProps {
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

CloudinaryImage.propTypes = {
  /** Your publicId for your image */
  publicId: PropTypes.string.isRequired,
  /** Used when resize property is set */
  width: PropTypes.number,
  /** Used when resize property is set */
  height: PropTypes.number,
  /** Scale to resize, fill to resize and crop */
  resize: PropTypes.oneOf(["scale", "fill"]),
  /** For responsive design to stretch image 100% width space available to it */
  fullWidth: PropTypes.bool,
}

export default CloudinaryImage
