(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();const Qn="182",ml=0,Ms=1,gl=2,ta=1,_l=2,vr=3,Ti=0,yt=1,ai=2,si=0,Ji=1,en=2,Ss=3,Ts=4,vl=5,Li=100,xl=101,Ml=102,Sl=103,Tl=104,yl=200,El=201,bl=202,Al=203,tn=204,rn=205,wl=206,Rl=207,Cl=208,Pl=209,Ll=210,Dl=211,Ul=212,Nl=213,Il=214,an=0,nn=1,sn=2,er=3,on=4,ln=5,cn=6,un=7,To=0,Ol=1,Fl=2,Yt=0,yo=1,Eo=2,bo=3,Ao=4,wo=5,Ro=6,Co=7,Po=300,Ii=301,tr=302,hn=303,dn=304,fa=306,fn=1e3,ni=1001,pn=1002,pt=1003,Bl=1004,Dr=1005,vt=1006,Sa=1007,Ui=1008,Dt=1009,Lo=1010,Do=1011,Mr=1012,es=1013,Zt=1014,Xt=1015,ci=1016,ts=1017,is=1018,Sr=1020,Uo=35902,No=35899,Io=1021,Oo=1022,Vt=1023,ui=1026,Ni=1027,Fo=1028,rs=1029,ir=1030,as=1031,ns=1033,ia=33776,ra=33777,aa=33778,na=33779,mn=35840,gn=35841,_n=35842,vn=35843,xn=36196,Mn=37492,Sn=37496,Tn=37488,yn=37489,En=37490,bn=37491,An=37808,wn=37809,Rn=37810,Cn=37811,Pn=37812,Ln=37813,Dn=37814,Un=37815,Nn=37816,In=37817,On=37818,Fn=37819,Bn=37820,zn=37821,Vn=36492,Hn=36494,Gn=36495,kn=36283,Wn=36284,Xn=36285,jn=36286,zl=3200,Vl=0,Hl=1,Mi="",Pt="srgb",rr="srgb-linear",ua="linear",We="srgb",Fi=7680,ys=519,Gl=512,kl=513,Wl=514,ss=515,Xl=516,jl=517,os=518,Yl=519,Es=35044,bs="300 es",jt=2e3,ha=2001;function Bo(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function da(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ql(){const r=da("canvas");return r.style.display="block",r}const As={};function ws(...r){const e="THREE."+r.shift();console.log(e,...r)}function Ce(...r){const e="THREE."+r.shift();console.warn(e,...r)}function ze(...r){const e="THREE."+r.shift();console.error(e,...r)}function Tr(...r){const e=r.join(" ");e in As||(As[e]=!0,Ce(...r))}function Zl(r,e,t){return new Promise(function(i,a){function n(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:i()}}setTimeout(n,t)})}class nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const n=a.indexOf(t);n!==-1&&a.splice(n,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let n=0,s=a.length;n<s;n++)a[n].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ta=Math.PI/180,Yn=180/Math.PI;function br(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gt[r&255]+gt[r>>8&255]+gt[r>>16&255]+gt[r>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]).toLowerCase()}function Fe(r,e,t){return Math.max(e,Math.min(t,r))}function Kl(r,e){return(r%e+e)%e}function ya(r,e,t){return(1-t)*r+t*e}function ur(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Fe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Fe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*i-s*a+e.x,this.y=n*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ar{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,n,s,o){let c=i[a+0],l=i[a+1],h=i[a+2],f=i[a+3],d=n[s+0],g=n[s+1],x=n[s+2],M=n[s+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(o>=1){e[t+0]=d,e[t+1]=g,e[t+2]=x,e[t+3]=M;return}if(f!==M||c!==d||l!==g||h!==x){let p=c*d+l*g+h*x+f*M;p<0&&(d=-d,g=-g,x=-x,M=-M,p=-p);let u=1-o;if(p<.9995){const y=Math.acos(p),b=Math.sin(y);u=Math.sin(u*y)/b,o=Math.sin(o*y)/b,c=c*u+d*o,l=l*u+g*o,h=h*u+x*o,f=f*u+M*o}else{c=c*u+d*o,l=l*u+g*o,h=h*u+x*o,f=f*u+M*o;const y=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=y,l*=y,h*=y,f*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,a,n,s){const o=i[a],c=i[a+1],l=i[a+2],h=i[a+3],f=n[s],d=n[s+1],g=n[s+2],x=n[s+3];return e[t]=o*x+h*f+c*g-l*d,e[t+1]=c*x+h*d+l*f-o*g,e[t+2]=l*x+h*g+o*d-c*f,e[t+3]=h*x-o*f-c*d-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,n=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(a/2),f=o(n/2),d=c(i/2),g=c(a/2),x=c(n/2);switch(s){case"XYZ":this._x=d*h*f+l*g*x,this._y=l*g*f-d*h*x,this._z=l*h*x+d*g*f,this._w=l*h*f-d*g*x;break;case"YXZ":this._x=d*h*f+l*g*x,this._y=l*g*f-d*h*x,this._z=l*h*x-d*g*f,this._w=l*h*f+d*g*x;break;case"ZXY":this._x=d*h*f-l*g*x,this._y=l*g*f+d*h*x,this._z=l*h*x+d*g*f,this._w=l*h*f-d*g*x;break;case"ZYX":this._x=d*h*f-l*g*x,this._y=l*g*f+d*h*x,this._z=l*h*x-d*g*f,this._w=l*h*f+d*g*x;break;case"YZX":this._x=d*h*f+l*g*x,this._y=l*g*f+d*h*x,this._z=l*h*x-d*g*f,this._w=l*h*f-d*g*x;break;case"XZY":this._x=d*h*f-l*g*x,this._y=l*g*f-d*h*x,this._z=l*h*x+d*g*f,this._w=l*h*f+d*g*x;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],n=t[8],s=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=i+o+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-c)*g,this._y=(n-l)*g,this._z=(s-a)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(h-c)/g,this._x=.25*g,this._y=(a+s)/g,this._z=(n+l)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(n-l)/g,this._x=(a+s)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(s-a)/g,this._x=(n+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,n=e._z,s=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+s*o+a*l-n*c,this._y=a*h+s*c+n*o-i*l,this._z=n*h+s*l+i*c-a*o,this._w=s*h-i*o-a*c-n*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,a=e._y,n=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,n=-n,s=-s,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+a*t,this._z=this._z*c+n*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+a*t,this._z=this._z*c+n*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*a,this.y=n[1]*t+n[4]*i+n[7]*a,this.z=n[2]*t+n[5]*i+n[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,n=e.elements,s=1/(n[3]*t+n[7]*i+n[11]*a+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*a+n[12])*s,this.y=(n[1]*t+n[5]*i+n[9]*a+n[13])*s,this.z=(n[2]*t+n[6]*i+n[10]*a+n[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,n=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*a-o*i),h=2*(o*t-n*a),f=2*(n*i-s*t);return this.x=t+c*l+s*f-o*h,this.y=i+c*h+o*l-n*f,this.z=a+c*f+n*h-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*a,this.y=n[1]*t+n[5]*i+n[9]*a,this.z=n[2]*t+n[6]*i+n[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Fe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,n=e.z,s=t.x,o=t.y,c=t.z;return this.x=a*c-n*o,this.y=n*s-i*c,this.z=i*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Fe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new I,Rs=new Ar;class Le{constructor(e,t,i,a,n,s,o,c,l){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,n,s,o,c,l)}set(e,t,i,a,n,s,o,c,l){const h=this.elements;return h[0]=e,h[1]=a,h[2]=o,h[3]=t,h[4]=n,h[5]=c,h[6]=i,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,n=this.elements,s=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],d=i[2],g=i[5],x=i[8],M=a[0],p=a[3],u=a[6],y=a[1],b=a[4],E=a[7],A=a[2],R=a[5],C=a[8];return n[0]=s*M+o*y+c*A,n[3]=s*p+o*b+c*R,n[6]=s*u+o*E+c*C,n[1]=l*M+h*y+f*A,n[4]=l*p+h*b+f*R,n[7]=l*u+h*E+f*C,n[2]=d*M+g*y+x*A,n[5]=d*p+g*b+x*R,n[8]=d*u+g*E+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],n=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*s*h-t*o*l-i*n*h+i*o*c+a*n*l-a*s*c}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],n=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*s-o*l,d=o*c-h*n,g=l*n-s*c,x=t*f+i*d+a*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=f*M,e[1]=(a*l-h*i)*M,e[2]=(o*i-a*s)*M,e[3]=d*M,e[4]=(h*t-a*c)*M,e[5]=(a*n-o*t)*M,e[6]=g*M,e[7]=(i*c-l*t)*M,e[8]=(s*t-i*n)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,n,s,o){const c=Math.cos(n),l=Math.sin(n);return this.set(i*c,i*l,-i*(c*s+l*o)+s+e,-a*l,a*c,-a*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ba.makeScale(e,t)),this}rotate(e){return this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new Le,Cs=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ps=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jl(){const r={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===We&&(a.r=oi(a.r),a.g=oi(a.g),a.b=oi(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===We&&(a.r=$i(a.r),a.g=$i(a.g),a.b=$i(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Mi?ua:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return Tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return Tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,n)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[rr]:{primaries:e,whitePoint:i,transfer:ua,toXYZ:Cs,fromXYZ:Ps,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:i,transfer:We,toXYZ:Cs,fromXYZ:Ps,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),r}const Ve=Jl();function oi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $i(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Bi;class $l{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Bi===void 0&&(Bi=da("canvas")),Bi.width=e.width,Bi.height=e.height;const a=Bi.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Bi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),n=a.data;for(let s=0;s<n.length;s++)n[s]=oi(n[s]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(oi(t[i]/255)*255):t[i]=oi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ql=0;class ls{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=br(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let n;if(Array.isArray(a)){n=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?n.push(Aa(a[s].image)):n.push(Aa(a[s]))}else n=Aa(a);i.url=n}return t||(e.images[this.uuid]=i),i}}function Aa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$l.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let ec=0;const wa=new I;class Mt extends nr{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,i=ni,a=ni,n=vt,s=Ui,o=Vt,c=Dt,l=Mt.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ec++}),this.uuid=br(),this.name="",this.source=new ls(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wa).x}get height(){return this.source.getSize(wa).y}get depth(){return this.source.getSize(wa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Po)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fn:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case pn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fn:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case pn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Po;Mt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,a=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a+s[12]*n,this.y=s[1]*t+s[5]*i+s[9]*a+s[13]*n,this.z=s[2]*t+s[6]*i+s[10]*a+s[14]*n,this.w=s[3]*t+s[7]*i+s[11]*a+s[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,n;const s=e.elements,o=s[0],c=s[4],l=s[8],h=s[1],f=s[5],d=s[9],g=s[2],x=s[6],M=s[10];if(Math.abs(c-h)<.01&&Math.abs(l-g)<.01&&Math.abs(d-x)<.01){if(Math.abs(c+h)<.1&&Math.abs(l+g)<.1&&Math.abs(d+x)<.1&&Math.abs(o+f+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const u=(o+1)/2,y=(f+1)/2,b=(M+1)/2,E=(c+h)/4,A=(l+g)/4,R=(d+x)/4;return u>y&&u>b?u<.01?(i=0,a=.707106781,n=.707106781):(i=Math.sqrt(u),a=E/i,n=A/i):y>b?y<.01?(i=.707106781,a=0,n=.707106781):(a=Math.sqrt(y),i=E/a,n=R/a):b<.01?(i=.707106781,a=.707106781,n=0):(n=Math.sqrt(b),i=A/n,a=R/n),this.set(i,a,n,t),this}let p=Math.sqrt((x-d)*(x-d)+(l-g)*(l-g)+(h-c)*(h-c));return Math.abs(p)<.001&&(p=1),this.x=(x-d)/p,this.y=(l-g)/p,this.z=(h-c)/p,this.w=Math.acos((o+f+M-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Fe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tc extends nr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const a={width:e,height:t,depth:i.depth},n=new Mt(a);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=n.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,n=this.textures.length;a<n;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new ls(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qt extends tc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class zo extends Mt{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=pt,this.minFilter=pt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ic extends Mt{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=pt,this.minFilter=pt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ot.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ot.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ot.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=n.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Ot):Ot.fromBufferAttribute(n,s),Ot.applyMatrix4(e.matrixWorld),this.expandByPoint(Ot);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ur.copy(i.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}const a=e.children;for(let n=0,s=a.length;n<s;n++)this.expandByObject(a[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ot),Ot.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),Nr.subVectors(this.max,hr),zi.subVectors(e.a,hr),Vi.subVectors(e.b,hr),Hi.subVectors(e.c,hr),fi.subVectors(Vi,zi),pi.subVectors(Hi,Vi),bi.subVectors(zi,Hi);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-bi.z,bi.y,fi.z,0,-fi.x,pi.z,0,-pi.x,bi.z,0,-bi.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-bi.y,bi.x,0];return!Ra(t,zi,Vi,Hi,Nr)||(t=[1,0,0,0,1,0,0,0,1],!Ra(t,zi,Vi,Hi,Nr))?!1:(Ir.crossVectors(fi,pi),t=[Ir.x,Ir.y,Ir.z],Ra(t,zi,Vi,Hi,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ot).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ot).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qt=[new I,new I,new I,new I,new I,new I,new I,new I],Ot=new I,Ur=new wr,zi=new I,Vi=new I,Hi=new I,fi=new I,pi=new I,bi=new I,hr=new I,Nr=new I,Ir=new I,Ai=new I;function Ra(r,e,t,i,a){for(let n=0,s=r.length-3;n<=s;n+=3){Ai.fromArray(r,n);const o=a.x*Math.abs(Ai.x)+a.y*Math.abs(Ai.y)+a.z*Math.abs(Ai.z),c=e.dot(Ai),l=t.dot(Ai),h=i.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const rc=new wr,dr=new I,Ca=new I;class pa{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rc.setFromPoints(e).getCenter(i);let a=0;for(let n=0,s=e.length;n<s;n++)a=Math.max(a,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(dr,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(Ca)),this.expandByPoint(dr.copy(e.center).sub(Ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ei=new I,Pa=new I,Or=new I,mi=new I,La=new I,Fr=new I,Da=new I;class cs{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Pa.copy(e).add(t).multiplyScalar(.5),Or.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Pa);const n=e.distanceTo(t)*.5,s=-this.direction.dot(Or),o=mi.dot(this.direction),c=-mi.dot(Or),l=mi.lengthSq(),h=Math.abs(1-s*s);let f,d,g,x;if(h>0)if(f=s*c-o,d=s*o-c,x=n*h,f>=0)if(d>=-x)if(d<=x){const M=1/h;f*=M,d*=M,g=f*(f+s*d+2*o)+d*(s*f+d+2*c)+l}else d=n,f=Math.max(0,-(s*d+o)),g=-f*f+d*(d+2*c)+l;else d=-n,f=Math.max(0,-(s*d+o)),g=-f*f+d*(d+2*c)+l;else d<=-x?(f=Math.max(0,-(-s*n+o)),d=f>0?-n:Math.min(Math.max(-n,-c),n),g=-f*f+d*(d+2*c)+l):d<=x?(f=0,d=Math.min(Math.max(-n,-c),n),g=d*(d+2*c)+l):(f=Math.max(0,-(s*n+o)),d=f>0?n:Math.min(Math.max(-n,-c),n),g=-f*f+d*(d+2*c)+l);else d=s>0?-n:n,f=Math.max(0,-(s*d+o)),g=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(Pa).addScaledVector(Or,d),g}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),a=ei.dot(ei)-i*i,n=e.radius*e.radius;if(a>n)return null;const s=Math.sqrt(n-a),o=i-s,c=i+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,n,s,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,a=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,a=(e.min.x-d.x)*l),h>=0?(n=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(n=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),i>s||n>a||((n>i||isNaN(i))&&(i=n),(s<a||isNaN(a))&&(a=s),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||o>a)||((o>i||i!==i)&&(i=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,i,a,n){La.subVectors(t,e),Fr.subVectors(i,e),Da.crossVectors(La,Fr);let s=this.direction.dot(Da),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;mi.subVectors(this.origin,e);const c=o*this.direction.dot(Fr.crossVectors(mi,Fr));if(c<0)return null;const l=o*this.direction.dot(La.cross(mi));if(l<0||c+l>s)return null;const h=-o*mi.dot(Da);return h<0?null:this.at(h/s,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,a,n,s,o,c,l,h,f,d,g,x,M,p){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,n,s,o,c,l,h,f,d,g,x,M,p)}set(e,t,i,a,n,s,o,c,l,h,f,d,g,x,M,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=a,u[1]=n,u[5]=s,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=g,u[7]=x,u[11]=M,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,a=1/Gi.setFromMatrixColumn(e,0).length(),n=1/Gi.setFromMatrixColumn(e,1).length(),s=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,n=e.z,s=Math.cos(i),o=Math.sin(i),c=Math.cos(a),l=Math.sin(a),h=Math.cos(n),f=Math.sin(n);if(e.order==="XYZ"){const d=s*h,g=s*f,x=o*h,M=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=g+x*l,t[5]=d-M*l,t[9]=-o*c,t[2]=M-d*l,t[6]=x+g*l,t[10]=s*c}else if(e.order==="YXZ"){const d=c*h,g=c*f,x=l*h,M=l*f;t[0]=d+M*o,t[4]=x*o-g,t[8]=s*l,t[1]=s*f,t[5]=s*h,t[9]=-o,t[2]=g*o-x,t[6]=M+d*o,t[10]=s*c}else if(e.order==="ZXY"){const d=c*h,g=c*f,x=l*h,M=l*f;t[0]=d-M*o,t[4]=-s*f,t[8]=x+g*o,t[1]=g+x*o,t[5]=s*h,t[9]=M-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const d=s*h,g=s*f,x=o*h,M=o*f;t[0]=c*h,t[4]=x*l-g,t[8]=d*l+M,t[1]=c*f,t[5]=M*l+d,t[9]=g*l-x,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,g=s*l,x=o*c,M=o*l;t[0]=c*h,t[4]=M-d*f,t[8]=x*f+g,t[1]=f,t[5]=s*h,t[9]=-o*h,t[2]=-l*h,t[6]=g*f+x,t[10]=d-M*f}else if(e.order==="XZY"){const d=s*c,g=s*l,x=o*c,M=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+M,t[5]=s*h,t[9]=g*f-x,t[2]=x*f-g,t[6]=o*h,t[10]=M*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ac,e,nc)}lookAt(e,t,i){const a=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),gi.crossVectors(i,At),gi.lengthSq()===0&&(Math.abs(i.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),gi.crossVectors(i,At)),gi.normalize(),Br.crossVectors(At,gi),a[0]=gi.x,a[4]=Br.x,a[8]=At.x,a[1]=gi.y,a[5]=Br.y,a[9]=At.y,a[2]=gi.z,a[6]=Br.z,a[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,n=this.elements,s=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],d=i[9],g=i[13],x=i[2],M=i[6],p=i[10],u=i[14],y=i[3],b=i[7],E=i[11],A=i[15],R=a[0],C=a[4],F=a[8],v=a[12],S=a[1],D=a[5],z=a[9],V=a[13],W=a[2],Z=a[6],G=a[10],H=a[14],J=a[3],ie=a[7],ue=a[11],Me=a[15];return n[0]=s*R+o*S+c*W+l*J,n[4]=s*C+o*D+c*Z+l*ie,n[8]=s*F+o*z+c*G+l*ue,n[12]=s*v+o*V+c*H+l*Me,n[1]=h*R+f*S+d*W+g*J,n[5]=h*C+f*D+d*Z+g*ie,n[9]=h*F+f*z+d*G+g*ue,n[13]=h*v+f*V+d*H+g*Me,n[2]=x*R+M*S+p*W+u*J,n[6]=x*C+M*D+p*Z+u*ie,n[10]=x*F+M*z+p*G+u*ue,n[14]=x*v+M*V+p*H+u*Me,n[3]=y*R+b*S+E*W+A*J,n[7]=y*C+b*D+E*Z+A*ie,n[11]=y*F+b*z+E*G+A*ue,n[15]=y*v+b*V+E*H+A*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],n=e[12],s=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],g=e[14],x=e[3],M=e[7],p=e[11],u=e[15],y=c*g-l*d,b=o*g-l*f,E=o*d-c*f,A=s*g-l*h,R=s*d-c*h,C=s*f-o*h;return t*(M*y-p*b+u*E)-i*(x*y-p*A+u*R)+a*(x*b-M*A+u*C)-n*(x*E-M*R+p*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],n=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],g=e[11],x=e[12],M=e[13],p=e[14],u=e[15],y=f*p*l-M*d*l+M*c*g-o*p*g-f*c*u+o*d*u,b=x*d*l-h*p*l-x*c*g+s*p*g+h*c*u-s*d*u,E=h*M*l-x*f*l+x*o*g-s*M*g-h*o*u+s*f*u,A=x*f*c-h*M*c-x*o*d+s*M*d+h*o*p-s*f*p,R=t*y+i*b+a*E+n*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=y*C,e[1]=(M*d*n-f*p*n-M*a*g+i*p*g+f*a*u-i*d*u)*C,e[2]=(o*p*n-M*c*n+M*a*l-i*p*l-o*a*u+i*c*u)*C,e[3]=(f*c*n-o*d*n-f*a*l+i*d*l+o*a*g-i*c*g)*C,e[4]=b*C,e[5]=(h*p*n-x*d*n+x*a*g-t*p*g-h*a*u+t*d*u)*C,e[6]=(x*c*n-s*p*n-x*a*l+t*p*l+s*a*u-t*c*u)*C,e[7]=(s*d*n-h*c*n+h*a*l-t*d*l-s*a*g+t*c*g)*C,e[8]=E*C,e[9]=(x*f*n-h*M*n-x*i*g+t*M*g+h*i*u-t*f*u)*C,e[10]=(s*M*n-x*o*n+x*i*l-t*M*l-s*i*u+t*o*u)*C,e[11]=(h*o*n-s*f*n-h*i*l+t*f*l+s*i*g-t*o*g)*C,e[12]=A*C,e[13]=(h*M*a-x*f*a+x*i*d-t*M*d-h*i*p+t*f*p)*C,e[14]=(x*o*a-s*M*a-x*i*c+t*M*c+s*i*p-t*o*p)*C,e[15]=(s*f*a-h*o*a+h*i*c-t*f*c-s*i*d+t*o*d)*C,this}scale(e){const t=this.elements,i=e.x,a=e.y,n=e.z;return t[0]*=i,t[4]*=a,t[8]*=n,t[1]*=i,t[5]*=a,t[9]*=n,t[2]*=i,t[6]*=a,t[10]*=n,t[3]*=i,t[7]*=a,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),n=1-i,s=e.x,o=e.y,c=e.z,l=n*s,h=n*o;return this.set(l*s+i,l*o-a*c,l*c+a*o,0,l*o+a*c,h*o+i,h*c-a*s,0,l*c-a*o,h*c+a*s,n*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,n,s){return this.set(1,i,n,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,n=t._x,s=t._y,o=t._z,c=t._w,l=n+n,h=s+s,f=o+o,d=n*l,g=n*h,x=n*f,M=s*h,p=s*f,u=o*f,y=c*l,b=c*h,E=c*f,A=i.x,R=i.y,C=i.z;return a[0]=(1-(M+u))*A,a[1]=(g+E)*A,a[2]=(x-b)*A,a[3]=0,a[4]=(g-E)*R,a[5]=(1-(d+u))*R,a[6]=(p+y)*R,a[7]=0,a[8]=(x+b)*C,a[9]=(p-y)*C,a[10]=(1-(d+M))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;if(e.x=a[12],e.y=a[13],e.z=a[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let n=Gi.set(a[0],a[1],a[2]).length();const s=Gi.set(a[4],a[5],a[6]).length(),o=Gi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),Ft.copy(this);const c=1/n,l=1/s,h=1/o;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=l,Ft.elements[5]*=l,Ft.elements[6]*=l,Ft.elements[8]*=h,Ft.elements[9]*=h,Ft.elements[10]*=h,t.setFromRotationMatrix(Ft),i.x=n,i.y=s,i.z=o,this}makePerspective(e,t,i,a,n,s,o=jt,c=!1){const l=this.elements,h=2*n/(t-e),f=2*n/(i-a),d=(t+e)/(t-e),g=(i+a)/(i-a);let x,M;if(c)x=n/(s-n),M=s*n/(s-n);else if(o===jt)x=-(s+n)/(s-n),M=-2*s*n/(s-n);else if(o===ha)x=-s/(s-n),M=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,n,s,o=jt,c=!1){const l=this.elements,h=2/(t-e),f=2/(i-a),d=-(t+e)/(t-e),g=-(i+a)/(i-a);let x,M;if(c)x=1/(s-n),M=s/(s-n);else if(o===jt)x=-2/(s-n),M=-(s+n)/(s-n);else if(o===ha)x=-1/(s-n),M=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=x,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new I,Ft=new rt,ac=new I(0,0,0),nc=new I(1,1,1),gi=new I,Br=new I,At=new I,Ls=new rt,Ds=new Ar;class hi{constructor(e=0,t=0,i=0,a=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,n=a[0],s=a[4],o=a[8],c=a[1],l=a[5],h=a[9],f=a[2],d=a[6],g=a[10];switch(t){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,n),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,n)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Fe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,g),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ls.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ls,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ds.setFromEuler(this),this.setFromQuaternion(Ds,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class us{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sc=0;const Us=new I,ki=new Ar,ti=new rt,zr=new I,fr=new I,oc=new I,lc=new Ar,Ns=new I(1,0,0),Is=new I(0,1,0),Os=new I(0,0,1),Fs={type:"added"},cc={type:"removed"},Wi={type:"childadded",child:null},Ua={type:"childremoved",child:null};class Et extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new I,t=new hi,i=new Ar,a=new I(1,1,1);function n(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new rt},normalMatrix:{value:new Le}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(Ns,e)}rotateY(e){return this.rotateOnAxis(Is,e)}rotateZ(e){return this.rotateOnAxis(Os,e)}translateOnAxis(e,t){return Us.copy(e).applyQuaternion(this.quaternion),this.position.add(Us.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ns,e)}translateY(e){return this.translateOnAxis(Is,e)}translateZ(e){return this.translateOnAxis(Os,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zr.copy(e):zr.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(fr,zr,this.up):ti.lookAt(zr,fr,this.up),this.quaternion.setFromRotationMatrix(ti),a&&(ti.extractRotation(a.matrixWorld),ki.setFromRotationMatrix(ti),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fs),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cc),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fs),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,oc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,lc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];n(e.shapes,f)}else n(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(n(e.materials,this.material[c]));a.material=o}else a.material=n(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(n(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),h=s(e.images),f=s(e.shapes),d=s(e.skeletons),g=s(e.animations),x=s(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=a,i;function s(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Et.DEFAULT_UP=new I(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bt=new I,ii=new I,Na=new I,ri=new I,Xi=new I,ji=new I,Bs=new I,Ia=new I,Oa=new I,Fa=new I,Ba=new at,za=new at,Va=new at;class zt{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Bt.subVectors(e,t),a.cross(Bt);const n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(e,t,i,a,n){Bt.subVectors(a,t),ii.subVectors(i,t),Na.subVectors(e,t);const s=Bt.dot(Bt),o=Bt.dot(ii),c=Bt.dot(Na),l=ii.dot(ii),h=ii.dot(Na),f=s*l-o*o;if(f===0)return n.set(0,0,0),null;const d=1/f,g=(l*c-o*h)*d,x=(s*h-o*c)*d;return n.set(1-g-x,x,g)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,i,a,n,s,o,c){return this.getBarycoord(e,t,i,a,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(n,ri.x),c.addScaledVector(s,ri.y),c.addScaledVector(o,ri.z),c)}static getInterpolatedAttribute(e,t,i,a,n,s){return Ba.setScalar(0),za.setScalar(0),Va.setScalar(0),Ba.fromBufferAttribute(e,t),za.fromBufferAttribute(e,i),Va.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Ba,n.x),s.addScaledVector(za,n.y),s.addScaledVector(Va,n.z),s}static isFrontFacing(e,t,i,a){return Bt.subVectors(i,t),ii.subVectors(e,t),Bt.cross(ii).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Bt.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,n){return zt.getInterpolation(e,this.a,this.b,this.c,t,i,a,n)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,n=this.c;let s,o;Xi.subVectors(a,i),ji.subVectors(n,i),Ia.subVectors(e,i);const c=Xi.dot(Ia),l=ji.dot(Ia);if(c<=0&&l<=0)return t.copy(i);Oa.subVectors(e,a);const h=Xi.dot(Oa),f=ji.dot(Oa);if(h>=0&&f<=h)return t.copy(a);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return s=c/(c-h),t.copy(i).addScaledVector(Xi,s);Fa.subVectors(e,n);const g=Xi.dot(Fa),x=ji.dot(Fa);if(x>=0&&g<=x)return t.copy(n);const M=g*l-c*x;if(M<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(i).addScaledVector(ji,o);const p=h*x-g*f;if(p<=0&&f-h>=0&&g-x>=0)return Bs.subVectors(n,a),o=(f-h)/(f-h+(g-x)),t.copy(a).addScaledVector(Bs,o);const u=1/(p+M+d);return s=M*u,o=d*u,t.copy(i).addScaledVector(Xi,s).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function Ha(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Ve.workingColorSpace){if(e=Kl(e,1),t=Fe(t,0,1),i=Fe(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,s=2*i-n;this.r=Ha(s,n,e+1/3),this.g=Ha(s,n,e),this.b=Ha(s,n,e-1/3)}return Ve.colorSpaceToWorking(this,a),this}setStyle(e,t=Pt){function i(n){n!==void 0&&parseFloat(n)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=a[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(n,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const i=Vo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Ve.workingToColorSpace(_t.copy(this),e),Math.round(Fe(_t.r*255,0,255))*65536+Math.round(Fe(_t.g*255,0,255))*256+Math.round(Fe(_t.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(_t.copy(this),t);const i=_t.r,a=_t.g,n=_t.b,s=Math.max(i,a,n),o=Math.min(i,a,n);let c,l;const h=(o+s)/2;if(o===s)c=0,l=0;else{const f=s-o;switch(l=h<=.5?f/(s+o):f/(2-s-o),s){case i:c=(a-n)/f+(a<n?6:0);break;case a:c=(n-i)/f+2;break;case n:c=(i-a)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Pt){Ve.workingToColorSpace(_t.copy(this),e);const t=_t.r,i=_t.g,a=_t.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Vr);const i=ya(_i.h,Vr.h,t),a=ya(_i.s,Vr.s,t),n=ya(_i.l,Vr.l,t);return this.setHSL(i,a,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*a,this.g=n[1]*t+n[4]*i+n[7]*a,this.b=n[2]*t+n[5]*i+n[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new He;He.NAMES=Vo;let uc=0;class Rr extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=br(),this.name="",this.type="Material",this.blending=Ji,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tn,this.blendDst=rn,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ys,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tn&&(i.blendSrc=this.blendSrc),this.blendDst!==rn&&(i.blendDst=this.blendDst),this.blendEquation!==Li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ys&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(n){const s=[];for(const o in n){const c=n[o];delete c.metadata,s.push(c)}return s}if(t){const n=a(e.textures),s=a(e.images);n.length>0&&(i.textures=n),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let n=0;n!==a;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ho extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new I,Hr=new Xe;let hc=0;class Ut{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Es,this.updateRanges=[],this.gpuType=Xt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,n=this.itemSize;a<n;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ur(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),a=Tt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),a=Tt(a,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Es&&(e.usage=this.usage),e}}class Go extends Ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ko extends Ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class li extends Ut{constructor(e,t,i){super(new Float32Array(e),t,i)}}let dc=0;const Ct=new rt,Ga=new Et,Yi=new I,wt=new wr,pr=new wr,dt=new I;class Ht extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dc++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bo(e)?ko:Go)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new Le().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ct.makeRotationFromQuaternion(e),this.applyMatrix4(Ct),this}rotateX(e){return Ct.makeRotationX(e),this.applyMatrix4(Ct),this}rotateY(e){return Ct.makeRotationY(e),this.applyMatrix4(Ct),this}rotateZ(e){return Ct.makeRotationZ(e),this.applyMatrix4(Ct),this}translate(e,t,i){return Ct.makeTranslation(e,t,i),this.applyMatrix4(Ct),this}scale(e,t,i){return Ct.makeScale(e,t,i),this.applyMatrix4(Ct),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,n=e.length;a<n;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new li(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const n=e[a];t.setXYZ(a,n.x,n.y,n.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const n=t[i];wt.setFromBufferAttribute(n),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(wt.min,pr.min),wt.expandByPoint(dt),dt.addVectors(wt.max,pr.max),wt.expandByPoint(dt)):(wt.expandByPoint(pr.min),wt.expandByPoint(pr.max))}wt.getCenter(i);let a=0;for(let n=0,s=e.count;n<s;n++)dt.fromBufferAttribute(e,n),a=Math.max(a,i.distanceToSquared(dt));if(t)for(let n=0,s=t.length;n<s;n++){const o=t[n],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)dt.fromBufferAttribute(o,l),c&&(Yi.fromBufferAttribute(e,l),dt.add(Yi)),a=Math.max(a,i.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<i.count;F++)o[F]=new I,c[F]=new I;const l=new I,h=new I,f=new I,d=new Xe,g=new Xe,x=new Xe,M=new I,p=new I;function u(F,v,S){l.fromBufferAttribute(i,F),h.fromBufferAttribute(i,v),f.fromBufferAttribute(i,S),d.fromBufferAttribute(n,F),g.fromBufferAttribute(n,v),x.fromBufferAttribute(n,S),h.sub(l),f.sub(l),g.sub(d),x.sub(d);const D=1/(g.x*x.y-x.x*g.y);isFinite(D)&&(M.copy(h).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(D),p.copy(f).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar(D),o[F].add(M),o[v].add(M),o[S].add(M),c[F].add(p),c[v].add(p),c[S].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let F=0,v=y.length;F<v;++F){const S=y[F],D=S.start,z=S.count;for(let V=D,W=D+z;V<W;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const b=new I,E=new I,A=new I,R=new I;function C(F){A.fromBufferAttribute(a,F),R.copy(A);const v=o[F];b.copy(v),b.sub(A.multiplyScalar(A.dot(v))).normalize(),E.crossVectors(R,v);const S=E.dot(c[F])<0?-1:1;s.setXYZW(F,b.x,b.y,b.z,S)}for(let F=0,v=y.length;F<v;++F){const S=y[F],D=S.start,z=S.count;for(let V=D,W=D+z;V<W;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const a=new I,n=new I,s=new I,o=new I,c=new I,l=new I,h=new I,f=new I;if(e)for(let d=0,g=e.count;d<g;d+=3){const x=e.getX(d+0),M=e.getX(d+1),p=e.getX(d+2);a.fromBufferAttribute(t,x),n.fromBufferAttribute(t,M),s.fromBufferAttribute(t,p),h.subVectors(s,n),f.subVectors(a,n),h.cross(f),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,g=t.count;d<g;d+=3)a.fromBufferAttribute(t,d+0),n.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,n),f.subVectors(a,n),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h);let g=0,x=0;for(let M=0,p=c.length;M<p;M++){o.isInterleavedBufferAttribute?g=c[M]*o.data.stride+o.offset:g=c[M]*h;for(let u=0;u<h;u++)d[x++]=l[g++]}return new Ut(d,h,f)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,i=this.index.array,a=this.attributes;for(const o in a){const c=a[o],l=e(c,i);t.setAttribute(o,l)}const n=this.morphAttributes;for(const o in n){const c=[],l=n[o];for(let h=0,f=l.length;h<f;h++){const d=l[h],g=e(d,i);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const a={};let n=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const g=l[f];h.push(g.toJSON(e.data))}h.length>0&&(a[c]=h,n=!0)}n&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const l in a){const h=a[l];this.setAttribute(l,h.clone(t))}const n=e.morphAttributes;for(const l in n){const h=[],f=n[l];for(let d=0,g=f.length;d<g;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,h=s.length;l<h;l++){const f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zs=new rt,wi=new cs,Gr=new pa,Vs=new I,kr=new I,Wr=new I,Xr=new I,ka=new I,jr=new I,Hs=new I,Yr=new I;class di extends Et{constructor(e=new Ht,t=new Ho){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=i.length;a<n;a++){const s=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,n=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(n&&o){jr.set(0,0,0);for(let c=0,l=n.length;c<l;c++){const h=o[c],f=n[c];h!==0&&(ka.fromBufferAttribute(f,e),s?jr.addScaledVector(ka,h):jr.addScaledVector(ka.sub(t),h))}t.add(jr)}return t}raycast(e,t){const i=this.geometry,a=this.material,n=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(n),wi.copy(e.ray).recast(e.near),!(Gr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Gr,Vs)===null||wi.origin.distanceToSquared(Vs)>(e.far-e.near)**2))&&(zs.copy(n).invert(),wi.copy(e.ray).applyMatrix4(zs),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,i){let a;const n=this.geometry,s=this.material,o=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv1,f=n.attributes.normal,d=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,M=d.length;x<M;x++){const p=d[x],u=s[p.materialIndex],y=Math.max(p.start,g.start),b=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let E=y,A=b;E<A;E+=3){const R=o.getX(E),C=o.getX(E+1),F=o.getX(E+2);a=qr(this,u,e,i,l,h,f,R,C,F),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const x=Math.max(0,g.start),M=Math.min(o.count,g.start+g.count);for(let p=x,u=M;p<u;p+=3){const y=o.getX(p),b=o.getX(p+1),E=o.getX(p+2);a=qr(this,s,e,i,l,h,f,y,b,E),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let x=0,M=d.length;x<M;x++){const p=d[x],u=s[p.materialIndex],y=Math.max(p.start,g.start),b=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let E=y,A=b;E<A;E+=3){const R=E,C=E+1,F=E+2;a=qr(this,u,e,i,l,h,f,R,C,F),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const x=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let p=x,u=M;p<u;p+=3){const y=p,b=p+1,E=p+2;a=qr(this,s,e,i,l,h,f,y,b,E),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function fc(r,e,t,i,a,n,s,o){let c;if(e.side===yt?c=i.intersectTriangle(s,n,a,!0,o):c=i.intersectTriangle(a,n,s,e.side===Ti,o),c===null)return null;Yr.copy(o),Yr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Yr);return l<t.near||l>t.far?null:{distance:l,point:Yr.clone(),object:r}}function qr(r,e,t,i,a,n,s,o,c,l){r.getVertexPosition(o,kr),r.getVertexPosition(c,Wr),r.getVertexPosition(l,Xr);const h=fc(r,e,t,i,kr,Wr,Xr,Hs);if(h){const f=new I;zt.getBarycoord(Hs,kr,Wr,Xr,f),a&&(h.uv=zt.getInterpolatedAttribute(a,o,c,l,f,new Xe)),n&&(h.uv1=zt.getInterpolatedAttribute(n,o,c,l,f,new Xe)),s&&(h.normal=zt.getInterpolatedAttribute(s,o,c,l,f,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new I,materialIndex:0};zt.getNormal(kr,Wr,Xr,d.normal),h.face=d,h.barycoord=f}return h}class Cr extends Ht{constructor(e=1,t=1,i=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:n,depthSegments:s};const o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);const c=[],l=[],h=[],f=[];let d=0,g=0;x("z","y","x",-1,-1,i,t,e,s,n,0),x("z","y","x",1,-1,i,t,-e,s,n,1),x("x","z","y",1,1,e,i,t,a,s,2),x("x","z","y",1,-1,e,i,-t,a,s,3),x("x","y","z",1,-1,e,t,i,a,n,4),x("x","y","z",-1,-1,e,t,-i,a,n,5),this.setIndex(c),this.setAttribute("position",new li(l,3)),this.setAttribute("normal",new li(h,3)),this.setAttribute("uv",new li(f,2));function x(M,p,u,y,b,E,A,R,C,F,v){const S=E/C,D=A/F,z=E/2,V=A/2,W=R/2,Z=C+1,G=F+1;let H=0,J=0;const ie=new I;for(let ue=0;ue<G;ue++){const Me=ue*D-V;for(let Ne=0;Ne<Z;Ne++){const Ue=Ne*S-z;ie[M]=Ue*y,ie[p]=Me*b,ie[u]=W,l.push(ie.x,ie.y,ie.z),ie[M]=0,ie[p]=0,ie[u]=R>0?1:-1,h.push(ie.x,ie.y,ie.z),f.push(Ne/C),f.push(1-ue/F),H+=1}}for(let ue=0;ue<F;ue++)for(let Me=0;Me<C;Me++){const Ne=d+Me+Z*ue,Ue=d+Me+Z*(ue+1),Qe=d+(Me+1)+Z*(ue+1),$e=d+(Me+1)+Z*ue;c.push(Ne,Ue,$e),c.push(Ue,Qe,$e),J+=6}o.addGroup(g,J,v),g+=J,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ar(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const a=r[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function xt(r){const e={};for(let t=0;t<r.length;t++){const i=ar(r[t]);for(const a in i)e[a]=i[a]}return e}function pc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Wo(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const mc={clone:ar,merge:xt};var gc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_c=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kt extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gc,this.fragmentShader=_c,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=pc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const n=this.uniforms[a].value;n&&n.isTexture?t.uniforms[a]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[a]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[a]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[a]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[a]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[a]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[a]={type:"m4",value:n.toArray()}:t.uniforms[a]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xo extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=jt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new I,Gs=new Xe,ks=new Xe;class Lt extends Xo{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yn*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,Gs,ks),t.subVectors(ks,Gs)}setViewOffset(e,t,i,a,n,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ta*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,n=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;n+=s.offsetX*a/c,t-=s.offsetY*i/l,a*=s.width/c,i*=s.height/l}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,Zi=1;class vc extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Lt(qi,Zi,e,t);a.layers=this.layers,this.add(a);const n=new Lt(qi,Zi,e,t);n.layers=this.layers,this.add(n);const s=new Lt(qi,Zi,e,t);s.layers=this.layers,this.add(s);const o=new Lt(qi,Zi,e,t);o.layers=this.layers,this.add(o);const c=new Lt(qi,Zi,e,t);c.layers=this.layers,this.add(c);const l=new Lt(qi,Zi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,n,s,o,c]=t;for(const l of t)this.remove(l);if(e===jt)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,s,o,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,n),e.setRenderTarget(i,1,a),e.render(t,s),e.setRenderTarget(i,2,a),e.render(t,o),e.setRenderTarget(i,3,a),e.render(t,c),e.setRenderTarget(i,4,a),e.render(t,l),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,a),e.render(t,h),e.setRenderTarget(f,d,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class jo extends Mt{constructor(e=[],t=Ii,i,a,n,s,o,c,l,h){super(e,t,i,a,n,s,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yo extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new jo(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Cr(5,5,5),n=new Kt({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yt,blending:si});n.uniforms.tEquirect.value=t;const s=new di(a,n),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=vt),new vc(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,a);e.setRenderTarget(n)}}class Zr extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xc={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,n=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,i),u=this._getHandJoint(l,M);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),g=.02,x=.005;l.inputState.pinching&&d>g+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=g-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(c.matrix.fromArray(n.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,n.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(n.linearVelocity)):c.hasLinearVelocity=!1,n.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(n.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&n!==null&&(a=n),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xc)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=n!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Mc extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Sc extends Mt{constructor(e=null,t=1,i=1,a,n,s,o,c,l=pt,h=pt,f,d){super(null,s,o,c,l,h,a,n,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xa=new I,Tc=new I,yc=new Le;class xi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Xa.subVectors(i,t).cross(Tc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Xa),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/a;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yc.getNormalMatrix(e),a=this.coplanarPoint(Xa).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new pa,Ec=new Xe(.5,.5),Kr=new I;class qo{constructor(e=new xi,t=new xi,i=new xi,a=new xi,n=new xi,s=new xi){this.planes=[e,t,i,a,n,s]}set(e,t,i,a,n,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(n),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jt,i=!1){const a=this.planes,n=e.elements,s=n[0],o=n[1],c=n[2],l=n[3],h=n[4],f=n[5],d=n[6],g=n[7],x=n[8],M=n[9],p=n[10],u=n[11],y=n[12],b=n[13],E=n[14],A=n[15];if(a[0].setComponents(l-s,g-h,u-x,A-y).normalize(),a[1].setComponents(l+s,g+h,u+x,A+y).normalize(),a[2].setComponents(l+o,g+f,u+M,A+b).normalize(),a[3].setComponents(l-o,g-f,u-M,A-b).normalize(),i)a[4].setComponents(c,d,p,E).normalize(),a[5].setComponents(l-c,g-d,u-p,A-E).normalize();else if(a[4].setComponents(l-c,g-d,u-p,A-E).normalize(),t===jt)a[5].setComponents(l+c,g+d,u+p,A+E).normalize();else if(t===ha)a[5].setComponents(c,d,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);const t=Ec.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Kr.x=a.normal.x>0?e.max.x:e.min.x,Kr.y=a.normal.y>0?e.max.y:e.min.y,Kr.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zo extends Rr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ws=new rt,qn=new cs,Jr=new pa,$r=new I;class bc extends Et{constructor(e=new Ht,t=new Zo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,n=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(a),Jr.radius+=n,e.ray.intersectsSphere(Jr)===!1)return;Ws.copy(a).invert(),qn.copy(e.ray).applyMatrix4(Ws);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){const f=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let g=f,x=d;g<x;g++){const M=l.getX(g);$r.fromBufferAttribute(h,M),Xs($r,M,c,a,e,t,this)}}else{const f=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let g=f,x=d;g<x;g++)$r.fromBufferAttribute(h,g),Xs($r,g,c,a,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=i.length;a<n;a++){const s=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function Xs(r,e,t,i,a,n,s){const o=qn.distanceSqToPoint(r);if(o<t){const c=new I;qn.closestPointToPoint(r,c),c.applyMatrix4(i);const l=a.ray.origin.distanceTo(c);if(l<a.near||l>a.far)return;n.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class yr extends Mt{constructor(e,t,i=Zt,a,n,s,o=pt,c=pt,l,h=ui,f=1){if(h!==ui&&h!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,a,n,s,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ls(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ac extends yr{constructor(e,t=Zt,i=Ii,a,n,s=pt,o=pt,c,l=ui){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,a,n,s,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ko extends Mt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ma extends Ht{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const n=e/2,s=t/2,o=Math.floor(i),c=Math.floor(a),l=o+1,h=c+1,f=e/o,d=t/c,g=[],x=[],M=[],p=[];for(let u=0;u<h;u++){const y=u*d-s;for(let b=0;b<l;b++){const E=b*f-n;x.push(E,-y,0),M.push(0,0,1),p.push(b/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let y=0;y<o;y++){const b=y+l*u,E=y+l*(u+1),A=y+1+l*(u+1),R=y+1+l*u;g.push(b,E,R),g.push(E,A,R)}this.setIndex(g),this.setAttribute("position",new li(x,3)),this.setAttribute("normal",new li(M,3)),this.setAttribute("uv",new li(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.widthSegments,e.heightSegments)}}class wc extends Kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rc extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cc extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Jo extends Xo{constructor(e=-1,t=1,i=1,a=-1,n=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,n,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let n=i-e,s=i+e,o=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,s=n+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(n,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Pc extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const js=new rt;class Lc{constructor(e,t,i=0,a=1/0){this.ray=new cs(e,t),this.near=i,this.far=a,this.camera=null,this.layers=new us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return js.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(js),this}intersectObject(e,t=!0,i=[]){return Zn(e,this,i,t),i.sort(Ys),i}intersectObjects(e,t=!0,i=[]){for(let a=0,n=e.length;a<n;a++)Zn(e[a],this,i,t);return i.sort(Ys),i}}function Ys(r,e){return r.distance-e.distance}function Zn(r,e,t,i){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(a=!1),a===!0&&i===!0){const n=r.children;for(let s=0,o=n.length;s<o;s++)Zn(n[s],e,t,!0)}}function qs(r,e,t,i){const a=Dc(i);switch(t){case Io:return r*e;case Fo:return r*e/a.components*a.byteLength;case rs:return r*e/a.components*a.byteLength;case ir:return r*e*2/a.components*a.byteLength;case as:return r*e*2/a.components*a.byteLength;case Oo:return r*e*3/a.components*a.byteLength;case Vt:return r*e*4/a.components*a.byteLength;case ns:return r*e*4/a.components*a.byteLength;case ia:case ra:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case aa:case na:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gn:case vn:return Math.max(r,16)*Math.max(e,8)/4;case mn:case _n:return Math.max(r,8)*Math.max(e,8)/2;case xn:case Mn:case Tn:case yn:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Sn:case En:case bn:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case An:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wn:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Rn:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Cn:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Pn:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ln:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Dn:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Un:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Nn:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case In:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case On:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Fn:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Bn:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case zn:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Vn:case Hn:case Gn:return Math.ceil(r/4)*Math.ceil(e/4)*16;case kn:case Wn:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Xn:case jn:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dc(r){switch(r){case Dt:case Lo:return{byteLength:1,components:1};case Mr:case Do:case ci:return{byteLength:2,components:1};case ts:case is:return{byteLength:2,components:4};case Zt:case es:case Xt:return{byteLength:4,components:1};case Uo:case No:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qn}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qn);function $o(){let r=null,e=!1,t=null,i=null;function a(n,s){t(n,s),i=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){r=n}}}function Uc(r){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,f=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let g;if(l instanceof Float32Array)g=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=r.SHORT;else if(l instanceof Uint32Array)g=r.UNSIGNED_INT;else if(l instanceof Int32Array)g=r.INT;else if(l instanceof Int8Array)g=r.BYTE;else if(l instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const h=c.array,f=c.updateRanges;if(r.bindBuffer(l,o),f.length===0)r.bufferSubData(l,0,h);else{f.sort((g,x)=>g.start-x.start);let d=0;for(let g=1;g<f.length;g++){const x=f[d],M=f[g];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++d,f[d]=M)}f.length=d+1;for(let g=0,x=f.length;g<x;g++){const M=f[g];r.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:a,remove:n,update:s}}var Nc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ic=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Oc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$c=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ru=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,au=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,su=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ou=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",hu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,du=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_u=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Su=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Au=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ru=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Du=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Iu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ou=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ku=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ju=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ku=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$u=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,th=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ih=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ah=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ch=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ph=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_h=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Th=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ah=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ch=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ih=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$h=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ed=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,td=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,id=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ad=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,od=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ld=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ud=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:Nc,alphahash_pars_fragment:Ic,alphamap_fragment:Oc,alphamap_pars_fragment:Fc,alphatest_fragment:Bc,alphatest_pars_fragment:zc,aomap_fragment:Vc,aomap_pars_fragment:Hc,batching_pars_vertex:Gc,batching_vertex:kc,begin_vertex:Wc,beginnormal_vertex:Xc,bsdfs:jc,iridescence_fragment:Yc,bumpmap_pars_fragment:qc,clipping_planes_fragment:Zc,clipping_planes_pars_fragment:Kc,clipping_planes_pars_vertex:Jc,clipping_planes_vertex:$c,color_fragment:Qc,color_pars_fragment:eu,color_pars_vertex:tu,color_vertex:iu,common:ru,cube_uv_reflection_fragment:au,defaultnormal_vertex:nu,displacementmap_pars_vertex:su,displacementmap_vertex:ou,emissivemap_fragment:lu,emissivemap_pars_fragment:cu,colorspace_fragment:uu,colorspace_pars_fragment:hu,envmap_fragment:du,envmap_common_pars_fragment:fu,envmap_pars_fragment:pu,envmap_pars_vertex:mu,envmap_physical_pars_fragment:Au,envmap_vertex:gu,fog_vertex:_u,fog_pars_vertex:vu,fog_fragment:xu,fog_pars_fragment:Mu,gradientmap_pars_fragment:Su,lightmap_pars_fragment:Tu,lights_lambert_fragment:yu,lights_lambert_pars_fragment:Eu,lights_pars_begin:bu,lights_toon_fragment:wu,lights_toon_pars_fragment:Ru,lights_phong_fragment:Cu,lights_phong_pars_fragment:Pu,lights_physical_fragment:Lu,lights_physical_pars_fragment:Du,lights_fragment_begin:Uu,lights_fragment_maps:Nu,lights_fragment_end:Iu,logdepthbuf_fragment:Ou,logdepthbuf_pars_fragment:Fu,logdepthbuf_pars_vertex:Bu,logdepthbuf_vertex:zu,map_fragment:Vu,map_pars_fragment:Hu,map_particle_fragment:Gu,map_particle_pars_fragment:ku,metalnessmap_fragment:Wu,metalnessmap_pars_fragment:Xu,morphinstance_vertex:ju,morphcolor_vertex:Yu,morphnormal_vertex:qu,morphtarget_pars_vertex:Zu,morphtarget_vertex:Ku,normal_fragment_begin:Ju,normal_fragment_maps:$u,normal_pars_fragment:Qu,normal_pars_vertex:eh,normal_vertex:th,normalmap_pars_fragment:ih,clearcoat_normal_fragment_begin:rh,clearcoat_normal_fragment_maps:ah,clearcoat_pars_fragment:nh,iridescence_pars_fragment:sh,opaque_fragment:oh,packing:lh,premultiplied_alpha_fragment:ch,project_vertex:uh,dithering_fragment:hh,dithering_pars_fragment:dh,roughnessmap_fragment:fh,roughnessmap_pars_fragment:ph,shadowmap_pars_fragment:mh,shadowmap_pars_vertex:gh,shadowmap_vertex:_h,shadowmask_pars_fragment:vh,skinbase_vertex:xh,skinning_pars_vertex:Mh,skinning_vertex:Sh,skinnormal_vertex:Th,specularmap_fragment:yh,specularmap_pars_fragment:Eh,tonemapping_fragment:bh,tonemapping_pars_fragment:Ah,transmission_fragment:wh,transmission_pars_fragment:Rh,uv_pars_fragment:Ch,uv_pars_vertex:Ph,uv_vertex:Lh,worldpos_vertex:Dh,background_vert:Uh,background_frag:Nh,backgroundCube_vert:Ih,backgroundCube_frag:Oh,cube_vert:Fh,cube_frag:Bh,depth_vert:zh,depth_frag:Vh,distance_vert:Hh,distance_frag:Gh,equirect_vert:kh,equirect_frag:Wh,linedashed_vert:Xh,linedashed_frag:jh,meshbasic_vert:Yh,meshbasic_frag:qh,meshlambert_vert:Zh,meshlambert_frag:Kh,meshmatcap_vert:Jh,meshmatcap_frag:$h,meshnormal_vert:Qh,meshnormal_frag:ed,meshphong_vert:td,meshphong_frag:id,meshphysical_vert:rd,meshphysical_frag:ad,meshtoon_vert:nd,meshtoon_frag:sd,points_vert:od,points_frag:ld,shadow_vert:cd,shadow_frag:ud,sprite_vert:hd,sprite_frag:dd},oe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Wt={basic:{uniforms:xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new He(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:xt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:xt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new He(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:xt([oe.points,oe.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:xt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:xt([oe.common,oe.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:xt([oe.sprite,oe.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:xt([oe.common,oe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:xt([oe.lights,oe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Wt.physical={uniforms:xt([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Qr={r:0,b:0,g:0},Ci=new hi,fd=new rt;function pd(r,e,t,i,a,n,s){const o=new He(0);let c=n===!0?0:1,l,h,f=null,d=0,g=null;function x(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function M(b){let E=!1;const A=x(b);A===null?u(o,c):A&&A.isColor&&(u(A,1),E=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(r.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(b,E){const A=x(E);A&&(A.isCubeTexture||A.mapping===fa)?(h===void 0&&(h=new di(new Cr(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:ar(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Ci.copy(E.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fd.makeRotationFromEuler(Ci)),h.material.toneMapped=Ve.getTransfer(A.colorSpace)!==We,(f!==A||d!==A.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,f=A,d=A.version,g=r.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new di(new ma(2,2),new Kt({name:"BackgroundMaterial",uniforms:ar(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(A.colorSpace)!==We,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||g!==r.toneMapping)&&(l.material.needsUpdate=!0,f=A,d=A.version,g=r.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function u(b,E){b.getRGB(Qr,Wo(r)),i.buffers.color.setClear(Qr.r,Qr.g,Qr.b,E,s)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),c=E,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,u(o,c)},render:M,addToRenderList:p,dispose:y}}function md(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},a=d(null);let n=a,s=!1;function o(S,D,z,V,W){let Z=!1;const G=f(V,z,D);n!==G&&(n=G,l(n.object)),Z=g(S,V,z,W),Z&&x(S,V,z,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,E(S,D,z,V),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return r.createVertexArray()}function l(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function f(S,D,z){const V=z.wireframe===!0;let W=i[S.id];W===void 0&&(W={},i[S.id]=W);let Z=W[D.id];Z===void 0&&(Z={},W[D.id]=Z);let G=Z[V];return G===void 0&&(G=d(c()),Z[V]=G),G}function d(S){const D=[],z=[],V=[];for(let W=0;W<t;W++)D[W]=0,z[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:V,object:S,attributes:{},index:null}}function g(S,D,z,V){const W=n.attributes,Z=D.attributes;let G=0;const H=z.getAttributes();for(const J in H)if(H[J].location>=0){const ie=W[J];let ue=Z[J];if(ue===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ie===void 0||ie.attribute!==ue||ue&&ie.data!==ue.data)return!0;G++}return n.attributesNum!==G||n.index!==V}function x(S,D,z,V){const W={},Z=D.attributes;let G=0;const H=z.getAttributes();for(const J in H)if(H[J].location>=0){let ie=Z[J];ie===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor));const ue={};ue.attribute=ie,ie&&ie.data&&(ue.data=ie.data),W[J]=ue,G++}n.attributes=W,n.attributesNum=G,n.index=V}function M(){const S=n.newAttributes;for(let D=0,z=S.length;D<z;D++)S[D]=0}function p(S){u(S,0)}function u(S,D){const z=n.newAttributes,V=n.enabledAttributes,W=n.attributeDivisors;z[S]=1,V[S]===0&&(r.enableVertexAttribArray(S),V[S]=1),W[S]!==D&&(r.vertexAttribDivisor(S,D),W[S]=D)}function y(){const S=n.newAttributes,D=n.enabledAttributes;for(let z=0,V=D.length;z<V;z++)D[z]!==S[z]&&(r.disableVertexAttribArray(z),D[z]=0)}function b(S,D,z,V,W,Z,G){G===!0?r.vertexAttribIPointer(S,D,z,W,Z):r.vertexAttribPointer(S,D,z,V,W,Z)}function E(S,D,z,V){M();const W=V.attributes,Z=z.getAttributes(),G=D.defaultAttributeValues;for(const H in Z){const J=Z[H];if(J.location>=0){let ie=W[H];if(ie===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){const ue=ie.normalized,Me=ie.itemSize,Ne=e.get(ie);if(Ne===void 0)continue;const Ue=Ne.buffer,Qe=Ne.type,$e=Ne.bytesPerElement,Y=Qe===r.INT||Qe===r.UNSIGNED_INT||ie.gpuType===es;if(ie.isInterleavedBufferAttribute){const K=ie.data,pe=K.stride,Pe=ie.offset;if(K.isInstancedInterleavedBuffer){for(let me=0;me<J.locationSize;me++)u(J.location+me,K.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let me=0;me<J.locationSize;me++)p(J.location+me);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let me=0;me<J.locationSize;me++)b(J.location+me,Me/J.locationSize,Qe,ue,pe*$e,(Pe+Me/J.locationSize*me)*$e,Y)}else{if(ie.isInstancedBufferAttribute){for(let K=0;K<J.locationSize;K++)u(J.location+K,ie.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let K=0;K<J.locationSize;K++)p(J.location+K);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let K=0;K<J.locationSize;K++)b(J.location+K,Me/J.locationSize,Qe,ue,Me*$e,Me/J.locationSize*K*$e,Y)}}else if(G!==void 0){const ue=G[H];if(ue!==void 0)switch(ue.length){case 2:r.vertexAttrib2fv(J.location,ue);break;case 3:r.vertexAttrib3fv(J.location,ue);break;case 4:r.vertexAttrib4fv(J.location,ue);break;default:r.vertexAttrib1fv(J.location,ue)}}}}y()}function A(){F();for(const S in i){const D=i[S];for(const z in D){const V=D[z];for(const W in V)h(V[W].object),delete V[W];delete D[z]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const z in D){const V=D[z];for(const W in V)h(V[W].object),delete V[W];delete D[z]}delete i[S.id]}function C(S){for(const D in i){const z=i[D];if(z[S.id]===void 0)continue;const V=z[S.id];for(const W in V)h(V[W].object),delete V[W];delete z[S.id]}}function F(){v(),s=!0,n!==a&&(n=a,l(n.object))}function v(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:F,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:p,disableUnusedAttributes:y}}function gd(r,e,t){let i;function a(l){i=l}function n(l,h){r.drawArrays(i,l,h),t.update(h,i,1)}function s(l,h,f){f!==0&&(r.drawArraysInstanced(i,l,h,f),t.update(h,i,f))}function o(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];t.update(d,i,1)}function c(l,h,f,d){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<l.length;x++)s(l[x],h[x],d[x]);else{g.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,f);let x=0;for(let M=0;M<f;M++)x+=h[M]*d[M];t.update(x,i,1)}}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function _d(r,e,t,i){let a;function n(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(C){return!(C!==Vt&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const F=C===ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Dt&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xt&&!F)}function c(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ce("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),u=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=r.getParameter(r.MAX_SAMPLES),R=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:E,maxSamples:A,samples:R}}function vd(r){const e=this;let t=null,i=0,a=!1,n=!1;const s=new xi,o=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const g=f.length!==0||d||i!==0||a;return a=d,i=f.length,g},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,g){const x=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,u=r.get(f);if(!a||x===null||x.length===0||n&&!p)n?h(null):l();else{const y=n?0:i,b=y*4;let E=u.clippingState||null;c.value=E,E=h(x,d,b,g);for(let A=0;A!==b;++A)E[A]=t[A];u.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,g,x){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=c.value,x!==!0||p===null){const u=g+M*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<u)&&(p=new Float32Array(u));for(let b=0,E=g;b!==M;++b,E+=4)s.copy(f[b]).applyMatrix4(y,o),s.normal.toArray(p,E),p[E+3]=s.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function xd(r){let e=new WeakMap;function t(s,o){return o===hn?s.mapping=Ii:o===dn&&(s.mapping=tr),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===hn||o===dn)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new Yo(c.height);return l.fromEquirectangularTexture(r,s),e.set(s,l),s.addEventListener("dispose",a),t(l.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}const Si=4,Zs=[.125,.215,.35,.446,.526,.582],Di=20,Md=256,mr=new Jo,Ks=new He;let ja=null,Ya=0,qa=0,Za=!1;const Sd=new I;class Js{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,n={}){const{size:s=256,position:o=Sd}=n;ja=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,a,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ja,Ya,qa),this._renderer.xr.enabled=Za,e.scissorTest=!1,Ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ja=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:ci,format:Vt,colorSpace:rr,depthBuffer:!1},a=$s(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$s(e,t,i);const{_lodMax:n}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Td(n)),this._blurMaterial=Ed(n,e,t),this._ggxMaterial=yd(n,e,t)}return a}_compileMaterial(e){const t=new di(new Ht,e);this._renderer.compile(t,mr)}_sceneToCubeUV(e,t,i,a,n){const s=new Lt(90,1,t,i),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,f=l.toneMapping;l.getClearColor(Ks),l.toneMapping=Yt,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(a),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new Cr,new Ho({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1})));const d=this._backgroundBox,g=d.material;let x=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,x=!0):(g.color.copy(Ks),x=!0);for(let p=0;p<6;p++){const u=p%3;u===0?(s.up.set(0,o[p],0),s.position.set(n.x,n.y,n.z),s.lookAt(n.x+c[p],n.y,n.z)):u===1?(s.up.set(0,0,o[p]),s.position.set(n.x,n.y,n.z),s.lookAt(n.x,n.y+c[p],n.z)):(s.up.set(0,o[p],0),s.position.set(n.x,n.y,n.z),s.lookAt(n.x,n.y,n.z+c[p]));const y=this._cubeSize;Ki(a,u*y,p>2?y:0,y,y),l.setRenderTarget(a),x&&l.render(d,s),l.render(e,s)}l.toneMapping=f,l.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ii||e.mapping===tr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=eo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qs());const n=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=n;const o=n.uniforms;o.envMap.value=e;const c=this._cubeSize;Ki(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,mr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let n=1;n<a;n++)this._applyGGXFilter(e,n-1,n);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,n=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const c=s.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),d=0+l*1.25,g=f*d,{_lodMax:x}=this,M=this._sizeLods[i],p=3*M*(i>x-Si?i-x+Si:0),u=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=x-t,Ki(n,p,u,3*M,2*M),a.setRenderTarget(n),a.render(o,mr),c.envMap.value=n.texture,c.roughness.value=0,c.mipInt.value=x-i,Ki(e,p,u,3*M,2*M),a.setRenderTarget(e),a.render(o,mr)}_blur(e,t,i,a,n){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,a,"latitudinal",n),this._halfBlur(s,e,i,i,a,"longitudinal",n)}_halfBlur(e,t,i,a,n,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[a];f.material=l;const d=l.uniforms,g=this._sizeLods[i]-1,x=isFinite(n)?Math.PI/(2*g):2*Math.PI/(2*Di-1),M=n/x,p=isFinite(n)?1+Math.floor(h*M):Di;p>Di&&Ce(`sigmaRadians, ${n}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Di}`);const u=[];let y=0;for(let C=0;C<Di;++C){const F=C/M,v=Math.exp(-F*F/2);u.push(v),C===0?y+=v:C<p&&(y+=2*v)}for(let C=0;C<u.length;C++)u[C]=u[C]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=x,d.mipInt.value=b-i;const E=this._sizeLods[a],A=3*E*(a>b-Si?a-b+Si:0),R=4*(this._cubeSize-E);Ki(t,A,R,3*E,2*E),c.setRenderTarget(t),c.render(f,mr)}}function Td(r){const e=[],t=[],i=[];let a=r;const n=r-Si+1+Zs.length;for(let s=0;s<n;s++){const o=Math.pow(2,a);e.push(o);let c=1/o;s>r-Si?c=Zs[s-r+Si-1]:s===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,x=6,M=3,p=2,u=1,y=new Float32Array(M*x*g),b=new Float32Array(p*x*g),E=new Float32Array(u*x*g);for(let R=0;R<g;R++){const C=R%3*2/3-1,F=R>2?0:-1,v=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];y.set(v,M*x*R),b.set(d,p*x*R);const S=[R,R,R,R,R,R];E.set(S,u*x*R)}const A=new Ht;A.setAttribute("position",new Ut(y,M)),A.setAttribute("uv",new Ut(b,p)),A.setAttribute("faceIndex",new Ut(E,u)),i.push(new di(A,null)),a>Si&&a--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function $s(r,e,t){const i=new qt(r,e,t);return i.texture.mapping=fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ki(r,e,t,i,a){r.viewport.set(e,t,i,a),r.scissor.set(e,t,i,a)}function yd(r,e,t){return new Kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Md,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ga(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Ed(r,e,t){const i=new Float32Array(Di),a=new I(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Qs(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function eo(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function ga(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bd(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===hn||c===dn,h=c===Ii||c===tr;if(l||h){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Js(r)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const g=o.image;return l&&g&&g.height>0||h&&g&&a(g)?(t===null&&(t=new Js(r)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",n),f.texture):null}}}return o}function a(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function n(o){const c=o.target;c.removeEventListener("dispose",n);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Ad(r){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=r.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Tr("WebGLRenderer: "+i+" extension not supported."),a}}}function wd(r,e,t,i){const a={},n=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",s),delete a[d.id];const g=n.get(d);g&&(e.remove(g),n.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER)}function l(f){const d=[],g=f.index,x=f.attributes.position;let M=0;if(g!==null){const y=g.array;M=g.version;for(let b=0,E=y.length;b<E;b+=3){const A=y[b+0],R=y[b+1],C=y[b+2];d.push(A,R,R,C,C,A)}}else if(x!==void 0){const y=x.array;M=x.version;for(let b=0,E=y.length/3-1;b<E;b+=3){const A=b+0,R=b+1,C=b+2;d.push(A,R,R,C,C,A)}}else return;const p=new(Bo(d)?ko:Go)(d,1);p.version=M;const u=n.get(f);u&&e.remove(u),n.set(f,p)}function h(f){const d=n.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&l(f)}else l(f);return n.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Rd(r,e,t){let i;function a(d){i=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function c(d,g){r.drawElements(i,g,n,d*s),t.update(g,i,1)}function l(d,g,x){x!==0&&(r.drawElementsInstanced(i,g,n,d*s,x),t.update(g,i,x))}function h(d,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,n,d,0,x);let M=0;for(let p=0;p<x;p++)M+=g[p];t.update(M,i,1)}function f(d,g,x,M){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)l(d[u]/s,g[u],M[u]);else{p.multiDrawElementsInstancedWEBGL(i,g,0,n,d,0,M,0,x);let u=0;for(let y=0;y<x;y++)u+=g[y]*M[y];t.update(u,i,1)}}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Cd(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,s,o){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=o*(n/3);break;case r.LINES:t.lines+=o*(n/2);break;case r.LINE_STRIP:t.lines+=o*(n-1);break;case r.LINE_LOOP:t.lines+=o*n;break;case r.POINTS:t.points+=o*n;break;default:ze("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Pd(r,e,t){const i=new WeakMap,a=new at;function n(s,o,c){const l=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let g=function(){F.dispose(),i.delete(o),o.removeEventListener("dispose",g)};d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;x===!0&&(E=1),M===!0&&(E=2),p===!0&&(E=3);let A=o.attributes.position.count*E,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*R*4*f),F=new zo(C,A,R,f);F.type=Xt,F.needsUpdate=!0;const v=E*4;for(let S=0;S<f;S++){const D=u[S],z=y[S],V=b[S],W=A*R*4*S;for(let Z=0;Z<D.count;Z++){const G=Z*v;x===!0&&(a.fromBufferAttribute(D,Z),C[W+G+0]=a.x,C[W+G+1]=a.y,C[W+G+2]=a.z,C[W+G+3]=0),M===!0&&(a.fromBufferAttribute(z,Z),C[W+G+4]=a.x,C[W+G+5]=a.y,C[W+G+6]=a.z,C[W+G+7]=0),p===!0&&(a.fromBufferAttribute(V,Z),C[W+G+8]=a.x,C[W+G+9]=a.y,C[W+G+10]=a.z,C[W+G+11]=V.itemSize===4?a.w:1)}}d={count:f,texture:F,size:new Xe(A,R)},i.set(o,d),o.addEventListener("dispose",g)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let g=0;for(let M=0;M<l.length;M++)g+=l[M];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",x),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:n}}function Ld(r,e,t,i){let a=new WeakMap;function n(c){const l=i.render.frame,h=c.geometry,f=e.get(c,h);if(a.get(f)!==l&&(e.update(f),a.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),a.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),a.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;a.get(d)!==l&&(d.update(),a.set(d,l))}return f}function s(){a=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:n,dispose:s}}const Dd={[yo]:"LINEAR_TONE_MAPPING",[Eo]:"REINHARD_TONE_MAPPING",[bo]:"CINEON_TONE_MAPPING",[Ao]:"ACES_FILMIC_TONE_MAPPING",[Ro]:"AGX_TONE_MAPPING",[Co]:"NEUTRAL_TONE_MAPPING",[wo]:"CUSTOM_TONE_MAPPING"};function Ud(r,e,t,i,a){const n=new qt(e,t,{type:r,depthBuffer:i,stencilBuffer:a}),s=new qt(e,t,{type:ci,depthBuffer:!1,stencilBuffer:!1}),o=new Ht;o.setAttribute("position",new li([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new li([0,2,0,0,2,0],2));const c=new wc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new di(o,c),h=new Jo(-1,1,1,-1,0,1);let f=null,d=null,g=!1,x,M=null,p=[],u=!1;this.setSize=function(y,b){n.setSize(y,b),s.setSize(y,b);for(let E=0;E<p.length;E++){const A=p[E];A.setSize&&A.setSize(y,b)}},this.setEffects=function(y){p=y,u=p.length>0&&p[0].isRenderPass===!0;const b=n.width,E=n.height;for(let A=0;A<p.length;A++){const R=p[A];R.setSize&&R.setSize(b,E)}},this.begin=function(y,b){if(g||y.toneMapping===Yt&&p.length===0)return!1;if(M=b,b!==null){const E=b.width,A=b.height;(n.width!==E||n.height!==A)&&this.setSize(E,A)}return u===!1&&y.setRenderTarget(n),x=y.toneMapping,y.toneMapping=Yt,!0},this.hasRenderPass=function(){return u},this.end=function(y,b){y.toneMapping=x,g=!0;let E=n,A=s;for(let R=0;R<p.length;R++){const C=p[R];if(C.enabled!==!1&&(C.render(y,A,E,b),C.needsSwap!==!1)){const F=E;E=A,A=F}}if(f!==y.outputColorSpace||d!==y.toneMapping){f=y.outputColorSpace,d=y.toneMapping,c.defines={},Ve.getTransfer(f)===We&&(c.defines.SRGB_TRANSFER="");const R=Dd[d];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(M),y.render(l,h),M=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){n.dispose(),s.dispose(),o.dispose(),c.dispose()}}const Qo=new Mt,Kn=new yr(1,1),el=new zo,tl=new ic,il=new jo,to=[],io=[],ro=new Float32Array(16),ao=new Float32Array(9),no=new Float32Array(4);function sr(r,e,t){const i=r[0];if(i<=0||i>0)return r;const a=e*t;let n=to[a];if(n===void 0&&(n=new Float32Array(a),to[a]=n),e!==0){i.toArray(n,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(n,o)}return n}function ut(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ht(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function _a(r,e){let t=io[e];t===void 0&&(t=new Int32Array(e),io[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Nd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Id(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2fv(this.addr,e),ht(t,e)}}function Od(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;r.uniform3fv(this.addr,e),ht(t,e)}}function Fd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4fv(this.addr,e),ht(t,e)}}function Bd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;no.set(i),r.uniformMatrix2fv(this.addr,!1,no),ht(t,i)}}function zd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;ao.set(i),r.uniformMatrix3fv(this.addr,!1,ao),ht(t,i)}}function Vd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;ro.set(i),r.uniformMatrix4fv(this.addr,!1,ro),ht(t,i)}}function Hd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Gd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2iv(this.addr,e),ht(t,e)}}function kd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;r.uniform3iv(this.addr,e),ht(t,e)}}function Wd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4iv(this.addr,e),ht(t,e)}}function Xd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function jd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;r.uniform2uiv(this.addr,e),ht(t,e)}}function Yd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;r.uniform3uiv(this.addr,e),ht(t,e)}}function qd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;r.uniform4uiv(this.addr,e),ht(t,e)}}function Zd(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a);let n;this.type===r.SAMPLER_2D_SHADOW?(Kn.compareFunction=t.isReversedDepthBuffer()?os:ss,n=Kn):n=Qo,t.setTexture2D(e||n,a)}function Kd(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||tl,a)}function Jd(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||il,a)}function $d(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||el,a)}function Qd(r){switch(r){case 5126:return Nd;case 35664:return Id;case 35665:return Od;case 35666:return Fd;case 35674:return Bd;case 35675:return zd;case 35676:return Vd;case 5124:case 35670:return Hd;case 35667:case 35671:return Gd;case 35668:case 35672:return kd;case 35669:case 35673:return Wd;case 5125:return Xd;case 36294:return jd;case 36295:return Yd;case 36296:return qd;case 35678:case 36198:case 36298:case 36306:case 35682:return Zd;case 35679:case 36299:case 36307:return Kd;case 35680:case 36300:case 36308:case 36293:return Jd;case 36289:case 36303:case 36311:case 36292:return $d}}function ef(r,e){r.uniform1fv(this.addr,e)}function tf(r,e){const t=sr(e,this.size,2);r.uniform2fv(this.addr,t)}function rf(r,e){const t=sr(e,this.size,3);r.uniform3fv(this.addr,t)}function af(r,e){const t=sr(e,this.size,4);r.uniform4fv(this.addr,t)}function nf(r,e){const t=sr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function sf(r,e){const t=sr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function of(r,e){const t=sr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function lf(r,e){r.uniform1iv(this.addr,e)}function cf(r,e){r.uniform2iv(this.addr,e)}function uf(r,e){r.uniform3iv(this.addr,e)}function hf(r,e){r.uniform4iv(this.addr,e)}function df(r,e){r.uniform1uiv(this.addr,e)}function ff(r,e){r.uniform2uiv(this.addr,e)}function pf(r,e){r.uniform3uiv(this.addr,e)}function mf(r,e){r.uniform4uiv(this.addr,e)}function gf(r,e,t){const i=this.cache,a=e.length,n=_a(t,a);ut(i,n)||(r.uniform1iv(this.addr,n),ht(i,n));let s;this.type===r.SAMPLER_2D_SHADOW?s=Kn:s=Qo;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,n[o])}function _f(r,e,t){const i=this.cache,a=e.length,n=_a(t,a);ut(i,n)||(r.uniform1iv(this.addr,n),ht(i,n));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||tl,n[s])}function vf(r,e,t){const i=this.cache,a=e.length,n=_a(t,a);ut(i,n)||(r.uniform1iv(this.addr,n),ht(i,n));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||il,n[s])}function xf(r,e,t){const i=this.cache,a=e.length,n=_a(t,a);ut(i,n)||(r.uniform1iv(this.addr,n),ht(i,n));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||el,n[s])}function Mf(r){switch(r){case 5126:return ef;case 35664:return tf;case 35665:return rf;case 35666:return af;case 35674:return nf;case 35675:return sf;case 35676:return of;case 5124:case 35670:return lf;case 35667:case 35671:return cf;case 35668:case 35672:return uf;case 35669:case 35673:return hf;case 5125:return df;case 36294:return ff;case 36295:return pf;case 36296:return mf;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return _f;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return xf}}class Sf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Qd(t.type)}}class Tf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mf(t.type)}}class yf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let n=0,s=a.length;n!==s;++n){const o=a[n];o.setValue(e,t[o.id],i)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function so(r,e){r.seq.push(e),r.map[e.id]=e}function Ef(r,e,t){const i=r.name,a=i.length;for(Ka.lastIndex=0;;){const n=Ka.exec(i),s=Ka.lastIndex;let o=n[1];const c=n[2]==="]",l=n[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===a){so(t,l===void 0?new Sf(o,r,e):new Tf(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new yf(o),so(t,h)),t=h}}}class sa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),c=e.getUniformLocation(t,o.name);Ef(o,c,this)}const a=[],n=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):n.push(s);a.length>0&&(this.seq=a.concat(n))}setValue(e,t,i,a){const n=this.map[t];n!==void 0&&n.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let n=0,s=t.length;n!==s;++n){const o=t[n],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,n=e.length;a!==n;++a){const s=e[a];s.id in t&&i.push(s)}return i}}function oo(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const bf=37297;let Af=0;function wf(r,e){const t=r.split(`
`),i=[],a=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let s=a;s<n;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const lo=new Le;function Rf(r){Ve._getMatrix(lo,Ve.workingColorSpace,r);const e=`mat3( ${lo.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(r)){case ua:return[e,"LinearTransferOETF"];case We:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function co(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),a=(r.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const n=/ERROR: 0:(\d+)/.exec(a);if(n){const s=parseInt(n[1]);return t.toUpperCase()+`

`+a+`

`+wf(r.getShaderSource(e),s)}else return a}function Cf(r,e){const t=Rf(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Pf={[yo]:"Linear",[Eo]:"Reinhard",[bo]:"Cineon",[Ao]:"ACESFilmic",[Ro]:"AgX",[Co]:"Neutral",[wo]:"Custom"};function Lf(r,e){const t=Pf[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ea=new I;function Df(){Ve.getLuminanceCoefficients(ea);const r=ea.x.toFixed(4),e=ea.y.toFixed(4),t=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uf(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function Nf(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function If(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const n=r.getActiveAttrib(e,a),s=n.name;let o=1;n.type===r.FLOAT_MAT2&&(o=2),n.type===r.FLOAT_MAT3&&(o=3),n.type===r.FLOAT_MAT4&&(o=4),t[s]={type:n.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function xr(r){return r!==""}function uo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ho(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Of=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jn(r){return r.replace(Of,Bf)}const Ff=new Map;function Bf(r,e){let t=De[e];if(t===void 0){const i=Ff.get(e);if(i!==void 0)t=De[i],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jn(t)}const zf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fo(r){return r.replace(zf,Vf)}function Vf(r,e,t,i){let a="";for(let n=parseInt(e);n<parseInt(t);n++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function po(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Hf={[ta]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function Gf(r){return Hf[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kf={[Ii]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[fa]:"ENVMAP_TYPE_CUBE_UV"};function Wf(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":kf[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Xf={[tr]:"ENVMAP_MODE_REFRACTION"};function jf(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Xf[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Yf={[To]:"ENVMAP_BLENDING_MULTIPLY",[Ol]:"ENVMAP_BLENDING_MIX",[Fl]:"ENVMAP_BLENDING_ADD"};function qf(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Yf[r.combine]||"ENVMAP_BLENDING_NONE"}function Zf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Kf(r,e,t,i){const a=r.getContext(),n=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=Gf(t),l=Wf(t),h=jf(t),f=qf(t),d=Zf(t),g=Uf(t),x=Nf(n),M=a.createProgram();let p,u,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(xr).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(xr).join(`
`),u.length>0&&(u+=`
`)):(p=[po(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),u=[po(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yt?"#define TONE_MAPPING":"",t.toneMapping!==Yt?De.tonemapping_pars_fragment:"",t.toneMapping!==Yt?Lf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Cf("linearToOutputTexel",t.outputColorSpace),Df(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),s=Jn(s),s=uo(s,t),s=ho(s,t),o=Jn(o),o=uo(o,t),o=ho(o,t),s=fo(s),o=fo(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===bs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=y+p+s,E=y+u+o,A=oo(a,a.VERTEX_SHADER,b),R=oo(a,a.FRAGMENT_SHADER,E);a.attachShader(M,A),a.attachShader(M,R),t.index0AttributeName!==void 0?a.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function C(D){if(r.debug.checkShaderErrors){const z=a.getProgramInfoLog(M)||"",V=a.getShaderInfoLog(A)||"",W=a.getShaderInfoLog(R)||"",Z=z.trim(),G=V.trim(),H=W.trim();let J=!0,ie=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,M,A,R);else{const ue=co(a,A,"vertex"),Me=co(a,R,"fragment");ze("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Z+`
`+ue+`
`+Me)}else Z!==""?Ce("WebGLProgram: Program Info Log:",Z):(G===""||H==="")&&(ie=!1);ie&&(D.diagnostics={runnable:J,programLog:Z,vertexShader:{log:G,prefix:p},fragmentShader:{log:H,prefix:u}})}a.deleteShader(A),a.deleteShader(R),F=new sa(a,M),v=If(a,M)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let v;this.getAttributes=function(){return v===void 0&&C(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(M,bf)),S},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Af++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=R,this}let Jf=0;class $f{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),n=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Qf(e),t.set(e,i)),i}}class Qf{constructor(e){this.id=Jf++,this.code=e,this.usedTimes=0}}function ep(r,e,t,i,a,n,s){const o=new us,c=new $f,l=new Set,h=[],f=new Map,d=a.logarithmicDepthBuffer;let g=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,S,D,z,V){const W=z.fog,Z=V.geometry,G=v.isMeshStandardMaterial?z.environment:null,H=(v.isMeshStandardMaterial?t:e).get(v.envMap||G),J=H&&H.mapping===fa?H.image.height:null,ie=x[v.type];v.precision!==null&&(g=a.getMaxPrecision(v.precision),g!==v.precision&&Ce("WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const ue=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Me=ue!==void 0?ue.length:0;let Ne=0;Z.morphAttributes.position!==void 0&&(Ne=1),Z.morphAttributes.normal!==void 0&&(Ne=2),Z.morphAttributes.color!==void 0&&(Ne=3);let Ue,Qe,$e,Y;if(ie){const ke=Wt[ie];Ue=ke.vertexShader,Qe=ke.fragmentShader}else Ue=v.vertexShader,Qe=v.fragmentShader,c.update(v),$e=c.getVertexShaderID(v),Y=c.getFragmentShaderID(v);const K=r.getRenderTarget(),pe=r.state.buffers.depth.getReversed(),Pe=V.isInstancedMesh===!0,me=V.isBatchedMesh===!0,we=!!v.map,je=!!v.matcap,Ye=!!H,Ie=!!v.aoMap,lt=!!v.lightMap,nt=!!v.bumpMap,mt=!!v.normalMap,w=!!v.displacementMap,st=!!v.emissiveMap,Ge=!!v.metalnessMap,qe=!!v.roughnessMap,ge=v.anisotropy>0,T=v.clearcoat>0,m=v.dispersion>0,L=v.iridescence>0,X=v.sheen>0,j=v.transmission>0,k=ge&&!!v.anisotropyMap,Te=T&&!!v.clearcoatMap,ae=T&&!!v.clearcoatNormalMap,_e=T&&!!v.clearcoatRoughnessMap,ye=L&&!!v.iridescenceMap,$=L&&!!v.iridescenceThicknessMap,se=X&&!!v.sheenColorMap,Se=X&&!!v.sheenRoughnessMap,ve=!!v.specularMap,ne=!!v.specularColorMap,Oe=!!v.specularIntensityMap,P=j&&!!v.transmissionMap,ce=j&&!!v.thicknessMap,ee=!!v.gradientMap,de=!!v.alphaMap,Q=v.alphaTest>0,q=!!v.alphaHash,re=!!v.extensions;let Ee=Yt;v.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ee=r.toneMapping);const ct={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:Ue,fragmentShader:Qe,defines:v.defines,customVertexShaderID:$e,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:me,batchingColor:me&&V._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&V.instanceColor!==null,instancingMorph:Pe&&V.morphTexture!==null,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:rr,alphaToCoverage:!!v.alphaToCoverage,map:we,matcap:je,envMap:Ye,envMapMode:Ye&&H.mapping,envMapCubeUVHeight:J,aoMap:Ie,lightMap:lt,bumpMap:nt,normalMap:mt,displacementMap:w,emissiveMap:st,normalMapObjectSpace:mt&&v.normalMapType===Hl,normalMapTangentSpace:mt&&v.normalMapType===Vl,metalnessMap:Ge,roughnessMap:qe,anisotropy:ge,anisotropyMap:k,clearcoat:T,clearcoatMap:Te,clearcoatNormalMap:ae,clearcoatRoughnessMap:_e,dispersion:m,iridescence:L,iridescenceMap:ye,iridescenceThicknessMap:$,sheen:X,sheenColorMap:se,sheenRoughnessMap:Se,specularMap:ve,specularColorMap:ne,specularIntensityMap:Oe,transmission:j,transmissionMap:P,thicknessMap:ce,gradientMap:ee,opaque:v.transparent===!1&&v.blending===Ji&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:Q,alphaHash:q,combine:v.combine,mapUv:we&&M(v.map.channel),aoMapUv:Ie&&M(v.aoMap.channel),lightMapUv:lt&&M(v.lightMap.channel),bumpMapUv:nt&&M(v.bumpMap.channel),normalMapUv:mt&&M(v.normalMap.channel),displacementMapUv:w&&M(v.displacementMap.channel),emissiveMapUv:st&&M(v.emissiveMap.channel),metalnessMapUv:Ge&&M(v.metalnessMap.channel),roughnessMapUv:qe&&M(v.roughnessMap.channel),anisotropyMapUv:k&&M(v.anisotropyMap.channel),clearcoatMapUv:Te&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:$&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:se&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:Se&&M(v.sheenRoughnessMap.channel),specularMapUv:ve&&M(v.specularMap.channel),specularColorMapUv:ne&&M(v.specularColorMap.channel),specularIntensityMapUv:Oe&&M(v.specularIntensityMap.channel),transmissionMapUv:P&&M(v.transmissionMap.channel),thicknessMapUv:ce&&M(v.thicknessMap.channel),alphaMapUv:de&&M(v.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(mt||ge),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Z.attributes.uv&&(we||de),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:V.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ee,decodeVideoTexture:we&&v.map.isVideoTexture===!0&&Ve.getTransfer(v.map.colorSpace)===We,decodeVideoTextureEmissive:st&&v.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(v.emissiveMap.colorSpace)===We,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ai,flipSided:v.side===yt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:re&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&v.extensions.multiDraw===!0||me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function u(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)S.push(D),S.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(y(S,v),b(S,v),S.push(r.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function y(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function b(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function E(v){const S=x[v.type];let D;if(S){const z=Wt[S];D=mc.clone(z.uniforms)}else D=v.uniforms;return D}function A(v,S){let D=f.get(S);return D!==void 0?++D.usedTimes:(D=new Kf(r,S,v,n),h.push(D),f.set(S,D)),D}function R(v){if(--v.usedTimes===0){const S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),f.delete(v.cacheKey),v.destroy()}}function C(v){c.remove(v)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:F}}function tp(){let r=new WeakMap;function e(s){return r.has(s)}function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function i(s){r.delete(s)}function a(s,o,c){r.get(s)[o]=c}function n(){r=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:n}}function ip(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function mo(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function go(){const r=[];let e=0;const t=[],i=[],a=[];function n(){e=0,t.length=0,i.length=0,a.length=0}function s(f,d,g,x,M,p){let u=r[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:g,groupOrder:x,renderOrder:f.renderOrder,z:M,group:p},r[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=g,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=M,u.group=p),e++,u}function o(f,d,g,x,M,p){const u=s(f,d,g,x,M,p);g.transmission>0?i.push(u):g.transparent===!0?a.push(u):t.push(u)}function c(f,d,g,x,M,p){const u=s(f,d,g,x,M,p);g.transmission>0?i.unshift(u):g.transparent===!0?a.unshift(u):t.unshift(u)}function l(f,d){t.length>1&&t.sort(f||ip),i.length>1&&i.sort(d||mo),a.length>1&&a.sort(d||mo)}function h(){for(let f=e,d=r.length;f<d;f++){const g=r[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:a,init:n,push:o,unshift:c,finish:h,sort:l}}function rp(){let r=new WeakMap;function e(i,a){const n=r.get(i);let s;return n===void 0?(s=new go,r.set(i,[s])):a>=n.length?(s=new go,n.push(s)):s=n[a],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function ap(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new He};break;case"SpotLight":t={position:new I,direction:new I,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function np(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let sp=0;function op(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lp(r){const e=new ap,t=np(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const a=new I,n=new rt,s=new rt;function o(l){let h=0,f=0,d=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let g=0,x=0,M=0,p=0,u=0,y=0,b=0,E=0,A=0,R=0,C=0;l.sort(op);for(let v=0,S=l.length;v<S;v++){const D=l[v],z=D.color,V=D.intensity,W=D.distance;let Z=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ir?Z=D.shadow.map.texture:Z=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*V,f+=z.g*V,d+=z.b*V;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],V);C++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const H=D.shadow,J=t.get(D);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=D.shadow.matrix,y++}i.directional[g]=G,g++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(z).multiplyScalar(V),G.distance=W,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[M]=G;const H=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,H.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[M]=H.matrix,D.castShadow){const J=t.get(D);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,i.spotShadow[M]=J,i.spotShadowMap[M]=Z,E++}M++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(z).multiplyScalar(V),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=G,p++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const H=D.shadow,J=t.get(D);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,i.pointShadow[x]=J,i.pointShadowMap[x]=Z,i.pointShadowMatrix[x]=D.shadow.matrix,b++}i.point[x]=G,x++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(V),G.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[u]=G,u++}}p>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==g||F.pointLength!==x||F.spotLength!==M||F.rectAreaLength!==p||F.hemiLength!==u||F.numDirectionalShadows!==y||F.numPointShadows!==b||F.numSpotShadows!==E||F.numSpotMaps!==A||F.numLightProbes!==C)&&(i.directional.length=g,i.spot.length=M,i.rectArea.length=p,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,F.directionalLength=g,F.pointLength=x,F.spotLength=M,F.rectAreaLength=p,F.hemiLength=u,F.numDirectionalShadows=y,F.numPointShadows=b,F.numSpotShadows=E,F.numSpotMaps=A,F.numLightProbes=C,i.version=sp++)}function c(l,h){let f=0,d=0,g=0,x=0,M=0;const p=h.matrixWorldInverse;for(let u=0,y=l.length;u<y;u++){const b=l[u];if(b.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(p),f++}else if(b.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(p),g++}else if(b.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),s.identity(),n.copy(b.matrixWorld),n.premultiply(p),s.extractRotation(n),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),x++}else if(b.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),M++}}}return{setup:o,setupView:c,state:i}}function _o(r){const e=new lp(r),t=[],i=[];function a(h){l.camera=h,t.length=0,i.length=0}function n(h){t.push(h)}function s(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:l,setupLights:o,setupLightsView:c,pushLight:n,pushShadow:s}}function cp(r){let e=new WeakMap;function t(a,n=0){const s=e.get(a);let o;return s===void 0?(o=new _o(r),e.set(a,[o])):n>=s.length?(o=new _o(r),s.push(o)):o=s[n],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const up=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dp=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],fp=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],vo=new rt,gr=new I,Ja=new I;function pp(r,e,t){let i=new qo;const a=new Xe,n=new Xe,s=new at,o=new Rc,c=new Cc,l={},h=t.maxTextureSize,f={[Ti]:yt,[yt]:Ti,[ai]:ai},d=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:up,fragmentShader:hp}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const x=new Ht;x.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new di(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let u=this.type;this.render=function(R,C,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;R.type===_l&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=ta);const v=r.getRenderTarget(),S=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),z=r.state;z.setBlending(si),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=u!==this.type;V&&C.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(Z=>Z.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,Z=R.length;W<Z;W++){const G=R[W],H=G.shadow;if(H===void 0){Ce("WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const J=H.getFrameExtents();if(a.multiply(J),n.copy(H.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(n.x=Math.floor(h/J.x),a.x=n.x*J.x,H.mapSize.x=n.x),a.y>h&&(n.y=Math.floor(h/J.y),a.y=n.y*J.y,H.mapSize.y=n.y)),H.map===null||V===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===vr){if(G.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new qt(a.x,a.y,{format:ir,type:ci,minFilter:vt,magFilter:vt,generateMipmaps:!1}),H.map.texture.name=G.name+".shadowMap",H.map.depthTexture=new yr(a.x,a.y,Xt),H.map.depthTexture.name=G.name+".shadowMapDepth",H.map.depthTexture.format=ui,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=pt,H.map.depthTexture.magFilter=pt}else{G.isPointLight?(H.map=new Yo(a.x),H.map.depthTexture=new Ac(a.x,Zt)):(H.map=new qt(a.x,a.y),H.map.depthTexture=new yr(a.x,a.y,Zt)),H.map.depthTexture.name=G.name+".shadowMap",H.map.depthTexture.format=ui;const ue=r.state.buffers.depth.getReversed();this.type===ta?(H.map.depthTexture.compareFunction=ue?os:ss,H.map.depthTexture.minFilter=vt,H.map.depthTexture.magFilter=vt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=pt,H.map.depthTexture.magFilter=pt)}H.camera.updateProjectionMatrix()}const ie=H.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<ie;ue++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,ue),r.clear();else{ue===0&&(r.setRenderTarget(H.map),r.clear());const Me=H.getViewport(ue);s.set(n.x*Me.x,n.y*Me.y,n.x*Me.z,n.y*Me.w),z.viewport(s)}if(G.isPointLight){const Me=H.camera,Ne=H.matrix,Ue=G.distance||Me.far;Ue!==Me.far&&(Me.far=Ue,Me.updateProjectionMatrix()),gr.setFromMatrixPosition(G.matrixWorld),Me.position.copy(gr),Ja.copy(Me.position),Ja.add(dp[ue]),Me.up.copy(fp[ue]),Me.lookAt(Ja),Me.updateMatrixWorld(),Ne.makeTranslation(-gr.x,-gr.y,-gr.z),vo.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),H._frustum.setFromProjectionMatrix(vo,Me.coordinateSystem,Me.reversedDepth)}else H.updateMatrices(G);i=H.getFrustum(),E(C,F,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===vr&&y(H,F),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,r.setRenderTarget(v,S,D)};function y(R,C){const F=e.update(M);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new qt(a.x,a.y,{format:ir,type:ci})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(C,null,F,d,M,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(C,null,F,g,M,null)}function b(R,C,F,v){let S=null;const D=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)S=D;else if(S=F.isPointLight===!0?c:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=S.uuid,V=C.uuid;let W=l[z];W===void 0&&(W={},l[z]=W);let Z=W[V];Z===void 0&&(Z=S.clone(),W[V]=Z,C.addEventListener("dispose",A)),S=Z}if(S.visible=C.visible,S.wireframe=C.wireframe,v===vr?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=r.properties.get(S);z.light=F}return S}function E(R,C,F,v,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===vr)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const z=e.update(R),V=R.material;if(Array.isArray(V)){const W=z.groups;for(let Z=0,G=W.length;Z<G;Z++){const H=W[Z],J=V[H.materialIndex];if(J&&J.visible){const ie=b(R,J,v,S);R.onBeforeShadow(r,R,C,F,z,ie,H),r.renderBufferDirect(F,null,z,ie,R,H),R.onAfterShadow(r,R,C,F,z,ie,H)}}}else if(V.visible){const W=b(R,V,v,S);R.onBeforeShadow(r,R,C,F,z,W,null),r.renderBufferDirect(F,null,z,W,R,null),R.onAfterShadow(r,R,C,F,z,W,null)}}const D=R.children;for(let z=0,V=D.length;z<V;z++)E(D[z],C,F,v,S)}function A(R){R.target.removeEventListener("dispose",A);for(const C in l){const F=l[C],v=R.target.uuid;v in F&&(F[v].dispose(),delete F[v])}}}const mp={[an]:nn,[sn]:cn,[on]:un,[er]:ln,[nn]:an,[cn]:sn,[un]:on,[ln]:er};function gp(r,e){function t(){let P=!1;const ce=new at;let ee=null;const de=new at(0,0,0,0);return{setMask:function(Q){ee!==Q&&!P&&(r.colorMask(Q,Q,Q,Q),ee=Q)},setLocked:function(Q){P=Q},setClear:function(Q,q,re,Ee,ct){ct===!0&&(Q*=Ee,q*=Ee,re*=Ee),ce.set(Q,q,re,Ee),de.equals(ce)===!1&&(r.clearColor(Q,q,re,Ee),de.copy(ce))},reset:function(){P=!1,ee=null,de.set(-1,0,0,0)}}}function i(){let P=!1,ce=!1,ee=null,de=null,Q=null;return{setReversed:function(q){if(ce!==q){const re=e.get("EXT_clip_control");q?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),ce=q;const Ee=Q;Q=null,this.setClear(Ee)}},getReversed:function(){return ce},setTest:function(q){q?K(r.DEPTH_TEST):pe(r.DEPTH_TEST)},setMask:function(q){ee!==q&&!P&&(r.depthMask(q),ee=q)},setFunc:function(q){if(ce&&(q=mp[q]),de!==q){switch(q){case an:r.depthFunc(r.NEVER);break;case nn:r.depthFunc(r.ALWAYS);break;case sn:r.depthFunc(r.LESS);break;case er:r.depthFunc(r.LEQUAL);break;case on:r.depthFunc(r.EQUAL);break;case ln:r.depthFunc(r.GEQUAL);break;case cn:r.depthFunc(r.GREATER);break;case un:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=q}},setLocked:function(q){P=q},setClear:function(q){Q!==q&&(ce&&(q=1-q),r.clearDepth(q),Q=q)},reset:function(){P=!1,ee=null,de=null,Q=null,ce=!1}}}function a(){let P=!1,ce=null,ee=null,de=null,Q=null,q=null,re=null,Ee=null,ct=null;return{setTest:function(ke){P||(ke?K(r.STENCIL_TEST):pe(r.STENCIL_TEST))},setMask:function(ke){ce!==ke&&!P&&(r.stencilMask(ke),ce=ke)},setFunc:function(ke,Gt,Jt){(ee!==ke||de!==Gt||Q!==Jt)&&(r.stencilFunc(ke,Gt,Jt),ee=ke,de=Gt,Q=Jt)},setOp:function(ke,Gt,Jt){(q!==ke||re!==Gt||Ee!==Jt)&&(r.stencilOp(ke,Gt,Jt),q=ke,re=Gt,Ee=Jt)},setLocked:function(ke){P=ke},setClear:function(ke){ct!==ke&&(r.clearStencil(ke),ct=ke)},reset:function(){P=!1,ce=null,ee=null,de=null,Q=null,q=null,re=null,Ee=null,ct=null}}}const n=new t,s=new i,o=new a,c=new WeakMap,l=new WeakMap;let h={},f={},d=new WeakMap,g=[],x=null,M=!1,p=null,u=null,y=null,b=null,E=null,A=null,R=null,C=new He(0,0,0),F=0,v=!1,S=null,D=null,z=null,V=null,W=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,H=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),G=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),G=H>=2);let ie=null,ue={};const Me=r.getParameter(r.SCISSOR_BOX),Ne=r.getParameter(r.VIEWPORT),Ue=new at().fromArray(Me),Qe=new at().fromArray(Ne);function $e(P,ce,ee,de){const Q=new Uint8Array(4),q=r.createTexture();r.bindTexture(P,q),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let re=0;re<ee;re++)P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,Q):r.texImage2D(ce+re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Q);return q}const Y={};Y[r.TEXTURE_2D]=$e(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=$e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[r.TEXTURE_2D_ARRAY]=$e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=$e(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),K(r.DEPTH_TEST),s.setFunc(er),nt(!1),mt(Ms),K(r.CULL_FACE),Ie(si);function K(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function pe(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function Pe(P,ce){return f[P]!==ce?(r.bindFramebuffer(P,ce),f[P]=ce,P===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ce),P===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function me(P,ce){let ee=g,de=!1;if(P){ee=d.get(ce),ee===void 0&&(ee=[],d.set(ce,ee));const Q=P.textures;if(ee.length!==Q.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let q=0,re=Q.length;q<re;q++)ee[q]=r.COLOR_ATTACHMENT0+q;ee.length=Q.length,de=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,de=!0);de&&r.drawBuffers(ee)}function we(P){return x!==P?(r.useProgram(P),x=P,!0):!1}const je={[Li]:r.FUNC_ADD,[xl]:r.FUNC_SUBTRACT,[Ml]:r.FUNC_REVERSE_SUBTRACT};je[Sl]=r.MIN,je[Tl]=r.MAX;const Ye={[yl]:r.ZERO,[El]:r.ONE,[bl]:r.SRC_COLOR,[tn]:r.SRC_ALPHA,[Ll]:r.SRC_ALPHA_SATURATE,[Cl]:r.DST_COLOR,[wl]:r.DST_ALPHA,[Al]:r.ONE_MINUS_SRC_COLOR,[rn]:r.ONE_MINUS_SRC_ALPHA,[Pl]:r.ONE_MINUS_DST_COLOR,[Rl]:r.ONE_MINUS_DST_ALPHA,[Dl]:r.CONSTANT_COLOR,[Ul]:r.ONE_MINUS_CONSTANT_COLOR,[Nl]:r.CONSTANT_ALPHA,[Il]:r.ONE_MINUS_CONSTANT_ALPHA};function Ie(P,ce,ee,de,Q,q,re,Ee,ct,ke){if(P===si){M===!0&&(pe(r.BLEND),M=!1);return}if(M===!1&&(K(r.BLEND),M=!0),P!==vl){if(P!==p||ke!==v){if((u!==Li||E!==Li)&&(r.blendEquation(r.FUNC_ADD),u=Li,E=Li),ke)switch(P){case Ji:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case en:r.blendFunc(r.ONE,r.ONE);break;case Ss:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ts:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ze("WebGLState: Invalid blending: ",P);break}else switch(P){case Ji:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case en:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ss:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ts:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",P);break}y=null,b=null,A=null,R=null,C.set(0,0,0),F=0,p=P,v=ke}return}Q=Q||ce,q=q||ee,re=re||de,(ce!==u||Q!==E)&&(r.blendEquationSeparate(je[ce],je[Q]),u=ce,E=Q),(ee!==y||de!==b||q!==A||re!==R)&&(r.blendFuncSeparate(Ye[ee],Ye[de],Ye[q],Ye[re]),y=ee,b=de,A=q,R=re),(Ee.equals(C)===!1||ct!==F)&&(r.blendColor(Ee.r,Ee.g,Ee.b,ct),C.copy(Ee),F=ct),p=P,v=!1}function lt(P,ce){P.side===ai?pe(r.CULL_FACE):K(r.CULL_FACE);let ee=P.side===yt;ce&&(ee=!ee),nt(ee),P.blending===Ji&&P.transparent===!1?Ie(si):Ie(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),n.setMask(P.colorWrite);const de=P.stencilWrite;o.setTest(de),de&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),st(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function nt(P){S!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),S=P)}function mt(P){P!==ml?(K(r.CULL_FACE),P!==D&&(P===Ms?r.cullFace(r.BACK):P===gl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pe(r.CULL_FACE),D=P}function w(P){P!==z&&(G&&r.lineWidth(P),z=P)}function st(P,ce,ee){P?(K(r.POLYGON_OFFSET_FILL),(V!==ce||W!==ee)&&(r.polygonOffset(ce,ee),V=ce,W=ee)):pe(r.POLYGON_OFFSET_FILL)}function Ge(P){P?K(r.SCISSOR_TEST):pe(r.SCISSOR_TEST)}function qe(P){P===void 0&&(P=r.TEXTURE0+Z-1),ie!==P&&(r.activeTexture(P),ie=P)}function ge(P,ce,ee){ee===void 0&&(ie===null?ee=r.TEXTURE0+Z-1:ee=ie);let de=ue[ee];de===void 0&&(de={type:void 0,texture:void 0},ue[ee]=de),(de.type!==P||de.texture!==ce)&&(ie!==ee&&(r.activeTexture(ee),ie=ee),r.bindTexture(P,ce||Y[P]),de.type=P,de.texture=ce)}function T(){const P=ue[ie];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function m(){try{r.compressedTexImage2D(...arguments)}catch(P){ze("WebGLState:",P)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(P){ze("WebGLState:",P)}}function X(){try{r.texSubImage2D(...arguments)}catch(P){ze("WebGLState:",P)}}function j(){try{r.texSubImage3D(...arguments)}catch(P){ze("WebGLState:",P)}}function k(){try{r.compressedTexSubImage2D(...arguments)}catch(P){ze("WebGLState:",P)}}function Te(){try{r.compressedTexSubImage3D(...arguments)}catch(P){ze("WebGLState:",P)}}function ae(){try{r.texStorage2D(...arguments)}catch(P){ze("WebGLState:",P)}}function _e(){try{r.texStorage3D(...arguments)}catch(P){ze("WebGLState:",P)}}function ye(){try{r.texImage2D(...arguments)}catch(P){ze("WebGLState:",P)}}function $(){try{r.texImage3D(...arguments)}catch(P){ze("WebGLState:",P)}}function se(P){Ue.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),Ue.copy(P))}function Se(P){Qe.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),Qe.copy(P))}function ve(P,ce){let ee=l.get(ce);ee===void 0&&(ee=new WeakMap,l.set(ce,ee));let de=ee.get(P);de===void 0&&(de=r.getUniformBlockIndex(ce,P.name),ee.set(P,de))}function ne(P,ce){const ee=l.get(ce).get(P);c.get(ce)!==ee&&(r.uniformBlockBinding(ce,ee,P.__bindingPointIndex),c.set(ce,ee))}function Oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),s.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ie=null,ue={},f={},d=new WeakMap,g=[],x=null,M=!1,p=null,u=null,y=null,b=null,E=null,A=null,R=null,C=new He(0,0,0),F=0,v=!1,S=null,D=null,z=null,V=null,W=null,Ue.set(0,0,r.canvas.width,r.canvas.height),Qe.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:K,disable:pe,bindFramebuffer:Pe,drawBuffers:me,useProgram:we,setBlending:Ie,setMaterial:lt,setFlipSided:nt,setCullFace:mt,setLineWidth:w,setPolygonOffset:st,setScissorTest:Ge,activeTexture:qe,bindTexture:ge,unbindTexture:T,compressedTexImage2D:m,compressedTexImage3D:L,texImage2D:ye,texImage3D:$,updateUBOMapping:ve,uniformBlockBinding:ne,texStorage2D:ae,texStorage3D:_e,texSubImage2D:X,texSubImage3D:j,compressedTexSubImage2D:k,compressedTexSubImage3D:Te,scissor:se,viewport:Se,reset:Oe}}function _p(r,e,t,i,a,n,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,h=new WeakMap;let f;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,m){return g?new OffscreenCanvas(T,m):da("canvas")}function M(T,m,L){let X=1;const j=ge(T);if((j.width>L||j.height>L)&&(X=L/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const k=Math.floor(X*j.width),Te=Math.floor(X*j.height);f===void 0&&(f=x(k,Te));const ae=m?x(k,Te):f;return ae.width=k,ae.height=Te,ae.getContext("2d").drawImage(T,0,0,k,Te),Ce("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+k+"x"+Te+")."),ae}else return"data"in T&&Ce("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function p(T){return T.generateMipmaps}function u(T){r.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(T,m,L,X,j=!1){if(T!==null){if(r[T]!==void 0)return r[T];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let k=m;if(m===r.RED&&(L===r.FLOAT&&(k=r.R32F),L===r.HALF_FLOAT&&(k=r.R16F),L===r.UNSIGNED_BYTE&&(k=r.R8)),m===r.RED_INTEGER&&(L===r.UNSIGNED_BYTE&&(k=r.R8UI),L===r.UNSIGNED_SHORT&&(k=r.R16UI),L===r.UNSIGNED_INT&&(k=r.R32UI),L===r.BYTE&&(k=r.R8I),L===r.SHORT&&(k=r.R16I),L===r.INT&&(k=r.R32I)),m===r.RG&&(L===r.FLOAT&&(k=r.RG32F),L===r.HALF_FLOAT&&(k=r.RG16F),L===r.UNSIGNED_BYTE&&(k=r.RG8)),m===r.RG_INTEGER&&(L===r.UNSIGNED_BYTE&&(k=r.RG8UI),L===r.UNSIGNED_SHORT&&(k=r.RG16UI),L===r.UNSIGNED_INT&&(k=r.RG32UI),L===r.BYTE&&(k=r.RG8I),L===r.SHORT&&(k=r.RG16I),L===r.INT&&(k=r.RG32I)),m===r.RGB_INTEGER&&(L===r.UNSIGNED_BYTE&&(k=r.RGB8UI),L===r.UNSIGNED_SHORT&&(k=r.RGB16UI),L===r.UNSIGNED_INT&&(k=r.RGB32UI),L===r.BYTE&&(k=r.RGB8I),L===r.SHORT&&(k=r.RGB16I),L===r.INT&&(k=r.RGB32I)),m===r.RGBA_INTEGER&&(L===r.UNSIGNED_BYTE&&(k=r.RGBA8UI),L===r.UNSIGNED_SHORT&&(k=r.RGBA16UI),L===r.UNSIGNED_INT&&(k=r.RGBA32UI),L===r.BYTE&&(k=r.RGBA8I),L===r.SHORT&&(k=r.RGBA16I),L===r.INT&&(k=r.RGBA32I)),m===r.RGB&&(L===r.UNSIGNED_INT_5_9_9_9_REV&&(k=r.RGB9_E5),L===r.UNSIGNED_INT_10F_11F_11F_REV&&(k=r.R11F_G11F_B10F)),m===r.RGBA){const Te=j?ua:Ve.getTransfer(X);L===r.FLOAT&&(k=r.RGBA32F),L===r.HALF_FLOAT&&(k=r.RGBA16F),L===r.UNSIGNED_BYTE&&(k=Te===We?r.SRGB8_ALPHA8:r.RGBA8),L===r.UNSIGNED_SHORT_4_4_4_4&&(k=r.RGBA4),L===r.UNSIGNED_SHORT_5_5_5_1&&(k=r.RGB5_A1)}return(k===r.R16F||k===r.R32F||k===r.RG16F||k===r.RG32F||k===r.RGBA16F||k===r.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function E(T,m){let L;return T?m===null||m===Zt||m===Sr?L=r.DEPTH24_STENCIL8:m===Xt?L=r.DEPTH32F_STENCIL8:m===Mr&&(L=r.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Zt||m===Sr?L=r.DEPTH_COMPONENT24:m===Xt?L=r.DEPTH_COMPONENT32F:m===Mr&&(L=r.DEPTH_COMPONENT16),L}function A(T,m){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==pt&&T.minFilter!==vt?Math.log2(Math.max(m.width,m.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?m.mipmaps.length:1}function R(T){const m=T.target;m.removeEventListener("dispose",R),F(m),m.isVideoTexture&&h.delete(m)}function C(T){const m=T.target;m.removeEventListener("dispose",C),S(m)}function F(T){const m=i.get(T);if(m.__webglInit===void 0)return;const L=T.source,X=d.get(L);if(X){const j=X[m.__cacheKey];j.usedTimes--,j.usedTimes===0&&v(T),Object.keys(X).length===0&&d.delete(L)}i.remove(T)}function v(T){const m=i.get(T);r.deleteTexture(m.__webglTexture);const L=T.source,X=d.get(L);delete X[m.__cacheKey],s.memory.textures--}function S(T){const m=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(m.__webglFramebuffer[X]))for(let j=0;j<m.__webglFramebuffer[X].length;j++)r.deleteFramebuffer(m.__webglFramebuffer[X][j]);else r.deleteFramebuffer(m.__webglFramebuffer[X]);m.__webglDepthbuffer&&r.deleteRenderbuffer(m.__webglDepthbuffer[X])}else{if(Array.isArray(m.__webglFramebuffer))for(let X=0;X<m.__webglFramebuffer.length;X++)r.deleteFramebuffer(m.__webglFramebuffer[X]);else r.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&r.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&r.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let X=0;X<m.__webglColorRenderbuffer.length;X++)m.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(m.__webglColorRenderbuffer[X]);m.__webglDepthRenderbuffer&&r.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const L=T.textures;for(let X=0,j=L.length;X<j;X++){const k=i.get(L[X]);k.__webglTexture&&(r.deleteTexture(k.__webglTexture),s.memory.textures--),i.remove(L[X])}i.remove(T)}let D=0;function z(){D=0}function V(){const T=D;return T>=a.maxTextures&&Ce("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),D+=1,T}function W(T){const m=[];return m.push(T.wrapS),m.push(T.wrapT),m.push(T.wrapR||0),m.push(T.magFilter),m.push(T.minFilter),m.push(T.anisotropy),m.push(T.internalFormat),m.push(T.format),m.push(T.type),m.push(T.generateMipmaps),m.push(T.premultiplyAlpha),m.push(T.flipY),m.push(T.unpackAlignment),m.push(T.colorSpace),m.join()}function Z(T,m){const L=i.get(T);if(T.isVideoTexture&&Ge(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&L.__version!==T.version){const X=T.image;if(X===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(L,T,m);return}}else T.isExternalTexture&&(L.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,L.__webglTexture,r.TEXTURE0+m)}function G(T,m){const L=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){Y(L,T,m);return}else T.isExternalTexture&&(L.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,L.__webglTexture,r.TEXTURE0+m)}function H(T,m){const L=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){Y(L,T,m);return}t.bindTexture(r.TEXTURE_3D,L.__webglTexture,r.TEXTURE0+m)}function J(T,m){const L=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&L.__version!==T.version){K(L,T,m);return}t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+m)}const ie={[fn]:r.REPEAT,[ni]:r.CLAMP_TO_EDGE,[pn]:r.MIRRORED_REPEAT},ue={[pt]:r.NEAREST,[Bl]:r.NEAREST_MIPMAP_NEAREST,[Dr]:r.NEAREST_MIPMAP_LINEAR,[vt]:r.LINEAR,[Sa]:r.LINEAR_MIPMAP_NEAREST,[Ui]:r.LINEAR_MIPMAP_LINEAR},Me={[Gl]:r.NEVER,[Yl]:r.ALWAYS,[kl]:r.LESS,[ss]:r.LEQUAL,[Wl]:r.EQUAL,[os]:r.GEQUAL,[Xl]:r.GREATER,[jl]:r.NOTEQUAL};function Ne(T,m){if(m.type===Xt&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===vt||m.magFilter===Sa||m.magFilter===Dr||m.magFilter===Ui||m.minFilter===vt||m.minFilter===Sa||m.minFilter===Dr||m.minFilter===Ui)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,ie[m.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,ie[m.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,ie[m.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,ue[m.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,ue[m.minFilter]),m.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,Me[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===pt||m.minFilter!==Dr&&m.minFilter!==Ui||m.type===Xt&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,a.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function Ue(T,m){let L=!1;T.__webglInit===void 0&&(T.__webglInit=!0,m.addEventListener("dispose",R));const X=m.source;let j=d.get(X);j===void 0&&(j={},d.set(X,j));const k=W(m);if(k!==T.__cacheKey){j[k]===void 0&&(j[k]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,L=!0),j[k].usedTimes++;const Te=j[T.__cacheKey];Te!==void 0&&(j[T.__cacheKey].usedTimes--,Te.usedTimes===0&&v(m)),T.__cacheKey=k,T.__webglTexture=j[k].texture}return L}function Qe(T,m,L){return Math.floor(Math.floor(T/L)/m)}function $e(T,m,L,X){const j=T.updateRanges;if(j.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,m.width,m.height,L,X,m.data);else{j.sort((ye,$)=>ye.start-$.start);let k=0;for(let ye=1;ye<j.length;ye++){const $=j[k],se=j[ye],Se=$.start+$.count,ve=Qe(se.start,m.width,4),ne=Qe($.start,m.width,4);se.start<=Se+1&&ve===ne&&Qe(se.start+se.count-1,m.width,4)===ve?$.count=Math.max($.count,se.start+se.count-$.start):(++k,j[k]=se)}j.length=k+1;const Te=r.getParameter(r.UNPACK_ROW_LENGTH),ae=r.getParameter(r.UNPACK_SKIP_PIXELS),_e=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,m.width);for(let ye=0,$=j.length;ye<$;ye++){const se=j[ye],Se=Math.floor(se.start/4),ve=Math.ceil(se.count/4),ne=Se%m.width,Oe=Math.floor(Se/m.width),P=ve;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ne),r.pixelStorei(r.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(r.TEXTURE_2D,0,ne,Oe,P,1,L,X,m.data)}T.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Te),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),r.pixelStorei(r.UNPACK_SKIP_ROWS,_e)}}function Y(T,m,L){let X=r.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),m.isData3DTexture&&(X=r.TEXTURE_3D);const j=Ue(T,m),k=m.source;t.bindTexture(X,T.__webglTexture,r.TEXTURE0+L);const Te=i.get(k);if(k.version!==Te.__version||j===!0){t.activeTexture(r.TEXTURE0+L);const ae=Ve.getPrimaries(Ve.workingColorSpace),_e=m.colorSpace===Mi?null:Ve.getPrimaries(m.colorSpace),ye=m.colorSpace===Mi||ae===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,m.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,m.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let $=M(m.image,!1,a.maxTextureSize);$=qe(m,$);const se=n.convert(m.format,m.colorSpace),Se=n.convert(m.type);let ve=b(m.internalFormat,se,Se,m.colorSpace,m.isVideoTexture);Ne(X,m);let ne;const Oe=m.mipmaps,P=m.isVideoTexture!==!0,ce=Te.__version===void 0||j===!0,ee=k.dataReady,de=A(m,$);if(m.isDepthTexture)ve=E(m.format===Ni,m.type),ce&&(P?t.texStorage2D(r.TEXTURE_2D,1,ve,$.width,$.height):t.texImage2D(r.TEXTURE_2D,0,ve,$.width,$.height,0,se,Se,null));else if(m.isDataTexture)if(Oe.length>0){P&&ce&&t.texStorage2D(r.TEXTURE_2D,de,ve,Oe[0].width,Oe[0].height);for(let Q=0,q=Oe.length;Q<q;Q++)ne=Oe[Q],P?ee&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,ne.width,ne.height,se,Se,ne.data):t.texImage2D(r.TEXTURE_2D,Q,ve,ne.width,ne.height,0,se,Se,ne.data);m.generateMipmaps=!1}else P?(ce&&t.texStorage2D(r.TEXTURE_2D,de,ve,$.width,$.height),ee&&$e(m,$,se,Se)):t.texImage2D(r.TEXTURE_2D,0,ve,$.width,$.height,0,se,Se,$.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){P&&ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,ve,Oe[0].width,Oe[0].height,$.depth);for(let Q=0,q=Oe.length;Q<q;Q++)if(ne=Oe[Q],m.format!==Vt)if(se!==null)if(P){if(ee)if(m.layerUpdates.size>0){const re=qs(ne.width,ne.height,m.format,m.type);for(const Ee of m.layerUpdates){const ct=ne.data.subarray(Ee*re/ne.data.BYTES_PER_ELEMENT,(Ee+1)*re/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,Ee,ne.width,ne.height,1,se,ct)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,ne.width,ne.height,$.depth,se,ne.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,ve,ne.width,ne.height,$.depth,0,ne.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ee&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,ne.width,ne.height,$.depth,se,Se,ne.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Q,ve,ne.width,ne.height,$.depth,0,se,Se,ne.data)}else{P&&ce&&t.texStorage2D(r.TEXTURE_2D,de,ve,Oe[0].width,Oe[0].height);for(let Q=0,q=Oe.length;Q<q;Q++)ne=Oe[Q],m.format!==Vt?se!==null?P?ee&&t.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,ne.width,ne.height,se,ne.data):t.compressedTexImage2D(r.TEXTURE_2D,Q,ve,ne.width,ne.height,0,ne.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ee&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,ne.width,ne.height,se,Se,ne.data):t.texImage2D(r.TEXTURE_2D,Q,ve,ne.width,ne.height,0,se,Se,ne.data)}else if(m.isDataArrayTexture)if(P){if(ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,ve,$.width,$.height,$.depth),ee)if(m.layerUpdates.size>0){const Q=qs($.width,$.height,m.format,m.type);for(const q of m.layerUpdates){const re=$.data.subarray(q*Q/$.data.BYTES_PER_ELEMENT,(q+1)*Q/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,q,$.width,$.height,1,se,Se,re)}m.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,se,Se,$.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ve,$.width,$.height,$.depth,0,se,Se,$.data);else if(m.isData3DTexture)P?(ce&&t.texStorage3D(r.TEXTURE_3D,de,ve,$.width,$.height,$.depth),ee&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,se,Se,$.data)):t.texImage3D(r.TEXTURE_3D,0,ve,$.width,$.height,$.depth,0,se,Se,$.data);else if(m.isFramebufferTexture){if(ce)if(P)t.texStorage2D(r.TEXTURE_2D,de,ve,$.width,$.height);else{let Q=$.width,q=$.height;for(let re=0;re<de;re++)t.texImage2D(r.TEXTURE_2D,re,ve,Q,q,0,se,Se,null),Q>>=1,q>>=1}}else if(Oe.length>0){if(P&&ce){const Q=ge(Oe[0]);t.texStorage2D(r.TEXTURE_2D,de,ve,Q.width,Q.height)}for(let Q=0,q=Oe.length;Q<q;Q++)ne=Oe[Q],P?ee&&t.texSubImage2D(r.TEXTURE_2D,Q,0,0,se,Se,ne):t.texImage2D(r.TEXTURE_2D,Q,ve,se,Se,ne);m.generateMipmaps=!1}else if(P){if(ce){const Q=ge($);t.texStorage2D(r.TEXTURE_2D,de,ve,Q.width,Q.height)}ee&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se,Se,$)}else t.texImage2D(r.TEXTURE_2D,0,ve,se,Se,$);p(m)&&u(X),Te.__version=k.version,m.onUpdate&&m.onUpdate(m)}T.__version=m.version}function K(T,m,L){if(m.image.length!==6)return;const X=Ue(T,m),j=m.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+L);const k=i.get(j);if(j.version!==k.__version||X===!0){t.activeTexture(r.TEXTURE0+L);const Te=Ve.getPrimaries(Ve.workingColorSpace),ae=m.colorSpace===Mi?null:Ve.getPrimaries(m.colorSpace),_e=m.colorSpace===Mi||Te===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,m.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,m.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ye=m.isCompressedTexture||m.image[0].isCompressedTexture,$=m.image[0]&&m.image[0].isDataTexture,se=[];for(let q=0;q<6;q++)!ye&&!$?se[q]=M(m.image[q],!0,a.maxCubemapSize):se[q]=$?m.image[q].image:m.image[q],se[q]=qe(m,se[q]);const Se=se[0],ve=n.convert(m.format,m.colorSpace),ne=n.convert(m.type),Oe=b(m.internalFormat,ve,ne,m.colorSpace),P=m.isVideoTexture!==!0,ce=k.__version===void 0||X===!0,ee=j.dataReady;let de=A(m,Se);Ne(r.TEXTURE_CUBE_MAP,m);let Q;if(ye){P&&ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Oe,Se.width,Se.height);for(let q=0;q<6;q++){Q=se[q].mipmaps;for(let re=0;re<Q.length;re++){const Ee=Q[re];m.format!==Vt?ve!==null?P?ee&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,0,0,Ee.width,Ee.height,ve,Ee.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,Oe,Ee.width,Ee.height,0,Ee.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,0,0,Ee.width,Ee.height,ve,ne,Ee.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,Oe,Ee.width,Ee.height,0,ve,ne,Ee.data)}}}else{if(Q=m.mipmaps,P&&ce){Q.length>0&&de++;const q=ge(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Oe,q.width,q.height)}for(let q=0;q<6;q++)if($){P?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,se[q].width,se[q].height,ve,ne,se[q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Oe,se[q].width,se[q].height,0,ve,ne,se[q].data);for(let re=0;re<Q.length;re++){const Ee=Q[re].image[q].image;P?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,0,0,Ee.width,Ee.height,ve,ne,Ee.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,Oe,Ee.width,Ee.height,0,ve,ne,Ee.data)}}else{P?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ve,ne,se[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Oe,ve,ne,se[q]);for(let re=0;re<Q.length;re++){const Ee=Q[re];P?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,0,0,ve,ne,Ee.image[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,Oe,ve,ne,Ee.image[q])}}}p(m)&&u(r.TEXTURE_CUBE_MAP),k.__version=j.version,m.onUpdate&&m.onUpdate(m)}T.__version=m.version}function pe(T,m,L,X,j,k){const Te=n.convert(L.format,L.colorSpace),ae=n.convert(L.type),_e=b(L.internalFormat,Te,ae,L.colorSpace),ye=i.get(m),$=i.get(L);if($.__renderTarget=m,!ye.__hasExternalTextures){const se=Math.max(1,m.width>>k),Se=Math.max(1,m.height>>k);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,k,_e,se,Se,m.depth,0,Te,ae,null):t.texImage2D(j,k,_e,se,Se,0,Te,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),st(m)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,j,$.__webglTexture,0,w(m)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,j,$.__webglTexture,k),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(T,m,L){if(r.bindRenderbuffer(r.RENDERBUFFER,T),m.depthBuffer){const X=m.depthTexture,j=X&&X.isDepthTexture?X.type:null,k=E(m.stencilBuffer,j),Te=m.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;st(m)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,w(m),k,m.width,m.height):L?r.renderbufferStorageMultisample(r.RENDERBUFFER,w(m),k,m.width,m.height):r.renderbufferStorage(r.RENDERBUFFER,k,m.width,m.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,T)}else{const X=m.textures;for(let j=0;j<X.length;j++){const k=X[j],Te=n.convert(k.format,k.colorSpace),ae=n.convert(k.type),_e=b(k.internalFormat,Te,ae,k.colorSpace);st(m)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,w(m),_e,m.width,m.height):L?r.renderbufferStorageMultisample(r.RENDERBUFFER,w(m),_e,m.width,m.height):r.renderbufferStorage(r.RENDERBUFFER,_e,m.width,m.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function me(T,m,L){const X=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(m.depthTexture);if(j.__renderTarget=m,(!j.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,m.depthTexture.addEventListener("dispose",R)),j.__webglTexture===void 0){j.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,m.depthTexture);const ye=n.convert(m.depthTexture.format),$=n.convert(m.depthTexture.type);let se;m.depthTexture.format===ui?se=r.DEPTH_COMPONENT24:m.depthTexture.format===Ni&&(se=r.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,se,m.width,m.height,0,ye,$,null)}}else Z(m.depthTexture,0);const k=j.__webglTexture,Te=w(m),ae=X?r.TEXTURE_CUBE_MAP_POSITIVE_X+L:r.TEXTURE_2D,_e=m.depthTexture.format===Ni?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(m.depthTexture.format===ui)st(m)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,ae,k,0,Te):r.framebufferTexture2D(r.FRAMEBUFFER,_e,ae,k,0);else if(m.depthTexture.format===Ni)st(m)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,ae,k,0,Te):r.framebufferTexture2D(r.FRAMEBUFFER,_e,ae,k,0);else throw new Error("Unknown depthTexture format")}function we(T){const m=i.get(T),L=T.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),X){const j=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),m.__depthDisposeCallback=j}m.__boundDepthTexture=X}if(T.depthTexture&&!m.__autoAllocateDepthBuffer)if(L)for(let X=0;X<6;X++)me(m.__webglFramebuffer[X],T,X);else{const X=T.texture.mipmaps;X&&X.length>0?me(m.__webglFramebuffer[0],T,0):me(m.__webglFramebuffer,T,0)}else if(L){m.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(r.FRAMEBUFFER,m.__webglFramebuffer[X]),m.__webglDepthbuffer[X]===void 0)m.__webglDepthbuffer[X]=r.createRenderbuffer(),Pe(m.__webglDepthbuffer[X],T,!1);else{const j=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,k=m.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,k),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,k)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(r.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=r.createRenderbuffer(),Pe(m.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,k=m.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,k),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,k)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function je(T,m,L){const X=i.get(T);m!==void 0&&pe(X.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),L!==void 0&&we(T)}function Ye(T){const m=T.texture,L=i.get(T),X=i.get(m);T.addEventListener("dispose",C);const j=T.textures,k=T.isWebGLCubeRenderTarget===!0,Te=j.length>1;if(Te||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=m.version,s.memory.textures++),k){L.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(m.mipmaps&&m.mipmaps.length>0){L.__webglFramebuffer[ae]=[];for(let _e=0;_e<m.mipmaps.length;_e++)L.__webglFramebuffer[ae][_e]=r.createFramebuffer()}else L.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){L.__webglFramebuffer=[];for(let ae=0;ae<m.mipmaps.length;ae++)L.__webglFramebuffer[ae]=r.createFramebuffer()}else L.__webglFramebuffer=r.createFramebuffer();if(Te)for(let ae=0,_e=j.length;ae<_e;ae++){const ye=i.get(j[ae]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),s.memory.textures++)}if(T.samples>0&&st(T)===!1){L.__webglMultisampledFramebuffer=r.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ae=0;ae<j.length;ae++){const _e=j[ae];L.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,L.__webglColorRenderbuffer[ae]);const ye=n.convert(_e.format,_e.colorSpace),$=n.convert(_e.type),se=b(_e.internalFormat,ye,$,_e.colorSpace,T.isXRRenderTarget===!0),Se=w(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,se,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,L.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(L.__webglDepthRenderbuffer=r.createRenderbuffer(),Pe(L.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(k){t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,m);for(let ae=0;ae<6;ae++)if(m.mipmaps&&m.mipmaps.length>0)for(let _e=0;_e<m.mipmaps.length;_e++)pe(L.__webglFramebuffer[ae][_e],T,m,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e);else pe(L.__webglFramebuffer[ae],T,m,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(m)&&u(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ae=0,_e=j.length;ae<_e;ae++){const ye=j[ae],$=i.get(ye);let se=r.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,$.__webglTexture),Ne(se,ye),pe(L.__webglFramebuffer,T,ye,r.COLOR_ATTACHMENT0+ae,se,0),p(ye)&&u(se)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,X.__webglTexture),Ne(ae,m),m.mipmaps&&m.mipmaps.length>0)for(let _e=0;_e<m.mipmaps.length;_e++)pe(L.__webglFramebuffer[_e],T,m,r.COLOR_ATTACHMENT0,ae,_e);else pe(L.__webglFramebuffer,T,m,r.COLOR_ATTACHMENT0,ae,0);p(m)&&u(ae),t.unbindTexture()}T.depthBuffer&&we(T)}function Ie(T){const m=T.textures;for(let L=0,X=m.length;L<X;L++){const j=m[L];if(p(j)){const k=y(T),Te=i.get(j).__webglTexture;t.bindTexture(k,Te),u(k),t.unbindTexture()}}}const lt=[],nt=[];function mt(T){if(T.samples>0){if(st(T)===!1){const m=T.textures,L=T.width,X=T.height;let j=r.COLOR_BUFFER_BIT;const k=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=i.get(T),ae=m.length>1;if(ae)for(let ye=0;ye<m.length;ye++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const _e=T.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ye=0;ye<m.length;ye++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[ye]);const $=i.get(m[ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$,0)}r.blitFramebuffer(0,0,L,X,0,0,L,X,j,r.NEAREST),c===!0&&(lt.length=0,nt.length=0,lt.push(r.COLOR_ATTACHMENT0+ye),T.depthBuffer&&T.resolveDepthBuffer===!1&&(lt.push(k),nt.push(k),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,nt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let ye=0;ye<m.length;ye++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,Te.__webglColorRenderbuffer[ye]);const $=i.get(m[ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,$,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const m=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[m])}}}function w(T){return Math.min(a.maxSamples,T.samples)}function st(T){const m=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function Ge(T){const m=s.render.frame;h.get(T)!==m&&(h.set(T,m),T.update())}function qe(T,m){const L=T.colorSpace,X=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||L!==rr&&L!==Mi&&(Ve.getTransfer(L)===We?(X!==Vt||j!==Dt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",L)),m}function ge(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=je,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=st,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function vp(r,e){function t(i,a=Mi){let n;const s=Ve.getTransfer(a);if(i===Dt)return r.UNSIGNED_BYTE;if(i===ts)return r.UNSIGNED_SHORT_4_4_4_4;if(i===is)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Uo)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===No)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Lo)return r.BYTE;if(i===Do)return r.SHORT;if(i===Mr)return r.UNSIGNED_SHORT;if(i===es)return r.INT;if(i===Zt)return r.UNSIGNED_INT;if(i===Xt)return r.FLOAT;if(i===ci)return r.HALF_FLOAT;if(i===Io)return r.ALPHA;if(i===Oo)return r.RGB;if(i===Vt)return r.RGBA;if(i===ui)return r.DEPTH_COMPONENT;if(i===Ni)return r.DEPTH_STENCIL;if(i===Fo)return r.RED;if(i===rs)return r.RED_INTEGER;if(i===ir)return r.RG;if(i===as)return r.RG_INTEGER;if(i===ns)return r.RGBA_INTEGER;if(i===ia||i===ra||i===aa||i===na)if(s===We)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===ia)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ra)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===aa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===na)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===ia)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ra)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===aa)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===na)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mn||i===gn||i===_n||i===vn)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===mn)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gn)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_n)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vn)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xn||i===Mn||i===Sn||i===Tn||i===yn||i===En||i===bn)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(i===xn||i===Mn)return s===We?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===Sn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(i===Tn)return n.COMPRESSED_R11_EAC;if(i===yn)return n.COMPRESSED_SIGNED_R11_EAC;if(i===En)return n.COMPRESSED_RG11_EAC;if(i===bn)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===An||i===wn||i===Rn||i===Cn||i===Pn||i===Ln||i===Dn||i===Un||i===Nn||i===In||i===On||i===Fn||i===Bn||i===zn)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(i===An)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ln)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Un)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===In)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===On)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zn)return s===We?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vn||i===Hn||i===Gn)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(i===Vn)return s===We?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hn)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gn)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kn||i===Wn||i===Xn||i===jn)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(i===kn)return n.COMPRESSED_RED_RGTC1_EXT;if(i===Wn)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jn)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sr?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const xp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ko(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Kt({vertexShader:xp,fragmentShader:Mp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new di(new ma(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tp extends nr{constructor(e,t){super();const i=this;let a=null,n=1,s=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,g=null,x=null;const M=typeof XRWebGLBinding<"u",p=new Sp,u={},y=t.getContextAttributes();let b=null,E=null;const A=[],R=[],C=new Xe;let F=null;const v=new Lt;v.viewport=new at;const S=new Lt;S.viewport=new at;const D=[v,S],z=new Pc;let V=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=A[Y];return K===void 0&&(K=new Wa,A[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=A[Y];return K===void 0&&(K=new Wa,A[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=A[Y];return K===void 0&&(K=new Wa,A[Y]=K),K.getHandSpace()};function Z(Y){const K=R.indexOf(Y.inputSource);if(K===-1)return;const pe=A[K];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,l||s),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",G),a.removeEventListener("inputsourceschange",H);for(let Y=0;Y<A.length;Y++){const K=R[Y];K!==null&&(R[Y]=null,A[Y].disconnect(K))}V=null,W=null,p.reset();for(const Y in u)delete u[Y];e.setRenderTarget(b),g=null,d=null,f=null,a=null,E=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){n=Y,i.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(a,t)),f},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(b=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",G),a.addEventListener("inputsourceschange",H),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,pe=null,Pe=null;y.depth&&(Pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=y.stencil?Ni:ui,pe=y.stencil?Sr:Zt);const me={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:n};f=this.getBinding(),d=f.createProjectionLayer(me),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new qt(d.textureWidth,d.textureHeight,{format:Vt,type:Dt,depthTexture:new yr(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const K={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:n};g=new XRWebGLLayer(a,t,K),a.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new qt(g.framebufferWidth,g.framebufferHeight,{format:Vt,type:Dt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await a.requestReferenceSpace(o),$e.setContext(a),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function H(Y){for(let K=0;K<Y.removed.length;K++){const pe=Y.removed[K],Pe=R.indexOf(pe);Pe>=0&&(R[Pe]=null,A[Pe].disconnect(pe))}for(let K=0;K<Y.added.length;K++){const pe=Y.added[K];let Pe=R.indexOf(pe);if(Pe===-1){for(let we=0;we<A.length;we++)if(we>=R.length){R.push(pe),Pe=we;break}else if(R[we]===null){R[we]=pe,Pe=we;break}if(Pe===-1)break}const me=A[Pe];me&&me.connect(pe)}}const J=new I,ie=new I;function ue(Y,K,pe){J.setFromMatrixPosition(K.matrixWorld),ie.setFromMatrixPosition(pe.matrixWorld);const Pe=J.distanceTo(ie),me=K.projectionMatrix.elements,we=pe.projectionMatrix.elements,je=me[14]/(me[10]-1),Ye=me[14]/(me[10]+1),Ie=(me[9]+1)/me[5],lt=(me[9]-1)/me[5],nt=(me[8]-1)/me[0],mt=(we[8]+1)/we[0],w=je*nt,st=je*mt,Ge=Pe/(-nt+mt),qe=Ge*-nt;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(qe),Y.translateZ(Ge),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),me[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const ge=je+Ge,T=Ye+Ge,m=w-qe,L=st+(Pe-qe),X=Ie*Ye/T*ge,j=lt*Ye/T*ge;Y.projectionMatrix.makePerspective(m,L,X,j,ge,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Me(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let K=Y.near,pe=Y.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),z.near=S.near=v.near=K,z.far=S.far=v.far=pe,(V!==z.near||W!==z.far)&&(a.updateRenderState({depthNear:z.near,depthFar:z.far}),V=z.near,W=z.far),z.layers.mask=Y.layers.mask|6,v.layers.mask=z.layers.mask&3,S.layers.mask=z.layers.mask&5;const Pe=Y.parent,me=z.cameras;Me(z,Pe);for(let we=0;we<me.length;we++)Me(me[we],Pe);me.length===2?ue(z,v,S):z.projectionMatrix.copy(v.projectionMatrix),Ne(Y,z,Pe)};function Ne(Y,K,pe){pe===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Yn*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(Y){return u[Y]};let Ue=null;function Qe(Y,K){if(h=K.getViewerPose(l||s),x=K,h!==null){const pe=h.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let Pe=!1;pe.length!==z.cameras.length&&(z.cameras.length=0,Pe=!0);for(let we=0;we<pe.length;we++){const je=pe[we];let Ye=null;if(g!==null)Ye=g.getViewport(je);else{const lt=f.getViewSubImage(d,je);Ye=lt.viewport,we===0&&(e.setRenderTargetTextures(E,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(E))}let Ie=D[we];Ie===void 0&&(Ie=new Lt,Ie.layers.enable(we),Ie.viewport=new at,D[we]=Ie),Ie.matrix.fromArray(je.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(je.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),we===0&&(z.matrix.copy(Ie.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Pe===!0&&z.cameras.push(Ie)}const me=a.enabledFeatures;if(me&&me.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const we=f.getDepthInformation(pe[0]);we&&we.isValid&&we.texture&&p.init(we,a.renderState)}if(me&&me.includes("camera-access")&&M){e.state.unbindTexture(),f=i.getBinding();for(let we=0;we<pe.length;we++){const je=pe[we].camera;if(je){let Ye=u[je];Ye||(Ye=new Ko,u[je]=Ye);const Ie=f.getCameraImage(je);Ye.sourceTexture=Ie}}}}for(let pe=0;pe<A.length;pe++){const Pe=R[pe],me=A[pe];Pe!==null&&me!==void 0&&me.update(Pe,K,l||s)}Ue&&Ue(Y,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}const $e=new $o;$e.setAnimationLoop(Qe),this.setAnimationLoop=function(Y){Ue=Y},this.dispose=function(){}}}const Pi=new hi,yp=new rt;function Ep(r,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Wo(r)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function a(p,u,y,b,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?n(p,u):u.isMeshToonMaterial?(n(p,u),f(p,u)):u.isMeshPhongMaterial?(n(p,u),h(p,u)):u.isMeshStandardMaterial?(n(p,u),d(p,u),u.isMeshPhysicalMaterial&&g(p,u,E)):u.isMeshMatcapMaterial?(n(p,u),x(p,u)):u.isMeshDepthMaterial?n(p,u):u.isMeshDistanceMaterial?(n(p,u),M(p,u)):u.isMeshNormalMaterial?n(p,u):u.isLineBasicMaterial?(s(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,y,b):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function n(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===yt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===yt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const y=e.get(u),b=y.envMap,E=y.envMapRotation;b&&(p.envMap.value=b,Pi.copy(E),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),p.envMapRotation.value.setFromMatrix4(yp.makeRotationFromEuler(Pi)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function s(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,y,b){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*y,p.scale.value=b*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,y){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function M(p,u){const y=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function bp(r,e,t,i){let a={},n={},s=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const E=b.program;i.uniformBlockBinding(y,E)}function l(y,b){let E=a[y.id];E===void 0&&(x(y),E=h(y),a[y.id]=E,y.addEventListener("dispose",p));const A=b.program;i.updateUBOMapping(y,A);const R=e.render.frame;n[y.id]!==R&&(d(y),n[y.id]=R)}function h(y){const b=f();y.__bindingPointIndex=b;const E=r.createBuffer(),A=y.__size,R=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,A,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,E),E}function f(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const b=a[y.id],E=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let R=0,C=E.length;R<C;R++){const F=Array.isArray(E[R])?E[R]:[E[R]];for(let v=0,S=F.length;v<S;v++){const D=F[v];if(g(D,R,v,A)===!0){const z=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let Z=0;Z<V.length;Z++){const G=V[Z],H=M(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,z+W,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,W),W+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(y,b,E,A){const R=y.value,C=b+"_"+E;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{const F=A[C];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return A[C]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function x(y){const b=y.uniforms;let E=0;const A=16;for(let C=0,F=b.length;C<F;C++){const v=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,D=v.length;S<D;S++){const z=v[S],V=Array.isArray(z.value)?z.value:[z.value];for(let W=0,Z=V.length;W<Z;W++){const G=V[W],H=M(G),J=E%A,ie=J%H.boundary,ue=J+ie;E+=ie,ue!==0&&A-ue<H.storage&&(E+=A-ue),z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=H.storage}}}const R=E%A;return R>0&&(E+=A-R),y.__size=E,y.__cache={},this}function M(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ce("WebGLRenderer: Unsupported uniform value type.",y),b}function p(y){const b=y.target;b.removeEventListener("dispose",p);const E=s.indexOf(b.__bindingPointIndex);s.splice(E,1),r.deleteBuffer(a[b.id]),delete a[b.id],delete n[b.id]}function u(){for(const y in a)r.deleteBuffer(a[y]);s=[],a={},n={}}return{bind:c,update:l,dispose:u}}const Ap=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let kt=null;function wp(){return kt===null&&(kt=new Sc(Ap,16,16,ir,ci),kt.name="DFG_LUT",kt.minFilter=vt,kt.magFilter=vt,kt.wrapS=ni,kt.wrapT=ni,kt.generateMipmaps=!1,kt.needsUpdate=!0),kt}class Rp{constructor(e={}){const{canvas:t=ql(),context:i=null,depth:a=!0,stencil:n=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:g=Dt}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=s;const M=g,p=new Set([ns,as,rs]),u=new Set([Dt,Zt,Mr,Sr,ts,is]),y=new Uint32Array(4),b=new Int32Array(4);let E=null,A=null;const R=[],C=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=Pt;let D=0,z=0,V=null,W=-1,Z=null;const G=new at,H=new at;let J=null;const ie=new He(0);let ue=0,Me=t.width,Ne=t.height,Ue=1,Qe=null,$e=null;const Y=new at(0,0,Me,Ne),K=new at(0,0,Me,Ne);let pe=!1;const Pe=new qo;let me=!1,we=!1;const je=new rt,Ye=new I,Ie=new at,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function mt(){return V===null?Ue:1}let w=i;function st(_,U){return t.getContext(_,U)}try{const _={alpha:!0,depth:a,stencil:n,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qn}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",ke,!1),w===null){const U="webgl2";if(w=st(U,_),w===null)throw st(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw ze("WebGLRenderer: "+_.message),_}let Ge,qe,ge,T,m,L,X,j,k,Te,ae,_e,ye,$,se,Se,ve,ne,Oe,P,ce,ee,de,Q;function q(){Ge=new Ad(w),Ge.init(),ee=new vp(w,Ge),qe=new _d(w,Ge,e,ee),ge=new gp(w,Ge),qe.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),T=new Cd(w),m=new tp,L=new _p(w,Ge,ge,m,qe,ee,T),X=new xd(v),j=new bd(v),k=new Uc(w),de=new md(w,k),Te=new wd(w,k,T,de),ae=new Ld(w,Te,k,T),Oe=new Pd(w,qe,L),Se=new vd(m),_e=new ep(v,X,j,Ge,qe,de,Se),ye=new Ep(v,m),$=new rp,se=new cp(Ge),ne=new pd(v,X,j,ge,ae,x,c),ve=new pp(v,ae,qe),Q=new bp(w,T,qe,ge),P=new gd(w,Ge,T),ce=new Rd(w,Ge,T),T.programs=_e.programs,v.capabilities=qe,v.extensions=Ge,v.properties=m,v.renderLists=$,v.shadowMap=ve,v.state=ge,v.info=T}q(),M!==Dt&&(F=new Ud(M,t.width,t.height,a,n));const re=new Tp(v,w);this.xr=re,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const _=Ge.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Ge.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(_){_!==void 0&&(Ue=_,this.setSize(Me,Ne,!1))},this.getSize=function(_){return _.set(Me,Ne)},this.setSize=function(_,U,B=!0){if(re.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=_,Ne=U,t.width=Math.floor(_*Ue),t.height=Math.floor(U*Ue),B===!0&&(t.style.width=_+"px",t.style.height=U+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,_,U)},this.getDrawingBufferSize=function(_){return _.set(Me*Ue,Ne*Ue).floor()},this.setDrawingBufferSize=function(_,U,B){Me=_,Ne=U,Ue=B,t.width=Math.floor(_*B),t.height=Math.floor(U*B),this.setViewport(0,0,_,U)},this.setEffects=function(_){if(M===Dt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let U=0;U<_.length;U++)if(_[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(G)},this.getViewport=function(_){return _.copy(Y)},this.setViewport=function(_,U,B,O){_.isVector4?Y.set(_.x,_.y,_.z,_.w):Y.set(_,U,B,O),ge.viewport(G.copy(Y).multiplyScalar(Ue).round())},this.getScissor=function(_){return _.copy(K)},this.setScissor=function(_,U,B,O){_.isVector4?K.set(_.x,_.y,_.z,_.w):K.set(_,U,B,O),ge.scissor(H.copy(K).multiplyScalar(Ue).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(_){ge.setScissorTest(pe=_)},this.setOpaqueSort=function(_){Qe=_},this.setTransparentSort=function(_){$e=_},this.getClearColor=function(_){return _.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(_=!0,U=!0,B=!0){let O=0;if(_){let N=!1;if(V!==null){const te=V.texture.format;N=p.has(te)}if(N){const te=V.texture.type,le=u.has(te),fe=ne.getClearColor(),he=ne.getClearAlpha(),Ae=fe.r,Re=fe.g,be=fe.b;le?(y[0]=Ae,y[1]=Re,y[2]=be,y[3]=he,w.clearBufferuiv(w.COLOR,0,y)):(b[0]=Ae,b[1]=Re,b[2]=be,b[3]=he,w.clearBufferiv(w.COLOR,0,b))}else O|=w.COLOR_BUFFER_BIT}U&&(O|=w.DEPTH_BUFFER_BIT),B&&(O|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),ne.dispose(),$.dispose(),se.dispose(),m.dispose(),X.dispose(),j.dispose(),ae.dispose(),de.dispose(),Q.dispose(),_e.dispose(),re.dispose(),re.removeEventListener("sessionstart",fs),re.removeEventListener("sessionend",ps),yi.stop()};function Ee(_){_.preventDefault(),ws("WebGLRenderer: Context Lost."),S=!0}function ct(){ws("WebGLRenderer: Context Restored."),S=!1;const _=T.autoReset,U=ve.enabled,B=ve.autoUpdate,O=ve.needsUpdate,N=ve.type;q(),T.autoReset=_,ve.enabled=U,ve.autoUpdate=B,ve.needsUpdate=O,ve.type=N}function ke(_){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Gt(_){const U=_.target;U.removeEventListener("dispose",Gt),Jt(U)}function Jt(_){ol(_),m.remove(_)}function ol(_){const U=m.get(_).programs;U!==void 0&&(U.forEach(function(B){_e.releaseProgram(B)}),_.isShaderMaterial&&_e.releaseShaderCache(_))}this.renderBufferDirect=function(_,U,B,O,N,te){U===null&&(U=lt);const le=N.isMesh&&N.matrixWorld.determinant()<0,fe=cl(_,U,B,O,N);ge.setMaterial(O,le);let he=B.index,Ae=1;if(O.wireframe===!0){if(he=Te.getWireframeAttribute(B),he===void 0)return;Ae=2}const Re=B.drawRange,be=B.attributes.position;let Be=Re.start*Ae,Ze=(Re.start+Re.count)*Ae;te!==null&&(Be=Math.max(Be,te.start*Ae),Ze=Math.min(Ze,(te.start+te.count)*Ae)),he!==null?(Be=Math.max(Be,0),Ze=Math.min(Ze,he.count)):be!=null&&(Be=Math.max(Be,0),Ze=Math.min(Ze,be.count));const it=Ze-Be;if(it<0||it===1/0)return;de.setup(N,O,fe,B,he);let et,Ke=P;if(he!==null&&(et=k.get(he),Ke=ce,Ke.setIndex(et)),N.isMesh)O.wireframe===!0?(ge.setLineWidth(O.wireframeLinewidth*mt()),Ke.setMode(w.LINES)):Ke.setMode(w.TRIANGLES);else if(N.isLine){let xe=O.linewidth;xe===void 0&&(xe=1),ge.setLineWidth(xe*mt()),N.isLineSegments?Ke.setMode(w.LINES):N.isLineLoop?Ke.setMode(w.LINE_LOOP):Ke.setMode(w.LINE_STRIP)}else N.isPoints?Ke.setMode(w.POINTS):N.isSprite&&Ke.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Tr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Ke.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const xe=N._multiDrawStarts,tt=N._multiDrawCounts,$t=N._multiDrawCount,Nt=he?k.get(he).bytesPerElement:1,Oi=m.get(O).currentProgram.getUniforms();for(let bt=0;bt<$t;bt++)Oi.setValue(w,"_gl_DrawID",bt),Ke.render(xe[bt]/Nt,tt[bt])}else if(N.isInstancedMesh)Ke.renderInstances(Be,it,N.count);else if(B.isInstancedBufferGeometry){const xe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,tt=Math.min(B.instanceCount,xe);Ke.renderInstances(Be,it,tt)}else Ke.render(Be,it)};function ds(_,U,B){_.transparent===!0&&_.side===ai&&_.forceSinglePass===!1?(_.side=yt,_.needsUpdate=!0,Lr(_,U,B),_.side=Ti,_.needsUpdate=!0,Lr(_,U,B),_.side=ai):Lr(_,U,B)}this.compile=function(_,U,B=null){B===null&&(B=_),A=se.get(B),A.init(U),C.push(A),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(A.pushLight(N),N.castShadow&&A.pushShadow(N))}),_!==B&&_.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(A.pushLight(N),N.castShadow&&A.pushShadow(N))}),A.setupLights();const O=new Set;return _.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const te=N.material;if(te)if(Array.isArray(te))for(let le=0;le<te.length;le++){const fe=te[le];ds(fe,B,N),O.add(fe)}else ds(te,B,N),O.add(te)}),A=C.pop(),O},this.compileAsync=function(_,U,B=null){const O=this.compile(_,U,B);return new Promise(N=>{function te(){if(O.forEach(function(le){m.get(le).currentProgram.isReady()&&O.delete(le)}),O.size===0){N(_);return}setTimeout(te,10)}Ge.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let va=null;function ll(_){va&&va(_)}function fs(){yi.stop()}function ps(){yi.start()}const yi=new $o;yi.setAnimationLoop(ll),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(_){va=_,re.setAnimationLoop(_),_===null?yi.stop():yi.start()},re.addEventListener("sessionstart",fs),re.addEventListener("sessionend",ps),this.render=function(_,U){if(U!==void 0&&U.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const B=re.enabled===!0&&re.isPresenting===!0,O=F!==null&&(V===null||B)&&F.begin(v,V);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),_.isScene===!0&&_.onBeforeRender(v,_,U,V),A=se.get(_,C.length),A.init(U),C.push(A),je.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Pe.setFromProjectionMatrix(je,jt,U.reversedDepth),we=this.localClippingEnabled,me=Se.init(this.clippingPlanes,we),E=$.get(_,R.length),E.init(),R.push(E),re.enabled===!0&&re.isPresenting===!0){const te=v.xr.getDepthSensingMesh();te!==null&&xa(te,U,-1/0,v.sortObjects)}xa(_,U,0,v.sortObjects),E.finish(),v.sortObjects===!0&&E.sort(Qe,$e),nt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,nt&&ne.addToRenderList(E,_),this.info.render.frame++,me===!0&&Se.beginShadows();const N=A.state.shadowsArray;if(ve.render(N,_,U),me===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(O&&F.hasRenderPass())===!1){const te=E.opaque,le=E.transmissive;if(A.setupLights(),U.isArrayCamera){const fe=U.cameras;if(le.length>0)for(let he=0,Ae=fe.length;he<Ae;he++){const Re=fe[he];gs(te,le,_,Re)}nt&&ne.render(_);for(let he=0,Ae=fe.length;he<Ae;he++){const Re=fe[he];ms(E,_,Re,Re.viewport)}}else le.length>0&&gs(te,le,_,U),nt&&ne.render(_),ms(E,_,U)}V!==null&&z===0&&(L.updateMultisampleRenderTarget(V),L.updateRenderTargetMipmap(V)),O&&F.end(v),_.isScene===!0&&_.onAfterRender(v,_,U),de.resetDefaultState(),W=-1,Z=null,C.pop(),C.length>0?(A=C[C.length-1],me===!0&&Se.setGlobalState(v.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?E=R[R.length-1]:E=null};function xa(_,U,B,O){if(_.visible===!1)return;if(_.layers.test(U.layers)){if(_.isGroup)B=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(U);else if(_.isLight)A.pushLight(_),_.castShadow&&A.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Pe.intersectsSprite(_)){O&&Ie.setFromMatrixPosition(_.matrixWorld).applyMatrix4(je);const te=ae.update(_),le=_.material;le.visible&&E.push(_,te,le,B,Ie.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Pe.intersectsObject(_))){const te=ae.update(_),le=_.material;if(O&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ie.copy(_.boundingSphere.center)):(te.boundingSphere===null&&te.computeBoundingSphere(),Ie.copy(te.boundingSphere.center)),Ie.applyMatrix4(_.matrixWorld).applyMatrix4(je)),Array.isArray(le)){const fe=te.groups;for(let he=0,Ae=fe.length;he<Ae;he++){const Re=fe[he],be=le[Re.materialIndex];be&&be.visible&&E.push(_,te,be,B,Ie.z,Re)}}else le.visible&&E.push(_,te,le,B,Ie.z,null)}}const N=_.children;for(let te=0,le=N.length;te<le;te++)xa(N[te],U,B,O)}function ms(_,U,B,O){const{opaque:N,transmissive:te,transparent:le}=_;A.setupLightsView(B),me===!0&&Se.setGlobalState(v.clippingPlanes,B),O&&ge.viewport(G.copy(O)),N.length>0&&Pr(N,U,B),te.length>0&&Pr(te,U,B),le.length>0&&Pr(le,U,B),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function gs(_,U,B,O){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[O.id]===void 0){const be=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[O.id]=new qt(1,1,{generateMipmaps:!0,type:be?ci:Dt,minFilter:Ui,samples:qe.samples,stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}const N=A.state.transmissionRenderTarget[O.id],te=O.viewport||G;N.setSize(te.z*v.transmissionResolutionScale,te.w*v.transmissionResolutionScale);const le=v.getRenderTarget(),fe=v.getActiveCubeFace(),he=v.getActiveMipmapLevel();v.setRenderTarget(N),v.getClearColor(ie),ue=v.getClearAlpha(),ue<1&&v.setClearColor(16777215,.5),v.clear(),nt&&ne.render(B);const Ae=v.toneMapping;v.toneMapping=Yt;const Re=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),A.setupLightsView(O),me===!0&&Se.setGlobalState(v.clippingPlanes,O),Pr(_,B,O),L.updateMultisampleRenderTarget(N),L.updateRenderTargetMipmap(N),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Be=0,Ze=U.length;Be<Ze;Be++){const it=U[Be],{object:et,geometry:Ke,material:xe,group:tt}=it;if(xe.side===ai&&et.layers.test(O.layers)){const $t=xe.side;xe.side=yt,xe.needsUpdate=!0,_s(et,B,O,Ke,xe,tt),xe.side=$t,xe.needsUpdate=!0,be=!0}}be===!0&&(L.updateMultisampleRenderTarget(N),L.updateRenderTargetMipmap(N))}v.setRenderTarget(le,fe,he),v.setClearColor(ie,ue),Re!==void 0&&(O.viewport=Re),v.toneMapping=Ae}function Pr(_,U,B){const O=U.isScene===!0?U.overrideMaterial:null;for(let N=0,te=_.length;N<te;N++){const le=_[N],{object:fe,geometry:he,group:Ae}=le;let Re=le.material;Re.allowOverride===!0&&O!==null&&(Re=O),fe.layers.test(B.layers)&&_s(fe,U,B,he,Re,Ae)}}function _s(_,U,B,O,N,te){_.onBeforeRender(v,U,B,O,N,te),_.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(v,U,B,O,_,te),N.transparent===!0&&N.side===ai&&N.forceSinglePass===!1?(N.side=yt,N.needsUpdate=!0,v.renderBufferDirect(B,U,O,N,_,te),N.side=Ti,N.needsUpdate=!0,v.renderBufferDirect(B,U,O,N,_,te),N.side=ai):v.renderBufferDirect(B,U,O,N,_,te),_.onAfterRender(v,U,B,O,N,te)}function Lr(_,U,B){U.isScene!==!0&&(U=lt);const O=m.get(_),N=A.state.lights,te=A.state.shadowsArray,le=N.state.version,fe=_e.getParameters(_,N.state,te,U,B),he=_e.getProgramCacheKey(fe);let Ae=O.programs;O.environment=_.isMeshStandardMaterial?U.environment:null,O.fog=U.fog,O.envMap=(_.isMeshStandardMaterial?j:X).get(_.envMap||O.environment),O.envMapRotation=O.environment!==null&&_.envMap===null?U.environmentRotation:_.envMapRotation,Ae===void 0&&(_.addEventListener("dispose",Gt),Ae=new Map,O.programs=Ae);let Re=Ae.get(he);if(Re!==void 0){if(O.currentProgram===Re&&O.lightsStateVersion===le)return xs(_,fe),Re}else fe.uniforms=_e.getUniforms(_),_.onBeforeCompile(fe,v),Re=_e.acquireProgram(fe,he),Ae.set(he,Re),O.uniforms=fe.uniforms;const be=O.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(be.clippingPlanes=Se.uniform),xs(_,fe),O.needsLights=hl(_),O.lightsStateVersion=le,O.needsLights&&(be.ambientLightColor.value=N.state.ambient,be.lightProbe.value=N.state.probe,be.directionalLights.value=N.state.directional,be.directionalLightShadows.value=N.state.directionalShadow,be.spotLights.value=N.state.spot,be.spotLightShadows.value=N.state.spotShadow,be.rectAreaLights.value=N.state.rectArea,be.ltc_1.value=N.state.rectAreaLTC1,be.ltc_2.value=N.state.rectAreaLTC2,be.pointLights.value=N.state.point,be.pointLightShadows.value=N.state.pointShadow,be.hemisphereLights.value=N.state.hemi,be.directionalShadowMap.value=N.state.directionalShadowMap,be.directionalShadowMatrix.value=N.state.directionalShadowMatrix,be.spotShadowMap.value=N.state.spotShadowMap,be.spotLightMatrix.value=N.state.spotLightMatrix,be.spotLightMap.value=N.state.spotLightMap,be.pointShadowMap.value=N.state.pointShadowMap,be.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=Re,O.uniformsList=null,Re}function vs(_){if(_.uniformsList===null){const U=_.currentProgram.getUniforms();_.uniformsList=sa.seqWithValue(U.seq,_.uniforms)}return _.uniformsList}function xs(_,U){const B=m.get(_);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function cl(_,U,B,O,N){U.isScene!==!0&&(U=lt),L.resetTextureUnits();const te=U.fog,le=O.isMeshStandardMaterial?U.environment:null,fe=V===null?v.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:rr,he=(O.isMeshStandardMaterial?j:X).get(O.envMap||le),Ae=O.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!B.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),be=!!B.morphAttributes.position,Be=!!B.morphAttributes.normal,Ze=!!B.morphAttributes.color;let it=Yt;O.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(it=v.toneMapping);const et=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ke=et!==void 0?et.length:0,xe=m.get(O),tt=A.state.lights;if(me===!0&&(we===!0||_!==Z)){const ft=_===Z&&O.id===W;Se.setState(O,_,ft)}let $t=!1;O.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==tt.state.version||xe.outputColorSpace!==fe||N.isBatchedMesh&&xe.batching===!1||!N.isBatchedMesh&&xe.batching===!0||N.isBatchedMesh&&xe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&xe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&xe.instancing===!1||!N.isInstancedMesh&&xe.instancing===!0||N.isSkinnedMesh&&xe.skinning===!1||!N.isSkinnedMesh&&xe.skinning===!0||N.isInstancedMesh&&xe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&xe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&xe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&xe.instancingMorph===!1&&N.morphTexture!==null||xe.envMap!==he||O.fog===!0&&xe.fog!==te||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Se.numPlanes||xe.numIntersection!==Se.numIntersection)||xe.vertexAlphas!==Ae||xe.vertexTangents!==Re||xe.morphTargets!==be||xe.morphNormals!==Be||xe.morphColors!==Ze||xe.toneMapping!==it||xe.morphTargetsCount!==Ke)&&($t=!0):($t=!0,xe.__version=O.version);let Nt=xe.currentProgram;$t===!0&&(Nt=Lr(O,U,N));let Oi=!1,bt=!1,cr=!1;const Je=Nt.getUniforms(),St=xe.uniforms;if(ge.useProgram(Nt.program)&&(Oi=!0,bt=!0,cr=!0),O.id!==W&&(W=O.id,bt=!0),Oi||Z!==_){ge.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),Je.setValue(w,"projectionMatrix",_.projectionMatrix),Je.setValue(w,"viewMatrix",_.matrixWorldInverse);const ft=Je.map.cameraPosition;ft!==void 0&&ft.setValue(w,Ye.setFromMatrixPosition(_.matrixWorld)),qe.logarithmicDepthBuffer&&Je.setValue(w,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Je.setValue(w,"isOrthographic",_.isOrthographicCamera===!0),Z!==_&&(Z=_,bt=!0,cr=!0)}if(xe.needsLights&&(tt.state.directionalShadowMap.length>0&&Je.setValue(w,"directionalShadowMap",tt.state.directionalShadowMap,L),tt.state.spotShadowMap.length>0&&Je.setValue(w,"spotShadowMap",tt.state.spotShadowMap,L),tt.state.pointShadowMap.length>0&&Je.setValue(w,"pointShadowMap",tt.state.pointShadowMap,L)),N.isSkinnedMesh){Je.setOptional(w,N,"bindMatrix"),Je.setOptional(w,N,"bindMatrixInverse");const ft=N.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),Je.setValue(w,"boneTexture",ft.boneTexture,L))}N.isBatchedMesh&&(Je.setOptional(w,N,"batchingTexture"),Je.setValue(w,"batchingTexture",N._matricesTexture,L),Je.setOptional(w,N,"batchingIdTexture"),Je.setValue(w,"batchingIdTexture",N._indirectTexture,L),Je.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&Je.setValue(w,"batchingColorTexture",N._colorsTexture,L));const Rt=B.morphAttributes;if((Rt.position!==void 0||Rt.normal!==void 0||Rt.color!==void 0)&&Oe.update(N,B,Nt),(bt||xe.receiveShadow!==N.receiveShadow)&&(xe.receiveShadow=N.receiveShadow,Je.setValue(w,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(St.envMap.value=he,St.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&U.environment!==null&&(St.envMapIntensity.value=U.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=wp()),bt&&(Je.setValue(w,"toneMappingExposure",v.toneMappingExposure),xe.needsLights&&ul(St,cr),te&&O.fog===!0&&ye.refreshFogUniforms(St,te),ye.refreshMaterialUniforms(St,O,Ue,Ne,A.state.transmissionRenderTarget[_.id]),sa.upload(w,vs(xe),St,L)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(sa.upload(w,vs(xe),St,L),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Je.setValue(w,"center",N.center),Je.setValue(w,"modelViewMatrix",N.modelViewMatrix),Je.setValue(w,"normalMatrix",N.normalMatrix),Je.setValue(w,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const ft=O.uniformsGroups;for(let It=0,Ma=ft.length;It<Ma;It++){const Ei=ft[It];Q.update(Ei,Nt),Q.bind(Ei,Nt)}}return Nt}function ul(_,U){_.ambientLightColor.needsUpdate=U,_.lightProbe.needsUpdate=U,_.directionalLights.needsUpdate=U,_.directionalLightShadows.needsUpdate=U,_.pointLights.needsUpdate=U,_.pointLightShadows.needsUpdate=U,_.spotLights.needsUpdate=U,_.spotLightShadows.needsUpdate=U,_.rectAreaLights.needsUpdate=U,_.hemisphereLights.needsUpdate=U}function hl(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(_,U,B){const O=m.get(_);O.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),m.get(_.texture).__webglTexture=U,m.get(_.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:B,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,U){const B=m.get(_);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const dl=w.createFramebuffer();this.setRenderTarget=function(_,U=0,B=0){V=_,D=U,z=B;let O=null,N=!1,te=!1;if(_){const le=m.get(_);if(le.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(w.FRAMEBUFFER,le.__webglFramebuffer),G.copy(_.viewport),H.copy(_.scissor),J=_.scissorTest,ge.viewport(G),ge.scissor(H),ge.setScissorTest(J),W=-1;return}else if(le.__webglFramebuffer===void 0)L.setupRenderTarget(_);else if(le.__hasExternalTextures)L.rebindTextures(_,m.get(_.texture).__webglTexture,m.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Ae=_.depthTexture;if(le.__boundDepthTexture!==Ae){if(Ae!==null&&m.has(Ae)&&(_.width!==Ae.image.width||_.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(_)}}const fe=_.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(te=!0);const he=m.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(he[U])?O=he[U][B]:O=he[U],N=!0):_.samples>0&&L.useMultisampledRTT(_)===!1?O=m.get(_).__webglMultisampledFramebuffer:Array.isArray(he)?O=he[B]:O=he,G.copy(_.viewport),H.copy(_.scissor),J=_.scissorTest}else G.copy(Y).multiplyScalar(Ue).floor(),H.copy(K).multiplyScalar(Ue).floor(),J=pe;if(B!==0&&(O=dl),ge.bindFramebuffer(w.FRAMEBUFFER,O)&&ge.drawBuffers(_,O),ge.viewport(G),ge.scissor(H),ge.setScissorTest(J),N){const le=m.get(_.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,le.__webglTexture,B)}else if(te){const le=U;for(let fe=0;fe<_.textures.length;fe++){const he=m.get(_.textures[fe]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+fe,he.__webglTexture,B,le)}}else if(_!==null&&B!==0){const le=m.get(_.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,le.__webglTexture,B)}W=-1},this.readRenderTargetPixels=function(_,U,B,O,N,te,le,fe=0){if(!(_&&_.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=m.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&le!==void 0&&(he=he[le]),he){ge.bindFramebuffer(w.FRAMEBUFFER,he);try{const Ae=_.textures[fe],Re=Ae.format,be=Ae.type;if(!qe.textureFormatReadable(Re)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(be)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=_.width-O&&B>=0&&B<=_.height-N&&(_.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+fe),w.readPixels(U,B,O,N,ee.convert(Re),ee.convert(be),te))}finally{const Ae=V!==null?m.get(V).__webglFramebuffer:null;ge.bindFramebuffer(w.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(_,U,B,O,N,te,le,fe=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=m.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&le!==void 0&&(he=he[le]),he)if(U>=0&&U<=_.width-O&&B>=0&&B<=_.height-N){ge.bindFramebuffer(w.FRAMEBUFFER,he);const Ae=_.textures[fe],Re=Ae.format,be=Ae.type;if(!qe.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Be),w.bufferData(w.PIXEL_PACK_BUFFER,te.byteLength,w.STREAM_READ),_.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+fe),w.readPixels(U,B,O,N,ee.convert(Re),ee.convert(be),0);const Ze=V!==null?m.get(V).__webglFramebuffer:null;ge.bindFramebuffer(w.FRAMEBUFFER,Ze);const it=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Zl(w,it,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Be),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,te),w.deleteBuffer(Be),w.deleteSync(it),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,U=null,B=0){const O=Math.pow(2,-B),N=Math.floor(_.image.width*O),te=Math.floor(_.image.height*O),le=U!==null?U.x:0,fe=U!==null?U.y:0;L.setTexture2D(_,0),w.copyTexSubImage2D(w.TEXTURE_2D,B,0,0,le,fe,N,te),ge.unbindTexture()};const fl=w.createFramebuffer(),pl=w.createFramebuffer();this.copyTextureToTexture=function(_,U,B=null,O=null,N=0,te=null){te===null&&(N!==0?(Tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=N,N=0):te=0);let le,fe,he,Ae,Re,be,Be,Ze,it;const et=_.isCompressedTexture?_.mipmaps[te]:_.image;if(B!==null)le=B.max.x-B.min.x,fe=B.max.y-B.min.y,he=B.isBox3?B.max.z-B.min.z:1,Ae=B.min.x,Re=B.min.y,be=B.isBox3?B.min.z:0;else{const Rt=Math.pow(2,-N);le=Math.floor(et.width*Rt),fe=Math.floor(et.height*Rt),_.isDataArrayTexture?he=et.depth:_.isData3DTexture?he=Math.floor(et.depth*Rt):he=1,Ae=0,Re=0,be=0}O!==null?(Be=O.x,Ze=O.y,it=O.z):(Be=0,Ze=0,it=0);const Ke=ee.convert(U.format),xe=ee.convert(U.type);let tt;U.isData3DTexture?(L.setTexture3D(U,0),tt=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(L.setTexture2DArray(U,0),tt=w.TEXTURE_2D_ARRAY):(L.setTexture2D(U,0),tt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const $t=w.getParameter(w.UNPACK_ROW_LENGTH),Nt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Oi=w.getParameter(w.UNPACK_SKIP_PIXELS),bt=w.getParameter(w.UNPACK_SKIP_ROWS),cr=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,et.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,et.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ae),w.pixelStorei(w.UNPACK_SKIP_ROWS,Re),w.pixelStorei(w.UNPACK_SKIP_IMAGES,be);const Je=_.isDataArrayTexture||_.isData3DTexture,St=U.isDataArrayTexture||U.isData3DTexture;if(_.isDepthTexture){const Rt=m.get(_),ft=m.get(U),It=m.get(Rt.__renderTarget),Ma=m.get(ft.__renderTarget);ge.bindFramebuffer(w.READ_FRAMEBUFFER,It.__webglFramebuffer),ge.bindFramebuffer(w.DRAW_FRAMEBUFFER,Ma.__webglFramebuffer);for(let Ei=0;Ei<he;Ei++)Je&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,m.get(_).__webglTexture,N,be+Ei),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,m.get(U).__webglTexture,te,it+Ei)),w.blitFramebuffer(Ae,Re,le,fe,Be,Ze,le,fe,w.DEPTH_BUFFER_BIT,w.NEAREST);ge.bindFramebuffer(w.READ_FRAMEBUFFER,null),ge.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||_.isRenderTargetTexture||m.has(_)){const Rt=m.get(_),ft=m.get(U);ge.bindFramebuffer(w.READ_FRAMEBUFFER,fl),ge.bindFramebuffer(w.DRAW_FRAMEBUFFER,pl);for(let It=0;It<he;It++)Je?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Rt.__webglTexture,N,be+It):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Rt.__webglTexture,N),St?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ft.__webglTexture,te,it+It):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ft.__webglTexture,te),N!==0?w.blitFramebuffer(Ae,Re,le,fe,Be,Ze,le,fe,w.COLOR_BUFFER_BIT,w.NEAREST):St?w.copyTexSubImage3D(tt,te,Be,Ze,it+It,Ae,Re,le,fe):w.copyTexSubImage2D(tt,te,Be,Ze,Ae,Re,le,fe);ge.bindFramebuffer(w.READ_FRAMEBUFFER,null),ge.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else St?_.isDataTexture||_.isData3DTexture?w.texSubImage3D(tt,te,Be,Ze,it,le,fe,he,Ke,xe,et.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(tt,te,Be,Ze,it,le,fe,he,Ke,et.data):w.texSubImage3D(tt,te,Be,Ze,it,le,fe,he,Ke,xe,et):_.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,te,Be,Ze,le,fe,Ke,xe,et.data):_.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,te,Be,Ze,et.width,et.height,Ke,et.data):w.texSubImage2D(w.TEXTURE_2D,te,Be,Ze,le,fe,Ke,xe,et);w.pixelStorei(w.UNPACK_ROW_LENGTH,$t),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Nt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Oi),w.pixelStorei(w.UNPACK_SKIP_ROWS,bt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,cr),te===0&&U.generateMipmaps&&w.generateMipmap(tt),ge.unbindTexture()},this.initRenderTarget=function(_){m.get(_).__webglFramebuffer===void 0&&L.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?L.setTextureCube(_,0):_.isData3DTexture?L.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?L.setTexture2DArray(_,0):L.setTexture2D(_,0),ge.unbindTexture()},this.resetState=function(){D=0,z=0,V=null,ge.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}const Cp=document.getElementById("canvas-container"),rl=new Mc,Er=new Lt(75,window.innerWidth/window.innerHeight,.1,1e3);Er.position.set(0,0,200);const or=new Rp({antialias:!0,alpha:!0});or.setSize(window.innerWidth,window.innerHeight);or.setPixelRatio(Math.min(window.devicePixelRatio,2));Cp.appendChild(or.domElement);const lr=15e3,hs=new Ht,oa=new Float32Array(lr*3),la=new Float32Array(lr*3),Qi=new Float32Array(lr*3),xo=[new He(16777215),new He(15066597),new He(12568012),new He(9080985)];for(let r=0;r<lr;r++){const e=r*3,t=Math.random()*150,i=Math.random()*Math.PI*2,a=Math.acos(Math.random()*2-1),n=t*Math.sin(a)*Math.cos(i),s=t*Math.sin(a)*Math.sin(i),o=t*Math.cos(a);oa[e]=n,oa[e+1]=s,oa[e+2]=o;const c=xo[Math.floor(Math.random()*xo.length)];la[e]=c.r,la[e+1]=c.g,la[e+2]=c.b}hs.setAttribute("position",new Ut(oa,3));hs.setAttribute("color",new Ut(la,3));const Pp=new Zo({size:.7,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:en}),ca=new bc(hs,Pp);rl.add(ca);function Lp(r){const e=document.createElement("canvas"),t=e.getContext("2d"),i="bold 100px Arial";t.font=i;const a=t.measureText(r);e.width=Math.ceil(a.width),e.height=120,t.font=i,t.fillStyle="#fff",t.fillText(r,0,100);const n=t.getImageData(0,0,e.width,e.height),s=[];for(let o=0;o<n.height;o++)for(let c=0;c<n.width;c++)n.data[(o*n.width+c)*4+3]>128&&s.push({x:c-e.width/2,y:-(o-e.height/2)});return s}const Mo=Lp("LUMORC");for(let r=0;r<lr;r++){const e=r*3,t=Mo[r%Mo.length];Qi[e]=t.x,Qi[e+1]=t.y,Qi[e+2]=(Math.random()-.5)*10}const $a=new Xe,$n=new I,So=new Lc,Dp=new xi(new I(0,0,1),0);function al(r){const e=or.domElement.getBoundingClientRect(),t=(r.clientX-e.left)/e.width,i=(r.clientY-e.top)/e.height;$a.x=t*2-1,$a.y=-(i*2-1),So.setFromCamera($a,Er),So.ray.intersectPlane(Dp,$n)}window.addEventListener("mousemove",al);window.addEventListener("touchmove",r=>al(r.touches[0]),{passive:!0});let _r=0,Qa=0;function nl(){requestAnimationFrame(nl),_r=Math.min(_r+.01,1),Qa+=.01;const r=ca.geometry.attributes.position.array;for(let e=0;e<lr;e++){const t=e*3;r[t]+=(Qi[t]-r[t])*.04*_r,r[t+1]+=(Qi[t+1]-r[t+1])*.04*_r,r[t+2]+=(Qi[t+2]-r[t+2])*.04*_r;const i=r[t]-$n.x,a=r[t+1]-$n.y,n=Math.sqrt(i*i+a*a);if(n<40){const s=(1-n/40)*4;r[t]+=i*.1*s,r[t+1]+=a*.1*s}r[t+2]+=Math.sin(Qa+e*.01)*.05}ca.geometry.attributes.position.needsUpdate=!0,ca.rotation.y=Math.sin(Qa*.1)*.1,or.render(rl,Er)}nl();window.addEventListener("resize",()=>{Er.aspect=window.innerWidth/window.innerHeight,Er.updateProjectionMatrix(),or.setSize(window.innerWidth,window.innerHeight)});const Up=document.querySelectorAll(".fade-in"),sl=new IntersectionObserver(r=>{r.forEach(e=>{e.isIntersecting&&(e.target.classList.add("visible"),sl.unobserve(e.target))})},{threshold:.1});Up.forEach(r=>sl.observe(r));
