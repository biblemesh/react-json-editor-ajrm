!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("react-json-editor-ajrm",["React"],t):"object"==typeof exports?exports["react-json-editor-ajrm"]=t(require("react")):e["react-json-editor-ajrm"]=t(e.React)}("undefined"!=typeof self?self:this,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),c=(r=a)&&r.__esModule?r:{default:r};var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(!("id"in n.props))throw"An 'id' property must be specified. Must be unique";n.createMarkup=n.createMarkup.bind(n),n.onClick=n.onClick.bind(n),n.onBlur=n.onBlur.bind(n),n.update=n.update.bind(n),n.renderLabels=n.renderLabels.bind(n),n.renderErrorMessage=n.renderErrorMessage.bind(n),n.onScroll=n.onScroll.bind(n),n.showPlaceholder=n.showPlaceholder.bind(n),n.tokenize=n.tokenize.bind(n),n.onKeyPress=n.onKeyPress.bind(n),n.onKeyDown=n.onKeyDown.bind(n),n.stopEvent=n.stopEvent.bind(n),n.uniqueID="AJRM-JSON-EDITOR"+n.props.id;var r={},o={};r="colors"in n.props?{default:"default"in n.props.colors?n.props.colors.default:"#D4D4D4",string:"string"in n.props.colors?n.props.colors.string:"#CE8453",number:"number"in n.props.colors?n.props.colors.number:"#B5CE9F",colon:"colon"in n.props.colors?n.props.colors.colon:"#49B8F7",keys:"keys"in n.props.colors?n.props.colors.keys:"#9CDCFE",keys_whiteSpace:"keys_whiteSpace"in n.props.colors?n.props.colors.keys_whiteSpace:"#AF74A5",primitive:"primitive"in n.props.colors?n.props.colors.primitive:"#6392C6",error:"error"in n.props.colors?n.props.colors.error:"#ED0000",background:"background"in n.props.colors?n.props.colors.background:"#1E1E1E",background_warning:"background_warning"in n.props.colors?n.props.colors.background_warning:"#1E1E1E"}:{default:"#D4D4D4",string:"#CE8453",number:"#B5CE9F",colon:"#49B8F7",keys:"#9CDCFE",keys_whiteSpace:"#AF74A5",primitive:"#6392C6",error:"#ED0000",background:"#1E1E1E",background_warning:"#1E1E1E"},n.colors=r,o="style"in n.props?{outerBox:"outerBox"in n.props.style?n.props.style.outerBox:{},container:"container"in n.props.style?n.props.style.container:{},warningBox:"warningBox"in n.props.style?n.props.style.warningBox:{},errorMessage:"errorMessage"in n.props.style?n.props.style.errorMessage:{},body:"body"in n.props.style?n.props.style.body:{},labelColumn:"labelColumn"in n.props.style?n.props.style.labelColumn:{},labels:"labels"in n.props.style?n.props.style.labels:{},contentBox:"contentBox"in n.props.style?n.props.style.contentBox:{}}:{outerBox:{},container:{},warningBox:{},errorMessage:{},body:{},labelColumn:{},labels:{},contentBox:{}},n.style=o,n.confirmGood=!("confirmGood"in n.props)||n.props.confirmGood;var i="height"in n.props?parseInt(n.props.height.replace(/px/,""))+60+"px":"610px",s="width"in n.props?parseInt(n.props.width.replace(/px/,""))+"px":"479px",a=parseInt(i.replace(/px/,""))-60+"px",c=parseInt(s.replace(/px/,""))-44+"px",l=parseInt(s.replace(/px/,""))-60+"px";return n.totalHeight=i,n.totalWidth=s,n.bodyHeight=a,n.bodyWidth=c,n.messageWidth=l,n.state={preText:"",markupText:"",plainText:"",json:"",jsObject:void 0,lines:!1,error:!1,focused:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),s(t,[{key:"render",value:function(){var e=this.state.markupText,t=this.state.error,n=(this.state.focused,this.uniqueID),r=this.colors,o=this.style,s=this.confirmGood,a=this.totalHeight,l=this.totalWidth,p=this.bodyHeight,u=this.bodyWidth,f=this.messageWidth,k=!!t&&"token"in t;return c.default.createElement("div",{name:"outer-box",id:n+"-outer-box",style:i({display:"block",overflow:"none",height:a,width:l,margin:0,boxSizing:"border-box",position:"relative"},o.outerBox)},s?c.default.createElement("div",{style:{opacity:k?0:1,height:"30px",width:"30px",position:"absolute",top:0,right:0,transform:"translate(-25%,25%)",pointerEvents:"none",transitionDuration:"0.2s",transitionTimingFunction:"cubic-bezier(0, 1, 0.5, 1)"}},c.default.createElement("svg",{height:"30px",width:"30px",viewBox:"0 0 100 100"},c.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"green",opacity:"0.85",d:"M39.363,79L16,55.49l11.347-11.419L39.694,56.49L72.983,23L84,34.085L39.363,79z"}))):void 0,c.default.createElement("div",{name:"container",id:n+"-container",style:i({display:"block",height:a,width:l,margin:0,boxSizing:"border-box",overflow:"hidden",fontFamily:"Roboto, sans-serif"},o.container),onClick:this.onClick},c.default.createElement("div",{name:"warning-box",id:n+"-warning-box",style:i({display:"block",overflow:"hidden",height:k?"60px":"0px",width:l,margin:0,backgroundColor:r.background_warning,transitionDuration:"0.2s",transitionTimingFunction:"cubic-bezier(0, 1, 0.5, 1)"},o.warningBox),onClick:this.onClick},c.default.createElement("span",{style:{display:"inline-block",height:"60px",width:"60px",margin:0,boxSizing:"border-box",overflow:"hidden",verticalAlign:"top",pointerEvents:"none"},onClick:this.onClick},c.default.createElement("div",{style:{position:"relative",top:0,left:0,height:"60px",width:"60px",margin:0,pointerEvents:"none"},onClick:this.onClick},c.default.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",pointerEvents:"none"},onClick:this.onClick},c.default.createElement("svg",{height:"25px",width:"25px",viewBox:"0 0 100 100"},c.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"red",d:"M73.9,5.75c0.467-0.467,1.067-0.7,1.8-0.7c0.7,0,1.283,0.233,1.75,0.7l16.8,16.8  c0.467,0.5,0.7,1.084,0.7,1.75c0,0.733-0.233,1.334-0.7,1.801L70.35,50l23.9,23.95c0.5,0.467,0.75,1.066,0.75,1.8  c0,0.667-0.25,1.25-0.75,1.75l-16.8,16.75c-0.534,0.467-1.117,0.7-1.75,0.7s-1.233-0.233-1.8-0.7L50,70.351L26.1,94.25  c-0.567,0.467-1.167,0.7-1.8,0.7c-0.667,0-1.283-0.233-1.85-0.7L5.75,77.5C5.25,77,5,76.417,5,75.75c0-0.733,0.25-1.333,0.75-1.8  L29.65,50L5.75,26.101C5.25,25.667,5,25.066,5,24.3c0-0.666,0.25-1.25,0.75-1.75l16.8-16.8c0.467-0.467,1.05-0.7,1.75-0.7  c0.733,0,1.333,0.233,1.8,0.7L50,29.65L73.9,5.75z"}))))),c.default.createElement("span",{style:{display:"inline-block",height:"60px",width:f,margin:0,overflow:"hidden",verticalAlign:"top",position:"absolute",pointerEvents:"none"},onClick:this.onClick},this.renderErrorMessage())),c.default.createElement("div",{name:"body",id:n+"-body",style:i({display:"block",overflow:"none",height:k?p:a,width:l,margin:0,resize:"none",fontFamily:"Roboto Mono, Monaco, monospace",fontSize:"11px",backgroundColor:r.background,transitionDuration:"0.2s",transitionTimingFunction:"cubic-bezier(0, 1, 0.5, 1)"},o.body),onClick:this.onClick},c.default.createElement("div",{name:"labels",id:n+"-labels",style:i({display:"inline-block",boxSizing:"border-box",height:"100%",width:"44px",margin:0,padding:"5px 0px 5px 10px",overflow:"hidden",color:"#D4D4D4"},o.labelColumn),onClick:this.onClick},this.renderLabels()),c.default.createElement("div",{id:n+"-content-box",contentEditable:!0,style:i({display:"inline-block",boxSizing:"border-box",height:"100%",width:u,margin:0,padding:"5px",overflowX:"hidden",overflowY:"auto",wordWrap:"break-word",whiteSpace:"pre-line",color:"#D4D4D4",outline:"none"},o.contentBox),dangerouslySetInnerHTML:this.createMarkup(e),onKeyPress:this.onKeyPress,onKeyDown:this.onKeyDown,onClick:this.onClick,onBlur:this.onBlur,onScroll:this.onScroll,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1}))))}},{key:"renderErrorMessage",value:function(){var e=this.messageWidth,t=this.state.error,n=this.style;if(t)return c.default.createElement("p",{style:i({color:"red",fontSize:"12px",position:"absolute",width:e,height:"60px",boxSizing:"border-box",margin:0,padding:0,paddingRight:"10px",overflowWrap:"break-word",display:"flex",flexDirection:"column",justifyContent:"center"},n.errorMessage)},t.reason+" at line "+t.line)}},{key:"renderLabels",value:function(){for(var e=this.uniqueID+"-line-",t=this.colors,n=this.style,r=this.state.error?this.state.error.line:-1,o=this.state.lines?this.state.lines:1,s=new Array(o),a=0;a<o-1;a++)s[a]=a+1;return s.map(function(o){var s=o!==r?t.default:"red";return c.default.createElement("div",{key:e+o,id:e+o,style:i({},n.labels,{color:s})},o)})}},{key:"createMarkup",value:function(e){return void 0===e?{__html:""}:{__html:""+e}}},{key:"update",value:function(){var e=this.uniqueID,t=document.getElementById(e+"-content-box"),n=this.tokenize(t);"onChange"in this.props&&this.props.onChange({plainText:n.indentation,markupText:n.markup,json:n.json,jsObject:n.jsObject,lines:n.lines,error:n.error}),this.setState({plainText:n.indentation,markupText:n.markup,json:n.json,jsObject:n.jsObject,lines:n.lines,error:n.error})}},{key:"stopEvent",value:function(e){e&&(e.preventDefault(),e.stopPropagation())}},{key:"onKeyPress",value:function(e){"viewOnly"in this.props&&this.props.viewOnly&&this.stopEvent(e)}},{key:"onKeyDown",value:function(e){"viewOnly"in this.props&&this.props.viewOnly&&this.stopEvent(e)}},{key:"onClick",value:function(){"viewOnly"in this.props&&this.props.viewOnly||(this.state={focused:!0})}},{key:"onBlur",value:function(){"viewOnly"in this.props&&this.props.viewOnly||this.state.focused&&this.update()}},{key:"onScroll",value:function(e){var t=this.uniqueID;document.getElementById(t+"-labels").scrollTop=e.target.scrollTop}},{key:"componentDidUpdate",value:function(){this.showPlaceholder()}},{key:"componentDidMount",value:function(){var e=this.uniqueID;document.getElementById(e+"-content-box").addEventListener("paste",function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,t)}),this.showPlaceholder()}},{key:"showPlaceholder",value:function(){var e=this.state.preText;if("placeholder"in this.props){var t=this.props.placeholder;if(e!==t){if("object"!==(void 0===t?"undefined":o(t)))return console.error("placeholder in props is not an object:",t);var n=this.tokenize(t);this.setState({preText:t,plainText:n.indentation,markupText:n.markup,lines:n.lines,error:n.error})}}}},{key:"tokenize",value:function(e){if("object"!==(void 0===e?"undefined":o(e)))return console.error("tokenize() expects object type properties only. Got '"+(void 0===e?"undefined":o(e))+"' type instead.");if("nodeType"in e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n={active:!1,string:"",number:"",symbol:"",space:"",delimiter:"",quarks:[]};function r(e,r){switch(r){case"symbol":case"delimiter":n.active&&n.quarks.push({string:n[n.active],type:t+"-"+n.active}),n[n.active]="",n.active=r,n[n.active]=e;break;default:r===n.active?n[r]+=e:(n.active&&n.quarks.push({string:n[n.active],type:t+"-"+n.active}),n[n.active]="",n.active=r,n[n.active]=e)}}for(var o=0;o<e.length;o++){var i=e.charAt(o);switch(i){case'"':case"'":r(i,"delimiter");break;case" ":case" ":r(i,"space");break;case"{":case"}":case"[":case"]":case":":case",":r(i,"symbol");break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":"string"===n.active?r(i,"string"):r(i,"number");break;case"-":if(o<e.length-1&&"0123456789".indexOf(e.charAt(o+1))>-1){r(i,"number");break}case".":if(o<e.length-1&&o>0&&"0123456789".indexOf(e.charAt(o+1))>-1&&"0123456789".indexOf(e.charAt(o-1))>-1){r(i,"number");break}default:r(i,"string")}}return n.active&&(n.quarks.push({string:n[n.active],type:t+"-"+n.active}),n[n.active]="",n.active=!1),n.quarks},n=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;m={token:e,line:v,reason:t},p.tokens_merge[e+n].type="error"},r=function(e,t){if(void 0===e&&console.error("tokenID argument must be an integer."),void 0===t&&console.error("options argument must be an array."),e===p.tokens_merge.length-1)return!1;for(var n=e+1;n<p.tokens_merge.length;n++){var r=p.tokens_merge[n];switch(r.type){case"space":case"linebreak":break;case"symbol":case"colon":return t.indexOf(r.string)>-1&&n;default:return!1}}return!1},i=function(e,t){if(void 0===e&&console.error("tokenID argument must be an integer."),void 0===t&&console.error("options argument must be an array."),0===e)return!1;for(var n=e-1;n>=0;n--){var r=p.tokens_merge[n];switch(r.type){case"space":case"linebreak":break;case"symbol":case"colon":return t.indexOf(r.string)>-1;default:return!1}}return!1},s=function(e){if(void 0===e&&console.error("tokenID argument must be an integer."),0===e)return!1;for(var t=e-1;t>=0;t--){var n=p.tokens_merge[t];switch(n.type){case"space":case"linebreak":break;default:return n.type}}return!1},a=function(e,t){var n=e.type,r=e.string,o="";switch(n){case"string":case"number":case"primitive":case"error":o=t[e.type];break;case"key":o=" "===r?t.keys_whiteSpace:t.keys;break;case"symbol":o=":"===r?t.colon:t.default;break;default:o=t.default}return'<span id="'+f+'" type="'+n+'" value="'+r+'" depth="'+X+'" style="color:'+o+'">'+r+"</span>"},c=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return J++,X>0||e?"<br>":""}(arguments.length>0&&void 0!==arguments[0]&&arguments[0])+function(){for(var e=[],t=0;t<2*X;t++)e.push("&nbsp;");return e.join("")}()},l=e.cloneNode(!0);if(!l.hasChildNodes())return"";var p={tokens_unknown:[],tokens_proto:[],tokens_split:[],tokens_fallback:[],tokens_normalize:[],tokens_merge:[],tokens_plainText:"",indented:"",json:"",jsObject:void 0,markup:""};l.childNodes.forEach(function(e,t){var n={};switch(e.nodeName){case"SPAN":n={string:e.textContent,type:e.attributes.type.textContent},p.tokens_unknown.push(n);case"BR":""===e.textContent&&p.tokens_unknown.push({string:"\n",type:"unknown"});break;case"#text":p.tokens_unknown.push({string:e.wholeText,type:"unknown"});break;case"FONT":p.tokens_unknown.push({string:e.textContent,type:"unknown"})}}),p.tokens_unknown.forEach(function(e,n){p.tokens_proto=p.tokens_proto.concat(t(e.string,"proto"))}),p.tokens_proto.forEach(function(e,n){-1===e.type.indexOf("proto")&&!function(e,t){var n="",r="",o=!1;switch(t){case"primitive":if(-1===["true","false","null","undefined"].indexOf(e))return!1;break;case"string":if(e.length<2)return!1;if(n=e.charAt(0),r=e.charAt(e.length-1),-1===(o="'\"".indexOf(n)))return!1;if(n!==r)return!1;for(var i=0;i<e.length;i++)if(i>0&&i<e.length-1&&e.charAt(i)==="'\""[o]&&"\\"!==e.charAt(i-1))return!1;break;case"key":if(0===e.length)return!1;if(n=e.charAt(0),r=e.charAt(e.length-1),(o="'\"".indexOf(n))>-1){if(1===e.length)return!1;if(n!==r)return!1;for(i=0;i<e.length;i++)if(i>0&&i<e.length-1&&e.charAt(i)==="'\""[o]&&"\\"!==e.charAt(i-1))return!1}else for(i=0;i<"'\"`.,:;{}[]&<>=~*%<>\\|/-+!?@^  ".length;i++){var s="'\"`.,:;{}[]&<>=~*%<>\\|/-+!?@^  ".charAt(i);if(e.indexOf(s)>-1)return!1}break;case"number":for(i=0;i<e.length;i++)if(-1==="0123456789".indexOf(e.charAt(i)))if(0===i){if("-"!==e.charAt(0))return!1}else if("."!==e.charAt(i))return!1;break;case"symbol":if(e.length>1)return!1;if(-1==="{[:]},".indexOf(e))return!1;break;case"colon":if(e.length>1)return!1;if(":"!==e)return!1;break;default:return!0}return!0}(e.string,e.type)?p.tokens_split=p.tokens_split.concat(t(e.string,"split")):p.tokens_split.push(e)}),p.tokens_split.forEach(function(e){var t=e.type,n=e.string,r=n.length,o=[];t.indexOf("-")>-1&&("string"!==(t=t.slice(t.indexOf("-")+1))&&o.push("string"),o.push("key"),o.push("error"));var i={string:n,length:r,type:t,fallback:o};p.tokens_fallback.push(i)});var u={brackets:[],stringOpen:!1,isValue:!1};p.tokens_fallback.forEach(function(e,t){var n=e.type,r=e.string,o={type:n,string:r};switch(n){case"symbol":case"colon":if(u.stringOpen){u.isValue?o.type="string":o.type="key";break}switch(r){case"[":case"{":u.brackets.push(r),u.isValue="["===u.brackets[u.brackets.length-1];break;case"]":case"}":u.brackets.pop(),u.isValue="["===u.brackets[u.brackets.length-1];break;case",":if("colon"===function(){var e=p.tokens_normalize.length-1;if(e<1)return!1;for(var t=e;t>=0;t--){var n=p.tokens_normalize[t];switch(n.type){case"space":case"linebreak":break;default:return n}}return!1}().type)break;u.isValue="["===u.brackets[u.brackets.length-1];break;case":":o.type="colon",u.isValue=!0}break;case"delimiter":if(u.isValue?o.type="string":o.type="key",!u.stringOpen){u.stringOpen=r;break}if(t>0){var i=p.tokens_fallback[t-1],s=i.string,a=i.type,c=s.charAt(s.length-1);if("string"===a&&"\\"===c)break}if(u.stringOpen===r){u.stringOpen=!1;break}break;case"primitive":case"string":if(["false","true","null","undefined"].indexOf(r)>-1){o.type="primitive";break}if("\n"===r&&!u.stringOpen){o.type="linebreak";break}u.isValue?o.type="string":o.type="key";break;case"space":case"number":u.stringOpen&&(u.isValue?o.type="string":o.type="key")}p.tokens_normalize.push(o)});for(var f=0;f<p.tokens_normalize.length;f++){var k=p.tokens_normalize[f],d={string:k.string,type:k.type,tokens:[f]};if(-1===["symbol","colon"].indexOf(k.type)&&f+1<p.tokens_normalize.length){for(var b=0,h=f+1;h<p.tokens_normalize.length;h++){var g=p.tokens_normalize[h];if(k.type!==g.type)break;d.string+=g.string,d.tokens.push(h),b++}f+=b}p.tokens_merge.push(d)}var y="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_$",m=!1,v=p.tokens_merge.length>0?1:0;u={brackets:[],stringOpen:!1,isValue:!1};var x=[];for(f=0;f<p.tokens_merge.length&&!m;f++){var w=p.tokens_merge[f],O=w.string,_=w.type,C=!1;switch(_){case"space":break;case"linebreak":v++;break;case"symbol":switch(O){case"{":case"[":if(C=i(f,["}","]"])){n(f,"'"+p.tokens_merge[C].string+"' token cannot be followed by '"+O+"' token");break}if("["===O&&f>0&&!i(f,[":","[",","])){n(f,"'[' token can only follow ':', '[', and ',' tokens");break}if("{"===O&&i(f,["{"])){n(f,"'{' token cannot follow another '{' token");break}u.brackets.push(O),u.isValue="["===u.brackets[u.brackets.length-1],x.push({i:f,line:v,string:O});break;case"}":case"]":if("}"===O&&"{"!==u.brackets[u.brackets.length-1]){n(f,"Missing '{' open curly brace");break}if("}"===O&&i(f,[","])){n(f,"'}' token cannot follow a comma");break}if("]"===O&&"["!==u.brackets[u.brackets.length-1]){n(f,"Missing '[' open brace");break}if("]"===O&&i(f,[":"])){n(f,"']' token cannot follow a colon");break}u.brackets.pop(),u.isValue="["===u.brackets[u.brackets.length-1],x.push({i:f,line:v,string:O});break;case",":if(C=i(f,["{"])){if(r(f,["}"])){n(f,"Comma can only be wrapped by brackets");break}n(f,"Comma cannot follow '{' token");break}if(r(f,["}",",","]"])){n(f,"Values are always specified. Comma cannot be followed by '}', ']' tokens or another comma");break}switch(C=s(f)){case"key":case"colon":n(f,"Comma cannot follow "+C);break;case"symbol":if(i(f,["{"])){n(f,"Comma cannot follow '{' token");break}}u.isValue="["===u.brackets[u.brackets.length-1]}p.json+=O;break;case"colon":if((C=i(f,["["]))&&r(f,["]"])){n(f,"Colon can only be wrapped by curly brackets");break}if(C){n(f,"Colon cannot follow '[' token");break}if("key"!==s(f)){n(f,"Colon can only follow key");break}u.isValue=!0,p.json+=O;break;case"key":case"string":var E=O.charAt(0),j=O.charAt(O.length-1);"'\"".indexOf(E);if(-1==="'\"".indexOf(E)&&-1!=="'\"".indexOf(j)){n(f,"Missing opening "+j+" quote on "+_);break}if(-1==="'\"".indexOf(j)&&-1!=="'\"".indexOf(E)){n(f,"Missing closing "+E+" quote on "+_);break}if("'\"".indexOf(E)>-1&&E!==j){n(f,"Missing closing "+E+" quote on "+_);break}if("string"===_&&-1==="'\"".indexOf(E)&&-1==="'\"".indexOf(j)){n(f,"String must be wrapped by quotes");break}if("key"===_&&"'\"".indexOf(E)>-1&&O.length<=2){n(f,"Key cannot be an empty string");break}if("key"===_&&-1==="'\"".indexOf(E)&&-1==="'\"".indexOf(j))for(var S=0;S<O.length&&!m;S++){var D=O.charAt(S);if(-1===y.indexOf(D)){n(f,"Non-alphanemeric token '"+D+"' is not allowed outside string notation");break}}if("'"===E?O='"'+O.slice(1,-1)+'"':'"'!==E&&(O='"'+O+'"'),"key"===_&&"key"===s(f)){n(f,"Key containing space must be wrapped by quotes");break}if("key"===_&&!i(f,["{",","])){n(f,"Key can only follow '{' or ',' tokens");break}if("string"===_&&!i(f,["[",":",","])){n(f,_+" can only follow '[' ':' ',' tokens");break}if("key"===_&&u.isValue){n(f,"Unexpected key found at value position");break}if("string"===_&&!u.isValue){n(f,"Unexpected string found at key position");break}p.json+=O;break;case"number":case"primitive":if(!i(f,["[",":",","])){n(f,_+" can only follow '[' ':' ',' tokens");break}if(!u.isValue){n(f,"Unexpected "+_+" found at key position");break}"primitive"===_&&"undefined"===O&&n(f,"'undefined' token is not accepted. Use 'null' token instead"),p.json+=O}}if(!m){for(var A=Math.ceil(x.length/2),T=0,z=!1;x.length>0;){z=!1;for(var B=0;B<x.length-1;B++){var M=x[B].string+x[B+1].string;["[]","{}"].indexOf(M)>-1&&(ie=B,x.splice(ie+1,1),x.splice(ie,1),z||(z=!0))}if(T++,!z)break;if(T>=A)break}if(x.length>0){var V=x[0].string,I=x[0].i,L="["===V?"]":"}";v=x[0].line,n(I,"'"+V+"' token is missing closing '"+L+"' token")}}if(!m&&-1===[void 0,""].indexOf(p.json))try{p.jsObject=JSON.parse(p.json)}catch(e){var P=e.message,q=P.indexOf("position");if(-1===q)throw new Error("Error parsing failed");for(var F=P.substring(q+9,P.length),K=parseInt(F),R=0,N=0,W=!1,H=1,U=!1;R<K&&!U&&("linebreak"===(W=p.tokens_merge[N]).type&&H++,-1===["space","linebreak"].indexOf(W.type)&&(R+=W.string.length),!(R>=K));)N++,p.tokens_merge[N+1]||(U=!0);v=H,n(N,"Unexpected token '"+W.string+"' found")}var G=this.colors,J=1,X=0;if(!m)for(f=0;f<p.tokens_merge.length;f++){var Y=p.tokens_merge[f],Q=Y.string;switch(Y.type){case"space":case"linebreak":break;case"string":case"number":case"primitive":case"error":p.markup+=(i(f,[",","["])?c():"")+a(Y,G);break;case"key":p.markup+=c()+a(Y,G);break;case"colon":p.markup+=a(Y,G)+"&nbsp;";break;case"symbol":switch(Q){case"[":case"{":p.markup+=(i(f,[":"])?"":c())+a(Y,G),X++;break;case"]":case"}":X--;var Z=f===p.tokens_merge.length-1,$=f>0?["[","{"].indexOf(p.tokens_merge[f-1].string)>-1?"":c(Z):"";p.markup+=$+a(Y,G);break;case",":p.markup+=a(Y,G)}}}if(m){var ee=function(e){for(var t=0,n=0;n<e.length;n++)["\n","\r"].indexOf(e[n])>-1&&t++;return t},te=1;J=1;for(f=0;f<p.tokens_merge.length;f++){var ne=p.tokens_merge[f],re=ne.type,oe=ne.string;"linebreak"===re&&J++,p.markup+=a(ne,G),te+=ee(oe)}++J<++te&&(J=te)}return p.tokens_merge.forEach(function(e){p.indented+=e.string}),{tokens:p.tokens_merge,noSpaces:p.tokens_plainText,indented:p.indented,json:p.json,jsObject:p.jsObject,markup:p.markup,lines:J,error:m}}var ie;if(!("nodeType"in e)){var se=function(e,t){return e.slice(0,t)+e.slice(t+1)},ae=function(){if(-1==="'\"".indexOf(ke.currentChar))return!1;if(!ke.stringOpen)return le(),ke.stringStart=ke.position,ke.stringOpen=ke.currentChar,!0;if(ke.stringOpen===ke.currentChar){le();var e=ke.inputText.substring(ke.stringStart,ke.position+1);return pe(e),ke.stringOpen=!1,!0}return!1},ce=function(){if(-1===":,{}[]".indexOf(ke.currentChar))return!1;if(ke.stringOpen)return!1;switch(le(),pe(ke.currentChar),ke.currentChar){case":":return ke.isValue=!0,!0;case"{":case"[":ke.brackets.push(ke.currentChar);break;case"}":case"]":ke.brackets.pop()}return":"!==ke.currentChar&&(ke.isValue="["===ke.brackets[ke.brackets.length-1]),!0},le=function(){return 0!==ke.tokenSecondary.length&&(ke.tokens.push(ke.tokenSecondary),ke.tokenSecondary="",!0)},pe=function(e){return 0!==e.length&&(ke.tokens.push(e),!0)},ue=function(e){for(var t=[],n=0;n<2*e;n++)t.push(" ");return(e>0?"\n":"")+t.join("")},fe=function(e){var t=[];e>0&&Oe++;for(var n=0;n<2*e;n++)t.push("&nbsp;");return(e>0?"<br>":"")+t.join("")},ke={inputText:JSON.stringify(e),position:0,currentChar:"",tokenPrimary:"",tokenSecondary:"",brackets:[],isValue:!1,stringOpen:!1,stringStart:0,tokens:[]};for(f=0;f<ke.inputText.length;f++){ke.position=f,ke.currentChar=ke.inputText.charAt(ke.position);var de=ce(),be=ae(),he="\\"===ke.currentChar&&(ke.inputText=se(ke.inputText,ke.position),!0);de||be||he||ke.stringOpen||(ke.tokenSecondary+=ke.currentChar)}var ge={brackets:[],isValue:!1,tokens:[]};ge.tokens=ke.tokens.map(function(e){var t="",n="",r="";switch(e){case",":t="symbol",n=e,r=e,ge.isValue="["===ge.brackets[ge.brackets.length-1];break;case":":t="symbol",n=e,r=e,ge.isValue=!0;break;case"{":case"[":t="symbol",n=e,r=e,ge.brackets.push(e),ge.isValue="["===ge.brackets[ge.brackets.length-1];break;case"}":case"]":t="symbol",n=e,r=e,ge.brackets.pop(),ge.isValue="["===ge.brackets[ge.brackets.length-1];break;case"undefined":t="primitive",n=e,r=void 0;break;case"null":t="primitive",n=e,r=null;break;case"false":t="primitive",n=e,r=!1;break;case"true":t="primitive",n=e,r=!0;break;default:var o=e.charAt(0);if("'\"".indexOf(o)>-1){t=ge.isValue?"string":"key",n=e.slice(1,-1),"key"===t&&n.indexOf(" ")>-1&&(n="'"+n+"'"),"string"===t&&(n=n.indexOf("'")>-1?'"'+n+'"':"'"+n+"'"),r=n;break}if("0123456789".indexOf(o)>-1){t="number",n=e,r=Number(e);break}if(e.length>0&&!ge.isValue){t="key",(n=e).indexOf(" ")>-1&&(n="'"+n+"'"),r=n;break}}return{type:t,string:n,value:r,depth:ge.brackets.length}});var ye="";ge.tokens.forEach(function(e){ye+=e.string});var me="";ge.tokens.forEach(function(e,t){switch(e.string){case"[":case"{":var n=t<ge.tokens.length-1-1?ge.tokens[t+1]:"";-1==="}]".indexOf(n.string)?me+=e.string+ue(e.depth):me+=e.string;break;case"]":case"}":var r=t>0?ge.tokens[t-1]:"";-1==="[{".indexOf(r.string)?me+=ue(e.depth)+e.string:me+=e.string;break;case":":me+=e.string+" ";break;case",":me+=e.string+ue(e.depth);break;default:me+=e.string}});var ve="";ge.tokens.forEach(function(e){switch(e.type){case"string":case"key":var t="",n=e.string;n.length>3&&(t=(t=n.substring(1,n.length-1)).replace(/"/g,'\\"'),n=n.charAt(0)+t+n.charAt(n.length-1)),"'"===n.charAt(0)?n='"'+n.substring(1,n.length-1)+'"':'"'!==n.charAt(0)&&(n='"'+n+'"'),ve+=n;break;default:ve+=e.string}});var xe=JSON.parse(ve),we=this.colors,Oe=1,_e="",Ce=ge.tokens.length-1;return ge.tokens.forEach(function(e,t){var n='<span id="'+t+'" type="'+e.type+'" value="'+e.value+'" depth="'+e.depth+'" style="color:',r=we.default;switch(["string","number","primitive"].indexOf(e.type)>-1?r=we[e.type]:"key"===e.type?r=e.string.indexOf(" ")>-1?we.keys_whiteSpace:we.keys:":"===e.string&&(r=we.colon),n+=r+'">'+e.string+"</span>",e.string){case"{":case"[":var o=t<ge.tokens.length-1-1?ge.tokens[t+1]:"";-1==="}]".indexOf(o.string)?_e+=n+fe(e.depth):_e+=n;break;case"}":case"]":var i=t>0?ge.tokens[t-1]:"";-1==="[{".indexOf(i.string)?_e+=fe(e.depth)+(Ce===t?"<br>":"")+n:_e+=n;break;case":":_e+=n+" ";break;case",":_e+=n+fe(e.depth);break;default:_e+=n}}),Oe+=2,{tokens:ge.tokens,noSpaces:ye,indented:me,json:ve,jsObject:xe,markup:_e,lines:Oe}}}}]),t}();e.exports=l},function(t,n){t.exports=e}])});