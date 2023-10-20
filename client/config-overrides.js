import { alias } from 'react-app-rewire-alias';

export default function override(config) {
  alias({
    '@src': 'src/',
    '@img': 'src/assets/img/',
  })(config);

  return config;
}
