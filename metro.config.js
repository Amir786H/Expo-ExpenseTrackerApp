const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts.push('cjs');
defaultConfig.resolver.unstable_enablePackageExports = false;

module.exports = defaultConfig;

// Error: Component auth has not been registered yet in expo app
// THE ABOVE CODE HAS BEEN ADDED TO FIX THE ERROR.YOU HAVE
// TO CREATE A metro.config.js FILE IN THE ROOT OF YOUR PROJECT 