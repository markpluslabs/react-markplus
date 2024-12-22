import { run } from "shell-commands";

// deno requires local import paths to have the .ts extension
// tsc requires local import paths to have the .js extension
const main = async () => {
  await run(
    `find src -type f \\( -name "*.ts" -o -name "*.tsx" \\) -exec sed -E -i '' 's/from "(\\.\\.?\\/.*)\\.ts(x)?";/from "\\1.js";/g' {} +`,
  );
  await run("yarn tsc");
};
main();
