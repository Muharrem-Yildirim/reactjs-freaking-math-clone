(this["webpackJsonpreactjs-freaking-math"]=this["webpackJsonpreactjs-freaking-math"]||[]).push([[0],{14:function(e,_,t){"use strict";var n=t(12),a=t(77),r={backgroundColor:"#2B3E4D"},o=Object(a.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,_=arguments.length>1?arguments[1]:void 0;return"BACKGROUND_COLOR"===_.type?Object(n.a)(Object(n.a)({},e),{},{backgroundColor:"default"===_.payload.backgroundColor?"#2B3E4D":_.payload.backgroundColor}):e}));_.a=o},34:function(e,_,t){"use strict";var n,a=t(6),r=t(42),o=t(10).b.button(n||(n=Object(a.a)(["\n  --rad: ",";\n\n  background: ",";\n  border: 0px;\n  border-radius: var(--rad);\n  display: flex;\n  align-items: center;\n  position: relative;\n  /* width: 56px; */\n  height: 50px;\n  width: 85px;\n  font-size: 20px;\n  text-align: center;\n  justify-content: center;\n\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n\n  &:hover {\n    background: ",';\n    cursor: pointer;\n  }\n\n  &::before {\n    content: "";\n    position: absolute;\n    width: 100%;\n    height: calc(var(--rad));\n    left: 0px;\n    top: calc(100%);\n    background: ',';\n    border-radius: var(--rad);\n\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n  }\n\n  &:active::before {\n    content: "";\n    position: absolute;\n    width: 100%;\n    height: calc(var(--rad) / 2);\n    left: 0px;\n    top: calc(100%);\n    background: none;\n    border-radius: var(--rad);\n\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n  }\n\n  &:active {\n    top: calc(var(--rad));\n    border-radius: var(--rad);\n  }\n\n  &:disabled {\n    background: #cdcdcd;\n    pointer-events: none;\n  }\n\n  margin-right: 8px;\n\n  &:last-of-type {\n    margin-right: 0px;\n  }\n'])),(function(e){return"undefined"==typeof e.rad?"4px":e.rad+"px"}),(function(e){return e.color||"white"}),(function(e){return Object(r.a)(.1,e.color||"white")}),(function(e){return Object(r.a)(.3,e.color||"white")}));_.a=o},45:function(e,_,t){"use strict";t.d(_,"a",(function(){return h}));var n,a,r=t(12),o=t(7),s=t(6),c=t(0),i=t(10),l=t(99),u=t(67),b=t.n(u),d=t(14),p=t(42),O=t(3),m=i.b.div(n||(n=Object(s.a)(["\n  position: relative;\n  background-color: ",";\n  height: 80%;\n  width: auto;\n  padding: 25px;\n\n  min-width: 350px;\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  transition: background-color 250ms linear;\n"])),(function(e){return Object(p.b)(.025,e.color)})),E=function(e){var _=Object(c.useState)(d.a.getState().backgroundColor),t=Object(o.a)(_,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){d.a.subscribe((function(){a(d.a.getState().backgroundColor)}))}),[]),Object(O.jsx)(m,{className:"animate__animated animate__fadeInDown animate__faster",color:n,children:e.children})},j=Object(i.b)(l.a)(a||(a=Object(s.a)(["\n  position: absolute;\n  top: -20px;\n  left: -20px;\n"])));function h(e){var _=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(t){return Object(O.jsxs)(E,{children:[_&&Object(O.jsx)("div",{style:{height:0},children:Object(O.jsx)(j,{style:{color:"white"},onClick:function(){d.a.dispatch({type:"BACKGROUND_COLOR",payload:{backgroundColor:"#304658"}}),t.setCurrentPage(0)},children:Object(O.jsx)(b.a,{})})}),Object(O.jsx)(e,Object(r.a)({},t))]})}}},50:function(e,_,t){"use strict";function n(e,_){return Math.floor(Math.random()*(_-e))+e}t.d(_,"b",(function(){return n})),t.d(_,"a",(function(){return r}));var a=["+","-"];function r(e,_){var t=n(0,a.length);return a[t]}},70:function(module,__webpack_exports__,__webpack_require__){"use strict";var E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12),E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(71),E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(72),E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(78),E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(76),E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_components_ViewWrapper__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(45),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),_utils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(50),_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(73),_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_10__),_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(74),_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__),_store__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(14),_components_IconButton__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(34),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(3),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__),_templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,FullSizeIconButton=Object(styled_components__WEBPACK_IMPORTED_MODULE_6__.b)(_components_IconButton__WEBPACK_IMPORTED_MODULE_13__.a)(_templateObject||(_templateObject=Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n  width: 100%;\n  height: 100%;\n"]))),Container=styled_components__WEBPACK_IMPORTED_MODULE_6__.b.div(_templateObject2||(_templateObject2=Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n  display: flex;\n\n  flex-direction: column;\n  height: 100%;\n"]))),Bottom=styled_components__WEBPACK_IMPORTED_MODULE_6__.b.div(_templateObject3||(_templateObject3=Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n  /* background: rgba(0, 0, 0, 0.2); */\n  margin-top: auto;\n  display: flex;\n\n  width: 100%;\n  height: 171px;\n"]))),OperationText=styled_components__WEBPACK_IMPORTED_MODULE_6__.b.div(_templateObject4||(_templateObject4=Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(['\n  margin-top: auto;\n  margin-bottom: auto;\n  display: flex;\n  font-weight: bold;\n  color: white;\n  width: 100%;\n  height: 171px;\n  justify-content: center;\n  font-size: 46px;\n  align-items: center;\n  font-family: "Open Sans", sans-serif;\n  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);\n  text-align: center;\n']))),Score=styled_components__WEBPACK_IMPORTED_MODULE_6__.b.span(_templateObject5||(_templateObject5=Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(['\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  font-weight: bold;\n  color: white;\n  font-family: "Open Sans", sans-serif;\n  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);\n']))),Main=function(_React$Component){Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Main,_React$Component);var _super=Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(Main);function Main(props){var _this;return Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,Main),_this=_super.call(this,props),_this.setQuestion=function(e){_this.setState((function(_){return Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},_),{},{question:Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},e),isAnswered:!1})}))},_this.generateQuestion=function(){for(var e=[],_=0;_<2;_++)e.push(Object(_utils__WEBPACK_IMPORTED_MODULE_9__.b)(1,150));return{numbers:e,operation:Object(_utils__WEBPACK_IMPORTED_MODULE_9__.a)(),inaccuracy:Object(_utils__WEBPACK_IMPORTED_MODULE_9__.b)(0,3)}},_this.nextQuestion=function(){_this.setQuestion(_this.generateQuestion()),_this.reAnimateOperationText(),_store__WEBPACK_IMPORTED_MODULE_12__.a.dispatch({type:"BACKGROUND_COLOR",payload:{backgroundColor:"default"}})},_this.answer=function(givenAnswer){var total=_this.state.question.numbers.reduce((function(a,b){return eval(a+_this.state.question.operation+b)}),0),isTrue=!1;total===eval(total+_this.state.question.inaccuracy)&&!0===givenAnswer||total!==eval(total+_this.state.question.inaccuracy)&&!1===givenAnswer?(console.log("do\u011fru cevap"),isTrue=!0):console.log("yanl\u0131\u015f cevap"),isTrue?_store__WEBPACK_IMPORTED_MODULE_12__.a.dispatch({type:"BACKGROUND_COLOR",payload:{backgroundColor:"#1a4e1a"}}):_store__WEBPACK_IMPORTED_MODULE_12__.a.dispatch({type:"BACKGROUND_COLOR",payload:{backgroundColor:"#4e1a1a"}}),_this.setState((function(e){return Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},e),{},{score:e.score+(isTrue?5:-5),isAnswered:{isTrue:isTrue}})}),(function(){setTimeout((function(){_this.setState((function(e){return Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},e),{},{isAnswered:!1})})),_this.nextQuestion()}),600)}))},_this.operationToString=function(e,_){return e+(_!==_this.state.question.numbers.length-1?" "+_this.state.question.operation+" ":" ")},_this.reAnimateOperationText=function(){_this.setState((function(e){return Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},e),{},{reanimateIdx:e.reanimateIdx+1})}))},_this.calculateFakeTotal=function(){return _this.state.question.numbers.reduce((function(prevVal,curVal){return eval(prevVal+" "+_this.state.question.operation+" "+curVal)+_this.state.question.inaccuracy}))},_this.state={question:{numbers:[0,1337],operation:"-",inaccuracy:0},isAnswered:!1,reanimateIdx:0,score:0},_this}return Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(Main,[{key:"componentDidMount",value:function(){this.setQuestion(this.generateQuestion())}},{key:"render",value:function(){var e=this;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(Score,{children:this.state.score}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(Container,Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_Web_Projects_reactjs_freaking_math_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},this.props),{},{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(OperationText,{className:"animate__animated animate__fadeIn",children:[this.state.question.numbers.map((function(_,t){return e.operationToString(_,t)})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("br",{}),"=",this.calculateFakeTotal()]},this.state.reanimateIdx),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(Bottom,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(FullSizeIconButton,{onClick:function(){return e.answer(!0)},disabled:this.state.isAnswered,rad:8,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_10___default.a,{style:{color:"green",fontSize:"6rem"}})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(FullSizeIconButton,{onClick:function(){return e.answer(!1)},disabled:this.state.isAnswered,rad:8,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11___default.a,{style:{color:"#D45F50",fontSize:"6rem"}})})]})]}))]})}}]),Main}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);__webpack_exports__.a=Object(_components_ViewWrapper__WEBPACK_IMPORTED_MODULE_7__.a)(Main)},87:function(e,_,t){},97:function(e,_,t){"use strict";t.r(_);var n,a,r,o,s,c=t(0),i=t.n(c),l=t(31),u=t.n(l),b=t(7),d=t(6),p=(t(87),t(10)),O=t(68),m=t.n(O),E=t(69),j=t.n(E),h=t(45),P=t(34),f=t(3),D=p.b.div(n||(n=Object(d.a)(['\n  margin-top: 10px;\n  display: flex;\n\n  .button-small {\n    font-size: 20px;\n    height: 30px;\n    font-family: "Open Sans", sans-serif;\n    font-weight: bold;\n    color: #d45f50;\n  }\n']))),M=p.b.span(a||(a=Object(d.a)(['\n  color: white;\n  font-size: 30px;\n\n  font-family: "Open Sans", sans-serif;\n  flex-grow: 1;\n  text-align: center;\n']))),g=p.b.span(r||(r=Object(d.a)(['\n  color: #889aa6;\n  font-size: 14px;\n  font-family: "Open Sans", sans-serif;\n  font-weight: bold;\n']))),C=p.b.div(o||(o=Object(d.a)(["\n  display: flex;\n\n  flex-direction: column;\n  align-items: center;\n  flex-grow: 1;\n"]))),x=p.b.div(s||(s=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));var W=Object(h.a)((function(e){return Object(f.jsxs)(x,{children:[Object(f.jsxs)(M,{children:[Object(f.jsxs)("span",{children:["Freaking",Object(f.jsx)("b",{children:"Math"})]}),Object(f.jsx)("span",{style:{fontSize:12,display:"block"},children:"Clone"})]}),Object(f.jsxs)(C,{children:[Object(f.jsx)("div",{children:Object(f.jsx)(P.a,{color:"white",onClick:function(){e.setCurrentPage(1)},children:Object(f.jsx)(m.a,{style:{fill:"#3399DB",fontSize:40}})})}),Object(f.jsxs)(D,{children:[Object(f.jsx)(P.a,{className:"button-small",color:"white",style:{color:"#D45F50"},onClick:function(){return alert("Soon!")},children:"rate"}),Object(f.jsx)(P.a,{className:"button-small",color:"white",onClick:function(){return alert("Soon!")},children:Object(f.jsx)(j.a,{})})]})]}),Object(f.jsx)(g,{children:"\xa9 Muharrem Yildirim 2021"})]})}),!1),k=t(70),T=t(14);var A=function(e){var _=Object(c.useState)(T.a.getState().backgroundColor),t=Object(b.a)(_,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){T.a.subscribe((function(){a(T.a.getState().backgroundColor)}))}),[]),[n,function(e){T.a.dispatch({type:"BACKGROUND_COLOR",payload:{backgroundColor:e}})}]};var B,R=function(){var e=Object(c.useState)(0),_=Object(b.a)(e,2),t=_[0],n=_[1];return[t,function(e){n(e)}]},I=Object(p.a)(B||(B=Object(d.a)(["\n  body {\n    background:#2B3E4D;\n    /* background-color: ","; */\n    /* transition: background-color 100ms linear; */\n  }\n"])),(function(e){return e.backgroundColor})),L=[W,k.a];var K=function(){var e=A(),_=Object(b.a)(e,1)[0],t=R(),n=Object(b.a)(t,2),a=n[0],r=n[1];return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(I,{backgroundColor:_}),i.a.createElement(L[a],{currentPage:a,setCurrentPage:r})]})},U=(t(94),t(75));u.a.render(Object(f.jsx)(U.a,{store:T.a,children:Object(f.jsx)(K,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.9f08718b.chunk.js.map