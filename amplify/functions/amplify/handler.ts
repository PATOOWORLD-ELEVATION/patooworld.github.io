import { env } from '@env/my-demo-function';

export const handler = async (event) => {
  env.API_KEY; // this is the value of secret named "myApiKey"
  return 'You made a function!';
};
