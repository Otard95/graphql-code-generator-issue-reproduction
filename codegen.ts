import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: 'schema.graphql',
  generates: {
    'generated.ts': {
      plugins: [
        'typescript',
        'typescript-resolvers',
      ],
      config: {
        federation: true,
        enumValues: {
          MyGraphQLEnum: './enum#MyTSEnum',
        },
      },
    },
  },
}

export default config
