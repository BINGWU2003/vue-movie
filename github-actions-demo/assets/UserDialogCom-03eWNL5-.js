import{b0 as de,K as Ke,al as xe,ak as Se,s as ce,v as Z,af as Q,ay as ge,B as ke,at as X,r as x,b7 as Ae,n as I,aa as me,c3 as Te,L as z,k as ne,aM as oe,o as A,c as V,d as _,g as H,w as T,aq as Me,y as L,ao as P,h as G,f as w,ar as Ie,F as ue,A as he,ai as Ce,aS as Be,ac as Oe,aF as ve,j as Re,b4 as Le,az as $e,ag as be,t as Ve,e as ye}from"./index-BtiZJA6V.js";import{E as Pe}from"./el-dialog-C6nSDiPf.js";import{c as De,a as je,b as ze}from"./BaseTableCom-DPhfIgH9.js";import{h as Fe,E as qe}from"./el-button-BkswBdMW.js";import{a as Ue,E as He}from"./el-form-item-DnEKQG3Y.js";import{E as _e}from"./el-input-DQWJxFHl.js";import"./el-switch-Ch1tqv_s.js";import{c as We}from"./user-929Nb1Sz.js";import{E as Ye}from"./http-uaPK1vfr.js";import{_ as Ge}from"./index-DyB46qXU.js";import{_ as fe,r as re,b as Je,E as Qe,u as Xe,c as j,i as Ze}from"./index-D8AN6Cr_.js";import"./event-NTjbwY5A.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_initCloneObject-C3mgaNU_.js";import"./isEqual-QJ1JA930.js";import"./_baseClone-dr7Cctac.js";const W="$treeNodeId",Ne=function(t,e){!e||e[W]||Object.defineProperty(e,W,{value:t.id,enumerable:!1,configurable:!1,writable:!1})},pe=function(t,e){return t?e[t]:e[W]},ie=(t,e,o)=>{const a=t.value.currentNode;o();const n=t.value.currentNode;a!==n&&e("current-change",n?n.data:null,n)},le=t=>{let e=!0,o=!0,a=!0;for(let n=0,r=t.length;n<r;n++){const i=t[n];(i.checked!==!0||i.indeterminate)&&(e=!1,i.disabled||(a=!1)),(i.checked!==!1||i.indeterminate)&&(o=!1)}return{all:e,none:o,allWithoutDisable:a,half:!e&&!o}},J=function(t){if(t.childNodes.length===0||t.loading)return;const{all:e,none:o,half:a}=le(t.childNodes);e?(t.checked=!0,t.indeterminate=!1):a?(t.checked=!1,t.indeterminate=!0):o&&(t.checked=!1,t.indeterminate=!1);const n=t.parent;!n||n.level===0||t.store.checkStrictly||J(n)},ee=function(t,e){const o=t.store.props,a=t.data||{},n=o[e];if(typeof n=="function")return n(a,t);if(typeof n=="string")return a[n];if(typeof n>"u"){const r=a[e];return r===void 0?"":r}};let et=0;class F{constructor(e){this.id=et++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const o in e)de(e,o)&&(this[o]=e[o]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const o=e.props;if(o&&typeof o.isLeaf<"u"){const r=ee(this,"isLeaf");typeof r=="boolean"&&(this.isLeafByUser=r)}if(e.lazy!==!0&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||Ne(this,this.data),!this.data)return;const a=e.defaultExpandedKeys,n=e.key;n&&a&&a.includes(this.key)&&this.expand(null,e.autoExpandParent),n&&e.currentNodeKey!==void 0&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(e){Array.isArray(e)||Ne(this,e),this.data=e,this.childNodes=[];let o;this.level===0&&Array.isArray(this.data)?o=this.data:o=ee(this,"children")||[];for(let a=0,n=o.length;a<n;a++)this.insertChild({data:o[a]})}get label(){return ee(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return ee(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const o=e.childNodes.indexOf(this);if(o>-1)return e.childNodes[o+1]}return null}get previousSibling(){const e=this.parent;if(e){const o=e.childNodes.indexOf(this);if(o>-1)return o>0?e.childNodes[o-1]:null}return null}contains(e,o=!0){return(this.childNodes||[]).some(a=>a===e||o&&a.contains(e))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,o,a){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof F)){if(!a){const n=this.getChildren(!0);n.includes(e.data)||(typeof o>"u"||o<0?n.push(e.data):n.splice(o,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=Ke(new F(e)),e instanceof F&&e.initialize()}e.level=this.level+1,typeof o>"u"||o<0?this.childNodes.push(e):this.childNodes.splice(o,0,e),this.updateLeafState()}insertBefore(e,o){let a;o&&(a=this.childNodes.indexOf(o)),this.insertChild(e,a)}insertAfter(e,o){let a;o&&(a=this.childNodes.indexOf(o),a!==-1&&(a+=1)),this.insertChild(e,a)}removeChild(e){const o=this.getChildren()||[],a=o.indexOf(e.data);a>-1&&o.splice(a,1);const n=this.childNodes.indexOf(e);n>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(n,1)),this.updateLeafState()}removeChildByData(e){let o=null;for(let a=0;a<this.childNodes.length;a++)if(this.childNodes[a].data===e){o=this.childNodes[a];break}o&&this.removeChild(o)}expand(e,o){const a=()=>{if(o){let n=this.parent;for(;n.level>0;)n.expanded=!0,n=n.parent}this.expanded=!0,e&&e(),this.childNodes.forEach(n=>{n.canFocus=!0})};this.shouldLoadData()?this.loadData(n=>{Array.isArray(n)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||J(this),a())}):a()}doCreateChildren(e,o={}){e.forEach(a=>{this.insertChild(Object.assign({data:a},o),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(e=>{e.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const e=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!e||e.length===0;return}this.isLeaf=!1}setChecked(e,o,a,n){if(this.indeterminate=e==="half",this.checked=e===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:i,allWithoutDisable:l}=le(this.childNodes);!this.isLeaf&&!i&&l&&(this.checked=!1,e=!1);const p=()=>{if(o){const k=this.childNodes;for(let d=0,v=k.length;d<v;d++){const g=k[d];n=n||e!==!1;const C=g.disabled?g.checked:n;g.setChecked(C,o,!0,n)}const{half:h,all:u}=le(k);u||(this.checked=u,this.indeterminate=h)}};if(this.shouldLoadData()){this.loadData(()=>{p(),J(this)},{checked:e!==!1});return}else p()}const r=this.parent;!r||r.level===0||a||J(r)}getChildren(e=!1){if(this.level===0)return this.data;const o=this.data;if(!o)return null;const a=this.store.props;let n="children";return a&&(n=a.children||"children"),o[n]===void 0&&(o[n]=null),e&&!o[n]&&(o[n]=[]),o[n]}updateChildren(){const e=this.getChildren()||[],o=this.childNodes.map(r=>r.data),a={},n=[];e.forEach((r,i)=>{const l=r[W];!!l&&o.findIndex(k=>k[W]===l)>=0?a[l]={index:i,data:r}:n.push({index:i,data:r})}),this.store.lazy||o.forEach(r=>{a[r[W]]||this.removeChildByData(r)}),n.forEach(({index:r,data:i})=>{this.insertChild({data:i},r)}),this.updateLeafState()}loadData(e,o={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(o).length)){this.loading=!0;const a=r=>{this.childNodes=[],this.doCreateChildren(r,o),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,r)},n=()=>{this.loading=!1};this.store.load(this,a,n)}else e&&e.call(this)}eachNode(e){const o=[this];for(;o.length;){const a=o.shift();o.unshift(...a.childNodes),e(a)}}reInitChecked(){this.store.checkStrictly||J(this)}}class tt{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const o in e)de(e,o)&&(this[o]=e[o]);this.nodesMap={}}initialize(){if(this.root=new F({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,o=>{this.root.doCreateChildren(o),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const o=this.filterNodeMethod,a=this.lazy,n=function(r){const i=r.root?r.root.childNodes:r.childNodes;if(i.forEach(l=>{l.visible=o.call(l,e,l.data,l),n(l)}),!r.visible&&i.length){let l=!0;l=!i.some(p=>p.visible),r.root?r.root.visible=l===!1:r.visible=l===!1}e&&r.visible&&!r.isLeaf&&(!a||r.loaded)&&r.expand()};n(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof F)return e;const o=xe(e)?pe(this.key,e):e;return this.nodesMap[o]||null}insertBefore(e,o){const a=this.getNode(o);a.parent.insertBefore({data:e},a)}insertAfter(e,o){const a=this.getNode(o);a.parent.insertAfter({data:e},a)}remove(e){const o=this.getNode(e);o&&o.parent&&(o===this.currentNode&&(this.currentNode=null),o.parent.removeChild(o))}append(e,o){const a=Se(o)?this.root:this.getNode(o);a&&a.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],o=this.nodesMap;e.forEach(a=>{const n=o[a];n&&n.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const o=this.key;!e||!e.data||(o?e.key!==void 0&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}deregisterNode(e){!this.key||!e||!e.data||(e.childNodes.forEach(a=>{this.deregisterNode(a)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,o=!1){const a=[],n=function(r){(r.root?r.root.childNodes:r.childNodes).forEach(l=>{(l.checked||o&&l.indeterminate)&&(!e||e&&l.isLeaf)&&a.push(l.data),n(l)})};return n(this),a}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map(o=>(o||{})[this.key])}getHalfCheckedNodes(){const e=[],o=function(a){(a.root?a.root.childNodes:a.childNodes).forEach(r=>{r.indeterminate&&e.push(r.data),o(r)})};return o(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],o=this.nodesMap;for(const a in o)de(o,a)&&e.push(o[a]);return e}updateChildren(e,o){const a=this.nodesMap[e];if(!a)return;const n=a.childNodes;for(let r=n.length-1;r>=0;r--){const i=n[r];this.remove(i.data)}for(let r=0,i=o.length;r<i;r++){const l=o[r];this.append(l,a.data)}}_setCheckedKeys(e,o=!1,a){const n=this._getAllNodes().sort((p,k)=>p.level-k.level),r=Object.create(null),i=Object.keys(a);n.forEach(p=>p.setChecked(!1,!1));const l=p=>{p.childNodes.forEach(k=>{var h;r[k.data[e]]=!0,(h=k.childNodes)!=null&&h.length&&l(k)})};for(let p=0,k=n.length;p<k;p++){const h=n[p],u=h.data[e].toString();if(!i.includes(u)){h.checked&&!r[u]&&h.setChecked(!1,!1);continue}if(h.childNodes.length&&l(h),h.isLeaf||this.checkStrictly){h.setChecked(!0,!1);continue}if(h.setChecked(!0,!0),o){h.setChecked(!1,!1);const v=function(g){g.childNodes.forEach(b=>{b.isLeaf||b.setChecked(!1,!1),v(b)})};v(h)}}}setCheckedNodes(e,o=!1){const a=this.key,n={};e.forEach(r=>{n[(r||{})[a]]=!0}),this._setCheckedKeys(a,o,n)}setCheckedKeys(e,o=!1){this.defaultCheckedKeys=e;const a=this.key,n={};e.forEach(r=>{n[r]=!0}),this._setCheckedKeys(a,o,n)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(o=>{const a=this.getNode(o);a&&a.expand(null,this.autoExpandParent)})}setChecked(e,o,a){const n=this.getNode(e);n&&n.setChecked(!!o,a)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const o=this.currentNode;o&&(o.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,o=!0){const a=e[this.key],n=this.nodesMap[a];this.setCurrentNode(n),o&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,o=!0){if(e==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const a=this.getNode(e);a&&(this.setCurrentNode(a),o&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const nt=ce({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(t){const e=Z("tree"),o=Q("NodeInstance"),a=Q("RootTree");return()=>{const n=t.node,{data:r,store:i}=n;return t.renderContent?t.renderContent(ge,{_self:o,node:n,data:r,store:i}):ke(a.ctx.slots,"default",{node:n,data:r},()=>[ge("span",{class:e.be("node","label")},[n.label])])}}});var ot=fe(nt,[["__file","tree-node-content.vue"]]);function Ee(t){const e=Q("TreeNodeMap",null),o={treeNodeExpand:a=>{t.node!==a&&t.node.collapse()},children:[]};return e&&e.children.push(o),X("TreeNodeMap",o),{broadcastExpanded:a=>{if(t.accordion)for(const n of o.children)n.treeNodeExpand(a)}}}const we=Symbol("dragEvents");function at({props:t,ctx:e,el$:o,dropIndicator$:a,store:n}){const r=Z("tree"),i=x({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return X(we,{treeNodeDragStart:({event:h,treeNode:u})=>{if(typeof t.allowDrag=="function"&&!t.allowDrag(u.node))return h.preventDefault(),!1;h.dataTransfer.effectAllowed="move";try{h.dataTransfer.setData("text/plain","")}catch{}i.value.draggingNode=u,e.emit("node-drag-start",u.node,h)},treeNodeDragOver:({event:h,treeNode:u})=>{const d=u,v=i.value.dropNode;v&&v.node.id!==d.node.id&&re(v.$el,r.is("drop-inner"));const g=i.value.draggingNode;if(!g||!d)return;let C=!0,b=!0,S=!0,B=!0;typeof t.allowDrop=="function"&&(C=t.allowDrop(g.node,d.node,"prev"),B=b=t.allowDrop(g.node,d.node,"inner"),S=t.allowDrop(g.node,d.node,"next")),h.dataTransfer.dropEffect=b||C||S?"move":"none",(C||b||S)&&(v==null?void 0:v.node.id)!==d.node.id&&(v&&e.emit("node-drag-leave",g.node,v.node,h),e.emit("node-drag-enter",g.node,d.node,h)),C||b||S?i.value.dropNode=d:i.value.dropNode=null,d.node.nextSibling===g.node&&(S=!1),d.node.previousSibling===g.node&&(C=!1),d.node.contains(g.node,!1)&&(b=!1),(g.node===d.node||g.node.contains(d.node))&&(C=!1,b=!1,S=!1);const O=d.$el.querySelector(`.${r.be("node","content")}`).getBoundingClientRect(),R=o.value.getBoundingClientRect();let K;const q=C?b?.25:S?.45:1:-1,U=S?b?.75:C?.55:0:1;let y=-9999;const s=h.clientY-O.top;s<O.height*q?K="before":s>O.height*U?K="after":b?K="inner":K="none";const m=d.$el.querySelector(`.${r.be("node","expand-icon")}`).getBoundingClientRect(),f=a.value;K==="before"?y=m.top-R.top:K==="after"&&(y=m.bottom-R.top),f.style.top=`${y}px`,f.style.left=`${m.right-R.left}px`,K==="inner"?Je(d.$el,r.is("drop-inner")):re(d.$el,r.is("drop-inner")),i.value.showDropIndicator=K==="before"||K==="after",i.value.allowDrop=i.value.showDropIndicator||B,i.value.dropType=K,e.emit("node-drag-over",g.node,d.node,h)},treeNodeDragEnd:h=>{const{draggingNode:u,dropType:d,dropNode:v}=i.value;if(h.preventDefault(),h.dataTransfer.dropEffect="move",u&&v){const g={data:u.node.data};d!=="none"&&u.node.remove(),d==="before"?v.node.parent.insertBefore(g,v.node):d==="after"?v.node.parent.insertAfter(g,v.node):d==="inner"&&v.node.insertChild(g),d!=="none"&&(n.value.registerNode(g),n.value.key&&u.node.eachNode(C=>{var b;(b=n.value.nodesMap[C.data[n.value.key]])==null||b.setChecked(C.checked,!n.value.checkStrictly)})),re(v.$el,r.is("drop-inner")),e.emit("node-drag-end",u.node,v.node,d,h),d!=="none"&&e.emit("node-drop",u.node,v.node,d,h)}u&&!v&&e.emit("node-drag-end",u.node,null,d,h),i.value.showDropIndicator=!1,i.value.draggingNode=null,i.value.dropNode=null,i.value.allowDrop=!0}}),{dragState:i}}const st=ce({name:"ElTreeNode",components:{ElCollapseTransition:Ge,ElCheckbox:De,NodeContent:ot,ElIcon:Qe,Loading:Ae},props:{node:{type:F,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(t,e){const o=Z("tree"),{broadcastExpanded:a}=Ee(t),n=Q("RootTree"),r=x(!1),i=x(!1),l=x(null),p=x(null),k=x(null),h=Q(we),u=Ce();X("NodeInstance",u),t.node.expanded&&(r.value=!0,i.value=!0);const d=n.props.props.children||"children";I(()=>{const s=t.node.data[d];return s&&[...s]},()=>{t.node.updateChildren()}),I(()=>t.node.indeterminate,s=>{C(t.node.checked,s)}),I(()=>t.node.checked,s=>{C(s,t.node.indeterminate)}),I(()=>t.node.childNodes.length,()=>t.node.reInitChecked()),I(()=>t.node.expanded,s=>{me(()=>r.value=s),s&&(i.value=!0)});const v=s=>pe(n.props.nodeKey,s.data),g=s=>{const m=t.props.class;if(!m)return{};let f;if(Be(m)){const{data:E}=s;f=m(E,s)}else f=m;return Oe(f)?{[f]:!0}:f},C=(s,m)=>{(l.value!==s||p.value!==m)&&n.ctx.emit("check-change",t.node.data,s,m),l.value=s,p.value=m},b=s=>{ie(n.store,n.ctx.emit,()=>n.store.value.setCurrentNode(t.node)),n.currentNode.value=t.node,n.props.expandOnClickNode&&B(),n.props.checkOnClickNode&&!t.node.disabled&&O(null,{target:{checked:!t.node.checked}}),n.ctx.emit("node-click",t.node.data,t.node,u,s)},S=s=>{n.instance.vnode.props.onNodeContextmenu&&(s.stopPropagation(),s.preventDefault()),n.ctx.emit("node-contextmenu",s,t.node.data,t.node,u)},B=()=>{t.node.isLeaf||(r.value?(n.ctx.emit("node-collapse",t.node.data,t.node,u),t.node.collapse()):(t.node.expand(),e.emit("node-expand",t.node.data,t.node,u)))},O=(s,m)=>{t.node.setChecked(m.target.checked,!n.props.checkStrictly),me(()=>{const f=n.store.value;n.ctx.emit("check",t.node.data,{checkedNodes:f.getCheckedNodes(),checkedKeys:f.getCheckedKeys(),halfCheckedNodes:f.getHalfCheckedNodes(),halfCheckedKeys:f.getHalfCheckedKeys()})})};return{ns:o,node$:k,tree:n,expanded:r,childNodeRendered:i,oldChecked:l,oldIndeterminate:p,getNodeKey:v,getNodeClass:g,handleSelectChange:C,handleClick:b,handleContextMenu:S,handleExpandIconClick:B,handleCheckChange:O,handleChildNodeExpand:(s,m,f)=>{a(m),n.ctx.emit("node-expand",s,m,f)},handleDragStart:s=>{n.props.draggable&&h.treeNodeDragStart({event:s,treeNode:t})},handleDragOver:s=>{s.preventDefault(),n.props.draggable&&h.treeNodeDragOver({event:s,treeNode:{$el:k.value,node:t.node}})},handleDrop:s=>{s.preventDefault()},handleDragEnd:s=>{n.props.draggable&&h.treeNodeDragEnd(s)},CaretRight:Te}}}),rt=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],dt=["aria-expanded"];function it(t,e,o,a,n,r){const i=z("el-icon"),l=z("el-checkbox"),p=z("loading"),k=z("node-content"),h=z("el-tree-node"),u=z("el-collapse-transition");return ne((A(),V("div",{ref:"node$",class:L([t.ns.b("node"),t.ns.is("expanded",t.expanded),t.ns.is("current",t.node.isCurrent),t.ns.is("hidden",!t.node.visible),t.ns.is("focusable",!t.node.disabled),t.ns.is("checked",!t.node.disabled&&t.node.checked),t.getNodeClass(t.node)]),role:"treeitem",tabindex:"-1","aria-expanded":t.expanded,"aria-disabled":t.node.disabled,"aria-checked":t.node.checked,draggable:t.tree.props.draggable,"data-key":t.getNodeKey(t.node),onClick:e[1]||(e[1]=P((...d)=>t.handleClick&&t.handleClick(...d),["stop"])),onContextmenu:e[2]||(e[2]=(...d)=>t.handleContextMenu&&t.handleContextMenu(...d)),onDragstart:e[3]||(e[3]=P((...d)=>t.handleDragStart&&t.handleDragStart(...d),["stop"])),onDragover:e[4]||(e[4]=P((...d)=>t.handleDragOver&&t.handleDragOver(...d),["stop"])),onDragend:e[5]||(e[5]=P((...d)=>t.handleDragEnd&&t.handleDragEnd(...d),["stop"])),onDrop:e[6]||(e[6]=P((...d)=>t.handleDrop&&t.handleDrop(...d),["stop"]))},[_("div",{class:L(t.ns.be("node","content")),style:Ie({paddingLeft:(t.node.level-1)*t.tree.props.indent+"px"})},[t.tree.props.icon||t.CaretRight?(A(),H(i,{key:0,class:L([t.ns.be("node","expand-icon"),t.ns.is("leaf",t.node.isLeaf),{expanded:!t.node.isLeaf&&t.expanded}]),onClick:P(t.handleExpandIconClick,["stop"])},{default:T(()=>[(A(),H(Me(t.tree.props.icon||t.CaretRight)))]),_:1},8,["class","onClick"])):G("v-if",!0),t.showCheckbox?(A(),H(l,{key:1,"model-value":t.node.checked,indeterminate:t.node.indeterminate,disabled:!!t.node.disabled,onClick:e[0]||(e[0]=P(()=>{},["stop"])),onChange:t.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):G("v-if",!0),t.node.loading?(A(),H(i,{key:2,class:L([t.ns.be("node","loading-icon"),t.ns.is("loading")])},{default:T(()=>[w(p)]),_:1},8,["class"])):G("v-if",!0),w(k,{node:t.node,"render-content":t.renderContent},null,8,["node","render-content"])],6),w(u,null,{default:T(()=>[!t.renderAfterExpand||t.childNodeRendered?ne((A(),V("div",{key:0,class:L(t.ns.be("node","children")),role:"group","aria-expanded":t.expanded},[(A(!0),V(ue,null,he(t.node.childNodes,d=>(A(),H(h,{key:t.getNodeKey(d),"render-content":t.renderContent,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,node:d,accordion:t.accordion,props:t.props,onNodeExpand:t.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,dt)),[[oe,t.expanded]]):G("v-if",!0)]),_:1})],42,rt)),[[oe,t.node.visible]])}var lt=fe(st,[["render",it],["__file","tree-node.vue"]]);function ct({el$:t},e){const o=Z("tree"),a=ve([]),n=ve([]);Re(()=>{i()}),Le(()=>{a.value=Array.from(t.value.querySelectorAll("[role=treeitem]")),n.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"))}),I(n,l=>{l.forEach(p=>{p.setAttribute("tabindex","-1")})}),Xe(t,"keydown",l=>{const p=l.target;if(!p.className.includes(o.b("node")))return;const k=l.code;a.value=Array.from(t.value.querySelectorAll(`.${o.is("focusable")}[role=treeitem]`));const h=a.value.indexOf(p);let u;if([j.up,j.down].includes(k)){if(l.preventDefault(),k===j.up){u=h===-1?0:h!==0?h-1:a.value.length-1;const v=u;for(;!e.value.getNode(a.value[u].dataset.key).canFocus;){if(u--,u===v){u=-1;break}u<0&&(u=a.value.length-1)}}else{u=h===-1?0:h<a.value.length-1?h+1:0;const v=u;for(;!e.value.getNode(a.value[u].dataset.key).canFocus;){if(u++,u===v){u=-1;break}u>=a.value.length&&(u=0)}}u!==-1&&a.value[u].focus()}[j.left,j.right].includes(k)&&(l.preventDefault(),p.click());const d=p.querySelector('[type="checkbox"]');[j.enter,j.space].includes(k)&&d&&(l.preventDefault(),d.click())});const i=()=>{var l;a.value=Array.from(t.value.querySelectorAll(`.${o.is("focusable")}[role=treeitem]`)),n.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"));const p=t.value.querySelectorAll(`.${o.is("checked")}[role=treeitem]`);if(p.length){p[0].setAttribute("tabindex","0");return}(l=a.value[0])==null||l.setAttribute("tabindex","0")}}const ut=ce({name:"ElTree",components:{ElTreeNode:lt},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:Ze}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(t,e){const{t:o}=$e(),a=Z("tree"),n=x(new tt({key:t.nodeKey,data:t.data,lazy:t.lazy,props:t.props,load:t.load,currentNodeKey:t.currentNodeKey,checkStrictly:t.checkStrictly,checkDescendants:t.checkDescendants,defaultCheckedKeys:t.defaultCheckedKeys,defaultExpandedKeys:t.defaultExpandedKeys,autoExpandParent:t.autoExpandParent,defaultExpandAll:t.defaultExpandAll,filterNodeMethod:t.filterNodeMethod}));n.value.initialize();const r=x(n.value.root),i=x(null),l=x(null),p=x(null),{broadcastExpanded:k}=Ee(t),{dragState:h}=at({props:t,ctx:e,el$:l,dropIndicator$:p,store:n});ct({el$:l},n);const u=be(()=>{const{childNodes:c}=r.value;return!c||c.length===0||c.every(({visible:N})=>!N)});I(()=>t.currentNodeKey,c=>{n.value.setCurrentNodeKey(c)}),I(()=>t.defaultCheckedKeys,c=>{n.value.setDefaultCheckedKey(c)}),I(()=>t.defaultExpandedKeys,c=>{n.value.setDefaultExpandedKeys(c)}),I(()=>t.data,c=>{n.value.setData(c)},{deep:!0}),I(()=>t.checkStrictly,c=>{n.value.checkStrictly=c});const d=c=>{if(!t.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");n.value.filter(c)},v=c=>pe(t.nodeKey,c.data),g=c=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const N=n.value.getNode(c);if(!N)return[];const D=[N.data];let Y=N.parent;for(;Y&&Y!==r.value;)D.push(Y.data),Y=Y.parent;return D.reverse()},C=(c,N)=>n.value.getCheckedNodes(c,N),b=c=>n.value.getCheckedKeys(c),S=()=>{const c=n.value.getCurrentNode();return c?c.data:null},B=()=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const c=S();return c?c[t.nodeKey]:null},O=(c,N)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");n.value.setCheckedNodes(c,N)},R=(c,N)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");n.value.setCheckedKeys(c,N)},K=(c,N,D)=>{n.value.setChecked(c,N,D)},q=()=>n.value.getHalfCheckedNodes(),U=()=>n.value.getHalfCheckedKeys(),y=(c,N=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");ie(n,e.emit,()=>n.value.setUserCurrentNode(c,N))},s=(c,N=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");ie(n,e.emit,()=>n.value.setCurrentNodeKey(c,N))},m=c=>n.value.getNode(c),f=c=>{n.value.remove(c)},E=(c,N)=>{n.value.append(c,N)},M=(c,N)=>{n.value.insertBefore(c,N)},$=(c,N)=>{n.value.insertAfter(c,N)},ae=(c,N,D)=>{k(N),e.emit("node-expand",c,N,D)},se=(c,N)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");n.value.updateChildren(c,N)};return X("RootTree",{ctx:e,props:t,store:n,root:r,currentNode:i,instance:Ce()}),X(Fe,void 0),{ns:a,store:n,root:r,currentNode:i,dragState:h,el$:l,dropIndicator$:p,isEmpty:u,filter:d,getNodeKey:v,getNodePath:g,getCheckedNodes:C,getCheckedKeys:b,getCurrentNode:S,getCurrentKey:B,setCheckedNodes:O,setCheckedKeys:R,setChecked:K,getHalfCheckedNodes:q,getHalfCheckedKeys:U,setCurrentNode:y,setCurrentKey:s,t:o,getNode:m,remove:f,append:E,insertBefore:M,insertAfter:$,handleNodeExpand:ae,updateKeyChildren:se}}});function ht(t,e,o,a,n,r){const i=z("el-tree-node");return A(),V("div",{ref:"el$",class:L([t.ns.b(),t.ns.is("dragging",!!t.dragState.draggingNode),t.ns.is("drop-not-allow",!t.dragState.allowDrop),t.ns.is("drop-inner",t.dragState.dropType==="inner"),{[t.ns.m("highlight-current")]:t.highlightCurrent}]),role:"tree"},[(A(!0),V(ue,null,he(t.root.childNodes,l=>(A(),H(i,{key:t.getNodeKey(l),node:l,props:t.props,accordion:t.accordion,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,"render-content":t.renderContent,onNodeExpand:t.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),t.isEmpty?(A(),V("div",{key:0,class:L(t.ns.e("empty-block"))},[ke(t.$slots,"empty",{},()=>{var l;return[_("span",{class:L(t.ns.e("empty-text"))},Ve((l=t.emptyText)!=null?l:t.t("el.tree.emptyText")),3)]})],2)):G("v-if",!0),ne(_("div",{ref:"dropIndicator$",class:L(t.ns.e("drop-indicator"))},null,2),[[oe,t.dragState.showDropIndicator]])],2)}var te=fe(ut,[["render",ht],["__file","tree.vue"]]);te.install=t=>{t.component(te.name,te)};const ft=te,pt=ft,gt={class:"user-dialog"},mt={style:{width:"100%"}},vt={style:{"margin-top":"-4px"}},yt={class:"dialog-footer"},Rt={__name:"UserDialogCom",props:{title:{type:String,default:"默认"},currentRow:{type:Object},userDialogVisible:{type:Boolean}},emits:["getTableData","editUser","update:userDialogVisible"],setup(t,{expose:e,emit:o}){const a=x(null),n=x({userName:"",userPassword:"",userType:""}),r=x(null),i=o,l=(y=[])=>{const s=[{path:"home",name:"home",meta:{url:"../views/HomeView.vue"}},{path:"profile/image",name:"image",meta:{url:"../views/profile/EditImageView.vue",name:"修改头像"}},{path:"profile/password",name:"password",meta:{url:"../views/profile/EditPasswordView.vue",name:"修改密码"}}],m=[],f=p(y),E=k(y),M=h(y);return f&&(s.push(f),m.push({index:"/user-manage",icon:"icon iconfont icon-jiaoseguanli",name:"角色管理"})),E&&(s.push(E),m.push({index:"/movie-file",icon:"icon iconfont icon-shipinwenjian",name:"电影文件管理"})),M&&(s.push(M),m.push({index:"/movie-info",icon:"icon iconfont icon-iconshoot",name:"电影信息管理"})),{routerData:s,authAisdeData:m}},p=(y=[])=>{const s={path:"user-manage",name:"user-manage",meta:{url:"../views/UserInfoMangage.vue",name:"角色管理"}},m={"add-user":s,"delete-user":s,"edit-user":s,"view-user":s},f=y.find(E=>m[E.id]===s);return f&&s},k=(y=[])=>{const s={path:"movie-file",name:"movie-file",meta:{url:"../views/FileMovieView.vue",name:"电影文件管理"}},m={"add-file":s,"delete-file":s,"view-file":s},f=y.find(E=>m[E.id]===s);return f&&s},h=(y=[])=>{const s={path:"movie-info",name:"all-movie",meta:{url:"../views/movie/AllMovieView.vue",name:"所有电影信息"}},m={"add-movie":s,"export-file":s,"import-file":s,"delete-movie":s,"view-movie":s,"edit-movie":s,"lock-movie":s},f=y.find(E=>m[E.id]===s);return f&&s},u=(y=[])=>[{index:"/home",icon:"icon iconfont icon-home",name:"首页"},{index:"/profile",icon:"icon iconfont icon-gerenxinxi",name:"个人信息管理",children:[{index:"/profile/image",name:"修改头像"},{index:"/profile/password",name:"修改密码"}]}].concat(y),d=x([{id:"user-manage",label:"角色管理",children:[{id:"add-user",label:"新增角色"},{id:"delete-user",label:"删除"},{id:"edit-user",label:"修改"},{id:"view-user",label:"查看"}]},{id:"file-manage",label:"电影文件管理",children:[{id:"add-file",label:"添加"},{id:"delete-file",label:"删除"},{id:"view-file",label:"查看"}]},{id:"movie-manage",label:"电影信息管理",children:[{id:"add-movie",label:"新增电影"},{id:"export-file",label:"导出文件"},{id:"import-file",label:"上传文件"},{id:"delete-movie",label:"删除"},{id:"view-movie",label:"查看"},{id:"edit-movie",label:"修改"},{id:"lock-movie",label:"审核"}]}]),v=[{value:"custom",label:"自定义"},{value:"file-manage",label:"文件管理员"},{value:"movie-manage",label:"电影信息管理员"},{value:"lock-user",label:"审核员"}],g=t,C=be({get:()=>g.userDialogVisible,set:y=>i("update:userDialogVisible",y)}),b=x({collapse:!1,allChecked:!1}),S=x({userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:6,max:12,message:"长度应为6到12",trigger:"blur"}],userPassword:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:14,message:"长度应为8到14",trigger:"blur"}],userType:[{required:!0,message:"请选中角色类型",trigger:"change"}]}),B=y=>{C.value=y},O=()=>{if(r.value.clearValidate(),K(!1),R(!1),g.title==="添加角色")n.value.userName="",n.value.userPassword="",n.value.userType="";else{const{authArr:y,userName:s,userPassword:m,userType:f}=g.currentRow;n.value.userName=s,n.value.userType=f,n.value.userPassword=m,y.split(",").forEach(M=>{a.value.setChecked(M,!0,!0)})}},R=y=>{d.value.forEach(s=>{a.value.getNode(s.id).expanded=y})},K=y=>{d.value.forEach(s=>{a.value.setChecked(s.id,y,!0)})},q=()=>{K(!1),n.value.userType==="lock-user"?a.value.setCheckedKeys(["lock-movie","view-movie"],!1):a.value.setChecked(n.value.userType,!0,!0)},U=()=>{r.value.validate().then(async()=>{const y=a.value.getCheckedNodes(!0),{routerData:s,authAisdeData:m}=l(y),f=u(m),E=[];y.forEach($=>{E.push($.id)});const M={...n.value,asideData:f,routerData:s,authArr:E.join()};B(!1),g.title==="修改角色"?i("editUser",M):await We(M).then($=>{Ye({message:$.data.msg,type:"success"}),i("getTableData")})}).catch(()=>{})};return e({dialog:B}),(y,s)=>{const m=_e,f=Ue,E=je,M=ze,$=De,ae=pt,se=He,c=qe,N=Pe;return A(),V("div",gt,[w(N,{modelValue:C.value,"onUpdate:modelValue":s[6]||(s[6]=D=>C.value=D),title:g.title,width:"500",onOpen:O},{footer:T(()=>[ne(_("div",yt,[w(c,{onClick:s[5]||(s[5]=D=>C.value=!1)},{default:T(()=>[ye("取消")]),_:1}),w(c,{type:"primary",onClick:U},{default:T(()=>[ye(" 确认 ")]),_:1})],512),[[oe,g.title!=="查看角色"]])]),default:T(()=>[w(se,{"label-width":"100px",model:n.value,style:{"max-width":"460px"},rules:S.value,ref_key:"formRef",ref:r},{default:T(()=>[w(f,{label:"角色名",prop:"userName"},{default:T(()=>[w(m,{modelValue:n.value.userName,"onUpdate:modelValue":s[0]||(s[0]=D=>n.value.userName=D),disabled:g.title==="查看角色"},null,8,["modelValue","disabled"])]),_:1}),w(f,{label:"角色密码",prop:"userPassword"},{default:T(()=>[w(m,{modelValue:n.value.userPassword,"onUpdate:modelValue":s[1]||(s[1]=D=>n.value.userPassword=D),disabled:g.title==="查看角色",type:"password","show-password":""},null,8,["modelValue","disabled"])]),_:1}),w(f,{label:"角色类型",prop:"userType"},{default:T(()=>[w(M,{modelValue:n.value.userType,"onUpdate:modelValue":s[2]||(s[2]=D=>n.value.userType=D),class:"m-2",placeholder:"请选择",style:{width:"240px"},onChange:q,disabled:g.title==="查看角色"},{default:T(()=>[(A(),V(ue,null,he(v,D=>w(E,{key:D.value,label:D.label,value:D.value},null,8,["label","value"])),64))]),_:1},8,["modelValue","disabled"])]),_:1}),w(f,{label:"菜单权限"},{default:T(()=>[_("div",mt,[_("div",vt,[w($,{modelValue:b.value.collapse,"onUpdate:modelValue":s[3]||(s[3]=D=>b.value.collapse=D),label:"展开/折叠",size:"large",onChange:R},null,8,["modelValue"]),w($,{modelValue:b.value.allChecked,"onUpdate:modelValue":s[4]||(s[4]=D=>b.value.allChecked=D),label:"全选/全不选",size:"large",onChange:K},null,8,["modelValue"])]),w(ae,{ref_key:"treeRef",ref:a,data:d.value,"show-checkbox":"","node-key":"id","highlight-current":"",style:{border:"1px solid #e5e6e7",padding:"5px",width:"90%"}},null,8,["data"])])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}};export{Rt as default};