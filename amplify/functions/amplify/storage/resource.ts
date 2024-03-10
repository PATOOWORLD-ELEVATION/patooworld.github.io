import { myDemoFunction } from '../functions/my-demo-function/resource';

export const storage = defineStorage({
  name: 'myProjectFiles',
  access: (allow) => ({
    '/foo/*': [allow.resource(demoFunction).to(['read', 'write', 'delete'])]
  })
});
