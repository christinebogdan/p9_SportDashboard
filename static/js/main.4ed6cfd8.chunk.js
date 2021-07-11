(this.webpackJsonpproject_12=this.webpackJsonpproject_12||[]).push([[0],{190:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){},194:function(e,t,n){},195:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){},334:function(e,t,n){},335:function(e,t,n){},336:function(e,t,n){},337:function(e,t,n){},338:function(e,t,n){},339:function(e,t,n){},340:function(e,t,n){},341:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(65),i=n.n(s),c=(n(190),n(15)),A=n(16),o=n(17),l=n(18),u=(n(191),n(192),n.p+"static/media/logo.fceb97d6.svg"),d=n(2),h=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(A.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{src:u,alt:"",className:"header__logo"}),Object(d.jsx)("nav",{className:"nav",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Home"}),Object(d.jsx)("li",{children:"Profile"}),Object(d.jsx)("li",{children:"Settings"}),Object(d.jsx)("li",{children:"Community"})]})})]})}}]),n}(r.a.Component),j=(n(194),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(A.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"greeting",children:[Object(d.jsxs)("h1",{className:"greeting__text",children:["Hello ",Object(d.jsx)("span",{className:"greeting__text--name",children:this.props.name})]}),Object(d.jsx)("p",{className:"greeting__status",children:"Congratulations, you've reached yesterday's goal!"})]})}}]),n}(r.a.Component)),g=(n(195),n(196),n(197),n(342)),p=n(343),b=n(347),O=n(91),x=n(92),m=n(74),C=n(71),v=n(174),f=n(58),B=n.n(f),y=n(161),w=n(8),F=n.n(w),L=function(){var e=Object(y.a)(B.a.mark((function e(t){var n,a,r,s,i,c=arguments;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"",a="http://localhost:3000/user/".concat(t).concat(n),r={},e.prev=3,e.next=6,fetch(a);case 6:return s=e.sent,e.next=9,s.json();case 9:return i=e.sent,r.isLoaded=!0,r.error=null,r.data=i.data,e.abrupt("return",r);case 16:return e.prev=16,e.t0=e.catch(3),r.isLoaded=!0,r.error=e.t0,e.abrupt("return",r);case 21:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t){return e.apply(this,arguments)}}(),k=L;L.propTypes={user:F.a.string.isRequired,endpoint:F.a.string},L.defaultProps={endpoint:""};var D=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).endpoint=a.props.endpoint,a.user=a.props.user,a.state={error:null,isLoaded:!1,data:{}},a}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=this;k(this.user,this.endpoint).then((function(t){e.setState(t)}))}},{key:"getDayFromDate",value:function(e){return new Date(e).getDate()}},{key:"getLegendText",value:function(e){return Object(d.jsx)("span",{style:{color:"#74798C",paddingLeft:"10px",verticalAlign:"middle",fontSize:"14px",lineHeight:"24px",fontWeight:"500"},children:e})}},{key:"getCustomTooltipElement",value:function(e){var t=e.active,n=e.payload;return t&&n&&n.length?Object(d.jsxs)("div",{className:"barChart__tooltip",children:[Object(d.jsx)("p",{className:"barChart__tooltip-kg",children:"".concat(n[0].value,"kg")}),Object(d.jsx)("p",{className:"barChart__tooltip-cal",children:"".concat(n[1].value,"kCal")})]}):null}},{key:"render",value:function(){return Object(d.jsx)(g.a,{width:"99%",height:"99%",debounce:1,children:Object(d.jsxs)(p.a,{data:this.state.data.sessions,barGap:8,barSize:7,children:[Object(d.jsx)(b.a,{strokeDasharray:"1 2",vertical:!1}),Object(d.jsx)(O.a,{padding:{left:10,right:10},scale:"point",dataKey:"day",tickFormatter:this.getDayFromDate,tickLine:!1,tick:{transform:"translate(0,16)"},axisLine:{stroke:"#DEDEDE"}}),Object(d.jsx)(x.a,{orientation:"right",tickLine:!1,axisLine:!1,tick:{transform:"translate(30,0)"}}),Object(d.jsx)(m.a,{cursor:{fill:"rgba(196, 196, 196, 0.5)"},content:this.getCustomTooltipElement}),Object(d.jsx)(C.a,{iconSize:8,iconType:"circle",verticalAlign:"top",align:"right",formatter:this.getLegendText,wrapperStyle:{paddingBottom:"47px"}}),Object(d.jsx)(v.a,{dataKey:"kilogram",name:"Weight (kg)",fill:"#282D30",radius:[3,3,0,0]}),Object(d.jsx)(v.a,{dataKey:"calories",name:"Burned calories (kCal)",fill:"#E60000",radius:[3,3,0,0]})]})})}}]),n}(r.a.Component),S=n(348),H=n(94),N=n(349),R=n(175),I=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).endpoint=a.props.endpoint,a.user=a.props.user,a.state={error:null,isLoaded:!1,data:{},isSmall:window.innerWidth<1300},a}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=this;k(this.user,this.endpoint).then((function(t){e.setState(t)}));window.addEventListener("resize",(function(){e.setState({isSmall:window.innerWidth<1465})}))}},{key:"formatData",value:function(e){var t=e.kind,n=e.data,a=[];return n&&(a=n.map((function(e,n){return{value:e.value,kind:t[e.kind].charAt(0).toUpperCase()+t[e.kind].slice(1)}}))),a}},{key:"render",value:function(){var e=this.formatData(this.state.data);return e.length>0?Object(d.jsx)(g.a,{width:"99%",height:"99%",debounce:1,children:Object(d.jsxs)(S.a,{outerRadius:this.state.isSmall?"60%":"70%",data:e,style:{backgroundColor:"#282D30",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.0212249)",borderRadius:"5px"},children:[Object(d.jsx)(H.a,{dataKey:"kind",tick:{fill:"#FFFFFF",fontWeight:"500",fontSize:"12px",lineHeigt:"24px"}}),Object(d.jsx)(N.a,{gridType:"polygon",radialLines:!1}),Object(d.jsx)(R.a,{dataKey:"value",fill:"rgba(255, 1, 1, 0.7)"})]})}):null}}]),n}(r.a.Component),Q=n(350),E=n(179),W=(n(334),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).user=a.props.user,a.endpoint=a.props.endpoint,a.state={error:null,isLoaded:!1,data:{}},a}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=this;k(this.user,this.endpoint).then((function(t){e.setState(t)}))}},{key:"getWeekDayInitialFromDate",value:function(e){return{1:"M",2:"T",3:"W",4:"T",5:"F",6:"S",7:"S"}[e]}},{key:"getCustomTooltipElement",value:function(e){var t=e.active,n=e.payload;return t&&n&&n.length?Object(d.jsx)("div",{className:"lineChart__tooltip",children:Object(d.jsx)("p",{children:"".concat(n[0].value," min")})}):null}},{key:"render",value:function(){return Object(d.jsx)(g.a,{width:"99%",height:"99%",debounce:1,children:Object(d.jsxs)(Q.a,{margin:{top:90,right:0,left:0,bottom:16},data:this.state.data.sessions,style:{background:"linear-gradient(to right, #FF0000 72%, #E60001 72% 100%)",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.0212249)",borderRadius:"5px"},children:[Object(d.jsx)("defs",{children:Object(d.jsxs)("linearGradient",{id:"linear",children:[Object(d.jsx)("stop",{offset:"0%",stopColor:"rgba(255,255,255,0.4)"}),Object(d.jsx)("stop",{offset:"100%",stopColor:"rgba(255,255,255,1)"})]})}),Object(d.jsx)(O.a,{dataKey:"day",tickLine:!1,axisLine:!1,tickFormatter:this.getWeekDayInitialFromDate,tick:{fill:"rgba(255,255,255,0.5)",fontSize:"12px",fontWeight:"500",lineHeight:"24px"},tickMargin:5,interval:"preserveStartEnd"}),Object(d.jsx)(m.a,{content:this.getCustomTooltipElement,offset:5,cursor:!1}),Object(d.jsx)(E.a,{type:"monotone",dataKey:"sessionLength",strokeWidth:2,stroke:"url('#linear')",dot:!1,activeDot:{r:4,fill:"white",strokeWidth:8,stroke:"rgba(255, 255, 255, 0.23)"}})]})})}}]),n}(r.a.Component)),Y=n(351),M=n(180),T=n(90),U=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).user=a.props.user,a.endpoint=a.props.endpoint,a.state={error:null,isLoaded:!1,data:{}},a}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=this;k(this.user,this.endpoint).then((function(t){e.setState(t)}))}},{key:"formatData",value:function(e){var t;return[{name:"todayScore",value:null!==(t=e.todayScore)&&void 0!==t?t:e.score},{name:"placeholder",value:1}]}},{key:"getFormattedLegend",value:function(e){return Object(d.jsxs)("div",{style:{position:"absolute",height:"120px",width:"60px",display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignContent:"center"},children:[Object(d.jsx)("p",{style:{fontFamily:"Roboto",fontSize:"26px",lineHeight:"36px",margin:"0"},children:"".concat(100*e[0].value,"%")}),Object(d.jsx)("p",{style:{fontFamily:"Roboto",fontSize:"16px",color:"#74798C",lineHeight:"20px",margin:"0"},children:"of your"}),Object(d.jsx)("p",{style:{fontFamily:"Roboto",fontSize:"16px",color:"#74798C",lineHeight:"20px",margin:"0"},children:"goal"})]})}},{key:"render",value:function(){var e=this,t=this.formatData(this.state.data);return Object(d.jsx)(g.a,{width:"99%",height:"99%",children:Object(d.jsxs)(Y.a,{cx:"50%",cy:"50%",innerRadius:"70%",outerRadius:"90%",barSize:20,data:t,startAngle:220,endAngle:-210,children:[Object(d.jsx)(M.a,{minAngle:15,clockWise:!0,dataKey:"value",fill:"#FF0000",cornerRadius:10,children:t.map((function(e,t){return Object(d.jsx)(T.a,{fill:0===t?"#FF0000":"rgba(255, 0, 0, 0)"},"cell-".concat(t))}))}),Object(d.jsx)(C.a,{wrapperStyle:{position:"absolute",top:"calc(50% - 60px)",left:"calc(50% - 30px)"},content:function(){return e.getFormattedLegend(t)}})]})})}}]),n}(r.a.Component),X=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).type=a.props.type,a.user=a.props.user,a.endpoint=a.props.endpoint,a}return Object(A.a)(n,[{key:"render",value:function(){switch(this.type){case"barChart":return Object(d.jsx)(D,{user:this.user,endpoint:this.endpoint});case"lineChart":return Object(d.jsx)(W,{user:this.user,endpoint:this.endpoint});case"radarChart":return Object(d.jsx)(I,{user:this.user,endpoint:this.endpoint});case"radialBarChart":return Object(d.jsx)(U,{user:this.user,endpoint:this.endpoint});default:return null}}}]),n}(r.a.Component),J=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).user=a.props.user,a}return Object(A.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"dailyActivity",children:[Object(d.jsx)("h2",{children:"Daily activity"}),Object(d.jsx)(X,{type:"barChart",user:this.user,endpoint:"/activity"})]})}}]),n}(r.a.Component),G=(n(335),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).user=a.props.user,a}return Object(A.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"charts",children:[Object(d.jsxs)("div",{className:"chart linechart",children:[Object(d.jsxs)("h3",{className:"lineChart__headline",children:["Average speed of ",Object(d.jsx)("br",{}),"your sessions"]}),Object(d.jsx)(X,{type:"lineChart",user:this.user,endpoint:"/average-sessions"})]}),Object(d.jsx)("div",{className:"chart radarchart",children:Object(d.jsx)(X,{type:"radarChart",user:this.user,endpoint:"/performance"})}),Object(d.jsxs)("div",{className:"chart radialchart",children:[Object(d.jsx)("h3",{className:"radialBarChart__headline",children:"Score"}),Object(d.jsx)(X,{type:"radialBarChart",user:this.user})]})]})}}]),n}(r.a.Component)),V=(n(336),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).user=a.props.user,a.topic=a.props.topic,a.data=a.props.data,a.images={calorieCount:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ5SURBVHgB7ZxNaxNRFIbfCdEmuBDdK7hXcK/QfUX3FfcW6lrBvYvuLbgXdF/BvWD3Qv9B/QVumqa1rfdtZuqQzuRTm5x33gcu+ZhpCnly7jn33EkyjOAMyNJNJ412Gq18mMWT1OAkjaM0jpOk07oTs5q/psgbGIg1yw9F96pEXxKc5K6kmy5q5JulhVFNyf3yk9nQGZyOuzCROUxSe8WDi5xailwTm07u8pxzwXnOtVwdurnTiwh2ztWCLlkko5Wbvg6jRpvLXMq9BqNKx4K1aVOwmxm6tCjYxZUuLfeWxbFgcSxYHAsWx4LFsWBxLFgcCxbHgsWxYHEsWBwLFseCxbFgcSxYHAsWx4LFsWBxLFgcCxbHgsWxYHEsWBwLFseCxbFgcSxYHAsWx4LFsWBxmiT4fRp30TCaIphin6exg4ZJborg+/kt5VLyTTSEpgheK92n5NdoCNkZcAvaUOg3XI7ap2nsQpwmRPA6qqfkN2gA6oIZvRs1xx6gAblYXfBH1Evk82sQR1nwNgZROopxx8OjKJiRSbnrE5z7qOI5Tusy+VntV+4ol+vcSSOzavrmEopNkV9pfEBwlJZJRRNj2k7V7aHX+JHfp+DVNPYRGJUpmpHIgmqeNmQR/eXH7xAcFcGUO2/BVPUBeYLqPB0GBcEsiB5jNjgNF0VZ3WtsIDDRczAr5W3MDgUzx46L/nv5ueGIHMH/YjnD6J1kag8bxZEFczlzVXu7YfNw1Cma+XIHV8tDBFwyRY3gReznhuxbRxTMnDlr1Tzv/w1HRMEvsRhC5uGIghcRvYQFXbj942iC+QYv8qpIC/7PLDoP3kEw/M0GcSxYnGiC5+kHF33nRhFN8DyC9tJ4lsZnzM5PBCNiBM8axRTLD8hmGm8xPSFngIg5+Cumh2LK32LgtVabmI49BCSi4E+YHgodjj5G9BYmZ56pfWFE3U3ihXGTNjy2MFokd6XGdcf44eAFeOE2/aMukyaNvHFyySuMh9HrKzquEL7h38ecM4lcso/R0+8+ppvKl4rI12TVfS2UsCBaxeRwp+hLzbGQG/0FkTtZfNNf1Bybdhm0i2qJm/CF7wuFYii5nB+Hl0TTvFYZyg1ZOZdR6EVzXVz+isks62RSrHOLijm8XKKy2VBI4Xp31oZEUUytImhTo4om/EZHo/F2oTgWLI4Fi2PB4liwOBYsjgWLY8HiWLA4FiyOBYtjweJYsDgWLI4Fi2PB4liwOBYsjgWLY8HiWLA4FiyOBYtjweJYsDgWLA4Fn8KockbBJzCqnFDwbxhVjii4D6PKcStL8zTvwKjRT25Piyr6AAPRRgO6POSdc8HZoJLuwajQy53+XQdng1xsyfE5zEp1VTZ8NMX2SrrpVh0zSw2n5V42VDRnNWcysjsYyDbLD4vkg6yiaTUySnPR1/LRhqN6WaBINqjYw+hnIwrkP5hlpSg5j1bRAAAAAElFTkSuQmCC",proteinCount:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVFSURBVHgB7d2/bxtlHMfxz3Pn2GnjJLQSkUDxhoTUMIMaMdCFMMEQJZ0YkOheiR2omCPKXMTQjUQMsBC1A2VAETv5ByhTKzXY+VE7ubuH79eJo6txEjvNqX4+/r6kyL8uXd695547P3YcTuG9d+//gup4inI8gdh5xDCvXFJChgaSpxNovl1Hc23ZpSdt63o9ubTq42clvFa6jDLM0Gs9x/PXD7DdK/T/An9430+kb6JaShDBBKMie3Uzxc6DBbebf/6FwB//7CdbFVRhgrXTws4fn7jtzuPjwLrnuhlMwQTPOzQ6e3J7GNZjrg7LMBTGY1S1qd5vB346hkk75vJoSUudJOv9SEtXLuESDBU9A9LT3KjexDgMpRuPMBHJsdcCk4q3UNHjbgmGkl59jGxyxUsvLVtcchaYnAUmZ4HJWWByFpicBSZngclZYHIWmJwFJmeByVlgchaYnAUmZ4HJWWByFpicBSZngclZYHIWmJwFJmeByVlgchaYnAUmZ4HJWWByFpicBSZngcnZp/t7GDtAzY/hczhc90DDeWxGHvf2Hf5BYCxwlzjCQlbCd3J3Cv7wObmZTx0+KnsshhbZhuhuKb6RPbfXN/7VJPJdBMYC58QeCxJ39pRN5ksx5hAQC5zj/eG3w526TYqHMfCnDNezCIAFzokc/u5zUx2uf3Ll4f/yVguckzhsyIyq0efmNbePmxhyFjhHht7lEyZYvTlcw5CzwEfkfPELuQlulnyWkQssIe90T5A0rj8MPBC5ALKBITdSgWUIvishb+kEqRP53HGBzRRYxZAbmStZ8eHwu3z0sD0Llv/d6xr8tN/TkHL6NJ0/P5bn7qVlrGAfQ28kAnfF7ai5PuJKyEW/j0bJ47o+l1YkuDwOIa6iD3xC3DPl4+rj9imUCiRsB0VgmexMyc9NqXlNht05GXanJVBdX5Ph9R0MqDtuyIIOrG/rZWV8K3fn238gyKPzBpDe1nAOTHFVsLPoKMMteVvvoZScx8W6zRJXBRlYT21chDsDXXXqk+z5P4TyRkI/ggt83vPWAdTy58mhCypweylNsXGPHYyBQlCBjyZURXssx/ZFn4S3/qqXYALr3lvAhKobVVwVTOBUVzkWiy6uCiawc4WuhaKMq8I5BmeDX5Hql0zcvmeMq8IJ7Apd/0T7h7FtRQe5cAL7QodQmkuT3UIaov9CQSJf3L/9qgUT2GeFrX9qHL/XSyicwA4/oggOv4JYSIH1OHnhi9yyGCsgFta1aI8vB/jkwZnk/HeF9fy3I6jAuhc74DNcAF25kYF771XBnQcfTYhu4yV0luVgBAR5oUMXnMvPe+c5Nz5a00yz5uosIV/Jepw6vAvdm/sILcfbDeexmABfjUpc5RbW/RvgMBdlmI8izMrePa1PxEBdh+OkjPVRiprHtPB9M4vaE6djSedOYIvVL5K92UDOApOzwOQsMDkLTM4Ck7PA5CwwOQtMzgKTs8DkLDA5C0zOApOzwOQsMDkLTM4Ck7PA5CwwOQtMzgKTs8DkLDA5C0zOApOLvNMP6xlGlRKyKI0tMKtWgoPoaowWDCUZnVvR2u/Yg6E0XUczwtcuS0qj/AFLTnLo3Vtbdml7Fn31Gf6VyBkMBW15ZQs7et91nvz0vp94MsP7raujRL+N6MGC29X7Lv/C0m++2mhhEiZYrQq2H91wO53HL1zoWJMXZp6gYcN1eLSZ7rn5uMr12nhp1cdbV1CNU1yGCUFrqoG6Tqq6X3Cn/ZaGrjcx7t5CJdnDWCmxS5vDILqMJNtDOlXB/uoH2HXO+ZO2/Q8o7oa6+PLt7wAAAABJRU5ErkJggg==",carbohydrateCount:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVjSURBVHgB7d1dThtXFMDxc+4MY2Njh6ZG0ChIealATUv6VIl0AVlB6QpYAO0CygZI895uIJAFJFKf27eqQaUF9SUSbVoUN8UYDzNjzz2dO9SID0PTStg+x+f3ENlgKxH/zJ07d2YMwhWIAGFnbgIIAxhre+GB74MauPAwotrUeALJXxHs7EW4BOllr8VeX6R18OCD+cnwiAqghl4J4xB+edHsFfpCYHq+UK43GtXSRBFBsUGBZ8s1v4kzm63TXz8TkbbnKmEIFVBslUrQxPmdZve56T5wW67G5c81pD8Wyt3neWC3z3XDMigRWvVOJZ9HQXcLfvdORfe5cmCSGjdJdo+NKx1SoQRKFHcE5A5zMd/3pvENUOJk++OmgSApghKp9jYGpv4qW6VSIrUasW9KE1YnV0JhEHgGlGgaWDgNLJwGFk4DC6eBhdPAwmlg4TSwcBpYOA0snAYWTgMLp4GF08DCaWDhNLBwGlg4DSycBhZOAwungYXTwMJpYOE0sHAaWDgNLJwGFk4DZ4q0t1RIXz4p2t9+xnh/FgQZ6Q82K8CrRUiTR4BwG4XeYzmygYP0988R7WfnPymMCpO7IMhIDtFZ3GXj4p5DhN+BMCMXeMzuz/aK6yB46yDMyAU2cOTiXvhMsGyk3o28aQ3Mmdt6EexSr+9FUP4EBBqpwAbj93p+A/0VMrImV10jNYtGortnnmfDsjXBSgxT4iZXXSN2mEQH2R8H2Wx5iwCfWbz5uAOFAxAMW9/P3QIllqgt2LdxNYWjk49l9GC80TH/voWef5+k/bGIwMdLju1sZYru+mcOgVrgp7hlATfaOP70dDgX1dDrZQRazN63eOYHYVv5ooc7LuZ+6MR6iM4XLSj80gV6k9fnK1WIu/lkC89OuC59D5j1BMYfct2q2QY+jtt6kp0kuA3XLF8EyY6TOUZmeRzcz7gOAcwWobXhhnVghmVgt9zYr7hdLrIH9UfADLvAbkJ12XLjdcuG6gf5hI4Rfluw7Qwkbhfa9AEwwi8w2fswUPZTYIRVYHRng/q8772Iqpyu22IVODDtAcc9FhSG49/xJvSqyv/BppbNb6nhFZjsUByHGs80gAlegdGIPrV3HVgFTuzYrzAEKAU2/9FYBf5nLXjgP9zEm9oCJthNstzVGDBA3K6dZhcY0XwLAzTov/+/4rcFG2+gW5Al7xkwwi6wuwJyUMOkOy/Maf/rsFzoQMSnMABE/kNghmXgDpTddVJ9nU1zvbWFZ2BTzeL6a9BHHLdeh+1adGSmvwaCvuwPOd+Yxvpkg/WDFegDzjemsQ6ckJvR+l/AdTLeGucL4dmfLnRDNaG5nuETva8imGG57+0ScWdDjO+sFOFlI5sJLV/2mvxOBTQ/wvHsu0pk37/ygnkXF2dWgTkx9yZFeGu1CHs/kU2XToXLYnqPs9WnjV4LFPn11e6Of7L3u5cC5Yso3tialFtK9e5C4fSSHeE0sHAaWDgNLJwGFk4DC6eBhdPAwmlg4TSwcBpYOA0snAYWTgMLp4GF08DCaWDhNLBwGlg4DSycBhZOAwungYXTwMJpYOE0sHAaWDgNLJyhJElBiUSBZ035RqEDSiTbsm1T/5MSUCJVikFkat/stEDJtLAZGVwFWxrHGJQoCcYhIqTHs+j57f3w0BAoEagT28kPXzTd4zywK1278Vo/Ll+IcqHadE3d45PjYLy31wpDaIJizTXEe5sn8yo8/wJ6Pl2uN25WSxMWQbHhhuV8yz0V1+kZkQi8/R/uVAIqlEANvbSNceWj7f3usHzalVupCw2b08Vm9FbRYDSGfkGXNoeA9TodisbSuE1J7eOdwyzspRPkvwG78dNiWCXyswAAAABJRU5ErkJggg==",lipidCount:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU7SURBVHgB7d1PT1xVGMfx33POHYoyLa07E9m5MMLGJay1YaWJBLtyURNegFLjsrpw4R+s+ya4cCVjN25Km65LYuKuuDImDV1bgaHCzL3n8Zzb0kCZGYww7XmePJ+Elk6n0PCdc+65Zy4MYQBmJrz3dRO+GgE6HtTwMC9eiQBPJXb+2sX4/V1qtap+d6VeN/L8ikf5x3kQj8DkL3T/QWN9u1foI4H54jdjGO00UcDByJFG9e5Im25/unPw5kOB+d2vzqIomzBylUWbfvlse/+PT0dpPXItrnyxYd3yiTpwfcxN07LRIbbk+fl6Qfx4BHd/P2vHXEVSy/Kt8+ldV49e13gJRpd4BpROc4kvXhlD88I5GH18d9th7JVRGJ3KkTMOFRcwSnW8s8WVYnFr2eIqZ4GVs8DKWWDlLLByFlg5C6ycBVbOAitngZWzwMpZYOUssHIWWDkLrJwFVs4CK2eBlbPAyllg5SywchZYOQusnAVWzgIrZ4GVs8DKWWDlLLByFlg5dd8b3A3dCU88S/DTDEwCPDHo/gR3L97nAaNac+RvAv4BFCF+/8tXoUAVyhnn8AkzZnACRLgbAr7zrrgLBeRP0WU4x1wtxzA/nzRukj5G+lgB4Vp82LwG4YQHDpOVD3cYPIvTxuFSjH1DemTBgcNkCOEGAUMLEB84EyHwnTj/T0IomYHjQqri8ENcIfX78U/XXeXeSG+x0hJOIn6OQEHsSBYZuCLqO3IJtOqouIrCbaU354qltHDCScTIzLQMgcQFDigXB03LzLx+5LaANRwjnlKtpdEe//2t3n8fpkIoFyGMrMBxao4Ln0uD7kIO00duIxp8DI1hPRVzabR717gcb7ne554LadUOQYSNYJo+blGVTnPSKK9DxLfA5RfHrbJdcIeCusL1Pm6n47ELCxBE1E5WIPy3Ly5jMfgwlOm01wyRMzkj2NdT41BOV4LHoQdDqPqP0nozRdA0LWYEV90wRYQhCQtxcTWRFmj1CD1mR6yiMOPhViGAmMBEabNheBNOfZwmzMYRevz/xdEEhJAzRbPLZ1pkFjNFq3k2yfRmT/grZ4GVs8DKWWDl8j9NSvvPjq6dxtUapyldy0XEH+V+DVf2IzgQLecWN0nPLsVz5++ROQlTdLZXU+T4wHtW9oFP/GT9UNE6Mpd/4MAfx9+y+0KmCwQc4TIyl/8iyzU24qPwHZj/xU6TlLPAyllg5SywcmKe8K8vWSXkcdkqYyldgQkBBI1gymZLMG5wZH/+u09MYNegm8iE93QPQsgZwZXbymJXi/GTpG8SF7XIqne1mLfwghBowzkScezdJ2sVnXa1nJ+L24TPfwQx4gxC2T89+CyBp0lu3TPPMfMKnpN639nR2+lzQxjZV1WG7gScezMEnsIQOLgNBKzW34oqlOyfshOn7PhrnLZxC8MifCvIdrKUs8DKWWDlLLByFlg5C6ycBVbOAitngZWzwMpZYOUssHIWWDkLrJwFVs4CK2eBlbPAyllg5SywchZYOQusnAVWzgIrZ4GVs8DKWWDlLLByDtytYHQqEeIIHrHAWp3pdh2Kzh6MTpvtPYcWHsHoNH5/1xE+D2DqwOji/SNqtarHq+ji9b/TARlGh7rlb+30bh2YWh9UGH/YhtFh92E7jd707tPzYPrx2x347jaMbLEh3Y4tnzjygq384ZUxbF5oorBNEFHStJxG7oG4Sc9X5OX5FQ/82URVvQyTP9+Np7rrm/vT8kEDX3K5Dr356yjGm2ew12jYqM6EpxLopJgdrFzdIaK+r3r8L92lox/KUC7UAAAAAElFTkSuQmCC"},a}return Object(A.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:this.images[this.topic],alt:"",className:"card__image"}),Object(d.jsxs)("div",{className:"card__text",children:[Object(d.jsx)("p",{className:"card__text--stat",children:void 0!==this.props.data?this.props.data:null}),Object(d.jsx)("p",{className:"card__text--cat",children:"calorieCount"===this.topic?"Calories":"proteinCount"===this.topic?"Proteins":"carbohydrateCount"===this.topic?"Carbs":"Lipids"})]})]})}}]),n}(r.a.Component)),P=(n(337),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).user=a.props.user,a.state={error:null,isLoaded:!1,data:{}},a}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=this;k(this.user,this.endpoint).then((function(t){e.setState(t)}))}},{key:"render",value:function(){var e,t,n,a;return Object(d.jsxs)("div",{className:"cards",children:[Object(d.jsx)(V,{user:this.user,topic:"calorieCount",data:null===(e=this.state.data.keyData)||void 0===e?void 0:e.calorieCount}),Object(d.jsx)(V,{user:this.user,topic:"proteinCount",data:null===(t=this.state.data.keyData)||void 0===t?void 0:t.proteinCount}),Object(d.jsx)(V,{user:this.user,topic:"carbohydrateCount",data:null===(n=this.state.data.keyData)||void 0===n?void 0:n.carbohydrateCount}),Object(d.jsx)(V,{user:this.user,topic:"lipidCount",data:null===(a=this.state.data.keyData)||void 0===a?void 0:a.lipidCount})]})}}]),n}(r.a.Component)),z=(n(338),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).user=a.props.user,a.name=a.props.name,a}return Object(A.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("main",{className:"main",children:[Object(d.jsx)(j,{name:this.name}),Object(d.jsxs)("div",{className:"main__content",children:[Object(d.jsx)(J,{user:this.user}),Object(d.jsx)(G,{user:this.user}),Object(d.jsx)(P,{user:this.user})]})]})}}]),n}(r.a.Component)),Z=(n(339),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(A.a)(n,[{key:"render",value:function(){return Object(d.jsx)("aside",{className:"aside",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALoSURBVHgB7ZvvVfIwFMZveBdQJygTSF1AmEBwApwA3UA20AnECTwuILCA1AmoC6hf3y/G+xhzjkj/UdLg8eZ3zm1LoCH3yW1yU6iiL7TWe7wbsXW/7C+SsF0rpSa2QGHDzke8m7JFJIOUrcdCpFaAJclx3pKyxf/Y+SEfDEkeuOT/KxZgwQcdkskMAmgSTIuEEwQg4QQBSDhBABJOEIB2QZryUqRHdHDALeAmDAambAf4zwTh6NER0dvbavkep+aPj7wki8gn/iPg4mLdeYCyszPyjf8IaBVojih4eSGf+I8AOJlHVmQ0jH8BDg/z3zs5Id+EQZB8AwfhaL9vXsPxbncnzoNwQ4SE41+AJFnNAq2hbAfZoN9LIG8AtGA8eHjgW7T+7tH6iwCb/xfN9Xjv9NRrJPiJADgWx0TPz9U+j1xhOi1OmhzhJwLG4+rOg6cns2bwgW6ay0utlapnOLdhmhXg/Ly+89ZQR4M0I8ByqXW3u+5Mu13ucBRln4c6G8CtAK+vJmz39/OdKBMAn8kSATYcOhdiOwHg8GKh9dVVdo9n9WCZAKBIBFi/b75zOjVt2IL6AlS9hgeD1UZWEQBABPR41e/5dQKg1+/uNj/vJzc3xdHw6wTo9Ux4fu91HJddJtY6Ha0nk/XQLhOirhvYUB2wgEGmBjs+Nvm73VtmM6L7e6Lb281vd6Fe3CEajVbrxGJqPjeGlBmGut/fqRbaNZv0dlXLiwoHuBUAjmdNga4MdTvODt0JgB6q4gTGiLLpqyxfgNCOcCdAlZG6au+VCYAZxhHuBChzHnO6JS9b3MQc4U6AOC5uMMIeuFggYVB0hDsBkPRU6TEXgyTGG0e4nQWQrORFgmUbx1F3Vna5BZ8tI8GE3wVIOEEAEk4QgIQTBCDhBAFIOEEAEg4EmJFcEggwJ7lcYzmMv2Hg4cmIZJEqpdot3uAXix6ZZ2mlkJLx2QyCn09Rsxp8iP+rJ/R3mbGN2WL4jIIPjP7PJhDvxYYAAAAASUVORK5CYII=",alt:"",className:"aside__icon"}),Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKFSURBVHgB7ZvdUeswEIWPuA0EKogrIO7A7iBUQFLBhQ6gAiYNgKmAEuJUQKggpgJ4vU+6exCeOI4dZkAWA6tvZuO/9c8eWVpbjgzesdaOZPJXLHu338habGGMKeoVhj8S/FgmS7ExdFCJ5SJEVQuwgZ7gayqx9I8EP5OZGfTBKv/PiACPMjOBTkoKYKGYIygnCgDlRAGgnCgAlBMFgHKiAFBOFADKiQJgKIpCji6HPzmRzqccuLyUPpjq8D6vr8B87vahcf6jfb6KHYq7O2uN2beLi/59JpN9/yyzQxK+CiwW0hOXutJuUpbA09O+/2olfblrDMVwAmQZcHsL3NwA0+nuNgbKatEU4dCtPmQ1sKHYbKTzfbx7e/OWf3lx2zntqjI07jsQ4QQgDLJdz5siXF3tB891AxK+U5S3PduA5+ftutNT+Swj32VGI5c9WO/J+bmrSkNiQ9NVyu07ISBhBegL/htFCCfAR8F/kwhhBOgKPkmsPTtzdig7DEwYAZZLa9PUBccpl9s8PGx98lw+2D3aEMRPY1COfwH4TM/HXL7N8W2QOf/+fteHy/Th9j6f62sgSbY+9G/7+MD6oizdm1tf685GbzrtfuNr+sxm1h4f9/vwHB4fjf0J0H79ZUPGFv5QyqMPrW87heAx2j5djegn8SsAL5gX27xAlhZLtU519OFysxRrn7rkOWW/QZ+PRwFiFoByYhawvgiZBXguT/zMLFAU1hc/Mwt4FCBmASgnCgDlRAGgnCgAlBMFgHKiAFBOFADKiQKIldDLmgKsoJcFO0Q4gpKDJ8fQRWWMSY7kh/9Vy+HG0mqhgovZNYJvo6hFDZmdww0x/62UYtLfjpQxc8V/Difgc3RlfsMAAAAASUVORK5CYII=",alt:"",className:"aside__icon"}),Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPJSURBVHgB7ZvRVeMwEEXHbAEsNICpAFIBSQVABQQaWDqA7YA0AKECQgMQKkhoAEwFgc/90s5bMQdFyI4tRyaLfM8RDkJxNE/SaEYmCb2jlPrJl19cuu/lOzLlMkiSZCgVCX6w8Slf7rmkFAcZlx4LkYkAzxSP8ULGpfODje/ziz7FB5b8n4QFmPCLXYqTMQRQFDFrFDmtABQ5rQAUOa0AFDmtABQ5rQC0SgwGRJub3Cvu1vEx52sZBUetCufnSiXJfNneVqFZnRlwe/u5DjNgOqWQrI4As5m7/vWVQrI6AvT7n+vSlE8qwh5VfN15wHhM9PDA5zJ8MLO/r69wfLIU8PvdXXABvsYJuhzecKj/NpnoMpupJmheAJfxtggN0qwARcZ/kQjNCVDGeCkXF6opmhFgkfH9vlIbG/N1p6f8tOJZhSa8AJjSRcZDHADHZ4uA3yEOZsT9vQpBeAG63cXGCxjxNHW3DRQWhw+EsJ+7ODvTxQSBz2Si6/Pet2TCC4AgxwWMdQHDIcDTE9HlJT+v5gfW3W64gEg1QZ4TDLSuq7C8UFhCW2RwGEWMMEZfRno0Ijo5mU9uFoW7aItsEOExXqM92u7t5c+gqqi6jEb5jku2ONnO4OnttvD0ru0Ont/eFfLuW4N6AthTGx3u9XSxPTiMBy5Pby8FGGe/P+++NUXwF8A0Hh2xjUAyY7YxRxpXc3TN9yIAknoYbN8X7zXb4LNrJE5+AqAT0oHd3eIOYOSlLWICwZwFYiSu5hQv4uoqP56ogJ8A5giUmYLmTMgyXecS4OCg2qjKUsFs8pwFfgJ0OuVGSUDnZMpLouMSwG6zCHN2eW6pfoGQHFSWDU5kWwR5R92oly1yZ4dKgc+XiPHxkXyoFwlWCVfX1/V12YecNe/rJ8DWlr5WeXAhbYtCYOHlhUoBo6Vt2Vlj4ScAYnNwfV2uPaJE6SiiOBcQQP42HFIpzGcJvrmC8sHcrhZtQXCA4vDMlPbmRm9lKLKTmLvFoqMxM6BCvOCJfyBk5vl5IqCTiBPKGmWKVbQb2CF1jWjQPxnCmu71PqY21vbR0Yd/gFfGEhHn5Mr/y94XKTGc3dubTqqQdAll75uHqgOUl+Alr2Bvr3rIWXQyZN53CSfIyzkPwHo+PJzvNIIlLI06DzjgH7C+JUCSZKvufQ2Wdx7wn9L+hwhFTisARU4rAEVOKwBFTisARQ4EGFO8TCHAA8XLAMkQDuPw5cmU4iJLkmR7jX/gxKJH+ru0sZCRtlk7wX/fomY1+OUx6a+Yf1fGXH5z6cBmVPwFQbi4RuY5iUoAAAAASUVORK5CYII=",alt:"",className:"aside__icon"}),Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKQSURBVHgB7ZvdcdswEIQPTgNyB1QFljogO7ArsFxBakgJrsByCa4gTAO2XIHoCuzXPCG3pjFmGEqBgtPglMM3cxL/XnYHBIgF6egD7/2M/75y1R/1P7LhunXOrcMBhx8WX/Hfd66KbNBxNWxEFwzYkh3xgY5r+YXFr3hjRfbALf/TsQFPvLEgm7QwwJNhzsg4xQAyTjGAjFMMIOMUA8g4xQA6Nvf3RDc3n/tvbzwRbXhmviEVeCm2W++vrrx/ff08tl5771xfq1V/brHo98/PeRr25HMjYwDEV1UvDAIhdCg+FEQP9+va50bGgMvL34XN53+KH1cwKjMyBgybdkwpEQ/k8gB0bssl0cvL/usuLjh95PhxNiMNyI0CDw8nJ/4dL8FUh6e42Q9JbwHjcf7ESDegbeOue37uH4DQV2jCS4CHnF3Nfjw6KLsV5IbB8UNOEDo1RCoyId2AGIGKTUg3oGnihCk1Id0ATGhC8/+bIIUmyPQBMAEtIUaIMhPkpsOHkGICrsEsUmgqnccA8C8mHCFPyGcAOMSEqWsF8oS8BoDMw2h+A8A+gVPn0PyFOk0dBoBdJuwKWvD4LYAeA8ChyZKACbrWBRCUIDBBcBJDXVMqp7swcndHdH1NyXhNxN4CSKCEkAtFUwkrRghO9lFVRI+PYrmijlsgVjzoOtlkyecmttmHladQWIwRIL8B4zxhnCyFe35oFFaesBwnQH4DpvKEYcY47PBwDguwQuKBjlFgKk+ACYK9/S70jAKZKG+IkHGKAWScYgAZpxhAxikGkHFgQEt22cCAH2SXW0yGkC3h48mKbNE55+Zn/INsqaH+W1ordNRr7jvB96+o2Q3exPtuSt5jPwot1zeuJTTjwC8PfaYDA35wmAAAAABJRU5ErkJggg==",alt:"",className:"aside__icon"})]})})}}]),n}(r.a.Component)),K=(n(340),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(A.a)(n,[{key:"render",value:function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"footer__content",children:"Copyright, SportSee 2020"})})})}}]),n}(r.a.Component)),q=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).user=a.props.user,a.state={error:null,isLoaded:!1,data:{}},a}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=this;k(this.user,this.endpoint).then((function(t){e.setState(t)}))}},{key:"render",value:function(){var e,t=this.state,n=t.error,a=t.isLoaded,r=t.data;return n?Object(d.jsxs)("div",{children:["Error: ",n.message]}):a?Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(h,{}),Object(d.jsx)(z,{user:this.user,name:null===r||void 0===r||null===(e=r.userInfos)||void 0===e?void 0:e.firstName}),Object(d.jsx)(Z,{}),Object(d.jsx)(K,{})]}):Object(d.jsx)("div",{children:"Loading..."})}}]),n}(r.a.Component),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,353)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(q,{user:"18"})}),document.getElementById("root")),_()}},[[341,1,2]]]);
//# sourceMappingURL=main.4ed6cfd8.chunk.js.map