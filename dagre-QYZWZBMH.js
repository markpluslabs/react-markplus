function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t=globalThis.parcelRequirebb86,n=t.register;n("aosd6",function(n,r){e(n.exports,"render",()=>I);var i=t("cFbSz"),s=t("03fqf");t("1pQ54");var o=t("1il17");t("ej8sY"),t("ci84p");var a=t("1x80i"),d=t("4kWfH");t("fo0kP"),t("1OUid");var l=t("7hgA6"),g=t("76RTQ");t("f34bP"),t("2266r");var h=t("7xxrv");function u(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:c(e),edges:f(e)};return(0,g.isUndefined_default)(e.graph())||(t.value=(0,g.clone_default)(e.graph())),t}function c(e){return(0,g.map_default)(e.nodes(),function(t){var n=e.node(t),r=e.parent(t),i={v:t};return(0,g.isUndefined_default)(n)||(i.value=n),(0,g.isUndefined_default)(r)||(i.parent=r),i})}function f(e){return(0,g.map_default)(e.edges(),function(t){var n=e.edge(t),r={v:t.v,w:t.w};return(0,g.isUndefined_default)(t.name)||(r.name=t.name),(0,g.isUndefined_default)(n)||(r.value=n),r})}(0,h.__name)(u,"write"),(0,h.__name)(c,"writeNodes"),(0,h.__name)(f,"writeEdges");var p=/* @__PURE__ */new Map,_=/* @__PURE__ */new Map,v=/* @__PURE__ */new Map,w=/* @__PURE__ */(0,h.__name)(()=>{_.clear(),v.clear(),p.clear()},"clear"),m=/* @__PURE__ */(0,h.__name)((e,t)=>{let n=_.get(t)||[];return(0,l.log).trace("In isDescendant",t," ",e," = ",n.includes(e)),n.includes(e)},"isDescendant"),y=/* @__PURE__ */(0,h.__name)((e,t)=>{let n=_.get(t)||[];return(0,l.log).info("Descendants of ",t," is ",n),(0,l.log).info("Edge is ",e),e.v!==t&&e.w!==t&&(n?n.includes(e.v)||m(e.v,t)||m(e.w,t)||n.includes(e.w):((0,l.log).debug("Tilt, ",t,",not in descendants"),!1))},"edgeInCluster"),b=/* @__PURE__ */(0,h.__name)((e,t,n,r)=>{(0,l.log).warn("Copying children of ",e,"root",r,"data",t.node(e),r);let i=t.children(e)||[];e!==r&&i.push(e),(0,l.log).warn("Copying (nodes) clusterId",e,"nodes",i),i.forEach(i=>{if(t.children(i).length>0)b(i,t,n,r);else{let s=t.node(i);(0,l.log).info("cp ",i," to ",r," with parent ",e),n.setNode(i,s),r!==t.parent(i)&&((0,l.log).warn("Setting parent",i,t.parent(i)),n.setParent(i,t.parent(i))),e!==r&&i!==e?((0,l.log).debug("Setting parent",i,e),n.setParent(i,e)):((0,l.log).info("In copy ",e,"root",r,"data",t.node(e),r),(0,l.log).debug("Not Setting parent for node=",i,"cluster!==rootId",e!==r,"node!==clusterId",i!==e));let o=t.edges(i);(0,l.log).debug("Copying Edges",o),o.forEach(i=>{(0,l.log).info("Edge",i);let s=t.edge(i.v,i.w,i.name);(0,l.log).info("Edge data",s,r);try{y(i,r)?((0,l.log).info("Copying as ",i.v,i.w,s,i.name),n.setEdge(i.v,i.w,s,i.name),(0,l.log).info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):(0,l.log).info("Skipping copy of edge ",i.v,"-->",i.w," rootId: ",r," clusterId:",e)}catch(e){(0,l.log).error(e)}})}(0,l.log).debug("Removing node",i),t.removeNode(i)})},"copy"),E=/* @__PURE__ */(0,h.__name)((e,t)=>{let n=t.children(e),r=[...n];for(let i of n)v.set(i,e),r=[...r,...E(i,t)];return r},"extractDescendants"),N=/* @__PURE__ */(0,h.__name)((e,t,n)=>{let r=e.edges().filter(e=>e.v===t||e.w===t),i=e.edges().filter(e=>e.v===n||e.w===n),s=r.map(e=>({v:e.v===t?n:e.v,w:e.w===t?t:e.w})),o=i.map(e=>({v:e.v,w:e.w}));return s.filter(e=>o.some(t=>e.v===t.v&&e.w===t.w))},"findCommonEdges"),C=/* @__PURE__ */(0,h.__name)((e,t,n)=>{let r;let i=t.children(e);if((0,l.log).trace("Searching children of id ",e,i),i.length<1)return e;for(let e of i){let i=C(e,t,n),s=N(t,n,i);if(i){if(!(s.length>0))return i;r=i}}return r},"findNonClusterChild"),X=/* @__PURE__ */(0,h.__name)(e=>p.has(e)&&p.get(e).externalConnections&&p.has(e)?p.get(e).id:e,"getAnchorId"),O=/* @__PURE__ */(0,h.__name)((e,t)=>{if(!e||t>10){(0,l.log).debug("Opting out, no graph ");return}for(let t of((0,l.log).debug("Opting in, graph "),e.nodes().forEach(function(t){e.children(t).length>0&&((0,l.log).warn("Cluster identified",t," Replacement id in edges: ",C(t,e,t)),_.set(t,E(t,e)),p.set(t,{id:C(t,e,t),clusterData:e.node(t)}))}),e.nodes().forEach(function(t){let n=e.children(t),r=e.edges();n.length>0?((0,l.log).debug("Cluster identified",t,_),r.forEach(e=>{m(e.v,t)^m(e.w,t)&&((0,l.log).warn("Edge: ",e," leaves cluster ",t),(0,l.log).warn("Descendants of XXX ",t,": ",_.get(t)),p.get(t).externalConnections=!0)})):(0,l.log).debug("Not a cluster ",t,_)}),p.keys())){let n=p.get(t).id,r=e.parent(n);r!==t&&p.has(r)&&!p.get(r).externalConnections&&(p.get(t).id=r)}e.edges().forEach(function(t){let n=e.edge(t);(0,l.log).warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),(0,l.log).warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let r=t.v,i=t.w;if((0,l.log).warn("Fix XXX",p,"ids:",t.v,t.w,"Translating: ",p.get(t.v)," --- ",p.get(t.w)),p.get(t.v)||p.get(t.w)){if((0,l.log).warn("Fixing and trying - removing XXX",t.v,t.w,t.name),r=X(t.v),i=X(t.w),e.removeEdge(t.v,t.w,t.name),r!==t.v){let i=e.parent(r);p.get(i).externalConnections=!0,n.fromCluster=t.v}if(i!==t.w){let r=e.parent(i);p.get(r).externalConnections=!0,n.toCluster=t.w}(0,l.log).warn("Fix Replacing with XXX",r,i,t.name),e.setEdge(r,i,n,t.name)}}),(0,l.log).warn("Adjusted Graph",u(e)),x(e,0),(0,l.log).trace(p)},"adjustClustersAndEdges"),x=/* @__PURE__ */(0,h.__name)((e,t)=>{if((0,l.log).warn("extractor - ",t,u(e),e.children("D")),t>10){(0,l.log).error("Bailing out");return}let n=e.nodes(),r=!1;for(let t of n){let n=e.children(t);r=r||n.length>0}if(!r){(0,l.log).debug("Done, no node has children",e.nodes());return}for(let r of((0,l.log).debug("Nodes = ",n,t),n))if((0,l.log).debug("Extracting node",r,p,p.has(r)&&!p.get(r).externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),p.has(r)){if(!p.get(r).externalConnections&&e.children(r)&&e.children(r).length>0){(0,l.log).warn("Cluster without external connections, without a parent and with children",r,t);let n="TB"===e.graph().rankdir?"LR":"TB";p.get(r)?.clusterData?.dir&&(n=p.get(r).clusterData.dir,(0,l.log).warn("Fixing dir",p.get(r).clusterData.dir,n));let i=new(0,d.Graph)({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});(0,l.log).warn("Old graph before copy",u(e)),b(r,e,i,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:p.get(r).clusterData,label:p.get(r).label,graph:i}),(0,l.log).warn("New graph after copy node: (",r,")",u(i)),(0,l.log).debug("Old graph after copy",u(e))}else(0,l.log).warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!p.get(r).externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),(0,l.log).debug(p)}else(0,l.log).debug("Not a cluster",r,t);for(let r of(n=e.nodes(),(0,l.log).warn("New list of nodes",n),n)){let n=e.node(r);(0,l.log).warn(" Now next level",r,n),n?.clusterNode&&x(n.graph,t+1)}},"extractor"),D=/* @__PURE__ */(0,h.__name)((e,t)=>{if(0===t.length)return[];let n=Object.assign([],t);return t.forEach(t=>{let r=e.children(t),i=D(e,r);n=[...n,...i]}),n},"sorter"),P=/* @__PURE__ */(0,h.__name)(e=>D(e,e.children()),"sortNodesByHierarchy"),S=/* @__PURE__ */(0,h.__name)(async(e,t,n,r,d,g)=>{(0,l.log).warn("Graph in recursive render:XAX",u(t),d);let c=t.graph().rankdir;(0,l.log).trace("Dir in recursive render - dir:",c);let f=e.insert("g").attr("class","root");t.nodes()?(0,l.log).info("Recursive render XXX",t.nodes()):(0,l.log).info("No nodes found for",t),t.edges().length>0&&(0,l.log).info("Recursive edges",t.edge(t.edges()[0]));let _=f.insert("g").attr("class","clusters"),v=f.insert("g").attr("class","edgePaths"),w=f.insert("g").attr("class","edgeLabels"),m=f.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(e){let i=t.node(e);if(void 0!==d){let n=JSON.parse(JSON.stringify(d.clusterData));(0,l.log).trace("Setting data for parent cluster XXX\n Node.id = ",e,"\n data=",n.height,"\nParent cluster",d.height),t.setNode(d.id,n),t.parent(e)||((0,l.log).trace("Setting parent",e,d.id),t.setParent(e,d.id,n))}if((0,l.log).info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),i?.clusterNode){(0,l.log).info("Cluster identified XBX",e,i.width,t.node(e));let{ranksep:o,nodesep:a}=t.graph();i.graph.setGraph({...i.graph.graph(),ranksep:o+25,nodesep:a});let d=await S(m,i.graph,n,r,t.node(e),g),h=d.elem;(0,s.updateNodeBounds)(i,h),i.diff=d.diff||0,(0,l.log).info("New compound node after recursive render XAX",e,"width",i.width,"height",i.height),(0,s.setNodeElem)(h,i)}else t.children(e).length>0?((0,l.log).trace("Cluster - the non recursive path XBX",e,i.id,i,i.width,"Graph:",t),(0,l.log).trace(C(i.id,t)),p.set(i.id,{id:C(i.id,t),node:i})):((0,l.log).trace("Node - the non recursive path XAX",e,m,t.node(e),c),await (0,s.insertNode)(m,t.node(e),{config:g,dir:c}))}));let y=/* @__PURE__ */(0,h.__name)(async()=>{let e=t.edges().map(async function(e){let n=t.edge(e.v,e.w,e.name);(0,l.log).info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),(0,l.log).info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),(0,l.log).info("Fix",p,"ids:",e.v,e.w,"Translating: ",p.get(e.v),p.get(e.w)),await (0,i.insertEdgeLabel)(w,n)});await Promise.all(e)},"processEdges");await y(),(0,l.log).info("Graph before layout:",JSON.stringify(u(t))),(0,l.log).info("############################################# XXX"),(0,l.log).info("###                Layout                 ### XXX"),(0,l.log).info("############################################# XXX"),(0,a.layout)(t),(0,l.log).info("Graph after layout:",JSON.stringify(u(t)));let b=0,{subGraphTitleTotalMargin:E}=(0,o.getSubGraphTitleMargins)(g);return await Promise.all(P(t).map(async function(e){let n=t.node(e);if((0,l.log).info("Position XBX => "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n?.clusterNode)n.y+=E,(0,l.log).info("A tainted cluster node XBX1",e,n.id,n.width,n.height,n.x,n.y,t.parent(e)),p.get(n.id).node=n,(0,s.positionNode)(n);else if(t.children(e).length>0){(0,l.log).info("A pure cluster node XBX1",e,n.id,n.x,n.y,n.width,n.height,t.parent(e)),n.height+=E,t.node(n.parentId);let r=n?.padding/2||0,i=n?.labelBBox?.height||0;(0,l.log).debug("OffsetY",i-r||0,"labelHeight",i,"halfPadding",r),await (0,s.insertCluster)(_,n),p.get(n.id).node=n}else{let e=t.node(n.parentId);n.y+=E/2,(0,l.log).info("A regular node XBX1 - using the padding",n.id,"parent",n.parentId,n.width,n.height,n.x,n.y,"offsetY",n.offsetY,"parent",e,e?.offsetY,n),(0,s.positionNode)(n)}})),t.edges().forEach(function(e){let s=t.edge(e);(0,l.log).info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(s),s),s.points.forEach(e=>e.y+=E/2);let o=t.node(e.v);var a=t.node(e.w);let d=(0,i.insertEdge)(v,s,p,n,o,a,r);(0,i.positionEdgeLabel)(s,d)}),t.nodes().forEach(function(e){let n=t.node(e);(0,l.log).info(e,n.type,n.diff),n.isGroup&&(b=n.diff)}),(0,l.log).warn("Returning from recursive render XAX",f,b),{elem:f,diff:b}},"recursiveRender"),I=/* @__PURE__ */(0,h.__name)(async(e,t)=>{let n=new(0,d.Graph)({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:e.config?.nodeSpacing||e.config?.flowchart?.nodeSpacing||e.nodeSpacing,ranksep:e.config?.rankSpacing||e.config?.flowchart?.rankSpacing||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),r=t.select("g");(0,i.markers_default)(r,e.markers,e.type,e.diagramId),(0,s.clear2)(),(0,i.clear)(),(0,s.clear)(),w(),e.nodes.forEach(e=>{n.setNode(e.id,{...e}),e.parentId&&n.setParent(e.id,e.parentId)}),(0,l.log).debug("Edges:",e.edges),e.edges.forEach(e=>{if(e.start===e.end){let t=e.start,r=t+"---"+t+"---1",i=t+"---"+t+"---2",s=n.node(t);n.setNode(r,{domId:r,id:r,parentId:s.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),n.setParent(r,s.parentId),n.setNode(i,{domId:i,id:i,parentId:s.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),n.setParent(i,s.parentId);let o=structuredClone(e),a=structuredClone(e),d=structuredClone(e);o.label="",o.arrowTypeEnd="none",o.id=t+"-cyclic-special-1",a.arrowTypeEnd="none",a.id=t+"-cyclic-special-mid",d.label="",s.isGroup&&(o.fromCluster=t,d.toCluster=t),d.id=t+"-cyclic-special-2",n.setEdge(t,r,o,t+"-cyclic-special-0"),n.setEdge(r,i,a,t+"-cyclic-special-1"),n.setEdge(i,t,d,t+"-cyc<lic-special-2")}else n.setEdge(e.start,e.end,{...e},e.id)}),(0,l.log).warn("Graph at first:",JSON.stringify(u(n))),O(n),(0,l.log).warn("Graph after XAX:",JSON.stringify(u(n)));let o=(0,l.getConfig2)();await S(r,n,e.type,e.diagramId,void 0,o)},"render")}),n("4kWfH",function(n,r){e(n.exports,"Graph",()=>d);var i=t("76RTQ"),s=t("f34bP"),o=t("2266r"),a=t("7xxrv"),d=class{static{(0,a.__name)(this,"Graph")}constructor(e={}){this._isDirected=!Object.prototype.hasOwnProperty.call(e,"directed")||e.directed,this._isMultigraph=!!Object.prototype.hasOwnProperty.call(e,"multigraph")&&e.multigraph,this._isCompound=!!Object.prototype.hasOwnProperty.call(e,"compound")&&e.compound,this._label=void 0,this._defaultNodeLabelFn=(0,o.constant_default)(void 0),this._defaultEdgeLabelFn=(0,o.constant_default)(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children["\0"]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){return this._label=e,this}graph(){return this._label}setDefaultNodeLabel(e){return(0,o.isFunction_default)(e)||(e=(0,o.constant_default)(e)),this._defaultNodeLabelFn=e,this}nodeCount(){return this._nodeCount}nodes(){return(0,i.keys_default)(this._nodes)}sources(){var e=this;return(0,i.filter_default)(this.nodes(),function(t){return(0,s.isEmpty_default)(e._in[t])})}sinks(){var e=this;return(0,i.filter_default)(this.nodes(),function(t){return(0,s.isEmpty_default)(e._out[t])})}setNodes(e,t){var n=arguments,r=this;return(0,i.forEach_default)(e,function(e){n.length>1?r.setNode(e,t):r.setNode(e)}),this}setNode(e,t){return Object.prototype.hasOwnProperty.call(this._nodes,e)?arguments.length>1&&(this._nodes[e]=t):(this._nodes[e]=arguments.length>1?t:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]="\0",this._children[e]={},this._children["\0"][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount),this}node(e){return this._nodes[e]}hasNode(e){return Object.prototype.hasOwnProperty.call(this._nodes,e)}removeNode(e){if(Object.prototype.hasOwnProperty.call(this._nodes,e)){var t=/* @__PURE__ */(0,a.__name)(e=>this.removeEdge(this._edgeObjs[e]),"removeEdge");delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],(0,i.forEach_default)(this.children(e),e=>{this.setParent(e)}),delete this._children[e]),(0,i.forEach_default)((0,i.keys_default)(this._in[e]),t),delete this._in[e],delete this._preds[e],(0,i.forEach_default)((0,i.keys_default)(this._out[e]),t),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this}setParent(e,t){if(!this._isCompound)throw Error("Cannot set parent in a non-compound graph");if((0,i.isUndefined_default)(t))t="\0";else{t+="";for(var n=t;!(0,i.isUndefined_default)(n);n=this.parent(n))if(n===e)throw Error("Setting "+t+" as parent of "+e+" would create a cycle");this.setNode(t)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=t,this._children[t][e]=!0,this}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e]}parent(e){if(this._isCompound){var t=this._parent[e];if("\0"!==t)return t}}children(e){if((0,i.isUndefined_default)(e)&&(e="\0"),this._isCompound){var t=this._children[e];if(t)return(0,i.keys_default)(t)}else if("\0"===e)return this.nodes();else if(this.hasNode(e))return[]}predecessors(e){var t=this._preds[e];if(t)return(0,i.keys_default)(t)}successors(e){var t=this._sucs[e];if(t)return(0,i.keys_default)(t)}neighbors(e){var t=this.predecessors(e);if(t)return(0,i.union_default)(t,this.successors(e))}isLeaf(e){return 0===(this.isDirected()?this.successors(e):this.neighbors(e)).length}filterNodes(e){var t=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});t.setGraph(this.graph());var n=this;(0,i.forEach_default)(this._nodes,function(n,r){e(r)&&t.setNode(r,n)}),(0,i.forEach_default)(this._edgeObjs,function(e){t.hasNode(e.v)&&t.hasNode(e.w)&&t.setEdge(e,n.edge(e))});var r={};function s(e){var i=n.parent(e);return void 0===i||t.hasNode(i)?(r[e]=i,i):i in r?r[i]:s(i)}return(0,a.__name)(s,"findParent"),this._isCompound&&(0,i.forEach_default)(t.nodes(),function(e){t.setParent(e,s(e))}),t}setDefaultEdgeLabel(e){return(0,o.isFunction_default)(e)||(e=(0,o.constant_default)(e)),this._defaultEdgeLabelFn=e,this}edgeCount(){return this._edgeCount}edges(){return(0,i.values_default)(this._edgeObjs)}setPath(e,t){var n=this,r=arguments;return(0,i.reduce_default)(e,function(e,i){return r.length>1?n.setEdge(e,i,t):n.setEdge(e,i),i}),this}setEdge(){var e,t,n,r,s=!1,o=arguments[0];"object"==typeof o&&null!==o&&"v"in o?(e=o.v,t=o.w,n=o.name,2==arguments.length&&(r=arguments[1],s=!0)):(e=o,t=arguments[1],n=arguments[3],arguments.length>2&&(r=arguments[2],s=!0)),e=""+e,t=""+t,(0,i.isUndefined_default)(n)||(n=""+n);var a=h(this._isDirected,e,t,n);if(Object.prototype.hasOwnProperty.call(this._edgeLabels,a))return s&&(this._edgeLabels[a]=r),this;if(!(0,i.isUndefined_default)(n)&&!this._isMultigraph)throw Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(t),this._edgeLabels[a]=s?r:this._defaultEdgeLabelFn(e,t,n);var d=u(this._isDirected,e,t,n);return e=d.v,t=d.w,Object.freeze(d),this._edgeObjs[a]=d,l(this._preds[t],e),l(this._sucs[e],t),this._in[t][a]=d,this._out[e][a]=d,this._edgeCount++,this}edge(e,t,n){var r=1==arguments.length?c(this._isDirected,arguments[0]):h(this._isDirected,e,t,n);return this._edgeLabels[r]}hasEdge(e,t,n){var r=1==arguments.length?c(this._isDirected,arguments[0]):h(this._isDirected,e,t,n);return Object.prototype.hasOwnProperty.call(this._edgeLabels,r)}removeEdge(e,t,n){var r=1==arguments.length?c(this._isDirected,arguments[0]):h(this._isDirected,e,t,n),i=this._edgeObjs[r];return i&&(e=i.v,t=i.w,delete this._edgeLabels[r],delete this._edgeObjs[r],g(this._preds[t],e),g(this._sucs[e],t),delete this._in[t][r],delete this._out[e][r],this._edgeCount--),this}inEdges(e,t){var n=this._in[e];if(n){var r=(0,i.values_default)(n);return t?(0,i.filter_default)(r,function(e){return e.v===t}):r}}outEdges(e,t){var n=this._out[e];if(n){var r=(0,i.values_default)(n);return t?(0,i.filter_default)(r,function(e){return e.w===t}):r}}nodeEdges(e,t){var n=this.inEdges(e,t);if(n)return n.concat(this.outEdges(e,t))}};function l(e,t){e[t]?e[t]++:e[t]=1}function g(e,t){--e[t]||delete e[t]}function h(e,t,n,r){var s=""+t,o=""+n;if(!e&&s>o){var a=s;s=o,o=a}return s+"\x01"+o+"\x01"+((0,i.isUndefined_default)(r)?"\0":r)}function u(e,t,n,r){var i=""+t,s=""+n;if(!e&&i>s){var o=i;i=s,s=o}var a={v:i,w:s};return r&&(a.name=r),a}function c(e,t){return h(e,t.v,t.w,t.name)}d.prototype._nodeCount=0,d.prototype._edgeCount=0,(0,a.__name)(l,"incrementOrInitEntry"),(0,a.__name)(g,"decrementOrRemoveEntry"),(0,a.__name)(h,"edgeArgsToId"),(0,a.__name)(u,"edgeArgsToObj"),(0,a.__name)(c,"edgeObjToId")});
//# sourceMappingURL=dagre-QYZWZBMH.js.map
