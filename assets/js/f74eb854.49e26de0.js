"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[2197],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(l,".").concat(p)]||d[p]||s[p]||i;return n?r.createElement(m,o(o({ref:t},g),{},{components:n})):r.createElement(m,o({ref:t},g))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6069:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return g},default:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],c={id:"debugging",title:"Debugging",sidebar_label:"Debugging",slug:"/core/guides/debugging"},l=void 0,u={unversionedId:"packages/core/guides/debugging",id:"packages/core/guides/debugging",title:"Debugging",description:"WIP documentation!",source:"@site/docs/packages/core/guides/Debugging.md",sourceDirName:"packages/core/guides",slug:"/core/guides/debugging",permalink:"/cryptocrab/docs/core/guides/debugging",editUrl:"https://github.com/hamza-messaoudi/cryptocrab/documentation/tree/develop/docs/packages/core/guides/Debugging.md",tags:[],version:"current",lastUpdatedAt:1648662760,formattedLastUpdatedAt:"3/30/2022",frontMatter:{id:"debugging",title:"Debugging",sidebar_label:"Debugging",slug:"/core/guides/debugging"},sidebar:"docs",previous:{title:"Typescript",permalink:"/cryptocrab/docs/core/guides/typescript"},next:{title:"Testing",permalink:"/cryptocrab/docs/core/guides/testing"}},g=[{value:"Using <code>globalThis</code>",id:"using-globalthis",children:[],level:2}],s={toc:g};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},"\u2757\ufe0f"),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"WIP documentation!"))),(0,i.kt)("h2",{id:"using-globalthis"},"Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"globalThis")),(0,i.kt)("p",null,"AgileTs has current no ",(0,i.kt)("inlineCode",{parentName:"p"},"devtools"),".\nHowever, to get a basic debugging functionality you can bind your States globally."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {globalBind} from '@agile-ts/core';\n\nconst MY_NAME = createState('jeff');\nconst MY_AGE = createState(0);\n\nglobalBind('__core__', {MY_NAME, MY_AGE});\n")),(0,i.kt)("p",null,"Thus, you can inspect them in the browser ",(0,i.kt)("inlineCode",{parentName:"p"},"console")," by typing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"__core__.MY_STATE\n")),(0,i.kt)("p",null,"However, there are some problems with this variant of debugging:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Don't forget to take the States from the global scope in ",(0,i.kt)("inlineCode",{parentName:"li"},"production")),(0,i.kt)("li",{parentName:"ul"},"each debugged State has the same internal reference.\nSo for example, if you debug (print/log) the ",(0,i.kt)("inlineCode",{parentName:"li"},"State x")," and then change the ",(0,i.kt)("inlineCode",{parentName:"li"},"State x")," and debug it again,\nthe first debugged ",(0,i.kt)("inlineCode",{parentName:"li"},"State x")," is the same as the second debugged ",(0,i.kt)("inlineCode",{parentName:"li"},"State x"))))}d.isMDXComponent=!0}}]);