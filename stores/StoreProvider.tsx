import React, { createContext, useContext } from "react"
/**
 * https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
 */
import hoistNonReactStatics from "hoist-non-react-statics"
import { RootStore } from "./RootStore"
import { useLocalObservable } from "mobx-react"

export const StoreContext = createContext<RootStore | null>(null)

StoreContext.displayName = "StoreContext"

/**
 * @returns {RootStore}
 */
export const useStore = () => {
  const store = useContext(StoreContext)

  console.debug("useStore store1 ok?", Boolean(store?.store1))

  if (!store) {
    throw new Error("useStore must be used within a StoreProvider")
  }

  return store
}

export const StoreProvider = ({ children }: any) => {
  const rootStore = useLocalObservable(() => new RootStore())

  console.debug("StoreProvider store1 ok?", Boolean(rootStore.store1))

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
