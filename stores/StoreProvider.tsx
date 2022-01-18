import React, { createContext, useContext } from "react"
/**
 * https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
 */
import hoistNonReactStatics from "hoist-non-react-statics"
import rootStore, { RootStore } from "./RootStore"

export const StoreContext = createContext<RootStore>(rootStore)

StoreContext.displayName = "StoreContext"

export const useStore = () => {
  return useContext(StoreContext)
}

export const StoreProvider = ({ children }: any) => {
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  )
}

export const withStore = (WrappedComponent: React.ComponentClass<any>) => (
  props: any
) => {
  const ComponentWithStores = () => {
    const stores = useStore()

    return <WrappedComponent {...props} {...stores} />
  }

  ComponentWithStores.defaultProps = { ...WrappedComponent.defaultProps }
  ComponentWithStores.displayName = `WithStores(${
    WrappedComponent.name || WrappedComponent.displayName
  })`

  hoistNonReactStatics(ComponentWithStores, WrappedComponent)

  return <ComponentWithStores />
}
