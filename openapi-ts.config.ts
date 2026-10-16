import { defineConfig } from "@hey-api/openapi-ts";

const openApiTsConfig = defineConfig({
  input:
    "https://raw.githubusercontent.com/abraham/mastodon-openapi/refs/heads/main/dist/schema.json",
  output: "./src/generated",
  plugins: [
    {
      name: "zod",
      definitions: {
        enabled: false,
        name: (name) => `${name}Schema`,
      },
      requests: false,
      responses: false,
    },
  ],
});

export default openApiTsConfig;
