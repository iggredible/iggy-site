const { readdirSync } = require("fs");
const { join, resolve } = require("path");
const isDotFile = fileName => fileName[0] === ".";
const isReadme = fileName => fileName.toLowerCase() === "readme.md";
const stripExtension = fileName => fileName.replace(/\.[^.]+$/, "");
const normalizeFileName = fileName => fileName.replace(/[-_]/g, " ");
const titleCase = fileName =>
  fileName(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );

const ENTRY_DIR = __dirname + "/docs";
console.log("ENTRY_DIR: ", ENTRY_DIR);

let navArr = [];

const getFiles = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(
      dirent =>
        dirent.isFile() && !isDotFile(dirent.name) && !isReadme(dirent.name)
    )
    .map(dirent => dirent.name);
const docFileList = getFiles(ENTRY_DIR);

docFileList.forEach(file => {
  const extensionlessFileName = stripExtension(file);
  navArr = [...navArr, { text: extensionlessFileName, link: file }];
});

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !isDotFile(dirent.name))
    .map(dirent => dirent.name);

const dirList = getDirectories(ENTRY_DIR);

dirList.forEach(dir => {
  const fileDirPath = join("docs", dir);
  const files = readdirSync(fileDirPath);
  let dirArr = [];

  files.forEach(file => {
    console.log("file: ", file);
    if (!isReadme(file)) {
      const extensionlessFileName = stripExtension(file);
      dirArr = [
        ...dirArr,
        { text: extensionlessFileName, link: `/${dir}/${file}` }
      ];
    }
  });

  navArr = [...navArr, { text: dir, items: dirArr }];
});

const exportsText = `
module.exports = {
  title: "Hello VuePress!",
  description: "Blog v0.0.1",
  themeConfig: {
    nav: ${navArr},
    sidebar: "auto"
  },
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ]
  },
  plugins: [
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10
      }
    ]
  ]
};
`;

console.log("exports: ", exportsText);
