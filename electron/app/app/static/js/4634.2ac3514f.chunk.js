/*! For license information please see 4634.2ac3514f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkEyeVision=self.webpackChunkEyeVision||[]).push([[4634,1325,8855],{1325:function(e,t,o){o.r(t),o.d(t,{C:function(){return a},a:function(){return i},d:function(){return s}});var r=o(9388),n=o(9069),i=function(e,t,o,i,s,a){return(0,r.mG)(void 0,void 0,void 0,(function(){var c;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:if(e)return[2,e.attachViewToDom(t,o,s,i)];if(!a&&"string"!==typeof o&&!(o instanceof HTMLElement))throw new Error("framework delegate is missing");return c="string"===typeof o?t.ownerDocument&&t.ownerDocument.createElement(o):o,i&&i.forEach((function(e){return c.classList.add(e)})),s&&Object.assign(c,s),t.appendChild(c),[4,new Promise((function(e){return(0,n.c)(c,e)}))];case 1:return r.sent(),[2,c]}}))}))},s=function(e,t){if(t){if(e){var o=t.parentElement;return e.removeViewFromDom(o,t)}t.remove()}return Promise.resolve()},a=function(){var e,t;return{attachViewToDom:function(o,i,s,a){return void 0===s&&(s={}),void 0===a&&(a=[]),(0,r.mG)(void 0,void 0,void 0,(function(){var c,p,d;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return e=o,i?(c="string"===typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i,a.forEach((function(e){return c.classList.add(e)})),Object.assign(c,s),e.appendChild(c),[4,new Promise((function(e){return(0,n.c)(c,e)}))]):[3,2];case 1:return r.sent(),[3,3];case 2:e.children.length>0&&(p=e.ownerDocument&&e.ownerDocument.createElement("div"),a.forEach((function(e){return p.classList.add(e)})),p.append.apply(p,e.children),e.appendChild(p)),r.label=3;case 3:return d=document.querySelector("ion-app")||document.body,t=document.createComment("ionic teleport"),e.parentNode.insertBefore(t,e),d.appendChild(e),[2,e]}}))}))},removeViewFromDom:function(){return e&&t&&(t.parentNode.insertBefore(e,t),t.remove()),Promise.resolve()}}}},4634:function(e,t,o){o.r(t),o.d(t,{ion_popover:function(){return L}});var r=o(9388),n=o(5785),i=o(7923),s=o(1325),a=o(9069),c=o(79),p=o(8855),d=o(6667),l=o(3562),u=function(e,t,o){var r=t.getBoundingClientRect(),n=r.height,i=r.width;"cover"===e&&o&&(i=o.getBoundingClientRect().width);return{contentWidth:i,contentHeight:n}},h=function(e,t){return t&&"ION-ITEM"===t.tagName?e.findIndex((function(e){return e===t})):-1},v=function(e){var t=(0,a.g)(e).querySelector("button");t&&(0,a.r)((function(){return t.focus()}))},f=function(e){var t=function(t){return(0,r.mG)(void 0,void 0,void 0,(function(){var o,n,i,s,a,c,p;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:o=document.activeElement,n=[];try{n=Array.from(e.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch(e){}switch(t.key){case"ArrowLeft":return[3,1];case"ArrowDown":return[3,3];case"ArrowUp":return[3,4];case"Home":return[3,5];case"End":return[3,6];case"ArrowRight":case" ":case"Enter":return[3,7]}return[3,8];case 1:return[4,e.getParentPopover()];case 2:return r.sent()&&e.dismiss(void 0,void 0,!1),[3,8];case 3:return t.preventDefault(),i=function(e,t){return e[h(e,t)+1]}(n,o),void 0!==i&&v(i),[3,8];case 4:return t.preventDefault(),s=function(e,t){return e[h(e,t)-1]}(n,o),void 0!==s&&v(s),[3,8];case 5:return t.preventDefault(),void 0!==(a=n[0])&&v(a),[3,8];case 6:return t.preventDefault(),void 0!==(c=n[n.length-1])&&v(c),[3,8];case 7:return o&&function(e){return e.hasAttribute("data-ion-popover-trigger")}(o)&&(p=new CustomEvent("ionPopoverActivateTrigger"),o.dispatchEvent(p)),[3,8];case 8:return[2]}}))}))};return e.addEventListener("keydown",t),function(){return e.removeEventListener("keydown",t)}},g=function(e,t,o,r,n,i,s,a,c,p,d){var l,u={top:0,left:0,width:0,height:0};if("event"===i){if(!d)return c;var h=d;u={top:h.clientY,left:h.clientX,width:1,height:1}}else{var v=d,f=p||(null===(l=null===v||void 0===v?void 0:v.detail)||void 0===l?void 0:l.ionShadowTarget)||(null===v||void 0===v?void 0:v.target);if(!f)return c;var g=f.getBoundingClientRect();u={top:g.top,left:g.left,width:g.width,height:g.height}}var w=x(s,u,t,o,r,n,e),b=k(a,s,u,t,o),P=w.top+b.top,D=w.left+b.left,T=y(s,r,n,P,D,t,o,e),E=T.arrowTop,S=T.arrowLeft,I=m(s,a,e);return{top:P,left:D,referenceCoordinates:u,arrowTop:E,arrowLeft:S,originX:I.originX,originY:I.originY}},m=function(e,t,o){switch(e){case"top":return{originX:w(t),originY:"bottom"};case"bottom":return{originX:w(t),originY:"top"};case"left":return{originX:"right",originY:b(t)};case"right":return{originX:"left",originY:b(t)};case"start":return{originX:o?"left":"right",originY:b(t)};case"end":return{originX:o?"right":"left",originY:b(t)}}},w=function(e){switch(e){case"start":return"left";case"center":return"center";case"end":return"right"}},b=function(e){switch(e){case"start":return"top";case"center":return"center";case"end":return"bottom"}},y=function(e,t,o,r,n,i,s,a){var c={arrowTop:r+s/2-t/2,arrowLeft:n+i-t/2},p={arrowTop:r+s/2-t/2,arrowLeft:n-1.5*t};switch(e){case"top":return{arrowTop:r+s,arrowLeft:n+i/2-t/2};case"bottom":return{arrowTop:r-o,arrowLeft:n+i/2-t/2};case"left":return c;case"right":return p;case"start":return a?p:c;case"end":return a?c:p;default:return{arrowTop:0,arrowLeft:0}}},x=function(e,t,o,r,n,i,s){var a={top:t.top,left:t.left-o-n},c={top:t.top,left:t.left+t.width+n};switch(e){case"top":return{top:t.top-r-i,left:t.left};case"right":return c;case"bottom":return{top:t.top+t.height+i,left:t.left};case"left":return a;case"start":return s?c:a;case"end":return s?a:c}},k=function(e,t,o,r,n){switch(e){case"center":return D(t,o,r,n);case"end":return P(t,o,r,n);default:return{top:0,left:0}}},P=function(e,t,o,r){switch(e){case"start":case"end":case"left":case"right":return{top:-(r-t.height),left:0};default:return{top:0,left:-(o-t.width)}}},D=function(e,t,o,r){switch(e){case"start":case"end":case"left":case"right":return{top:-(r/2-t.height/2),left:0};default:return{top:0,left:-(o/2-t.width/2)}}},T=function(e,t,o,r,n,i,s,a,c,p,d,l,u,h,v){void 0===u&&(u=0),void 0===h&&(h=0),void 0===v&&(v=0);var f,g=u,m=h,w=o,b=t,y=p,x=d,k=!1,P=!1,D=l?l.top+l.height:i/2-a/2,T=l?l.height:0,E=!1;return w<r+c?(w=r,k=!0,y="left"):s+r+w+c>n&&(P=!0,w=n-s-r,y="right"),D+T+a>i&&("top"===e||"bottom"===e)&&(D-a>0?(g=(b=D-a-T-(v-1))+a,x="bottom",E=!0):f=r),{top:b,left:w,bottom:f,originX:y,originY:x,checkSafeAreaLeft:k,checkSafeAreaRight:P,arrowTop:g,arrowLeft:m,addPopoverBottomClass:E}},E=function(e,t){var o,r=t.event,n=t.size,i=t.trigger,s=t.reference,c=t.side,p=t.align,d=e.ownerDocument,h="rtl"===d.dir,v=d.defaultView.innerWidth,f=d.defaultView.innerHeight,m=(0,a.g)(e),w=m.querySelector(".popover-content"),b=m.querySelector(".popover-arrow"),y=i||(null===(o=null===r||void 0===r?void 0:r.detail)||void 0===o?void 0:o.ionShadowTarget)||(null===r||void 0===r?void 0:r.target),x=u(n,w,y),k=x.contentWidth,P=x.contentHeight,D=function(e){if(!e)return{arrowWidth:0,arrowHeight:0};var t=e.getBoundingClientRect();return{arrowWidth:t.width,arrowHeight:t.height}}(b),E=D.arrowWidth,S=D.arrowHeight,I=g(h,k,P,E,S,s,c,p,{top:f/2-P/2,left:v/2-k/2,originX:h?"right":"left",originY:"top"},i,r),A="cover"===n?0:5,L="cover"===n?0:25,C=T(c,I.top,I.left,A,v,f,k,P,L,I.originX,I.originY,I.referenceCoordinates,I.arrowTop,I.arrowLeft,S),W=C.originX,O=C.originY,q=C.top,N=C.left,X=C.bottom,Y=C.checkSafeAreaLeft,z=C.checkSafeAreaRight,B=C.arrowTop,V=C.arrowLeft,j=C.addPopoverBottomClass,H=(0,l.c)(),F=(0,l.c)(),G=(0,l.c)();return F.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),G.addElement(m.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),H.easing("ease").duration(100).beforeAddWrite((function(){"cover"===n&&e.style.setProperty("--width","".concat(k,"px")),j&&e.classList.add("popover-bottom"),void 0!==X&&w.style.setProperty("bottom","".concat(X,"px"));var t="".concat(N,"px");if(Y&&(t="".concat(N,"px").concat(" + var(--ion-safe-area-left, 0)")),z&&(t="".concat(N,"px").concat(" - var(--ion-safe-area-right, 0)")),w.style.setProperty("top","calc(".concat(q,"px + var(--offset-y, 0))")),w.style.setProperty("left","calc(".concat(t," + var(--offset-x, 0))")),w.style.setProperty("transform-origin","".concat(O," ").concat(W)),null!==b){var o=I.top!==q||I.left!==N,s=function(e,t,o,r){return void 0===t&&(t=!1),!(!o&&!r)&&("top"===e||"bottom"===e||!t)}(c,o,r,i);s?(b.style.setProperty("top","calc(".concat(B,"px + var(--offset-y, 0))")),b.style.setProperty("left","calc(".concat(V,"px + var(--offset-x, 0))"))):b.style.setProperty("display","none")}})).addAnimation([F,G])},S=function(e){var t=(0,a.g)(e),o=t.querySelector(".popover-content"),r=t.querySelector(".popover-arrow"),n=(0,l.c)(),i=(0,l.c)(),s=(0,l.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),n.easing("ease").afterAddWrite((function(){e.style.removeProperty("--width"),e.classList.remove("popover-bottom"),o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("bottom"),o.style.removeProperty("transform-origin"),r&&(r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("display"))})).duration(300).addAnimation([i,s])},I=function(e,t){var o,r=t.event,n=t.size,i=t.trigger,s=t.reference,c=t.side,p=t.align,d=e.ownerDocument,h="rtl"===d.dir,v=d.defaultView.innerWidth,f=d.defaultView.innerHeight,m=(0,a.g)(e),w=m.querySelector(".popover-content"),b=i||(null===(o=null===r||void 0===r?void 0:r.detail)||void 0===o?void 0:o.ionShadowTarget)||(null===r||void 0===r?void 0:r.target),y=u(n,w,b),x=y.contentWidth,k=y.contentHeight,P=g(h,x,k,0,0,s,c,p,{top:f/2-k/2,left:v/2-x/2,originX:h?"right":"left",originY:"top"},i,r),D="cover"===n?0:12,E=T(c,P.top,P.left,D,v,f,x,k,0,P.originX,P.originY,P.referenceCoordinates),S=E.originX,I=E.originY,A=E.top,L=E.left,C=E.bottom,W=(0,l.c)(),O=(0,l.c)(),q=(0,l.c)(),N=(0,l.c)(),X=(0,l.c)();return O.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),q.addElement(m.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),N.addElement(w).beforeStyles({top:"calc(".concat(A,"px + var(--offset-y, 0px))"),left:"calc(".concat(L,"px + var(--offset-x, 0px))"),"transform-origin":"".concat(I," ").concat(S)}).beforeAddWrite((function(){void 0!==C&&w.style.setProperty("bottom","".concat(C,"px"))})).fromTo("transform","scale(0.8)","scale(1)"),X.addElement(m.querySelector(".popover-viewport")).fromTo("opacity",.01,1),W.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite((function(){"cover"===n&&e.style.setProperty("--width","".concat(x,"px")),"bottom"===I&&e.classList.add("popover-bottom")})).addAnimation([O,q,N,X])},A=function(e){var t=(0,a.g)(e),o=t.querySelector(".popover-content"),r=(0,l.c)(),n=(0,l.c)(),i=(0,l.c)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),r.easing("ease").afterAddWrite((function(){e.style.removeProperty("--width"),e.classList.remove("popover-bottom"),o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("bottom"),o.style.removeProperty("transform-origin")})).duration(150).addAnimation([n,i])},L=function(){function e(e){var t=this;(0,n.r)(this,e),this.didPresent=(0,n.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,n.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,n.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,n.e)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,n.e)(this,"didPresent",7),this.willPresentShorthand=(0,n.e)(this,"willPresent",7),this.willDismissShorthand=(0,n.e)(this,"willDismiss",7),this.didDismissShorthand=(0,n.e)(this,"didDismiss",7),this.parentPopover=null,this.popoverIndex=W++,this.coreDelegate=(0,s.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.triggerAction="click",this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,c.B)},this.onLifecycle=function(e){var o=t.usersElement,r=C[e.type];if(o&&r){var n=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(n)}},this.configureTriggerInteraction=function(){var e=t,o=e.trigger,n=e.triggerAction,i=e.el,s=e.destroyTriggerInteraction;s&&s();var c=t.triggerEl=void 0!==o?document.getElementById(o):null;c&&(t.destroyTriggerInteraction=function(e,t,o){var n=[];switch(t){case"hover":var i;n=[{eventName:"mouseenter",callback:function(e){return(0,r.mG)(void 0,void 0,void 0,(function(){return(0,r.Jh)(this,(function(t){return e.stopPropagation(),i&&clearTimeout(i),i=setTimeout((function(){(0,a.r)((function(){o.presentFromTrigger(e),i=void 0}))}),100),[2]}))}))}},{eventName:"mouseleave",callback:function(e){i&&clearTimeout(i);var t=e.relatedTarget;t&&t.closest("ion-popover")!==o&&o.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return o.presentFromTrigger(e,!0)}}];break;case"context-menu":n=[{eventName:"contextmenu",callback:function(e){e.preventDefault(),o.presentFromTrigger(e)}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return o.presentFromTrigger(e,!0)}}];break;default:n=[{eventName:"click",callback:function(e){return o.presentFromTrigger(e)}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return o.presentFromTrigger(e,!0)}}]}return n.forEach((function(t){var o=t.eventName,r=t.callback;return e.addEventListener(o,r)})),e.setAttribute("data-ion-popover-trigger","true"),function(){n.forEach((function(t){var o=t.eventName,r=t.callback;return e.removeEventListener(o,r)})),e.removeAttribute("data-ion-popover-trigger")}}(c,n,i))},this.configureKeyboardInteraction=function(){var e=t,o=e.destroyKeyboardInteraction,r=e.el;o&&o(),t.destroyKeyboardInteraction=f(r)},this.configureDismissInteraction=function(){var e=t,o=e.destroyDismissInteraction,r=e.parentPopover,n=e.triggerAction,i=e.triggerEl,s=e.el;r&&i&&(o&&o(),t.destroyDismissInteraction=function(e,t,o,r){var n=[],i=(0,a.g)(r).querySelector(".popover-content");n="hover"===t?[{eventName:"mouseenter",callback:function(t){document.elementFromPoint(t.clientX,t.clientY)!==e&&o.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:function(t){t.target.closest("[data-ion-popover-trigger]")!==e?o.dismiss(void 0,void 0,!1):t.stopPropagation()}}];return n.forEach((function(e){var t=e.eventName,o=e.callback;return i.addEventListener(t,o)})),function(){n.forEach((function(e){var t=e.eventName,o=e.callback;return i.removeEventListener(t,o)}))}}(i,n,s,r))}}return e.prototype.onTriggerChange=function(){this.configureTriggerInteraction()},e.prototype.onIsOpenChange=function(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()},e.prototype.connectedCallback=function(){(0,c.e)(this.el)},e.prototype.componentWillLoad=function(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-popover-".concat(this.popoverIndex),this.parentPopover=this.el.closest("ion-popover:not(#".concat(this.popoverId,")")),void 0===this.alignment&&(this.alignment="ios"===(0,i.b)(this)?"center":"start")},e.prototype.componentDidLoad=function(){var e=this,t=this.parentPopover;!0===this.isOpen&&(0,a.r)((function(){return e.present()})),t&&(0,a.a)(t,"ionPopoverWillDismiss",(function(){e.dismiss(void 0,void 0,!1)})),this.configureTriggerInteraction()},e.prototype.presentFromTrigger=function(e,t){return void 0===t&&(t=!1),(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(o){switch(o.label){case 0:return this.focusDescendantOnPresent=t,[4,this.present(e)];case 1:return o.sent(),this.focusDescendantOnPresent=!1,[2]}}))}))},e.prototype.getDelegate=function(e){if(void 0===e&&(e=!1),this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};var t=this.el.parentNode,o=this.inline=null!==t&&!this.hasController;return{inline:o,delegate:this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate}},e.prototype.present=function(e){return(0,r.mG)(this,void 0,void 0,(function(){var t,o,n,i,a;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return this.presented?[2]:void 0===this.currentTransition?[3,2]:[4,this.currentTransition];case 1:r.sent(),r.label=2;case 2:return t=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),o=this.getDelegate(!0),n=o.inline,i=o.delegate,a=this,[4,(0,s.a)(i,this.el,this.component,["popover-viewport"],t,n)];case 3:return a.usersElement=r.sent(),[4,(0,d.e)(this.usersElement)];case 4:return r.sent(),this.keyboardEvents||this.configureKeyboardInteraction(),this.configureDismissInteraction(),this.currentTransition=(0,c.d)(this,"popoverEnter",E,I,{event:e||this.event,size:this.size,trigger:this.triggerEl,reference:this.reference,side:this.side,align:this.alignment}),[4,this.currentTransition];case 5:return r.sent(),this.currentTransition=void 0,this.focusDescendantOnPresent&&(0,c.j)(this.el,this.el),[2]}}))}))},e.prototype.dismiss=function(e,t,o){return void 0===o&&(o=!0),(0,r.mG)(this,void 0,void 0,(function(){var n,i,a,p,d;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return void 0===this.currentTransition?[3,2]:[4,this.currentTransition];case 1:r.sent(),r.label=2;case 2:return i=(n=this).destroyKeyboardInteraction,a=n.destroyDismissInteraction,o&&this.parentPopover&&this.parentPopover.dismiss(e,t,o),this.currentTransition=(0,c.f)(this,e,t,"popoverLeave",S,A,this.event),[4,this.currentTransition];case 3:return(p=r.sent())?(i&&(i(),this.destroyKeyboardInteraction=void 0),a&&(a(),this.destroyDismissInteraction=void 0),d=this.getDelegate().delegate,[4,(0,s.d)(d,this.usersElement)]):[3,5];case 4:r.sent(),r.label=5;case 5:return this.currentTransition=void 0,[2,p]}}))}))},e.prototype.getParentPopover=function(){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){return[2,this.parentPopover]}))}))},e.prototype.onDidDismiss=function(){return(0,c.g)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return(0,c.g)(this.el,"ionPopoverWillDismiss")},e.prototype.render=function(){var e,t=this,o=(0,i.b)(this),r=this,s=r.onLifecycle,a=r.popoverId,c=r.parentPopover,d=r.dismissOnSelect,l=r.side,u=r.arrow,h=r.htmlAttributes,v=(0,i.a)("desktop"),f=u&&!c&&!v;return(0,n.h)(n.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},h,{style:{zIndex:"".concat(2e4+this.overlayIndex)},id:a,class:Object.assign(Object.assign({},(0,p.g)(this.cssClass)),(e={},e[o]=!0,e["popover-translucent"]=this.translucent,e["overlay-hidden"]=!0,e["popover-desktop"]=v,e["popover-side-".concat(l)]=!0,e["popover-nested"]=!!c,e)),onIonPopoverDidPresent:s,onIonPopoverWillPresent:s,onIonPopoverWillDismiss:s,onIonPopoverDidDismiss:s,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap}),!c&&(0,n.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,n.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:d?function(){return t.dismiss()}:void 0},f&&(0,n.h)("div",{class:"popover-arrow",part:"arrow"}),(0,n.h)("div",{class:"popover-content",part:"content"},(0,n.h)("slot",null))))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,n.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}},enumerable:!1,configurable:!0}),e}(),C={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"},W=0;L.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}"}},8855:function(e,t,o){o.r(t),o.d(t,{c:function(){return i},g:function(){return s},h:function(){return n},o:function(){return c}});var r=o(9388),n=function(e,t){return null!==t.closest(e)},i=function(e,t){var o;return"string"===typeof e&&e.length>0?Object.assign(((o={"ion-color":!0})["ion-color-".concat(e)]=!0,o),t):t},s=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},a=/^[a-z][a-z0-9+\-.]*:/,c=function(e,t,o,n){return(0,r.mG)(void 0,void 0,void 0,(function(){var i;return(0,r.Jh)(this,(function(r){return null!=e&&"#"!==e[0]&&!a.test(e)&&(i=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,i.push(e,o,n)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=4634.2ac3514f.chunk.js.map