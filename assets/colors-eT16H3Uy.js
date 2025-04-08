import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as a}from"./index-s_7BDCjm.js";import"./index-ByNTgf3y.js";import{t as d}from"./theme-lokalise-light-CwWDDxsK.js";import{r as h}from"./index-DubqEmGm.js";import{T as m}from"./ThemeSwitcher-VbSkx6ji.js";import{g as p}from"./tokenValues-BQyP9yJ8.js";import{C as i}from"./Code-D0Z8rSGZ.js";import{M as x,U as j}from"./index-VpV979pp.js";import"./index-yBjzXJbu.js";import"./preview-Dn8uI8A7.js";import"./iframe-CFSyDrE-.js";import"./DocsRenderer-CFRXHY34-DvLjuGDd.js";import"./react-18-BfgGLNg9.js";import"./index-CJ88nXQk.js";import"./Label-DhsfTjoI.js";import"./clsx-B-dksMZM.js";import"./Flex-DxJ_lyQp.js";import"./IconButton-CW0ydAz1.js";import"./index-7zOkDzdb.js";import"./Tooltip-CkS6vPEG.js";import"./Popover-PUBVhWLT.js";import"./Portal-BD7l88-r.js";import"./index-CD8QLViS.js";import"./floating-ui.react-M7Gz8XYl.js";import"./useMergeRefs-CZnCAFkU.js";import"./index-Cljcv3Ef.js";import"./SvgIcon-APGatIbJ.js";import"./Clipboard-bQX2iwzL.js";import"./index-CFeRKNTJ.js";import"./index-DrFu-skq.js";const u="_headCell_djvaw_1",f="_bodyCell_djvaw_8",g="_sample_djvaw_12",r={headCell:u,bodyCell:f,sample:g},C=()=>{const[o,l]=h.useState("themeLokaliseLight"),c=p(d.color);return e.jsxs(e.Fragment,{children:[e.jsx(m,{onSelectTheme:l,selectedTheme:o}),e.jsxs("table",{style:{backgroundColor:"var(--lok-color-background-surface-default)"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:r.headCell,children:"Token"}),e.jsx("th",{className:r.headCell,children:"Value"}),e.jsx("th",{className:r.headCell,children:"Sample"})]})}),e.jsx("tbody",{children:c.map(({key:s,tokenValue:t})=>e.jsxs("tr",{children:[e.jsx("td",{className:r.bodyCell,children:e.jsxs(i,{children:["var(--lok-color-",s.replaceAll(".","-"),")"]})}),e.jsx("td",{className:r.bodyCell,children:e.jsx(i,{children:t})}),e.jsx("td",{className:r.bodyCell,children:e.jsx("div",{className:r.sample,style:{backgroundColor:t??"#FFF"}})})]},s))})]})]})};function n(o){const l={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Foundations/Colors"}),`
`,e.jsx(l.h1,{id:"colors",children:"Colors"}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#figma-design-file",children:"Figma Design File"})}),`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"#color-options",children:"Color Options"})}),`
`]}),`
`,e.jsx(l.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(l.p,{children:["Use the Theme Switcher to view the ",e.jsx(l.code,{children:"light"})," and ",e.jsx(l.code,{children:"dark"})," color palettes."]}),`
`,e.jsx(l.h3,{id:"installation",children:"Installation"}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-bash",children:`npm install @lokalise/louis
`})}),`
`,e.jsx(l.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-tsx",children:`const StyledParagraph = () => (
	<p
		style={{
			color: 'var(--lok-color-text-default)',
		}}
	></p>
);
`})}),`
`,e.jsx(l.h2,{id:"figma-design-file",children:"Figma Design File"}),`
`,e.jsxs(l.ul,{children:[`
`,e.jsx(l.li,{children:e.jsx(l.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=5398%3A21832",rel:"nofollow",children:"Figma Source File | Colors"})}),`
`]}),`
`,e.jsx(l.h2,{id:"color-options",children:"Color Options"}),`
`,e.jsx(j,{children:e.jsx(C,{})})]})}function W(o={}){const{wrapper:l}={...a(),...o.components};return l?e.jsx(l,{...o,children:e.jsx(n,{...o})}):n(o)}export{W as default};
