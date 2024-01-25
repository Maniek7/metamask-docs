"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[941],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),u=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(o.Provider,{value:r},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(t),y=i,f=l["".concat(o,".").concat(y)]||l[y]||g[y]||a;return t?n.createElement(f,s(s({ref:r},p),{},{components:t})):n.createElement(f,s({ref:r},p))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=y;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c[l]="string"==typeof e?e:i,s[1]=c;for(var u=2;u<a;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},32397:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=t(87462),i=(t(67294),t(3905));const a={},s="Variable: KeyringRequestStruct",c={unversionedId:"reference/keyring-api/variables/KeyringRequestStruct",id:"reference/keyring-api/variables/KeyringRequestStruct",title:"Variable: KeyringRequestStruct",description:"Source",source:"@site/snaps/reference/keyring-api/variables/KeyringRequestStruct.md",sourceDirName:"reference/keyring-api/variables",slug:"/reference/keyring-api/variables/KeyringRequestStruct",permalink:"/fix-links/snaps/reference/keyring-api/variables/KeyringRequestStruct",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/variables/KeyringRequestStruct.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Variable: KeyringJsonRpcRequestStruct",permalink:"/fix-links/snaps/reference/keyring-api/variables/KeyringJsonRpcRequestStruct"},next:{title:"Variable: SubmitRequestResponseStruct",permalink:"/fix-links/snaps/reference/keyring-api/variables/SubmitRequestResponseStruct"}},o={},u=[{value:"Source",id:"source",level:2}],p={toc:u},l="wrapper";function g(e){let{components:r,...t}=e;return(0,i.kt)(l,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"variable-keyringrequeststruct"},"Variable: KeyringRequestStruct"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const KeyringRequestStruct: Struct<{\n  account: string;\n  request: { id: string; jsonrpc: "2.0"; method: string; } | { id: string; jsonrpc: "2.0"; method: string; params: Record<string, Json> | Json[]; };\n  scope: string;\n  }, {\n  account: Struct<string, null>;\n  request: Struct<{\n     id: string;\n     jsonrpc: "2.0";\n     method: string;\n     } | {\n     id: string;\n     jsonrpc: "2.0";\n     method: string;\n     params: Record<string, Json> | Json[];\n  }, null>;\n  scope: Struct<string, null>;\n  }>;\n')),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/1c8eeb9/src/keyring-api.ts#L89"},"external/keyring-api/src/keyring-api.ts:89")))}g.isMDXComponent=!0}}]);