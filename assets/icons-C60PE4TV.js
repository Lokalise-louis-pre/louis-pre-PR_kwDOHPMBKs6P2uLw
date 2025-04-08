import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as l}from"./index-s_7BDCjm.js";import{M as d,C as h,I as c,a as o}from"./index-VpV979pp.js";import{i as t}from"./iconsStoryArray-Bj9_z8t8.js";import{s as p}from"./icons.stories-eIIEvtGP.js";import"./index-yBjzXJbu.js";import"./index-DubqEmGm.js";import"./iframe-CFSyDrE-.js";import"./index-CD8QLViS.js";import"./index-CJ88nXQk.js";import"./index-CFeRKNTJ.js";import"./index-DrFu-skq.js";import"./SvgIcon-APGatIbJ.js";import"./clsx-B-dksMZM.js";import"./Sparkle-s9ozeDuG.js";import"./CaretRight-COmzj0PB.js";import"./Search-CfhKQ7qw.js";import"./Clipboard-bQX2iwzL.js";import"./Close-FGPrTY3A.js";import"./Dropdown-COQUELEN.js";import"./Error-li26Yj3Y.js";import"./MenuHamburger-Bitq72my.js";import"./Info-C8x1KHs8.js";import"./index-Cljcv3Ef.js";import"./Selected-DhZoXuAk.js";import"./Warning-DUKJc5Ha.js";function a(r){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(d,{title:"Components/Icons",of:p}),`
`,e.jsx(i.h1,{id:"icons",children:"Icons"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#figma-design-file",children:"Figma Design File"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#props",children:"Props"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#icon-set",children:"Icon Set"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#deprecated-icons",children:"Deprecated Icons"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#accessibility",children:"Accessibility"})}),`
`]}),`
`,e.jsx(i.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(i.p,{children:"Icons are used to visually indicate core parts of the app and available actions. They can be purely decorative, or they can be used to convey meaning (e.g. as part of interactive controls)."}),`
`,e.jsx(i.h3,{id:"installation",children:"Installation"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`npm install @lokalise/louis
`})}),`
`,e.jsx(i.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { SearchIcon } from '@lokalise/louis';

export default () => <SearchIcon />;
`})}),`
`,e.jsx(i.h2,{id:"figma-design-file",children:"Figma Design File"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://www.figma.com/file/998GqUr24TjUPJBVKBTpEX/Foundations?node-id=444%3A3246",rel:"nofollow",children:"Figma Source File | Icons"})}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsx(h,{}),`
`,e.jsx(i.h2,{id:"icon-set",children:"Icon Set"}),`
`,e.jsxs(i.p,{children:["All icons are suffixed with ",e.jsx(i.code,{children:"Icon"})," and can be imported as e.g. ",e.jsx(i.code,{children:"SearchIcon"}),"."]}),`
`,e.jsx(c,{children:t.filter(([n])=>!n.startsWith("Deprecated")).map(([n,s])=>e.jsx(o,{name:n.replace(/(.*)Icon/i,"$1"),children:e.jsx(s,{})}))}),`
`,e.jsx(i.h2,{id:"deprecated-icons",children:"Deprecated Icons"}),`
`,e.jsxs(i.p,{children:["All deprecated icons are prefixed with ",e.jsx(i.code,{children:"Deprecated"})," and can be imported as e.g. ",e.jsx(i.code,{children:"DeprecatedSearchIcon"}),`.
Deprecated icons should not be used in new features, they are included here for backwards compatibility.`]}),`
`,e.jsx(c,{children:t.filter(([n])=>n.startsWith("Deprecated")).map(([n,s])=>e.jsx(o,{name:n.replace(/Deprecated(.*)Icon/i,"$1"),children:e.jsx(s,{})}))}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.p,{children:["The optional ",e.jsx(i.code,{children:"ariaLabel"})," prop can be used when the icon is used in a meaningful context (instead of purely decorative)."]})]})}function N(r={}){const{wrapper:i}={...l(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(a,{...r})}):a(r)}export{N as default};
