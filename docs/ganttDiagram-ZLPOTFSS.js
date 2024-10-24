!function(e,t,i,n,a){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof r[n]&&r[n],o=s.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,i){if(!o[t]){if(!e[t]){var a="function"==typeof r[n]&&r[n];if(!i&&a)return a(t,!0);if(s)return s(t,!0);if(l&&"string"==typeof t)return l(t);var d=Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}h.resolve=function(i){var n=e[t][1][i];return null!=n?n:i},h.cache={};var u=o[t]=new c.Module(t);e[t][0].call(u.exports,h,u,u.exports,this)}return o[t].exports;function h(e){var t=h.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=o,c.parent=s,c.register=function(t,i){e[t]=[function(e,t){t.exports=i},{}]},Object.defineProperty(c,"root",{get:function(){return r[n]}}),r[n]=c;for(var d=0;d<t.length;d++)c(t[d])}({fJqUt:[function(e,t,i){var n,a,r,s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(i),s.export(i,"diagram",()=>eP);var o=e("./chunk-F3FIDV27.mjs"),l=e("./chunk-GKOISANM.mjs"),c=e("./chunk-ZXHTWV66.mjs");e("./chunk-HD3LK5B5.mjs");var d=e("./chunk-DLQEHMXD.mjs"),u=(0,d.__commonJS)({"../../node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/isoWeek.js"(e,t){var i,n;i=e,n=function(){return function(e,t,i){var n=/* @__PURE__ */(0,d.__name)(function(e){return e.add(4-e.isoWeekday(),"day")},"a"),a=t.prototype;a.isoWeekYear=function(){return n(this).year()},a.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),"day");var t,a,r,s=n(this),o=(t=this.isoWeekYear(),r=4-(a=(this.$u?i.utc:i)().year(t).startOf("year")).isoWeekday(),a.isoWeekday()>4&&(r+=7),a.add(r,"day"));return s.diff(o,"week")+1},a.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var r=a.startOf;a.startOf=function(e,t){var i=this.$utils(),n=!!i.u(t)||t;return"isoweek"===i.p(e)?n?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):r.bind(this)(e,t)}}},"object"==typeof e&&void 0!==t?t.exports=n():"function"==typeof define&&define.amd?define(n):(i="undefined"!=typeof globalThis?globalThis:i||self).dayjs_plugin_isoWeek=n()}}),h=(0,d.__commonJS)({"../../node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/customParseFormat.js"(e,t){var i,n;i=e,n=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d/,n=/\d\d/,a=/\d\d?/,r=/\d*[^-_:/,()\s\d]+/,s={},o=/* @__PURE__ */(0,d.__name)(function(e){return(e=+e)+(e>68?1900:2e3)},"a"),l=/* @__PURE__ */(0,d.__name)(function(e){return function(t){this[e]=+t}},"f"),c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e||"Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),i=60*t[1]+(+t[2]||0);return 0===i?0:"+"===t[0]?-i:i}(e)}],u=/* @__PURE__ */(0,d.__name)(function(e){var t=s[e];return t&&(t.indexOf?t:t.s.concat(t.f))},"u"),h=/* @__PURE__ */(0,d.__name)(function(e,t){var i,n=s.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,t))>-1){i=a>12;break}}else i=e===(t?"pm":"PM");return i},"d"),f={A:[r,function(e){this.afternoon=h(e,!1)}],a:[r,function(e){this.afternoon=h(e,!0)}],Q:[i,function(e){this.month=3*(e-1)+1}],S:[i,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[a,l("seconds")],ss:[a,l("seconds")],m:[a,l("minutes")],mm:[a,l("minutes")],H:[a,l("hours")],h:[a,l("hours")],HH:[a,l("hours")],hh:[a,l("hours")],D:[a,l("day")],DD:[n,l("day")],Do:[r,function(e){var t=s.ordinal,i=e.match(/\d+/);if(this.day=i[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],w:[a,l("week")],ww:[n,l("week")],M:[a,l("month")],MM:[n,l("month")],MMM:[r,function(e){var t=u("months"),i=(u("monthsShort")||t.map(function(e){return e.slice(0,3)})).indexOf(e)+1;if(i<1)throw Error();this.month=i%12||i}],MMMM:[r,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw Error();this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};function m(i){var n,a;n=i,a=s&&s.formats;for(var r=(i=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,i,n){var r=n&&n.toUpperCase();return i||a[n]||e[n]||a[r].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(e,t,i){return t||i.slice(1)})})).match(t),o=r.length,l=0;l<o;l+=1){var c=r[l],d=f[c],u=d&&d[0],h=d&&d[1];r[l]=h?{regex:u,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},i=0,n=0;i<o;i+=1){var a=r[i];if("string"==typeof a)n+=a.length;else{var s=a.regex,l=a.parser,c=e.slice(n),d=s.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var i=e.hours;t?i<12&&(e.hours+=12):12===i&&(e.hours=0),delete e.afternoon}}(t),t}}return(0,d.__name)(m,"l"),function(e,t,i){i.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,a=n.parse;n.parse=function(e){var t=e.date,n=e.utc,r=e.args;this.$u=n;var o=r[1];if("string"==typeof o){var l=!0===r[2],c=!0===r[3],d=r[2];c&&(d=r[2]),s=this.$locale(),!l&&d&&(s=i.Ls[d]),this.$d=function(e,t,i,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var a=m(t)(e),r=a.year,s=a.month,o=a.day,l=a.hours,c=a.minutes,d=a.seconds,u=a.milliseconds,h=a.zone,f=a.week,y=/* @__PURE__ */new Date,k=o||(r||s?1:y.getDate()),p=r||y.getFullYear(),_=0;r&&!s||(_=s>0?s-1:y.getMonth());var g,b=l||0,T=c||0,v=d||0,x=u||0;return h?new Date(Date.UTC(p,_,k,b,T,v,x+60*h.offset*1e3)):i?new Date(Date.UTC(p,_,k,b,T,v,x)):(g=new Date(p,_,k,b,T,v,x),f&&(g=n(g).week(f).toDate()),g)}catch(e){return /* @__PURE__ */new Date("")}}(t,o,n,i),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),(l||c)&&t!=this.format(o)&&(this.$d=/* @__PURE__ */new Date("")),s={}}else if(o instanceof Array)for(var u=o.length,h=1;h<=u;h+=1){r[1]=o[h-1];var f=i.apply(this,r);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}h===u&&(this.$d=/* @__PURE__ */new Date(""))}else a.call(this,e)}}},"object"==typeof e&&void 0!==t?t.exports=n():"function"==typeof define&&define.amd?define(n):(i="undefined"!=typeof globalThis?globalThis:i||self).dayjs_plugin_customParseFormat=n()}}),f=(0,d.__commonJS)({"../../node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/plugin/advancedFormat.js"(e,t){var i,n;i=e,n=function(){return function(e,t){var i=t.prototype,n=i.format;i.format=function(e){var t=this,i=this.$locale();if(!this.isValid())return n.bind(this)(e);var a=this.$utils(),r=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return i.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return i.ordinal(t.week(),"W");case"w":case"ww":return a.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return a.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return a.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}});return n.bind(this)(r)}}},"object"==typeof e&&void 0!==t?t.exports=n():"function"==typeof define&&define.amd?define(n):(i="undefined"!=typeof globalThis?globalThis:i||self).dayjs_plugin_advancedFormat=n()}}),m=function(){var e=/* @__PURE__ */(0,d.__name)(function(e,t,i,n){for(i=i||{},n=e.length;n--;i[e[n]]=t);return i},"o"),t=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],n=[1,27],a=[1,28],r=[1,29],s=[1,30],o=[1,31],l=[1,32],c=[1,33],u=[1,34],h=[1,9],f=[1,10],m=[1,11],y=[1,12],k=[1,13],p=[1,14],_=[1,15],g=[1,16],b=[1,19],T=[1,20],v=[1,21],x=[1,22],w=[1,23],D=[1,25],S=[1,35],$={trace:/* @__PURE__ */(0,d.__name)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:/* @__PURE__ */(0,d.__name)(function(e,t,i,n,a,r,s){var o=r.length-1;switch(a){case 1:return r[o-1];case 2:case 6:case 7:this.$=[];break;case 3:r[o-1].push(r[o]),this.$=r[o-1];break;case 4:case 5:this.$=r[o];break;case 8:n.setWeekday("monday");break;case 9:n.setWeekday("tuesday");break;case 10:n.setWeekday("wednesday");break;case 11:n.setWeekday("thursday");break;case 12:n.setWeekday("friday");break;case 13:n.setWeekday("saturday");break;case 14:n.setWeekday("sunday");break;case 15:n.setWeekend("friday");break;case 16:n.setWeekend("saturday");break;case 17:n.setDateFormat(r[o].substr(11)),this.$=r[o].substr(11);break;case 18:n.enableInclusiveEndDates(),this.$=r[o].substr(18);break;case 19:n.TopAxis(),this.$=r[o].substr(8);break;case 20:n.setAxisFormat(r[o].substr(11)),this.$=r[o].substr(11);break;case 21:n.setTickInterval(r[o].substr(13)),this.$=r[o].substr(13);break;case 22:n.setExcludes(r[o].substr(9)),this.$=r[o].substr(9);break;case 23:n.setIncludes(r[o].substr(9)),this.$=r[o].substr(9);break;case 24:n.setTodayMarker(r[o].substr(12)),this.$=r[o].substr(12);break;case 27:n.setDiagramTitle(r[o].substr(6)),this.$=r[o].substr(6);break;case 28:this.$=r[o].trim(),n.setAccTitle(this.$);break;case 29:case 30:this.$=r[o].trim(),n.setAccDescription(this.$);break;case 31:n.addSection(r[o].substr(8)),this.$=r[o].substr(8);break;case 33:n.addTask(r[o-1],r[o]),this.$="task";break;case 34:this.$=r[o-1],n.setClickEvent(r[o-1],r[o],null);break;case 35:this.$=r[o-2],n.setClickEvent(r[o-2],r[o-1],r[o]);break;case 36:this.$=r[o-2],n.setClickEvent(r[o-2],r[o-1],null),n.setLink(r[o-2],r[o]);break;case 37:this.$=r[o-3],n.setClickEvent(r[o-3],r[o-2],r[o-1]),n.setLink(r[o-3],r[o]);break;case 38:this.$=r[o-2],n.setClickEvent(r[o-2],r[o],null),n.setLink(r[o-2],r[o-1]);break;case 39:this.$=r[o-3],n.setClickEvent(r[o-3],r[o-1],r[o]),n.setLink(r[o-3],r[o-2]);break;case 40:this.$=r[o-1],n.setLink(r[o-1],r[o]);break;case 41:case 47:this.$=r[o-1]+" "+r[o];break;case 42:case 43:case 45:this.$=r[o-2]+" "+r[o-1]+" "+r[o];break;case 44:case 46:this.$=r[o-3]+" "+r[o-2]+" "+r[o-1]+" "+r[o]}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},e(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:n,14:a,15:r,16:s,17:o,18:l,19:18,20:c,21:u,22:h,23:f,24:m,25:y,26:k,27:p,28:_,29:g,30:b,31:T,33:v,35:x,36:w,37:24,38:D,40:S},e(t,[2,7],{1:[2,1]}),e(t,[2,3]),{9:36,11:17,12:i,13:n,14:a,15:r,16:s,17:o,18:l,19:18,20:c,21:u,22:h,23:f,24:m,25:y,26:k,27:p,28:_,29:g,30:b,31:T,33:v,35:x,36:w,37:24,38:D,40:S},e(t,[2,5]),e(t,[2,6]),e(t,[2,17]),e(t,[2,18]),e(t,[2,19]),e(t,[2,20]),e(t,[2,21]),e(t,[2,22]),e(t,[2,23]),e(t,[2,24]),e(t,[2,25]),e(t,[2,26]),e(t,[2,27]),{32:[1,37]},{34:[1,38]},e(t,[2,30]),e(t,[2,31]),e(t,[2,32]),{39:[1,39]},e(t,[2,8]),e(t,[2,9]),e(t,[2,10]),e(t,[2,11]),e(t,[2,12]),e(t,[2,13]),e(t,[2,14]),e(t,[2,15]),e(t,[2,16]),{41:[1,40],43:[1,41]},e(t,[2,4]),e(t,[2,28]),e(t,[2,29]),e(t,[2,33]),e(t,[2,34],{42:[1,42],43:[1,43]}),e(t,[2,40],{41:[1,44]}),e(t,[2,35],{43:[1,45]}),e(t,[2,36]),e(t,[2,38],{42:[1,46]}),e(t,[2,37]),e(t,[2,39])],defaultActions:{},parseError:/* @__PURE__ */(0,d.__name)(function(e,t){if(t.recoverable)this.trace(e);else{var i=Error(e);throw i.hash=t,i}},"parseError"),parse:/* @__PURE__ */(0,d.__name)(function(e){var t=this,i=[0],n=[],a=[null],r=[],s=this.table,o="",l=0,c=0,u=0,h=r.slice.call(arguments,1),f=Object.create(this.lexer),m={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(m.yy[y]=this.yy[y]);f.setInput(e,m.yy),m.yy.lexer=f,m.yy.parser=this,void 0===f.yylloc&&(f.yylloc={});var k=f.yylloc;r.push(k);var p=f.options&&f.options.ranges;function _(){var e;return"number"!=typeof(e=n.pop()||f.lex()||1)&&(e instanceof Array&&(e=(n=e).pop()),e=t.symbols_[e]||e),e}"function"==typeof m.yy.parseError?this.parseError=m.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,d.__name)(function(e){i.length=i.length-2*e,a.length=a.length-e,r.length=r.length-e},"popStack"),(0,d.__name)(_,"lex");for(var g,b,T,v,x,w,D,S,$,C={};;){if(T=i[i.length-1],this.defaultActions[T]?v=this.defaultActions[T]:(null==g&&(g=_()),v=s[T]&&s[T][g]),void 0===v||!v.length||!v[0]){var M="";for(w in $=[],s[T])this.terminals_[w]&&w>2&&$.push("'"+this.terminals_[w]+"'");M=f.showPosition?"Parse error on line "+(l+1)+":\n"+f.showPosition()+"\nExpecting "+$.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(M,{text:f.match,token:this.terminals_[g]||g,line:f.yylineno,loc:k,expected:$})}if(v[0]instanceof Array&&v.length>1)throw Error("Parse Error: multiple actions possible at state: "+T+", token: "+g);switch(v[0]){case 1:i.push(g),a.push(f.yytext),r.push(f.yylloc),i.push(v[1]),g=null,b?(g=b,b=null):(c=f.yyleng,o=f.yytext,l=f.yylineno,k=f.yylloc,u>0&&u--);break;case 2:if(D=this.productions_[v[1]][1],C.$=a[a.length-D],C._$={first_line:r[r.length-(D||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(D||1)].first_column,last_column:r[r.length-1].last_column},p&&(C._$.range=[r[r.length-(D||1)].range[0],r[r.length-1].range[1]]),void 0!==(x=this.performAction.apply(C,[o,c,l,m.yy,v[1],a,r].concat(h))))return x;D&&(i=i.slice(0,-1*D*2),a=a.slice(0,-1*D),r=r.slice(0,-1*D)),i.push(this.productions_[v[1]][0]),a.push(C.$),r.push(C._$),S=s[i[i.length-2]][i[i.length-1]],i.push(S);break;case 3:return!0}}return!0},"parse")},C={EOF:1,parseError:/* @__PURE__ */(0,d.__name)(function(e,t){if(this.yy.parser)this.yy.parser.parseError(e,t);else throw Error(e)},"parseError"),setInput:/* @__PURE__ */(0,d.__name)(function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:/* @__PURE__ */(0,d.__name)(function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},"input"),unput:/* @__PURE__ */(0,d.__name)(function(e){var t=e.length,i=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},"unput"),more:/* @__PURE__ */(0,d.__name)(function(){return this._more=!0,this},"more"),reject:/* @__PURE__ */(0,d.__name)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:/* @__PURE__ */(0,d.__name)(function(e){this.unput(this.match.slice(e))},"less"),pastInput:/* @__PURE__ */(0,d.__name)(function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:/* @__PURE__ */(0,d.__name)(function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:/* @__PURE__ */(0,d.__name)(function(){var e=this.pastInput(),t=Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},"showPosition"),test_match:/* @__PURE__ */(0,d.__name)(function(e,t){var i,n,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),(n=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],i=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var r in a)this[r]=a[r];return!1},"test_match"),next:/* @__PURE__ */(0,d.__name)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var e,t,i,n,a=this._currentRules(),r=0;r<a.length;r++)if((i=this._input.match(this.rules[a[r]]))&&(!t||i[0].length>t[0].length)){if(t=i,n=r,this.options.backtrack_lexer){if(!1!==(e=this.test_match(i,a[r])))return e;if(!this._backtrack)return!1;t=!1;continue}if(!this.options.flex)break}return t?!1!==(e=this.test_match(t,a[n]))&&e:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:/* @__PURE__ */(0,d.__name)(function(){return this.next()||this.lex()},"lex"),begin:/* @__PURE__ */(0,d.__name)(function(e){this.conditionStack.push(e)},"begin"),popState:/* @__PURE__ */(0,d.__name)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:/* @__PURE__ */(0,d.__name)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:/* @__PURE__ */(0,d.__name)(function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"},"topState"),pushState:/* @__PURE__ */(0,d.__name)(function(e){this.begin(e)},"pushState"),stateStackSize:/* @__PURE__ */(0,d.__name)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:/* @__PURE__ */(0,d.__name)(function(e,t,i,n){switch(i){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 15:case 18:case 21:case 24:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:case 9:case 10:case 12:case 13:break;case 11:return 10;case 14:this.begin("href");break;case 16:return 43;case 17:this.begin("callbackname");break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 22:return 42;case 23:this.begin("click");break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};function M(){this.yy={}}return $.lexer=C,(0,d.__name)(M,"Parser"),M.prototype=$,$.Parser=M,new M}();m.parser=m;var y=(0,d.__toESM)((0,l.require_dist)(),1),k=(0,d.__toESM)((0,c.require_dayjs_min)(),1),p=(0,d.__toESM)(u(),1),_=(0,d.__toESM)(h(),1),g=(0,d.__toESM)(f(),1);k.default.extend(p.default),k.default.extend(_.default),k.default.extend(g.default);var b={friday:5,saturday:6},T="",v="",x=void 0,w="",D=[],S=[],$=/* @__PURE__ */new Map,C=[],M=[],E="",A="",L=["active","done","crit","milestone"],Y=[],I=!1,F=!1,W="sunday",O="saturday",j=0,P=/* @__PURE__ */(0,d.__name)(function(){C=[],M=[],E="",Y=[],ep=0,n=void 0,a=void 0,eT=[],T="",v="",A="",x=void 0,w="",D=[],S=[],I=!1,F=!1,j=0,$=/* @__PURE__ */new Map,(0,c.clear)(),W="sunday",O="saturday"},"clear"),B=/* @__PURE__ */(0,d.__name)(function(e){v=e},"setAxisFormat"),z=/* @__PURE__ */(0,d.__name)(function(){return v},"getAxisFormat"),N=/* @__PURE__ */(0,d.__name)(function(e){x=e},"setTickInterval"),H=/* @__PURE__ */(0,d.__name)(function(){return x},"getTickInterval"),G=/* @__PURE__ */(0,d.__name)(function(e){w=e},"setTodayMarker"),q=/* @__PURE__ */(0,d.__name)(function(){return w},"getTodayMarker"),R=/* @__PURE__ */(0,d.__name)(function(e){T=e},"setDateFormat"),V=/* @__PURE__ */(0,d.__name)(function(){I=!0},"enableInclusiveEndDates"),U=/* @__PURE__ */(0,d.__name)(function(){return I},"endDatesAreInclusive"),X=/* @__PURE__ */(0,d.__name)(function(){F=!0},"enableTopAxis"),Z=/* @__PURE__ */(0,d.__name)(function(){return F},"topAxisEnabled"),Q=/* @__PURE__ */(0,d.__name)(function(e){A=e},"setDisplayMode"),J=/* @__PURE__ */(0,d.__name)(function(){return A},"getDisplayMode"),K=/* @__PURE__ */(0,d.__name)(function(){return T},"getDateFormat"),ee=/* @__PURE__ */(0,d.__name)(function(e){D=e.toLowerCase().split(/[\s,]+/)},"setIncludes"),et=/* @__PURE__ */(0,d.__name)(function(){return D},"getIncludes"),ei=/* @__PURE__ */(0,d.__name)(function(e){S=e.toLowerCase().split(/[\s,]+/)},"setExcludes"),en=/* @__PURE__ */(0,d.__name)(function(){return S},"getExcludes"),ea=/* @__PURE__ */(0,d.__name)(function(){return $},"getLinks"),er=/* @__PURE__ */(0,d.__name)(function(e){E=e,C.push(e)},"addSection"),es=/* @__PURE__ */(0,d.__name)(function(){return C},"getSections"),eo=/* @__PURE__ */(0,d.__name)(function(){let e=eS(),t=0;for(;!e&&t<10;)e=eS(),t++;return M=eT},"getTasks"),el=/* @__PURE__ */(0,d.__name)(function(e,t,i,n){return!n.includes(e.format(t.trim()))&&(!!(i.includes("weekends")&&(e.isoWeekday()===b[O]||e.isoWeekday()===b[O]+1)||i.includes(e.format("dddd").toLowerCase()))||i.includes(e.format(t.trim())))},"isInvalidDate"),ec=/* @__PURE__ */(0,d.__name)(function(e){W=e},"setWeekday"),ed=/* @__PURE__ */(0,d.__name)(function(){return W},"getWeekday"),eu=/* @__PURE__ */(0,d.__name)(function(e){O=e},"setWeekend"),eh=/* @__PURE__ */(0,d.__name)(function(e,t,i,n){let a;if(!i.length||e.manualEndTime)return;let[r,s]=ef((e.startTime instanceof Date?(0,k.default)(e.startTime):(0,k.default)(e.startTime,t,!0)).add(1,"d"),e.endTime instanceof Date?(0,k.default)(e.endTime):(0,k.default)(e.endTime,t,!0),t,i,n);e.endTime=r.toDate(),e.renderEndTime=s},"checkTaskDates"),ef=/* @__PURE__ */(0,d.__name)(function(e,t,i,n,a){let r=!1,s=null;for(;e<=t;)r||(s=t.toDate()),(r=el(e,i,n,a))&&(t=t.add(1,"d")),e=e.add(1,"d");return[t,s]},"fixTaskDates"),em=/* @__PURE__ */(0,d.__name)(function(e,t,i){i=i.trim();let n=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==n){let e=null;for(let t of n.groups.ids.split(" ")){let i=ew(t);void 0!==i&&(!e||i.endTime>e.endTime)&&(e=i)}if(e)return e.endTime;let t=/* @__PURE__ */new Date;return t.setHours(0,0,0,0),t}let a=(0,k.default)(i,t.trim(),!0);if(a.isValid())return a.toDate();{(0,c.log).debug("Invalid date:"+i),(0,c.log).debug("With date format:"+t.trim());let e=new Date(i);if(void 0===e||isNaN(e.getTime())||-1e4>e.getFullYear()||e.getFullYear()>1e4)throw Error("Invalid date:"+i);return e}},"getStartDate"),ey=/* @__PURE__ */(0,d.__name)(function(e){let t=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return null!==t?[Number.parseFloat(t[1]),t[2]]:[NaN,"ms"]},"parseDuration"),ek=/* @__PURE__ */(0,d.__name)(function(e,t,i,n=!1){i=i.trim();let a=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==a){let e=null;for(let t of a.groups.ids.split(" ")){let i=ew(t);void 0!==i&&(!e||i.startTime<e.startTime)&&(e=i)}if(e)return e.startTime;let t=/* @__PURE__ */new Date;return t.setHours(0,0,0,0),t}let r=(0,k.default)(i,t.trim(),!0);if(r.isValid())return n&&(r=r.add(1,"d")),r.toDate();let s=(0,k.default)(e),[o,l]=ey(i);if(!Number.isNaN(o)){let e=s.add(o,l);e.isValid()&&(s=e)}return s.toDate()},"getEndDate"),ep=0,e_=/* @__PURE__ */(0,d.__name)(function(e){return void 0===e?"task"+(ep+=1):e},"parseId"),eg=/* @__PURE__ */(0,d.__name)(function(e,t){let i=(":"===t.substr(0,1)?t.substr(1,t.length):t).split(","),n={};eI(i,n,L);for(let e=0;e<i.length;e++)i[e]=i[e].trim();let a="";switch(i.length){case 1:n.id=e_(),n.startTime=e.endTime,a=i[0];break;case 2:n.id=e_(),n.startTime=em(void 0,T,i[0]),a=i[1];break;case 3:n.id=e_(i[0]),n.startTime=em(void 0,T,i[1]),a=i[2]}return a&&(n.endTime=ek(n.startTime,T,a,I),n.manualEndTime=(0,k.default)(a,"YYYY-MM-DD",!0).isValid(),eh(n,T,S,D)),n},"compileData"),eb=/* @__PURE__ */(0,d.__name)(function(e,t){let i=(":"===t.substr(0,1)?t.substr(1,t.length):t).split(","),n={};eI(i,n,L);for(let e=0;e<i.length;e++)i[e]=i[e].trim();switch(i.length){case 1:n.id=e_(),n.startTime={type:"prevTaskEnd",id:e},n.endTime={data:i[0]};break;case 2:n.id=e_(),n.startTime={type:"getStartDate",startData:i[0]},n.endTime={data:i[1]};break;case 3:n.id=e_(i[0]),n.startTime={type:"getStartDate",startData:i[1]},n.endTime={data:i[2]}}return n},"parseData"),eT=[],ev={},ex=/* @__PURE__ */(0,d.__name)(function(e,t){let i={section:E,type:E,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:t},task:e,classes:[]},n=eb(a,t);i.raw.startTime=n.startTime,i.raw.endTime=n.endTime,i.id=n.id,i.prevTaskId=a,i.active=n.active,i.done=n.done,i.crit=n.crit,i.milestone=n.milestone,i.order=j,j++;let r=eT.push(i);a=i.id,ev[i.id]=r-1},"addTask"),ew=/* @__PURE__ */(0,d.__name)(function(e){return eT[ev[e]]},"findTaskById"),eD=/* @__PURE__ */(0,d.__name)(function(e,t){let i={section:E,type:E,description:e,task:e,classes:[]},a=eg(n,t);i.startTime=a.startTime,i.endTime=a.endTime,i.id=a.id,i.active=a.active,i.done=a.done,i.crit=a.crit,i.milestone=a.milestone,n=i,M.push(i)},"addTaskOrg"),eS=/* @__PURE__ */(0,d.__name)(function(){let e=/* @__PURE__ */(0,d.__name)(function(e){let t=eT[e],i="";switch(eT[e].raw.startTime.type){case"prevTaskEnd":{let e=ew(t.prevTaskId);t.startTime=e.endTime;break}case"getStartDate":(i=em(void 0,T,eT[e].raw.startTime.startData))&&(eT[e].startTime=i)}return eT[e].startTime&&(eT[e].endTime=ek(eT[e].startTime,T,eT[e].raw.endTime.data,I),eT[e].endTime&&(eT[e].processed=!0,eT[e].manualEndTime=(0,k.default)(eT[e].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),eh(eT[e],T,S,D))),eT[e].processed},"compileTask"),t=!0;for(let[i,n]of eT.entries())e(i),t=t&&n.processed;return t},"compileTasks"),e$=/* @__PURE__ */(0,d.__name)(function(e,t){let i=t;"loose"!==(0,c.getConfig2)().securityLevel&&(i=(0,y.sanitizeUrl)(t)),e.split(",").forEach(function(e){void 0!==ew(e)&&(eE(e,()=>{window.open(i,"_self")}),$.set(e,i))}),eC(e,"clickable")},"setLink"),eC=/* @__PURE__ */(0,d.__name)(function(e,t){e.split(",").forEach(function(e){let i=ew(e);void 0!==i&&i.classes.push(t)})},"setClass"),eM=/* @__PURE__ */(0,d.__name)(function(e,t,i){if("loose"!==(0,c.getConfig2)().securityLevel||void 0===t)return;let n=[];if("string"==typeof i){n=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let e=0;e<n.length;e++){let t=n[e].trim();t.startsWith('"')&&t.endsWith('"')&&(t=t.substr(1,t.length-2)),n[e]=t}}0===n.length&&n.push(e),void 0!==ew(e)&&eE(e,()=>{(0,o.utils_default).runFunc(t,...n)})},"setClickFun"),eE=/* @__PURE__ */(0,d.__name)(function(e,t){Y.push(function(){let i=document.querySelector(`[id="${e}"]`);null!==i&&i.addEventListener("click",function(){t()})},function(){let i=document.querySelector(`[id="${e}-text"]`);null!==i&&i.addEventListener("click",function(){t()})})},"pushFun"),eA=/* @__PURE__ */(0,d.__name)(function(e,t,i){e.split(",").forEach(function(e){eM(e,t,i)}),eC(e,"clickable")},"setClickEvent"),eL=/* @__PURE__ */(0,d.__name)(function(e){Y.forEach(function(t){t(e)})},"bindFunctions"),eY={getConfig:/* @__PURE__ */(0,d.__name)(()=>(0,c.getConfig2)().gantt,"getConfig"),clear:P,setDateFormat:R,getDateFormat:K,enableInclusiveEndDates:V,endDatesAreInclusive:U,enableTopAxis:X,topAxisEnabled:Z,setAxisFormat:B,getAxisFormat:z,setTickInterval:N,getTickInterval:H,setTodayMarker:G,getTodayMarker:q,setAccTitle:c.setAccTitle,getAccTitle:c.getAccTitle,setDiagramTitle:c.setDiagramTitle,getDiagramTitle:c.getDiagramTitle,setDisplayMode:Q,getDisplayMode:J,setAccDescription:c.setAccDescription,getAccDescription:c.getAccDescription,addSection:er,getSections:es,getTasks:eo,addTask:ex,findTaskById:ew,addTaskOrg:eD,setIncludes:ee,getIncludes:et,setExcludes:ei,getExcludes:en,setClickEvent:eA,setLink:e$,getLinks:ea,bindFunctions:eL,parseDuration:ey,isInvalidDate:el,setWeekday:ec,getWeekday:ed,setWeekend:eu};function eI(e,t,i){let n=!0;for(;n;)n=!1,i.forEach(function(i){let a=RegExp("^\\s*"+i+"\\s*$");e[0].match(a)&&(t[i]=!0,e.shift(1),n=!0)})}(0,d.__name)(eI,"getTaskTags");var eF=(0,d.__toESM)((0,c.require_dayjs_min)(),1),eW=/* @__PURE__ */(0,d.__name)(function(){(0,c.log).debug("Something is calling, setConf, remove the call")},"setConf"),eO={monday:c.timeMonday,tuesday:c.timeTuesday,wednesday:c.timeWednesday,thursday:c.timeThursday,friday:c.timeFriday,saturday:c.timeSaturday,sunday:c.timeSunday},ej=/* @__PURE__ */(0,d.__name)((e,t)=>{let i=[...e].map(()=>-1/0),n=[...e].sort((e,t)=>e.startTime-t.startTime||e.order-t.order),a=0;for(let e of n)for(let n=0;n<i.length;n++)if(e.startTime>=i[n]){i[n]=e.endTime,e.order=n+t,n>a&&(a=n);break}return a},"getMaxIntersections"),eP={parser:m,db:eY,renderer:{setConf:eW,draw:/* @__PURE__ */(0,d.__name)(function(e,t,i,n){let a;let s=(0,c.getConfig2)().gantt,o=(0,c.getConfig2)().securityLevel;"sandbox"===o&&(a=(0,c.select_default)("#i"+t));let l="sandbox"===o?(0,c.select_default)(a.nodes()[0].contentDocument.body):(0,c.select_default)("body"),u="sandbox"===o?a.nodes()[0].contentDocument:document,h=u.getElementById(t);void 0===(r=h.parentElement.offsetWidth)&&(r=1200),void 0!==s.useWidth&&(r=s.useWidth);let f=n.db.getTasks(),m=[];for(let e of f)m.push(e.type);m=S(m);let y={},k=2*s.topPadding;if("compact"===n.db.getDisplayMode()||"compact"===s.displayMode){let e={};for(let t of f)void 0===e[t.section]?e[t.section]=[t]:e[t.section].push(t);let t=0;for(let i of Object.keys(e)){let n=ej(e[i],t)+1;t+=n,k+=n*(s.barHeight+s.barGap),y[i]=n}}else for(let e of(k+=f.length*(s.barHeight+s.barGap),m))y[e]=f.filter(t=>t.type===e).length;h.setAttribute("viewBox","0 0 "+r+" "+k);let p=l.select(`[id="${t}"]`),_=(0,c.time)().domain([(0,c.min)(f,function(e){return e.startTime}),(0,c.max)(f,function(e){return e.endTime})]).rangeRound([0,r-s.leftPadding-s.rightPadding]);function g(e,t){let i=e.startTime,n=t.startTime,a=0;return i>n?a=1:i<n&&(a=-1),a}function b(e,t,i){let a=s.barHeight,r=a+s.barGap,o=s.topPadding,l=s.leftPadding,d=(0,c.linear)().domain([0,m.length]).range(["#00B9FA","#F95002"]).interpolate(c.hcl_default);v(r,o,l,t,i,e,n.db.getExcludes(),n.db.getIncludes()),x(l,o,t,i),T(e,r,o,l,a,d,t,i),w(r,o,l,a,d),D(l,o,t,i)}function T(e,i,a,r,o,l,d){let u=[...new Set(e.map(e=>e.order))].map(t=>e.find(e=>e.order===t));p.append("g").selectAll("rect").data(u).enter().append("rect").attr("x",0).attr("y",function(e,t){return e.order*i+a-2}).attr("width",function(){return d-s.rightPadding/2}).attr("height",i).attr("class",function(e){for(let[t,i]of m.entries())if(e.type===i)return"section section"+t%s.numberSectionStyles;return"section section0"});let h=p.append("g").selectAll("rect").data(e).enter(),f=n.db.getLinks();if(h.append("rect").attr("id",function(e){return e.id}).attr("rx",3).attr("ry",3).attr("x",function(e){return e.milestone?_(e.startTime)+r+.5*(_(e.endTime)-_(e.startTime))-.5*o:_(e.startTime)+r}).attr("y",function(e,t){return e.order*i+a}).attr("width",function(e){return e.milestone?o:_(e.renderEndTime||e.endTime)-_(e.startTime)}).attr("height",o).attr("transform-origin",function(e,t){return t=e.order,(_(e.startTime)+r+.5*(_(e.endTime)-_(e.startTime))).toString()+"px "+(t*i+a+.5*o).toString()+"px"}).attr("class",function(e){let t="";e.classes.length>0&&(t=e.classes.join(" "));let i=0;for(let[t,n]of m.entries())e.type===n&&(i=t%s.numberSectionStyles);let n="";return e.active?e.crit?n+=" activeCrit":n=" active":e.done?n=e.crit?" doneCrit":" done":e.crit&&(n+=" crit"),0===n.length&&(n=" task"),e.milestone&&(n=" milestone "+n),"task"+(n+=i+" "+t)}),h.append("text").attr("id",function(e){return e.id+"-text"}).text(function(e){return e.task}).attr("font-size",s.fontSize).attr("x",function(e){let t=_(e.startTime),i=_(e.renderEndTime||e.endTime);e.milestone&&(t+=.5*(_(e.endTime)-_(e.startTime))-.5*o),e.milestone&&(i=t+o);let n=this.getBBox().width;return n>i-t?i+n+1.5*s.leftPadding>d?t+r-5:i+r+5:(i-t)/2+t+r}).attr("y",function(e,t){return e.order*i+s.barHeight/2+(s.fontSize/2-2)+a}).attr("text-height",o).attr("class",function(e){let t=_(e.startTime),i=_(e.endTime);e.milestone&&(i=t+o);let n=this.getBBox().width,a="";e.classes.length>0&&(a=e.classes.join(" "));let r=0;for(let[t,i]of m.entries())e.type===i&&(r=t%s.numberSectionStyles);let l="";return(e.active&&(l=e.crit?"activeCritText"+r:"activeText"+r),e.done?l=e.crit?l+" doneCritText"+r:l+" doneText"+r:e.crit&&(l=l+" critText"+r),e.milestone&&(l+=" milestoneText"),n>i-t)?i+n+1.5*s.leftPadding>d?a+" taskTextOutsideLeft taskTextOutside"+r+" "+l:a+" taskTextOutsideRight taskTextOutside"+r+" "+l+" width-"+n:a+" taskText taskText"+r+" "+l+" width-"+n}),"sandbox"===(0,c.getConfig2)().securityLevel){let e=(0,c.select_default)("#i"+t).nodes()[0].contentDocument;h.filter(function(e){return f.has(e.id)}).each(function(t){var i=e.querySelector("#"+t.id),n=e.querySelector("#"+t.id+"-text");let a=i.parentNode;var r=e.createElement("a");r.setAttribute("xlink:href",f.get(t.id)),r.setAttribute("target","_top"),a.appendChild(r),r.appendChild(i),r.appendChild(n)})}}function v(e,t,i,a,r,o,l,d){let u,h;if(0===l.length&&0===d.length)return;for(let{startTime:e,endTime:t}of o)(void 0===u||e<u)&&(u=e),(void 0===h||t>h)&&(h=t);if(!u||!h)return;if((0,eF.default)(h).diff((0,eF.default)(u),"year")>5){(0,c.log).warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let f=n.db.getDateFormat(),m=[],y=null,k=(0,eF.default)(u);for(;k.valueOf()<=h;)n.db.isInvalidDate(k,f,l,d)?y?y.end=k:y={start:k,end:k}:y&&(m.push(y),y=null),k=k.add(1,"d");p.append("g").selectAll("rect").data(m).enter().append("rect").attr("id",function(e){return"exclude-"+e.start.format("YYYY-MM-DD")}).attr("x",function(e){return _(e.start)+i}).attr("y",s.gridLineStartPadding).attr("width",function(e){return _(e.end.add(1,"day"))-_(e.start)}).attr("height",r-t-s.gridLineStartPadding).attr("transform-origin",function(t,n){return(_(t.start)+i+.5*(_(t.end)-_(t.start))).toString()+"px "+(n*e+.5*r).toString()+"px"}).attr("class","exclude-range")}function x(e,t,i,a){let r=(0,c.axisBottom)(_).tickSize(-a+t+s.gridLineStartPadding).tickFormat((0,c.timeFormat)(n.db.getAxisFormat()||s.axisFormat||"%Y-%m-%d")),o=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(n.db.getTickInterval()||s.tickInterval);if(null!==o){let e=o[1],t=o[2],i=n.db.getWeekday()||s.weekday;switch(t){case"millisecond":r.ticks((0,c.millisecond).every(e));break;case"second":r.ticks((0,c.second).every(e));break;case"minute":r.ticks((0,c.timeMinute).every(e));break;case"hour":r.ticks((0,c.timeHour).every(e));break;case"day":r.ticks((0,c.timeDay).every(e));break;case"week":r.ticks(eO[i].every(e));break;case"month":r.ticks((0,c.timeMonth).every(e))}}if(p.append("g").attr("class","grid").attr("transform","translate("+e+", "+(a-50)+")").call(r).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),n.db.topAxisEnabled()||s.topAxis){let i=(0,c.axisTop)(_).tickSize(-a+t+s.gridLineStartPadding).tickFormat((0,c.timeFormat)(n.db.getAxisFormat()||s.axisFormat||"%Y-%m-%d"));if(null!==o){let e=o[1],t=o[2],a=n.db.getWeekday()||s.weekday;switch(t){case"millisecond":i.ticks((0,c.millisecond).every(e));break;case"second":i.ticks((0,c.second).every(e));break;case"minute":i.ticks((0,c.timeMinute).every(e));break;case"hour":i.ticks((0,c.timeHour).every(e));break;case"day":i.ticks((0,c.timeDay).every(e));break;case"week":i.ticks(eO[a].every(e));break;case"month":i.ticks((0,c.timeMonth).every(e))}}p.append("g").attr("class","grid").attr("transform","translate("+e+", "+t+")").call(i).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function w(e,t){let i=0,n=Object.keys(y).map(e=>[e,y[e]]);p.append("g").selectAll("text").data(n).enter().append(function(e){let t=e[0].split(c.common_default.lineBreakRegex),i=-(t.length-1)/2,n=u.createElementNS("http://www.w3.org/2000/svg","text");for(let[e,a]of(n.setAttribute("dy",i+"em"),t.entries())){let t=u.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttribute("alignment-baseline","central"),t.setAttribute("x","10"),e>0&&t.setAttribute("dy","1em"),t.textContent=a,n.appendChild(t)}return n}).attr("x",10).attr("y",function(a,r){if(!(r>0))return a[1]*e/2+t;for(let s=0;s<r;s++)return i+=n[r-1][1],a[1]*e/2+i*e+t}).attr("font-size",s.sectionFontSize).attr("class",function(e){for(let[t,i]of m.entries())if(e[0]===i)return"sectionTitle sectionTitle"+t%s.numberSectionStyles;return"sectionTitle"})}function D(e,t,i,a){let r=n.db.getTodayMarker();if("off"===r)return;let o=p.append("g").attr("class","today"),l=/* @__PURE__ */new Date,c=o.append("line");c.attr("x1",_(l)+e).attr("x2",_(l)+e).attr("y1",s.titleTopMargin).attr("y2",a-s.titleTopMargin).attr("class","today"),""!==r&&c.attr("style",r.replace(/,/g,";"))}function S(e){let t={},i=[];for(let n=0,a=e.length;n<a;++n)Object.prototype.hasOwnProperty.call(t,e[n])||(t[e[n]]=!0,i.push(e[n]));return i}(0,d.__name)(g,"taskCompare"),f.sort(g),b(f,r,k),(0,c.configureSvgSize)(p,k,r,s.useMaxWidth),p.append("text").text(n.db.getDiagramTitle()).attr("x",r/2).attr("y",s.titleTopMargin).attr("class","titleText"),(0,d.__name)(b,"makeGantt"),(0,d.__name)(T,"drawRects"),(0,d.__name)(v,"drawExcludeDays"),(0,d.__name)(x,"makeGrid"),(0,d.__name)(w,"vertLabels"),(0,d.__name)(D,"drawToday"),(0,d.__name)(S,"checkUnique")},"draw")},styles:/* @__PURE__ */(0,d.__name)(e=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor||e.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`,"getStyles")}},{"./chunk-F3FIDV27.mjs":"4aBfS","./chunk-GKOISANM.mjs":"9F7Gp","./chunk-ZXHTWV66.mjs":"iF86s","./chunk-HD3LK5B5.mjs":"cz0yX","./chunk-DLQEHMXD.mjs":"1MRh8","@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}]},[],0,"parcelRequire20b6");