import { observer } from "mobx-react"
import React from "react"
import { Text } from "react-native"
import { useStore } from "./stores"

export default observer(() => {
  const { store1 } = useStore()

  return (
    <Text
      style={{
        fontSize: 23,
        color: "white",
      }}
    >
      useStore 1 {store1.ready ? "READY" : "WAITING"}
    </Text>
  )
})
