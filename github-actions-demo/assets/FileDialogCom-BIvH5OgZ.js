import{r as n,ag as y,o as D,c as N,f as l,w as i}from"./index-BtiZJA6V.js";import{E as w}from"./el-dialog-C6nSDiPf.js";import"./BaseTableCom-DPhfIgH9.js";import{a as L,E as x}from"./el-form-item-DnEKQG3Y.js";import{E as C}from"./el-input-DQWJxFHl.js";import{E as R}from"./el-button-BkswBdMW.js";import{E as _}from"./http-uaPK1vfr.js";import"./index-D8AN6Cr_.js";import"./el-switch-Ch1tqv_s.js";import"./event-NTjbwY5A.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_initCloneObject-C3mgaNU_.js";import"./isEqual-QJ1JA930.js";import"./_baseClone-dr7Cctac.js";const B={class:"file-dialog"},P={__name:"FileDialogCom",props:{currentRow:{type:Object},fileDialogVisible:{type:Boolean}},emits:["update:fileDialogVisible"],setup(g,{emit:v}){const m=n(null),s=n(null),o=n({fileName:"",fileLink:""}),p=g,V=v,u=y({get:()=>p.fileDialogVisible,set:t=>V("update:fileDialogVisible",t)}),k=()=>{const{fileLink:t,fileName:e}=p.currentRow;o.value.fileName=e,o.value.fileLink=t},r=(t,e)=>{t.select(),navigator.clipboard.writeText(e).then(function(){_({type:"success",message:"复制成功"})},function(){_({type:"danger",message:"复制失败"})})};return(t,e)=>{const f=R,d=C,c=L,E=x,b=w;return D(),N("div",B,[l(b,{modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=a=>u.value=a),title:"文件信息",width:"500",onOpen:k},{default:i(()=>[l(E,{"label-width":"100px",model:o.value,style:{"max-width":"460px"}},{default:i(()=>[l(c,{label:"文件名称"},{default:i(()=>[l(d,{modelValue:o.value.fileName,"onUpdate:modelValue":e[1]||(e[1]=a=>o.value.fileName=a),ref_key:"inputNameRef",ref:s},{append:i(()=>[l(f,{icon:"DocumentCopy",onClick:e[0]||(e[0]=()=>{r(s.value,o.value.fileName)})})]),_:1},8,["modelValue"])]),_:1}),l(c,{label:"文件链接"},{default:i(()=>[l(d,{modelValue:o.value.fileLink,"onUpdate:modelValue":e[3]||(e[3]=a=>o.value.fileLink=a),ref_key:"inputLinkRef",ref:m},{append:i(()=>[l(f,{icon:"DocumentCopy",onClick:e[2]||(e[2]=()=>{r(m.value,o.value.fileLink)})})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}}};export{P as default};