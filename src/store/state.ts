export interface State {
  cartCount: number,
  cart: []
}

// const versionString =
//   import.meta.env.MODE === 'development'
//     ? import.meta.env.VITE_APP_VERSION + '-dev'
//     : import.meta.env.VITE_APP_VERSION

export const state: State = {
  cartCount: 0,
  cart: []
}
