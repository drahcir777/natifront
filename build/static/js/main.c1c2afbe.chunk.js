(this["webpackJsonpnati-chat"]=this["webpackJsonpnati-chat"]||[]).push([[0],{46:function(e,t,n){},65:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(4),s=n(0),a=n(11),i=n.n(a),o=n(14),r=(n(45),n(46),n(29)),u=n.n(r).a.create({baseURL:"http://18.231.172.63:3333"}),l=n.p+"static/media/nati.8dc731ef.png";n(65),n(99),n(93),n(97),n(95),n(94),n(98),n(96);n(70);var d=function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"ola"})})},f=function(){Object(s.useEffect)((function(){Object(o.addResponseMessage)("Seja Bem vindo!")}),[]);return Object(c.jsx)("div",{children:Object(c.jsx)(o.Widget,{handleNewUserMessage:function(e){Object(o.toggleMsgLoader)(),u.post("/result",{texto:e}).then((function(e){e.data[0].queryResult.fulfillmentText;var t=e.data[0].queryResult.fulfillmentMessages;console.log("MESNAS: ",t),setTimeout((function(){Object(o.toggleMsgLoader)(),Object(o.renderCustomComponent)(d,{res:t},!0)}),2e3)})).catch((function(e){console.log("ERRO: ",e)}))},profileAvatar:l,title:"Nati",subtitle:"",senderPlaceHolder:"Digite sua mensagem ...",titleAvatar:l,startRecording:!0})})};function j(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(f,{})})}var g=document.getElementById("erw-root");g&&i.a.render(Object(c.jsx)(j,{}),g)}},[[71,1,2]]]);
//# sourceMappingURL=main.c1c2afbe.chunk.js.map