(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{100:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var l=a(0),c=a.n(l),n=a(48),r=a.n(n),i=(a(79),a(13)),s=a(12),o=a.n(s),m=a(7),u=a(8),d=a(10),p=a(9),v=a(11),E=(a(81),a(49)),f=a.n(E),g=a(50),h=a.n(g),b=a(24),N=a.n(b),x=a(51),k=a.n(x),w=a(25),y=a.n(w),_=a(52),j=a.n(_),O=a(26),C=a.n(O),M=a(53),S=a.n(M),D=a(27),U=a.n(D),A=a(54),L=a.n(A),P=a(55),W=a.n(P),q=a(4),B=(a(82),a(56)),J=a.n(B),Y=a(57),I=a.n(Y),R=a(58),$=a.n(R),z=a(59),F=a.n(z),G=a(60),H=a.n(G),K=a(61),Q=a.n(K),T=a(62),V=a.n(T),X=a(63),Z=a.n(X),ee=a(64),te=a.n(ee),ae=a(65),le=a.n(ae),ce=a(66),ne=a.n(ce),re="https://raw.githubusercontent.com/sircharlie/diary/master/",ie={angular:J.a,react:I.a,vue:$.a,tensorflow:F.a,gcp:H.a,mysql:Q.a,alibaba:V.a,serverless:Z.a,mongoDb:te.a,flutter:le.a,aws:ne.a},se=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(q.a)(a)),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(){this.props.onClick()}},{key:"render",value:function(){var e=this.props;return e.reverse?c.a.createElement("div",{className:"row list-section__item",onClick:this.handleClick},c.a.createElement("div",{className:"col-2 col-xl-3"}),c.a.createElement("div",{className:"col-9 col-xl-7 project"},c.a.createElement("div",{className:"col-4 col-l-7 project__images"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("img",{src:re+e.images[0],alt:""})),c.a.createElement("li",null,c.a.createElement("img",{src:re+e.images[1],alt:""})))),c.a.createElement("div",{className:"col-8 col-l-5 project__title"},c.a.createElement("div",{className:"item-name-section"},c.a.createElement("div",{className:"font-2--0em"},c.a.createElement("p",null,e.index+1,".")),c.a.createElement("div",null,c.a.createElement("p",{className:"font-2--0em"},e.name),c.a.createElement("p",{className:"font-0--7em"},e.description),e.technology.map((function(e){return c.a.createElement("img",{src:ie[e],alt:e})})))))),c.a.createElement("div",{className:"col-1 col-xl-2"})):c.a.createElement("div",{className:"row list-section__item",onClick:this.handleClick},c.a.createElement("div",{className:"col-1 col-xl-2"}),c.a.createElement("div",{className:"col-9 col-xl-7 project--reverse"},c.a.createElement("div",{className:"col-1 col-l-6 project__buffer"}),c.a.createElement("div",{className:"col-8 col-l-5 project__title"},c.a.createElement("div",{className:"item-name-section"},c.a.createElement("div",{className:"font-2--0em"},e.index+1,"."),c.a.createElement("div",null,c.a.createElement("p",{className:"font-2--0em"},e.name),c.a.createElement("p",{className:"font-0--7em"},e.description),e.technology.map((function(e){return c.a.createElement("img",{src:ie[e],alt:e})}))))),c.a.createElement("div",{className:"col-4 col-l-7 project__images"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("img",{src:re+e.images[0],alt:""})),c.a.createElement("li",null,c.a.createElement("img",{src:re+e.images[1],alt:""}))))),c.a.createElement("div",{className:"col-2 col-xl-3"}))}}]),t}(c.a.Component),oe=a(67),me=a.n(oe),ue=(a(100),a(28)),de=a.n(ue),pe=a(68),ve=a.n(pe),Ee=a(69),fe=a.n(Ee),ge=a(29),he=a.n(ge),be=a(70),Ne=(a(101),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={detail:""},a.closeModal=a.closeModal.bind(Object(q.a)(a)),a.next=a.next.bind(Object(q.a)(a)),a.previous=a.previous.bind(Object(q.a)(a)),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"closeModal",value:function(){this.props.closeModal()}},{key:"next",value:function(){this.props.next()}},{key:"previous",value:function(){this.props.previous()}},{key:"componentDidMount",value:function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}))}},{key:"render",value:function(){var e=this,t=this.props;return c.a.createElement(be.a,{modal:!0,contentStyle:{width:"80%",height:"80%",overflowY:"scroll"},open:this.props.pop,onClose:this.closeModal,lockScroll:!0,closeOnDocumentClick:!0},(function(a){return c.a.createElement("div",{className:"row detail"},c.a.createElement("a",{className:"close",onClick:a},"\xd7"),c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"row project-about"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"font-1--3em"},"About ",t.name),c.a.createElement("div",{className:"font-0--8em"},t.about))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"font-1--3em"},"Platform"),c.a.createElement("div",{className:"font-0--7em"},t.platform)),c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"font-1--3em"},"Category"),c.a.createElement("div",{className:"font-0--8em"},t.category.map((function(e){return c.a.createElement("span",null,e," ")}))))),c.a.createElement("div",{className:"row options"},c.a.createElement("div",{className:"row project-source"},c.a.createElement("div",{className:"col-12 font-0--8em"},c.a.createElement("span",null,c.a.createElement("a",{href:t.productUrl,target:"_blank",rel:"noopener noreferrer"},"see the product")),c.a.createElement("img",{src:he.a,alt:"view"})),c.a.createElement("div",{className:"col-12 font-0--8em"},c.a.createElement("span",null,c.a.createElement("a",{href:t.codeUrl,target:"_blank",rel:"noopener noreferrer"},"see the source code")),c.a.createElement("img",{src:he.a,alt:"view"}))),c.a.createElement("div",{className:"row project-options"},c.a.createElement("div",{className:"col-12 font-0--8em",onClick:e.previous},c.a.createElement("span",null,"previous project"),c.a.createElement("img",{src:ve.a,alt:"back"})),c.a.createElement("div",{className:"col-12 font-0--8em",onClick:e.next},c.a.createElement("span",null,"next project"),c.a.createElement("img",{src:fe.a,alt:"forward"}))))),c.a.createElement("div",{className:"col-6 image-gallery"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("img",{src:de.a,alt:"image1"})),c.a.createElement("li",null,c.a.createElement("img",{src:de.a,alt:"image1"})))))}))}}]),t}(c.a.Component)),xe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var l=arguments.length,c=new Array(l),n=0;n<l;n++)c[n]=arguments[n];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={items:[],clicks:[]},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(me.a.get("https://raw.githubusercontent.com/sircharlie/diary/master/projects.json"));case 2:e=t.sent,this.setState({items:e.data,clicks:new Array(e.data.length).fill(!1)});case 4:case"end":return t.stop()}}),null,this)}},{key:"handleClick",value:function(e){var t=Object(i.a)(this.state.clicks);t[e]=!0,this.setState({clicks:t})}},{key:"handleCloseModal",value:function(e){var t=Object(i.a)(this.state.clicks);t[e]=!1,this.setState({clicks:t})}},{key:"handleNext",value:function(e){var t=Object(i.a)(this.state.clicks);t[e]=!1,t[(e+1)%t.length]=!0,this.setState({clicks:t})}},{key:"handlePrevious",value:function(e){var t=Object(i.a)(this.state.clicks);t[e]=!1,t[e-1<0?t.length-1:e-1]=!0,this.setState({clicks:t})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"main-section"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-1 col-xl-2"}),c.a.createElement("div",{className:"col-1"},c.a.createElement("img",{src:f.a,alt:"logo",className:"CLogo"}))),c.a.createElement("div",{className:"row introduction"},c.a.createElement("div",{className:"col-1 col-xl-2 col-xs-1 introduction__buffer"}),c.a.createElement("div",{className:"col-2 col-l-3 col-xl-1 col-xs-2 vertical-align--bottom introduction__logos"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("img",{src:N.a,alt:"weibo"})),c.a.createElement("li",null,c.a.createElement("img",{src:U.a,alt:"twitter"})),c.a.createElement("li",null,c.a.createElement("img",{src:C.a,alt:"youtube"})),c.a.createElement("li",null,c.a.createElement("img",{src:y.a,alt:"email"})))),c.a.createElement("div",{className:"col-3 col-l-2 col-xl-3 col-xs-6 vertical-align--center text-center introduction__titles"},c.a.createElement("p",{className:"font-2--0em"},"Charlie Yang"),c.a.createElement("p",{className:"font-1--3em"},"Software Engineer")),c.a.createElement("div",{className:"col-5 col-xl-3 col-xs-6 vertical-align--center introduction__logo"},c.a.createElement("img",{src:h.a,alt:""})),c.a.createElement("div",{className:"col-xs-9 vertical-align--bottom introduction__logos--small"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("img",{src:N.a,alt:"weibo"})),c.a.createElement("li",null,c.a.createElement("img",{src:U.a,alt:"twitter"})),c.a.createElement("li",null,c.a.createElement("img",{src:C.a,alt:"youtube"})),c.a.createElement("li",null,c.a.createElement("img",{src:y.a,alt:"email"})))),c.a.createElement("div",{className:"col-2 col-l-1 col-xs-2 vertical-align--bottom text-center introduction__scroll"},c.a.createElement("span",{className:"scroll-down-text"},c.a.createElement("p",{className:"font-1--0em"},"SCROLL DOWN"))))),c.a.createElement("div",{className:"list-section"},this.state.items.map((function(t,a){return c.a.createElement(se,{key:a,index:a,name:t.name,description:t.description,images:t.images,technology:t.technology,onClick:e.handleClick.bind(e,a),reverse:a%2!==0,about:"",platform:[],category:[],detail:""})})),this.state.items.map((function(t,a){return c.a.createElement(Ne,{key:a,index:a,name:t.name,description:"",images:[],reverse:a%2!==0,technology:[],about:t.about,platform:t.platform,category:t.category,codeUrl:t.codeUrl,productUrl:t.productUrl,pop:e.state.clicks[a],closeModal:e.handleCloseModal.bind(e,a),next:e.handleNext.bind(e,a),previous:e.handlePrevious.bind(e,a),detail:t.detail})}))),c.a.createElement("div",{className:"footer-section text-center"},c.a.createElement("ul",{className:"col-12"},c.a.createElement("li",null,c.a.createElement("img",{src:k.a,alt:""})),c.a.createElement("li",null,c.a.createElement("img",{src:L.a,alt:""})),c.a.createElement("li",null,c.a.createElement("img",{src:S.a,alt:""})),c.a.createElement("li",null,c.a.createElement("img",{src:j.a,alt:""}))),c.a.createElement("div",null,c.a.createElement("img",{src:W.a,alt:""}))))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=a(73);r.a.render(c.a.createElement(ke.a,null,c.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},24:function(e,t,a){e.exports=a.p+"static/media/weibo_dark.f6bce9f6.svg"},25:function(e,t,a){e.exports=a.p+"static/media/email_dark.68e5f731.svg"},26:function(e,t,a){e.exports=a.p+"static/media/youtube_dark.ebbfb923.svg"},27:function(e,t,a){e.exports=a.p+"static/media/twitter_dark.4108540e.svg"},28:function(e,t,a){e.exports=a.p+"static/media/image.07a19746.png"},29:function(e,t,a){e.exports=a.p+"static/media/view.5cd09b3e.svg"},49:function(e,t,a){e.exports=a.p+"static/media/logo.60cc350f.svg"},50:function(e,t,a){e.exports=a.p+"static/media/x.c00302db.svg"},51:function(e,t,a){e.exports=a.p+"static/media/weibo_light.eb9a2642.svg"},52:function(e,t,a){e.exports=a.p+"static/media/email_light.c97ecce2.svg"},53:function(e,t,a){e.exports=a.p+"static/media/youtube_light.6b1b5de5.svg"},54:function(e,t,a){e.exports=a.p+"static/media/twitter_light.f9140151.svg"},55:function(e,t,a){e.exports=a.p+"static/media/copyright.807889f3.svg"},56:function(e,t,a){e.exports=a.p+"static/media/angular.5c69e565.svg"},57:function(e,t,a){e.exports=a.p+"static/media/react.84287d09.svg"},58:function(e,t,a){e.exports=a.p+"static/media/vue.9a45fc76.svg"},59:function(e,t,a){e.exports=a.p+"static/media/tensorflow.6f83f74d.svg"},60:function(e,t,a){e.exports=a.p+"static/media/gcp.a711d8f7.svg"},61:function(e,t,a){e.exports=a.p+"static/media/mysql.f80a91ba.svg"},62:function(e,t,a){e.exports=a.p+"static/media/alibaba.9890ab75.svg"},63:function(e,t,a){e.exports=a.p+"static/media/serverless.b3967dba.svg"},64:function(e,t,a){e.exports=a.p+"static/media/mongoDb.554c7d4b.svg"},65:function(e,t,a){e.exports=a.p+"static/media/flutter.faf8f499.svg"},66:function(e,t,a){e.exports=a.p+"static/media/aws.5830aea3.svg"},68:function(e,t,a){e.exports=a.p+"static/media/arrow_back.26b83d4e.svg"},69:function(e,t,a){e.exports=a.p+"static/media/arrow_forward.c9b42cfc.svg"},74:function(e,t,a){e.exports=a(186)},79:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.b4bf3c3b.chunk.js.map