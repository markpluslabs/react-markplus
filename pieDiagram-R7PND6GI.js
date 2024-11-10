function e(e,t,a,i){Object.defineProperty(e,t,{get:a,set:i,enumerable:!0,configurable:!0})}var t=globalThis.parcelRequire421a,a=t.register;a("bsfKY",function(a,i){e(a.exports,"diagram",()=>y);var l=t("eIvOz"),r=t("9nJgw");t("2P6uP"),t("58fUp"),t("6JCZZ");var n=t("78zRz"),o=t("fo0kP");t("1OUid");var s=t("7hgA6");t("5aabO"),t("bqRip"),t("bYG2S"),t("76RTQ"),t("f34bP"),t("2266r");var c=t("7xxrv"),p=s.defaultConfig_default.pie,d={sections:/* @__PURE__ */new Map,showData:!1,config:p},g=d.sections,u=d.showData,m=structuredClone(p),f=/* @__PURE__ */(0,c.__name)(()=>structuredClone(m),"getConfig"),h=/* @__PURE__ */(0,c.__name)(()=>{g=/* @__PURE__ */new Map,u=d.showData,(0,s.clear)()},"clear"),x=/* @__PURE__ */(0,c.__name)(({label:e,value:t})=>{g.has(e)||(g.set(e,t),(0,s.log).debug(`added new section: ${e}, with value: ${t}`))},"addSection"),S=/* @__PURE__ */(0,c.__name)(()=>g,"getSections"),_=/* @__PURE__ */(0,c.__name)(e=>{u=e},"setShowData"),D=/* @__PURE__ */(0,c.__name)(()=>u,"getShowData"),T={getConfig:f,clear:h,setDiagramTitle:s.setDiagramTitle,getDiagramTitle:s.getDiagramTitle,setAccTitle:s.setAccTitle,getAccTitle:s.getAccTitle,setAccDescription:s.setAccDescription,getAccDescription:s.getAccDescription,addSection:x,getSections:S,setShowData:_,getShowData:D},w=/* @__PURE__ */(0,c.__name)((e,t)=>{(0,l.populateCommonDb)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),b={parse:/* @__PURE__ */(0,c.__name)(async e=>{let t=await (0,r.parse)("pie",e);(0,s.log).debug(t),w(t,T)},"parse")},v=/* @__PURE__ */(0,c.__name)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),C=/* @__PURE__ */(0,c.__name)(e=>{let t=[...e.entries()].map(e=>({label:e[0],value:e[1]})).sort((e,t)=>t.value-e.value);return(0,s.pie_default)().value(e=>e.value)(t)},"createPieArcs"),y={parser:b,db:T,renderer:{draw:/* @__PURE__ */(0,c.__name)((e,t,a,i)=>{(0,s.log).debug("rendering pie chart\n"+e);let l=i.db,r=(0,s.getConfig2)(),c=(0,o.cleanAndMerge)(l.getConfig(),r.pie),p=(0,n.selectSvgElement)(t),d=p.append("g");d.attr("transform","translate(225,225)");let{themeVariables:g}=r,[u]=(0,o.parseFontSize)(g.pieOuterStrokeWidth);u??=2;let m=c.textPosition,f=(0,s.arc_default)().innerRadius(0).outerRadius(185),h=(0,s.arc_default)().innerRadius(185*m).outerRadius(185*m);d.append("circle").attr("cx",0).attr("cy",0).attr("r",185+u/2).attr("class","pieOuterCircle");let x=l.getSections(),S=C(x),_=[g.pie1,g.pie2,g.pie3,g.pie4,g.pie5,g.pie6,g.pie7,g.pie8,g.pie9,g.pie10,g.pie11,g.pie12],D=(0,s.ordinal)(_);d.selectAll("mySlices").data(S).enter().append("path").attr("d",f).attr("fill",e=>D(e.data.label)).attr("class","pieCircle");let T=0;x.forEach(e=>{T+=e}),d.selectAll("mySlices").data(S).enter().append("text").text(e=>(e.data.value/T*100).toFixed(0)+"%").attr("transform",e=>"translate("+h.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),d.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let w=d.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",(e,t)=>"translate(216,"+(22*t-22*D.domain().length/2)+")");w.append("rect").attr("width",18).attr("height",18).style("fill",D).style("stroke",D),w.data(S).append("text").attr("x",22).attr("y",14).text(e=>{let{label:t,value:a}=e.data;return l.getShowData()?`${t} [${a}]`:t});let b=512+Math.max(...w.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));p.attr("viewBox",`0 0 ${b} 450`),(0,s.configureSvgSize)(p,450,b,c.useMaxWidth)},"draw")},styles:v}}),a("eIvOz",function(a,i){function l(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}e(a.exports,"populateCommonDb",()=>l),(0,t("7xxrv").__name)(l,"populateCommonDb")});
//# sourceMappingURL=pieDiagram-R7PND6GI.js.map
