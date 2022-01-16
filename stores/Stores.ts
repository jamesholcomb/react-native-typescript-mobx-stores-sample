import { makeObservable, observable, runInAction } from "mobx"

export class Store1 {
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

    console.debug("store1 initialized")

    return true
  }
}

export class Store2 {
  rootStore
  x: string = "1"
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

    console.debug("store2 initialized")

    return true
  }
}

export class Store3 {
  rootStore
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

    console.debug("store3 initialized")

    return true
  }
}

export class RootStore {
  store1
  store2
  store3

  constructor() {
    this.store1 = new Store1(this)
    this.store2 = new Store2(this)
    this.store3 = new Store3(this)
  }
}
