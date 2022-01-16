# React Native Typescript Mobx Stores

This is a React Native Typescript app configured with mobx stores using the `<Provider>` and `React.Context` patterns. The `RootStore` [pattern](https://mobx.js.org/defining-data-stores.html) is used to combine individual domain stores into a singleton to share their references.

It demonstrates a `<Text>` component using three different approaches:

- `withStore()` - For legacy class components where each store is destructured into props
- `useStore()` - For functional components using hooks
- `import { myStore } from "./stores"` - Direct import of stores

## Install

```sh
yarn
```

## Usage

**iOS**

```sh
npx pod-install
yarn ios
```

**Android**

```sh
yarn android
```

## Run tests

```sh
yarn run test
```

## 📝 License

Copyright © 2022 [James Holcomb](https://github.com/jamesholcomb).<br />
This project is [MIT](https://opensource.org/licenses/MIT) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
