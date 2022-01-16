import React from "react"
import { Text } from "react-native"
import { observer } from "mobx-react"
import { store3 } from "./stores"

class TextImportStore extends React.Component {
  render() {
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

export default observer(TextImportStore)
