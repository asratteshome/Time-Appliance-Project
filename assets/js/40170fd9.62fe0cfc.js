"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[693],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1547:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},p="Raspberry Pi Compute Module",u={unversionedId:"time-card/kernel/kernel-raspi-installation",id:"time-card/kernel/kernel-raspi-installation",title:"Raspberry Pi Compute Module",description:"Currently a work in progress",source:"@site/docs/time-card/kernel/kernel-raspi-installation.md",sourceDirName:"time-card/kernel",slug:"/time-card/kernel/kernel-raspi-installation",permalink:"/docs/time-card/kernel/kernel-raspi-installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CentOS",permalink:"/docs/time-card/kernel/kernel-installation"},next:{title:"Usage",permalink:"/docs/time-card/usage"}},c={},s=[{value:"Build",id:"build",level:3},{value:"Kconfig updates",id:"kconfig-updates",level:3},{value:"Make",id:"make",level:3}],d={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"raspberry-pi-compute-module"},"Raspberry Pi Compute Module"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Currently a work in progress")),(0,a.kt)("h3",{id:"build"},"Build"),(0,a.kt)("p",null,"Build parameters,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CONFIG_NET_DEVLINK=y CONFIG_SERIAL_8250_NR_UARTS=8 CONFIG_IRQ_POLL=y\n")),(0,a.kt)("h3",{id:"kconfig-updates"},"Kconfig updates"),(0,a.kt)("p",null,"Change ",(0,a.kt)("inlineCode",{parentName:"p"},"Kconfig")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"net")," to have ",(0,a.kt)("inlineCode",{parentName:"p"},"DEVLINK")," enabled"),(0,a.kt)("h3",{id:"make"},"Make"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"make oldconfig")," before doing ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," but after manually adding ",(0,a.kt)("inlineCode",{parentName:"p"},"DEVLINK")))}f.isMDXComponent=!0}}]);