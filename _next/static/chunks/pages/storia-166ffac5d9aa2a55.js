(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49],{2573:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/storia",function(){return t(7695)}])},5137:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var r=t(5893),i=t(682),o=t(4051),a=t(1555);function s(n){return(0,r.jsx)(i.Z,{children:(0,r.jsx)(o.Z,{children:(0,r.jsx)(a.Z,{children:(0,r.jsx)("h1",{className:"mt-2 mb-4",children:n.children})})})})}},1049:function(n,e,t){"use strict";t.d(e,{w:function(){return l}});var r=t(5893),i=t(682),o=t(8755),a=t(2811),s=t(5675),c=t.n(s);var l=function(){return(0,r.jsx)(a.Z,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",sticky:"top",children:(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(a.Z.Brand,{href:"/associazione/",children:[(0,r.jsx)(c(),{src:"/associazione/images/logo-trans.png",width:"30",height:"30",className:"d-inline-block align-top",alt:"logo"}),"Lambrock Festival"]}),(0,r.jsx)(a.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,r.jsxs)(a.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,r.jsx)(o.Z,{className:"me-auto"}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(o.Z.Link,{href:"/associazione/storia",children:"Storia"}),(0,r.jsx)(o.Z.Link,{href:"/associazione/galleria",children:"Galleria"}),(0,r.jsx)(o.Z.Link,{href:"/associazione/contatti",children:"Contatti"})]})]})]})})}},6043:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var r=t(5893),i=t(682),o=t(4051),a=t(1555),s=t(1049);function c(n){var e=n.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:"Associazione Lambrock Festival"}),(0,r.jsx)(s.w,{}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(o.Z,{className:"mt-4",children:(0,r.jsx)(a.Z,{children:e})})})]})}},7695:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return B},default:function(){return G}});var r=t(5893),i=t(6043),o=t(1555),a=t(8755),s=t(4051),c=t(5697),l=t.n(c),u=t(7294),d=t(5446);const x={prefix:String(Math.round(1e10*Math.random())),current:0},E=u.createContext(x);let h=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);var v=t(6626),m=t(7126);var f=function({children:n,in:e,mountOnEnter:t,unmountOnExit:r}){const i=(0,u.useRef)(e);return(0,u.useEffect)((()=>{e&&(i.current=!0)}),[e]),e?n:r||!i.current&&t?null:n};const j=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],g=["activeKey","getControlledId","getControllerId"],b=["as"];function p(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}function Z(n){let{active:e,eventKey:t,mountOnEnter:r,transition:i,unmountOnExit:o,role:a="tabpanel",onEnter:s,onEntering:c,onEntered:l,onExit:d,onExiting:x,onExited:E}=n,h=p(n,j);const f=(0,u.useContext)(v.Z);if(!f)return[Object.assign({},h,{role:a}),{eventKey:t,isActive:e,mountOnEnter:r,transition:i,unmountOnExit:o,onEnter:s,onEntering:c,onEntered:l,onExit:d,onExiting:x,onExited:E}];const{activeKey:b,getControlledId:Z,getControllerId:O}=f,y=p(f,g),C=(0,m.h)(t);return[Object.assign({},h,{role:a,id:Z(t),"aria-labelledby":O(t)}),{eventKey:t,isActive:null==e&&null!=C?(0,m.h)(b)===C:e,transition:i||y.transition,mountOnEnter:null!=r?r:y.mountOnEnter,unmountOnExit:null!=o?o:y.unmountOnExit,onEnter:s,onEntering:c,onEntered:l,onExit:d,onExiting:x,onExited:E}]}const O=u.forwardRef(((n,e)=>{let{as:t="div"}=n,i=p(n,b);const[o,{isActive:a,onEnter:s,onEntering:c,onEntered:l,onExit:u,onExiting:d,onExited:x,mountOnEnter:E,unmountOnExit:h,transition:j=f}]=Z(i);return(0,r.jsx)(v.Z.Provider,{value:null,children:(0,r.jsx)(m.Z.Provider,{value:null,children:(0,r.jsx)(j,{in:a,onEnter:s,onEntering:c,onEntered:l,onExit:u,onExiting:d,onExited:x,mountOnEnter:E,unmountOnExit:h,children:(0,r.jsx)(t,Object.assign({},o,{ref:e,hidden:!a,"aria-hidden":!a}))})})})}));O.displayName="TabPanel";const y=n=>{const{id:e,generateChildId:t,onSelect:i,activeKey:o,defaultActiveKey:a,transition:s,mountOnEnter:c,unmountOnExit:l,children:f}=n,[j,g]=(0,d.$c)(o,a,i),b=function(n){let e=(0,u.useContext)(E);return e!==x||h||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,u.useMemo)((()=>n||`react-aria${e.prefix}-${++e.current}`),[n])}(e),p=(0,u.useMemo)((()=>t||((n,e)=>b?`${b}-${e}-${n}`:null)),[b,t]),Z=(0,u.useMemo)((()=>({onSelect:g,activeKey:j,transition:s,mountOnEnter:c||!1,unmountOnExit:l||!1,getControlledId:n=>p(n,"tabpane"),getControllerId:n=>p(n,"tab")})),[g,j,s,c,l,p]);return(0,r.jsx)(v.Z.Provider,{value:Z,children:(0,r.jsx)(m.Z.Provider,{value:g||null,children:f})})};y.Panel=O;var C=y,w=t(1068);function N(n){return"boolean"===typeof n?n?w.Z:f:n}const P=({transition:n,...e})=>(0,r.jsx)(C,{...e,transition:N(n)});P.displayName="TabContainer";var k=P,_=(0,t(6611).Z)("tab-content"),K=t(4184),T=t.n(K),S=t(6792);const I=u.forwardRef((({bsPrefix:n,transition:e,...t},i)=>{const[{className:o,as:a="div",...s},{isActive:c,onEnter:l,onEntering:u,onEntered:d,onExit:x,onExiting:E,onExited:h,mountOnEnter:f,unmountOnExit:j,transition:g=w.Z}]=Z({...t,transition:N(e)}),b=(0,S.vE)(n,"tab-pane");return(0,r.jsx)(v.Z.Provider,{value:null,children:(0,r.jsx)(m.Z.Provider,{value:null,children:(0,r.jsx)(g,{in:c,onEnter:l,onEntering:u,onEntered:d,onExit:x,onExiting:E,onExited:h,mountOnEnter:f,unmountOnExit:j,children:(0,r.jsx)(a,{...s,ref:i,className:T()(o,b,c&&"active")})})})})}));I.displayName="TabPane";var A=I;const L={eventKey:l().oneOfType([l().string,l().number]),title:l().node.isRequired,disabled:l().bool,tabClassName:l().string,tabAttrs:l().object},z=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};z.propTypes=L;var R=Object.assign(z,{Container:k,Content:_,Pane:A}),$=t(3985);var M=function(n){var e=n.children,t=function(n){var e,t=[];return n.forEach((function(n,i){e=i.toString(),t.push((0,r.jsx)(a.Z.Item,{children:(0,r.jsx)(a.Z.Link,{eventKey:e,className:"mb-2",children:n.pageName})}))})),t}(e),i=function(n){var e,t=[];return n.forEach((function(n,i){e=i.toString(),t.push((0,r.jsx)(R.Pane,{eventKey:e,children:(0,r.jsx)($.D,{children:n.content})}))})),t}(e);return(0,r.jsx)(R.Container,{id:"left-tabs-example",defaultActiveKey:"0",children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(o.Z,{sm:3,children:(0,r.jsx)(a.Z,{variant:"pills",className:"flex-column",children:t})}),(0,r.jsx)(o.Z,{sm:9,children:(0,r.jsx)(R.Content,{children:i})})]})})};var F=t(5137),B=!0;function G(n){var e=n.data;return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(F.Z,{children:"La Nostra Storia"}),(0,r.jsx)(M,{children:e})]})}}},function(n){n.O(0,[403,774,888,179],(function(){return e=2573,n(n.s=e);var e}));var e=n.O();_N_E=e}]);