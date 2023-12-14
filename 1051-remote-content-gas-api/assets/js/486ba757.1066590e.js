"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||s;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const s={description:"Register a token with users using wallet_watchAsset.",sidebar_position:1},r="Display tokens",i={unversionedId:"how-to/display/tokens",id:"how-to/display/tokens",title:"Display tokens",description:"Register a token with users using wallet_watchAsset.",source:"@site/wallet/how-to/display/tokens.md",sourceDirName:"how-to/display",slug:"/how-to/display/tokens",permalink:"/1051-remote-content-gas-api/wallet/how-to/display/tokens",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/display/tokens.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Register a token with users using wallet_watchAsset.",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"Display in MetaMask",permalink:"/1051-remote-content-gas-api/wallet/how-to/display"},next:{title:"Display a contract's method names",permalink:"/1051-remote-content-gas-api/wallet/how-to/display/method-names"}},l={},p=[{value:"Display an ERC-20 token",id:"display-an-erc-20-token",level:2},{value:"Display NFTs",id:"display-nfts",level:2},{value:"Display a single NFT",id:"display-a-single-nft",level:3},{value:"Display multiple NFTs",id:"display-multiple-nfts",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...s}=e;return(0,o.kt)(c,(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"display-tokens"},"Display tokens"),(0,o.kt)("p",null,"When a user opens MetaMask, they're shown some major tokens by default.\nHowever, to display most custom ERC-20 tokens, the user must ",(0,o.kt)("a",{parentName:"p",href:"https://support.metamask.io/hc/en-us/articles/360015489031-How-to-display-tokens-in-MetaMask#h_01FWH492CHY60HWPC28RW0872H"},"add the token\nmanually"),".\nTo display a user's NFTs, the user must ",(0,o.kt)("a",{parentName:"p",href:"https://support.metamask.io/hc/en-us/articles/360058238591-NFT-tokens-in-your-MetaMask-wallet"},"explicitly turn on NFT autodetection or add their NFTs\nmanually"),"."),(0,o.kt)("p",null,"Manually adding tokens involves the user interacting with contract addresses, and is error-prone."),(0,o.kt)("p",null,"You can improve the security and experience of displaying your\n",(0,o.kt)("a",{parentName:"p",href:"#register-an-erc-20-token"},"ERC-20 token")," or users' ",(0,o.kt)("a",{parentName:"p",href:"#register-nfts"},"NFTs")," in MetaMask by using the\n",(0,o.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_watchasset"},(0,o.kt)("inlineCode",{parentName:"a"},"wallet_watchAsset"))," RPC method.\n",(0,o.kt)("inlineCode",{parentName:"p"},"wallet_watchAsset")," provides a friendly interface that prompts users to register tokens to their\nMetaMask wallet, without having to interact with contract addresses."),(0,o.kt)("admonition",{title:"Displaying NFTs",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"With ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet_watchAsset"),", you can prompt users to add their NFTs even when they have NFT\nautodetection disabled.\nMoreover, NFT autodetection only detects NFTs on Ethereum Mainnet.\nWith ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet_watchAsset"),", users can add NFTs from other networks.")),(0,o.kt)("admonition",{title:"Experimental feature",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet_watchAsset")," to display NFTs is experimental and currently only available on the\nextension (not on mobile).")),(0,o.kt)("h2",{id:"display-an-erc-20-token"},"Display an ERC-20 token"),(0,o.kt)("p",null,"To prompt users to add an ERC-20 token, you can add something like the following to your project script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const tokenAddress = '0xd00981105e61274c8a5cd5a88fe7e037d935b513';\nconst tokenSymbol = 'TUT';\nconst tokenDecimals = 18;\nconst tokenImage = 'http://placekitten.com/200/300';\n\ntry {\n  // 'wasAdded' is a boolean. Like any RPC method, an error can be thrown.\n  const wasAdded = await window.ethereum.request({\n    method: 'wallet_watchAsset',\n    params: {\n      type: 'ERC20',\n      options: {\n        address: tokenAddress, // The address of the token.\n        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 characters.\n        decimals: tokenDecimals, // The number of decimals in the token.\n        image: tokenImage, // A string URL of the token logo.\n      },\n    },\n  });\n\n  if (wasAdded) {\n    console.log('Thanks for your interest!');\n  } else {\n    console.log('Your loss!');\n  }\n} catch (error) {\n  console.log(error);\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the chain ID of your token doesn't match the user's network, they can get unexpected results.\nWe recommend ",(0,o.kt)("a",{parentName:"p",href:"/1051-remote-content-gas-api/wallet/how-to/connect/detect-network"},"detecting the user's network chain ID")," and\n",(0,o.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_switchethereumchain"},"prompting them to switch chains"),", if necessary.")),(0,o.kt)("p",null,"For more examples, the following are live web dapps that let you enter your token details and share\nthem using a simple web link:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vittominacori.github.io/watch-token/create/"},"WatchToken")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://metamask.github.io/Add-Token/#edit"},"Add Token dapp"))),(0,o.kt)("h2",{id:"display-nfts"},"Display NFTs"),(0,o.kt)("admonition",{title:"Experimental feature",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet_watchAsset")," to display NFTs is experimental and currently only available on the\nextension (not on mobile).\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-1.md"},"MIP-1"),"\nand the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-improvement-proposals/blob/main/PROCESS-GUIDE.md#proposal-lifecycle"},"MIP proposal lifecycle"),"\nfor more information.")),(0,o.kt)("p",null,"You can prompt users to add a single NFT or multiple NFTs using ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet_watchAsset"),".\nThe add NFT interfaces look like the following:"),(0,o.kt)("div",{class:"row"},(0,o.kt)("div",{class:"column"},(0,o.kt)("img",{src:n(69707).Z,alt:"NFT confirmation",style:{border:"1px solid black"}})),(0,o.kt)("div",{class:"column"},(0,o.kt)("img",{src:n(35126).Z,alt:"Multiple NFTs confirmation",style:{border:"1px solid black"}}))),(0,o.kt)("h3",{id:"display-a-single-nft"},"Display a single NFT"),(0,o.kt)("p",null,"To prompt users to add a single NFT, add something like the following to your project script.\n",(0,o.kt)("inlineCode",{parentName:"p"},"wallet_watchAsset")," supports both ERC-721 and ERC-1155 NFT standards."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"try {\n  // 'wasAdded' is a boolean. Like any RPC method, an error can be thrown.\n  const wasAdded = await ethereum.request({\n    method: 'wallet_watchAsset',\n    params: {\n      type: 'ERC721', // or 'ERC1155'\n      options: {\n        address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e', // The address of the token.\n        tokenId: '1', // ERC-721 or ERC-1155 token ID.\n      },\n    },\n  });\n\n  if (wasAdded) {\n    console.log('User successfully added the token!');\n  } else {\n    console.log('User did not add the token.');\n  }\n} catch (error) {\n  console.log(error);\n}\n")),(0,o.kt)("h3",{id:"display-multiple-nfts"},"Display multiple NFTs"),(0,o.kt)("p",null,"To prompt users to add multiple NFTs, use ",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum.sendAsync()")," instead of\n",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum.request()")," to call ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet_watchAsset"),".\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"window.ethereum.sendAsync([{\n method: 'wallet_watchAsset',\n  params: {\n    type: 'ERC721',\n    options: {\n      address: contractAddress,\n      tokenId: 1,\n    },\n  }, {\n  method: 'wallet_watchAsset',\n    params: {\n      type: 'ERC721',\n      options: {\n        address: contractAddress,\n        tokenId: 2,\n      },\n    },\n  ...\n])\n")))}m.isMDXComponent=!0},35126:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/watchasset-nft-2-47175d8031488c5aa2a3efb176f3ce58.png"},69707:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/watchasset-nft-73bf5f1b34577d496263ffe6b475bd00.png"}}]);