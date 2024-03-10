// highlight-next-line
import { env } from '@env/my-demo-function'; // the import is '@env/<function name>'

export const handler = async (event) => {
  env. // the env object has intellisense for all environment variables that are available to the function
  return 'You made a function!';
};
