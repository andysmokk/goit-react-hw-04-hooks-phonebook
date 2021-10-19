(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={form:"ContactForm_form__210dv",label:"ContactForm_label__3FUMU",input:"ContactForm_input__3EDjH",span:"ContactForm_span__2WmmD",btn:"ContactForm_btn__3HGuw"}},10:function(t,e,n){t.exports={li:"ContactList_li__1zV7T",ul:"ContactList_ul__fWXFH",btn:"ContactList_btn__3M8P2"}},11:function(t,e,n){t.exports={label:"Filter_label__PYtOY",span:"Filter_span__3rkOz",input:"Filter_input__1eD-R"}},20:function(t,e,n){},21:function(t,e,n){},3:function(t,e,n){t.exports={title:"Phonebook_title__2EbT1",box:"Phonebook_box__31_GQ",divBox:"Phonebook_divBox__Z9lig",boxList:"Phonebook_boxList__2p9Bp"}},31:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),o=n(13),s=n.n(o),r=(n(20),n(21),n(15)),i=n(5),l=n(6),u=n(8),m=n(7),b=n(3),d=n.n(b),h=n(14),j=n(9),p=n.n(j),f=n(1),_=n.n(f),v=n(0),x=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.addContact=function(){var e=t.state,n=e.name,a=e.number;(0,t.props.onSubmit)({name:n,number:a,id:p.a.generate()})},t.checkContactList=function(){var e=t.props.contacts,n=t.state.name,a=n.toLocaleLowerCase();e.find((function(t){return t.name.toLocaleLowerCase()===a}))?alert("".concat(n," is already in contacts")):t.addContact()},t.onFormChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.onSubmitForm=function(e){e.preventDefault(),t.resetForm(),t.checkContactList()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(v.jsxs)("form",{className:_.a.form,onSubmit:this.onSubmitForm,children:[Object(v.jsxs)("label",{className:_.a.label,htmlFor:this.nameInputId,children:[Object(v.jsx)("span",{className:_.a.span,children:"Name"}),Object(v.jsx)("input",{className:_.a.input,type:"text",name:"name",placeholder:"\u0413\u0440\u0438\u0433\u043e\u0440 \u0413\u0440\u0438\u0433\u043e\u0440\u044f\u043d",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.onFormChange,id:p.a.generate()})]}),Object(v.jsxs)("label",{className:_.a.label,htmlFor:this.numberInputId,children:[Object(v.jsx)("span",{className:_.a.span,children:"Number"}),Object(v.jsx)("input",{className:_.a.input,type:"tel",name:"number",placeholder:"111-22-33",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.onFormChange,id:p.a.generate()})]}),Object(v.jsx)("button",{className:_.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=x,C=n(10),g=n.n(C);var F=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(v.jsx)("ul",{className:g.a.ul,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(v.jsxs)("li",{className:g.a.li,children:[a,": ",c,Object(v.jsx)("button",{className:g.a.btn,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},N=n(11),k=n.n(N);var S=function(t){var e=t.value,n=t.onChange;return Object(v.jsxs)("label",{className:k.a.label,children:[Object(v.jsx)("span",{className:k.a.span,children:"Find contacts by name"}),Object(v.jsx)("input",{className:k.a.input,type:"text",value:e,onChange:n})]})},y=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.formSubmitHandler=function(e){var n=t.state.contacts;t.setState({contacts:[e].concat(Object(r.a)(n))})},t.changeFilter=function(e){var n=e.target;t.setState({filter:n.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLocaleLowerCase();return n.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=this.formSubmitHandler,n=this.changeFilter,a=this.deleteContact,c=this.getFilteredContacts,o=t.contacts,s=t.filter;return Object(v.jsxs)("div",{className:d.a.box,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:d.a.title,children:"Phonebook"}),Object(v.jsx)(O,{onSubmit:e,contacts:o})]}),Object(v.jsxs)("div",{className:d.a.divBox,children:[Object(v.jsx)("h2",{className:d.a.title,children:"Contacts"}),Object(v.jsxs)("div",{className:d.a.boxList,children:[Object(v.jsx)(S,{value:s,onChange:n}),Object(v.jsx)(F,{contacts:c(),onDeleteContact:a})]})]})]})}}]),n}(a.Component),L=y;var w=function(){return Object(v.jsx)("section",{className:"container",children:Object(v.jsx)(L,{})})};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.03206a24.chunk.js.map