import React, { useEffect } from "react"
import { View } from "react-native"
import { observer } from "mobx-react"
import { StoreProvider, useStore } from "./stores"
import TextContextStore from "./TextContextStore"
import TextUseStore from "./TextUseStore"
import TextWithStore from "./TextWithStore"

const App = observer(() => {
  const { store1, store2, store3 } = useStore()

  console.debug("render app: store1 ok?", Boolean(store1))

  useEffect(() => {
    const init = async () => {
      setTimeout(() => store1.init(), 1000)
      setTimeout(() => store2.init(), 2000)
      setTimeout(() => store3.init(), 3000)
    }
    init().then(() => console.debug("app initialized"))
  })

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <TextWithStore />
      <TextUseStore />
      <TextContextStore />
    </View>
  )
})

export default () => (
  <StoreProvider>
    <App />
  </StoreProvider>
)
