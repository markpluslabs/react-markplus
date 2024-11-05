function e(e,t,a,i){Object.defineProperty(e,t,{get:a,set:i,enumerable:!0,configurable:!0})}var t=globalThis.parcelRequire20b6,a=t.register;a("4q7Hx",function(a,i){e(a.exports,"diagram",()=>v);var l=t("z7zv5"),r=t("8TIpH");t("brIHR"),t("fiKJc"),t("lP1Yn");var n=t("1RQpy"),o=t("1mZzi");t("dX0JM");var c=t("fPryt");t("fUkMo"),t("joDDi"),t("guthY"),t("acYRi"),t("5Itit"),t("9nzID");var s=t("6FYXn"),p=c.defaultConfig_default.pie,d={sections:/* @__PURE__ */new Map,showData:!1,config:p},g=d.sections,u=d.showData,m=structuredClone(p),f=/* @__PURE__ */(0,s.__name)(()=>structuredClone(m),"getConfig"),h=/* @__PURE__ */(0,s.__name)(()=>{g=/* @__PURE__ */new Map,u=d.showData,(0,c.clear)()},"clear"),D=/* @__PURE__ */(0,s.__name)(({label:e,value:t})=>{g.has(e)||(g.set(e,t),(0,c.log).debug(`added new section: ${e}, with value: ${t}`))},"addSection"),x=/* @__PURE__ */(0,s.__name)(()=>g,"getSections"),S=/* @__PURE__ */(0,s.__name)(e=>{u=e},"setShowData"),_=/* @__PURE__ */(0,s.__name)(()=>u,"getShowData"),T={getConfig:f,clear:h,setDiagramTitle:c.setDiagramTitle,getDiagramTitle:c.getDiagramTitle,setAccTitle:c.setAccTitle,getAccTitle:c.getAccTitle,setAccDescription:c.setAccDescription,getAccDescription:c.getAccDescription,addSection:D,getSections:x,setShowData:S,getShowData:_},w=/* @__PURE__ */(0,s.__name)((e,t)=>{(0,l.populateCommonDb)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),y={parse:/* @__PURE__ */(0,s.__name)(async e=>{let t=await (0,r.parse)("pie",e);(0,c.log).debug(t),w(t,T)},"parse")},b=/* @__PURE__ */(0,s.__name)(e=>`
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
`,"getStyles"),C=/* @__PURE__ */(0,s.__name)(e=>{let t=[...e.entries()].map(e=>({label:e[0],value:e[1]})).sort((e,t)=>t.value-e.value);return(0,c.pie_default)().value(e=>e.value)(t)},"createPieArcs"),v={parser:y,db:T,renderer:{draw:/* @__PURE__ */(0,s.__name)((e,t,a,i)=>{(0,c.log).debug("rendering pie chart\n"+e);let l=i.db,r=(0,c.getConfig2)(),s=(0,o.cleanAndMerge)(l.getConfig(),r.pie),p=(0,n.selectSvgElement)(t),d=p.append("g");d.attr("transform","translate(225,225)");let{themeVariables:g}=r,[u]=(0,o.parseFontSize)(g.pieOuterStrokeWidth);u??=2;let m=s.textPosition,f=(0,c.arc_default)().innerRadius(0).outerRadius(185),h=(0,c.arc_default)().innerRadius(185*m).outerRadius(185*m);d.append("circle").attr("cx",0).attr("cy",0).attr("r",185+u/2).attr("class","pieOuterCircle");let D=l.getSections(),x=C(D),S=[g.pie1,g.pie2,g.pie3,g.pie4,g.pie5,g.pie6,g.pie7,g.pie8,g.pie9,g.pie10,g.pie11,g.pie12],_=(0,c.ordinal)(S);d.selectAll("mySlices").data(x).enter().append("path").attr("d",f).attr("fill",e=>_(e.data.label)).attr("class","pieCircle");let T=0;D.forEach(e=>{T+=e}),d.selectAll("mySlices").data(x).enter().append("text").text(e=>(e.data.value/T*100).toFixed(0)+"%").attr("transform",e=>"translate("+h.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),d.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let w=d.selectAll(".legend").data(_.domain()).enter().append("g").attr("class","legend").attr("transform",(e,t)=>"translate(216,"+(22*t-22*_.domain().length/2)+")");w.append("rect").attr("width",18).attr("height",18).style("fill",_).style("stroke",_),w.data(x).append("text").attr("x",22).attr("y",14).text(e=>{let{label:t,value:a}=e.data;return l.getShowData()?`${t} [${a}]`:t});let y=512+Math.max(...w.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));p.attr("viewBox",`0 0 ${y} 450`),(0,c.configureSvgSize)(p,450,y,s.useMaxWidth)},"draw")},styles:b}}),a("z7zv5",function(a,i){function l(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}e(a.exports,"populateCommonDb",()=>l),(0,t("6FYXn").__name)(l,"populateCommonDb")});