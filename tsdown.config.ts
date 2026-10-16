import { defineConfig } from "tsdown";

import * as z from "zod";

export default defineConfig({
  entry: ["./src/index.ts"],
  treeshake: {
    moduleSideEffects: false,
    // manualPureFunctions: Object.keys(z).map((key) => "z." + key),
    propertyReadSideEffects: false,
    propertyWriteSideEffects: false,
  },
  unbundle: true,
});
