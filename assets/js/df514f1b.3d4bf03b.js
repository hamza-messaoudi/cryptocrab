"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[8805],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2396:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/installation",description:"How to install AgileTs and its plugins in various environments like React, Vue.",image:"img/meta.png"},s=void 0,c={unversionedId:"main/installation",id:"main/installation",title:"Installation",description:"How to install AgileTs and its plugins in various environments like React, Vue.",source:"@site/docs/main/Installation.md",sourceDirName:"main",slug:"/installation",permalink:"/cryptocrab/docs/installation",editUrl:"https://github.com/hamza-messaoudi/cryptocrab/documentation/tree/develop/docs/main/Installation.md",tags:[],version:"current",lastUpdatedAt:1648662760,formattedLastUpdatedAt:"3/30/2022",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/installation",description:"How to install AgileTs and its plugins in various environments like React, Vue.",image:"img/meta.png"},sidebar:"docs",previous:{title:"Introduction",permalink:"/cryptocrab/docs/introduction"},next:{title:"Style Guides",permalink:"/cryptocrab/docs/style-guide"}},u=[{value:"\ud83d\udd11 Requirements",id:"-requirements",children:[],level:3},{value:"\ud83d\ude80 Quick Start",id:"-quick-start",children:[],level:3},{value:"\ud83d\udcc1 Packages",id:"-packages",children:[],level:3}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AgileTs")," is essentially a set of node modules\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/agile-ts/agile/tree/master/packages"},"packages"),"\nthat can be installed over ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),"."),(0,i.kt)("h3",{id:"-requirements"},"\ud83d\udd11 Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," version >= 10.15.1 or above (which can be checked by running ",(0,i.kt)("inlineCode",{parentName:"li"},"node -v"),")")),(0,i.kt)("h3",{id:"-quick-start"},"\ud83d\ude80 Quick Start"),(0,i.kt)("p",null,"To make your start as frictionless as possible, we have prepared some quick start guides for you.\nYou can follow these guides to get AgileTs up and running in your without wasting any time.\nBelow you find quick start guides for already supported UI-Frameworks."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cryptocrab/docs/quick-start/react"},"React / React-Native")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cryptocrab/docs/quick-start/vue"},"Vue"))),(0,i.kt)("h3",{id:"-packages"},"\ud83d\udcc1 Packages"),(0,i.kt)("p",null,"Separate installation guides for particular AgileTs packages."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/installation"},"@agile-ts/core")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cryptocrab/docs/react/installation"},"@agile-ts/react")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cryptocrab/docs/vue/installation"},"@agile-ts/vue")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cryptocrab/docs/multieditor/installation"},"@agile-ts/multieditor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cryptocrab/docs/api/installation"},"@agile-ts/api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cryptocrab/docs/event/installation"},"@agile-ts/event"))))}d.isMDXComponent=!0}}]);