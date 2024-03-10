import { defineFunction } from '@aws-amplify/backend';

export const myDemoFunction = defineFunction({
  environment: {
    ENV_VAR_NAME: 'someValueHere'
  }
});
