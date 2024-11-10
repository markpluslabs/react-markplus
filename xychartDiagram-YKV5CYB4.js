var t=globalThis.parcelRequirebb86;(0,t.register)("7ebYF",function(i,e){Object.defineProperty(i.exports,"diagram",{get:()=>Z,set:void 0,enumerable:!0,configurable:!0});var s,a=t("78zRz"),n=t("ci84p"),h=t("fo0kP");t("1OUid");var o=t("7hgA6");t("2266r");var r=t("7xxrv"),l=function(){var t=/* @__PURE__ */(0,r.__name)(function(t,i,e,s){for(e=e||{},s=t.length;s--;e[t[s]]=i);return e},"o"),i=[1,10,12,14,16,18,19,21,23],e=[2,6],s=[1,3],a=[1,5],n=[1,6],h=[1,7],o=[1,5,10,12,14,16,18,19,21,23,34,35,36],l=[1,25],c=[1,26],g=[1,28],u=[1,29],x=[1,30],d=[1,31],p=[1,32],m=[1,33],f=[1,34],y=[1,35],_=[1,36],b=[1,37],A=[1,43],S=[1,42],C=[1,47],w=[1,50],k=[1,10,12,14,16,18,19,21,23,34,35,36],T=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36],R=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36,41,42,43,44,45,46,47,48,49,50],D=[1,64],L={trace:/* @__PURE__ */(0,r.__name)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,eol:4,XYCHART:5,chartConfig:6,document:7,CHART_ORIENTATION:8,statement:9,title:10,text:11,X_AXIS:12,parseXAxis:13,Y_AXIS:14,parseYAxis:15,LINE:16,plotData:17,BAR:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,SQUARE_BRACES_START:24,commaSeparatedNumbers:25,SQUARE_BRACES_END:26,NUMBER_WITH_DECIMAL:27,COMMA:28,xAxisData:29,bandData:30,ARROW_DELIMITER:31,commaSeparatedTexts:32,yAxisData:33,NEWLINE:34,SEMI:35,EOF:36,alphaNum:37,STR:38,MD_STR:39,alphaNumToken:40,AMP:41,NUM:42,ALPHA:43,PLUS:44,EQUALS:45,MULT:46,DOT:47,BRKT:48,MINUS:49,UNDERSCORE:50,$accept:0,$end:1},terminals_:{2:"error",5:"XYCHART",8:"CHART_ORIENTATION",10:"title",12:"X_AXIS",14:"Y_AXIS",16:"LINE",18:"BAR",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"SQUARE_BRACES_START",26:"SQUARE_BRACES_END",27:"NUMBER_WITH_DECIMAL",28:"COMMA",31:"ARROW_DELIMITER",34:"NEWLINE",35:"SEMI",36:"EOF",38:"STR",39:"MD_STR",41:"AMP",42:"NUM",43:"ALPHA",44:"PLUS",45:"EQUALS",46:"MULT",47:"DOT",48:"BRKT",49:"MINUS",50:"UNDERSCORE"},productions_:[0,[3,2],[3,3],[3,2],[3,1],[6,1],[7,0],[7,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,3],[9,2],[9,3],[9,2],[9,2],[9,1],[17,3],[25,3],[25,1],[13,1],[13,2],[13,1],[29,1],[29,3],[30,3],[32,3],[32,1],[15,1],[15,2],[15,1],[33,3],[4,1],[4,1],[4,1],[11,1],[11,1],[11,1],[37,1],[37,2],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1]],performAction:/* @__PURE__ */(0,r.__name)(function(t,i,e,s,a,n,h){var o=n.length-1;switch(a){case 5:s.setOrientation(n[o]);break;case 9:s.setDiagramTitle(n[o].text.trim());break;case 12:s.setLineData({text:"",type:"text"},n[o]);break;case 13:s.setLineData(n[o-1],n[o]);break;case 14:s.setBarData({text:"",type:"text"},n[o]);break;case 15:s.setBarData(n[o-1],n[o]);break;case 16:this.$=n[o].trim(),s.setAccTitle(this.$);break;case 17:case 18:this.$=n[o].trim(),s.setAccDescription(this.$);break;case 19:case 27:this.$=n[o-1];break;case 20:this.$=[Number(n[o-2]),...n[o]];break;case 21:this.$=[Number(n[o])];break;case 22:s.setXAxisTitle(n[o]);break;case 23:s.setXAxisTitle(n[o-1]);break;case 24:s.setXAxisTitle({type:"text",text:""});break;case 25:s.setXAxisBand(n[o]);break;case 26:s.setXAxisRangeData(Number(n[o-2]),Number(n[o]));break;case 28:this.$=[n[o-2],...n[o]];break;case 29:this.$=[n[o]];break;case 30:s.setYAxisTitle(n[o]);break;case 31:s.setYAxisTitle(n[o-1]);break;case 32:s.setYAxisTitle({type:"text",text:""});break;case 33:s.setYAxisRangeData(Number(n[o-2]),Number(n[o]));break;case 37:case 38:this.$={text:n[o],type:"text"};break;case 39:this.$={text:n[o],type:"markdown"};break;case 40:this.$=n[o];break;case 41:this.$=n[o-1]+""+n[o]}},"anonymous"),table:[t(i,e,{3:1,4:2,7:4,5:s,34:a,35:n,36:h}),{1:[3]},t(i,e,{4:2,7:4,3:8,5:s,34:a,35:n,36:h}),t(i,e,{4:2,7:4,6:9,3:10,5:s,8:[1,11],34:a,35:n,36:h}),{1:[2,4],9:12,10:[1,13],12:[1,14],14:[1,15],16:[1,16],18:[1,17],19:[1,18],21:[1,19],23:[1,20]},t(o,[2,34]),t(o,[2,35]),t(o,[2,36]),{1:[2,1]},t(i,e,{4:2,7:4,3:21,5:s,34:a,35:n,36:h}),{1:[2,3]},t(o,[2,5]),t(i,[2,7],{4:22,34:a,35:n,36:h}),{11:23,37:24,38:l,39:c,40:27,41:g,42:u,43:x,44:d,45:p,46:m,47:f,48:y,49:_,50:b},{11:39,13:38,24:A,27:S,29:40,30:41,37:24,38:l,39:c,40:27,41:g,42:u,43:x,44:d,45:p,46:m,47:f,48:y,49:_,50:b},{11:45,15:44,27:C,33:46,37:24,38:l,39:c,40:27,41:g,42:u,43:x,44:d,45:p,46:m,47:f,48:y,49:_,50:b},{11:49,17:48,24:w,37:24,38:l,39:c,40:27,41:g,42:u,43:x,44:d,45:p,46:m,47:f,48:y,49:_,50:b},{11:52,17:51,24:w,37:24,38:l,39:c,40:27,41:g,42:u,43:x,44:d,45:p,46:m,47:f,48:y,49:_,50:b},{20:[1,53]},{22:[1,54]},t(k,[2,18]),{1:[2,2]},t(k,[2,8]),t(k,[2,9]),t(T,[2,37],{40:55,41:g,42:u,43:x,44:d,45:p,46:m,47:f,48:y,49:_,50:b}),t(T,[2,38]),t(T,[2,39]),t(R,[2,40]),t(R,[2,42]),t(R,[2,43]),t(R,[2,44]),t(R,[2,45]),t(R,[2,46]),t(R,[2,47]),t(R,[2,48]),t(R,[2,49]),t(R,[2,50]),t(R,[2,51]),t(k,[2,10]),t(k,[2,22],{30:41,29:56,24:A,27:S}),t(k,[2,24]),t(k,[2,25]),{31:[1,57]},{11:59,32:58,37:24,38:l,39:c,40:27,41:g,42:u,43:x,44:d,45:p,46:m,47:f,48:y,49:_,50:b},t(k,[2,11]),t(k,[2,30],{33:60,27:C}),t(k,[2,32]),{31:[1,61]},t(k,[2,12]),{17:62,24:w},{25:63,27:D},t(k,[2,14]),{17:65,24:w},t(k,[2,16]),t(k,[2,17]),t(R,[2,41]),t(k,[2,23]),{27:[1,66]},{26:[1,67]},{26:[2,29],28:[1,68]},t(k,[2,31]),{27:[1,69]},t(k,[2,13]),{26:[1,70]},{26:[2,21],28:[1,71]},t(k,[2,15]),t(k,[2,26]),t(k,[2,27]),{11:59,32:72,37:24,38:l,39:c,40:27,41:g,42:u,43:x,44:d,45:p,46:m,47:f,48:y,49:_,50:b},t(k,[2,33]),t(k,[2,19]),{25:73,27:D},{26:[2,28]},{26:[2,20]}],defaultActions:{8:[2,1],10:[2,3],21:[2,2],72:[2,28],73:[2,20]},parseError:/* @__PURE__ */(0,r.__name)(function(t,i){if(i.recoverable)this.trace(t);else{var e=Error(t);throw e.hash=i,e}},"parseError"),parse:/* @__PURE__ */(0,r.__name)(function(t){var i=this,e=[0],s=[],a=[null],n=[],h=this.table,o="",l=0,c=0,g=0,u=n.slice.call(arguments,1),x=Object.create(this.lexer),d={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(d.yy[p]=this.yy[p]);x.setInput(t,d.yy),d.yy.lexer=x,d.yy.parser=this,void 0===x.yylloc&&(x.yylloc={});var m=x.yylloc;n.push(m);var f=x.options&&x.options.ranges;function y(){var t;return"number"!=typeof(t=s.pop()||x.lex()||1)&&(t instanceof Array&&(t=(s=t).pop()),t=i.symbols_[t]||t),t}"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,r.__name)(function(t){e.length=e.length-2*t,a.length=a.length-t,n.length=n.length-t},"popStack"),(0,r.__name)(y,"lex");for(var _,b,A,S,C,w,k,T,R,D={};;){if(A=e[e.length-1],this.defaultActions[A]?S=this.defaultActions[A]:(null==_&&(_=y()),S=h[A]&&h[A][_]),void 0===S||!S.length||!S[0]){var L="";for(w in R=[],h[A])this.terminals_[w]&&w>2&&R.push("'"+this.terminals_[w]+"'");L=x.showPosition?"Parse error on line "+(l+1)+":\n"+x.showPosition()+"\nExpecting "+R.join(", ")+", got '"+(this.terminals_[_]||_)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==_?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(L,{text:x.match,token:this.terminals_[_]||_,line:x.yylineno,loc:m,expected:R})}if(S[0]instanceof Array&&S.length>1)throw Error("Parse Error: multiple actions possible at state: "+A+", token: "+_);switch(S[0]){case 1:e.push(_),a.push(x.yytext),n.push(x.yylloc),e.push(S[1]),_=null,b?(_=b,b=null):(c=x.yyleng,o=x.yytext,l=x.yylineno,m=x.yylloc,g>0&&g--);break;case 2:if(k=this.productions_[S[1]][1],D.$=a[a.length-k],D._$={first_line:n[n.length-(k||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(k||1)].first_column,last_column:n[n.length-1].last_column},f&&(D._$.range=[n[n.length-(k||1)].range[0],n[n.length-1].range[1]]),void 0!==(C=this.performAction.apply(D,[o,c,l,d.yy,S[1],a,n].concat(u))))return C;k&&(e=e.slice(0,-1*k*2),a=a.slice(0,-1*k),n=n.slice(0,-1*k)),e.push(this.productions_[S[1]][0]),a.push(D.$),n.push(D._$),T=h[e[e.length-2]][e[e.length-1]],e.push(T);break;case 3:return!0}}return!0},"parse")},P={EOF:1,parseError:/* @__PURE__ */(0,r.__name)(function(t,i){if(this.yy.parser)this.yy.parser.parseError(t,i);else throw Error(t)},"parseError"),setInput:/* @__PURE__ */(0,r.__name)(function(t,i){return this.yy=i||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:/* @__PURE__ */(0,r.__name)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:/* @__PURE__ */(0,r.__name)(function(t){var i=t.length,e=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-i),this.offset-=i;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),e.length-1&&(this.yylineno-=e.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:e?(e.length===s.length?this.yylloc.first_column:0)+s[s.length-e.length].length-e[0].length:this.yylloc.first_column-i},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-i]),this.yyleng=this.yytext.length,this},"unput"),more:/* @__PURE__ */(0,r.__name)(function(){return this._more=!0,this},"more"),reject:/* @__PURE__ */(0,r.__name)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:/* @__PURE__ */(0,r.__name)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:/* @__PURE__ */(0,r.__name)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:/* @__PURE__ */(0,r.__name)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:/* @__PURE__ */(0,r.__name)(function(){var t=this.pastInput(),i=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+i+"^"},"showPosition"),test_match:/* @__PURE__ */(0,r.__name)(function(t,i){var e,s,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),(s=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,i,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e)return e;if(this._backtrack)for(var n in a)this[n]=a[n];return!1},"test_match"),next:/* @__PURE__ */(0,r.__name)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,i,e,s,a=this._currentRules(),n=0;n<a.length;n++)if((e=this._input.match(this.rules[a[n]]))&&(!i||e[0].length>i[0].length)){if(i=e,s=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(e,a[n])))return t;if(!this._backtrack)return!1;i=!1;continue}if(!this.options.flex)break}return i?!1!==(t=this.test_match(i,a[s]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:/* @__PURE__ */(0,r.__name)(function(){return this.next()||this.lex()},"lex"),begin:/* @__PURE__ */(0,r.__name)(function(t){this.conditionStack.push(t)},"begin"),popState:/* @__PURE__ */(0,r.__name)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:/* @__PURE__ */(0,r.__name)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:/* @__PURE__ */(0,r.__name)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:/* @__PURE__ */(0,r.__name)(function(t){this.begin(t)},"pushState"),stateStackSize:/* @__PURE__ */(0,r.__name)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:/* @__PURE__ */(0,r.__name)(function(t,i,e,s){switch(e){case 0:case 1:case 5:case 43:break;case 2:case 3:return this.popState(),34;case 4:return 34;case 6:return 10;case 7:return this.pushState("acc_title"),19;case 8:return this.popState(),"acc_title_value";case 9:return this.pushState("acc_descr"),21;case 10:return this.popState(),"acc_descr_value";case 11:this.pushState("acc_descr_multiline");break;case 12:case 25:case 27:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 5;case 15:return 8;case 16:return this.pushState("axis_data"),"X_AXIS";case 17:return this.pushState("axis_data"),"Y_AXIS";case 18:return this.pushState("axis_band_data"),24;case 19:return 31;case 20:return this.pushState("data"),16;case 21:return this.pushState("data"),18;case 22:return this.pushState("data_inner"),24;case 23:return 27;case 24:return this.popState(),26;case 26:this.pushState("string");break;case 28:return"STR";case 29:return 24;case 30:return 26;case 31:return 43;case 32:return"COLON";case 33:return 44;case 34:return 28;case 35:return 45;case 36:return 46;case 37:return 48;case 38:return 50;case 39:return 47;case 40:return 41;case 41:return 49;case 42:return 42;case 44:return 35;case 45:return 36}},"anonymous"),rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:(\r?\n))/i,/^(?:(\r?\n))/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:\{)/i,/^(?:[^\}]*)/i,/^(?:xychart-beta\b)/i,/^(?:(?:vertical|horizontal))/i,/^(?:x-axis\b)/i,/^(?:y-axis\b)/i,/^(?:\[)/i,/^(?:-->)/i,/^(?:line\b)/i,/^(?:bar\b)/i,/^(?:\[)/i,/^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i,/^(?:\])/i,/^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s+)/i,/^(?:;)/i,/^(?:$)/i],conditions:{data_inner:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,23,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},data:{rules:[0,1,3,4,5,6,7,9,11,14,15,16,17,20,21,22,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_band_data:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_data:{rules:[0,1,2,4,5,6,7,9,11,14,15,16,17,18,19,20,21,23,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[],inclusive:!1},md_string:{rules:[],inclusive:!1},string:{rules:[27,28],inclusive:!1},INITIAL:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0}}};function E(){this.yy={}}return L.lexer=P,(0,r.__name)(E,"Parser"),E.prototype=L,L.Parser=E,new E}();function c(t){return"bar"===t.type}function g(t){return"band"===t.type}function u(t){return"linear"===t.type}l.parser=l,(0,r.__name)(c,"isBarPlot"),(0,r.__name)(g,"isBandAxisData"),(0,r.__name)(u,"isLinearAxisData");var x=class{constructor(t){this.parentGroup=t}static{(0,r.__name)(this,"TextDimensionCalculatorWithFont")}getMaxDimension(t,i){if(!this.parentGroup)return{width:t.reduce((t,i)=>Math.max(i.length,t),0)*i,height:i};let e={width:0,height:0},s=this.parentGroup.append("g").attr("visibility","hidden").attr("font-size",i);for(let a of t){let t=(0,n.computeDimensionOfText)(s,1,a),h=t?t.width:a.length*i,o=t?t.height:i;e.width=Math.max(e.width,h),e.height=Math.max(e.height,o)}return s.remove(),e}},d=class{constructor(t,i,e,s){this.axisConfig=t,this.title=i,this.textDimensionCalculator=e,this.axisThemeConfig=s,this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left",this.showTitle=!1,this.showLabel=!1,this.showTick=!1,this.showAxisLine=!1,this.outerPadding=0,this.titleTextHeight=0,this.labelTextHeight=0,this.range=[0,10],this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left"}static{(0,r.__name)(this,"BaseAxis")}setRange(t){this.range=t,"left"===this.axisPosition||"right"===this.axisPosition?this.boundingRect.height=t[1]-t[0]:this.boundingRect.width=t[1]-t[0],this.recalculateScale()}getRange(){return[this.range[0]+this.outerPadding,this.range[1]-this.outerPadding]}setAxisPosition(t){this.axisPosition=t,this.setRange(this.range)}getTickDistance(){let t=this.getRange();return Math.abs(t[0]-t[1])/this.getTickValues().length}getAxisOuterPadding(){return this.outerPadding}getLabelDimension(){return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map(t=>t.toString()),this.axisConfig.labelFontSize)}recalculateOuterPaddingToDrawBar(){.7*this.getTickDistance()>2*this.outerPadding&&(this.outerPadding=Math.floor(.7*this.getTickDistance()/2)),this.recalculateScale()}calculateSpaceIfDrawnHorizontally(t){let i=t.height;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){let e=this.getLabelDimension(),s=.2*t.width;this.outerPadding=Math.min(e.width/2,s);let a=e.height+2*this.axisConfig.labelPadding;this.labelTextHeight=e.height,a<=i&&(i-=a,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){let t=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),e=t.height+2*this.axisConfig.titlePadding;this.titleTextHeight=t.height,e<=i&&(i-=e,this.showTitle=!0)}this.boundingRect.width=t.width,this.boundingRect.height=t.height-i}calculateSpaceIfDrawnVertical(t){let i=t.width;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){let e=this.getLabelDimension(),s=.2*t.height;this.outerPadding=Math.min(e.height/2,s);let a=e.width+2*this.axisConfig.labelPadding;a<=i&&(i-=a,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){let t=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),e=t.height+2*this.axisConfig.titlePadding;this.titleTextHeight=t.height,e<=i&&(i-=e,this.showTitle=!0)}this.boundingRect.width=t.width-i,this.boundingRect.height=t.height}calculateSpace(t){return"left"===this.axisPosition||"right"===this.axisPosition?this.calculateSpaceIfDrawnVertical(t):this.calculateSpaceIfDrawnHorizontally(t),this.recalculateScale(),{width:this.boundingRect.width,height:this.boundingRect.height}}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}getDrawableElementsForLeftAxis(){let t=[];if(this.showAxisLine){let i=this.boundingRect.x+this.boundingRect.width-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["left-axis","axisl-line"],data:[{path:`M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y+this.boundingRect.height} `,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["left-axis","label"],data:this.getTickValues().map(t=>({text:t.toString(),x:this.boundingRect.x+this.boundingRect.width-(this.showLabel?this.axisConfig.labelPadding:0)-(this.showTick?this.axisConfig.tickLength:0)-(this.showAxisLine?this.axisConfig.axisLineWidth:0),y:this.getScaleValue(t),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"middle",horizontalPos:"right"}))}),this.showTick){let i=this.boundingRect.x+this.boundingRect.width-(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["left-axis","ticks"],data:this.getTickValues().map(t=>({path:`M ${i},${this.getScaleValue(t)} L ${i-this.axisConfig.tickLength},${this.getScaleValue(t)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["left-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.axisConfig.titlePadding,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:270,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForBottomAxis(){let t=[];if(this.showAxisLine){let i=this.boundingRect.y+this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["bottom-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["bottom-axis","label"],data:this.getTickValues().map(t=>({text:t.toString(),x:this.getScaleValue(t),y:this.boundingRect.y+this.axisConfig.labelPadding+(this.showTick?this.axisConfig.tickLength:0)+(this.showAxisLine?this.axisConfig.axisLineWidth:0),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){let i=this.boundingRect.y+(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["bottom-axis","ticks"],data:this.getTickValues().map(t=>({path:`M ${this.getScaleValue(t)},${i} L ${this.getScaleValue(t)},${i+this.axisConfig.tickLength}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["bottom-axis","title"],data:[{text:this.title,x:this.range[0]+(this.range[1]-this.range[0])/2,y:this.boundingRect.y+this.boundingRect.height-this.axisConfig.titlePadding-this.titleTextHeight,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForTopAxis(){let t=[];if(this.showAxisLine){let i=this.boundingRect.y+this.boundingRect.height-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["top-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["top-axis","label"],data:this.getTickValues().map(t=>({text:t.toString(),x:this.getScaleValue(t),y:this.boundingRect.y+(this.showTitle?this.titleTextHeight+2*this.axisConfig.titlePadding:0)+this.axisConfig.labelPadding,fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){let i=this.boundingRect.y;t.push({type:"path",groupTexts:["top-axis","ticks"],data:this.getTickValues().map(t=>({path:`M ${this.getScaleValue(t)},${i+this.boundingRect.height-(this.showAxisLine?this.axisConfig.axisLineWidth:0)} L ${this.getScaleValue(t)},${i+this.boundingRect.height-this.axisConfig.tickLength-(this.showAxisLine?this.axisConfig.axisLineWidth:0)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["top-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.axisConfig.titlePadding,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElements(){if("left"===this.axisPosition)return this.getDrawableElementsForLeftAxis();if("right"===this.axisPosition)throw Error("Drawing of right axis is not implemented");return"bottom"===this.axisPosition?this.getDrawableElementsForBottomAxis():"top"===this.axisPosition?this.getDrawableElementsForTopAxis():[]}},p=class extends d{static{(0,r.__name)(this,"BandAxis")}constructor(t,i,e,s,a){super(t,s,a,i),this.categories=e,this.scale=(0,o.band)().domain(this.categories).range(this.getRange())}setRange(t){super.setRange(t)}recalculateScale(){this.scale=(0,o.band)().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(.5),(0,o.log).trace("BandAxis axis final categories, range: ",this.categories,this.getRange())}getTickValues(){return this.categories}getScaleValue(t){return this.scale(t)??this.getRange()[0]}},m=class extends d{static{(0,r.__name)(this,"LinearAxis")}constructor(t,i,e,s,a){super(t,s,a,i),this.domain=e,this.scale=(0,o.linear)().domain(this.domain).range(this.getRange())}getTickValues(){return this.scale.ticks()}recalculateScale(){let t=[...this.domain];"left"===this.axisPosition&&t.reverse(),this.scale=(0,o.linear)().domain(t).range(this.getRange())}getScaleValue(t){return this.scale(t)}};function f(t,i,e,s){let a=new x(s);return g(t)?new p(i,e,t.categories,t.title,a):new m(i,e,[t.min,t.max],t.title,a)}(0,r.__name)(f,"getAxis");var y=class{constructor(t,i,e,s){this.textDimensionCalculator=t,this.chartConfig=i,this.chartData=e,this.chartThemeConfig=s,this.boundingRect={x:0,y:0,width:0,height:0},this.showChartTitle=!1}static{(0,r.__name)(this,"ChartTitle")}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){let i=this.textDimensionCalculator.getMaxDimension([this.chartData.title],this.chartConfig.titleFontSize),e=Math.max(i.width,t.width),s=i.height+2*this.chartConfig.titlePadding;return i.width<=e&&i.height<=s&&this.chartConfig.showTitle&&this.chartData.title&&(this.boundingRect.width=e,this.boundingRect.height=s,this.showChartTitle=!0),{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){let t=[];return this.showChartTitle&&t.push({groupTexts:["chart-title"],type:"text",data:[{fontSize:this.chartConfig.titleFontSize,text:this.chartData.title,verticalPos:"middle",horizontalPos:"center",x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.chartThemeConfig.titleColor,rotation:0}]}),t}};function _(t,i,e,s){return new y(new x(s),t,i,e)}(0,r.__name)(_,"getChartTitleComponent");var b=class{constructor(t,i,e,s,a){this.plotData=t,this.xAxis=i,this.yAxis=e,this.orientation=s,this.plotIndex=a}static{(0,r.__name)(this,"LinePlot")}getDrawableElement(){let t;let i=this.plotData.data.map(t=>[this.xAxis.getScaleValue(t[0]),this.yAxis.getScaleValue(t[1])]);return(t="horizontal"===this.orientation?(0,o.line_default)().y(t=>t[0]).x(t=>t[1])(i):(0,o.line_default)().x(t=>t[0]).y(t=>t[1])(i))?[{groupTexts:["plot",`line-plot-${this.plotIndex}`],type:"path",data:[{path:t,strokeFill:this.plotData.strokeFill,strokeWidth:this.plotData.strokeWidth}]}]:[]}},A=class{constructor(t,i,e,s,a,n){this.barData=t,this.boundingRect=i,this.xAxis=e,this.yAxis=s,this.orientation=a,this.plotIndex=n}static{(0,r.__name)(this,"BarPlot")}getDrawableElement(){let t=this.barData.data.map(t=>[this.xAxis.getScaleValue(t[0]),this.yAxis.getScaleValue(t[1])]),i=.95*Math.min(2*this.xAxis.getAxisOuterPadding(),this.xAxis.getTickDistance()),e=i/2;return"horizontal"===this.orientation?[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(t=>({x:this.boundingRect.x,y:t[0]-e,height:i,width:t[1]-this.boundingRect.x,fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]:[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(t=>({x:t[0]-e,y:t[1],width:i,height:this.boundingRect.y+this.boundingRect.height-t[1],fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]}},S=class{constructor(t,i,e){this.chartConfig=t,this.chartData=i,this.chartThemeConfig=e,this.boundingRect={x:0,y:0,width:0,height:0}}static{(0,r.__name)(this,"BasePlot")}setAxes(t,i){this.xAxis=t,this.yAxis=i}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){return this.boundingRect.width=t.width,this.boundingRect.height=t.height,{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){if(!(this.xAxis&&this.yAxis))throw Error("Axes must be passed to render Plots");let t=[];for(let[i,e]of this.chartData.plots.entries())switch(e.type){case"line":{let s=new b(e,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...s.getDrawableElement())}break;case"bar":{let s=new A(e,this.boundingRect,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...s.getDrawableElement())}}return t}};function C(t,i,e){return new S(t,i,e)}(0,r.__name)(C,"getPlotComponent");var w=class{constructor(t,i,e,s){this.chartConfig=t,this.chartData=i,this.componentStore={title:_(t,i,e,s),plot:C(t,i,e),xAxis:f(i.xAxis,t.xAxis,{titleColor:e.xAxisTitleColor,labelColor:e.xAxisLabelColor,tickColor:e.xAxisTickColor,axisLineColor:e.xAxisLineColor},s),yAxis:f(i.yAxis,t.yAxis,{titleColor:e.yAxisTitleColor,labelColor:e.yAxisLabelColor,tickColor:e.yAxisTickColor,axisLineColor:e.yAxisLineColor},s)}}static{(0,r.__name)(this,"Orchestrator")}calculateVerticalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,e=0,s=0,a=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),n=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),h=this.componentStore.plot.calculateSpace({width:a,height:n});t-=h.width,i-=h.height,s=(h=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i})).height,i-=h.height,this.componentStore.xAxis.setAxisPosition("bottom"),h=this.componentStore.xAxis.calculateSpace({width:t,height:i}),i-=h.height,this.componentStore.yAxis.setAxisPosition("left"),e=(h=this.componentStore.yAxis.calculateSpace({width:t,height:i})).width,(t-=h.width)>0&&(a+=t,t=0),i>0&&(n+=i,i=0),this.componentStore.plot.calculateSpace({width:a,height:n}),this.componentStore.plot.setBoundingBoxXY({x:e,y:s}),this.componentStore.xAxis.setRange([e,e+a]),this.componentStore.xAxis.setBoundingBoxXY({x:e,y:s+n}),this.componentStore.yAxis.setRange([s,s+n]),this.componentStore.yAxis.setBoundingBoxXY({x:0,y:s}),this.chartData.plots.some(t=>c(t))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateHorizontalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,e=0,s=0,a=0,n=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),h=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),o=this.componentStore.plot.calculateSpace({width:n,height:h});t-=o.width,i-=o.height,e=(o=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i})).height,i-=o.height,this.componentStore.xAxis.setAxisPosition("left"),o=this.componentStore.xAxis.calculateSpace({width:t,height:i}),t-=o.width,s=o.width,this.componentStore.yAxis.setAxisPosition("top"),o=this.componentStore.yAxis.calculateSpace({width:t,height:i}),i-=o.height,a=e+o.height,t>0&&(n+=t,t=0),i>0&&(h+=i,i=0),this.componentStore.plot.calculateSpace({width:n,height:h}),this.componentStore.plot.setBoundingBoxXY({x:s,y:a}),this.componentStore.yAxis.setRange([s,s+n]),this.componentStore.yAxis.setBoundingBoxXY({x:s,y:e}),this.componentStore.xAxis.setRange([a,a+h]),this.componentStore.xAxis.setBoundingBoxXY({x:0,y:a}),this.chartData.plots.some(t=>c(t))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateSpace(){"horizontal"===this.chartConfig.chartOrientation?this.calculateHorizontalSpace():this.calculateVerticalSpace()}getDrawableElement(){this.calculateSpace();let t=[];for(let i of(this.componentStore.plot.setAxes(this.componentStore.xAxis,this.componentStore.yAxis),Object.values(this.componentStore)))t.push(...i.getDrawableElements());return t}},k=class{static{(0,r.__name)(this,"XYChartBuilder")}static build(t,i,e,s){return new w(t,i,e,s).getDrawableElement()}},T=0,R=M(),D=I(),L=$(),P=D.plotColorPalette.split(",").map(t=>t.trim()),E=!1,v=!1;function I(){let t=(0,o.getThemeVariables)(),i=(0,o.getConfig)();return(0,h.cleanAndMerge)(t.xyChart,i.themeVariables.xyChart)}function M(){let t=(0,o.getConfig)();return(0,h.cleanAndMerge)(o.defaultConfig_default.xyChart,t.xyChart)}function $(){return{yAxis:{type:"linear",title:"",min:1/0,max:-1/0},xAxis:{type:"band",title:"",categories:[]},title:"",plots:[]}}function B(t){let i=(0,o.getConfig)();return(0,o.sanitizeText)(t.trim(),i)}function z(t){s=t}function O(t){"horizontal"===t?R.chartOrientation="horizontal":R.chartOrientation="vertical"}function W(t){L.xAxis.title=B(t.text)}function F(t,i){L.xAxis={type:"linear",title:L.xAxis.title,min:t,max:i},E=!0}function N(t){L.xAxis={type:"band",title:L.xAxis.title,categories:t.map(t=>B(t.text))},E=!0}function V(t){L.yAxis.title=B(t.text)}function X(t,i){L.yAxis={type:"linear",title:L.yAxis.title,min:t,max:i},v=!0}function Y(t){let i=Math.min(...t),e=Math.max(...t),s=u(L.yAxis)?L.yAxis.min:1/0,a=u(L.yAxis)?L.yAxis.max:-1/0;L.yAxis={type:"linear",title:L.yAxis.title,min:Math.min(s,i),max:Math.max(a,e)}}function U(t){let i=[];if(0===t.length)return i;if(E||F(Math.min(u(L.xAxis)?L.xAxis.min:1/0,1),Math.max(u(L.xAxis)?L.xAxis.max:-1/0,t.length)),v||Y(t),g(L.xAxis)&&(i=L.xAxis.categories.map((i,e)=>[i,t[e]])),u(L.xAxis)){let e=L.xAxis.min,s=L.xAxis.max,a=(s-e)/(t.length-1),n=[];for(let t=e;t<=s;t+=a)n.push(`${t}`);i=n.map((i,e)=>[i,t[e]])}return i}function H(t){return P[0===t?0:t%P.length]}function j(t,i){let e=U(i);L.plots.push({type:"line",strokeFill:H(T),strokeWidth:2,data:e}),T++}function G(t,i){let e=U(i);L.plots.push({type:"bar",fill:H(T),data:e}),T++}function Q(){if(0===L.plots.length)throw Error("No Plot to render, please provide a plot with some data");return L.title=(0,o.getDiagramTitle)(),k.build(R,L,D,s)}function K(){return D}function q(){return R}(0,r.__name)(I,"getChartDefaultThemeConfig"),(0,r.__name)(M,"getChartDefaultConfig"),(0,r.__name)($,"getChartDefaultData"),(0,r.__name)(B,"textSanitizer"),(0,r.__name)(z,"setTmpSVGG"),(0,r.__name)(O,"setOrientation"),(0,r.__name)(W,"setXAxisTitle"),(0,r.__name)(F,"setXAxisRangeData"),(0,r.__name)(N,"setXAxisBand"),(0,r.__name)(V,"setYAxisTitle"),(0,r.__name)(X,"setYAxisRangeData"),(0,r.__name)(Y,"setYAxisRangeFromPlotData"),(0,r.__name)(U,"transformDataWithoutCategory"),(0,r.__name)(H,"getPlotColorFromPalette"),(0,r.__name)(j,"setLineData"),(0,r.__name)(G,"setBarData"),(0,r.__name)(Q,"getDrawableElem"),(0,r.__name)(K,"getChartThemeConfig"),(0,r.__name)(q,"getChartConfig");var Z={parser:l,db:{getDrawableElem:Q,clear:/* @__PURE__ */(0,r.__name)(function(){(0,o.clear)(),T=0,R=M(),L=$(),P=(D=I()).plotColorPalette.split(",").map(t=>t.trim()),E=!1,v=!1},"clear"),setAccTitle:o.setAccTitle,getAccTitle:o.getAccTitle,setDiagramTitle:o.setDiagramTitle,getDiagramTitle:o.getDiagramTitle,getAccDescription:o.getAccDescription,setAccDescription:o.setAccDescription,setOrientation:O,setXAxisTitle:W,setXAxisRangeData:F,setXAxisBand:N,setYAxisTitle:V,setYAxisRangeData:X,setLineData:j,setBarData:G,setTmpSVGG:z,getChartThemeConfig:K,getChartConfig:q},renderer:{draw:/* @__PURE__ */(0,r.__name)((t,i,e,s)=>{let n=s.db,h=n.getChartThemeConfig(),l=n.getChartConfig();function c(t){return"top"===t?"text-before-edge":"middle"}function g(t){return"left"===t?"start":"right"===t?"end":"middle"}function u(t){return`translate(${t.x}, ${t.y}) rotate(${t.rotation||0})`}(0,r.__name)(c,"getDominantBaseLine"),(0,r.__name)(g,"getTextAnchor"),(0,r.__name)(u,"getTextTransformation"),(0,o.log).debug("Rendering xychart chart\n"+t);let x=(0,a.selectSvgElement)(i),d=x.append("g").attr("class","main"),p=d.append("rect").attr("width",l.width).attr("height",l.height).attr("class","background");(0,o.configureSvgSize)(x,l.height,l.width,!0),x.attr("viewBox",`0 0 ${l.width} ${l.height}`),p.attr("fill",h.backgroundColor),n.setTmpSVGG(x.append("g").attr("class","mermaid-tmp-group"));let m=n.getDrawableElem(),f={};function y(t){let i=d,e="";for(let[s]of t.entries()){let a=d;s>0&&f[e]&&(a=f[e]),e+=t[s],(i=f[e])||(i=f[e]=a.append("g").attr("class",t[s]))}return i}for(let t of((0,r.__name)(y,"getGroup"),m)){if(0===t.data.length)continue;let i=y(t.groupTexts);switch(t.type){case"rect":i.selectAll("rect").data(t.data).enter().append("rect").attr("x",t=>t.x).attr("y",t=>t.y).attr("width",t=>t.width).attr("height",t=>t.height).attr("fill",t=>t.fill).attr("stroke",t=>t.strokeFill).attr("stroke-width",t=>t.strokeWidth);break;case"text":i.selectAll("text").data(t.data).enter().append("text").attr("x",0).attr("y",0).attr("fill",t=>t.fill).attr("font-size",t=>t.fontSize).attr("dominant-baseline",t=>c(t.verticalPos)).attr("text-anchor",t=>g(t.horizontalPos)).attr("transform",t=>u(t)).text(t=>t.text);break;case"path":i.selectAll("path").data(t.data).enter().append("path").attr("d",t=>t.path).attr("fill",t=>t.fill?t.fill:"none").attr("stroke",t=>t.strokeFill).attr("stroke-width",t=>t.strokeWidth)}}},"draw")}}});
//# sourceMappingURL=xychartDiagram-YKV5CYB4.js.map
