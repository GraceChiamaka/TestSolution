(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(1),l=a.n(n),i=(a(15),a(2)),o=a(3),c=a(5),u=a(4),m=a(6),d={restaurants:[{name:"Tanoshii Sushi",status:"open",sortingValues:{bestMatch:0,newest:96,ratingAverage:4.5,distance:1190,popularity:17,averageProductPrice:1536,deliveryCosts:200,minCost:1e3}},{name:"Tandoori Express",status:"closed",sortingValues:{bestMatch:1,newest:266,ratingAverage:4.5,distance:2308,popularity:123,averageProductPrice:1146,deliveryCosts:150,minCost:1300}},{name:"Royal Thai",status:"order ahead",sortingValues:{bestMatch:2,newest:133,ratingAverage:4.5,distance:2639,popularity:44,averageProductPrice:1492,deliveryCosts:150,minCost:2500}},{name:"Sushi One",status:"open",sortingValues:{bestMatch:3,newest:238,ratingAverage:4,distance:1618,popularity:23,averageProductPrice:1285,deliveryCosts:0,minCost:1200}},{name:"Roti Shop",status:"open",sortingValues:{bestMatch:4,newest:247,ratingAverage:4.5,distance:2308,popularity:81,averageProductPrice:915,deliveryCosts:0,minCost:2e3}},{name:"Aarti 2",status:"open",sortingValues:{bestMatch:5,newest:153,ratingAverage:4.5,distance:1605,popularity:44,averageProductPrice:922,deliveryCosts:250,minCost:500}},{name:"Pizza Heart",status:"order ahead",sortingValues:{bestMatch:6,newest:118,ratingAverage:4,distance:2453,popularity:9,averageProductPrice:1103,deliveryCosts:150,minCost:1500}},{name:"Mama Mia",status:"order ahead",sortingValues:{bestMatch:7,newest:250,ratingAverage:4,distance:1396,popularity:6,averageProductPrice:912,deliveryCosts:0,minCost:1e3}},{name:"Feelfood",status:"order ahead",sortingValues:{bestMatch:8,newest:163,ratingAverage:4.5,distance:2732,popularity:31,averageProductPrice:902,deliveryCosts:150,minCost:1500}},{name:"Daily Sushi",status:"closed",sortingValues:{bestMatch:9,newest:221,ratingAverage:4,distance:1911,popularity:6,averageProductPrice:1327,deliveryCosts:200,minCost:1e3}},{name:"Pamukkale",status:"closed",sortingValues:{bestMatch:10,newest:201,ratingAverage:4,distance:2353,popularity:25,averageProductPrice:968,deliveryCosts:0,minCost:2e3}},{name:"Indian Kitchen",status:"open",sortingValues:{bestMatch:11,newest:272,ratingAverage:4.5,distance:2308,popularity:5,averageProductPrice:1189,deliveryCosts:150,minCost:1300}},{name:"CIRO 1939",status:"open",sortingValues:{bestMatch:12,newest:231,ratingAverage:4.5,distance:3957,popularity:79,averageProductPrice:1762,deliveryCosts:99,minCost:1300}},{name:"Zenzai Sushi",status:"closed",sortingValues:{bestMatch:13,newest:155,ratingAverage:4,distance:2911,popularity:36,averageProductPrice:1579,deliveryCosts:0,minCost:2e3}},{name:"Fes Patisserie",status:"order ahead",sortingValues:{bestMatch:14,newest:77,ratingAverage:4,distance:2302,popularity:3,averageProductPrice:1214,deliveryCosts:150,minCost:1250}},{name:"Yvonne's Vispaleis",status:"order ahead",sortingValues:{bestMatch:15,newest:150,ratingAverage:5,distance:2909,popularity:3,averageProductPrice:2557,deliveryCosts:150,minCost:1750}},{name:"De Amsterdamsche Tram",status:"open",sortingValues:{bestMatch:304,newest:131,ratingAverage:0,distance:2792,popularity:0,averageProductPrice:892,deliveryCosts:0,minCost:0}},{name:"Lale Restaurant & Snackbar",status:"order ahead",sortingValues:{bestMatch:305,newest:73,ratingAverage:0,distance:2880,popularity:0,averageProductPrice:838,deliveryCosts:0,minCost:0}},{name:"Lunchpakketdienst",status:"open",sortingValues:{bestMatch:306,newest:259,ratingAverage:3.5,distance:14201,popularity:0,averageProductPrice:4465,deliveryCosts:500,minCost:5e3}}]},g=function(e){return s.a.createElement("div",{className:"col-md-4"},s.a.createElement("div",{className:"card teal teal-darken-2 text-white"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h3",null,e.name),s.a.createElement("p",null,e.status),s.a.createElement("table",{className:"table white-text border border-light table-sm"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Popularity Rating"),s.a.createElement("td",{className:"text-left"},e.pop)),s.a.createElement("tr",null,s.a.createElement("td",null,"Minimum Cost"),s.a.createElement("td",{className:"text-left"},e.min)),s.a.createElement("tr",null,s.a.createElement("td",null,"Best Match"),s.a.createElement("td",{className:"text-left"},e.match)),s.a.createElement("tr",null,s.a.createElement("td",null,"Delivery Costs"),s.a.createElement("td",{className:"text-left"},e.delCost)),s.a.createElement("tr",null,s.a.createElement("td",null,"Average Price"),s.a.createElement("td",{className:"text-left"},e.avg)),s.a.createElement("tr",null,s.a.createElement("td",null,"Popularity Rating"),s.a.createElement("td",{className:"text-left"},e.pop)))))))},v=(a(16),function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={restaurants:d.restaurants,result:[],search:"",filterValue:"",isSearch:!1,isFilter:!1},a.onSearch=function(e){a.state.isFilter&&a.setState({isFilter:!1}),a.setState({search:e.target.value,isSearch:!0})},a.onSelect=function(e){a.state.isSearch&&a.setState({isSearch:!1}),a.setState({filterValue:e.target.value,isFilter:!0})},a.searchFilter=function(){return a.state.restaurants.filter(function(e){return-1!==e.name.toLowerCase().indexOf(a.state.search.toLowerCase())})},a.search_restaurants=function(){return a.searchFilter().map(function(e,t){return s.a.createElement(g,{key:t,name:e.name,status:e.status,pop:e.sortingValues.popularity,min:e.sortingValues.minCost,avg:e.sortingValues.averageProductPrice,delCost:e.sortingValues.deliveryCosts,match:e.sortingValues.bestMatch})})},a.filter_restuarants=function(){return a.parseFilter().map(function(e,t){return s.a.createElement(g,{key:t,name:e.name,status:e.status,pop:e.sortingValues.popularity,min:e.sortingValues.minCost,avg:e.sortingValues.averageProductPrice,delCost:e.sortingValues.deliveryCosts,match:e.sortingValues.bestMatch})})},a.all=function(){return a.state.restaurants.map(function(e,t){return s.a.createElement(g,{key:t,name:e.name,status:e.status,pop:e.sortingValues.popularity,min:e.sortingValues.minCost,avg:e.sortingValues.averageProductPrice,delCost:e.sortingValues.deliveryCosts,match:e.sortingValues.bestMatch})})},a.restaurants=function(){return a.state.isFilter?a.filter_restuarants():a.state.isSearch?a.search_restaurants():a.all()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"parseFilter",value:function(){var e=this.state.filterValue.split(":"),t=e[0];switch(e[1]){case"status":return this.state.restaurants.filter(function(e){return e.status===t.replace("_"," ")});case"sortingValues":return this.state.restaurants.filter(function(e){return e.sortingValues.hasOwnProperty(t)});default:return console.log("empty"),[]}}},{key:"render",value:function(){this.state.search;return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark primary-color"},s.a.createElement("a",{className:"navbar-brand",href:"#"},"Navbar"),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#basicExampleNav","aria-controls":"basicExampleNav","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"basicExampleNav"},s.a.createElement("ul",{className:"navbar-nav mx-auto"})))),s.a.createElement("main",null,s.a.createElement("div",{className:"container my-5 py-5"},s.a.createElement("h1",null,"The Restaurants Directory"),s.a.createElement("div",{className:" row justify-content-between mt-5"},s.a.createElement("div",{className:"col-md-4"},s.a.createElement("select",{className:"form-control border border-teal",onChange:this.onSelect},s.a.createElement("option",{value:"all"},"all"),s.a.createElement("option",{value:"bestMatch:sortingValues"},"Best Match"),s.a.createElement("option",{value:"minCost:sortingValues"},"Minimum Cost"),s.a.createElement("option",{value:"newest:sortingValues"},"Newest"),s.a.createElement("option",{value:"open:status"},"Open"),s.a.createElement("option",{value:"closed:status"},"Closed"),s.a.createElement("option",{value:"order_ahead:status"},"Order Ahead"),s.a.createElement("option",{value:"ratingAverage:sortingValues"},"Rating Average"),s.a.createElement("option",{value:"distance:sortingValues"},"Distance"),s.a.createElement("option",{value:"popularity:sortingValues"},"Popularity"),s.a.createElement("option",{value:"averageProductPrice:sortingValues"},"Avg Product Price"),s.a.createElement("option",{value:"deliveryCosts:sortingValues"},"Delivery Costs"))),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("form",{className:""},s.a.createElement("div",{className:"md-form my-0"},s.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search","aria-label":"Search",onChange:this.onSearch}))))),s.a.createElement("div",{className:"row mt-5 pt-5"},this.restaurants()))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){e.exports=a(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.82bebc4b.chunk.js.map