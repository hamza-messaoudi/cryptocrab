"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[4293],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(k,i(i({ref:t},s),{},{components:r})):a.createElement(k,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7703:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=r(3117),n=r(102),o=(r(7294),r(3905)),i=["components"],l={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/core"},c=void 0,p={unversionedId:"packages/core/introduction",id:"packages/core/introduction",title:"Introduction",description:"Global State and Logic Library",source:"@site/docs/packages/core/Introduction.md",sourceDirName:"packages/core",slug:"/core",permalink:"/cryptocrab/docs/core",editUrl:"https://github.com/hamza-messaoudi/cryptocrab/documentation/tree/develop/docs/packages/core/Introduction.md",tags:[],version:"current",lastUpdatedAt:1648662760,formattedLastUpdatedAt:"3/30/2022",frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/core"},sidebar:"docs",previous:{title:"Vue",permalink:"/cryptocrab/docs/quick-start/vue"},next:{title:"Installation",permalink:"/cryptocrab/docs/core/installation"}},s=[{value:"\u2753 <code>core</code>",id:"-core",children:[],level:2},{value:"\ud83d\ude80 Quick Links",id:"-quick-links",children:[],level:2}],m={toc:s};function u(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{href:"https://github.com/agile-ts/agile"},(0,o.kt)("img",{src:"https://img.shields.io/github/license/agile-ts/agile.svg?label=license&style=flat&colorA=293140&colorB=4a4872",alt:"GitHub License"})),(0,o.kt)("a",{href:"https://npm.im/@agile-ts/core"},(0,o.kt)("img",{src:"https://img.shields.io/npm/v/@agile-ts/core.svg?label=npm&style=flat&colorA=293140&colorB=4a4872",alt:"npm version"})),(0,o.kt)("a",{href:"https://npm.im/@agile-ts/core"},(0,o.kt)("img",{src:"https://img.shields.io/bundlephobia/minzip/@agile-ts/core.svg?label=minified%20size&style=flat&colorA=293140&colorB=4a4872",alt:"npm minified size"})),(0,o.kt)("a",{href:"https://npm.im/@agile-ts/core"},(0,o.kt)("img",{src:"https://img.shields.io/npm/dt/@agile-ts/core.svg?label=downloads&style=flat&colorA=293140&colorB=4a4872",alt:"npm total downloads"})),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Global State and Logic Library")),(0,o.kt)("h2",{id:"-core"},"\u2753 ",(0,o.kt)("inlineCode",{parentName:"h2"},"core")),(0,o.kt)("p",null,"As the name suggests, the ",(0,o.kt)("inlineCode",{parentName:"p"},"core")," is the main package of AgileTs.\nIt contains the core API for State Management with AgileTs,\nwhich includes, for example, handy classes like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"\ufe0f-state"},"\u26a1\ufe0f ",(0,o.kt)("a",{parentName:"h3",href:"/cryptocrab/docs/core/state"},"State")),(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("inlineCode",{parentName:"p"},"State")," represents a piece of Information\nthat we need to remember globally at a later point in time.\nWhile offering a toolkit to use and mutate this piece of Information."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const MY_STATE = createState("Hello there");\n\n// Update current State value\nMY_STATE.set("hi"); \n\n// Undo latest State value change\nMY_STATE.undo(); \n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"-collection"},"\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66 ",(0,o.kt)("a",{parentName:"h3",href:"/cryptocrab/docs/core/collection"},"Collection")),(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Collection")," represents a reactive ",(0,o.kt)("em",{parentName:"p"},"set")," of Information\nthat we need to remember globally at a later point in time.\nWhile offering a toolkit to use and mutate this ",(0,o.kt)("em",{parentName:"p"},"set")," of Information."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const MY_COLLECTION = createCollection();\n\n// Add Data to Collection\nMY_COLLECTION.collect({id: 1, name: \"frank\"});\n\n// Remove Data at primary Key '1' from Collection\nMY_COLLECTION.remove(1).everywhere(); \n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"-computed"},"\ud83e\udd16 ",(0,o.kt)("a",{parentName:"h3",href:"/cryptocrab/docs/core/state"},"Computed")),(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Computed")," is an extension of the ",(0,o.kt)("inlineCode",{parentName:"p"},"State Class")," that computes\nits value from a specified function."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"}," const MY_COMPUTED = createComputed(() => {\n   return MY_STATE_1.value + MY_STATE_2.value;\n});\n")))),(0,o.kt)("p",null,"However, to make the whole State Management API work well,\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"core")," does a lot under the hood."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"queue ",(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/introduction#agile-sub-instance"},(0,o.kt)("inlineCode",{parentName:"a"},"Agile Sub Instance")),"\nchanges in the ",(0,o.kt)("inlineCode",{parentName:"li"},"runtime")," to prevent race conditions"),(0,o.kt)("li",{parentName:"ul"},"update/rerender subscribed UI-Components through the provided Integrations\nsuch as the ",(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/react"},"React Integration")),(0,o.kt)("li",{parentName:"ul"},"integrate with the persistent ",(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/storage"},"Storage"))),(0,o.kt)("p",null,"These internal tasks are centrally managed\nby a so called ",(0,o.kt)("a",{parentName:"p",href:"/cryptocrab/docs/core/agile-instance"},"Agile Instance"),"."),(0,o.kt)("h2",{id:"-quick-links"},"\ud83d\ude80 Quick Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/installation"},"Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/agile-instance"},"Agile-Instance"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/agile-instance/properties"},"Properties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/agile-instance/methods"},"Methods"),"  "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/state"},"State"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/state/properties"},"Properties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/state/methods"},"Methods")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/collection"},"Collection"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/collection/properties"},"Properties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/collection/methods"},"Methods")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/collection/group"},"Group"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/collection/group/properties"},"Properties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/collection/group/methods"},"Methods")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/collection/selector"},"Selector"),"  ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/collection/selector/properties"},"Properties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/collection/selector/methods"},"Methods")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/computed"},"Computed"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/computed/properties"},"Properties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/computed/methods"},"Methods")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/storage"},"Storage"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/persisting-data"},"Persisting Data")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/integration"},"Integration"))))}u.isMDXComponent=!0}}]);