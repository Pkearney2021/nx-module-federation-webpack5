const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('../../../../package.json');

module.exports = (config, context) => {
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        home: 'home@//localhost:4100/remoteEntry.js',
      },
      shared: { ...dependencies },
    })
  );
  config.output.publicPath = 'http://localhost:4200/';

  return config;
};
