## Steps to run a local version of nx with Webpack 5 support for react.

[See this guide for official steps on setting up a local registry](https://github.com/nrwl/nx/blob/master/CONTRIBUTING.md#publishing-to-a-local-registry)

[See this video for a quick video tutorial](https://www.youtube.com/watch?v=Tx257WpNsxc)

[Support for webpack 5 with React](https://github.com/nrwl/nx/pull/5892) was merged in recently into the NX repo

#### Setting up a local registry

1. Clone the latest [NX](https://github.com/nrwl/nx) repo
2. Go into the directory of the newly cloned repo and run `yarn` to install all the dependencies
3. Set up a local yarn registry
   `yarn local-registry enable`
4. Start the local registry
   `yarn local-registry start`
5. Visit the running local-registry service by going to http://localhost:4873
6. Keep this terminal window open.
7. Open a new terminal and run
   `yarn nx-release 12.5.9999 --local`
8. Your new version should be pushed to your local registry

Note - _The version passed to the nx-release command above just needs to be higher than the latest released version of NX. At the time of writing this document the latest release of NX was 12.5.2 so just pick a really high number or a unique build name_

#### Create an nx-workspace with your local version of NX

1. Open a new terminal and run
   `npx create-nx-workspace@12.5.9999 my-nx-workspace`
2. Once the workspace is created open your favorite code editor and open the newly created NX workspace
3. Verify the version of `@nrwl/workspace` in your `package.json` is the same version as the one you pushed to the local registry `12.5.9999`

#### Enable webpack 5 for React apps

To enable webpack 5 support, install the following packages to your newly created nx workspace.

```yarn add -D \
copy-webpack-plugin@9.0.0 \
fork-ts-checker-webpack-plugin@6.2.10 \
mini-css-extract-plugin@1.6.0 \
source-map-loader@2.0.1 \
terser-webpack-plugin@5.1.1 \
webpack@5.39.1 \
webpack-dev-server@3.11.2 \
webpack-merge@5.7.3 \
webpack-node-externals@2.5.2 \
webpack-sources@2.2.0
```

Adding the above packages enables webpack 5 support for React apps inside an NX repo.

#### Required changes to ensure module federation works.

_In your application that is going to expose a component using module federation it is important to make these small changes to ensure you don't run into the same issues that me and some colleagues did._

1. For any application is going to expose a module ensure `runtimeChunk` is set to false in the options of the build target. See this [line](https://github.com/Pkearney2021/nx-module-federation-webpack5/blob/main/workspace.json#L90) for an example
2. Create a custom webpack config in the application directory and update the `workspace.json` to use this custom webpack config. See this [line](https://github.com/Pkearney2021/nx-module-federation-webpack5/blob/main/workspace.json#L99) for an example.
3. Inside the custom webpack config override the parameter provided `config` context. [Example](https://github.com/Pkearney2021/nx-module-federation-webpack5/blob/main/apps/home/config/webpack/webpack.js#L5)
4. The two above changes will generate the correct `remoteEntry` file.

You can now use the above steps to expose federated modules and consume them as you would any normal application outside of an NX monorepo.
