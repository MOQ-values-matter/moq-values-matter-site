import { spawnSync } from "node:child_process";

function run(cmd, args) {
  const res = spawnSync(cmd, args, { stdio: "inherit", shell: true });
  if (res.status !== 0) process.exit(res.status ?? 1);
}

// Run lint-staged (which will run sync:diagrams and stage public/images/diagrams)
run("npx", ["--no-install", "lint-staged"]);
