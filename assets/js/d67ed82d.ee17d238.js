"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[5066],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(3117),r=n(7294),l=n(2389),i=n(944),o=n(6681),u=n(6010),c="tabItem_1uMI";function s(e){var t,n,l,s=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,v=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.Z)(),N=y.tabGroupChoices,w=y.setTabGroupChoices,T=(0,r.useState)(k),O=T[0],E=T[1],x=[],I=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=N[f];null!=j&&j!==O&&h.some((function(e){return e.value===j}))&&E(j)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==O&&(I(t),E(a),null!=f&&w(f,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},v)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:C,onClick:C},l,{className:(0,u.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},2561:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=n(9877),o=n(8215),u=["components"],c={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/multieditor/installation"},s=void 0,p={unversionedId:"packages/multieditor/installation",id:"packages/multieditor/installation",title:"Installation",description:"The multieditor package can be installed over npm.",source:"@site/docs/packages/multieditor/Installation.md",sourceDirName:"packages/multieditor",slug:"/multieditor/installation",permalink:"/cryptocrab/docs/multieditor/installation",editUrl:"https://github.com/hamza-messaoudi/cryptocrab/documentation/tree/develop/docs/packages/multieditor/Installation.md",tags:[],version:"current",lastUpdatedAt:1648662760,formattedLastUpdatedAt:"3/30/2022",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/multieditor/installation"},sidebar:"docs",previous:{title:"Introduction",permalink:"/cryptocrab/docs/multieditor"},next:{title:"Introduction",permalink:"/cryptocrab/docs/examples"}},d=[],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"multieditor")," package can be installed over ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),"."),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Be aware that this is no standalone package!"))),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @agile-ts/multieditor \n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @agile-ts/multieditor\n")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"multieditor")," package is an extension of AgileTs and doesn't work without the ",(0,l.kt)("a",{parentName:"p",href:"/cryptocrab/docs/core"},(0,l.kt)("inlineCode",{parentName:"a"},"core"))," package,\nwhich functions as the brain of AgileTs and is indispensable.\nUnfortunately, we can't combine each ",(0,l.kt)("inlineCode",{parentName:"p"},"core")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"multieditor")," version.\nTherefore, we have created a table which shows which versions fit together without restrictions."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"@agile-ts/multieditor"),(0,l.kt)("th",{parentName:"tr",align:null},"@agile-ts/core"),(0,l.kt)("th",{parentName:"tr",align:null},"NPM Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v0.0.7+"),(0,l.kt)("td",{parentName:"tr",align:null},"v0.0.7+"),(0,l.kt)("td",{parentName:"tr",align:null},"v6+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v0.0.6"),(0,l.kt)("td",{parentName:"tr",align:null},"v0.0.3 - v0.0.6"),(0,l.kt)("td",{parentName:"tr",align:null},"v6+")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Older Versions aren't supported anymore")))}f.isMDXComponent=!0}}]);