import { observer } from "mobx-react"
import React from "react"
import { Text } from "react-native"
import { Store2 } from "./stores"
import { withStore } from "./stores/StoreProvider"

type Props = {
  store2: Store2
}

class TextWithStore extends React.Component<Props> {
  render() {
    return (
      <Text
        style={{
          fontSize: 23,
          color: "white",
        }}
      >
        withStore 2 {this.props.store2.ready ? "READY" : "WAITING"}
      </Text>
    )
  }
}

export default withStore(observer(TextWithStore))
