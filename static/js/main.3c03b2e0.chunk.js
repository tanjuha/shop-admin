(this["webpackJsonpshop-admin"]=this["webpackJsonpshop-admin"]||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){},33:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(15),i=c.n(n),r=(c(30),c(31),c(0)),l=function(){return Object(r.jsx)("div",{className:"footer",children:"2021 \xa9 Admin"})},o=(c(33),c(9)),j=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("nav",{className:"sidebar",children:[Object(r.jsx)(o.b,{to:"/shop-admin",className:"sidebar-brand",children:"Admin"}),Object(r.jsxs)("div",{className:"sidebar-nav",children:[Object(r.jsx)(o.b,{to:"/shop-admin",className:"nav-link",exact:!0,activeClassName:"active",children:"Home"}),Object(r.jsx)(o.b,{to:"/shop-admin/add-product",className:"nav-link",activeClassName:"active",children:"Add product"}),Object(r.jsx)(o.b,{to:"/shop-admin/about",className:"nav-link",activeClassName:"active",children:"About"})]})]})})},d=(c(39),c(3)),m=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:"Home"}),Object(r.jsx)("img",{className:"d-block m-auto",src:"./images/home.webp",alt:"home"})]})},b=c(17),u=c(8),h=c(20),p=c(18),O=c(12),x=c(19),f=Object(x.b)({name:"products",initialState:{products:[]},reducers:{addProduct:function(e,t){e.products=[].concat(Object(O.a)(e.products),[t.payload]),localStorage.setItem("products",JSON.stringify(e.products))}}}),v=f.actions.addProduct,N=f.reducer,g=c(25),y=(c(40),function(e){var t=e.state,c=e.setState,s=Object(a.useState)(!1),n=Object(h.a)(s,2),i=n[0],l=n[1],o=function(e){var a,s=[],n=Object(g.a)(e);try{var i=function(){var e=a.value,n=new FileReader;n.readAsDataURL(e),n.addEventListener("load",(function(){var a={name:e.name,type:e.type,size:e.size,src:n.result};s.push(a),c(Object(u.a)(Object(u.a)({},t),{},{photos:[].concat(Object(O.a)(m),s)}))}))};for(n.s();!(a=n.n()).done;)i()}catch(r){n.e(r)}finally{n.f()}},j=function(e){var a=1*e.target.parentElement.dataset.imgindex;c(Object(u.a)(Object(u.a)({},t),{},{photos:[].concat(Object(O.a)(m.slice(0,a)),Object(O.a)(m.slice(a+1)))}))},d=function(e){e.preventDefault(),e.stopPropagation(),l(!0)},m=t.photos;return Object(r.jsx)("div",{className:"file-upload",children:Object(r.jsxs)("div",{className:"custom-form-group",children:[Object(r.jsxs)("div",{className:i?"custom-file-drop-area highlight":"custom-file-drop-area",onDragEnter:d,onDragOver:d,onDragLeave:function(e){e.preventDefault(),e.stopPropagation(),l(!1)},onDrop:function(e){e.preventDefault(),e.stopPropagation(),l(!1);var t=e.dataTransfer.files;o(t)},children:[Object(r.jsx)("input",{type:"file",name:"photos",placeholder:"Enter photos",multiple:!0,id:"filephotos",onChange:function(e){var t=e.target.files;o(t)}}),Object(r.jsx)("label",{htmlFor:"filephotos",children:"Drop files here or click to upload."})]}),Object(r.jsx)("div",{className:"photos-preview",children:m.length>0&&m.map((function(e,t){var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var c=1024,a=t<0?0:t,s=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(e)/Math.log(c));return parseFloat((e/Math.pow(c,n)).toFixed(a))+" "+s[n]}(e.size);return Object(r.jsxs)("div",{className:"prev-img justify-content-between","data-imgindex":t,children:[Object(r.jsxs)("div",{className:"d-flex align-items-center",children:[Object(r.jsx)("img",{className:"img-item",src:e.src,alt:e.name}),Object(r.jsxs)("div",{className:"d-flex flex-column mx-2",children:[Object(r.jsx)("span",{className:"img-name",children:e.name}),Object(r.jsx)("strong",{className:"img-size",children:c})]})]}),Object(r.jsx)("span",{className:"img-delete",onClick:j,children:"\xd7"})]},t)}))})]})})}),C=(c(41),function(){var e=Object(a.useState)({photos:[],title:"",description:"",purchasePrice:"","\u0441urrency\u0421ourse":"",currencyType:"",amount:"",salePrice:"",category:""}),t=Object(h.a)(e,2),c=t[0],s=t[1],n=Object(p.b)(),i=function(e){s(Object(u.a)(Object(u.a)({},c),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Add Product"}),Object(r.jsxs)("form",{className:"form-container",onSubmit:function(e){e.preventDefault(),n(v(c))},children:[Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{className:"form-label",children:"Title"}),Object(r.jsx)("input",{type:"text",className:"form-control",name:"title",onChange:i})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{className:"form-label",children:"Description"}),Object(r.jsx)("textarea",{className:"form-control",name:"description",onChange:i})]}),Object(r.jsxs)("div",{className:"mb-3 d-flex align-items-end",children:[Object(r.jsxs)("div",{className:"w-100",children:[Object(r.jsx)("label",{className:"form-label",children:"Purchase price"}),Object(r.jsx)("input",{type:"text",className:"form-control",name:"purchasePrice",onChange:i})]}),Object(r.jsxs)("div",{className:"form-check m-2",children:[Object(r.jsx)("input",{className:"form-check-input",type:"radio",name:"dollar",onChange:i}),Object(r.jsx)("label",{className:"form-check-label",children:"$"})]}),Object(r.jsxs)("div",{className:"form-check m-2",children:[Object(r.jsx)("input",{className:"form-check-input",type:"radio",name:"euro",onChange:i}),Object(r.jsx)("label",{className:"form-check-label",children:"\u20ac"})]}),Object(r.jsxs)("div",{className:"form-check m-2",children:[Object(r.jsx)("input",{className:"form-check-input",type:"radio",name:"hryvnia",onChange:i}),Object(r.jsx)("label",{className:"form-check-label",children:"\u20b4"})]})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{className:"form-label",children:"Currency course"}),Object(r.jsx)("input",{type:"text",className:"form-control",name:"\u0441urrency\u0421ourse",onChange:i})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{className:"form-label",children:"Currency type"}),Object(r.jsxs)("select",{className:"form-select",name:"currencyType",onChange:i,defaultValue:"0",children:[Object(r.jsx)("option",{disabled:!0,value:"0",children:"Select currency type"}),Object(r.jsx)("option",{value:"1",children:"$"}),Object(r.jsx)("option",{value:"2",children:"\u20ac"}),Object(r.jsx)("option",{value:"3",children:"\u20b4"})]})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{className:"form-label",children:"Amount"}),Object(r.jsx)("input",{type:"number",className:"form-control",name:"amount",onChange:i})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{className:"form-label",children:"Sale price"}),Object(r.jsx)("input",{type:"number",className:"form-control",name:"salePrice",onChange:i})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{className:"form-label",children:"Category"}),Object(r.jsxs)("select",{className:"form-select",name:"category",onChange:i,defaultValue:0,children:[Object(r.jsx)("option",{disabled:!0,value:"0",children:"Select category"}),Object(r.jsx)("option",{value:"1",children:"One"}),Object(r.jsx)("option",{value:"2",children:"Two"}),Object(r.jsx)("option",{value:"3",children:"Three"})]})]}),Object(r.jsxs)("div",{className:"",children:[Object(r.jsx)("label",{className:"form-label",children:"Images"}),Object(r.jsx)(y,{state:c,setState:s})]}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})}),k=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:"About Us"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nihil sapiente commodi cupiditate iure! Rem, vero dicta. Eius perferendis eum dignissimos debitis voluptate consectetur atque quisquam sed repellendus doloribus, culpa laudantium praesentium asperiores reprehenderit voluptates officiis corporis impedit, aperiam, itaque ipsa quam consequatur soluta. Atque praesentium facilis voluptatibus minima libero."})]})},P=[{path:"/",exact:!0,main:function(){return Object(r.jsx)(d.a,{to:"/shop-admin"})}},{path:"/shop-admin",exact:!0,main:function(){return Object(r.jsx)(m,{})}},{path:"/shop-admin/add-product",exact:!0,main:function(){return Object(r.jsx)(C,{})}},{path:"/shop-admin/about",exact:!0,main:function(){return Object(r.jsx)(k,{})}}],S=function(){return Object(r.jsx)(o.a,{children:Object(r.jsx)("div",{className:"wrapper",children:Object(r.jsxs)("div",{className:"d-flex align-items-stretch",children:[Object(r.jsx)(j,{}),Object(r.jsx)("div",{className:"w-100",children:Object(r.jsxs)("div",{className:"content-container",children:[Object(r.jsx)("div",{className:"content-page",children:Object(r.jsx)(d.d,{children:P.map((function(e,t){return Object(r.jsx)(d.b,{path:e.path,exact:e.exact,children:Object(r.jsx)(e.main,{})},t)}))})}),Object(r.jsx)(l,{})]})})]})})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))},D=(c(42),Object(x.a)({reducer:{products:N}}));i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(p.a,{store:D,children:Object(r.jsx)(S,{})})}),document.getElementById("root")),B()}},[[43,1,2]]]);
//# sourceMappingURL=main.3c03b2e0.chunk.js.map