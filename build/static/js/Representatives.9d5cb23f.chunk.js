(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1137:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(16),r=a(17),i=a(25),l=a(24),s=a(26),o=a(0),c=a.n(o),m=a(156),d=a(14),p=a(3),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={open:!1,id:Object(m.a)(24)},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.id,r=this.props,i=r.text,l=r.placement,s=r.testSecond,o=void 0===s?"":s,m=r.className,u=void 0===m?"":m,h=r.info,g=void 0===h?"":h;return c.a.createElement("div",{className:"d-inline-block"},c.a.createElement("div",{className:"question-mark",id:n,onMouseOver:function(){return e.setState({open:!0})},onMouseOut:function(){return e.setState({open:!1})}},c.a.createElement("i",null,"?")),c.a.createElement(d.h,{placement:l,isOpen:a,target:n,className:u,innerClassName:"w-100"},i?Object(p.b)(i):"",o?c.a.createElement("span",null,c.a.createElement("br",null)," ",Object(p.b)(o)):"",g||""))}}]),t}(c.a.Component)},1232:function(e,t,a){"use strict";var n,r=a(85);t.a={pieChart:{color:["#98C8EB","#1A3964","#2A4994","#3665B0","#205097","#3A69C4"],title:{text:"",x:"center",link:"",target:"self"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} %"},series:[{name:"",type:"pie",radius:["45%","70%"],center:["50%","60%"],data:[],label:{normal:{show:!0,formatter:"{c}%"},emphasis:{show:!0}},labelLine:{normal:{show:!0,smooth:!1,length:20,length2:10},emphasis:{show:!0}}}]},representPieChart:{color:["#424246","#96EE80","#F4A45D","#8085ED","#F25C81","#E5D355","#348188","#F25C81","#8FCACE","#7CB5EC"],title:{text:"",subtext:"",x:"center",link:"",target:"self"},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},toolbox:{x2:5,y:-5,feature:{restore:{title:"restore"},saveAsImage:{show:!0,title:"save"}}},legend:{type:"scroll",show:!1,orient:"vertical",left:"right",top:35,selectedMode:"false",data:[]},series:[{name:"",type:"pie",radius:"55%",center:["50%","60%"],data:[],label:{normal:{show:!0,formatter:"{b}"},emphasis:{show:!0}},labelLine:{normal:{show:!0,smooth:!1,length:20,length2:10},emphasis:{show:!0}}}]},supplyTypesTRXPieChart:{color:["#c84a45","#e7afad","#e19b98","#da8683"],title:{text:"",subtext:"",x:"center",link:"",target:"self"},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},toolbox:{x2:5,y:-5,feature:{restore:{title:"restore"},saveAsImage:{show:!0,title:"save"}}},legend:{type:"plain",show:!1,orient:"horizontal",bottom:0,left:"center",selectedMode:"false",itemGap:20,data:[]},series:[{name:"",type:"pie",radius:"55%",center:["50%","50%"],data:[],label:{normal:{show:!0,formatter:"{b}"},emphasis:{show:!0}},labelLine:{normal:{show:!0,smooth:!1,length:10,length2:5},emphasis:{show:!0}}}]},lineChart:{title:{text:"",x:"center",link:"",target:"self"},grid:{left:"5%",right:"7%",bottom:"5%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:[],axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},series:[{data:[],type:"line"}]},ringPieChart:{title:{text:"",x:"center"},color:["#F25C81","#7CB5EC","#F4A45D","#8085ED","#8FCACE","#424246","#348188","#F25C81","#E5D355","#96EE80"],legend:{type:"scroll",orient:"vertical",x:"right",selected:(n={"Bancor Network":!1,Gatecoin:!1,BitFlip:!1,Braziliex:!1,Cobinhood:!1,CoinExchange:!1,CoinFalcon:!1,Cryptomate:!1},Object(r.a)(n,"Gatecoin",!1),Object(r.a)(n,"IDEX",!1),Object(r.a)(n,"LiteBit.eu",!1),Object(r.a)(n,"Stocks.Exchange",!1),Object(r.a)(n,"Tidex",!1),n)},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},series:[{name:"",type:"pie",selectedMode:"single",radius:[0,"30%"],center:["50%","50%"],label:{normal:{position:"inner",show:!1}},labelLine:{normal:{show:!1}},data:[]},{name:"",type:"pie",radius:["40%","55%"],center:["50%","50%"],data:[]}]},multiLineChart:{title:{text:"",x:"center"},legend:{type:"scroll",data:[]},grid:{left:"3%",right:"3%",bottom:"5%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value"},series:[]},mapChart:{color:["gold"],series:[{name:"",type:"map",roam:!0,hoverable:!1,mapType:"none",itemStyle:{normal:{borderColor:"rgba(100,149,237,1)",borderWidth:.5,areaStyle:{color:"#1b1b1b"}}},data:[],geoCoord:{}},{name:"",type:"map",mapType:"none",data:[],markPoint:{symbol:"emptyCircle",symbolSize:function(e){return 1+e/10},effect:{show:!0,shadowBlur:0},itemStyle:{normal:{label:{show:!1}},emphasis:{label:{position:"top"}}},data:[]}}]},barChart:{title:{text:"Ranking"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:150},xAxis:{type:"value",name:"",axisLabel:{formatter:"{value}"}},yAxis:{type:"category",inverse:!0,data:[]},series:[{name:"",type:"bar",data:[],label:{normal:{show:!0,textBorderWidth:0}},itemStyle:{}}]},overviewChart:{title:{text:"",x:"center",link:"",target:"self",padding:[0,0,10,0]},tooltip:{trigger:"axis",axisPointer:{animation:!1}},toolbox:{x2:5,y:-5,feature:{restore:{title:"restore"},saveAsImage:{show:!0,title:"save"}}},axisPointer:{link:{xAxisIndex:"all"}},dataZoom:[{start:0,end:100},{type:"inside"}],grid:[{top:80,left:"10%",right:80,containLabel:!0}],xAxis:[{type:"category",boundaryGap:!1,axisLine:{onZero:!0},data:[]}],yAxis:[{name:"",nameGap:20,type:"value"}],series:[{name:"",type:"line",markPoint:{data:[{type:"max",name:"max"},{type:"min",name:"min"}]},data:[]}]},overviewHighChart:{chart:{zoomType:"",spacingTop:5,spacingBottom:0,spacingLeft:0,spacingRight:0,resetZoomButton:{position:{align:"right",verticalAlign:"top",x:-55,y:0},relativeTo:"chart",theme:{fill:"white",stroke:"silver",r:0,states:{hover:{fill:"#eeeeee",style:{color:"red"}}}}}},title:{text:""},credits:{enabled:!1},colors:["#c84a45","#e7afad"],exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},subtitle:{text:""},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]}},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"}},yAxis:{title:{text:""},tickPixelInterval:30,labels:{style:{color:"#999999"}}},legend:{enabled:!1},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ECC2C1"],[1,"#ffffff"]]},marker:{radius:2},lineWidth:1,states:{hover:{lineWidth:2}},threshold:null,column:{pointPadding:.1,borderWidth:0}}},series:[{type:"area",name:"",data:[],marker:{enabled:!0}}]},HomeHighChart:{chart:{zoomType:"",spacingTop:5,spacingBottom:0,spacingLeft:0,spacingRight:0,resetZoomButton:{position:{align:"right",verticalAlign:"top",x:-55,y:0},relativeTo:"chart",theme:{fill:"white",stroke:"silver",r:0,states:{hover:{fill:"#eeeeee",style:{color:"red"}}}}}},title:{text:""},credits:{enabled:!1},colors:["#c84a45","#e7afad"],exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},subtitle:{text:""},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]}},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"}},yAxis:[{title:{text:""},tickPixelInterval:30,labels:{style:{color:"#c23631"}},gridLineWidth:0},{title:{text:""},tickPixelInterval:30,labels:{style:{color:"#333333"}},opposite:!0,gridLineWidth:0}],legend:{align:"center",verticalAlign:"bottom",floating:!1,backgroundColor:"#FFFFFF"},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ECC2C1"],[1,"#ffffff"]]},marker:{radius:2},lineWidth:1,states:{hover:{lineWidth:2}},threshold:null,column:{pointPadding:.1,borderWidth:0}}},series:[{type:"spline",name:"",data:[],color:"#c23631",marker:{enabled:!1,radius:1}},{type:"spline",name:"",data:[],color:"#FFAA38",marker:{enabled:!1,radius:1},visible:!1},{type:"spline",name:"",data:[],color:"#FF8A84",yAxis:1,marker:{enabled:!1,radius:1},visible:!1}]},ringPieHighChart3D:{chart:{type:"pie",options3d:{enabled:!0,alpha:45},spacingTop:5,spacingBottom:0,spacingLeft:0,spacingRight:0},title:{text:""},subtitle:{text:""},exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},credits:{enabled:!1},colors:["#424246","#96EE80","#F4A45D","#8085ED","#F25C81","#E5D355","#348188","#F25C81","#8FCACE","#7CB5EC"],plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",showInLegend:!0,innerSize:100,depth:60}},legend:{itemStyle:{fontWeight:"normal",color:"#666666"}},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"}},series:[{name:"",data:[]}]},supplyPieHighChart:{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:""},credits:{enabled:!1},exporting:{enabled:!0,sourceWidth:562,sourceHeight:400,filename:""},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},colors:["#c84a45","#e7afad"],plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0},showInLegend:!0}},series:[{name:"",colorByPoint:!0,data:[]}]},supplyAreaHighChart:{chart:{type:"area"},title:{text:""},subtitle:{text:""},credits:{enabled:!1},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]},tickmarkPlacement:"on",title:{enabled:!1}},yAxis:{title:{text:""},labels:{style:{color:"#999999"}}},tooltip:{shared:!0,valueSuffix:"%"},exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},plotOptions:{area:{stacking:"normal",lineColor:"#666666",lineWidth:1,marker:{lineWidth:1,lineColor:"#666666",radius:1}}},series:[]}}},1865:function(e,t,a){"use strict";a.d(t,"b",function(){return O}),a.d(t,"a",function(){return j}),a.d(t,"c",function(){return P});var n=a(207),r=a.n(n),i=a(71),l=a(16),s=a(17),o=a(25),c=a(24),m=a(26),d=a(0),p=a.n(d),u=a(1232),h=a(1110),g=a.n(h),b=(a(1828),a(1342),a(1242),a(1866),a(1869),a(1870),a(1871),a(1872)),f=a.n(b),v=a(1482),y=a.n(v),x=a(1483),E=a.n(x),k=a(1484),C=a.n(k),w=a(1485),N=a.n(w);y()(f.a),E()(f.a),C()(f.a),N()(f.a);var O=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(o.a)(this,Object(c.a)(t).call(this,e));var n=("_"+Math.random()).replace(".","_");return a.state={pieId:"ringPie"+n},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"initPie",value:function(e){var t=this.props,a=t.intl,n=t.data,r=t.message,l=g.a.getInstanceByDom(document.getElementById(e));function s(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}if(void 0===l&&(l=g.a.init(document.getElementById(e))),u.a.ringPieChart.title.text=a.formatMessage({id:r.id})+" Top 10",u.a.ringPieChart.series[0].data=[],u.a.ringPieChart.series[1].data=[],u.a.ringPieChart.legend.data=[],n&&n.length>0){var o=n.sort(s("name")),c=[],m=[],d=[];for(var p in o)c.push({name:o[p].pair,value:o[p].volume}),d.indexOf(o[p].name)<0&&(d.push(o[p].name),m.push({name:o[p].name,value:0,subCount:[]}));for(var h in m)for(var b in o)o[b].name===m[h].name&&(m[h].value=m[h].value+o[b].volume,m[h].subCount.push({name:o[b].pair,value:o[b].volume}));m.sort(s("value"));var f=m.slice(m.length-10,m.length),v=[];for(var y in f)v.push.apply(v,Object(i.a)(f[y].subCount));u.a.ringPieChart.series[0].data=[],u.a.ringPieChart.series[1].data=[],u.a.ringPieChart.legend.data=d,u.a.ringPieChart.series[0].data=f,u.a.ringPieChart.series[1].data=v}n&&0===n.length&&(u.a.ringPieChart.title.text="No data"),l.setOption(u.a.ringPieChart)}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),t}(p.a.Component),j=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(o.a)(this,Object(c.a)(t).call(this,e));var n=("_"+Math.random()).replace(".","_");return a.state={pieId:"ringPie"+n},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"initPie",value:function(e){var t=this.props,a=t.intl,n=t.data,i=t.message,l=t.source,s=r()(u.a.ringPieHighChart3D);if(n.length)for(var o in n)n[o].name?n[o].name.indexOf("http://")>-1&&(n[o].name=n[o].name.substring(7).split(".com")[0]):n[o].name=n[o].address;if(n&&0===n.length&&(s.title.text="No data"),n&&n.length>0){var c=[],m=[];for(var d in n)m.indexOf(n[d].name)<0&&(m.push(n[d].name),c.push([n[d].name,Number(n[d].volumeValue)]));var p=s.series[0].data;p.push.apply(p,c)}s.chart.options3d.enabled=!0,s.title.text=a.formatMessage({id:i.id}),s.exporting.filename=a.formatMessage({id:i.id}),s.tooltip.formatter=function(e){a.formatDate(this.point.x);return a.formatMessage({id:"witness"})+" : "+this.point.name+"<br/>"+a.formatMessage({id:"produced_blocks"})+" : "+this.point.y+"<br/>"+a.formatMessage({id:"_percentage"})+" : "+this.point.percentage.toFixed(2)+"%"},"representatives"==l&&(s.plotOptions.pie.showInLegend=!1,s.plotOptions.pie.innerSize=60,s.plotOptions.pie.depth=40,s.exporting.enabled=!1,s.title.text=""),f.a.chart(document.getElementById(e),s)}},{key:"shouldComponentUpdate",value:function(e){return e.intl.locale!==this.props.intl.locale}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),t}(p.a.Component),P=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(o.a)(this,Object(c.a)(t).call(this,e));var n=("_"+Math.random()).replace(".","_");return a.state={pieId:"ringPie"+n},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"initPie",value:function(e){var t=this.props,a=t.intl,n=t.data,i=t.message,l=(t.source,r()(u.a.supplyPieHighChart));if(n&&0===n.length&&(l.title.text="No data"),n&&n.length>0){var s=[];for(var o in n)s.indexOf(n[o].name)<0&&l.series[0].data.push({name:a.formatMessage({id:n[o].name}),y:parseInt(n[o].value),selected:n[o].selected,sliced:n[o].sliced})}l.title.text=a.formatMessage({id:i.id}),l.exporting.filename=a.formatMessage({id:i.id}),l.tooltip.formatter=function(){return a.formatMessage({id:this.point.name})+" ("+a.formatNumber(this.point.y)+" TRX)<br/>"+a.formatMessage({id:"_percentage"})+" : "+this.point.percentage.toFixed(2)+"%"},f.a.chart(document.getElementById(e),l)}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),t}(p.a.Component)},3300:function(e,t,a){"use strict";a.r(t);var n=a(1180),r=a.n(n),i=a(452),l=a.n(i),s=a(108),o=a.n(s),c=a(1570),m=a.n(c),d=a(2),p=a.n(d),u=a(5),h=a(16),g=a(17),b=a(25),f=a(24),v=a(26),y=a(0),x=a.n(y),E=a(32),k=a(197),C=a(3),w=a(83),N=a(13),O=a(15),j=a(6),P=a(1865),S=a(50),M=a(19),F=a(1137),L=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(b.a)(this,Object(f.a)(t).call(this))).getLatestBlock=Object(u.a)(p.a.mark(function t(){var a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.a.getLatestBlock();case 2:a=t.sent,e.setState({latestBlock:a.number});case 4:case"end":return t.stop()}},t)})),e.state={latestBlock:""},e}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.loadWitnesses(),this.props.loadStatisticData(),this.getLatestBlock()}},{key:"getPiechart",value:function(){var e=this.props.intl,t=this.props.statisticData,a=[];return t.length>0&&t.map(function(t,n){a.push({key:n+1,name:t.name?t.name:t.url,address:t.address,volumeValue:t.blockProduced,volumePercentage:e.formatNumber(100*t.percentage,{maximumFractionDigits:2,minimumFractionDigits:2})+"%"})}),a}},{key:"renderWitnesses",value:function(e){var t=this,a=this.state.latestBlock;if(0===e.length)return x.a.createElement("div",{className:"card"},x.a.createElement(w.b,null,Object(C.c)("loading_representatives")));var n=m()(o()(e,function(e){return e.producer}),function(e){return-1*e.votes}),r=m()(o()(e,function(e){return!e.producer}),function(e){return-1*e.votes}),i=l()(r,0,100),s=l()(r,100);return n.map(function(e){Number(a)-e.latestBlockNumber<1e3?e.representerStatus=!0:e.representerStatus=!1}),x.a.createElement("div",{className:"card border-0 represent__table w-1000"},x.a.createElement("table",{className:"table table-hover table-striped bg-white m-0 sr",style:{border:"1px solid #DFD7CA"}},x.a.createElement("thead",{className:"thead-dark"},x.a.createElement("tr",null,x.a.createElement("th",{className:"text-center"},Object(C.c)("SR_rank")),x.a.createElement("th",null,Object(C.c)("name")),x.a.createElement("th",{className:"text-center text-nowrap"},Object(C.c)("status")),x.a.createElement("th",{className:"text-center text-nowrap d-none d-lg-table-cell"},Object(C.c)("last_block")),x.a.createElement("th",{className:"text-center text-nowrap d-none d-lg-table-cell"},Object(C.c)("blocks_produced")),x.a.createElement("th",{className:"text-center text-nowrap d-none d-lg-table-cell"},Object(C.c)("SR_blocksMissed")),x.a.createElement("th",{className:"text-center text-nowrap"},Object(C.c)("productivity")),x.a.createElement("th",{className:"text-right text-nowrap"},Object(C.c)("SR_votes")),x.a.createElement("th",{className:"text-right text-nowrap",style:{borderRight:"1px solid rgb(223, 215, 202)"}},Object(C.c)("SR_voteRatio"),x.a.createElement("span",{className:"ml-2"},x.a.createElement(F.a,{placement:"top",text:"voting_brokerage_tip"}))))),x.a.createElement("tbody",null,x.a.createElement("tr",{style:{height:"72px"}},x.a.createElement("td",{colSpan:"9",className:"font-weight-bold"},x.a.createElement("i",{className:"fa fa-trophy mr-2 ml-2",style:{color:"#666"}}),Object(C.c)("Super Representatives"))),n.map(function(e,a){return x.a.createElement(H,{index:a,state:t.state,props:t.props,key:e.address+a,account:e})}),x.a.createElement("tr",{style:{height:"72px"}},x.a.createElement("td",{colSpan:"9",className:"font-weight-bold"},x.a.createElement("i",{className:"far fa-handshake mr-2 ml-2",style:{color:"#666"}}),Object(C.c)("Super Representative Partners"))),i.map(function(e,a){return x.a.createElement(H,{index:n?a+n.length:j.t?a+27:a+5,state:t.state,props:t.props,key:e.address+a,account:e,showSync:!1})}),j.t&&x.a.createElement("tr",{style:{height:"72px"}},x.a.createElement("td",{colSpan:"9",className:"font-weight-bold"},x.a.createElement("i",{className:"fa fa-user mr-2 ml-2",style:{color:"#666"}}),Object(C.c)("Super Representative Candidates"))),s&&s.map(function(e,a){return x.a.createElement(H,{index:n?a+n.length+i.length:j.t?a+127:a+5,state:t.state,props:t.props,key:e.address+a,account:e,showSync:!1})}))))}},{key:"render",value:function(){var e=this.props,t=e.intl,a=e.witnesses,n=this.getPiechart(),r=a.slice(0,j.E),i=m()(r,function(e){return-1*e.producePercentage})[0],l=_(r).filter(function(e){return e.producedTotal>0}).sortBy(function(e){return e.producePercentage}).value()[0];return x.a.createElement("main",{className:"container header-overlap pb-3 token_black"},x.a.createElement("div",{className:0===a.length||0===n.length?"card":""},0===a.length||0===n.length?x.a.createElement(w.b,null):x.a.createElement("div",{className:"row"},x.a.createElement("div",{className:"col-md-6 foundation_title represent_title"},x.a.createElement("div",{className:"mb-3"},x.a.createElement("div",{className:"card h-100 widget-icon"},x.a.createElement("div",{className:"card-body"},x.a.createElement("h3",{className:"text-primary"},x.a.createElement(N.c,{value:a.length})),Object(C.c)("Super Representatives")))),x.a.createElement("div",{className:"mb-3"},x.a.createElement("div",{className:"card h-100"},x.a.createElement("div",{className:"card-body"},x.a.createElement("h3",null,x.a.createElement(N.c,{value:i.producePercentage}),"%"),x.a.createElement("div",{className:"represent_title_text"},x.a.createElement("span",null,Object(C.c)("highest_productivity")," - "),x.a.createElement(O.a,{address:i.address},i.name||i.url))))),x.a.createElement("div",{className:"mb-3"},x.a.createElement("div",{className:"card h-100 widget-icon"},x.a.createElement("div",{className:"card-body"},x.a.createElement("h3",null,x.a.createElement(N.c,{maximumFractionDigits:2,minimunFractionDigits:2,value:l.producePercentage}),"%"),x.a.createElement("div",{className:"represent_title_text"},x.a.createElement("span",null,Object(C.c)("lowest_productivity")," - "),x.a.createElement(O.a,{address:l.address},l.name||l.url)))))),x.a.createElement("div",{className:"col-md-6 mb-3"},x.a.createElement("div",{className:"card"},x.a.createElement("div",{style:{height:326,background:"#fff"},className:"pt-2 bg-line_blue"},x.a.createElement("div",{className:"card-header bg-tron-light color-grey-100 text-center pb-0",style:{border:0}},x.a.createElement("h6",{className:"m-0 lh-150",style:{fontSize:16}},x.a.createElement(S.a,{to:"/blockchain/stats/pieChart"},Object(C.c)("produce_distribution")))),x.a.createElement("div",{className:"card-body pt-0"},x.a.createElement("div",{style:{minWidth:255,height:200}},x.a.createElement(P.a,{message:{id:"produce_distribution"},intl:t,data:n,style:{height:255},source:"representatives"})))))))),x.a.createElement("div",{className:" mt-3"},x.a.createElement("div",{className:" table-scroll"},this.renderWitnesses(a))))}}]),t}(y.Component);function H(e){var t=e.account,a=e.showSync,n=void 0===a||a,i=e.index;e.state,e.props;return x.a.createElement("tr",{key:t.address,className:t.index>26?"represent__table__lighter":"represent__table__content"},x.a.createElement("td",{className:"text-center",style:{paddingLeft:"14px"}},i+1),x.a.createElement("td",null,t.name?x.a.createElement("div",{className:"_context_right_click font-weight-bold",style:{width:"200px"}},x.a.createElement(O.a,{address:t.address},t.name,x.a.createElement("br",null),x.a.createElement("span",{className:"small text-muted"},t.url))):x.a.createElement("div",{className:"_context_right_click"},x.a.createElement(O.a,{address:t.address},t.url))),n?x.a.createElement("td",{className:"text-center"},t.representerStatus?x.a.createElement(r.a,{placement:"top",title:Object(C.c)("SR_normal")},x.a.createElement("span",{key:"no",className:"text-success"},x.a.createElement("i",{className:"fas fa-circle"}))):x.a.createElement(r.a,{placement:"top",title:Object(C.c)("SR_avnormal")},x.a.createElement("span",{key:"yes",className:"text-danger"},x.a.createElement("i",{className:"fas fa-circle"})))):x.a.createElement("td",null,"\xa0"),x.a.createElement("td",{className:"text-center  d-none d-lg-table-cell"},t.latestBlockNumber?x.a.createElement(O.b,{number:t.latestBlockNumber}):"-"),x.a.createElement("td",{className:"text-center d-none d-lg-table-cell"},t.producedTotal?x.a.createElement(N.c,{value:t.producedTotal}):"-"),x.a.createElement("td",{className:"text-center d-none d-lg-table-cell"},0!==t.missedTotal?x.a.createElement(N.c,{value:t.missedTotal}):"-"),x.a.createElement("td",{className:"text-center"},t.producedTotal>0?x.a.createElement(y.Fragment,null,Math.floor(100*t.producePercentage)/100,"%"):"-"),x.a.createElement("td",{className:"text-right"},x.a.createElement(y.Fragment,null,x.a.createElement(N.c,{value:t.votes||0}),x.a.createElement("br",null),"(",x.a.createElement(N.c,{minimumFractionDigits:2,maximumFractionDigits:2,value:t.votesPercentage}),"%",")")),x.a.createElement("td",{className:"text-right"},x.a.createElement(y.Fragment,null,x.a.createElement("span",null,t.brokerage||0==t.brokerage?100-t.brokerage+"%":""))))}var A={loadWitnesses:k.f,loadStatisticData:k.e};t.default=Object(E.connect)(function(e){return{witnesses:e.network.witnesses,statisticData:e.network.statisticData}},A,null,{pure:!1})(Object(N.h)(L))}}]);