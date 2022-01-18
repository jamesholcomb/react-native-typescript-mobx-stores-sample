import React from "react"
import { Text } from "react-native"
import { observer } from "mobx-react"
import { StoreContext } from "./stores/StoreProvider"
import { RootStore } from "./stores/RootStore"

class TextContextStore extends React.Component {
  static contextType = StoreContext

  render() {
    const { store3 }: RootStore = this.context

    return (
      <Text
        style={{
          fontSize: 23,
          color: "white",
        }}
      >
        importStore 3 {store3.ready ? "READY" : "WAITING"}
      </Text>
    )
  }
}

export default observer(TextContextStore)
