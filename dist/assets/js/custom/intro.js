"use strict";var KTIntro=function(){var e=function(e,t,o){var n=new Date,i=(n.getTime(),1296e6);if(!KTCookie.get(e+"_counter")||parseInt(KTCookie.get(e+"_counter"))<3)return KTCookie.get(e+"_counter")?"1"!=KTCookie.get(e+"_counter")||KTCookie.get(e+"_show_1")?"2"==KTCookie.get(e+"_counter")&&!KTCookie.get(e+"_show_2")&&(setTimeout(t,o),KTCookie.set(e+"_show_3","1",{expires:new Date(n.getTime()+i)}),KTCookie.set(e+"_counter","3",{expires:new Date(n.getTime()+i)}),!0):(setTimeout(t,o),KTCookie.set(e+"_show_2","1",{expires:new Date(n.getTime()+6048e5)}),KTCookie.set(e+"_counter","2",{expires:new Date(n.getTime()+18144e5)}),!0):(setTimeout(t,o),KTCookie.set(e+"_show_1","1",{expires:new Date(n.getTime()+1728e5)}),KTCookie.set(e+"_counter","1",{expires:new Date(n.getTime()+2592e6)}),!0)},t=function(){var e=document.querySelector("#kt_header_search_toggle");if(e){var t=KTApp.initBootstrapPopover(e,{customClass:"popover-dark",container:"body",boundary:"window",placement:"left",trigger:"manual",dismiss:!0,html:!0,title:"Quick Search",content:"Fully functional search with advance options and preferences setup"});t.show(),setTimeout((function(){t&&t.dispose()}),1e4),e.addEventListener("click",(function(e){t.dispose()}))}},o=function(){var e=document.querySelector("#kt_activities_toggle");if(e){var t=KTApp.initBootstrapPopover(e,{customClass:"popover-dark",container:"body",boundary:"window",placement:"left",trigger:"manual",dismiss:!0,html:!0,title:"Quick Notifications",content:"Seamless access to updates and notifications in various formats"});t.show(),setTimeout((function(){t&&t.dispose()}),1e4),e.addEventListener("click",(function(e){t.dispose()}))}},n=function(){var e=document.querySelector("#kt_header_user_menu_toggle");if(e){var t=KTApp.initBootstrapPopover(e,{customClass:"popover-dark",container:"body",boundary:"window",placement:"left",trigger:"manual",dismiss:!0,html:!0,title:"Advanced User Menu",content:"With quick links to user profile and account settings pages"});t.show(),setTimeout((function(){t&&t.dispose()}),1e4),e.addEventListener("click",(function(e){t.dispose()}))}},i=function(i){!1===KTUtil.inIframe()&&(e("kt_"+i+"_intro_1",t,5e3)||e("kt_"+i+"_intro_2",o,5e3)||e("kt_"+i+"_intro_3",n,5e3)),function(t){var o=0;KTUtil.on(document.body,'[data-kt-page="pro"]',"click",(function(n){n.preventDefault(),3==++o&&e("kt_"+t+"_explore_show",(function(){KTDrawer.getInstance(document.querySelector("#kt_explore")).show()}),0)}))}(i)};return{init:function(){i("jet")}}}();"undefined"!=typeof module&&(module.exports=KTIntro),KTUtil.onDOMContentLoaded((function(){KTIntro.init()}));