import { run } from "shell-commands";

// deno requires local import paths to have the .ts extension
// tsc requires local import paths to have the .js extension
const main = async () => {
  const changes = await run("git status --porcelain");
  if (changes.trim().length > 0) {
    console.log("Please commit your changes before running this script");
    return;
  }
  await run(
    `find src -type f \\( -name "*.ts" -o -name "*.tsx" \\) -exec sed -E -i '' 's/from "(\\.\\.?\\/.*)\\.ts(x)?";/from "\\1.js";/g' {} +`,
  );
  await run("yarn tsc");
  await run("git stash && git stash clear");
};
main();
