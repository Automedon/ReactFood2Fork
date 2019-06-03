(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),s=(a(16),a(6)),i=a.n(s),o=a(7),m=a(1),u=a(2),p=a(4),d=a(3),h=a(5),b=(a(18),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.recipe,t=e.image_url,a=e.title,n=e.source_url,c=e.publisher,l=e.recipe_id,s=this.props.handleDetails;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-10 mx-auto col-md-6 col-lg-4 my-3"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:t,alt:"recipe",className:"img-card-top",style:{height:"14rem"}}),r.a.createElement("div",{className:"card-body text-capitalize"},r.a.createElement("h6",null,a),r.a.createElement("h6",{className:"text-warning text-slanted"},"Provided by ",c)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{type:"button",className:"btn btn-primary text-capitalize",onClick:function(){return s(0,l)}},"details"),r.a.createElement("a",{href:n,className:"btn btn-success mx-2 text-capitalize",target:"_blank",rel:"noopener noreferrer"},"recipe url")))))}}]),t}(n.Component)),f=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.handleSubmit,n=e.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-8 mt-5 text-center"},r.a.createElement("h1",{className:"text-slanted text-capitalize"},"search for recipe with ",r.a.createElement("strong",{className:"text-danger"},"Food2Fork")),r.a.createElement("form",{className:"mt-4 ",onSubmit:a},r.a.createElement("label",{htmlFor:"search",className:"text-capitalize"},"type recipes separated by comma"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",type:"text",name:"search",placeholder:"chicken,onions,carrots",value:t,onChange:n}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"submit",className:"input-group-text bg-primary text-white"}," ",r.a.createElement("i",{className:"fas fa-search"})))))))))}}]),t}(n.Component),g=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.recipes,a=e.handleDetails,n=e.value,c=e.handleSubmit,l=e.handleChange,s=e.error;return r.a.createElement("div",null,r.a.createElement(f,{value:n,handleChange:l,handleSubmit:c}),r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",null,r.a.createElement("div",{className:"col-10 mx-auto col-md-6 text-center text-uppercase mb-3"},r.a.createElement("h1",{className:"text-slanted"},"Recipe List")),r.a.createElement("div",{className:"row "},s?r.a.createElement("h1",{className:"text-danger text-center"},s):t.map(function(e){return r.a.createElement(b,{handleDetails:a,key:e.recipe_id,recipe:e})})))))}}]),t}(n.Component),v={f2f_url:"http://food2fork.com/view/35382",image_url:"http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",ingredients:["2 jalapeno peppers, cut in half lengthwise and seeded","2 slices sour dough bread","1 tablespoon butter, room temperature","2 tablespoons cream cheese, room temperature","1/2 cup jack and cheddar cheese, shredded","1 tablespoon tortilla chips, crumbled"],publisher:"Closet Cooking",publisher_url:"http://closetcooking.com",source_url:"http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html",title:"Jalapeno Popper Grilled Cheese Sandwich"},E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={recipe:v,url:"https://www.food2fork.com/api/get?key=516828933d9d5aaef3df4705d66f6da2&rId=".concat(a.props.id)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getRecipes",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(this.state.url);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({recipe:a.recipe}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getRecipes()}},{key:"render",value:function(){var e=this.state.recipe,t=e.image_url,a=e.publisher,n=e.publisher_url,c=e.source_url,l=e.title,s=e.ingredients,i=this.props.handleIndex;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("button",{type:"button",className:"btn btn-warning mb-5 text-capitalize",onClick:function(){return i(1)}},"back to recipe list"),r.a.createElement("img",{src:t,className:"d-block w-100",alt:"recipe"})),r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("h6",{className:"text-uppercase"},l),r.a.createElement("h6",{className:"text-warning text-capitalize text-slanted"},"provided by ",a),r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary mt-2 text-capitalize"},"publisher web-page"),r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"btn btn-success mt-2 mx-3 text-capitalize"},"recipe"),r.a.createElement("ul",{className:"list-group mt-4"},r.a.createElement("h2",{className:"mt-3 mb-4"},"Ingredients"),s.map(function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item text-slanted"},e)}))))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={recipes:[],url:"https://www.food2fork.com/api/search?key=516828933d9d5aaef3df4705d66f6da2",base_url:"https://www.food2fork.com/api/search?key=516828933d9d5aaef3df4705d66f6da2",id:35382,pageIndex:1,search:"",query:"&q=",error:""},a.handleIndex=function(e){a.setState({pageIndex:e})},a.handleDetails=function(e,t){a.setState({pageIndex:e,id:t})},a.displayPage=function(e){switch(e){case 1:return r.a.createElement(g,{recipes:a.state.recipes,handleDetails:a.handleDetails,value:a.state.search,handleChange:a.handleChange,handleSubmit:a.handleSubmit,error:a.state.error});case 0:return r.a.createElement(E,{id:a.state.id,handleIndex:a.handleIndex})}},a.handleChange=function(e){var t=e.target.value;a.setState({search:t})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.base_url,r=t.query,c=t.search;a.setState(function(){return{url:"".concat(n).concat(r).concat(c),search:""}},function(){a.getRecipes()})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getRecipes",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(this.state.url);case 3:return t=e.sent,e.next=6,t.json();case 6:0===(a=e.sent).recipes.length?this.setState({error:"No matches"}):this.setState({recipes:a.recipes}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getRecipes()}},{key:"render",value:function(){return console.log(this.state),r.a.createElement(r.a.Fragment,null,this.displayPage(this.state.pageIndex))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.3511ce21.chunk.js.map