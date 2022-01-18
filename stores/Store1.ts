import { makeObservable, observable, runInAction } from "mobx"
import { RootStore } from "./"

class Store1 {
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

    console.debug("Store1 initialized")

    return true
  }
}

export default Store1
