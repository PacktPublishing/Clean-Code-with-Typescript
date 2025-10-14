
export default {
  devjobs: {
    input: './apps/devjobs-backend/src/openapi.yml',
    output: {
      mode: 'tags-split',
      target: './libs/api-client/src/generated',
      schemas: './libs/api-types/model',
      client: 'react-query',
      override: {
        mutator: {
          path: './libs/api-client/src/axios-instance.ts',
          name: 'customInstance',
        },
      },
    },
  },
};