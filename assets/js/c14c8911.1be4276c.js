"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[266],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1183:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={id:"agileHOC",title:"AgileHOC",sidebar_label:"AgileHOC",slug:"/react/AgileHOC"},p=void 0,s={unversionedId:"packages/react/api/agileHOC",id:"packages/react/api/agileHOC",title:"AgileHOC",description:"The AgileHOC is intended for Class Components,",source:"@site/docs/packages/react/api/AgileHoc.md",sourceDirName:"packages/react/api",slug:"/react/AgileHOC",permalink:"/cryptocrab/docs/react/AgileHOC",editUrl:"https://github.com/hamza-messaoudi/cryptocrab/documentation/tree/develop/docs/packages/react/api/AgileHoc.md",tags:[],version:"current",lastUpdatedAt:1648662760,formattedLastUpdatedAt:"3/30/2022",frontMatter:{id:"agileHOC",title:"AgileHOC",sidebar_label:"AgileHOC",slug:"/react/AgileHOC"},sidebar:"docs",previous:{title:"React Hooks",permalink:"/cryptocrab/docs/react/hooks"},next:{title:"Introduction",permalink:"/cryptocrab/docs/vue"}},c=[{value:"\ud83d\udc40 Subscribable Instances",id:"-subscribable-instances",children:[],level:3},{value:"\ud83d\udd34 Example",id:"-example",children:[],level:3},{value:"\ud83d\udfe6 Typescript",id:"-typescript",children:[],level:3},{value:"\ud83d\udced Props",id:"-props",children:[{value:"DepsType",id:"depstype",children:[],level:4},{value:"SubscribableAgileInstancesType",id:"subscribableagileinstancestype",children:[],level:4}],level:3},{value:"\ud83d\udcc4 Return",id:"-return",children:[],level:3}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},"\u2757\ufe0f"),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AgileHOC")," is intended for ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/components-and-props.html"},"Class Components"),",\nas we recommend using React Hooks in ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/components-and-props.html"},"Functional Components"),"."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AgileHOC")," is a Higher Order Component that binds/subscribes AgileTs States\nto a Class React Component for reactivity.\nThis binding ensures that the Component re-renders whenever a bound State changes.\nWe can flexibly bind any ",(0,o.kt)("a",{parentName:"p",href:"/cryptocrab/docs/introduction#agile-sub-instance"},"Agile Sub Instances"),"\n(like States or Collections) to any React Component.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"AgileHOC")," is wrapped around the React Component,\nto which the specified States are to be bound."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export default AgileHOC(RandomComponent, [MY_COOL_STATE]);\n")),(0,o.kt)("p",null,"The current ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," or if the Instance has no ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," the current ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),"\nof each provided State Instance is mapped\ninto the ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," object of the corresponding Class Component.\nEach State should have a unique identifier key to be correctly represented in the ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MY_STATE.key; // should not return 'null'\n")),(0,o.kt)("p",null,"To ensure that each State can be uniquely identified,\nwe recommend providing the States to the ",(0,o.kt)("inlineCode",{parentName:"p"},"AgileHOC")," in a keymap\ninstead of an array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export default AgileHOC(RandomComponent, {\n    myState: MY_STATE\n});\n")),(0,o.kt)("h3",{id:"-subscribable-instances"},"\ud83d\udc40 Subscribable Instances"),(0,o.kt)("p",null,"Not only AgileTs States can be bound to React Components via the ",(0,o.kt)("inlineCode",{parentName:"p"},"AgileHOC"),",\nbut also all other ",(0,o.kt)("a",{parentName:"p",href:"/cryptocrab/docs/introduction#agile-sub-instance"},"Agile Sub Instances"),"\nthat contain an ",(0,o.kt)("a",{parentName:"p",href:"/cryptocrab/docs/introduction#observer"},(0,o.kt)("inlineCode",{parentName:"a"},"Observer")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default AgileHOC(RandomComponent, [MY_COOL_STATE, MY_GROUP]);\n")),(0,o.kt)("p",null,"Instances that contain an ",(0,o.kt)("inlineCode",{parentName:"p"},"Observer")," are, for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/state"},(0,o.kt)("inlineCode",{parentName:"a"},"State"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/computed"},(0,o.kt)("inlineCode",{parentName:"a"},"Computed"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/collection"},(0,o.kt)("inlineCode",{parentName:"a"},"Collection"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/collection/group"},(0,o.kt)("inlineCode",{parentName:"a"},"Group"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/collection/selector"},(0,o.kt)("inlineCode",{parentName:"a"},"Selector"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cryptocrab/docs/core/collection#-item"},(0,o.kt)("inlineCode",{parentName:"a"},"Item")))),(0,o.kt)("h3",{id:"-example"},"\ud83d\udd34 Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'const App = new Agile({waitForMount: false});\nconst MY_STATE = createState("Hello Stranger!", {key: "myFirstState"});\n\nclass RandomComponent extends React.Component {\n    render() {\n        return (\n            <div>\n                <p>Direct Value: {MY_STATE.value}</p>\n                <p>Props Value: {this.props.myFirstState}</p>\n                <button\n                    onClick={() => {\n                        MY_STATE.set("Hello Friend!");\n                    }}\n                >\n                    Update State\n                </button>\n            </div>\n        );\n    };\n}\n\nconst WrappedComponent = AgileHOC(RandomComponent, [MY_STATE]);\n\nrender(<WrappedComponent/>);\n')),(0,o.kt)("h3",{id:"-typescript"},"\ud83d\udfe6 Typescript"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AgileHOC")," isn't completely typesafe yet.\nThat is because we haven't figured out how to assign a type to\n",(0,o.kt)("a",{parentName:"p",href:"/cryptocrab/docs/introduction#agile-sub-instance"},"Agile Sub Instances"),"\nthat are merged in the ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," object of the Class Component.\nThus, we recommend using the direct State value\ninstead of accessing the State values in the ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{4,9}","{4,9}":!0},"class RandomComponent extends React.Component {\n    render() {\n        // return <h1>Hi {this.props.myCoolState}</h1>; // Not Typesafe\n        return <h1>Hi {MY_COOL_STATE.value}</h1>; // Typesafe\n    }\n}\n\n// Wrapping AgileHOC around the React Component and binding MY_COOL_STATE to it\nexport default AgileHOC(RandomComponent, [MY_COOL_STATE]);\n")),(0,o.kt)("h3",{id:"-props"},"\ud83d\udced Props"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Prop"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"reactComponent")),(0,o.kt)("td",{parentName:"tr",align:null},"ComponentClass"),(0,o.kt)("td",{parentName:"tr",align:null},"React Component to which the specified deps should be bound."),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"deps")),(0,o.kt)("td",{parentName:"tr",align:null},"DepsType"),(0,o.kt)("td",{parentName:"tr",align:null},"Agile Sub Instances to be bound to the Class Component."),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"agileInstance")),(0,o.kt)("td",{parentName:"tr",align:null},"Agile"),(0,o.kt)("td",{parentName:"tr",align:null},"Instance of Agile the React Component belongs to."),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("h4",{id:"depstype"},"DepsType"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type DepsType =\n  | Array<SubscribableAgileInstancesType>\n  | { [key: string]: SubscribableAgileInstancesType }\n  | SubscribableAgileInstancesType;\n")),(0,o.kt)("h4",{id:"subscribableagileinstancestype"},"SubscribableAgileInstancesType"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type SubscribableAgileInstancesType = State | Collection | Observer | undefined;\n")),(0,o.kt)("h3",{id:"-return"},"\ud83d\udcc4 Return"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"AgileReactComponent\n")),(0,o.kt)("p",null,"Returns a modified version of the provided React Component."))}u.isMDXComponent=!0}}]);