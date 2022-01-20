import React from "react"
import { Text } from "react-native"
import { observer } from "mobx-react"
import { StoreContext } from "./stores/StoreProvider"
import { RootStore } from "./stores"
import { computed } from "mobx"

class TextContextStore extends React.Component {
  static contextType = StoreContext
  rootStore: RootStore = this.context

  // demonstrates that class properties are initialized correctly from store values
  // obtained via StoreContext
  label = computed(() => this.rootStore.store3.label)

  render() {
    return (
      <Text
        style={{
          fontSize: 23,
          color: "white",
        }}
      >
        importStore 3 {this.label.get()}
      </Text>
    )
  }
}

export default observer(TextContextStore)
