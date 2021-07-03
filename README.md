# NX Webpack 5 react

- [Container App](http://localhost:4200/)
  - `yarn start container`
- [Home App](http://localhost:4100/)
  - `yarn start home`

To run both apps in parallel
`yarn start:all`

#### Notes

- This repo is using a local registry version of nx to enable webpack 5
- See [Add support for webpack 5 in Nx 12.x](https://github.com/nrwl/nx/pull/5892)

The home app exposes a component `Home` which renders a `<h2>Home Remote</h2>`
The `container` app consumes the exposed `Home` component and renders it. TAAA DAHH! Module federation working inside of an NX monorepo.
