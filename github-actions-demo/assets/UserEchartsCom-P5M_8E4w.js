import{i as n}from"./index-CfMPIRNn.js";import{n as c,j as i,o as d,c as l,d as p}from"./index-BtiZJA6V.js";const u={class:"user-echarts"},m=p("div",{id:"user-echarts",style:{width:"600px",height:"300px"}},null,-1),h=[m],_={__name:"UserEchartsCom",props:{source:{type:Array,default:()=>[]}},setup(s){const e=s,o=t=>{const r=n(document.getElementById("user-echarts")),a={dataset:{source:t},tooltip:{trigger:"axis",backgroundColor:"rgba(32, 33, 36,.7)",borderColor:"rgba(32, 33, 36,0.20)",borderWidth:1,textStyle:{color:"#fff",fontSize:"12"}},grid:{containLabel:!0},xAxis:{name:"人数",minInterval:1},yAxis:{type:"category"},visualMap:{orient:"horizontal",left:"center",min:0,max:100,text:["角色类型"],dimension:0,inRange:{color:["#65B581","#FFCE34","#FD665F"]}},series:[{type:"bar",encode:{x:"amount",y:"product"}}]};r.setOption(a)};return c(()=>e.source,t=>{o(t)}),i(()=>{o(e.source)}),(t,r)=>(d(),l("div",u,h))}};export{_ as default};