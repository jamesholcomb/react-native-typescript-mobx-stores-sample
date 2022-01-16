import Store1 from "./Store1"
import Store2 from "./Store2"
import Store3 from "./Store3"

class RootStore {
  store1
  store2
  store3

  constructor() {
    this.store1 = new Store1(this)
    this.store2 = new Store2(this)
    this.store3 = new Store3(this)
  }
}

export default RootStore
