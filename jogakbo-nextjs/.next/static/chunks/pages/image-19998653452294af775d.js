_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{SJ6J:function(n,e,t){"use strict";t.r(e);var a=t("nKUr"),r=t("vJKn"),i=t.n(r),o=t("rg98"),p=t("vDqi"),c=t.n(p),u=(t("q1tI"),t("vOnD").b.div.withConfig({displayName:"image__Wrapper",componentId:"sc-1mvtesj-0"})(["padding:80px;"]));e.default=function(){var n=function(){var n=Object(o.a)(i.a.mark((function n(e){var t,a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),!e.target.files){n.next=9;break}for(t=new FormData,a=0;a<e.target.files.length;a++)t.append("images",e.target.files[a]);return t.append("CampaignId",Number(id)),t.append("CampaignDescription",desc),t.append("CampaignName",name),n.next=9,c()({method:"post",url:"http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/image",data:t,headers:{"Content-Type":"multipart/form-data"}}).then((function(n){return console.log("\uc131\uacf5")})).catch((function(n){return console.error(n)}));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(a.jsx)(u,{children:Object(a.jsx)("form",{children:Object(a.jsx)("input",{type:"file",multiple:!0,onChange:function(e){return n(e)}})})})}},ZOHC:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/image",function(){return t("SJ6J")}])}},[["ZOHC",0,1,2,3,4]]]);