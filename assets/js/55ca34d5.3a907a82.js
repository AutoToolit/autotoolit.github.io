(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return f}));var n=r(3),a=r(8),o=(r(0),r(92)),i=r(91),c={sidebar_position:13,sidebar_label:"Automate data refresh",title:"Automate data refresh in Excel",slug:"/Excel/Excel-automate-data-source-refresh"},u={unversionedId:"uiExcel/ExcelAutoStepRefreshData",id:"uiExcel/ExcelAutoStepRefreshData",isDocsHomePage:!1,title:"Automate data refresh in Excel",description:"If you want to refesh data while automating an Excel template you can use the Update Data Source automation item:",source:"@site/docs/uiExcel/ExcelAutoStepRefreshData.mdx",sourceDirName:"uiExcel",slug:"/Excel/Excel-automate-data-source-refresh",permalink:"/autotoolit-for-office/Excel/Excel-automate-data-source-refresh",version:"current",sidebar_label:"Automate data refresh",sidebarPosition:13,frontMatter:{sidebar_position:13,sidebar_label:"Automate data refresh",title:"Automate data refresh in Excel",slug:"/Excel/Excel-automate-data-source-refresh"},sidebar:"tutorialSidebar",previous:{title:"Automate emails from Excel",permalink:"/autotoolit-for-office/Excel/Excel-automate-sending-emails"},next:{title:"Automate changes of parameters in Excel",permalink:"/autotoolit-for-office/Excel/Excel-automate-parameter-change"}},l=[],s={toc:l};function f(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you want to refesh data while automating an Excel template you can use the ",Object(o.b)("strong",{parentName:"p"},"Update Data Source")," automation item:"),Object(o.b)("img",{alt:"Data refresh or update during Excel automation in AutoToolit for Office",src:Object(i.a)("/img/uiExcel/excel-automation-step-data-update-01-autotoolit-597.png"),width:"597",className:"dropShadowImages"}),Object(o.b)("p",null,"You can choose to refresh all data sources or only selected data source in a specific automation step.\nThis is useful to optimize performance when exporting multiple export sections.\nBefore exporting an export section you can define to only update data sources that are relevant to the export."))}f.isMDXComponent=!0},91:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(16),a=r(93);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,u=o.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(c)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+s:s}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},92:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(r),d=n,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))}}]);