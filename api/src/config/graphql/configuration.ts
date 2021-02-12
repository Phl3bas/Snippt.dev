import { registerAs } from '@nestjs/config';

export default registerAs('graphql', () => ({
  playground: true,
  autoSchemaFile: true,
  path: '___graphql',
}));
