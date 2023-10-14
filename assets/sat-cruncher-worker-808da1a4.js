(function(){"use strict";/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var W0=Math.PI,$=W0*2,m2=W0/180,J2=398600.8,G0=6378.135,K0=60/Math.sqrt(G0*G0*G0/J2),q2=G0*K0/60,K2=1/K0,_0=.001082616,V2=-253881e-11,X2=-165597e-11,$0=V2/_0,l2=2/3;function _2(a,v){for(var h=[31,a%4===0?29:28,31,30,31,30,31,31,30,31,30,31],m=Math.floor(v),x=1,o=0;m>o+h[x-1]&&x<12;)o+=h[x-1],x+=1;var e=x,d=m-o,i=(v-m)*24,b=Math.floor(i);i=(i-b)*60;var g=Math.floor(i),p=(i-g)*60;return{mon:e,day:d,hr:b,minute:g,sec:p}}function k2(a,v,h,m,x,o){var e=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*a-Math.floor(7*(a+Math.floor((v+9)/12))*.25)+Math.floor(275*v/9)+h+17210135e-1+((e/6e4+o/60+x)/60+m)/24}function A2(a,v,h,m,x,o,e){if(a instanceof Date){var d=a;return k2(d.getUTCFullYear(),d.getUTCMonth()+1,d.getUTCDate(),d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds())}return k2(a,v,h,m,x,o,e)}function P2(a,v){var h=a.e3,m=a.ee2,x=a.peo,o=a.pgho,e=a.pho,d=a.pinco,i=a.plo,b=a.se2,g=a.se3,p=a.sgh2,C=a.sgh3,I=a.sgh4,Q=a.sh2,h0=a.sh3,Y=a.si2,G=a.si3,R=a.sl2,N=a.sl3,W=a.sl4,j=a.t,l=a.xgh2,q=a.xgh3,k=a.xgh4,S=a.xh2,c=a.xh3,O=a.xi2,u=a.xi3,d0=a.xl2,J=a.xl3,a0=a.xl4,M=a.zmol,i0=a.zmos,K=v.init,B=v.opsmode,m0=v.ep,v0=v.inclp,z=v.nodep,q0=v.argpp,l0=v.mp,r,f,H,s,X,P,w0,o0,f0,A,U,Z,D,T,F,w,y,V,_,L,t,z0=119459e-10,g0=.01675,A0=.00015835218,b0=.0549;t=i0+z0*j,K==="y"&&(t=i0),L=t+2*g0*Math.sin(t),y=Math.sin(L),A=.5*y*y-.25,U=-.5*y*Math.cos(L);var T0=b*A+g*U,D0=Y*A+G*U,e0=R*A+N*U+W*y,x0=p*A+C*U+I*y,p0=Q*A+h0*U;t=M+A0*j,K==="y"&&(t=M),L=t+2*b0*Math.sin(t),y=Math.sin(L),A=.5*y*y-.25,U=-.5*y*Math.cos(L);var j0=m*A+h*U,U0=O*A+u*U,n0=d0*A+J*U+a0*y,M0=l*A+q*U+k*y,B0=S*A+c*U;return Z=T0+j0,F=D0+U0,w=e0+n0,D=x0+M0,T=p0+B0,K==="n"&&(Z-=x,F-=d,w-=i,D-=o,T-=e,v0+=F,m0+=Z,s=Math.sin(v0),H=Math.cos(v0),v0>=.2?(T/=s,D-=H*T,q0+=D,z+=T,l0+=w):(P=Math.sin(z),X=Math.cos(z),r=s*P,f=s*X,w0=T*X+F*H*P,o0=-T*P+F*H*X,r+=w0,f+=o0,z%=$,z<0&&B==="a"&&(z+=$),V=l0+q0+H*z,f0=w+D-F*z*s,V+=f0,_=z,z=Math.atan2(r,f),z<0&&B==="a"&&(z+=$),Math.abs(_-z)>W0&&(z<_?z+=$:z-=$),l0+=w,q0=V-l0-H*z)),{ep:m0,inclp:v0,nodep:z,argpp:q0,mp:l0}}function $2(a){var v=a.epoch,h=a.ep,m=a.argpp,x=a.tc,o=a.inclp,e=a.nodep,d=a.np,i,b,g,p,C,I,Q,h0,Y,G,R,N,W,j,l,q,k,S,c,O,u,d0,J,a0,M,i0,K,B,m0,v0,z,q0,l0,r,f,H,s,X,P,w0,o0,f0,A,U,Z,D,T,F,w,y,V,_,L,t,z0,g0,A0,b0,T0,D0,e0,x0,p0,j0=.01675,U0=.0549,n0=29864797e-13,M0=47968065e-14,B0=.39785416,C0=.91744867,y0=.1945905,V0=-.98088458,E0=d,H0=h,O0=Math.sin(e),N0=Math.cos(e),s0=Math.sin(m),F0=Math.cos(m),k0=Math.sin(o),Y0=Math.cos(o),n=H0*H0,P0=1-n,L0=Math.sqrt(P0),c0=0,E=0,d2=0,f2=0,z2=0,X0=v+18261.5+x/1440,J0=(4.523602-.00092422029*X0)%$,u0=Math.sin(J0),t0=Math.cos(J0),i2=.91375164-.03568096*t0,r2=Math.sqrt(1-i2*i2),I0=.089683511*u0/r2,S0=Math.sqrt(1-I0*I0),r0=5.8351514+.001944368*X0,a2=.39785416*u0/r2,s2=S0*t0+.91744867*I0*u0;a2=Math.atan2(a2,s2),a2+=r0-J0;var T2=Math.cos(a2),D2=Math.sin(a2);O=y0,u=V0,a0=C0,M=B0,d0=N0,J=O0,R=n0;for(var I2=1/E0,e2=0;e2<2;)e2+=1,i=O*d0+u*a0*J,g=-u*d0+O*a0*J,Q=-O*J+u*a0*d0,h0=u*M,Y=u*J+O*a0*d0,G=O*M,b=Y0*Q+k0*h0,p=Y0*Y+k0*G,C=-k0*Q+Y0*h0,I=-k0*Y+Y0*G,N=i*F0+b*s0,W=g*F0+p*s0,j=-i*s0+b*F0,l=-g*s0+p*F0,q=C*s0,k=I*s0,S=C*F0,c=I*F0,e0=12*N*N-3*j*j,x0=24*N*W-6*j*l,p0=12*W*W-3*l*l,_=3*(i*i+b*b)+e0*n,L=6*(i*g+b*p)+x0*n,t=3*(g*g+p*p)+p0*n,z0=-6*i*C+n*(-24*N*S-6*j*q),g0=-6*(i*I+g*C)+n*(-24*(W*S+N*c)+-6*(j*k+l*q)),A0=-6*g*I+n*(-24*W*c-6*l*k),b0=6*b*C+n*(24*N*q-6*j*S),T0=6*(p*C+b*I)+n*(24*(W*q+N*k)-6*(l*S+j*c)),D0=6*p*I+n*(24*W*k-6*l*c),_=_+_+P0*e0,L=L+L+P0*x0,t=t+t+P0*p0,T=R*I2,D=-.5*T/L0,F=T*L0,Z=-15*H0*F,w=N*j+W*l,y=W*j+N*l,V=W*l-N*j,e2===1&&(i0=Z,K=D,B=T,m0=F,v0=w,z=y,q0=V,l0=_,r=L,f=t,H=z0,s=g0,X=A0,P=b0,w0=T0,o0=D0,f0=e0,A=x0,U=p0,O=T2,u=D2,a0=i2,M=r2,d0=S0*N0+I0*O0,J=O0*S0-N0*I0,R=M0);var p2=(4.7199672+(.2299715*X0-r0))%$,S2=(6.2565837+.017201977*X0)%$,U2=2*i0*z,v2=2*i0*q0,o2=2*K*s,F2=2*K*(X-H),C2=-2*B*r,G2=-2*B*(f-l0),j2=-2*B*(-21-9*n)*j0,h2=2*m0*A,L2=2*m0*(U-f0),E2=-18*m0*j0,M2=-2*K*w0,u2=-2*K*(o0-P),y2=2*Z*y,O2=2*Z*V,N2=2*D*g0,r1=2*D*(A0-z0),h1=-2*T*L,m1=-2*T*(t-_),l1=-2*T*(-21-9*n)*U0,g1=2*F*x0,x1=2*F*(p0-e0),f1=-18*F*U0,z1=-2*D*T0,e1=-2*D*(D0-b0);return{snodm:O0,cnodm:N0,sinim:k0,cosim:Y0,sinomm:s0,cosomm:F0,day:X0,e3:O2,ee2:y2,em:H0,emsq:n,gam:r0,peo:c0,pgho:f2,pho:z2,pinco:E,plo:d2,rtemsq:L0,se2:U2,se3:v2,sgh2:h2,sgh3:L2,sgh4:E2,sh2:M2,sh3:u2,si2:o2,si3:F2,sl2:C2,sl3:G2,sl4:j2,s1:Z,s2:D,s3:T,s4:F,s5:w,s6:y,s7:V,ss1:i0,ss2:K,ss3:B,ss4:m0,ss5:v0,ss6:z,ss7:q0,sz1:l0,sz2:r,sz3:f,sz11:H,sz12:s,sz13:X,sz21:P,sz22:w0,sz23:o0,sz31:f0,sz32:A,sz33:U,xgh2:g1,xgh3:x1,xgh4:f1,xh2:z1,xh3:e1,xi2:N2,xi3:r1,xl2:h1,xl3:m1,xl4:l1,nm:E0,z1:_,z2:L,z3:t,z11:z0,z12:g0,z13:A0,z21:b0,z22:T0,z23:D0,z31:e0,z32:x0,z33:p0,zmol:p2,zmos:S2}}function Q2(a){var v=a.cosim,h=a.argpo,m=a.s1,x=a.s2,o=a.s3,e=a.s4,d=a.s5,i=a.sinim,b=a.ss1,g=a.ss2,p=a.ss3,C=a.ss4,I=a.ss5,Q=a.sz1,h0=a.sz3,Y=a.sz11,G=a.sz13,R=a.sz21,N=a.sz23,W=a.sz31,j=a.sz33,l=a.t,q=a.tc,k=a.gsto,S=a.mo,c=a.mdot,O=a.no,u=a.nodeo,d0=a.nodedot,J=a.xpidot,a0=a.z1,M=a.z3,i0=a.z11,K=a.z13,B=a.z21,m0=a.z23,v0=a.z31,z=a.z33,q0=a.ecco,l0=a.eccsq,r=a.emsq,f=a.em,H=a.argpm,s=a.inclm,X=a.mm,P=a.nm,w0=a.nodem,o0=a.irez,f0=a.atime,A=a.d2201,U=a.d2211,Z=a.d3210,D=a.d3222,T=a.d4410,F=a.d4422,w=a.d5220,y=a.d5232,V=a.d5421,_=a.d5433,L=a.dedt,t=a.didt,z0=a.dmdt,g0=a.dnodt,A0=a.domdt,b0=a.del1,T0=a.del2,D0=a.del3,e0=a.xfact,x0=a.xlamo,p0=a.xli,j0=a.xni,U0,n0,M0,B0,C0,y0,V0,E0,H0,O0,N0,s0,F0,k0,Y0,n,P0,L0,c0,E,d2,f2,z2,X0,J0,u0,t0,i2,r2,I0,S0,r0,a2=17891679e-13,s2=21460748e-13,T2=22123015e-14,D2=17891679e-13,I2=73636953e-16,e2=21765803e-16,p2=.0043752690880113,S2=37393792e-14,U2=11428639e-14,v2=.00015835218,o2=119459e-10;o0=0,P<.0052359877&&P>.0034906585&&(o0=1),P>=.00826&&P<=.00924&&f>=.5&&(o0=2);var F2=b*o2*I,C2=g*o2*(Y+G),G2=-o2*p*(Q+h0-14-6*r),j2=C*o2*(W+j-6),h2=-o2*g*(R+N);(s<.052359877||s>W0-.052359877)&&(h2=0),i!==0&&(h2/=i);var L2=j2-v*h2;L=F2+m*v2*d,t=C2+x*v2*(i0+K),z0=G2-v2*o*(a0+M-14-6*r);var E2=e*v2*(v0+z-6),M2=-v2*x*(B+m0);(s<.052359877||s>W0-.052359877)&&(M2=0),A0=L2+E2,g0=h2,i!==0&&(A0-=v/i*M2,g0+=M2/i);var u2=0,y2=(k+q*p2)%$;if(f+=L*l,s+=t*l,H+=A0*l,w0+=g0*l,X+=z0*l,o0!==0){if(I0=Math.pow(P/K0,l2),o0===2){S0=v*v;var O2=f;f=q0;var N2=r;r=l0,r0=f*r,k0=-.306-(f-.64)*.44,f<=.65?(Y0=3.616-13.247*f+16.29*r,P0=-19.302+117.39*f-228.419*r+156.591*r0,L0=-18.9068+109.7927*f-214.6334*r+146.5816*r0,c0=-41.122+242.694*f-471.094*r+313.953*r0,E=-146.407+841.88*f-1629.014*r+1083.435*r0,d2=-532.114+3017.977*f-5740.032*r+3708.276*r0):(Y0=-72.099+331.819*f-508.738*r+266.724*r0,P0=-346.844+1582.851*f-2415.925*r+1246.113*r0,L0=-342.585+1554.908*f-2366.899*r+1215.972*r0,c0=-1052.797+4758.686*f-7193.992*r+3651.957*r0,E=-3581.69+16178.11*f-24462.77*r+12422.52*r0,f>.715?d2=-5149.66+29936.92*f-54087.36*r+31324.56*r0:d2=1464.74-4664.75*f+3763.64*r),f<.7?(X0=-919.2277+4988.61*f-9064.77*r+5542.21*r0,f2=-822.71072+4568.6173*f-8491.4146*r+5337.524*r0,z2=-853.666+4690.25*f-8624.77*r+5341.4*r0):(X0=-37995.78+161616.52*f-229838.2*r+109377.94*r0,f2=-51752.104+218913.95*f-309468.16*r+146349.42*r0,z2=-40023.88+170470.89*f-242699.48*r+115605.82*r0),J0=i*i,U0=.75*(1+2*v+S0),n0=1.5*J0,B0=1.875*i*(1-2*v-3*S0),C0=-1.875*i*(1+2*v-3*S0),V0=35*J0*U0,E0=39.375*J0*J0,H0=9.84375*i*(J0*(1-2*v-5*S0)+.33333333*(-2+4*v+6*S0)),O0=i*(4.92187512*J0*(-2-4*v+10*S0)+6.56250012*(1+2*v-3*S0)),N0=29.53125*i*(2-8*v+S0*(-12+8*v+10*S0)),s0=29.53125*i*(-2-8*v+S0*(12+8*v-10*S0)),i2=P*P,r2=I0*I0,t0=3*i2*r2,u0=t0*D2,A=u0*U0*k0,U=u0*n0*Y0,t0*=I0,u0=t0*S2,Z=u0*B0*P0,D=u0*C0*L0,t0*=I0,u0=2*t0*I2,T=u0*V0*c0,F=u0*E0*E,t0*=I0,u0=t0*U2,w=u0*H0*d2,y=u0*O0*z2,u0=2*t0*e2,V=u0*N0*f2,_=u0*s0*X0,x0=(S+u+u-(y2+y2))%$,e0=c+z0+2*(d0+g0-p2)-O,f=O2,r=N2}o0===1&&(F0=1+r*(-2.5+.8125*r),P0=1+2*r,n=1+r*(-6+6.60937*r),U0=.75*(1+v)*(1+v),M0=.9375*i*i*(1+3*v)-.75*(1+v),y0=1+v,y0*=1.875*y0*y0,b0=3*P*P*I0*I0,T0=2*b0*U0*F0*a2,D0=3*b0*y0*n*T2*I0,b0=b0*M0*P0*s2*I0,x0=(S+u+h-y2)%$,e0=c+J+z0+A0+g0-(O+p2)),p0=x0,j0=O,f0=0,P=O+u2}return{em:f,argpm:H,inclm:s,mm:X,nm:P,nodem:w0,irez:o0,atime:f0,d2201:A,d2211:U,d3210:Z,d3222:D,d4410:T,d4422:F,d5220:w,d5232:y,d5421:V,d5433:_,dedt:L,didt:t,dmdt:z0,dndt:u2,dnodt:g0,domdt:A0,del1:b0,del2:T0,del3:D0,xfact:e0,xlamo:x0,xli:p0,xni:j0}}function t2(a){var v=(a-2451545)/36525,h=-62e-7*v*v*v+.093104*v*v+(876600*3600+8640184812866e-6)*v+67310.54841;return h=h*m2/240%$,h<0&&(h+=$),h}function W2(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?t2(A2.apply(void 0,arguments)):t2.apply(void 0,arguments)}function Z2(a){var v=a.ecco,h=a.epoch,m=a.inclo,x=a.opsmode,o=a.no,e=v*v,d=1-e,i=Math.sqrt(d),b=Math.cos(m),g=b*b,p=Math.pow(K0/o,l2),C=.75*_0*(3*g-1)/(i*d),I=C/(p*p),Q=p*(1-I*I-I*(1/3+134*I*I/81));I=C/(Q*Q),o/=1+I;var h0=Math.pow(K0/o,l2),Y=Math.sin(m),G=h0*d,R=1-5*g,N=-R-g-g,W=1/h0,j=G*G,l=h0*(1-v),q="n",k;if(x==="a"){var S=h-7305,c=Math.floor(S+1e-8),O=S-c,u=.017202791694070362,d0=1.7321343856509375,J=5075514194322695e-30,a0=u+$;k=(d0+u*c+a0*O+S*S*J)%$,k<0&&(k+=$)}else k=W2(h+24332815e-1);return{no:o,method:q,ainv:W,ao:h0,con41:N,con42:R,cosio:b,cosio2:g,eccsq:e,omeosq:d,posq:j,rp:l,rteosq:i,sinio:Y,gsto:k}}function R2(a){var v=a.irez,h=a.d2201,m=a.d2211,x=a.d3210,o=a.d3222,e=a.d4410,d=a.d4422,i=a.d5220,b=a.d5232,g=a.d5421,p=a.d5433,C=a.dedt,I=a.del1,Q=a.del2,h0=a.del3,Y=a.didt,G=a.dmdt,R=a.dnodt,N=a.domdt,W=a.argpo,j=a.argpdot,l=a.t,q=a.tc,k=a.gsto,S=a.xfact,c=a.xlamo,O=a.no,u=a.atime,d0=a.em,J=a.argpm,a0=a.inclm,M=a.xli,i0=a.mm,K=a.xni,B=a.nodem,m0=a.nm,v0=.13130908,z=2.8843198,q0=.37448087,l0=5.7686396,r=.95240898,f=1.8014998,H=1.050833,s=4.4108898,X=.0043752690880113,P=720,w0=-720,o0=259200,f0,A,U,Z,D,T,F,w,y=0,V=0,_=(k+q*X)%$;if(d0+=C*l,a0+=Y*l,J+=N*l,B+=R*l,i0+=G*l,v!==0){(u===0||l*u<=0||Math.abs(l)<Math.abs(u))&&(u=0,K=O,M=c),l>0?f0=P:f0=w0;for(var L=381;L===381;)v!==2?(F=I*Math.sin(M-v0)+Q*Math.sin(2*(M-z))+h0*Math.sin(3*(M-q0)),D=K+S,T=I*Math.cos(M-v0)+2*Q*Math.cos(2*(M-z))+3*h0*Math.cos(3*(M-q0)),T*=D):(w=W+j*u,U=w+w,A=M+M,F=h*Math.sin(U+M-l0)+m*Math.sin(M-l0)+x*Math.sin(w+M-r)+o*Math.sin(-w+M-r)+e*Math.sin(U+A-f)+d*Math.sin(A-f)+i*Math.sin(w+M-H)+b*Math.sin(-w+M-H)+g*Math.sin(w+A-s)+p*Math.sin(-w+A-s),D=K+S,T=h*Math.cos(U+M-l0)+m*Math.cos(M-l0)+x*Math.cos(w+M-r)+o*Math.cos(-w+M-r)+i*Math.cos(w+M-H)+b*Math.cos(-w+M-H)+2*(e*Math.cos(U+A-f)+d*Math.cos(A-f)+g*Math.cos(w+A-s)+p*Math.cos(-w+A-s)),T*=D),Math.abs(l-u)>=P?L=381:(V=l-u,L=0),L===381&&(M+=D*f0+F*o0,K+=F*f0+T*o0,u+=f0);m0=K+F*V+T*V*V*.5,Z=M+D*V+F*V*V*.5,v!==1?(i0=Z-2*B+2*_,y=m0-O):(i0=Z-B-J+_,y=m0-O),m0=O+y}return{atime:u,em:d0,argpm:J,inclm:a0,xli:M,mm:i0,xni:K,nodem:B,dndt:y,nm:m0}}function B2(a,v){var h,m,x,o,e,d,i,b,g,p,C,I,Q,h0,Y,G,R,N,W,j,l,q,k,S,c,O,u,d0=15e-13;a.t=v,a.error=0;var J=a.mo+a.mdot*a.t,a0=a.argpo+a.argpdot*a.t,M=a.nodeo+a.nodedot*a.t;g=a0,l=J;var i0=a.t*a.t;if(k=M+a.nodecf*i0,R=1-a.cc1*a.t,N=a.bstar*a.cc4*a.t,W=a.t2cof*i0,a.isimp!==1){i=a.omgcof*a.t;var K=1+a.eta*Math.cos(J);d=a.xmcof*(K*K*K-a.delmo),G=i+d,l=J+G,g=a0-G,I=i0*a.t,Q=I*a.t,R=R-a.d2*i0-a.d3*I-a.d4*Q,N+=a.bstar*a.cc5*(Math.sin(l)-a.sinmao),W=W+a.t3cof*I+Q*(a.t4cof+a.t*a.t5cof)}q=a.no;var B=a.ecco;if(j=a.inclo,a.method==="d"){h0=a.t;var m0={irez:a.irez,d2201:a.d2201,d2211:a.d2211,d3210:a.d3210,d3222:a.d3222,d4410:a.d4410,d4422:a.d4422,d5220:a.d5220,d5232:a.d5232,d5421:a.d5421,d5433:a.d5433,dedt:a.dedt,del1:a.del1,del2:a.del2,del3:a.del3,didt:a.didt,dmdt:a.dmdt,dnodt:a.dnodt,domdt:a.domdt,argpo:a.argpo,argpdot:a.argpdot,t:a.t,tc:h0,gsto:a.gsto,xfact:a.xfact,xlamo:a.xlamo,no:a.no,atime:a.atime,em:B,argpm:g,inclm:j,xli:a.xli,mm:l,xni:a.xni,nodem:k,nm:q},v0=R2(m0);B=v0.em,g=v0.argpm,j=v0.inclm,l=v0.mm,k=v0.nodem,q=v0.nm}if(q<=0)return a.error=2,[!1,!1];var z=Math.pow(K0/q,l2)*R*R;if(q=K0/Math.pow(z,1.5),B-=N,B>=1||B<-.001)return a.error=1,[!1,!1];B<1e-6&&(B=1e-6),l+=a.no*W,c=l+g+k,k%=$,g%=$,c%=$,l=(c-g-k)%$;var q0=Math.sin(j),l0=Math.cos(j),r=B;if(S=j,p=g,u=k,O=l,o=q0,x=l0,a.method==="d"){var f={inclo:a.inclo,init:"n",ep:r,inclp:S,nodep:u,argpp:p,mp:O,opsmode:a.operationmode},H=P2(a,f);if(r=H.ep,u=H.nodep,p=H.argpp,O=H.mp,S=H.inclp,S<0&&(S=-S,u+=W0,p-=W0),r<0||r>1)return a.error=3,[!1,!1]}a.method==="d"&&(o=Math.sin(S),x=Math.cos(S),a.aycof=-.5*$0*o,Math.abs(x+1)>15e-13?a.xlcof=-.25*$0*o*(3+5*x)/(1+x):a.xlcof=-.25*$0*o*(3+5*x)/d0);var s=r*Math.cos(p);G=1/(z*(1-r*r));var X=r*Math.sin(p)+G*a.aycof,P=O+p+u+G*a.xlcof*s,w0=(P-u)%$;b=w0,Y=9999.9;for(var o0=1;Math.abs(Y)>=1e-12&&o0<=10;)m=Math.sin(b),h=Math.cos(b),Y=1-h*s-m*X,Y=(w0-X*h+s*m-b)/Y,Math.abs(Y)>=.95&&(Y>0?Y=.95:Y=-.95),b+=Y,o0+=1;var f0=s*h+X*m,A=s*m-X*h,U=s*s+X*X,Z=z*(1-U);if(Z<0)return a.error=4,[!1,!1];var D=z*(1-f0),T=Math.sqrt(z)*A/D,F=Math.sqrt(Z)/D,w=Math.sqrt(1-U);G=A/(1+w);var y=z/D*(m-X-s*G),V=z/D*(h-s+X*G);C=Math.atan2(y,V);var _=(V+V)*y,L=1-2*y*y;G=1/Z;var t=.5*_0*G,z0=t*G;a.method==="d"&&(e=x*x,a.con41=3*e-1,a.x1mth2=1-e,a.x7thm1=7*e-1);var g0=D*(1-1.5*z0*w*a.con41)+.5*t*a.x1mth2*L;if(g0<1)return a.error=6,{position:!1,velocity:!1};C-=.25*z0*a.x7thm1*_;var A0=u+1.5*z0*x*_,b0=S+1.5*z0*x*o*L,T0=T-q*t*a.x1mth2*_/K0,D0=F+q*t*(a.x1mth2*L+1.5*a.con41)/K0,e0=Math.sin(C),x0=Math.cos(C),p0=Math.sin(A0),j0=Math.cos(A0),U0=Math.sin(b0),n0=Math.cos(b0),M0=-p0*n0,B0=j0*n0,C0=M0*e0+j0*x0,y0=B0*e0+p0*x0,V0=U0*e0,E0=M0*x0-j0*e0,H0=B0*x0-p0*e0,O0=U0*x0,N0={x:g0*C0*G0,y:g0*y0*G0,z:g0*V0*G0},s0={x:(T0*C0+D0*E0)*q2,y:(T0*y0+D0*H0)*q2,z:(T0*V0+D0*O0)*q2};return{position:N0,velocity:s0}}function c2(a,v){var h=v.opsmode,m=v.satn,x=v.epoch,o=v.xbstar,e=v.xecco,d=v.xargpo,i=v.xinclo,b=v.xmo,g=v.xno,p=v.xnodeo,C,I,Q,h0,Y,G,R,N,W,j,l,q,k,S,c,O,u,d0,J,a0,M,i0,K,B,m0,v0,z,q0,l0,r,f,H,s,X,P,w0,o0,f0,A,U,Z,D,T,F,w,y,V,_,L,t,z0,g0,A0,b0,T0,D0,e0=15e-13;a.isimp=0,a.method="n",a.aycof=0,a.con41=0,a.cc1=0,a.cc4=0,a.cc5=0,a.d2=0,a.d3=0,a.d4=0,a.delmo=0,a.eta=0,a.argpdot=0,a.omgcof=0,a.sinmao=0,a.t=0,a.t2cof=0,a.t3cof=0,a.t4cof=0,a.t5cof=0,a.x1mth2=0,a.x7thm1=0,a.mdot=0,a.nodedot=0,a.xlcof=0,a.xmcof=0,a.nodecf=0,a.irez=0,a.d2201=0,a.d2211=0,a.d3210=0,a.d3222=0,a.d4410=0,a.d4422=0,a.d5220=0,a.d5232=0,a.d5421=0,a.d5433=0,a.dedt=0,a.del1=0,a.del2=0,a.del3=0,a.didt=0,a.dmdt=0,a.dnodt=0,a.domdt=0,a.e3=0,a.ee2=0,a.peo=0,a.pgho=0,a.pho=0,a.pinco=0,a.plo=0,a.se2=0,a.se3=0,a.sgh2=0,a.sgh3=0,a.sgh4=0,a.sh2=0,a.sh3=0,a.si2=0,a.si3=0,a.sl2=0,a.sl3=0,a.sl4=0,a.gsto=0,a.xfact=0,a.xgh2=0,a.xgh3=0,a.xgh4=0,a.xh2=0,a.xh3=0,a.xi2=0,a.xi3=0,a.xl2=0,a.xl3=0,a.xl4=0,a.xlamo=0,a.zmol=0,a.zmos=0,a.atime=0,a.xli=0,a.xni=0,a.bstar=o,a.ecco=e,a.argpo=d,a.inclo=i,a.mo=b,a.no=g,a.nodeo=p,a.operationmode=h;var x0=78/G0+1,p0=(120-78)/G0,j0=p0*p0*p0*p0;a.init="y",a.t=0;var U0={satn:m,ecco:a.ecco,epoch:x,inclo:a.inclo,no:a.no,method:a.method,opsmode:a.operationmode},n0=Z2(U0),M0=n0.ao,B0=n0.con42,C0=n0.cosio,y0=n0.cosio2,V0=n0.eccsq,E0=n0.omeosq,H0=n0.posq,O0=n0.rp,N0=n0.rteosq,s0=n0.sinio;if(a.no=n0.no,a.con41=n0.con41,a.gsto=n0.gsto,a.a=Math.pow(a.no*K2,-2/3),a.alta=a.a*(1+a.ecco)-1,a.altp=a.a*(1-a.ecco)-1,a.error=0,E0>=0||a.no>=0){if(a.isimp=0,O0<220/G0+1&&(a.isimp=1),z=x0,M=j0,d0=(O0-1)*G0,d0<156){z=d0-78,d0<98&&(z=20);var F0=(120-z)/G0;M=F0*F0*F0*F0,z=z/G0+1}J=1/H0,y=1/(M0-z),a.eta=M0*a.ecco*y,q=a.eta*a.eta,l=a.ecco*a.eta,a0=Math.abs(1-q),G=M*Math.pow(y,4),R=G/Math.pow(a0,3.5),h0=R*a.no*(M0*(1+1.5*q+l*(4+q))+.375*_0*y/a0*a.con41*(8+3*q*(8+q))),a.cc1=a.bstar*h0,Y=0,a.ecco>1e-4&&(Y=-2*G*y*$0*a.no*s0/a.ecco),a.x1mth2=1-y0,a.cc4=2*a.no*R*M0*E0*(a.eta*(2+.5*q)+a.ecco*(.5+2*q)-_0*y/(M0*a0)*(-3*a.con41*(1-2*l+q*(1.5-.5*l))+.75*a.x1mth2*(2*q-l*(1+q))*Math.cos(2*a.argpo))),a.cc5=2*R*M0*E0*(1+2.75*(q+l)+l*q),N=y0*y0,T=1.5*_0*J*a.no,F=.5*T*_0*J,w=-.46875*X2*J*J*a.no,a.mdot=a.no+.5*T*N0*a.con41+.0625*F*N0*(13-78*y0+137*N),a.argpdot=-.5*T*B0+.0625*F*(7-114*y0+395*N)+w*(3-36*y0+49*N),_=-T*C0,a.nodedot=_+(.5*F*(4-19*y0)+2*w*(3-7*y0))*C0,V=a.argpdot+a.nodedot,a.omgcof=a.bstar*Y*Math.cos(a.argpo),a.xmcof=0,a.ecco>1e-4&&(a.xmcof=-l2*G*a.bstar/l),a.nodecf=3.5*E0*_*a.cc1,a.t2cof=1.5*a.cc1,Math.abs(C0+1)>15e-13?a.xlcof=-.25*$0*s0*(3+5*C0)/(1+C0):a.xlcof=-.25*$0*s0*(3+5*C0)/e0,a.aycof=-.5*$0*s0;var k0=1+a.eta*Math.cos(a.mo);if(a.delmo=k0*k0*k0,a.sinmao=Math.sin(a.mo),a.x7thm1=7*y0-1,2*W0/a.no>=225){a.method="d",a.isimp=1,Z=0,c=a.inclo;var Y0={epoch:x,ep:a.ecco,argpp:a.argpo,tc:Z,inclp:a.inclo,nodep:a.nodeo,np:a.no,e3:a.e3,ee2:a.ee2,peo:a.peo,pgho:a.pgho,pho:a.pho,pinco:a.pinco,plo:a.plo,se2:a.se2,se3:a.se3,sgh2:a.sgh2,sgh3:a.sgh3,sgh4:a.sgh4,sh2:a.sh2,sh3:a.sh3,si2:a.si2,si3:a.si3,sl2:a.sl2,sl3:a.sl3,sl4:a.sl4,xgh2:a.xgh2,xgh3:a.xgh3,xgh4:a.xgh4,xh2:a.xh2,xh3:a.xh3,xi2:a.xi2,xi3:a.xi3,xl2:a.xl2,xl3:a.xl3,xl4:a.xl4,zmol:a.zmol,zmos:a.zmos},n=$2(Y0);a.e3=n.e3,a.ee2=n.ee2,a.peo=n.peo,a.pgho=n.pgho,a.pho=n.pho,a.pinco=n.pinco,a.plo=n.plo,a.se2=n.se2,a.se3=n.se3,a.sgh2=n.sgh2,a.sgh3=n.sgh3,a.sgh4=n.sgh4,a.sh2=n.sh2,a.sh3=n.sh3,a.si2=n.si2,a.si3=n.si3,a.sl2=n.sl2,a.sl3=n.sl3,a.sl4=n.sl4,I=n.sinim,C=n.cosim,W=n.em,j=n.emsq,i0=n.s1,K=n.s2,B=n.s3,m0=n.s4,v0=n.s5,q0=n.ss1,l0=n.ss2,r=n.ss3,f=n.ss4,H=n.ss5,s=n.sz1,X=n.sz3,P=n.sz11,w0=n.sz13,o0=n.sz21,f0=n.sz23,A=n.sz31,U=n.sz33,a.xgh2=n.xgh2,a.xgh3=n.xgh3,a.xgh4=n.xgh4,a.xh2=n.xh2,a.xh3=n.xh3,a.xi2=n.xi2,a.xi3=n.xi3,a.xl2=n.xl2,a.xl3=n.xl3,a.xl4=n.xl4,a.zmol=n.zmol,a.zmos=n.zmos,u=n.nm,L=n.z1,t=n.z3,z0=n.z11,g0=n.z13,A0=n.z21,b0=n.z23,T0=n.z31,D0=n.z33;var P0={inclo:c,init:a.init,ep:a.ecco,inclp:a.inclo,nodep:a.nodeo,argpp:a.argpo,mp:a.mo,opsmode:a.operationmode},L0=P2(a,P0);a.ecco=L0.ep,a.inclo=L0.inclp,a.nodeo=L0.nodep,a.argpo=L0.argpp,a.mo=L0.mp,k=0,S=0,O=0;var c0={cosim:C,emsq:j,argpo:a.argpo,s1:i0,s2:K,s3:B,s4:m0,s5:v0,sinim:I,ss1:q0,ss2:l0,ss3:r,ss4:f,ss5:H,sz1:s,sz3:X,sz11:P,sz13:w0,sz21:o0,sz23:f0,sz31:A,sz33:U,t:a.t,tc:Z,gsto:a.gsto,mo:a.mo,mdot:a.mdot,no:a.no,nodeo:a.nodeo,nodedot:a.nodedot,xpidot:V,z1:L,z3:t,z11:z0,z13:g0,z21:A0,z23:b0,z31:T0,z33:D0,ecco:a.ecco,eccsq:V0,em:W,argpm:k,inclm:c,mm:O,nm:u,nodem:S,irez:a.irez,atime:a.atime,d2201:a.d2201,d2211:a.d2211,d3210:a.d3210,d3222:a.d3222,d4410:a.d4410,d4422:a.d4422,d5220:a.d5220,d5232:a.d5232,d5421:a.d5421,d5433:a.d5433,dedt:a.dedt,didt:a.didt,dmdt:a.dmdt,dnodt:a.dnodt,domdt:a.domdt,del1:a.del1,del2:a.del2,del3:a.del3,xfact:a.xfact,xlamo:a.xlamo,xli:a.xli,xni:a.xni},E=Q2(c0);a.irez=E.irez,a.atime=E.atime,a.d2201=E.d2201,a.d2211=E.d2211,a.d3210=E.d3210,a.d3222=E.d3222,a.d4410=E.d4410,a.d4422=E.d4422,a.d5220=E.d5220,a.d5232=E.d5232,a.d5421=E.d5421,a.d5433=E.d5433,a.dedt=E.dedt,a.didt=E.didt,a.dmdt=E.dmdt,a.dnodt=E.dnodt,a.domdt=E.domdt,a.del1=E.del1,a.del2=E.del2,a.del3=E.del3,a.xfact=E.xfact,a.xlamo=E.xlamo,a.xli=E.xli,a.xni=E.xni}a.isimp!==1&&(Q=a.cc1*a.cc1,a.d2=4*M0*y*Q,D=a.d2*y*a.cc1/3,a.d3=(17*M0+z)*D,a.d4=.5*D*M0*y*(221*M0+31*z)*a.cc1,a.t3cof=a.d2+2*Q,a.t4cof=.25*(3*a.d3+a.cc1*(12*a.d2+10*Q)),a.t5cof=.2*(3*a.d4+12*a.cc1*a.d3+6*a.d2*a.d2+15*Q*(2*a.d2+Q)))}B2(a,0),a.init="n"}function a1(a,v){var h="i",m=1440/(2*W0),x=0,o={};o.error=0,o.satnum=a.substring(2,7),o.epochyr=parseInt(a.substring(18,20),10),o.epochdays=parseFloat(a.substring(20,32)),o.ndot=parseFloat(a.substring(33,43)),o.nddot=parseFloat(".".concat(parseInt(a.substring(44,50),10),"E").concat(a.substring(50,52))),o.bstar=parseFloat("".concat(a.substring(53,54),".").concat(parseInt(a.substring(54,59),10),"E").concat(a.substring(59,61))),o.inclo=parseFloat(v.substring(8,16)),o.nodeo=parseFloat(v.substring(17,25)),o.ecco=parseFloat(".".concat(v.substring(26,33))),o.argpo=parseFloat(v.substring(34,42)),o.mo=parseFloat(v.substring(43,51)),o.no=parseFloat(v.substring(52,63)),o.no/=m,o.inclo*=m2,o.nodeo*=m2,o.argpo*=m2,o.mo*=m2,o.epochyr<57?x=o.epochyr+2e3:x=o.epochyr+1900;var e=_2(x,o.epochdays),d=e.mon,i=e.day,b=e.hr,g=e.minute,p=e.sec;return o.jdsatepoch=A2(x,d,i,b,g,p),c2(o,{opsmode:h,satn:o.satnum,epoch:o.jdsatepoch-24332815e-1,xbstar:o.bstar,xecco:o.ecco,xargpo:o.argpo,xinclo:o.inclo,xmo:o.mo,xno:o.no,xnodeo:o.nodeo}),o}function v1(a,v){for(var h=6378.137,m=6356.7523142,x=Math.sqrt(a.x*a.x+a.y*a.y),o=(h-m)/h,e=2*o-o*o,d=Math.atan2(a.y,a.x)-v;d<-W0;)d+=$;for(;d>W0;)d-=$;for(var i=20,b=0,g=Math.atan2(a.z,Math.sqrt(a.x*a.x+a.y*a.y)),p;b<i;)p=1/Math.sqrt(1-e*(Math.sin(g)*Math.sin(g))),g=Math.atan2(a.z+h*p*e*Math.sin(g),x),b+=1;var C=x/Math.cos(g)-h*p;return{longitude:d,latitude:g,height:C}}const o1={appName:"Stuff in Space",baseUrl:"/StuffInSpace",propergateInterval:1e3,pushHistory:!1,logLevel:"info",satelliteGroups:[{id:"GPSGroup",name:"GPS",groupType:"intlDes",data:["90103A","93068A","96041A","97035A","99055A","00025A","00040A","00071A","01004A","03005A","03010A","03058A","04009A","04023A","04045A","05038A","06042A","06052A","07047A","07062A","08012A","09043A","10022A","11036A","12053A","13023A","14008A","14026A","14045A","14068A","15013A"]},{id:"IridiumGroup",name:"Iridium Debris",groupType:"nameRegex",data:/IRIDIUM(?!.*DEB)/},{id:"Iridium33DebrisGroup",name:"Iridium 33 Debris",groupType:"nameRegex",data:/(COSMOS 2251|IRIDIUM 33) DEB/},{id:"GlonassGroup",name:"Glonass",groupType:"nameRegex",data:/GLONASS/},{id:"GalileoGroup",name:"Galileo",groupType:"nameRegex",data:/GALILEO/},{id:"FunGroup",name:"Fun",groupType:"nameRegex",data:/SYLDA/},{id:"WestfordNeedlesGroup",name:"Westford Needles",groupType:"nameRegex",data:/WESTFORD NEEDLES/},{id:"SpaceXGroup",name:"Space X",groupType:"nameRegex",data:/FALCON [19]/},{id:"DebrisGroup",name:"Debris",groupType:"objectType",data:"DEBRIS"},{id:"Starlink",name:"Starlink",groupType:"nameRegex",data:/STARLINK/},{id:"Unknown",name:"Unknown Objects",groupType:"objectType",data:"UNKNOWN"}]},g2=["error","warn","info","debug"],n2={};let H2={};function b2(a,v,h,...m){a.enabledOutputs[v]&&h(v.toUpperCase(),...m)}function Y2(a){const v=g2.indexOf(a.toLowerCase());if(v<0)throw new Error("Unknown log level");for(let h=0;h<g2.length;h++)n2[g2[h]]=h<=v}function n1(){return{...H2,setLogLevel:Y2}}function d1(){H2={error:b2.bind(this,{enabledOutputs:n2},"error",console.error),warn:b2.bind(this,{enabledOutputs:n2},"warn",console.warn),info:b2.bind(this,{enabledOutputs:n2},"info",console.info),debug:b2.bind(this,{enabledOutputs:n2},"debug",console.debug)};for(let a=0;a<g2.length;a++)n2[g2[a]]=!0}d1(),Y2(o1.logLevel);var w2=n1();const Q0=[];let Z0,R0,x2;function i1(){const a=new Date;let v=A2(a.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds());v+=a.getUTCMilliseconds()*115741e-13;const h=W2(v);for(let m=0;m<Q0.length;m++){const x=(v-Q0[m].jdsatepoch)*1440,o=B2(Q0[m],x);let e,d,i,b,g,p,C;try{e=o.position.x,d=o.position.y,i=o.position.z,b=o.velocity.x,g=o.velocity.y,p=o.velocity.z,C=v1(o.position,h).height}catch{e=0,d=0,i=0,b=0,g=0,p=0,C=0}Z0[m*3]=e,Z0[m*3+1]=d,Z0[m*3+2]=i,R0[m*3]=b,R0[m*3+1]=g,R0[m*3+2]=p,x2[m]=C}postMessage({satPos:Z0.buffer,satVel:R0.buffer,satAlt:x2.buffer},[Z0.buffer,R0.buffer,x2.buffer]),Z0=new Float32Array(Q0.length*3),R0=new Float32Array(Q0.length*3),x2=new Float32Array(Q0.length)}onmessage=function(a){try{w2.debug("Sat cruncher worker handling message");const v=Date.now(),h=JSON.parse(a.data),m=h.length,x=[];for(let e=0;e<m;e++){const d={},i=a1(h[e].TLE_LINE1,h[e].TLE_LINE2);d.inclination=i.inclo,d.eccentricity=i.ecco,d.raan=i.nodeo,d.argPe=i.argpo,d.meanMotion=i.no*60*24/(2*Math.PI),d.semiMajorAxis=(8681663653e-3/d.meanMotion)**(2/3),d.semiMinorAxis=d.semiMajorAxis*Math.sqrt(1-d.eccentricity**2),d.apogee=d.semiMajorAxis*(1+d.eccentricity)-6371,d.perigee=d.semiMajorAxis*(1-d.eccentricity)-6371,d.period=1440/d.meanMotion,x.push(d),Q0.push(i)}Z0=new Float32Array(m*3),R0=new Float32Array(m*3),x2=new Float32Array(m);const o=Date.now();postMessage({extraData:JSON.stringify(x)}),w2.debug(`sat-cruncher init: ${Date.now()-v} ms  (incl post: ${Date.now()-o} ms)`),i1()}catch(v){w2.error("Error while runnning worker",v)}}})();
