/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';

import configStore from './src/store/configStore';

const techCare = () => (
    <Provider store={configStore()}>
    <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => techCare);
