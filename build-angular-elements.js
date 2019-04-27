const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/angular-elements/runtime.js",
    "./dist/angular-elements/polyfills.js",
    "./dist/angular-elements/scripts.js",
    "./dist/angular-elements/main.js"
  ];
  await fs.ensureDir("angular-elements-build");
  await concat(files, "angular-elements-build/angular-elements.js");
  await fs.copy(
    "./dist/angular-elements/styles.css",
    "angular-elements-build/styles.css"
  );
  await fs.copy("./dist/angular-elements/assets/", "angular-elements/assets/");
})();
