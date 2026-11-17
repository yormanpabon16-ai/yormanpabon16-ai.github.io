// Fondo 3D animado: red de nodos (sistema cibernético) con pulsos de retroalimentación.
(function(){
var cv=document.createElement('canvas');cv.id='cv';document.body.prepend(cv);
var ctx=cv.getContext('2d'),W,H,N,S,nodes=[],edges=[],pulses=[],mx=0,my=0,tx=0,ty=0,t0=performance.now(),last=t0,cls=null;
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var col=[15,118,110],tgt=[15,118,110];
function hex(h){h=h.trim().replace('#','');if(h.length==3)h=h.replace(/./g,'$&$&');return [parseInt(h.substr(0,2),16),parseInt(h.substr(2,2),16),parseInt(h.substr(4,2),16)]}
function theme(){var c=document.body.className;if(c===cls)return;cls=c;var v=getComputedStyle(document.body).getPropertyValue('--a');if(v)tgt=hex(v)}
function build(){var dpr=Math.min(2,window.devicePixelRatio||1);W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
 N=W<700?55:100;S=Math.max(W,H)*.52;nodes=[];edges=[];pulses=[];
 while(nodes.length<N){var x=Math.random()*2-1,y=Math.random()*2-1,z=Math.random()*2-1;if(x*x+y*y+z*z<=1)nodes.push({x:x,y:y,z:z})}
 var th=W<700?.42:.34;
 for(var i=0;i<N;i++)for(var j=i+1;j<N;j++){var a=nodes[i],b=nodes[j],d=Math.hypot(a.x-b.x,a.y-b.y,a.z-b.z);if(d<th)edges.push([i,j])}
 for(i=0;i<16&&edges.length;i++)pulses.push({e:Math.random()*edges.length|0,t:Math.random(),v:.004+Math.random()*.006,r:Math.random()<.5})}
function rgba(a){return 'rgba('+(col[0]|0)+','+(col[1]|0)+','+(col[2]|0)+','+a+')'}
function frame(now){var dt=Math.min(50,now-last);last=now;theme();
 for(var k=0;k<3;k++)col[k]+=(tgt[k]-col[k])*.05;
 mx+=(tx-mx)*.04;my+=(ty-my)*.04;
 var ay=reduce?.6:(now-t0)*.00007+mx*.5,ax=.35+Math.sin((now-t0)*.00004)*.15+my*.35,cy=Math.cos(ay),sy=Math.sin(ay),cx=Math.cos(ax),sx=Math.sin(ax),f=2.6,cxp=W/2,cyp=H/2;
 ctx.clearRect(0,0,W,H);
 var g=ctx.createRadialGradient(cxp,cyp,0,cxp,cyp,Math.max(W,H)*.6);g.addColorStop(0,rgba(.09));g.addColorStop(1,rgba(0));ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
 var P=nodes.map(function(n){var x=n.x*cy+n.z*sy,z=-n.x*sy+n.z*cy,y=n.y*cx-z*sx;z=n.y*sx+z*cx;var k=f/(f+z);return {x:cxp+x*S*k,y:cyp+y*S*k,z:z,k:k,d:1-(z+1)/2}});
 ctx.lineWidth=1;
 edges.forEach(function(e){var a=P[e[0]],b=P[e[1]];ctx.strokeStyle=rgba(.05+.17*((a.d+b.d)/2));ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()});
 P.forEach(function(p){ctx.fillStyle=rgba(.22+.45*p.d);ctx.beginPath();ctx.arc(p.x,p.y,(1.2+3.2*p.d)*p.k,0,6.283);ctx.fill()});
 pulses.forEach(function(u){if(!reduce)u.t+=u.v*dt/16;if(u.t>=1){u.t=0;u.e=Math.random()*edges.length|0}
  var e=edges[u.e],a=P[e[u.r?1:0]],b=P[e[u.r?0:1]],x=a.x+(b.x-a.x)*u.t,y=a.y+(b.y-a.y)*u.t,d=(a.d+b.d)/2;
  ctx.fillStyle=rgba(.14+.1*d);ctx.beginPath();ctx.arc(x,y,9*(.6+d),0,6.283);ctx.fill();
  ctx.fillStyle=rgba(.85);ctx.beginPath();ctx.arc(x,y,2.6*(.7+d),0,6.283);ctx.fill()});
 if(!reduce)requestAnimationFrame(frame)}
addEventListener('resize',function(){build();if(reduce)frame(performance.now())});
addEventListener('mousemove',function(e){tx=e.clientX/innerWidth-.5;ty=e.clientY/innerHeight-.5});
build();theme();col=tgt.slice();requestAnimationFrame(frame);
})();
