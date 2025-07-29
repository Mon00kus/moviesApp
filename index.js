/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { movieApp } from './src/movieApp';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => movieApp);
