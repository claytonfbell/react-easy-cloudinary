// @ts-ignore
import { CloudinaryContext } from "cloudinary-react"
import React from "react"
import PropTypes from "prop-types"

type ContextType = {
  cloudinaryId: string
}

const Context = React.createContext<ContextType | undefined>(undefined)
export function useCloudinary() {
  const context = React.useContext(Context)
  if (!context) {
    throw new Error(`useCloudinary must be used within a CloudinaryProvider`)
  }
  return context
}

function CloudinaryProvider(props: CloudinaryProviderProps) {
  const { cloudinaryId } = props

  const value = React.useMemo(
    (): ContextType => ({
      cloudinaryId,
    }),
    [cloudinaryId]
  )
  return (
    <Context.Provider value={value}>
      <CloudinaryContext cloudName={props.cloudinaryId}>
        {props.children}
      </CloudinaryContext>
    </Context.Provider>
  )
}

export interface CloudinaryProviderProps {
  children: React.ReactNode
  /** Your cloundinary account's unique ID  */
  cloudinaryId: string
}

CloudinaryProvider.propTypes = {
  children: PropTypes.node.isRequired,
  /** Your cloundinary account's unique ID  */
  cloudinaryId: PropTypes.string.isRequired,
}

export default CloudinaryProvider
