(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{MUTZ:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),a=n("WNlj"),o=n("z6Y5"),s=i.a.createElement;t.default=function(){return s(a.a,{style:{paddingLeft:40}},s(o.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",className:"background-style"},s(o.a,{item:!0,xs:12,md:7,className:"app-content"},s(i.a.Fragment,null,s("h2",{className:"mr-3"},"\u0422\u0430 \u043c\u0430\u043d\u0430\u0439 \u0430\u043f\u043f\u043b\u0438\u043a\u0435\u0439\u0448\u0438\u043d\u044b\u0433 \u0442\u0430\u0442\u0441\u0430\u043d\u0430\u0430\u0440 \u043e\u043b\u043e\u043d \u043e\u043d\u0446\u0433\u043e\u0439 \u0431\u043e\u043b\u043e\u043c\u0436\u0443\u0443\u0434 \u0445\u04af\u043b\u044d\u044d\u0436 \u0431\u0430\u0439\u043d\u0430."),s("div",{className:"store-images"},s("img",{src:"/images/appStore.svg",alt:"app store"}),s("img",{src:"/images/playStore.svg",alt:"play store"})))),s(o.a,{item:!0,sx:12,md:5,className:"phone-image"},s("img",{src:"/images/phones.svg",alt:"application phone",className:"app-cover-img"}))))}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},npJ3:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app-cover",function(){return n("MUTZ")}])},z6Y5:function(e,t,n){"use strict";var r=n("zLVn"),i=n("wx14"),a=n("q1tI"),o=(n("17x9"),n("iuhU")),s=n("fGgT"),c=n("0kTp"),p=n("+NmR"),m=n("Vn7y"),l=n("tCRK");var d=a.createContext(),g=n("PDDv"),u=n("HltC");function x(e){return Object(g.a)("MuiGrid",e)}const w=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var b=Object(u.a)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(e=>`spacing-xs-${e}`),...["column-reverse","column","row-reverse","row"].map(e=>`direction-xs-${e}`),...["nowrap","wrap-reverse","wrap"].map(e=>`wrap-xs-${e}`),...w.map(e=>`grid-xs-${e}`),...w.map(e=>`grid-sm-${e}`),...w.map(e=>`grid-md-${e}`),...w.map(e=>`grid-lg-${e}`),...w.map(e=>`grid-xl-${e}`)]),f=n("nKUr");const S=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function h(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}const $=Object(m.a)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{container:n,direction:r,item:i,lg:a,md:o,sm:s,spacing:c,wrap:p,xl:m,xs:l,zeroMinWidth:d}=e.ownerState;return[t.root,n&&t.container,i&&t.item,d&&t.zeroMinWidth,n&&0!==c&&t[`spacing-xs-${String(c)}`],"row"!==r&&t[`direction-xs-${String(r)}`],"wrap"!==p&&t[`wrap-xs-${String(p)}`],!1!==l&&t[`grid-xs-${String(l)}`],!1!==s&&t[`grid-sm-${String(s)}`],!1!==o&&t[`grid-md-${String(o)}`],!1!==a&&t[`grid-lg-${String(a)}`],!1!==m&&t[`grid-xl-${String(m)}`]]}})(({ownerState:e})=>Object(i.a)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"nowrap"===e.wrap&&{flexWrap:"nowrap"},"reverse"===e.wrap&&{flexWrap:"wrap-reverse"}),(function({theme:e,ownerState:t}){const n=Object(s.d)({values:t.direction,breakpoints:e.breakpoints.values});return Object(s.b)({theme:e},n,e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${b.item}`]={maxWidth:"none"}),t})}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:r}=t;let i={};if(n&&0!==r){const t=Object(s.d)({values:r,breakpoints:e.breakpoints.values});i=Object(s.b)({theme:e},t,t=>{const n=e.spacing(t);return"0px"!==n?{marginTop:`-${h(n)}`,[`& > .${b.item}`]:{paddingTop:h(n)}}:{}})}return i}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:r}=t;let i={};if(n&&0!==r){const t=Object(s.d)({values:r,breakpoints:e.breakpoints.values});i=Object(s.b)({theme:e},t,t=>{const n=e.spacing(t);return"0px"!==n?{width:`calc(100% + ${h(n)})`,marginLeft:`-${h(n)}`,[`& > .${b.item}`]:{paddingLeft:h(n)}}:{}})}return i}),({theme:e,ownerState:t})=>e.breakpoints.keys.reduce((n,r)=>(function(e,t,n,r){const a=r[n];if(!a)return;let o={};if(!0===a)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===a)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const e=Object(s.d)({values:r.columns,breakpoints:t.breakpoints.values}),c="object"===typeof e?e[n]:e,p=`${Math.round(a/c*1e8)/1e6}%`;let m={};if(r.container&&r.item&&0!==r.columnSpacing){const e=t.spacing(r.columnSpacing);if("0px"!==e){const t=`calc(${p} + ${h(e)})`;m={flexBasis:t,maxWidth:t}}}o=Object(i.a)({flexBasis:p,flexGrow:0,maxWidth:p},m)}0===t.breakpoints.values[n]?Object.assign(e,o):e[t.breakpoints.up(n)]=o}(n,e,r,t),n),{})),v=a.forwardRef((function(e,t){const n=Object(l.a)({props:e,name:"MuiGrid"}),s=Object(c.a)(n),{className:m,columns:g,columnSpacing:u,component:w="div",container:b=!1,direction:h="row",item:v=!1,lg:j=!1,md:O=!1,rowSpacing:W,sm:k=!1,spacing:M=0,wrap:z="wrap",xl:N=!1,xs:y=!1,zeroMinWidth:G=!1}=s,T=Object(r.a)(s,S),_=W||M,C=u||M,R=a.useContext(d),B=g||R||12,J=Object(i.a)({},s,{columns:B,container:b,direction:h,item:v,lg:j,md:O,sm:k,rowSpacing:_,columnSpacing:C,wrap:z,xl:N,xs:y,zeroMinWidth:G}),L=(e=>{const{classes:t,container:n,direction:r,item:i,lg:a,md:o,sm:s,spacing:c,wrap:m,xl:l,xs:d,zeroMinWidth:g}=e,u={root:["root",n&&"container",i&&"item",g&&"zeroMinWidth",n&&0!==c&&`spacing-xs-${String(c)}`,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==m&&`wrap-xs-${String(m)}`,!1!==d&&`grid-xs-${String(d)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==o&&`grid-md-${String(o)}`,!1!==a&&`grid-lg-${String(a)}`,!1!==l&&`grid-xl-${String(l)}`]};return Object(p.a)(u,x,t)})(J);return P=Object(f.jsx)($,Object(i.a)({ownerState:J,className:Object(o.a)(L.root,m),as:w,ref:t},T)),12!==B?Object(f.jsx)(d.Provider,{value:B,children:P}):P;var P}));t.a=v}},[["npJ3",0,1,3]]]);