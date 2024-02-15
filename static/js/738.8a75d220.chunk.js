"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[738],{2424:function(n,e,t){t.d(e,{t:function(){return x}});var i,r=t(168),o=t(7924),a=t(6048),l=t.n(a),s=t(3271),c=(0,o.ZP)(l())(i||(i=(0,r.Z)(["\n  display: flex;\n  list-style: none;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n\n  .page {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 5px;\n    font-size: ",";\n    font-weight: ",";\n    line-height: 1.22222;\n    width: 44px;\n    height: 44px;\n    border: 1px solid ",";\n    border-radius: 50%;\n    padding: 11px 16px;\n    cursor: pointer;\n    &.active {\n      background-color: ",";\n      border-color: ",";\n      color: ",";\n    }\n  }\n\n  .active {\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n  }\n\n  .pagination-break {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 5px;\n    width: 44px;\n    height: 44px;\n    border: 1px solid ",";\n    border-radius: 50%;\n    padding: 11px 14px;\n    cursor: pointer;\n  }\n\n  .pagination-previous-link,\n  .pagination-next-link {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n  }\n\n  .pagination-previous-link svg,\n  .pagination-next-link svg {\n    width: 24px;\n    height: 24px;\n    fill: currentColor;\n    transition: fill ",";\n\n    &:hover {\n      fill: ",";\n    }\n  }\n\n  .pagination-previous,\n  .pagination-next {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 5px;\n    width: 44px;\n    height: 44px;\n    border: 1px solid ",";\n    border-radius: 50%;\n    padding: 10px;\n    cursor: pointer;\n  }\n\n  .pagination-previous.pagination-disabled,\n  .pagination-next.pagination-disabled {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 5px;\n    width: 44px;\n    height: 44px;\n    border: 1px solid ",";\n    border-radius: 50%;\n    cursor: pointer;\n  }\n"])),s.r.fontSizes.s,s.r.fontWeight.bold,s.r.colors.paleGrey,s.r.colors.accent,s.r.colors.accent,s.r.colors.white,s.r.colors.accent,s.r.colors.accent,s.r.colors.white,s.r.colors.paleGrey,s.r.transition,s.r.colors.accent,s.r.colors.lightGrey,s.r.colors.paleGrey),p=t(7609),d=t(184),x=function(n){var e=n.totalPages,t=n.onPageChange;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(c,{previousLabel:(0,d.jsx)("svg",{children:(0,d.jsx)("use",{href:p.Z+"#icon-angle-left"})}),nextLabel:(0,d.jsx)("svg",{children:(0,d.jsx)("use",{href:p.Z+"#icon-angle-right"})}),breakLabel:"...",pageCount:Math.ceil(e),marginPagesDisplayed:0,pageRangeDisplayed:3,onPageChange:t,containerClassName:"pagination",activeClassName:"active",pageClassName:"page",breakClassName:"pagination-break",previousClassName:"pagination-previous",nextClassName:"pagination-next",previousLinkClassName:"pagination-previous-link",nextLinkClassName:"pagination-next-link",disabledClassName:"pagination-disabled"})})}},1523:function(n,e,t){t.d(e,{D:function(){return s}});var i,r=t(168),o=t(3271),a=t(7924).ZP.h1(i||(i=(0,r.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1;\n  letter-spacing: -0.84px;\n  color: ",";\n  text-align: start;\n\n  "," {\n    font-size: ",";\n    letter-spacing: -1.62px;\n  }\n"])),o.r.fontSizes.xl,o.r.fontWeight.bold,o.r.colors.black,o.r.mq.tablet,o.r.fontSizes.xxxxl),l=t(184),s=function(n){var e=n.name;return(0,l.jsx)(a,{children:e})}},6738:function(n,e,t){t.r(e),t.d(e,{default:function(){return cn}});var i,r,o,a,l,s,c,p,d,x,g,u,h,f,b,m,v,Z,j,y,w=t(9439),P=t(3623),k=t(2791),z=t(168),C=t(7924),S=C.ZP.div(i||(i=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n"]))),N=C.ZP.form(r||(r=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n"]))),B=C.ZP.div(o||(o=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n"]))),D=(C.ZP.label(a||(a=(0,z.Z)(["\n  position: absolute;\n  top: -28px;\n  color: var(--grey);\n  font-weight: 500;\n  line-height: 1.28;\n"]))),C.ZP.input(l||(l=(0,z.Z)(["\n  width: 120px;\n  height: 48px;\n  padding: 14px 41px 14px 24px;\n  border-radius: 14px 0px 0px 14px;\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n  background: #f7f7fb;\n  border: 1px solid transparent;\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n  font-weight: 500;\n  font-size: 18px;\n  outline: none;\n  color: var(--black);\n\n  &:hover,\n  &:focus {\n    border: 1px solid #2684ff;\n  }\n\n  &::placeholder {\n    color: var(--black);\n    font-family: Manrope;\n    font-size: 14px;\n    font-weight: 500;\n  }\n\n  @media (min-width: 768px) {\n    width: 160px;\n    &::placeholder {\n      font-size: 18px;\n    }\n  }\n"]))),C.ZP.input(s||(s=(0,z.Z)(["\n  width: 120px;\n  height: 48px;\n  padding: 14px 41px 14px 24px;\n  border-radius: 0px 14px 14px 0px;\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n  background: #f7f7fb;\n  border: 1px solid transparent;\n  border-right: none;\n  font-weight: 500;\n  font-size: 18px;\n  outline: none;\n  color: var(--black);\n\n  &:hover,\n  &:focus {\n    border: 1px solid #2684ff;\n  }\n\n  &::placeholder {\n    color: var(--black);\n    font-family: Manrope;\n    font-size: 14px;\n    font-weight: 500;\n  }\n"]))),t(864)),L=t(184),W=function(){var n=(0,k.useState)({value:"all",label:"Category"}),e=(0,w.Z)(n,2),t=e[0],i=e[1],r=(0,k.useState)({value:"all",label:"By gender"}),o=(0,w.Z)(r,2),a=o[0],l=o[1],s=(0,k.useState)({value:"all",label:"By type"}),c=(0,w.Z)(s,2),p=c[0],d=c[1];return(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(S,{children:(0,L.jsx)(N,{onSubmit:function(n){n.preventDefault(),i({value:"all",label:"Category"}),l({value:"all",label:"By gender"}),d({value:"all",label:"By type"})},children:(0,L.jsxs)(B,{children:[(0,L.jsx)("label",{children:(0,L.jsx)(D.ZP,{id:"category",value:t,isSearchable:!0})}),(0,L.jsx)("label",{children:(0,L.jsx)(D.ZP,{id:"gender",value:a,isSearchable:!0})}),(0,L.jsx)("label",{children:(0,L.jsx)(D.ZP,{id:"type",value:p,isSearchable:!0})})]})})})})},G=t(3535),_=t(3271),F=C.ZP.ul(c||(c=(0,z.Z)(["\n  display: flex;\n  gap: 20px;\n  margin-bottom: 16px;\n"]))),M=C.ZP.li(p||(p=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n"]))),R=C.ZP.p(d||(d=(0,z.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.4;\n  letter-spacing: -0.2px;\n  color: ",";\n"])),_.r.fontSizes.xxxxs,_.r.fontWeight.medium,_.r.colors.mediumGrey),$=C.ZP.p(x||(x=(0,z.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.16667;\n  letter-spacing: -0.24px;\n  color: ",";\n"])),_.r.fontSizes.xxxs,_.r.fontWeight.medium,_.r.colors.black),q=function(n){var e=n.item,t=[{label:"Name",value:e.name},{label:"Birthday",value:e.birthday},{label:"Sex",value:e.sex},{label:"Species",value:e.species},{label:"Category",value:e.category}];return(0,L.jsx)(F,{children:t.map((function(n,e){return(0,L.jsxs)(M,{children:[(0,L.jsx)(R,{children:n.label}),(0,L.jsxs)($,{children:[" ",n.value]})]},e)}))})},E=C.ZP.li(g||(g=(0,z.Z)(["\n  width: 363px;\n  padding: 24px;\n  border-radius: 16px;\n  background-color: ",";\n  box-shadow: ",";\n"])),_.r.colors.white,_.r.boxShadow.card),I=C.ZP.div(u||(u=(0,z.Z)(["\n  width: 315px;\n  height: 178px;\n  border-radius: 16px;\n  overflow: hidden;\n  margin-bottom: 24px;\n"]))),T=C.ZP.img(h||(h=(0,z.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),U=C.ZP.h3(f||(f=(0,z.Z)(["\n  margin-bottom: 8px;\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.3333;\n  color: ",";\n"])),_.r.fontSizes.s,_.r.fontWeight.bold,_.r.colors.secondBlack),A=C.ZP.p(b||(b=(0,z.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: 1.28571;\n  letter-spacing: -0.28px;\n  color: ",";\n  margin-bottom: 32px;\n"])),_.r.fontSizes.xxs,_.r.fontWeight.medium,_.r.colors.secondBlack),H=C.ZP.div(m||(m=(0,z.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),J=C.ZP.button(v||(v=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background: ",";\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  /* padding: 0; */\n"])),_.r.colors.beige),K=(C.ZP.svg(Z||(Z=(0,z.Z)(["\n  width: 18px;\n  height: 18px;\n  fill: transparent;\n  transition: transform ",";\n\n  &:hover {\n    transform: scale(1.05);\n  }\n"])),_.r.transition),C.ZP.svg(j||(j=(0,z.Z)(["\n  width: 18px;\n  height: 18px;\n  fill: ",";\n"])),_.r.colors.accent)),O=t(7609),Q=function(n){n.teacher;return(0,L.jsx)(J,{type:"button",children:(0,L.jsx)(K,{children:(0,L.jsx)("use",{href:O.Z+"#icon-heart"})})})},V=function(n){var e=n.item,t=e.title,i=e.imgURL,r=e.comment;return(0,L.jsxs)(E,{children:[(0,L.jsx)(I,{children:(0,L.jsx)(T,{src:i,alt:t})}),(0,L.jsx)(U,{children:t}),(0,L.jsx)(q,{item:e}),(0,L.jsx)(A,{children:r}),(0,L.jsxs)(H,{children:[(0,L.jsx)(G.z,{width:"257px",text:"Learn more",type:"button"}),(0,L.jsx)(Q,{})]})]})},X=C.ZP.ul(y||(y=(0,z.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px 32px;\n  margin-bottom: 60px;\n"]))),Y=function(n){var e=n.notices;return(0,L.jsx)(X,{children:null===e||void 0===e?void 0:e.map((function(n){return(0,L.jsx)(V,{item:n},n._id)}))})},nn=t(2424),en=t(1523),tn=t(2099),rn=t(4420),on=function(n){return n.notices.noticesData},an=function(n){return n.notices.totalPages},ln=t(398),sn=t(9307),cn=function(){var n=(0,k.useState)(1),e=(0,w.Z)(n,2),t=e[0],i=e[1],r=(0,rn.I0)(),o=(0,rn.v9)(on),a=(0,rn.v9)(an);return(0,k.useEffect)((function(){r((0,ln.D)(t))}),[r,t]),(0,L.jsx)(tn.$,{children:(0,L.jsxs)(P.W,{children:[(0,L.jsx)(tn.s,{children:(0,L.jsx)(en.D,{name:"Find your favorite pet"})}),(0,L.jsx)(W,{}),(0,L.jsx)(Y,{notices:o}),(0,L.jsx)(nn.t,{totalPages:a,onPageChange:function(n){i(n.selected+1),(0,sn.u)()}})]})})}},2099:function(n,e,t){t.d(e,{$:function(){return l},s:function(){return s}});var i,r,o=t(168),a=t(7924),l=a.ZP.section(i||(i=(0,o.Z)(["\n  margin: 0 auto;\n  padding-top: 64px;\n  padding-bottom: 80px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),s=a.ZP.div(r||(r=(0,o.Z)(["\n  margin-bottom: 40px;\n"])))},9307:function(n,e,t){function i(){window.scrollTo({top:0,behavior:"smooth"})}t.d(e,{u:function(){return i}})}}]);
//# sourceMappingURL=738.8a75d220.chunk.js.map