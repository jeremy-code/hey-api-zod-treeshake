import { defineConfig } from "tsdown";

const tsdownConfig = defineConfig({
  entry: ["./src/index.ts"],
  platform: "neutral",
  treeshake: {
    moduleSideEffects: false,
    // manualPureFunctions: Object.keys(await import("zod")).map(
    //   (key) => "z." + key,
    // ),
    unknownGlobalSideEffects: false,
    invalidImportSideEffects: false,
    propertyReadSideEffects: false,
    propertyWriteSideEffects: false,
  },
  format: "esm",
  minify: "dce-only",
  unbundle: true,
});

export default tsdownConfig;
