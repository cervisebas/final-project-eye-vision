"use strict";(self.webpackChunkEyeVision=self.webpackChunkEyeVision||[]).push([[471],{471:function(e,n,t){t.r(n),t.d(n,{createSwipeBackGesture:function(){return a}});var r=t(9069),i=t(3127),u=t(236),a=(t(1045),function(e,n,t,a,o){var c=e.ownerDocument.defaultView,s=(0,i.i)(e),f=function(e){return s?-e.deltaX:e.deltaX},h=function(e){return s?-e.velocityX:e.velocityX};return(0,u.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return function(e){var n=e.startX;return s?n>=c.innerWidth-50:n<=50}(e)&&n()},onStart:t,onMove:function(e){var n=f(e)/c.innerWidth;a(n)},onEnd:function(e){var n=f(e),t=c.innerWidth,i=n/t,u=h(e),a=u>=0&&(u>.2||n>t/2),s=(a?1-i:i)*t,d=0;if(s>5){var l=s/Math.abs(u);d=Math.min(l,540)}o(a,i<=0?.01:(0,r.k)(0,i,.9999),d)}})})}}]);
//# sourceMappingURL=471.53b1dc6a.chunk.js.map