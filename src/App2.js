import React from 'react';
import MainView from './components/MainView';

import Amplify from 'aws-amplify';
import { withAuthenticator, Authenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[iI]gnored" }]*/
function ignoredApp() {
  return (
    <Authenticator/>
  );
}

export default withAuthenticator(MainView);
