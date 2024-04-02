"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4397],{6893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var a=n(85893),r=n(11151),s=(n(74866),n(85162),n(77229));const c={id:"factory",title:"Factory"},o=void 0,i={id:"tutorials/examples/factory",title:"Factory",description:"A factory is a smart contract that stores a compiled contract on itself, and automatizes deploying it into",source:"@site/../docs/3.tutorials/examples/factory.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/factory",permalink:"/tutorials/examples/factory",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/factory.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1712089238,formattedLastUpdatedAt:"Apr 2, 2024",frontMatter:{id:"factory",title:"Factory"},sidebar:"tutorials",previous:{title:"Coin Flip",permalink:"/tutorials/examples/coin-flip"},next:{title:"Complex Cross Contract Call",permalink:"/tutorials/examples/advanced-xcc"}},l={},u=[{value:"Generic Factory",id:"generic-factory",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Build and Deploy the Factory",id:"build-and-deploy-the-factory",level:3},{value:"Deploy the Stored Contract Into a Sub-Account",id:"deploy-the-stored-contract-into-a-sub-account",level:3},{value:"Update the Stored Contract",id:"update-the-stored-contract",level:3},{value:"Factories - Concepts &amp; Limitations",id:"factories---concepts--limitations",level:2},{value:"Automatically Creating Accounts",id:"automatically-creating-accounts",level:3},{value:"The Update Method",id:"the-update-method",level:3}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"A factory is a smart contract that stores a compiled contract on itself, and automatizes deploying it into\nsub-accounts."}),"\n",(0,a.jsx)(t.p,{children:"We have two factory examples:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/near-examples/token-factory",children:(0,a.jsx)(t.strong,{children:"Token Factory"})}),": A factory that creates ",(0,a.jsx)(t.a,{href:"/tutorials/fts/introduction",children:"fungible tokens"})," contracts."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/near-examples/factory-rust",children:(0,a.jsx)(t.strong,{children:"A Generic Factory"})}),": A factory that creates ",(0,a.jsx)(t.a,{href:"/tutorials/examples/donation",children:"donation contracts"}),", but allows to change the contract it deploys."]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"In this page we will focus on the Donation factory, to learn more about the token factory visit its repository."})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"generic-factory",children:"Generic Factory"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/factory-rust/",children:"Generic Factory"})," presents a contract factory that:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Creates sub-accounts of itself and deploys its contract on them (",(0,a.jsx)(t.code,{children:"create_factory_subaccount_and_deploy"}),")."]}),"\n",(0,a.jsxs)(t.li,{children:["Can change the stored contract using the ",(0,a.jsx)(t.code,{children:"update_stored_contract"})," method."]}),"\n"]}),"\n",(0,a.jsx)(s.O2,{children:(0,a.jsxs)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,a.jsx)(s.Ey,{fname:"deploy.rs",url:"https://github.com/near-examples/factory-rust/blob/main/src/deploy.rs",start:"14",end:"60"}),(0,a.jsx)(s.Ey,{fname:"manager.rs",url:"https://github.com/near-examples/factory-rust/blob/main/src/manager.rs",start:"5",end:"19"})]})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Make sure you have installed ",(0,a.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"rust"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Install the ",(0,a.jsx)(t.a,{href:"https://github.com/near/near-cli#setup",children:(0,a.jsx)(t.code,{children:"NEAR CLI"})})]}),"\n"]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"build-and-deploy-the-factory",children:"Build and Deploy the Factory"}),"\n",(0,a.jsx)(t.p,{children:"You can automatically compile and deploy the contract in the NEAR testnet by running:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"./deploy.sh\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Once finished, check the ",(0,a.jsx)(t.code,{children:"neardev/dev-account"})," file to find the address in which the contract was deployed:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cat ./neardev/dev-account\n# e.g. dev-1659899566943-21539992274727\n"})}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"deploy-the-stored-contract-into-a-sub-account",children:"Deploy the Stored Contract Into a Sub-Account"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"create_factory_subaccount_and_deploy"})," will create a sub-account of the factory and deploy the\nstored contract on it."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'near call <factory-account> create_factory_subaccount_and_deploy \'{ "name": "sub", "beneficiary": "<account-to-be-beneficiary>"}\' --deposit 1.24 --accountId <account-id> --gas 300000000000000\n'})}),"\n",(0,a.jsxs)(t.p,{children:["This will create the ",(0,a.jsx)(t.code,{children:"sub.<factory-account>"}),", which will have a ",(0,a.jsx)(t.code,{children:"donation"})," contract deployed on it:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near view sub.<factory-account> get_beneficiary\n# expected response is: <account-to-be-beneficiary>\n"})}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"update-the-stored-contract",children:"Update the Stored Contract"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"update_stored_contract"})," enables to change the compiled contract that the factory stores."]}),"\n",(0,a.jsx)(t.p,{children:"The method is interesting because it has no declared parameters, and yet it takes\nan input: the new contract to store as a stream of bytes."}),"\n",(0,a.jsxs)(t.p,{children:["To use it, we need to transform the contract we want to store into its ",(0,a.jsx)(t.code,{children:"base64"}),"\nrepresentation, and pass the result as input to the method:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'# Use near-cli to update stored contract\nexport BYTES=`cat ./src/to/new-contract/contract.wasm | base64`\nnear call <factory-account> update_stored_contract "$BYTES" --base64 --accountId <factory-account> --gas 30000000000000\n'})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["This works because the arguments of a call can be either a ",(0,a.jsx)(t.code,{children:"JSON"})," object or a ",(0,a.jsx)(t.code,{children:"String Buffer"})]}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"factories---concepts--limitations",children:"Factories - Concepts & Limitations"}),"\n",(0,a.jsx)(t.p,{children:"Factories are an interesting concept, here we further explain some of their implementation aspects,\nas well as their limitations."}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"automatically-creating-accounts",children:"Automatically Creating Accounts"}),"\n",(0,a.jsxs)(t.p,{children:["NEAR accounts can only create sub-accounts of itself, therefore, the ",(0,a.jsx)(t.code,{children:"factory"})," can only create and\ndeploy contracts on its own sub-accounts."]}),"\n",(0,a.jsx)(t.p,{children:"This means that the factory:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Can"})," create ",(0,a.jsx)(t.code,{children:"sub.factory.testnet"})," and deploy a contract on it."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Cannot"})," create sub-accounts of the ",(0,a.jsx)(t.code,{children:"predecessor"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Can"})," create new accounts (e.g. ",(0,a.jsx)(t.code,{children:"account.testnet"}),"), but ",(0,a.jsx)(t.strong,{children:"cannot"})," deploy contracts on them."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["It is important to remember that, while ",(0,a.jsx)(t.code,{children:"factory.testnet"})," can create ",(0,a.jsx)(t.code,{children:"sub.factory.testnet"}),", it has\nno control over it after its creation."]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"the-update-method",children:"The Update Method"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"update_stored_contracts"})," has a very short implementation:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'#[private]\npub fn update_stored_contract(&mut self) {\n  self.code = env::input().expect("Error: No input").to_vec();\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["On first sight it looks like the method takes no input parameters, but we can see that its only\nline of code reads from ",(0,a.jsx)(t.code,{children:"env::input()"}),". What is happening here is that ",(0,a.jsx)(t.code,{children:"update_stored_contract"}),"\n",(0,a.jsx)(t.strong,{children:"bypasses"})," the step of ",(0,a.jsx)(t.strong,{children:"deserializing the input"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["You could implement ",(0,a.jsx)(t.code,{children:"update_stored_contract(&mut self, new_code: Vec<u8>)"}),",\nwhich takes the compiled code to store as a ",(0,a.jsx)(t.code,{children:"Vec<u8>"}),", but that would trigger the contract to:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Deserialize the ",(0,a.jsx)(t.code,{children:"new_code"})," variable from the input."]}),"\n",(0,a.jsx)(t.li,{children:"Sanitize it, making sure it is correctly built."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["When dealing with big streams of input data (as is the compiled ",(0,a.jsx)(t.code,{children:"wasm"})," file to be stored), this process\nof deserializing/checking the input ends up ",(0,a.jsx)(t.strong,{children:"consuming the whole GAS"})," for the transaction."]}),"\n",(0,a.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,a.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["near-cli: ",(0,a.jsx)(t.code,{children:"4.0.13"})]}),"\n",(0,a.jsxs)(t.li,{children:["node: ",(0,a.jsx)(t.code,{children:"18.19.1"})]}),"\n",(0,a.jsxs)(t.li,{children:["rustc: ",(0,a.jsx)(t.code,{children:"1.77.0"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var s=n(85893);function c(e){var t=e.children,n=e.hidden,c=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,c),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),s=n(12466),c=n(16550),o=n(20469),i=n(91980),l=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,s=(0,c.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(s.location.search);t.set(o,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[o,s])]}function m(e){var t,n,r,s,c=e.defaultValue,i=e.queryString,l=void 0!==i&&i,d=e.groupId,m=h(e),x=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:c,tabValues:m})})),b=x[0],j=x[1],y=f({queryString:l,groupId:d}),g=y[0],v=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),r=n[0],s=n[1],[r,(0,a.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=w[0],_=w[1],N=function(){var e=null!=g?g:k;return p({value:e,tabValues:m})?e:null}();return(0,o.Z)((function(){N&&j(N)}),[N]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);j(e),v(e),_(e)}),[v,_,m]),tabValues:m}}var x=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function y(e){var t=e.className,n=e.block,a=e.selectedValue,c=e.selectValue,o=e.tabValues,i=[],l=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=i.indexOf(t),r=o[n].value;r!==a&&(l(t),c(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=i.indexOf(e.currentTarget)+1;n=null!=(a=i[r])?a:i[0];break;case"ArrowLeft":var s,c=i.indexOf(e.currentTarget)-1;n=null!=(s=i[c])?s:i[i.length-1]}null==(t=n)||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return i.push(e)},onKeyDown:d,onClick:u},s,{className:(0,r.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function g(e){var t=e.lazy,n=e.children,r=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var c=s.find((function(e){return e.props.value===r}));return c?(0,a.cloneElement)(c,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function v(e){var t=m(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(y,Object.assign({},e,t)),(0,j.jsx)(g,Object.assign({},e,t))]})}function w(e){var t=(0,x.Z)();return(0,j.jsx)(v,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>u,O2:()=>i,SQ:()=>l});n(67294);var a=n(74866),r=n(85162),s=n(95665),c=n.n(s),o=n(85893);function i(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,o.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,o.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function l(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,s=n.end,c=n.fname;if(e.type===u)return u({url:a,start:r,end:s,language:t,fname:c});return e}(e,n)})),1==t.length?(0,o.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,o.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,o.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))})}function u(e){var t=e.url,n=e.start,a=e.end,r=e.language,s=e.fname,i=t+"#";return n&&a&&(i+="L"+n+"-L"+a+"#"),(0,o.jsx)(c(),{language:r,fname:s,children:i})}}}]);