import { defineBackend } from '@aws-amplify/backend';
// highlight-next-line
import { myDemoFunction } from './functions/my-demo-function/resource';

defineBackend({
  // highlight-next-line
  myDemoFunction
});
