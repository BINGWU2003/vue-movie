import{r as d,L as k,o as y,c as S,f as t,w as o,e as p,d as i,B as U,p as B,b as I}from"./index-BtiZJA6V.js";import{E as h}from"./el-dialog-C6nSDiPf.js";import"./BaseTableCom-DPhfIgH9.js";import{a as w}from"./tencentCloud-DYilJfO5.js";import{E as b}from"./el-button-BkswBdMW.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{E as N}from"./index-D8AN6Cr_.js";const $=a=>(B("data-v-8911a984"),a=a(),I(),a),R={class:"export-file"},z=$(()=>i("div",{class:"el-upload__text"},[p("将文件拖到此处或 "),i("em",null,"点击上传")],-1)),L={class:"tip"},T={__name:"UploadFileCom",props:{accept:{type:String}},emits:["handleConfirm"],setup(a,{expose:u,emit:m}){const s=d([]),l=d(!1),c=d(null),f=m,_=()=>s.value,v=a;return u({getSelectFiles:_,offDialog:()=>{l.value=!l.value},clearFiles:()=>{s.value=[],c.value.clearFiles()}}),(g,e)=>{const r=b,C=k("upload-filled"),E=N,x=w,F=h;return y(),S("div",R,[t(r,{type:"primary",icon:"Upload",onClick:e[0]||(e[0]=n=>l.value=!0)},{default:o(()=>[p(" 上传文件 ")]),_:1}),t(F,{modelValue:l.value,"onUpdate:modelValue":e[3]||(e[3]=n=>l.value=n),title:"上传文件",width:"30%"},{footer:o(()=>[i("span",null,[t(r,{onClick:e[1]||(e[1]=n=>l.value=!1)},{default:o(()=>[p("取消")]),_:1}),t(r,{type:"primary",onClick:e[2]||(e[2]=()=>{f("handleConfirm",s.value)})},{default:o(()=>[p(" 确认 ")]),_:1})])]),default:o(()=>[t(x,{ref_key:"uploadRef",ref:c,"auto-upload":!1,"on-change":(n,V)=>{s.value=V},drag:"",accept:v.accept},{tip:o(()=>[i("div",L,[U(g.$slots,"tip",{},void 0,!0)])]),default:o(()=>[t(E,{size:"30"},{default:o(()=>[t(C)]),_:1}),z]),_:3},8,["on-change","accept"])]),_:3},8,["modelValue"])])}}},P=D(T,[["__scopeId","data-v-8911a984"]]);export{P as U};