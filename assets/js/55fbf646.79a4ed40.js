(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(8),a=(n(0),n(92)),i=n(91),c={sidebar_position:15,sidebar_label:"Automate documents",title:"Automate generation of documents in Excel",slug:"/Excel/Excel-automate-document-generation-for-powerpoint-word-pdf"},u={unversionedId:"uiExcel/ExcelAutoStepSetDocument",id:"uiExcel/ExcelAutoStepSetDocument",isDocsHomePage:!1,title:"Automate generation of documents in Excel",description:"In case you want to generate multiple documents with one automation preset you can use the Set Document automation step.",source:"@site/docs/uiExcel/ExcelAutoStepSetDocument.mdx",sourceDirName:"uiExcel",slug:"/Excel/Excel-automate-document-generation-for-powerpoint-word-pdf",permalink:"/autotoolit-for-office/Excel/Excel-automate-document-generation-for-powerpoint-word-pdf",version:"current",sidebar_label:"Automate documents",sidebarPosition:15,frontMatter:{sidebar_position:15,sidebar_label:"Automate documents",title:"Automate generation of documents in Excel",slug:"/Excel/Excel-automate-document-generation-for-powerpoint-word-pdf"},sidebar:"tutorialSidebar",previous:{title:"Automate changes of parameters in Excel",permalink:"/autotoolit-for-office/Excel/Excel-automate-parameter-change"},next:{title:"Excel template import to PowerPoint",permalink:"/autotoolit-for-office/PowerPoint/PowerPoint-Automation-Excel-template-import"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In case you want to generate multiple documents with one automation preset you can use the ",Object(a.b)("strong",{parentName:"p"},"Set Document")," automation step.\nThis automation step changes the target document, which is used by the following automation steps.\nAny setting made in general settings or in a previous ",Object(a.b)("strong",{parentName:"p"},"Set Document")," automation step is overwritten, once a new ",Object(a.b)("strong",{parentName:"p"},"Set Document")," automation step is processed:"),Object(a.b)("img",{alt:"for Excel automation in AutoToolit for Office",src:Object(i.a)("/img/uiExcel/excel-automation-step-document-change-01-autotoolit-646.png"),width:"646",className:"dropShadowImages"}),Object(a.b)("p",null,"You can choose, whether to change the target document for PowerPoint or Word exports.\nThe location and name of the new target document can be specified directly or from an Excel cell."),Object(a.b)("p",null,"After the target document has been processed by the following automation steps it is possible to keep the document window open or close it automatically."))}p.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var o=n(16),r=n(93);function a(){var e=Object(o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var a=void 0===o?{}:o,i=a.forcePrependBaseUrl,c=void 0!==i&&i,u=a.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||a;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))}}]);