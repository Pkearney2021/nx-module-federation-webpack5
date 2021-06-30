const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('../../../../package.json');

module.exports = (config, context) => {

  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'home',
      filename: 'remoteEntry.js',
      exposes: {
        './Home': 'apps/home/src/entry2.js',
      },
      shared: {
        ...dependencies,
      },
    })
    );
    config.output.publicPath = 'http://localhost:4100/';

  return config;
};
