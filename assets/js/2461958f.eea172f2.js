(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{77:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return u})),n.d(e,"default",(function(){return s}));var o=n(3),r=(n(0),n(92)),a=n(91);const i={sidebar_position:1,sidebar_label:"E-Mail accounts",title:"Setting up e-mail accounts for Excel automation",slug:"/settings/configure-email-accounts-for-excel-automation"},c={unversionedId:"settings/setupEmail",id:"settings/setupEmail",isDocsHomePage:!1,title:"Setting up e-mail accounts for Excel automation",description:"You can use any Outlook account or any email account with SMTP access to automatically send emails from Excel.",source:"@site/docs/settings/setupEmail.md",sourceDirName:"settings",slug:"/settings/configure-email-accounts-for-excel-automation",permalink:"/autotoolit-for-office/settings/configure-email-accounts-for-excel-automation",version:"current",sidebar_label:"E-Mail accounts",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"E-Mail accounts",title:"Setting up e-mail accounts for Excel automation",slug:"/settings/configure-email-accounts-for-excel-automation"},sidebar:"tutorialSidebar",previous:{title:"Excel template import to PowerPoint",permalink:"/autotoolit-for-office/PowerPoint/PowerPoint-Automation-Excel-template-import"}},u=[{value:"Open application settings",id:"open-application-settings",children:[]},{value:"Add or change email accounts",id:"add-or-change-email-accounts",children:[]}],l={toc:u};function s({components:t,...e}){return Object(r.b)("wrapper",Object(o.a)({},l,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can use any Outlook account or any email account with SMTP access to automatically send emails from Excel."),Object(r.b)("h3",{id:"open-application-settings"},"Open application settings"),Object(r.b)("p",null,"To configure your email accounts open the ",Object(r.b)("strong",{parentName:"p"},"AutoToolit")," tab in the ",Object(r.b)("strong",{parentName:"p"},"File")," menu of Excel:"),Object(r.b)("img",{alt:"application settings for Excel automation using AutoToolit for Office",src:Object(a.a)("/img/settings/excel-settings-01-ribbon-backstage-automation-autotoolit-921.png"),width:"921",className:"dropShadowImages"}),Object(r.b)("h3",{id:"add-or-change-email-accounts"},"Add or change email accounts"),Object(r.b)("p",null,"Here you can open the email settings:"),Object(r.b)("img",{alt:"email account configuration for Excel automation using AutoToolit for Office",src:Object(a.a)("/img/settings/excel-settings-02-email-accounts-automation-autotoolit-938.png"),width:"921",className:"dropShadowImages"}),Object(r.b)("p",null,"Pressing the Refresh button will obtain all configured email account from Outlook.  "),Object(r.b)("p",null,"With the ",Object(r.b)("strong",{parentName:"p"},"+")," button you can add additional SMTP email accounts. Emails with these accounts will be directly sent using the provided SMTP server."))}s.isMDXComponent=!0},91:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i}));var o=n(16),r=n(93);function a(){var t=Object(o.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,a=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,o){var a=void 0===o?{}:o,i=a.forcePrependBaseUrl,c=void 0!==i&&i,u=a.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return e+n;var s=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+s:s}(a,n,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,a().withBaseUrl)(t,e)}},92:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=r.a.createContext({}),s=function(t){var e=r.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=s(t.components);return r.a.createElement(l.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),p=s(n),m=o,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return n?r.a.createElement(d,c(c({ref:e},l),{},{components:n})):r.a.createElement(d,c({ref:e},l))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93:function(t,e,n){"use strict";function o(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!o(t)}n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r}))}}]);