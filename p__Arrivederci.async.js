(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{FQAD:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var antd_es_row_style__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("GJfY"),antd_es_row__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("8DXh"),antd_es_col_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("aD/2"),antd_es_col__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("7VUt"),antd_es_card_style__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("do5X"),antd_es_card__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("+XNo"),antd_es_button_style__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("zJsu"),antd_es_button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("tc7R"),antd_es_icon_style__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("FfdP"),antd_es_icon__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("8ddF"),react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("uqIC"),react__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__),umi_link__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("XQH6"),umi_link__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(umi_link__WEBPACK_IMPORTED_MODULE_11__),react_ace__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("jxw5"),react_ace__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_12__),brace_mode_javascript__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("e2p0"),brace_mode_javascript__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(brace_mode_javascript__WEBPACK_IMPORTED_MODULE_13__),brace_theme_tomorrow__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("2oOk"),brace_theme_tomorrow__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(brace_theme_tomorrow__WEBPACK_IMPORTED_MODULE_14__),dva__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("84xf"),react_jsonschema_form__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("I3wi"),react_jsonschema_form__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(react_jsonschema_form__WEBPACK_IMPORTED_MODULE_16__),bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("w436"),bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_17__),slate_react__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("GO6r"),slate__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("rM4x"),slate_plain_serializer__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("RUmb"),_dec,_class,_temp,getDefaultData=_=>{var e={},a=_.properties;return Object.keys(a).map(_=>{switch(a[_].type){case"string":e[_]="";break;case"number":e[_]=0;break;case"array":e[_]=[];break;case"boolean":e[_]=!1;break;case"integer":e[_]=0;break;case"object":e[_]=getDefaultData(a[_]);break;default:console.log(a[_].type);break}}),e},Arrivederci=(_dec=Object(dva__WEBPACK_IMPORTED_MODULE_15__["c"])(_=>{var e=_.bucciarati;return{template:e.template,schema:e.schema,data:e.data}}),_dec((_temp=class Arrivederci extends react__WEBPACK_IMPORTED_MODULE_10__["Component"]{constructor(){super(...arguments),this.state={value:this.props.template},this.onChange=(_=>{var e=_.value;this.props.dispatch({type:"bucciarati/updateTemplate",payload:e}),this.setState({value:this.props.template}),console.log(this.state.value)})}componentDidMount(){var _=this.props,e=_.schema,a=_.dispatch,t=getDefaultData(e);a({type:"bucciarati/updateData",payload:t})}render(){var _this$props2=this.props,data=_this$props2.data,dispatch=_this$props2.dispatch,template=_this$props2.template,tpl=void 0!==data?template:"",text=slate_plain_serializer__WEBPACK_IMPORTED_MODULE_20__["a"].serialize(this.props.template);console.log(text);var val=eval("`"+tpl+"`");return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_5__["a"],{extra:react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(umi_link__WEBPACK_IMPORTED_MODULE_11___default.a,{to:"/"},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_7__["a"],{type:"primary"},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_9__["a"],{type:"left"}),"prev")),style:{height:"95%",margin:"20px"}},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_row__WEBPACK_IMPORTED_MODULE_1__["a"],null,react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_3__["a"],{span:12},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_5__["a"],{style:{width:"100%",height:550}},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(slate_react__WEBPACK_IMPORTED_MODULE_18__["a"],{style:{height:500,overflowY:"scroll"},placeholder:"Placeholder",value:slate__WEBPACK_IMPORTED_MODULE_19__["n"].fromJSON(this.props.template),onChange:this.onChange}))),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_3__["a"],{span:12},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_5__["a"],{bordered:!0,style:{width:"100%",height:550}},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_jsonschema_form__WEBPACK_IMPORTED_MODULE_16___default.a,{schema:this.props.schema,formData:this.props.data,onChange:_=>console.log(_),onSubmit:_=>dispatch({type:"bucciarati/updateData",payload:_.formData}),onError:_=>console.log(_)})))))}},_class=_temp))||_class);__webpack_exports__["default"]=Arrivederci}}]);