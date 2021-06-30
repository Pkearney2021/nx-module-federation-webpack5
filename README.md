

# NX webpack5 react

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Container App](http://localhost:4200/)
  - `yarn start container`
- [Home App](http://localhost:4100/)
  - `yarn start home`

To run both apps in parallel
`yarn start:all`


#### Issue
- Container app consumes a federated module from the home app
- The container app loads the `remoteEntry` file but fails to load the component. Seems to be loading it from the wrong host.

- `Uncaught ChunkLoadError: Loading chunk entry2_js failed.
(error: http://localhost:4200/entry2_js.js)`

It should be requesting the `entry2_js.js` file from `localhost:4100`

#### Notes
- This repo is using a local registry version of nx to enable webpack 5
- See [Add support for webpack 5 in Nx 12.x](https://github.com/nrwl/nx/pull/5892)

#### please help :) 
