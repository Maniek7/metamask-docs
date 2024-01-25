"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5048],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>y});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),l=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},c=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(a),k=r,y=m["".concat(s,".").concat(k)]||m[k]||u[k]||i;return a?t.createElement(y,p(p({ref:n},c),{},{components:a})):t.createElement(y,p({ref:n},c))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=k;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:r,p[1]=o;for(var l=2;l<i;l++)p[l]=a[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}k.displayName="MDXCreateElement"},81312:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=a(87462),r=(a(67294),a(3905));const i={description:"Call Keyring API methods from your companion dapp.",sidebar_position:2,sidebar_label:"Create a companion dapp",tags:["Keyring API"]},p="Create an account management companion dapp",o={unversionedId:"how-to/use-keyring-api/create-companion-dapp",id:"how-to/use-keyring-api/create-companion-dapp",title:"Create an account management companion dapp",description:"Call Keyring API methods from your companion dapp.",source:"@site/snaps/how-to/use-keyring-api/create-companion-dapp.md",sourceDirName:"how-to/use-keyring-api",slug:"/how-to/use-keyring-api/create-companion-dapp",permalink:"/fix-links/snaps/how-to/use-keyring-api/create-companion-dapp",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/use-keyring-api/create-companion-dapp.md",tags:[{label:"Keyring API",permalink:"/fix-links/snaps/tags/keyring-api"}],version:"current",sidebarPosition:2,frontMatter:{description:"Call Keyring API methods from your companion dapp.",sidebar_position:2,sidebar_label:"Create a companion dapp",tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Create an account management Snap",permalink:"/fix-links/snaps/how-to/use-keyring-api/create-account-snap"},next:{title:"Security guidelines",permalink:"/fix-links/snaps/how-to/use-keyring-api/security"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the Keyring API",id:"1-install-the-keyring-api",level:3},{value:"2. Create the KeyringSnapRpcClient",id:"2-create-the-keyringsnaprpcclient",level:3},{value:"3. Call Keyring API methods",id:"3-call-keyring-api-methods",level:3},{value:"Example",id:"example",level:2}],c={toc:l},m="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(m,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-an-account-management-companion-dapp"},"Create an account management companion dapp"),(0,r.kt)("p",null,"Create a companion dapp to provide a user interface for your account management Snap.\nUse the ",(0,r.kt)("a",{parentName:"p",href:"/fix-links/snaps/reference/keyring-api/classes/KeyringSnapRpcClient"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyringSnapRpcClient"))," to\ncall Keyring API methods from your companion dapp, enabling users to create and interact with custom\nEVM accounts."),(0,r.kt)("admonition",{type:"flaskOnly"}),(0,r.kt)("admonition",{title:"see also",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fix-links/snaps/how-to/use-keyring-api/create-account-snap"},"Create an account management Snap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fix-links/snaps/concepts/keyring-api"},"About the Keyring API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fix-links/snaps/reference/keyring-api/"},"Keyring API reference")))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"An ",(0,r.kt)("a",{parentName:"p",href:"/fix-links/snaps/how-to/use-keyring-api/create-account-snap"},"account management Snap")," set up."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-keyring-api"},"1. Install the Keyring API"),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/keyring-api")," in your project directory using Yarn or npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/keyring-api\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @metamask/keyring-api\n")),(0,r.kt)("h3",{id:"2-create-the-keyringsnaprpcclient"},"2. Create the KeyringSnapRpcClient"),(0,r.kt)("p",null,"Create the ",(0,r.kt)("a",{parentName:"p",href:"/fix-links/snaps/reference/keyring-api/classes/KeyringSnapRpcClient"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyringSnapRpcClient")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { KeyringSnapRpcClient } from \"@metamask/keyring-api\";\nimport { defaultSnapOrigin as snapId } from '../config';\n\nlet client = new KeyringSnapRpcClient(snapId, window.ethereum);\n")),(0,r.kt)("h3",{id:"3-call-keyring-api-methods"},"3. Call Keyring API methods"),(0,r.kt)("p",null,"You can now use the ",(0,r.kt)("a",{parentName:"p",href:"/fix-links/snaps/reference/keyring-api/classes/KeyringSnapRpcClient"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyringSnapRpcClient")),"\nto invoke Keyring API methods on your Snap."),(0,r.kt)("p",null,"For example, to call ",(0,r.kt)("a",{parentName:"p",href:"/fix-links/snaps/reference/keyring-api/classes/KeyringSnapRpcClient#listaccounts"},(0,r.kt)("inlineCode",{parentName:"a"},"keyring_listAccounts")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const accounts = await client.listAccounts();\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snap-simple-keyring/tree/main/packages/site"},"example companion dapp source code"),"\nfor more information."))}u.isMDXComponent=!0}}]);