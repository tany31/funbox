(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(1),l=a.n(n),c=a(3),r=a(4),d=a(8),o=a(5),m=a(9),u=a(6),h=a.n(u),p=a(7),E=a.n(p);function v(){this.state.isDisabled||(this.state.isSelected?(this.setState({isSelected:!1}),this.setState({isSelectedHover:!1})):this.setState({isSelected:!0}))}var b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(o.a)(t).call(this,e))).state={isSelected:!1,isSelectedHover:!1,isDisabled:!1},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.props.card.isDisabled&&this.setState({isDisabled:!0})}},{key:"render",value:function(){var e=this.props.card,t=E()("card",{card__selected:this.state.isSelected,card__disabled:this.state.isDisabled,card__selected__hover:this.state.isSelectedHover});return i.a.createElement("div",{className:t},i.a.createElement("div",{className:"card__wrapper",onClick:v.bind(this),onMouseOver:function(){this.state.isSelected?this.setState({isSelectedHover:!0}):this.setState({isSelectedHover:!1})}.bind(this),onMouseOut:function(){this.setState({isSelectedHover:!1})}.bind(this)},i.a.createElement("div",{className:"card__content"},i.a.createElement("div",{className:"card__subtitle"},this.state.isSelectedHover?"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?":"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e"),i.a.createElement("div",{className:"card__title"},i.a.createElement("h2",null,"\u041d\u044f\u043c\u0443\u0448\u043a\u0430"),i.a.createElement("span",null,e.subtitle)),i.a.createElement("div",{className:"card__consist"},e.consist.map(function(e,t){return i.a.createElement("div",null,i.a.createElement("span",{key:t},e),i.a.createElement("br",null))}))),i.a.createElement("img",{src:h.a,alt:""}),i.a.createElement("div",{className:"circle"},i.a.createElement("span",null,e.weight),i.a.createElement("span",null,"\u043a\u0433")),i.a.createElement("svg",{className:"stroke",width:"326px",height:"486px"},i.a.createElement("path",{stroke:"rgb(22, 152, 217)",strokeWidth:"4px",fill:"none",d:"M310.000,482.000 L14.000,482.000 C7.373,482.000 2.000,476.627 2.000,470.000 L2.000,45.000 L45.000,2.000 L310.000,2.000 C316.627,2.000 322.000,7.372 322.000,14.000 L322.000,470.000 C322.000,476.627 316.627,482.000 310.000,482.000 Z"})),i.a.createElement("svg",{width:"322px",height:"482px"},i.a.createElement("path",{strokeWidth:"4px",fill:"rgb(242, 242, 242)",d:"M310.000,482.000 L14.000,482.000 C7.373,482.000 2.000,476.627 2.000,470.000 L2.000,45.000 L45.000,2.000 L310.000,2.000 C316.627,2.000 322.000,7.372 322.000,14.000 L322.000,470.000 C322.000,476.627 316.627,482.000 310.000,482.000 Z"}))),i.a.createElement("div",{className:"card__footer"},this.state.isSelected&&i.a.createElement("p",null,e.description),!this.state.isDisabled&&!this.state.isSelected&&i.a.createElement("p",null,"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d, ",i.a.createElement("a",{href:"#",onClick:v.bind(this)},"\u043a\u0443\u043f\u0438.")),this.state.isDisabled&&i.a.createElement("p",null,"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, ",e.subtitle," \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f")))}}]),t}(i.a.Component),S=[{id:"0",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",subtitle:"\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430",consist:["10 \u043f\u043e\u0440\u0446\u0438\u0439","\u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"],description:"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438.",weight:"0,5",isDisabled:!1},{id:"1",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",subtitle:"\u0441 \u0440\u044b\u0431\u043e\u0439",consist:["40 \u043f\u043e\u0440\u0446\u0438\u0439","2 \u043c\u044b\u0448\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"],description:"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430.",weight:"2",isDisabled:!1},{id:"2",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",subtitle:"\u0441 \u043a\u0443\u0440\u0438\u0446\u0435\u0439",consist:["100 \u043f\u043e\u0440\u0446\u0438\u0439","5 \u043c\u044b\u0448\u0435\u0439 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a","\u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0434\u043e\u0432\u043e\u043b\u0435\u043d"],description:"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435.",weight:"5",isDisabled:!0}];var f=function(){return i.a.createElement("div",{className:"content"},i.a.createElement(b,{card:S[0]}),i.a.createElement(b,{card:S[1]}),i.a.createElement(b,{card:S[2]}))};var _=function(){return i.a.createElement("div",{className:"header"},i.a.createElement("h1",null,"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?"))};var g=function(){return i.a.createElement("div",{className:"container"},i.a.createElement(_,null),i.a.createElement(f,null))};function w(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,null))}Object(n.render)(i.a.createElement(w,null),document.getElementById("root"));var N=w;a(15);l.a.render(i.a.createElement(N,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a.p+"static/media/funbox_logo.38a2d03d.png"}},[[10,2,1]]]);
//# sourceMappingURL=main.9dd559c6.chunk.js.map