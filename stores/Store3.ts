import { computed, makeObservable, observable, runInAction } from "mobx"
import { RootStore } from "./"

class Store3 {
  rootStore: RootStore
  ready: boolean = false

  constructor(root: RootStore) {
    this.rootStore = root

    makeObservable(this, {
      ready: observable,
      label: computed,
    })
  }

  get label() {
    return this.ready ? "READY" : "WAITING"
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
