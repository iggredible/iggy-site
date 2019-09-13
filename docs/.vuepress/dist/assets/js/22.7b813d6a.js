(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{253:function(e,t,s){"use strict";s.r(t);var a=s(37),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("I have been looking for a simple Vue blog engine and decided to use "),s("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress"),s("OutboundLink")],1),e._v(". I also have been wanting to learn about "),s("a",{attrs:{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("tailwindcss"),s("OutboundLink")],1),e._v(". Why not use them together so I can learn "),s("em",[e._v("both")]),e._v(" Vue framework and tailwindcss? That way I can kill two birds with one stone "),s("em",[e._v("(or in Chuck Norris's world, kill two stones with one bird)")]),e._v(".")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://media.giphy.com/media/SfCKK2pwXjIgo/giphy.gif",alt:"chuck norris approves"}})]),e._v(" "),s("p",[e._v("There are several guides ("),s("a",{attrs:{href:"https://www.amie-chen.com/blog/20190211-build-a-site-with-vuepress-part2.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(" and "),s("a",{attrs:{href:"https://dev.to/vuevixens/build-a-beautiful-website-with-vuepress-and-tailwindcss--3a03",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(") on vuepress + tailwindcss integration. They are very excellent guides - but it looks like these guides were written prior to tailwind v1.0.0 release and I could not get them to run ("),s("a",{attrs:{href:"https://tailwindcss.com/docs/upgrading-to-v1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("major changes"),s("OutboundLink")],1),e._v(" were implemented between v0.x to v1.0).")]),e._v(" "),s("p",[e._v("I decided to write this article for users using recent tailwindcss v1.+ and vuepress v1.+ ("),s("em",[e._v("I am using vuepress v1.0.3 and tailwindcss v1.1.2 at the time of this writing)")]),e._v(".")]),e._v(" "),s("p",[s("strong",[e._v("The repo for this article can be found "),s("a",{attrs:{href:"https://github.com/iggredible/vuepress-tailwindcss",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h1",{attrs:{id:"setting-up-vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-vuepress","aria-hidden":"true"}},[e._v("#")]),e._v(" Setting up Vuepress")]),e._v(" "),s("p",[e._v("Ensure vuepress is installed in machine. It will help in the future to save it globally.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm i -g vuepress\n")])])]),s("p",[e._v("Create your directory. I called mine "),s("code",[e._v("tailwind-press")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mkdir tailwind-press && cd $_\n")])])]),s("p",[e._v("Start npm project. I used "),s("code",[e._v("-y")]),e._v(" to skip questions.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm init -y\n")])])]),s("p",[e._v("Install vuepress dependency.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm i --save vuepress\n")])])]),s("p",[e._v("Per "),s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/basic-config.html#config-file",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress site"),s("OutboundLink")],1),e._v(", it is recommended to due customization inside "),s("code",[e._v("/docs")]),e._v(" folder with "),s("code",[e._v("/.vuepress")]),e._v(" directory and "),s("code",[e._v("readme.md")]),e._v(", so let's do that.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mkdir -p docs/.vuepress\nmkdir docs/blogs/\ntouch docs/readme.md docs\ntouch docs/blogs/blog1.md docs/blogs/blog2.md\n")])])]),s("p",[e._v("Fill blogs/blog1.md, blogs/blog2.md, and readme.md with some content.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// readme.md\n# tailwind-press\nHello!\n\n// blogs/blog1.md\n# Doc1\ndoc1 test\n\n// blogs/blog2.md\n# Doc2\ndoc2 test\n")])])]),s("p",[e._v("Your project should look like this now:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".\n├─ docs\n│  ├─ readme.md\n│  ├─ blogs\n│  │  ├─ blog1.md\n│  │  └─ blog2.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])])]),s("p",[e._v("Test vuepress by running:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("vuepress dev docs\n")])])]),s("p",[e._v("You should have a basic vuepress running at 8080. You can check out blog1 at http://localhost:8080/blogs/blog1.html.")]),e._v(" "),s("p",[e._v("Sweetness! Part one is done. Time to customize it by applying our own theme.")]),e._v(" "),s("h1",{attrs:{id:"overwriting-default-theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overwriting-default-theme","aria-hidden":"true"}},[e._v("#")]),e._v(" Overwriting default theme")]),e._v(" "),s("p",[e._v("Add "),s("code",[e._v("config.js")]),e._v(" inside "),s("code",[e._v("docs/.vuepress/")]),e._v(' and put the following. This will add "blogs" nav with links to blog1 and blog2.')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('module.exports = {\n  title: "Hello Tailwind-Press!",\n  description: "Blog v0.0.1",\n  themeConfig: {\n    nav: [\n      {\n        text: "blogs",\n        items: [\n          { text: "blog1", link: "/blogs/blog1.md" },\n          { text: "blog2", link: "/blogs/blog2.md" }\n        ]\n      }\n    ]\n  }\n};\n')])])]),s("p",[e._v("Next is an important part of vuepress custom theme: to overwrite vuepress's default theme, you need to add "),s("code",[e._v("/theme/Layout.vue")]),e._v(" in "),s("code",[e._v("/.vuepress")]),e._v(" directory. Vuepress will "),s("em",[e._v("automagically")]),e._v(" replace default theme to yours. Let's create "),s("code",[e._v("/theme/Layout.vue")]),e._v(" inside "),s("code",[e._v("/.vuepress")]),e._v(". Your doc structure should look like the following:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".\n├─ docs\n│  ├─ readme.md\n│  ├─ blogs\n│  └─ .vuepress\n│     └─ config.js\n│     └─ theme\n│        └─ Layout.vue\n└─ package.json\n")])])]),s("p",[e._v("Put a basic Vue boilerplate inside Layout.vue:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<template>\n  <div>\n    <h1>{{ $site.title }}</h1> \n    <div>Your blog goes here</div>\n  </div>\n</template>\n\n<script><\/script>\n\n<style></style>\n")])])]),s("p",[e._v("Restart the server. Default theme should be overwritten now. Awesomeness!")]),e._v(" "),s("h1",{attrs:{id:"adding-tailwindcss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-tailwindcss","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding tailwindcss")]),e._v(" "),s("p",[e._v("Our last step is to add tailwindcss. Many steps on this article is taken from the installation steps provided by "),s("a",{attrs:{href:"https://tailwindcss.com/docs/installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("tailwind"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Npm install "),s("code",[e._v("tailwindcss")]),e._v(" and "),s("code",[e._v("autoprefixer")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm i --save tailwindcss autoprefixer\n")])])]),s("p",[e._v("Then create config file for tailwind by running:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npx tailwind init\n")])])]),s("p",[e._v("We now have tailwind.config.js at root. Inside that file, you'll see something like this:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("module.exports = {\n  theme: {\n    extend: {}\n  },\n  variants: {},\n  plugins: []\n}\n\n")])])]),s("p",[e._v("Go back to docs/.vuepress/config.js, add postcss config:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('module.exports = {\n  title: "Hello Tailwind-Press!",\n  description: "Blog v0.0.1",\n  themeConfig: {\n    nav: [\n      {\n        text: "blogs",\n        items: [\n          { text: "blog1", link: "/blogs/blog1.md" },\n          { text: "blog2", link: "/blogs/blog2.md" }\n        ]\n      }\n    ]\n  },\n  postcss: {\n    plugins: [\n      require("autoprefixer"),\n      require("tailwindcss")("./tailwind.config.js")\n    ]\n  }\n};\n')])])]),s("p",[e._v("Next time server is run, it will run postcss and it will use both autoprefixer and tailwindcss plugins. Right now we haven't had any tailwindcss defined yet. Let's do that now.")]),e._v(" "),s("p",[e._v('Inside docs/.vuepress/theme, create a new css (styl) directory and file. I called the dir "styles" and the file "style.styl\'. You can give them any name you want (mine is at '),s("code",[e._v("docs/.vuepress/theme/styles/style.styl")]),e._v(". "),s("em",[e._v("Most/ all tutorials I've seen use .styl instead of .css. Per "),s("a",{attrs:{href:"https://vuepress.vuejs.org/default-theme-config/#simple-css-override",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress doc"),s("OutboundLink")],1),e._v(", it looks like you can use .css, but they use stylus, so that's what I am going with. I haven't tried it with .css.")]),e._v(")")]),e._v(" "),s("p",[e._v("Insert the following inside style.styl:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n\n")])])]),s("p",[e._v("Great. Our tailwindcss is ready to go. We just need to import it. Inside Layout.vue, add:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// Layout.vue\n\n...\n\n<style lang=\"stylus\">\n  @import './styles/style.styl';\n</style>\n")])])]),s("p",[e._v("We haven't mentioned any tailwindcss classes yet. Let's style it up a bit more ("),s("em",[e._v("btw, the snippet is mostly taken from "),s("a",{attrs:{href:"https://tailwindcss.com/components/navigation/#responsive-header",target:"_blank",rel:"noopener noreferrer"}},[e._v("tailwindcss site"),s("OutboundLink")],1)]),e._v(").")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// Layout.vue\n\n<template>\n<nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">\n  <div class="flex items-center flex-shrink-0 text-white mr-6">\n    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>\n    <span class="font-semibold text-xl tracking-tight">{{ $site.title }}</span>\n  </div>\n</nav>\n</template>\n\n<script><\/script>\n\n<style lang="stylus">\n\t@import \'./styles/style.styl\';\n</style>\n')])])]),s("p",[e._v("You should see tailwindcss styling. That's it! Now you are free to unleash the power of the dark side... I mean creative side.")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://media.giphy.com/media/nlWGe7Q64zwQ0/giphy.gif",alt:"vader impressed"}})]),e._v(" "),s("p",[e._v("Questions are always welcome. Happy hacking!")])])},[],!1,null,null,null);t.default=n.exports}}]);