function t(t,e,a,i){Object.defineProperty(t,e,{get:a,set:i,enumerable:!0,configurable:!0})}var e=globalThis.parcelRequire94c2,a=e.register;a("kl6KZ",function(a,i){t(a.exports,"diagram",()=>q);var n=e("jAMOj");e("1OUid");var r=e("7hgA6"),s=e("7xxrv"),l=function(){var t=/* @__PURE__ */(0,s.__name)(function(t,e,a,i){for(a=a||{},i=t.length;i--;a[t[i]]=e);return a},"o"),e=[6,8,10,11,12,14,16,17,18],a=[1,9],i=[1,10],n=[1,11],r=[1,12],l=[1,13],o=[1,14],c={trace:/* @__PURE__ */(0,s.__name)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:/* @__PURE__ */(0,s.__name)(function(t,e,a,i,n,r,s){var l=r.length-1;switch(n){case 1:return r[l-1];case 2:case 6:case 7:this.$=[];break;case 3:r[l-1].push(r[l]),this.$=r[l-1];break;case 4:case 5:this.$=r[l];break;case 8:i.setDiagramTitle(r[l].substr(6)),this.$=r[l].substr(6);break;case 9:this.$=r[l].trim(),i.setAccTitle(this.$);break;case 10:case 11:this.$=r[l].trim(),i.setAccDescription(this.$);break;case 12:i.addSection(r[l].substr(8)),this.$=r[l].substr(8);break;case 13:i.addTask(r[l-1],r[l]),this.$="task"}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:a,12:i,14:n,16:r,17:l,18:o},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:a,12:i,14:n,16:r,17:l,18:o},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:/* @__PURE__ */(0,s.__name)(function(t,e){if(e.recoverable)this.trace(t);else{var a=Error(t);throw a.hash=e,a}},"parseError"),parse:/* @__PURE__ */(0,s.__name)(function(t){var e=this,a=[0],i=[],n=[null],r=[],l=this.table,o="",c=0,h=0,u=0,p=r.slice.call(arguments,1),y=Object.create(this.lexer),d={yy:{}};for(var _ in this.yy)Object.prototype.hasOwnProperty.call(this.yy,_)&&(d.yy[_]=this.yy[_]);y.setInput(t,d.yy),d.yy.lexer=y,d.yy.parser=this,void 0===y.yylloc&&(y.yylloc={});var f=y.yylloc;r.push(f);var m=y.options&&y.options.ranges;function g(){var t;return"number"!=typeof(t=i.pop()||y.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,s.__name)(function(t){a.length=a.length-2*t,n.length=n.length-t,r.length=r.length-t},"popStack"),(0,s.__name)(g,"lex");for(var x,k,b,w,v,$,T,M,S,A={};;){if(b=a[a.length-1],this.defaultActions[b]?w=this.defaultActions[b]:(null==x&&(x=g()),w=l[b]&&l[b][x]),void 0===w||!w.length||!w[0]){var E="";for($ in S=[],l[b])this.terminals_[$]&&$>2&&S.push("'"+this.terminals_[$]+"'");E=y.showPosition?"Parse error on line "+(c+1)+":\n"+y.showPosition()+"\nExpecting "+S.join(", ")+", got '"+(this.terminals_[x]||x)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==x?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(E,{text:y.match,token:this.terminals_[x]||x,line:y.yylineno,loc:f,expected:S})}if(w[0]instanceof Array&&w.length>1)throw Error("Parse Error: multiple actions possible at state: "+b+", token: "+x);switch(w[0]){case 1:a.push(x),n.push(y.yytext),r.push(y.yylloc),a.push(w[1]),x=null,k?(x=k,k=null):(h=y.yyleng,o=y.yytext,c=y.yylineno,f=y.yylloc,u>0&&u--);break;case 2:if(T=this.productions_[w[1]][1],A.$=n[n.length-T],A._$={first_line:r[r.length-(T||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(T||1)].first_column,last_column:r[r.length-1].last_column},m&&(A._$.range=[r[r.length-(T||1)].range[0],r[r.length-1].range[1]]),void 0!==(v=this.performAction.apply(A,[o,h,c,d.yy,w[1],n,r].concat(p))))return v;T&&(a=a.slice(0,-1*T*2),n=n.slice(0,-1*T),r=r.slice(0,-1*T)),a.push(this.productions_[w[1]][0]),n.push(A.$),r.push(A._$),M=l[a[a.length-2]][a[a.length-1]],a.push(M);break;case 3:return!0}}return!0},"parse")},h={EOF:1,parseError:/* @__PURE__ */(0,s.__name)(function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},"parseError"),setInput:/* @__PURE__ */(0,s.__name)(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:/* @__PURE__ */(0,s.__name)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:/* @__PURE__ */(0,s.__name)(function(t){var e=t.length,a=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===i.length?this.yylloc.first_column:0)+i[i.length-a.length].length-a[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:/* @__PURE__ */(0,s.__name)(function(){return this._more=!0,this},"more"),reject:/* @__PURE__ */(0,s.__name)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:/* @__PURE__ */(0,s.__name)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:/* @__PURE__ */(0,s.__name)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:/* @__PURE__ */(0,s.__name)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:/* @__PURE__ */(0,s.__name)(function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},"showPosition"),test_match:/* @__PURE__ */(0,s.__name)(function(t,e){var a,i,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],a=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a)return a;if(this._backtrack)for(var r in n)this[r]=n[r];return!1},"test_match"),next:/* @__PURE__ */(0,s.__name)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,a,i,n=this._currentRules(),r=0;r<n.length;r++)if((a=this._input.match(this.rules[n[r]]))&&(!e||a[0].length>e[0].length)){if(e=a,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(a,n[r])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:/* @__PURE__ */(0,s.__name)(function(){return this.next()||this.lex()},"lex"),begin:/* @__PURE__ */(0,s.__name)(function(t){this.conditionStack.push(t)},"begin"),popState:/* @__PURE__ */(0,s.__name)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:/* @__PURE__ */(0,s.__name)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:/* @__PURE__ */(0,s.__name)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:/* @__PURE__ */(0,s.__name)(function(t){this.begin(t)},"pushState"),stateStackSize:/* @__PURE__ */(0,s.__name)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:/* @__PURE__ */(0,s.__name)(function(t,e,a,i){switch(a){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}};function u(){this.yy={}}return c.lexer=h,(0,s.__name)(u,"Parser"),u.prototype=c,c.Parser=u,new u}();l.parser=l;var o="",c=[],h=[],u=[],p=/* @__PURE__ */(0,s.__name)(function(){c.length=0,h.length=0,o="",u.length=0,(0,r.clear)()},"clear"),y=/* @__PURE__ */(0,s.__name)(function(t){o=t,c.push(t)},"addSection"),d=/* @__PURE__ */(0,s.__name)(function(){return c},"getSections"),_=/* @__PURE__ */(0,s.__name)(function(){let t=x(),e=0;for(;!t&&e<100;)t=x(),e++;return h.push(...u),h},"getTasks"),f=/* @__PURE__ */(0,s.__name)(function(){let t=[];return h.forEach(e=>{e.people&&t.push(...e.people)}),[...new Set(t)].sort()},"updateActors"),m=/* @__PURE__ */(0,s.__name)(function(t,e){let a=e.substr(1).split(":"),i=0,n=[];1===a.length?(i=Number(a[0]),n=[]):(i=Number(a[0]),n=a[1].split(","));let r=n.map(t=>t.trim()),s={section:o,type:o,people:r,task:t,score:i};u.push(s)},"addTask"),g=/* @__PURE__ */(0,s.__name)(function(t){let e={section:o,type:o,description:t,task:t,classes:[]};h.push(e)},"addTaskOrg"),x=/* @__PURE__ */(0,s.__name)(function(){let t=/* @__PURE__ */(0,s.__name)(function(t){return u[t].processed},"compileTask"),e=!0;for(let[a,i]of u.entries())t(a),e=e&&i.processed;return e},"compileTasks"),k=/* @__PURE__ */(0,s.__name)(function(){return f()},"getActors"),b={getConfig:/* @__PURE__ */(0,s.__name)(()=>(0,r.getConfig2)().journey,"getConfig"),clear:p,setDiagramTitle:r.setDiagramTitle,getDiagramTitle:r.getDiagramTitle,setAccTitle:r.setAccTitle,getAccTitle:r.getAccTitle,setAccDescription:r.setAccDescription,getAccDescription:r.getAccDescription,addSection:y,getSections:d,getTasks:_,addTask:m,addTaskOrg:g,getActors:k},w=/* @__PURE__ */(0,s.__name)(t=>`.label {
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0?`fill: ${t.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0?`fill: ${t.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0?`fill: ${t.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0?`fill: ${t.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0?`fill: ${t.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0?`fill: ${t.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0?`fill: ${t.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0?`fill: ${t.fillType7}`:""};
  }

  .actor-0 {
    ${t.actor0?`fill: ${t.actor0}`:""};
  }
  .actor-1 {
    ${t.actor1?`fill: ${t.actor1}`:""};
  }
  .actor-2 {
    ${t.actor2?`fill: ${t.actor2}`:""};
  }
  .actor-3 {
    ${t.actor3?`fill: ${t.actor3}`:""};
  }
  .actor-4 {
    ${t.actor4?`fill: ${t.actor4}`:""};
  }
  .actor-5 {
    ${t.actor5?`fill: ${t.actor5}`:""};
  }
`,"getStyles"),v=/* @__PURE__ */(0,s.__name)(function(t,e){return(0,n.drawRect)(t,e)},"drawRect"),$=/* @__PURE__ */(0,s.__name)(function(t,e){let a=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),i=t.append("g");function n(t){let a=(0,r.arc_default)().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(15/2.2);t.append("path").attr("class","mouth").attr("d",a).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}function l(t){let a=(0,r.arc_default)().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(15/2.2);t.append("path").attr("class","mouth").attr("d",a).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}function o(t){t.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return i.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),i.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),(0,s.__name)(n,"smile"),(0,s.__name)(l,"sad"),(0,s.__name)(o,"ambivalent"),e.score>3?n(i):e.score<3?l(i):o(i),a},"drawFace"),T=/* @__PURE__ */(0,s.__name)(function(t,e){let a=t.append("circle");return a.attr("cx",e.cx),a.attr("cy",e.cy),a.attr("class","actor-"+e.pos),a.attr("fill",e.fill),a.attr("stroke",e.stroke),a.attr("r",e.r),void 0!==a.class&&a.attr("class",a.class),void 0!==e.title&&a.append("title").text(e.title),a},"drawCircle"),M=/* @__PURE__ */(0,s.__name)(function(t,e){return(0,n.drawText)(t,e)},"drawText"),S=/* @__PURE__ */(0,s.__name)(function(t,e,a){let i=t.append("g"),r=(0,n.getNoteRect)();r.x=e.x,r.y=e.y,r.fill=e.fill,r.width=a.width*e.taskCount+a.diagramMarginX*(e.taskCount-1),r.height=a.height,r.class="journey-section section-type-"+e.num,r.rx=3,r.ry=3,v(i,r),C(a)(e.text,i,r.x,r.y,r.width,r.height,{class:"journey-section section-type-"+e.num},a,e.colour)},"drawSection"),A=-1,E=/* @__PURE__ */(0,s.__name)(function(t,e,a){let i=e.x+a.width/2,r=t.append("g");A++,r.append("line").attr("id","task"+A).attr("x1",i).attr("y1",e.y).attr("x2",i).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),$(r,{cx:i,cy:300+(5-e.score)*30,score:e.score});let s=(0,n.getNoteRect)();s.x=e.x,s.y=e.y,s.fill=e.fill,s.width=a.width,s.height=a.height,s.class="task task-type-"+e.num,s.rx=3,s.ry=3,v(r,s);let l=e.x+14;e.people.forEach(t=>{let a=e.actors[t].color;T(r,{cx:l,cy:e.y,r:7,fill:a,stroke:"#000",title:t,pos:e.actors[t].position}),l+=10}),C(a)(e.task,r,s.x,s.y,s.width,s.height,{class:"task"},a,e.colour)},"drawTask"),C=/* @__PURE__ */function(){function t(t,e,a,n,r,s,l,o){i(e.append("text").attr("x",a+r/2).attr("y",n+s/2+5).style("font-color",o).style("text-anchor","middle").text(t),l)}function e(t,e,a,n,r,s,l,o,c){let{taskFontSize:h,taskFontFamily:u}=o,p=t.split(/<br\s*\/?>/gi);for(let t=0;t<p.length;t++){let o=t*h-h*(p.length-1)/2,y=e.append("text").attr("x",a+r/2).attr("y",n).attr("fill",c).style("text-anchor","middle").style("font-size",h).style("font-family",u);y.append("tspan").attr("x",a+r/2).attr("dy",o).text(p[t]),y.attr("y",n+s/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),i(y,l)}}function a(t,a,n,r,s,l,o,c){let h=a.append("switch"),u=h.append("foreignObject").attr("x",n).attr("y",r).attr("width",s).attr("height",l).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");u.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,n,r,s,l,o,c),i(u,o)}function i(t,e){for(let a in e)a in e&&t.attr(a,e[a])}return(0,s.__name)(t,"byText"),(0,s.__name)(e,"byTspan"),(0,s.__name)(a,"byFo"),(0,s.__name)(i,"_setTextAttrs"),function(i){return"fo"===i.textPlacement?a:"old"===i.textPlacement?t:e}}(),I={drawCircle:T,drawSection:S,drawText:M,drawTask:E,initGraphics:/* @__PURE__ */(0,s.__name)(function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},"initGraphics")},P=/* @__PURE__ */(0,s.__name)(function(t){Object.keys(t).forEach(function(e){R[e]=t[e]})},"setConf"),j={};function O(t){let e=(0,r.getConfig2)().journey,a=60;Object.keys(j).forEach(i=>{let n=j[i].color,r={cx:20,cy:a,r:7,fill:n,stroke:"#000",pos:j[i].position};I.drawCircle(t,r);let s={x:40,y:a+7,fill:"#666",text:i,textMargin:5|e.boxTextMargin};I.drawText(t,s),a+=20})}(0,s.__name)(O,"drawActorLegend");var R=(0,r.getConfig2)().journey,V=R.leftMargin,D=/* @__PURE__ */(0,s.__name)(function(t,e,a,i){let n;let s=(0,r.getConfig2)().journey,l=(0,r.getConfig2)().securityLevel;"sandbox"===l&&(n=(0,r.select_default)("#i"+e));let o="sandbox"===l?(0,r.select_default)(n.nodes()[0].contentDocument.body):(0,r.select_default)("body");N.init();let c=o.select("#"+e);I.initGraphics(c);let h=i.db.getTasks(),u=i.db.getDiagramTitle(),p=i.db.getActors();for(let t in j)delete j[t];let y=0;p.forEach(t=>{j[t]={color:s.actorColours[y%s.actorColours.length],position:y},y++}),O(c),N.insert(0,0,V,50*Object.keys(j).length),L(c,h,0);let d=N.getBounds();u&&c.append("text").text(u).attr("x",V).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);let _=d.stopy-d.starty+2*s.diagramMarginY,f=V+d.stopx+2*s.diagramMarginX;(0,r.configureSvgSize)(c,_,f,s.useMaxWidth),c.append("line").attr("x1",V).attr("y1",4*s.height).attr("x2",f-V-4).attr("y2",4*s.height).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");let m=u?70:0;c.attr("viewBox",`${d.startx} -25 ${f} ${_+m}`),c.attr("preserveAspectRatio","xMinYMin meet"),c.attr("height",_+m+25)},"draw"),N={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:/* @__PURE__ */(0,s.__name)(function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},"init"),updateVal:/* @__PURE__ */(0,s.__name)(function(t,e,a,i){void 0===t[e]?t[e]=a:t[e]=i(a,t[e])},"updateVal"),updateBounds:/* @__PURE__ */(0,s.__name)(function(t,e,a,i){let n=(0,r.getConfig2)().journey,l=this,o=0;function c(r){return/* @__PURE__ */(0,s.__name)(function(s){o++;let c=l.sequenceItems.length-o+1;l.updateVal(s,"starty",e-c*n.boxMargin,Math.min),l.updateVal(s,"stopy",i+c*n.boxMargin,Math.max),l.updateVal(N.data,"startx",t-c*n.boxMargin,Math.min),l.updateVal(N.data,"stopx",a+c*n.boxMargin,Math.max),"activation"!==r&&(l.updateVal(s,"startx",t-c*n.boxMargin,Math.min),l.updateVal(s,"stopx",a+c*n.boxMargin,Math.max),l.updateVal(N.data,"starty",e-c*n.boxMargin,Math.min),l.updateVal(N.data,"stopy",i+c*n.boxMargin,Math.max))},"updateItemBounds")}(0,s.__name)(c,"updateFn"),this.sequenceItems.forEach(c())},"updateBounds"),insert:/* @__PURE__ */(0,s.__name)(function(t,e,a,i){let n=Math.min(t,a),r=Math.max(t,a),s=Math.min(e,i),l=Math.max(e,i);this.updateVal(N.data,"startx",n,Math.min),this.updateVal(N.data,"starty",s,Math.min),this.updateVal(N.data,"stopx",r,Math.max),this.updateVal(N.data,"stopy",l,Math.max),this.updateBounds(n,s,r,l)},"insert"),bumpVerticalPos:/* @__PURE__ */(0,s.__name)(function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},"bumpVerticalPos"),getVerticalPos:/* @__PURE__ */(0,s.__name)(function(){return this.verticalPos},"getVerticalPos"),getBounds:/* @__PURE__ */(0,s.__name)(function(){return this.data},"getBounds")},F=R.sectionFills,B=R.sectionColours,L=/* @__PURE__ */(0,s.__name)(function(t,e,a){let i=(0,r.getConfig2)().journey,n="",s=a+(2*i.height+i.diagramMarginY),l=0,o="#CCC",c="black",h=0;for(let[a,r]of e.entries()){if(n!==r.section){o=F[l%F.length],h=l%F.length,c=B[l%B.length];let s=0,u=r.section;for(let t=a;t<e.length&&e[t].section==u;t++)s+=1;let p={x:a*i.taskMargin+a*i.width+V,y:50,text:r.section,fill:o,num:h,colour:c,taskCount:s};I.drawSection(t,p,i),n=r.section,l++}let u=r.people.reduce((t,e)=>(j[e]&&(t[e]=j[e]),t),{});r.x=a*i.taskMargin+a*i.width+V,r.y=s,r.width=i.diagramMarginX,r.height=i.diagramMarginY,r.colour=c,r.fill=o,r.num=h,r.actors=u,I.drawTask(t,r,i),N.insert(r.x,r.y,r.x+r.width+i.taskMargin,450)}},"drawTasks"),z={setConf:P,draw:D},q={parser:l,db:b,renderer:z,styles:w,init:/* @__PURE__ */(0,s.__name)(t=>{z.setConf(t.journey),b.clear()},"init")}}),a("jAMOj",function(a,i){t(a.exports,"drawRect",()=>o),t(a.exports,"drawBackgroundRect",()=>c),t(a.exports,"drawText",()=>h),t(a.exports,"drawImage",()=>u),t(a.exports,"drawEmbeddedImage",()=>p),t(a.exports,"getNoteRect",()=>y),t(a.exports,"getTextObj",()=>d);var n=e("1OUid"),r=e("7hgA6"),s=e("7xxrv"),l=(0,s.__toESM)((0,n.require_dist)(),1),o=/* @__PURE__ */(0,s.__name)((t,e)=>{let a=t.append("rect");if(a.attr("x",e.x),a.attr("y",e.y),a.attr("fill",e.fill),a.attr("stroke",e.stroke),a.attr("width",e.width),a.attr("height",e.height),e.name&&a.attr("name",e.name),e.rx&&a.attr("rx",e.rx),e.ry&&a.attr("ry",e.ry),void 0!==e.attrs)for(let t in e.attrs)a.attr(t,e.attrs[t]);return e.class&&a.attr("class",e.class),a},"drawRect"),c=/* @__PURE__ */(0,s.__name)((t,e)=>{o(t,{x:e.startx,y:e.starty,width:e.stopx-e.startx,height:e.stopy-e.starty,fill:e.fill,stroke:e.stroke,class:"rect"}).lower()},"drawBackgroundRect"),h=/* @__PURE__ */(0,s.__name)((t,e)=>{let a=e.text.replace(r.lineBreakRegex," "),i=t.append("text");i.attr("x",e.x),i.attr("y",e.y),i.attr("class","legend"),i.style("text-anchor",e.anchor),e.class&&i.attr("class",e.class);let n=i.append("tspan");return n.attr("x",e.x+2*e.textMargin),n.text(a),i},"drawText"),u=/* @__PURE__ */(0,s.__name)((t,e,a,i)=>{let n=t.append("image");n.attr("x",e),n.attr("y",a);let r=(0,l.sanitizeUrl)(i);n.attr("xlink:href",r)},"drawImage"),p=/* @__PURE__ */(0,s.__name)((t,e,a,i)=>{let n=t.append("use");n.attr("x",e),n.attr("y",a);let r=(0,l.sanitizeUrl)(i);n.attr("xlink:href",`#${r}`)},"drawEmbeddedImage"),y=/* @__PURE__ */(0,s.__name)(()=>({x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}),"getNoteRect"),d=/* @__PURE__ */(0,s.__name)(()=>({x:0,y:0,width:100,height:100,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0}),"getTextObj")});
//# sourceMappingURL=journeyDiagram-3NGHFHQS.js.map
