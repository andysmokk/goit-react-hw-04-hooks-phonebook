(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{2:function(t,e,n){t.exports={form:"ContactForm_form__210dv",label:"ContactForm_label__3FUMU",input:"ContactForm_input__3EDjH",span:"ContactForm_span__2WmmD",btn:"ContactForm_btn__3HGuw"}},22:function(t,e,n){},23:function(t,e,n){},3:function(t,e,n){t.exports={title:"Phonebook_title__2EbT1",box:"Phonebook_box__31_GQ",divBox:"Phonebook_divBox__Z9lig",boxList:"Phonebook_boxList__2p9Bp"}},33:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(12),s=n.n(o),r=(n(22),n(23),n(16)),i=n(13),l=n(14),u=n(17),b=n(15),m=n(3),d=n.n(m),j=n(11),h=n(4),p=n.n(h),f=n(2),_=n.n(f),x=n(0);function O(t){var e=t.onSubmit,n=t.contacts,c=Object(a.useState)(""),o=Object(j.a)(c,2),s=o[0],r=o[1],i=Object(a.useState)(""),l=Object(j.a)(i,2),u=l[0],b=l[1],m=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":b(a);break;default:return}},d=function(){var t=s.toLocaleLowerCase();n.find((function(e){return e.name.toLocaleLowerCase()===t}))?alert("".concat(s," is already in contacts")):function(){var t=p.a.generate();e({name:s,number:u,id:t})}()},h=function(){r(""),b("")};return Object(x.jsxs)("form",{className:_.a.form,onSubmit:function(t){t.preventDefault(),h(),d()},children:[Object(x.jsxs)("label",{className:_.a.label,htmlFor:p.a.generate(),children:[Object(x.jsx)("span",{className:_.a.span,children:"Name"}),Object(x.jsx)("input",{className:_.a.input,type:"text",name:"name",placeholder:"\u0413\u0440\u0438\u0433\u043e\u0440 \u0413\u0440\u0438\u0433\u043e\u0440\u044f\u043d",value:s,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:m,id:p.a.generate()})]}),Object(x.jsxs)("label",{className:_.a.label,htmlFor:p.a.generate(),children:[Object(x.jsx)("span",{className:_.a.span,children:"Number"}),Object(x.jsx)("input",{className:_.a.input,type:"tel",name:"number",placeholder:"111-22-33",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:m,id:p.a.generate()})]}),Object(x.jsx)("button",{className:_.a.btn,type:"submit",children:"Add contact"})]})}var v=n(8),C=n.n(v);var g=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(x.jsx)("ul",{className:C.a.ul,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(x.jsxs)("li",{className:C.a.li,children:[a,": ",c,Object(x.jsx)("button",{className:C.a.btn,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},N=n(9),k=n.n(N);var F=function(t){var e=t.value,n=t.onChange;return Object(x.jsxs)("label",{className:k.a.label,children:[Object(x.jsx)("span",{className:k.a.span,children:"Find contacts by name"}),Object(x.jsx)("input",{className:k.a.input,type:"text",value:e,onChange:n})]})},S=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.formSubmitHandler=function(e){var n=t.state.contacts;t.setState({contacts:[e].concat(Object(r.a)(n))})},t.changeFilter=function(e){var n=e.target;t.setState({filter:n.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLocaleLowerCase();return n.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=this.formSubmitHandler,n=this.changeFilter,a=this.deleteContact,c=this.getFilteredContacts,o=t.contacts,s=t.filter;return Object(x.jsxs)("div",{className:d.a.box,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:d.a.title,children:"Phonebook"}),Object(x.jsx)(O,{onSubmit:e,contacts:o})]}),Object(x.jsxs)("div",{className:d.a.divBox,children:[Object(x.jsx)("h2",{className:d.a.title,children:"Contacts"}),Object(x.jsxs)("div",{className:d.a.boxList,children:[Object(x.jsx)(F,{value:s,onChange:n}),Object(x.jsx)(g,{contacts:c(),onDeleteContact:a})]})]})]})}}]),n}(a.Component),L=S;var y=function(){return Object(x.jsx)("section",{className:"container",children:Object(x.jsx)(L,{})})};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={li:"ContactList_li__1zV7T",ul:"ContactList_ul__fWXFH",btn:"ContactList_btn__3M8P2"}},9:function(t,e,n){t.exports={label:"Filter_label__PYtOY",span:"Filter_span__3rkOz",input:"Filter_input__1eD-R"}}},[[33,1,2]]]);
//# sourceMappingURL=main.78f1a851.chunk.js.map