(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8c5e"],{"8b64":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.className,style:{height:t.height,width:t.width}})},n=[],r=i("313e"),s=i.n(r),h=(i("817d"),i("b893")),c={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"430px"},chartData:{type:Array},legendData:{type:Array}},data:function(){return{chart:null}},mounted:function(){var t=this;this.initChart(),this.pieResizeHandle=Object(h["a"])(function(){t.piechart&&t.piechart.resize()},50),window.addEventListener("resize",this.pieResizeHandle)},beforeDestroy:function(){this.piechart&&window.removeEventListener("resize",this.pieResizeHandle),this.piechart.dispose(),this.piechart=null},methods:{initChart:function(){this.piechart=s.a.init(this.$el,"macarons"),this.piechart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",bottom:"10",data:this.legendData},calculable:!0,series:[{name:"FPS GAME DATA",type:"pie",roseType:"radius",radius:[15,140],center:["50%","38%"],data:this.chartData,animationEasing:"cubicInOut",animationDuration:2600}]})}}},o=c,l=i("2877"),d=Object(l["a"])(o,a,n,!1,null,null,null);d.options.__file="index.vue";e["default"]=d.exports}}]);