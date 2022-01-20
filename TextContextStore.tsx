import React from "react"
import { Text } from "react-native"
import { observer } from "mobx-react"
import { StoreContext } from "./stores/StoreProvider"
import { RootStore } from "./stores"
import { computed, makeObservable } from "mobx"

const valid = (val: any) => `${val ? "ok" : "undefined"}`

class TextContextStore extends React.Component {
  static contextType = StoreContext
  rootStore: RootStore = this.context

  // must use the deprecated constructor signature
  constructor(props: any, context: React.Context<RootStore>) {
    super(props, context)

    makeObservable(this, {
      label: computed,
    })

    console.debug(
      `TextContextStore:constructor rootStore ${valid(this.rootStore)}`
    )
    console.debug(`TextContextStore:constructor context ${valid(this.context)}`)
  }

  // demonstrates that class properties are initialized correctly from store values
  // obtained via StoreContext
  get label() {
    return this.rootStore.store3.label
  }

  componentDidMount() {
    console.debug(`TextContextStore:cDM rootStore ${valid(this.rootStore)}`)
    console.debug(`TextContextStore:cDM context ${valid(this.context)}`)
  }

  render() {
    return (
      <Text
        style={{
          fontSize: 23,
          color: "white",
        }}
      >
        context 3 {this.label}
      </Text>
    )
  }
}

export default observer(TextContextStore)
