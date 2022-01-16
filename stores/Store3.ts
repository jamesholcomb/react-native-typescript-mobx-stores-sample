import { makeObservable, observable, runInAction } from "mobx"
import RootStore from "./RootStore"

class Store3 {
  rootStore: RootStore
  ready: boolean = false

  constructor(root: RootStore) {
    this.rootStore = root

    makeObservable(this, {
      ready: observable,
    })
  }

  init = async () => {
    runInAction(() => {
      this.ready = true
    })

    console.debug("Store3 initialized")

    return true
  }
}

export default Store3
