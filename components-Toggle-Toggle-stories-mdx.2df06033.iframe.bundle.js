"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[9062],{"./node_modules/@lokalise/styled/dist/tokens/modifier.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>f});const f=(i,e)=>t=>("function"==typeof i?i(t):t[i])?e:void 0},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultComponents,r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.$4,E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.E$,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.UG,VZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.VZ,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,c6:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.c6,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Toggle/Toggle.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>Toggle_stories,toggle:()=>toggle});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),modifier=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),theme=__webpack_require__("./src/utils/theme/index.ts");const ToggleLabel=styled_components_browser_esm.ZP.label.withConfig({displayName:"Toggle__ToggleLabel",componentId:"sc-18bq1wh-0"})(["all:initial;cursor:pointer;font-family:",";display:inline-grid;grid-template-columns:1fr 1fr;border-radius:",";border:1px solid ",";position:relative;user-select:none;overflow:hidden;font-size:10px;line-height:14px;text-transform:uppercase;min-width:max-content;"],(0,theme.I8)("default"),(0,theme.q0)("md"),(0,theme.$_)("border.secondary")),ToggleInput=styled_components_browser_esm.ZP.input.withConfig({displayName:"Toggle__ToggleInput",componentId:"sc-18bq1wh-1"})(["input&{all:initial;position:absolute !important;margin:none;line-height:initial;border:none;clip:rect(0px,0px,0px,0px);height:1px;width:1px;margin:-1px;padding:0px;overflow:hidden;white-space:nowrap;}"]),ToggleHandle=styled_components_browser_esm.ZP.span.withConfig({displayName:"Toggle__ToggleHandle",componentId:"sc-18bq1wh-2"})(["padding:",";text-align:center;color:",";background-color:",";"," ","[disabled] ~ &{cursor:not-allowed;}"],(0,theme.W0)(1),(0,theme.$_)("neutral1"),(0,theme.$_)("border.secondary"),(0,modifier.c)("highlighted",styled_components_browser_esm.iv`
			color: ${(0,theme.$_)("content.white")};
			background-color: ${(0,theme.$_)("primary.500")};
		`),ToggleInput),ToggleMask=styled_components_browser_esm.ZP.span.withConfig({displayName:"Toggle__ToggleMask",componentId:"sc-18bq1wh-3"})(["width:50%;position:absolute;top:0;bottom:0;left:0;background-color:",";transition:transform 0.05s ease-in;",'[aria-checked="true"] ~ &{transform:translateX(100%);}',"[disabled] ~ &{cursor:not-allowed;}"],(0,theme.$_)("background.primary"),ToggleInput,ToggleInput);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Toggle=_ref=>{let{className,...props}=_ref;const{checked,defaultChecked}=props;return(0,jsx_runtime.jsxs)(ToggleLabel,{className,children:[(0,jsx_runtime.jsx)(ToggleInput,{type:"checkbox",role:"switch","aria-checked":Boolean(checked)||Boolean(defaultChecked),...props}),(0,jsx_runtime.jsx)(ToggleHandle,{highlighted:!0,"aria-hidden":"true",children:"On"}),(0,jsx_runtime.jsx)(ToggleHandle,{"aria-hidden":"true",children:"Off"}),(0,jsx_runtime.jsx)(ToggleMask,{"aria-hidden":"true"})]})};Toggle.displayName="Toggle";try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",displayName:"Toggle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toggle/Toggle.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"src/components/Toggle/Toggle.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}var external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api");const Template=args=>{const[_,updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)();return(0,jsx_runtime.jsx)(Toggle,{...args,onChange:e=>updateArgs({checked:e.target.checked})})};const toggle=Template.bind({});toggle.storyName="Toggle",toggle.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  return <Toggle {...args} onChange={e => updateArgs({\n    checked: e.target.checked\n  })} />;\n}"}};const componentMeta={title:"Components/Forms/Toggle",parameters:{controls:{sort:"requiredFirst"}},component:Toggle,argTypes:{checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}},tags:["stories-mdx"],includeStories:["toggle"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",h3:"h3",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Forms/Toggle",component:Toggle,parameters:{controls:{sort:"requiredFirst"}},argTypes:{checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"toggle",children:"Toggle"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Toggle allows users to turn an individual option on or off. Changing a toggle should take immediate effect and should not require the user to click Save or Submit to apply the new state."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Toggle } from '@lokalise/louis';\n\nexport default () => {\n\tconst [checked, setChecked] = useState(false);\n\treturn <Toggle checked={checked} onChange={(e) => setChecked(e.currentTarget.checked)} />;\n};\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=11056%3A30188&t=r39e6HnjBbidt5cB-0",target:"_blank",children:(0,jsx_runtime.jsx)(_components.p,{children:"Figma Source File | Toggle"})}),"\n"]}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Toggle",children:Template.bind({})})})]})}}};const Toggle_stories=componentMeta}}]);
//# sourceMappingURL=components-Toggle-Toggle-stories-mdx.2df06033.iframe.bundle.js.map