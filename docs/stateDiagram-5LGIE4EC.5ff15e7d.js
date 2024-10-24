!function(t,e,s,i,n){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof r[i]&&r[i],o=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(e,s){if(!o[e]){if(!t[e]){var n="function"==typeof r[i]&&r[i];if(!s&&n)return n(e,!0);if(a)return a(e,!0);if(l&&"string"==typeof e)return l(e);var h=Error("Cannot find module '"+e+"'");throw h.code="MODULE_NOT_FOUND",h}d.resolve=function(s){var i=t[e][1][s];return null!=i?i:s},d.cache={};var u=o[e]=new c.Module(e);t[e][0].call(u.exports,d,u,u.exports,this)}return o[e].exports;function d(t){var e=d.resolve(t);return!1===e?{}:c(e)}}c.isParcelRequire=!0,c.Module=function(t){this.id=t,this.bundle=c,this.exports={}},c.modules=t,c.cache=o,c.parent=a,c.register=function(e,s){t[e]=[function(t,e){e.exports=s},{}]},Object.defineProperty(c,"root",{get:function(){return r[i]}}),r[i]=c;for(var h=0;h<e.length;h++)c(e[h])}({lazZN:[function(t,e,s){var i=t("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(s),i.export(s,"stateDiagram_default",()=>h),i.export(s,"stateRenderer_v3_unified_default",()=>F),i.export(s,"stateDb_default",()=>tP),i.export(s,"styles_default",()=>tj);var n=t("./chunk-DX2SMGRI.mjs"),r=t("./chunk-ILQNPUG4.mjs"),a=t("./chunk-F3FIDV27.mjs"),o=t("./chunk-ZXHTWV66.mjs"),l=t("./chunk-DLQEHMXD.mjs"),c=function(){var t=/* @__PURE__ */(0,l.__name)(function(t,e,s,i){for(s=s||{},i=t.length;i--;s[t[i]]=e);return s},"o"),e=[1,2],s=[1,3],i=[1,4],n=[2,4],r=[1,9],a=[1,11],o=[1,16],c=[1,17],h=[1,18],u=[1,19],d=[1,32],p=[1,20],_=[1,21],m=[1,22],y=[1,23],f=[1,24],g=[1,26],S=[1,27],T=[1,28],b=[1,29],k=[1,30],E=[1,31],x=[1,34],C=[1,35],D=[1,36],$=[1,37],v=[1,33],L=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],I=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],A=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],O={trace:/* @__PURE__ */(0,l.__name)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,classDef:38,CLASSDEF_ID:39,CLASSDEF_STYLEOPTS:40,DEFAULT:41,style:42,STYLE_IDS:43,STYLEDEF_STYLEOPTS:44,class:45,CLASSENTITY_IDS:46,STYLECLASS:47,direction_tb:48,direction_bt:49,direction_rl:50,direction_lr:51,eol:52,";":53,EDGE_STATE:54,STYLE_SEPARATOR:55,left_of:56,right_of:57,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"classDef",39:"CLASSDEF_ID",40:"CLASSDEF_STYLEOPTS",41:"DEFAULT",42:"style",43:"STYLE_IDS",44:"STYLEDEF_STYLEOPTS",45:"class",46:"CLASSENTITY_IDS",47:"STYLECLASS",48:"direction_tb",49:"direction_bt",50:"direction_rl",51:"direction_lr",53:";",54:"EDGE_STATE",55:"STYLE_SEPARATOR",56:"left_of",57:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[52,1],[52,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:/* @__PURE__ */(0,l.__name)(function(t,e,s,i,n,r,a){var o=r.length-1;switch(n){case 3:return i.setRootDoc(r[o]),r[o];case 4:this.$=[];break;case 5:"nl"!=r[o]&&(r[o-1].push(r[o]),this.$=r[o-1]);break;case 6:case 7:case 12:this.$=r[o];break;case 8:this.$="nl";break;case 13:let l=r[o-1];l.description=i.trimColon(r[o]),this.$=l;break;case 14:this.$={stmt:"relation",state1:r[o-2],state2:r[o]};break;case 15:let c=i.trimColon(r[o]);this.$={stmt:"relation",state1:r[o-3],state2:r[o-1],description:c};break;case 19:this.$={stmt:"state",id:r[o-3],type:"default",description:"",doc:r[o-1]};break;case 20:var h=r[o],u=r[o-2].trim();if(r[o].match(":")){var d=r[o].split(":");h=d[0],u=[u,d[1]]}this.$={stmt:"state",id:h,type:"default",description:u};break;case 21:this.$={stmt:"state",id:r[o-3],type:"default",description:r[o-5],doc:r[o-1]};break;case 22:this.$={stmt:"state",id:r[o],type:"fork"};break;case 23:this.$={stmt:"state",id:r[o],type:"join"};break;case 24:this.$={stmt:"state",id:r[o],type:"choice"};break;case 25:this.$={stmt:"state",id:i.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:r[o-1].trim(),note:{position:r[o-2].trim(),text:r[o].trim()}};break;case 29:this.$=r[o].trim(),i.setAccTitle(this.$);break;case 30:case 31:this.$=r[o].trim(),i.setAccDescription(this.$);break;case 32:case 33:this.$={stmt:"classDef",id:r[o-1].trim(),classes:r[o].trim()};break;case 34:this.$={stmt:"style",id:r[o-1].trim(),styleClass:r[o].trim()};break;case 35:this.$={stmt:"applyClass",id:r[o-1].trim(),styleClass:r[o].trim()};break;case 36:i.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 37:i.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 38:i.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 39:i.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 42:case 43:this.$={stmt:"state",id:r[o].trim(),type:"default",description:""};break;case 44:case 45:this.$={stmt:"state",id:r[o-2].trim(),classes:[r[o].trim()],type:"default",description:""}}},"anonymous"),table:[{3:1,4:e,5:s,6:i},{1:[3]},{3:5,4:e,5:s,6:i},{3:6,4:e,5:s,6:i},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],n,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:r,5:a,8:8,9:10,10:12,11:13,12:14,13:15,16:o,17:c,19:h,22:u,24:d,25:p,26:_,27:m,28:y,29:f,32:25,33:g,35:S,37:T,38:b,42:k,45:E,48:x,49:C,50:D,51:$,54:v},t(L,[2,5]),{9:38,10:12,11:13,12:14,13:15,16:o,17:c,19:h,22:u,24:d,25:p,26:_,27:m,28:y,29:f,32:25,33:g,35:S,37:T,38:b,42:k,45:E,48:x,49:C,50:D,51:$,54:v},t(L,[2,7]),t(L,[2,8]),t(L,[2,9]),t(L,[2,10]),t(L,[2,11]),t(L,[2,12],{14:[1,39],15:[1,40]}),t(L,[2,16]),{18:[1,41]},t(L,[2,18],{20:[1,42]}),{23:[1,43]},t(L,[2,22]),t(L,[2,23]),t(L,[2,24]),t(L,[2,25]),{30:44,31:[1,45],56:[1,46],57:[1,47]},t(L,[2,28]),{34:[1,48]},{36:[1,49]},t(L,[2,31]),{39:[1,50],41:[1,51]},{43:[1,52]},{46:[1,53]},t(I,[2,42],{55:[1,54]}),t(I,[2,43],{55:[1,55]}),t(L,[2,36]),t(L,[2,37]),t(L,[2,38]),t(L,[2,39]),t(L,[2,6]),t(L,[2,13]),{13:56,24:d,54:v},t(L,[2,17]),t(A,n,{7:57}),{24:[1,58]},{24:[1,59]},{23:[1,60]},{24:[2,46]},{24:[2,47]},t(L,[2,29]),t(L,[2,30]),{40:[1,61]},{40:[1,62]},{44:[1,63]},{47:[1,64]},{24:[1,65]},{24:[1,66]},t(L,[2,14],{14:[1,67]}),{4:r,5:a,8:8,9:10,10:12,11:13,12:14,13:15,16:o,17:c,19:h,21:[1,68],22:u,24:d,25:p,26:_,27:m,28:y,29:f,32:25,33:g,35:S,37:T,38:b,42:k,45:E,48:x,49:C,50:D,51:$,54:v},t(L,[2,20],{20:[1,69]}),{31:[1,70]},{24:[1,71]},t(L,[2,32]),t(L,[2,33]),t(L,[2,34]),t(L,[2,35]),t(I,[2,44]),t(I,[2,45]),t(L,[2,15]),t(L,[2,19]),t(A,n,{7:72}),t(L,[2,26]),t(L,[2,27]),{4:r,5:a,8:8,9:10,10:12,11:13,12:14,13:15,16:o,17:c,19:h,21:[1,73],22:u,24:d,25:p,26:_,27:m,28:y,29:f,32:25,33:g,35:S,37:T,38:b,42:k,45:E,48:x,49:C,50:D,51:$,54:v},t(L,[2,21])],defaultActions:{5:[2,1],6:[2,2],46:[2,46],47:[2,47]},parseError:/* @__PURE__ */(0,l.__name)(function(t,e){if(e.recoverable)this.trace(t);else{var s=Error(t);throw s.hash=e,s}},"parseError"),parse:/* @__PURE__ */(0,l.__name)(function(t){var e=this,s=[0],i=[],n=[null],r=[],a=this.table,o="",c=0,h=0,u=0,d=r.slice.call(arguments,1),p=Object.create(this.lexer),_={yy:{}};for(var m in this.yy)Object.prototype.hasOwnProperty.call(this.yy,m)&&(_.yy[m]=this.yy[m]);p.setInput(t,_.yy),_.yy.lexer=p,_.yy.parser=this,void 0===p.yylloc&&(p.yylloc={});var y=p.yylloc;r.push(y);var f=p.options&&p.options.ranges;function g(){var t;return"number"!=typeof(t=i.pop()||p.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof _.yy.parseError?this.parseError=_.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,l.__name)(function(t){s.length=s.length-2*t,n.length=n.length-t,r.length=r.length-t},"popStack"),(0,l.__name)(g,"lex");for(var S,T,b,k,E,x,C,D,$,v={};;){if(b=s[s.length-1],this.defaultActions[b]?k=this.defaultActions[b]:(null==S&&(S=g()),k=a[b]&&a[b][S]),void 0===k||!k.length||!k[0]){var L="";for(x in $=[],a[b])this.terminals_[x]&&x>2&&$.push("'"+this.terminals_[x]+"'");L=p.showPosition?"Parse error on line "+(c+1)+":\n"+p.showPosition()+"\nExpecting "+$.join(", ")+", got '"+(this.terminals_[S]||S)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==S?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError(L,{text:p.match,token:this.terminals_[S]||S,line:p.yylineno,loc:y,expected:$})}if(k[0]instanceof Array&&k.length>1)throw Error("Parse Error: multiple actions possible at state: "+b+", token: "+S);switch(k[0]){case 1:s.push(S),n.push(p.yytext),r.push(p.yylloc),s.push(k[1]),S=null,T?(S=T,T=null):(h=p.yyleng,o=p.yytext,c=p.yylineno,y=p.yylloc,u>0&&u--);break;case 2:if(C=this.productions_[k[1]][1],v.$=n[n.length-C],v._$={first_line:r[r.length-(C||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(C||1)].first_column,last_column:r[r.length-1].last_column},f&&(v._$.range=[r[r.length-(C||1)].range[0],r[r.length-1].range[1]]),void 0!==(E=this.performAction.apply(v,[o,h,c,_.yy,k[1],n,r].concat(d))))return E;C&&(s=s.slice(0,-1*C*2),n=n.slice(0,-1*C),r=r.slice(0,-1*C)),s.push(this.productions_[k[1]][0]),n.push(v.$),r.push(v._$),D=a[s[s.length-2]][s[s.length-1]],s.push(D);break;case 3:return!0}}return!0},"parse")},w={EOF:1,parseError:/* @__PURE__ */(0,l.__name)(function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},"parseError"),setInput:/* @__PURE__ */(0,l.__name)(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:/* @__PURE__ */(0,l.__name)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:/* @__PURE__ */(0,l.__name)(function(t){var e=t.length,s=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===i.length?this.yylloc.first_column:0)+i[i.length-s.length].length-s[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:/* @__PURE__ */(0,l.__name)(function(){return this._more=!0,this},"more"),reject:/* @__PURE__ */(0,l.__name)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:/* @__PURE__ */(0,l.__name)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:/* @__PURE__ */(0,l.__name)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:/* @__PURE__ */(0,l.__name)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:/* @__PURE__ */(0,l.__name)(function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},"showPosition"),test_match:/* @__PURE__ */(0,l.__name)(function(t,e){var s,i,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],s=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack)for(var r in n)this[r]=n[r];return!1},"test_match"),next:/* @__PURE__ */(0,l.__name)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,s,i,n=this._currentRules(),r=0;r<n.length;r++)if((s=this._input.match(this.rules[n[r]]))&&(!e||s[0].length>e[0].length)){if(e=s,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(s,n[r])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:/* @__PURE__ */(0,l.__name)(function(){return this.next()||this.lex()},"lex"),begin:/* @__PURE__ */(0,l.__name)(function(t){this.conditionStack.push(t)},"begin"),popState:/* @__PURE__ */(0,l.__name)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:/* @__PURE__ */(0,l.__name)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:/* @__PURE__ */(0,l.__name)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:/* @__PURE__ */(0,l.__name)(function(t){this.begin(t)},"pushState"),stateStackSize:/* @__PURE__ */(0,l.__name)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:/* @__PURE__ */(0,l.__name)(function(t,e,s,i){switch(s){case 0:return 41;case 1:case 42:return 48;case 2:case 43:return 49;case 3:case 44:return 50;case 4:case 45:return 51;case 5:case 6:case 8:case 9:case 10:case 11:case 54:case 56:case 62:break;case 7:case 77:return 5;case 12:case 32:return this.pushState("SCALE"),17;case 13:case 33:return 18;case 14:case 20:case 34:case 49:case 52:this.popState();break;case 15:return this.begin("acc_title"),33;case 16:return this.popState(),"acc_title_value";case 17:return this.begin("acc_descr"),35;case 18:return this.popState(),"acc_descr_value";case 19:this.begin("acc_descr_multiline");break;case 21:return"acc_descr_multiline_value";case 22:return this.pushState("CLASSDEF"),38;case 23:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 24:return this.popState(),this.pushState("CLASSDEFID"),39;case 25:return this.popState(),40;case 26:return this.pushState("CLASS"),45;case 27:return this.popState(),this.pushState("CLASS_STYLE"),46;case 28:return this.popState(),47;case 29:return this.pushState("STYLE"),42;case 30:return this.popState(),this.pushState("STYLEDEF_STYLES"),43;case 31:return this.popState(),44;case 35:this.pushState("STATE");break;case 36:case 39:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),25;case 37:case 40:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),26;case 38:case 41:return this.popState(),e.yytext=e.yytext.slice(0,-10).trim(),27;case 46:this.pushState("STATE_STRING");break;case 47:return this.pushState("STATE_ID"),"AS";case 48:case 64:return this.popState(),"ID";case 50:return"STATE_DESCR";case 51:return 19;case 53:return this.popState(),this.pushState("struct"),20;case 55:return this.popState(),21;case 57:return this.begin("NOTE"),29;case 58:return this.popState(),this.pushState("NOTE_ID"),56;case 59:return this.popState(),this.pushState("NOTE_ID"),57;case 60:this.popState(),this.pushState("FLOATING_NOTE");break;case 61:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 63:return"NOTE_TEXT";case 65:return this.popState(),this.pushState("NOTE_TEXT"),24;case 66:return this.popState(),e.yytext=e.yytext.substr(2).trim(),31;case 67:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),31;case 68:case 69:return 6;case 70:return 16;case 71:return 54;case 72:return 24;case 73:return e.yytext=e.yytext.trim(),14;case 74:return 15;case 75:return 28;case 76:return 55;case 78:return"INVALID"}},"anonymous"),rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[9,10],inclusive:!1},struct:{rules:[9,10,22,26,29,35,42,43,44,45,54,55,56,57,71,72,73,74,75],inclusive:!1},FLOATING_NOTE_ID:{rules:[64],inclusive:!1},FLOATING_NOTE:{rules:[61,62,63],inclusive:!1},NOTE_TEXT:{rules:[66,67],inclusive:!1},NOTE_ID:{rules:[65],inclusive:!1},NOTE:{rules:[58,59,60],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[31],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[30],inclusive:!1},CLASS_STYLE:{rules:[28],inclusive:!1},CLASS:{rules:[27],inclusive:!1},CLASSDEFID:{rules:[25],inclusive:!1},CLASSDEF:{rules:[23,24],inclusive:!1},acc_descr_multiline:{rules:[20,21],inclusive:!1},acc_descr:{rules:[18],inclusive:!1},acc_title:{rules:[16],inclusive:!1},SCALE:{rules:[13,14,33,34],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[48],inclusive:!1},STATE_STRING:{rules:[49,50],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[9,10,36,37,38,39,40,41,46,47,51,52,53],inclusive:!1},ID:{rules:[9,10],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,10,11,12,15,17,19,22,26,29,32,35,53,57,68,69,70,71,72,73,74,76,77,78],inclusive:!0}}};function N(){this.yy={}}return O.lexer=w,(0,l.__name)(N,"Parser"),N.prototype=O,O.Parser=N,new N}();c.parser=c;var h=c,u="TB",d="state",p="relation",_="default",m="divider",y="fill:none",f="fill: #333",g="text",S="normal",T="rect",b="rectWithTitle",k="divider",E="roundedWithTitle",x="statediagram",C=`${x}-state`,D="transition",$=`${D} note-edge`,v=`${x}-note`,L=`${x}-cluster`,I=`${x}-cluster-alt`,A="parent",O="note",w="----",N=`${w}${O}`,R=`${w}${A}`,B=/* @__PURE__ */(0,l.__name)((t,e=u)=>{if(!t.doc)return e;let s=e;for(let e of t.doc)"dir"===e.stmt&&(s=e.value);return s},"getDir"),F={getClasses:/* @__PURE__ */(0,l.__name)(function(t,e){return e.db.extract(e.db.getRootDocV2()),e.db.getClasses()},"getClasses"),draw:/* @__PURE__ */(0,l.__name)(async function(t,e,s,i){(0,o.log).info("REF0:"),(0,o.log).info("Drawing state diagram (v2)",e);let{securityLevel:l,state:c,layout:h}=(0,o.getConfig2)();i.db.extract(i.db.getRootDocV2());let u=i.db.getData(),d=(0,n.getDiagramElement)(e,l);u.type=i.type,u.layoutAlgorithm=h,u.nodeSpacing=c?.nodeSpacing||50,u.rankSpacing=c?.rankSpacing||50,u.markers=["barb"],u.diagramId=e,await (0,r.render)(u,d),(0,a.utils_default).insertTitle(d,"statediagramTitleText",c?.titleTopMargin??25,i.db.getDiagramTitle()),(0,n.setupViewPortForSVG)(d,8,x,c?.useMaxWidth??!0)},"draw"),getDir:B},P=/* @__PURE__ */new Map,j=0;function G(t="",e=0,s="",i=w){let n=null!==s&&s.length>0?`${i}${s}`:"";return`state-${t}${n}-${e}`}(0,l.__name)(G,"stateDomId");var Y=/* @__PURE__ */(0,l.__name)((t,e,s,i,n,r,a,l)=>{(0,o.log).trace("items",e),e.forEach(e=>{switch(e.stmt){case d:case _:H(t,e,s,i,n,r,a,l);break;case p:{H(t,e.state1,s,i,n,r,a,l),H(t,e.state2,s,i,n,r,a,l);let c={id:"edge"+j,start:e.state1.id,end:e.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:y,labelStyle:"",label:(0,o.common_default).sanitizeText(e.description,(0,o.getConfig2)()),arrowheadStyle:f,labelpos:"c",labelType:g,thickness:S,classes:D,look:a};n.push(c),j++}}})},"setupDoc"),M=/* @__PURE__ */(0,l.__name)((t,e=u)=>{let s=e;if(t.doc)for(let e of t.doc)"dir"===e.stmt&&(s=e.value);return s},"getDir");function U(t,e,s){if(!e.id||"</join></fork>"===e.id||"</choice>"===e.id)return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach(t=>{if(s.get(t)){let i=s.get(t);e.cssCompiledStyles=[...e.cssCompiledStyles,...i.styles]}}));let i=t.find(t=>t.id===e.id);i?Object.assign(i,e):t.push(e)}function z(t){return t?.classes?.join(" ")??""}function X(t){return t?.styles??[]}(0,l.__name)(U,"insertOrUpdateNode"),(0,l.__name)(z,"getClassesFromDbInfo"),(0,l.__name)(X,"getStylesFromDbInfo");var H=/* @__PURE__ */(0,l.__name)((t,e,s,i,n,r,a,l)=>{let c=e.id,h=s.get(c),u=z(h),d=X(h);if((0,o.log).info("dataFetcher parsedItem",e,h,d),"root"!==c){let s=T;!0===e.start?s="stateStart":!1===e.start&&(s="stateEnd"),e.type!==_&&(s=e.type),P.get(c)||P.set(c,{id:c,shape:s,description:(0,o.common_default).sanitizeText(c,(0,o.getConfig2)()),cssClasses:`${u} ${C}`,cssStyles:d});let h=P.get(c);e.description&&(Array.isArray(h.description)?(h.shape=b,h.description.push(e.description)):h.description?.length>0?(h.shape=b,h.description===c?h.description=[e.description]:h.description=[h.description,e.description]):(h.shape=T,h.description=e.description),h.description=(0,o.common_default).sanitizeTextOrArray(h.description,(0,o.getConfig2)())),h.description?.length===1&&h.shape===b&&("group"===h.type?h.shape=E:h.shape=T),!h.type&&e.doc&&((0,o.log).info("Setting cluster for XCX",c,M(e)),h.type="group",h.isGroup=!0,h.dir=M(e),h.shape=e.type===m?k:E,h.cssClasses=`${h.cssClasses} ${L} ${r?I:""}`);let p={labelStyle:"",shape:h.shape,label:h.description,cssClasses:h.cssClasses,cssCompiledStyles:[],cssStyles:h.cssStyles,id:c,dir:h.dir,domId:G(c,j),type:h.type,isGroup:"group"===h.type,padding:8,rx:10,ry:10,look:a};if(p.shape===k&&(p.label=""),t&&"root"!==t.id&&((0,o.log).trace("Setting node ",c," to be child of its parent ",t.id),p.parentId=t.id),p.centerLabel=!0,e.note){let t={labelStyle:"",shape:"note",label:e.note.text,cssClasses:v,cssStyles:[],cssCompilesStyles:[],id:c+N+"-"+j,domId:G(c,j,O),type:h.type,isGroup:"group"===h.type,padding:(0,o.getConfig2)().flowchart.padding,look:a,position:e.note.position},s=c+R,r={labelStyle:"",shape:"noteGroup",label:e.note.text,cssClasses:h.cssClasses,cssStyles:[],id:c+R,domId:G(c,j,A),type:"group",isGroup:!0,padding:16,look:a,position:e.note.position};j++,r.id=s,t.parentId=s,U(i,r,l),U(i,t,l),U(i,p,l);let u=c,d=t.id;"left of"===e.note.position&&(u=t.id,d=c),n.push({id:u+"-"+d,start:u,end:d,arrowhead:"none",arrowTypeEnd:"",style:y,labelStyle:"",classes:$,arrowheadStyle:f,labelpos:"c",labelType:g,thickness:S,look:a})}else U(i,p,l)}e.doc&&((0,o.log).trace("Adding nodes children "),Y(e,e.doc,s,i,n,!r,a,l))},"dataFetcher"),V=/* @__PURE__ */(0,l.__name)(()=>{P.clear(),j=0},"reset"),W="start",q="color",J="fill";function K(){return /* @__PURE__ */new Map}(0,l.__name)(K,"newClassesList");var Q=[],Z=[],tt="LR",te=[],ts=K(),ti=/* @__PURE__ */(0,l.__name)(()=>({relations:[],states:/* @__PURE__ */new Map,documents:{}}),"newDoc"),tn={root:ti()},tr=tn.root,ta=0,to=0,tl=/* @__PURE__ */(0,l.__name)(t=>JSON.parse(JSON.stringify(t)),"clone"),tc=/* @__PURE__ */(0,l.__name)(t=>{(0,o.log).info("Setting root doc",t),te=t},"setRootDoc"),th=/* @__PURE__ */(0,l.__name)(()=>te,"getRootDoc"),tu=/* @__PURE__ */(0,l.__name)((t,e,s)=>{if(e.stmt===p)tu(t,e.state1,!0),tu(t,e.state2,!1);else if(e.stmt===d&&("[*]"===e.id?(e.id=s?t.id+"_start":t.id+"_end",e.start=s):e.id=e.id.trim()),e.doc){let t;let s=[],i=[];for(t=0;t<e.doc.length;t++)if(e.doc[t].type===m){let n=tl(e.doc[t]);n.doc=tl(i),s.push(n),i=[]}else i.push(e.doc[t]);if(s.length>0&&i.length>0){let t={stmt:d,id:(0,a.generateId)(),type:"divider",doc:tl(i)};s.push(tl(t)),e.doc=s}e.doc.forEach(t=>tu(e,t,!0))}},"docTranslator"),td=/* @__PURE__ */(0,l.__name)(()=>(tu({id:"root"},{id:"root",doc:te},!0),{id:"root",doc:te}),"getRootDocV2"),tp=/* @__PURE__ */(0,l.__name)(t=>{let e;e=t.doc?t.doc:t,(0,o.log).info(e),tm(!0),(0,o.log).info("Extract initial document:",e),e.forEach(t=>{switch((0,o.log).warn("Statement",t.stmt),t.stmt){case d:t_(t.id.trim(),t.type,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles);break;case p:tC(t.state1,t.state2,t.description);break;case"classDef":tL(t.id.trim(),t.classes);break;case"style":{let e=t.id.trim().split(","),s=t.styleClass.split(",");e.forEach(t=>{let e=ty(t);if(void 0===e){let s=t.trim();t_(s),e=ty(s)}e.styles=s.map(t=>t.replace(/;/g,"")?.trim())})}break;case"applyClass":tA(t.id.trim(),t.styleClass)}});let s=tf(),i=(0,o.getConfig2)().look;V(),H(void 0,td(),s,Q,Z,!0,i,ts),Q.forEach(t=>{if(Array.isArray(t.label)){if(t.description=t.label.slice(1),t.isGroup&&t.description.length>0)throw Error("Group nodes can only have label. Remove the additional description for node ["+t.id+"]");t.label=t.label[0]}})},"extract"),t_=/* @__PURE__ */(0,l.__name)(function(t,e=_,s=null,i=null,n=null,r=null,a=null,l=null){let c=t?.trim();if(tr.states.has(c)?(tr.states.get(c).doc||(tr.states.get(c).doc=s),tr.states.get(c).type||(tr.states.get(c).type=e)):((0,o.log).info("Adding state ",c,i),tr.states.set(c,{id:c,descriptions:[],type:e,doc:s,note:n,classes:[],styles:[],textStyles:[]})),i&&((0,o.log).info("Setting state description",c,i),"string"==typeof i&&tD(c,i.trim()),"object"==typeof i&&i.forEach(t=>tD(c,t.trim()))),n){let t=tr.states.get(c);t.note=n,t.note.text=(0,o.common_default).sanitizeText(t.note.text,(0,o.getConfig2)())}r&&((0,o.log).info("Setting state classes",c,r),("string"==typeof r?[r]:r).forEach(t=>tA(c,t.trim()))),a&&((0,o.log).info("Setting state styles",c,a),("string"==typeof a?[a]:a).forEach(t=>tO(c,t.trim()))),l&&((0,o.log).info("Setting state styles",c,a),("string"==typeof l?[l]:l).forEach(t=>tw(c,t.trim())))},"addState"),tm=/* @__PURE__ */(0,l.__name)(function(t){Q=[],Z=[],tr=(tn={root:ti()}).root,ta=0,ts=K(),t||(0,o.clear)()},"clear"),ty=/* @__PURE__ */(0,l.__name)(function(t){return tr.states.get(t)},"getState"),tf=/* @__PURE__ */(0,l.__name)(function(){return tr.states},"getStates"),tg=/* @__PURE__ */(0,l.__name)(function(){(0,o.log).info("Documents = ",tn)},"logDocuments"),tS=/* @__PURE__ */(0,l.__name)(function(){return tr.relations},"getRelations");function tT(t=""){let e=t;return"[*]"===t&&(ta++,e=`${W}${ta}`),e}function tb(t="",e=_){return"[*]"===t?W:e}function tk(t=""){let e=t;return"[*]"===t&&(ta++,e=`end${ta}`),e}function tE(t="",e=_){return"[*]"===t?"end":e}function tx(t,e,s){let i=tT(t.id.trim()),n=tb(t.id.trim(),t.type),r=tT(e.id.trim()),a=tb(e.id.trim(),e.type);t_(i,n,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),t_(r,a,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),tr.relations.push({id1:i,id2:r,relationTitle:(0,o.common_default).sanitizeText(s,(0,o.getConfig2)())})}(0,l.__name)(tT,"startIdIfNeeded"),(0,l.__name)(tb,"startTypeIfNeeded"),(0,l.__name)(tk,"endIdIfNeeded"),(0,l.__name)(tE,"endTypeIfNeeded"),(0,l.__name)(tx,"addRelationObjs");var tC=/* @__PURE__ */(0,l.__name)(function(t,e,s){if("object"==typeof t)tx(t,e,s);else{let i=tT(t.trim()),n=tb(t),r=tk(e.trim()),a=tE(e);t_(i,n),t_(r,a),tr.relations.push({id1:i,id2:r,title:(0,o.common_default).sanitizeText(s,(0,o.getConfig2)())})}},"addRelation"),tD=/* @__PURE__ */(0,l.__name)(function(t,e){let s=tr.states.get(t),i=e.startsWith(":")?e.replace(":","").trim():e;s.descriptions.push((0,o.common_default).sanitizeText(i,(0,o.getConfig2)()))},"addDescription"),t$=/* @__PURE__ */(0,l.__name)(function(t){return":"===t.substring(0,1)?t.substr(2).trim():t.trim()},"cleanupLabel"),tv=/* @__PURE__ */(0,l.__name)(()=>"divider-id-"+ ++to,"getDividerId"),tL=/* @__PURE__ */(0,l.__name)(function(t,e=""){ts.has(t)||ts.set(t,{id:t,styles:[],textStyles:[]});let s=ts.get(t);null!=e&&e.split(",").forEach(t=>{let e=t.replace(/([^;]*);/,"$1").trim();if(RegExp(q).exec(t)){let t=e.replace(J,"bgFill").replace(q,J);s.textStyles.push(t)}s.styles.push(e)})},"addStyleClass"),tI=/* @__PURE__ */(0,l.__name)(function(){return ts},"getClasses"),tA=/* @__PURE__ */(0,l.__name)(function(t,e){t.split(",").forEach(function(t){let s=ty(t);if(void 0===s){let e=t.trim();t_(e),s=ty(e)}s.classes.push(e)})},"setCssClass"),tO=/* @__PURE__ */(0,l.__name)(function(t,e){let s=ty(t);void 0!==s&&s.styles.push(e)},"setStyle"),tw=/* @__PURE__ */(0,l.__name)(function(t,e){let s=ty(t);void 0!==s&&s.textStyles.push(e)},"setTextStyle"),tN=/* @__PURE__ */(0,l.__name)(()=>tt,"getDirection"),tR=/* @__PURE__ */(0,l.__name)(t=>{tt=t},"setDirection"),tB=/* @__PURE__ */(0,l.__name)(t=>t&&":"===t[0]?t.substr(1).trim():t.trim(),"trimColon"),tF=/* @__PURE__ */(0,l.__name)(()=>{let t=(0,o.getConfig2)();return{nodes:Q,edges:Z,other:{},config:t,direction:B(td())}},"getData"),tP={getConfig:/* @__PURE__ */(0,l.__name)(()=>(0,o.getConfig2)().state,"getConfig"),getData:tF,addState:t_,clear:tm,getState:ty,getStates:tf,getRelations:tS,getClasses:tI,getDirection:tN,addRelation:tC,getDividerId:tv,setDirection:tR,cleanupLabel:t$,lineType:{LINE:0,DOTTED_LINE:1},relationType:{AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},logDocuments:tg,getRootDoc:th,setRootDoc:tc,getRootDocV2:td,extract:tp,trimColon:tB,getAccTitle:o.getAccTitle,setAccTitle:o.setAccTitle,getAccDescription:o.getAccDescription,setAccDescription:o.setAccDescription,addStyleClass:tL,setCssClass:tA,addDescription:tD,setDiagramTitle:o.setDiagramTitle,getDiagramTitle:o.getDiagramTitle},tj=/* @__PURE__ */(0,l.__name)(t=>`
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`,"getStyles")},{"./chunk-DX2SMGRI.mjs":"7UKO6","./chunk-ILQNPUG4.mjs":"46NXk","./chunk-F3FIDV27.mjs":"4aBfS","./chunk-ZXHTWV66.mjs":"iF86s","./chunk-DLQEHMXD.mjs":"1MRh8","@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}]},[],0,"parcelRequire20b6");