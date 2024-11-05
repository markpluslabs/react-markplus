function t(t,e,a,r){Object.defineProperty(t,e,{get:a,set:r,enumerable:!0,configurable:!0})}var e=globalThis.parcelRequire20b6,a=e.register;a("7ZG5D",function(a,r){t(a.exports,"diagram",()=>y);var l=e("z7zv5"),o=e("8TIpH");e("brIHR"),e("fiKJc"),e("lP1Yn");var i=e("1RQpy"),n=e("1mZzi");e("dX0JM");var c=e("fPryt");e("fUkMo"),e("joDDi"),e("guthY"),e("acYRi"),e("5Itit"),e("9nzID");var s=e("6FYXn"),d={packet:[]},p=structuredClone(d),g=c.defaultConfig_default.packet,b=/* @__PURE__ */(0,s.__name)(()=>{let t=(0,n.cleanAndMerge)({...g,...(0,c.getConfig)().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),k=/* @__PURE__ */(0,s.__name)(()=>p.packet,"getPacket"),f={pushWord:/* @__PURE__ */(0,s.__name)(t=>{t.length>0&&p.packet.push(t)},"pushWord"),getPacket:k,getConfig:b,clear:/* @__PURE__ */(0,s.__name)(()=>{(0,c.clear)(),p=structuredClone(d)},"clear"),setAccTitle:c.setAccTitle,getAccTitle:c.getAccTitle,setDiagramTitle:c.setDiagramTitle,getDiagramTitle:c.getDiagramTitle,getAccDescription:c.getAccDescription,setAccDescription:c.setAccDescription},m=/* @__PURE__ */(0,s.__name)(t=>{(0,l.populateCommonDb)(t,f);let e=-1,a=[],r=1,{bitsPerRow:o}=f.getConfig();for(let{start:l,end:i,label:n}of t.blocks){if(i&&i<l)throw Error(`Packet block ${l} - ${i} is invalid. End must be greater than start.`);if(l!==e+1)throw Error(`Packet block ${l} - ${i??l} is not contiguous. It should start from ${e+1}.`);for(e=i??l,(0,c.log).debug(`Packet block ${l} - ${e} with label ${n}`);a.length<=o+1&&f.getPacket().length<1e4;){let[t,e]=u({start:l,end:i,label:n},r,o);if(a.push(t),t.end+1===r*o&&(f.pushWord(a),a=[],r++),!e)break;({start:l,end:i,label:n}=e)}}f.pushWord(a)},"populate"),u=/* @__PURE__ */(0,s.__name)((t,e,a)=>{if(void 0===t.end&&(t.end=t.start),t.start>t.end)throw Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*a?[t,void 0]:[{start:t.start,end:e*a-1,label:t.label},{start:e*a,end:t.end,label:t.label}]},"getNextFittingBlock"),h={parse:/* @__PURE__ */(0,s.__name)(async t=>{let e=await (0,o.parse)("packet",t);(0,c.log).debug(e),m(e)},"parse")},x=/* @__PURE__ */(0,s.__name)((t,e,a,r)=>{let l=r.db,o=l.getConfig(),{rowHeight:n,paddingY:s,bitWidth:d,bitsPerRow:p}=o,g=l.getPacket(),b=l.getDiagramTitle(),k=n+s,f=k*(g.length+1)-(b?0:n),m=d*p+2,u=(0,i.selectSvgElement)(e);for(let[t,e]of(u.attr("viewbox",`0 0 ${m} ${f}`),(0,c.configureSvgSize)(u,f,m,o.useMaxWidth),g.entries()))C(u,e,t,o);u.append("text").text(b).attr("x",m/2).attr("y",f-k/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),C=/* @__PURE__ */(0,s.__name)((t,e,a,{rowHeight:r,paddingX:l,paddingY:o,bitWidth:i,bitsPerRow:n,showBits:c})=>{let s=t.append("g"),d=a*(r+o)+o;for(let t of e){let e=t.start%n*i+1,a=(t.end-t.start+1)*i-l;if(s.append("rect").attr("x",e).attr("y",d).attr("width",a).attr("height",r).attr("class","packetBlock"),s.append("text").attr("x",e+a/2).attr("y",d+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(t.label),!c)continue;let o=t.end===t.start,p=d-2;s.append("text").attr("x",e+(o?a/2:0)).attr("y",p).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",o?"middle":"start").text(t.start),o||s.append("text").attr("x",e+a).attr("y",p).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(t.end)}},"drawWord"),_={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},y={parser:h,db:f,renderer:{draw:x},styles:/* @__PURE__ */(0,s.__name)(({packet:t}={})=>{let e=(0,n.cleanAndMerge)(_,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles")}}),a("z7zv5",function(a,r){function l(t,e){t.accDescr&&e.setAccDescription?.(t.accDescr),t.accTitle&&e.setAccTitle?.(t.accTitle),t.title&&e.setDiagramTitle?.(t.title)}t(a.exports,"populateCommonDb",()=>l),(0,e("6FYXn").__name)(l,"populateCommonDb")});