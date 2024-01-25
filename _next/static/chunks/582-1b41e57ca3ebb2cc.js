(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[582],{1113:function(e,t,r){"use strict";var i=r(8169),o=r(5893);t.Z=(0,i.Z)((0,o.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"}),"Assignment")},6761:function(e,t,r){"use strict";var i=r(8169),o=r(5893);t.Z=(0,i.Z)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},1797:function(e,t,r){"use strict";var i=r(8169),o=r(5893);t.Z=(0,i.Z)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},4267:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var i=r(7462),o=r(3366),a=r(7294),n=r(512),s=r(4780),l=r(948),u=r(1657),c=r(1588),d=r(4867);function p(e){return(0,d.ZP)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var f=r(5893);let m=["className","component"],g=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)},h=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}}));var b=a.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiCardContent"}),{className:a,component:s="div"}=r,l=(0,o.Z)(r,m),c=(0,i.Z)({},r,{component:s}),d=g(c);return(0,f.jsx)(h,(0,i.Z)({as:s,className:(0,n.Z)(d.root,a),ownerState:c,ref:t},l))})},6242:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var i=r(7462),o=r(3366),a=r(7294),n=r(512),s=r(4780),l=r(948),u=r(1657),c=r(629),d=r(1588),p=r(4867);function f(e){return(0,p.ZP)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var m=r(5893);let g=["className","raised"],h=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},f,t)},b=(0,l.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"}));var v=a.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiCard"}),{className:a,raised:s=!1}=r,l=(0,o.Z)(r,g),c=(0,i.Z)({},r,{raised:s}),d=h(c);return(0,m.jsx)(b,(0,i.Z)({className:(0,n.Z)(d.root,a),elevation:s?8:void 0,ref:t,ownerState:c},l))})},6886:function(e,t,r){"use strict";r.d(t,{ZP:function(){return C}});var i=r(3366),o=r(7462),a=r(7294),n=r(512),s=r(5408),l=r(9707),u=r(4780),c=r(948),d=r(1657),p=r(2734);let f=a.createContext();var m=r(1588),g=r(4867);function h(e){return(0,g.ZP)("MuiGrid",e)}let b=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],v=(0,m.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(e=>`spacing-xs-${e}`),...["column-reverse","column","row-reverse","row"].map(e=>`direction-xs-${e}`),...["nowrap","wrap-reverse","wrap"].map(e=>`wrap-xs-${e}`),...b.map(e=>`grid-xs-${e}`),...b.map(e=>`grid-sm-${e}`),...b.map(e=>`grid-md-${e}`),...b.map(e=>`grid-lg-${e}`),...b.map(e=>`grid-xl-${e}`)]);var y=r(5893);let x=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function w(e){let t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function S({breakpoints:e,values:t}){let r="";Object.keys(t).forEach(e=>{""===r&&0!==t[e]&&(r=e)});let i=Object.keys(e).sort((t,r)=>e[t]-e[r]);return i.slice(0,i.indexOf(r))}let $=(0,c.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e,{container:i,direction:o,item:a,spacing:n,wrap:s,zeroMinWidth:l,breakpoints:u}=r,c=[];i&&(c=function(e,t,r={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[r[`spacing-xs-${String(e)}`]];let i=[];return t.forEach(t=>{let o=e[t];Number(o)>0&&i.push(r[`spacing-${t}-${String(o)}`])}),i}(n,u,t));let d=[];return u.forEach(e=>{let i=r[e];i&&d.push(t[`grid-${e}-${String(i)}`])}),[t.root,i&&t.container,a&&t.item,l&&t.zeroMinWidth,...c,"row"!==o&&t[`direction-xs-${String(o)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...d]}})(({ownerState:e})=>(0,o.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap}),function({theme:e,ownerState:t}){let r=(0,s.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},r,e=>{let t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${v.item}`]={maxWidth:"none"}),t})},function({theme:e,ownerState:t}){let{container:r,rowSpacing:i}=t,o={};if(r&&0!==i){let t;let r=(0,s.P$)({values:i,breakpoints:e.breakpoints.values});"object"==typeof r&&(t=S({breakpoints:e.breakpoints.values,values:r})),o=(0,s.k9)({theme:e},r,(r,i)=>{var o;let a=e.spacing(r);return"0px"!==a?{marginTop:`-${w(a)}`,[`& > .${v.item}`]:{paddingTop:w(a)}}:null!=(o=t)&&o.includes(i)?{}:{marginTop:0,[`& > .${v.item}`]:{paddingTop:0}}})}return o},function({theme:e,ownerState:t}){let{container:r,columnSpacing:i}=t,o={};if(r&&0!==i){let t;let r=(0,s.P$)({values:i,breakpoints:e.breakpoints.values});"object"==typeof r&&(t=S({breakpoints:e.breakpoints.values,values:r})),o=(0,s.k9)({theme:e},r,(r,i)=>{var o;let a=e.spacing(r);return"0px"!==a?{width:`calc(100% + ${w(a)})`,marginLeft:`-${w(a)}`,[`& > .${v.item}`]:{paddingLeft:w(a)}}:null!=(o=t)&&o.includes(i)?{}:{width:"100%",marginLeft:0,[`& > .${v.item}`]:{paddingLeft:0}}})}return o},function({theme:e,ownerState:t}){let r;return e.breakpoints.keys.reduce((i,a)=>{let n={};if(t[a]&&(r=t[a]),!r)return i;if(!0===r)n={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let l=(0,s.P$)({values:t.columns,breakpoints:e.breakpoints.values}),u="object"==typeof l?l[a]:l;if(null==u)return i;let c=`${Math.round(r/u*1e8)/1e6}%`,d={};if(t.container&&t.item&&0!==t.columnSpacing){let r=e.spacing(t.columnSpacing);if("0px"!==r){let e=`calc(${c} + ${w(r)})`;d={flexBasis:e,maxWidth:e}}}n=(0,o.Z)({flexBasis:c,flexGrow:0,maxWidth:c},d)}return 0===e.breakpoints.values[a]?Object.assign(i,n):i[e.breakpoints.up(a)]=n,i},{})}),j=e=>{let{classes:t,container:r,direction:i,item:o,spacing:a,wrap:n,zeroMinWidth:s,breakpoints:l}=e,c=[];r&&(c=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];let r=[];return t.forEach(t=>{let i=e[t];if(Number(i)>0){let e=`spacing-${t}-${String(i)}`;r.push(e)}}),r}(a,l));let d=[];l.forEach(t=>{let r=e[t];r&&d.push(`grid-${t}-${String(r)}`)});let p={root:["root",r&&"container",o&&"item",s&&"zeroMinWidth",...c,"row"!==i&&`direction-xs-${String(i)}`,"wrap"!==n&&`wrap-xs-${String(n)}`,...d]};return(0,u.Z)(p,h,t)};var C=a.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiGrid"}),{breakpoints:s}=(0,p.Z)(),u=(0,l.Z)(r),{className:c,columns:m,columnSpacing:g,component:h="div",container:b=!1,direction:v="row",item:w=!1,rowSpacing:S,spacing:C=0,wrap:k="wrap",zeroMinWidth:E=!1}=u,z=(0,i.Z)(u,x),P=S||C,M=g||C,Z=a.useContext(f),_=b?m||12:Z,N={},O=(0,o.Z)({},z);s.keys.forEach(e=>{null!=z[e]&&(N[e]=z[e],delete O[e])});let R=(0,o.Z)({},u,{columns:_,container:b,direction:v,item:w,rowSpacing:P,columnSpacing:M,wrap:k,zeroMinWidth:E,spacing:C},N,{breakpoints:s.keys}),I=j(R);return(0,y.jsx)(f.Provider,{value:_,children:(0,y.jsx)($,(0,o.Z)({ownerState:R,className:(0,n.Z)(I.root,c),as:h,ref:t},O))})})},3686:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let i=r(8754),o=r(1757),a=r(5893),n=o._(r(7294)),s=i._(r(3935)),l=i._(r(6665)),u=r(1908),c=r(4706),d=r(5670);r(1558);let p=r(1973),f=i._(r(3293)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,i,o,a){let n=null==e?void 0:e.src;e&&e["data-loaded-src"]!==n&&(e["data-loaded-src"]=n,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function h(e){let[t,r]=n.version.split(".",2),i=parseInt(t,10),o=parseInt(r,10);return i>18||18===i&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let b=(0,n.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:o,height:s,width:l,decoding:u,className:c,style:d,fetchPriority:p,placeholder:f,loading:m,unoptimized:b,fill:v,onLoadRef:y,onLoadingCompleteRef:x,setBlurComplete:w,setShowAltText:S,onLoad:$,onError:j,...C}=e;return(0,a.jsx)("img",{...C,...h(p),loading:m,width:l,height:s,decoding:u,"data-nimg":v?"fill":"1",className:c,style:d,sizes:o,srcSet:i,src:r,ref:(0,n.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&g(e,f,y,x,w,b))},[r,f,y,x,w,j,b,t]),onLoad:e=>{g(e.currentTarget,f,y,x,w,b)},onError:e=>{S(!0),"empty"!==f&&w(!0),j&&j(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&s.default.preload?(s.default.preload(r.src,i),null):(0,a.jsx)(l.default,{children:(0,a.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let y=(0,n.forwardRef)((e,t)=>{let r=(0,n.useContext)(p.RouterContext),i=(0,n.useContext)(d.ImageConfigContext),o=(0,n.useMemo)(()=>{let e=m||i||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:s,onLoadingComplete:l}=e,g=(0,n.useRef)(s);(0,n.useEffect)(()=>{g.current=s},[s]);let h=(0,n.useRef)(l);(0,n.useEffect)(()=>{h.current=l},[l]);let[y,x]=(0,n.useState)(!1),[w,S]=(0,n.useState)(!1),{props:$,meta:j}=(0,u.getImgProps)(e,{defaultLoader:f.default,imgConf:o,blurComplete:y,showAltText:w});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{...$,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:x,setShowAltText:S,ref:t}),j.priority?(0,a.jsx)(v,{isAppRouter:!r,imgAttributes:$}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1908:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(1558);let i=r(7386),o=r(4706);function a(e){return void 0!==e.default}function n(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,l,u,{src:c,sizes:d,unoptimized:p=!1,priority:f=!1,loading:m,className:g,quality:h,width:b,height:v,fill:y=!1,style:x,onLoad:w,onLoadingComplete:S,placeholder:$="empty",blurDataURL:j,fetchPriority:C,layout:k,objectFit:E,objectPosition:z,lazyBoundary:P,lazyRoot:M,...Z}=e,{imgConf:_,showAltText:N,blurComplete:O,defaultLoader:R}=t,I=_||o.imageConfigDefault;if("allSizes"in I)s=I;else{let e=[...I.deviceSizes,...I.imageSizes].sort((e,t)=>e-t),t=I.deviceSizes.sort((e,t)=>e-t);s={...I,allSizes:e,deviceSizes:t}}let D=Z.loader||R;delete Z.loader,delete Z.srcSet;let A="__next_img_default"in D;if(A){if("custom"===s.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...i}=t;return e(i)}}if(k){"fill"===k&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[k];t&&!d&&(d=t)}let W="",L=n(b),G=n(v);if("object"==typeof(r=c)&&(a(r)||void 0!==r.src)){let e=a(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,j=j||e.blurDataURL,W=e.src,!y){if(L||G){if(L&&!G){let t=L/e.width;G=Math.round(e.height*t)}else if(!L&&G){let t=G/e.height;L=Math.round(e.width*t)}}else L=e.width,G=e.height}}let B=!f&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:W)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,B=!1),s.unoptimized&&(p=!0),A&&c.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(p=!0),f&&(C="high");let T=n(h),F=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:z}:{},N?{}:{color:"transparent"},x),H=O||"empty"===$?null:"blur"===$?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:L,heightInt:G,blurWidth:l,blurHeight:u,blurDataURL:j||"",objectFit:F.objectFit})+'")':'url("'+$+'")',V=H?{backgroundSize:F.objectFit||"cover",backgroundPosition:F.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},U=function(e){let{config:t,src:r,unoptimized:i,width:o,quality:a,sizes:n,loader:s}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,n),c=l.length-1;return{sizes:n||"w"!==u?n:"100vw",srcSet:l.map((e,i)=>s({config:t,src:r,quality:a,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:s({config:t,src:r,quality:a,width:l[c]})}}({config:s,src:c,unoptimized:p,width:L,quality:T,sizes:d,loader:D});return{props:{...Z,loading:B?"lazy":m,fetchPriority:C,width:L,height:G,decoding:"async",className:g,style:{...F,...V},sizes:U.sizes,srcSet:U.srcSet,src:U.src},meta:{unoptimized:p,priority:f,placeholder:$,fill:y}}}},7386:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:o,blurDataURL:a,objectFit:n}=e,s=i?40*i:t,l=o?40*o:r,u=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7481:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return s},default:function(){return l}});let i=r(8754),o=r(1908),a=r(3686),n=i._(r(3293)),s=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},l=a.Image},3293:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},5675:function(e,t,r){e.exports=r(7481)},6501:function(e,t,r){"use strict";let i,o;r.d(t,{x7:function(){return ed},ZP:function(){return ep}});var a,n=r(7294);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,u=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,p=(e,t)=>{let r="",i="",o="";for(let a in e){let n=e[a];"@"==a[0]?"i"==a[1]?r=a+" "+n+";":i+="f"==a[1]?p(n,a):a+"{"+p(n,"k"==a[1]?"":t)+"}":"object"==typeof n?i+=p(n,t?t.replace(/([^,])+/g,e=>a.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):a):null!=n&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=p.p?p.p(a,n):a+":"+n+";")}return r+(t&&o?t+"{"+o+"}":o)+i},f={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e},g=(e,t,r,i,o)=>{var a;let n=m(e),s=f[n]||(f[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!f[s]){let t=n!==e?e:(e=>{let t,r,i=[{}];for(;t=u.exec(e.replace(c,""));)t[4]?i.shift():t[3]?(r=t[3].replace(d," ").trim(),i.unshift(i[0][r]=i[0][r]||{})):i[0][t[1]]=t[2].replace(d," ").trim();return i[0]})(e);f[s]=p(o?{["@keyframes "+s]:t}:t,r?"":"."+s)}let l=r&&f.g?f.g:null;return r&&(f.g=f[s]),a=f[s],l?t.data=t.data.replace(l,a):-1===t.data.indexOf(a)&&(t.data=i?a+t.data:t.data+a),s},h=(e,t,r)=>e.reduce((e,i,o)=>{let a=t[o];if(a&&a.call){let e=a(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+i+(null==a?"":a)},"");function b(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let v,y,x,w=b.bind({k:1});function S(e,t){let r=this||{};return function(){let i=arguments;function o(a,n){let s=Object.assign({},a),l=s.className||o.className;r.p=Object.assign({theme:y&&y()},s),r.o=/ *go\d+/.test(l),s.className=b.apply(r,i)+(l?" "+l:""),t&&(s.ref=n);let u=e;return e[0]&&(u=s.as||e,delete s.as),x&&u[0]&&x(s),v(u,s)}return t?t(o):o}}var $=e=>"function"==typeof e,j=(e,t)=>$(e)?e(t):e,C=(i=0,()=>(++i).toString()),k=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},E=new Map,z=e=>{if(E.has(e))return;let t=setTimeout(()=>{E.delete(e),N({type:4,toastId:e})},1e3);E.set(e,t)},P=e=>{let t=E.get(e);t&&clearTimeout(t)},M=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&P(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?M(e,{type:1,toast:r}):M(e,{type:0,toast:r});case 3:let{toastId:i}=t;return i?z(i):e.toasts.forEach(e=>{z(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===i||void 0===i?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},Z=[],_={toasts:[],pausedAt:void 0},N=e=>{_=M(_,e),Z.forEach(e=>{e(_)})},O={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},R=(e={})=>{let[t,r]=(0,n.useState)(_);(0,n.useEffect)(()=>(Z.push(r),()=>{let e=Z.indexOf(r);e>-1&&Z.splice(e,1)}),[t]);let i=t.toasts.map(t=>{var r,i;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||O[t.type],style:{...e.style,...null==(i=e[t.type])?void 0:i.style,...t.style}}});return{...t,toasts:i}},I=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}),D=e=>(t,r)=>{let i=I(t,e,r);return N({type:2,toast:i}),i.id},A=(e,t)=>D("blank")(e,t);A.error=D("error"),A.success=D("success"),A.loading=D("loading"),A.custom=D("custom"),A.dismiss=e=>{N({type:3,toastId:e})},A.remove=e=>N({type:4,toastId:e}),A.promise=(e,t,r)=>{let i=A.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(A.success(j(t.success,e),{id:i,...r,...null==r?void 0:r.success}),e)).catch(e=>{A.error(j(t.error,e),{id:i,...r,...null==r?void 0:r.error})}),e};var W=(e,t)=>{N({type:1,toast:{id:e,height:t}})},L=()=>{N({type:5,time:Date.now()})},G=e=>{let{toasts:t,pausedAt:r}=R(e);(0,n.useEffect)(()=>{if(r)return;let e=Date.now(),i=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&A.dismiss(t.id);return}return setTimeout(()=>A.dismiss(t.id),r)});return()=>{i.forEach(e=>e&&clearTimeout(e))}},[t,r]);let i=(0,n.useCallback)(()=>{r&&N({type:6,time:Date.now()})},[r]),o=(0,n.useCallback)((e,r)=>{let{reverseOrder:i=!1,gutter:o=8,defaultPosition:a}=r||{},n=t.filter(t=>(t.position||a)===(e.position||a)&&t.height),s=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<s&&e.visible).length;return n.filter(e=>e.visible).slice(...i?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:W,startPause:L,endPause:i,calculateOffset:o}}},B=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,T=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,F=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,H=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,V=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,U=S("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${V} 1s linear infinite;
`,q=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Y=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,J=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${q} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Y} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,K=S("div")`
  position: absolute;
`,Q=S("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ee=S("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return void 0!==t?"string"==typeof t?n.createElement(ee,null,t):t:"blank"===r?null:n.createElement(Q,null,n.createElement(U,{...i}),"loading"!==r&&n.createElement(K,null,"error"===r?n.createElement(H,{...i}):n.createElement(J,{...i})))},er=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ei=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,eo=S("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ea=S("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,en=(e,t)=>{let r=e.includes("top")?1:-1,[i,o]=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[er(r),ei(r)];return{animation:t?`${w(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},es=n.memo(({toast:e,position:t,style:r,children:i})=>{let o=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},a=n.createElement(et,{toast:e}),s=n.createElement(ea,{...e.ariaProps},j(e.message,e));return n.createElement(eo,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof i?i({icon:a,message:s}):n.createElement(n.Fragment,null,a,s))});a=n.createElement,p.p=void 0,v=a,y=void 0,x=void 0;var el=({id:e,className:t,style:r,onHeightUpdate:i,children:o})=>{let a=n.useCallback(t=>{if(t){let r=()=>{i(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return n.createElement("div",{ref:a,className:t,style:r},o)},eu=(e,t)=>{let r=e.includes("top"),i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:k()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...i}},ec=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ed=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:o,containerStyle:a,containerClassName:s})=>{let{toasts:l,handlers:u}=G(r);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:s,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(r=>{let a=r.position||t,s=eu(a,u.calculateOffset(r,{reverseOrder:e,gutter:i,defaultPosition:t}));return n.createElement(el,{id:r.id,key:r.id,onHeightUpdate:u.updateHeight,className:r.visible?ec:"",style:s},"custom"===r.type?j(r.message,r):o?o(r):n.createElement(es,{toast:r,position:a}))}))},ep=A}}]);