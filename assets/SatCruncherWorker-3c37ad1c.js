(function(){"use strict";/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var W0=Math.PI,Q=W0*2,m2=W0/180,V2=398600.8,G0=6378.135,K0=60/Math.sqrt(G0*G0*G0/V2),A2=G0*K0/60,X2=1/K0,_0=.001082616,_2=-253881e-11,$2=-165597e-11,$0=_2/_0,l2=2/3;function Q2(a,v){for(var h=[31,a%4===0?29:28,31,30,31,30,31,31,30,31,30,31],m=Math.floor(v),x=1,o=0;m>o+h[x-1]&&x<12;)o+=h[x-1],x+=1;var z=x,d=m-o,i=(v-m)*24,b=Math.floor(i);i=(i-b)*60;var g=Math.floor(i),p=(i-g)*60;return{mon:z,day:d,hr:b,minute:g,sec:p}}function k2(a,v,h,m,x,o){var z=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*a-Math.floor(7*(a+Math.floor((v+9)/12))*.25)+Math.floor(275*v/9)+h+17210135e-1+((z/6e4+o/60+x)/60+m)/24}function w2(a,v,h,m,x,o,z){if(a instanceof Date){var d=a;return k2(d.getUTCFullYear(),d.getUTCMonth()+1,d.getUTCDate(),d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds())}return k2(a,v,h,m,x,o,z)}function P2(a,v){var h=a.e3,m=a.ee2,x=a.peo,o=a.pgho,z=a.pho,d=a.pinco,i=a.plo,b=a.se2,g=a.se3,p=a.sgh2,C=a.sgh3,s=a.sgh4,X=a.sh2,h0=a.sh3,Y=a.si2,G=a.si3,R=a.sl2,t=a.sl3,W=a.sl4,j=a.t,l=a.xgh2,q=a.xgh3,N=a.xgh4,S=a.xh2,c=a.xh3,O=a.xi2,u=a.xi3,d0=a.xl2,J=a.xl3,a0=a.xl4,M=a.zmol,i0=a.zmos,K=v.init,B=v.opsmode,m0=v.ep,v0=v.inclp,f=v.nodep,q0=v.argpp,l0=v.mp,r,e,H,T,_,k,w0,o0,e0,A,U,Z,D,I,F,w,y,V,$,L,P,f0=119459e-10,g0=.01675,A0=.00015835218,b0=.0549;P=i0+f0*j,K==="y"&&(P=i0),L=P+2*g0*Math.sin(P),y=Math.sin(L),A=.5*y*y-.25,U=-.5*y*Math.cos(L);var T0=b*A+g*U,I0=Y*A+G*U,z0=R*A+t*U+W*y,x0=p*A+C*U+s*y,p0=X*A+h0*U;P=M+A0*j,K==="y"&&(P=M),L=P+2*b0*Math.sin(P),y=Math.sin(L),A=.5*y*y-.25,U=-.5*y*Math.cos(L);var j0=m*A+h*U,U0=O*A+u*U,n0=d0*A+J*U+a0*y,M0=l*A+q*U+N*y,B0=S*A+c*U;return Z=T0+j0,F=I0+U0,w=z0+n0,D=x0+M0,I=p0+B0,K==="n"&&(Z-=x,F-=d,w-=i,D-=o,I-=z,v0+=F,m0+=Z,T=Math.sin(v0),H=Math.cos(v0),v0>=.2?(I/=T,D-=H*I,q0+=D,f+=I,l0+=w):(k=Math.sin(f),_=Math.cos(f),r=T*k,e=T*_,w0=I*_+F*H*k,o0=-I*k+F*H*_,r+=w0,e+=o0,f%=Q,f<0&&B==="a"&&(f+=Q),V=l0+q0+H*f,e0=w+D-F*f*T,V+=e0,$=f,f=Math.atan2(r,e),f<0&&B==="a"&&(f+=Q),Math.abs($-f)>W0&&(f<$?f+=Q:f-=Q),l0+=w,q0=V-l0-H*f)),{ep:m0,inclp:v0,nodep:f,argpp:q0,mp:l0}}function Z2(a){var v=a.epoch,h=a.ep,m=a.argpp,x=a.tc,o=a.inclp,z=a.nodep,d=a.np,i,b,g,p,C,s,X,h0,Y,G,R,t,W,j,l,q,N,S,c,O,u,d0,J,a0,M,i0,K,B,m0,v0,f,q0,l0,r,e,H,T,_,k,w0,o0,e0,A,U,Z,D,I,F,w,y,V,$,L,P,f0,g0,A0,b0,T0,I0,z0,x0,p0,j0=.01675,U0=.0549,n0=29864797e-13,M0=47968065e-14,B0=.39785416,C0=.91744867,y0=.1945905,V0=-.98088458,E0=d,H0=h,O0=Math.sin(z),t0=Math.cos(z),s0=Math.sin(m),F0=Math.cos(m),N0=Math.sin(o),Y0=Math.cos(o),n=H0*H0,k0=1-n,L0=Math.sqrt(k0),Z0=0,E=0,d2=0,e2=0,f2=0,X0=v+18261.5+x/1440,J0=(4.523602-.00092422029*X0)%Q,u0=Math.sin(J0),P0=Math.cos(J0),i2=.91375164-.03568096*P0,r2=Math.sqrt(1-i2*i2),D0=.089683511*u0/r2,S0=Math.sqrt(1-D0*D0),r0=5.8351514+.001944368*X0,R0=.39785416*u0/r2,T2=S0*P0+.91744867*D0*u0;R0=Math.atan2(R0,T2),R0+=r0-J0;var I2=Math.cos(R0),D2=Math.sin(R0);O=y0,u=V0,a0=C0,M=B0,d0=t0,J=O0,R=n0;for(var S2=1/E0,z2=0;z2<2;)z2+=1,i=O*d0+u*a0*J,g=-u*d0+O*a0*J,X=-O*J+u*a0*d0,h0=u*M,Y=u*J+O*a0*d0,G=O*M,b=Y0*X+N0*h0,p=Y0*Y+N0*G,C=-N0*X+Y0*h0,s=-N0*Y+Y0*G,t=i*F0+b*s0,W=g*F0+p*s0,j=-i*s0+b*F0,l=-g*s0+p*F0,q=C*s0,N=s*s0,S=C*F0,c=s*F0,z0=12*t*t-3*j*j,x0=24*t*W-6*j*l,p0=12*W*W-3*l*l,$=3*(i*i+b*b)+z0*n,L=6*(i*g+b*p)+x0*n,P=3*(g*g+p*p)+p0*n,f0=-6*i*C+n*(-24*t*S-6*j*q),g0=-6*(i*s+g*C)+n*(-24*(W*S+t*c)+-6*(j*N+l*q)),A0=-6*g*s+n*(-24*W*c-6*l*N),b0=6*b*C+n*(24*t*q-6*j*S),T0=6*(p*C+b*s)+n*(24*(W*q+t*N)-6*(l*S+j*c)),I0=6*p*s+n*(24*W*N-6*l*c),$=$+$+k0*z0,L=L+L+k0*x0,P=P+P+k0*p0,I=R*S2,D=-.5*I/L0,F=I*L0,Z=-15*H0*F,w=t*j+W*l,y=W*j+t*l,V=W*l-t*j,z2===1&&(i0=Z,K=D,B=I,m0=F,v0=w,f=y,q0=V,l0=$,r=L,e=P,H=f0,T=g0,_=A0,k=b0,w0=T0,o0=I0,e0=z0,A=x0,U=p0,O=I2,u=D2,a0=i2,M=r2,d0=S0*t0+D0*O0,J=O0*S0-t0*D0,R=M0);var p2=(4.7199672+(.2299715*X0-r0))%Q,U2=(6.2565837+.017201977*X0)%Q,F2=2*i0*f,c0=2*i0*q0,a2=2*K*T,C2=2*K*(_-H),G2=-2*B*r,j2=-2*B*(e-l0),L2=-2*B*(-21-9*n)*j0,h2=2*m0*A,E2=2*m0*(U-e0),O2=-18*m0*j0,M2=-2*K*w0,q2=-2*K*(o0-k),y2=2*Z*y,t2=2*Z*V,N2=2*D*g0,h1=2*D*(A0-f0),m1=-2*I*L,l1=-2*I*(P-$),g1=-2*I*(-21-9*n)*U0,x1=2*F*x0,e1=2*F*(p0-z0),f1=-18*F*U0,z1=-2*D*T0,p1=-2*D*(I0-b0);return{snodm:O0,cnodm:t0,sinim:N0,cosim:Y0,sinomm:s0,cosomm:F0,day:X0,e3:t2,ee2:y2,em:H0,emsq:n,gam:r0,peo:Z0,pgho:e2,pho:f2,pinco:E,plo:d2,rtemsq:L0,se2:F2,se3:c0,sgh2:h2,sgh3:E2,sgh4:O2,sh2:M2,sh3:q2,si2:a2,si3:C2,sl2:G2,sl3:j2,sl4:L2,s1:Z,s2:D,s3:I,s4:F,s5:w,s6:y,s7:V,ss1:i0,ss2:K,ss3:B,ss4:m0,ss5:v0,ss6:f,ss7:q0,sz1:l0,sz2:r,sz3:e,sz11:H,sz12:T,sz13:_,sz21:k,sz22:w0,sz23:o0,sz31:e0,sz32:A,sz33:U,xgh2:x1,xgh3:e1,xgh4:f1,xh2:z1,xh3:p1,xi2:N2,xi3:h1,xl2:m1,xl3:l1,xl4:g1,nm:E0,z1:$,z2:L,z3:P,z11:f0,z12:g0,z13:A0,z21:b0,z22:T0,z23:I0,z31:z0,z32:x0,z33:p0,zmol:p2,zmos:U2}}function R2(a){var v=a.cosim,h=a.argpo,m=a.s1,x=a.s2,o=a.s3,z=a.s4,d=a.s5,i=a.sinim,b=a.ss1,g=a.ss2,p=a.ss3,C=a.ss4,s=a.ss5,X=a.sz1,h0=a.sz3,Y=a.sz11,G=a.sz13,R=a.sz21,t=a.sz23,W=a.sz31,j=a.sz33,l=a.t,q=a.tc,N=a.gsto,S=a.mo,c=a.mdot,O=a.no,u=a.nodeo,d0=a.nodedot,J=a.xpidot,a0=a.z1,M=a.z3,i0=a.z11,K=a.z13,B=a.z21,m0=a.z23,v0=a.z31,f=a.z33,q0=a.ecco,l0=a.eccsq,r=a.emsq,e=a.em,H=a.argpm,T=a.inclm,_=a.mm,k=a.nm,w0=a.nodem,o0=a.irez,e0=a.atime,A=a.d2201,U=a.d2211,Z=a.d3210,D=a.d3222,I=a.d4410,F=a.d4422,w=a.d5220,y=a.d5232,V=a.d5421,$=a.d5433,L=a.dedt,P=a.didt,f0=a.dmdt,g0=a.dnodt,A0=a.domdt,b0=a.del1,T0=a.del2,I0=a.del3,z0=a.xfact,x0=a.xlamo,p0=a.xli,j0=a.xni,U0,n0,M0,B0,C0,y0,V0,E0,H0,O0,t0,s0,F0,N0,Y0,n,k0,L0,Z0,E,d2,e2,f2,X0,J0,u0,P0,i2,r2,D0,S0,r0,R0=17891679e-13,T2=21460748e-13,I2=22123015e-14,D2=17891679e-13,S2=73636953e-16,z2=21765803e-16,p2=.0043752690880113,U2=37393792e-14,F2=11428639e-14,c0=.00015835218,a2=119459e-10;o0=0,k<.0052359877&&k>.0034906585&&(o0=1),k>=.00826&&k<=.00924&&e>=.5&&(o0=2);var C2=b*a2*s,G2=g*a2*(Y+G),j2=-a2*p*(X+h0-14-6*r),L2=C*a2*(W+j-6),h2=-a2*g*(R+t);(T<.052359877||T>W0-.052359877)&&(h2=0),i!==0&&(h2/=i);var E2=L2-v*h2;L=C2+m*c0*d,P=G2+x*c0*(i0+K),f0=j2-c0*o*(a0+M-14-6*r);var O2=z*c0*(v0+f-6),M2=-c0*x*(B+m0);(T<.052359877||T>W0-.052359877)&&(M2=0),A0=E2+O2,g0=h2,i!==0&&(A0-=v/i*M2,g0+=M2/i);var q2=0,y2=(N+q*p2)%Q;if(e+=L*l,T+=P*l,H+=A0*l,w0+=g0*l,_+=f0*l,o0!==0){if(D0=Math.pow(k/K0,l2),o0===2){S0=v*v;var t2=e;e=q0;var N2=r;r=l0,r0=e*r,N0=-.306-(e-.64)*.44,e<=.65?(Y0=3.616-13.247*e+16.29*r,k0=-19.302+117.39*e-228.419*r+156.591*r0,L0=-18.9068+109.7927*e-214.6334*r+146.5816*r0,Z0=-41.122+242.694*e-471.094*r+313.953*r0,E=-146.407+841.88*e-1629.014*r+1083.435*r0,d2=-532.114+3017.977*e-5740.032*r+3708.276*r0):(Y0=-72.099+331.819*e-508.738*r+266.724*r0,k0=-346.844+1582.851*e-2415.925*r+1246.113*r0,L0=-342.585+1554.908*e-2366.899*r+1215.972*r0,Z0=-1052.797+4758.686*e-7193.992*r+3651.957*r0,E=-3581.69+16178.11*e-24462.77*r+12422.52*r0,e>.715?d2=-5149.66+29936.92*e-54087.36*r+31324.56*r0:d2=1464.74-4664.75*e+3763.64*r),e<.7?(X0=-919.2277+4988.61*e-9064.77*r+5542.21*r0,e2=-822.71072+4568.6173*e-8491.4146*r+5337.524*r0,f2=-853.666+4690.25*e-8624.77*r+5341.4*r0):(X0=-37995.78+161616.52*e-229838.2*r+109377.94*r0,e2=-51752.104+218913.95*e-309468.16*r+146349.42*r0,f2=-40023.88+170470.89*e-242699.48*r+115605.82*r0),J0=i*i,U0=.75*(1+2*v+S0),n0=1.5*J0,B0=1.875*i*(1-2*v-3*S0),C0=-1.875*i*(1+2*v-3*S0),V0=35*J0*U0,E0=39.375*J0*J0,H0=9.84375*i*(J0*(1-2*v-5*S0)+.33333333*(-2+4*v+6*S0)),O0=i*(4.92187512*J0*(-2-4*v+10*S0)+6.56250012*(1+2*v-3*S0)),t0=29.53125*i*(2-8*v+S0*(-12+8*v+10*S0)),s0=29.53125*i*(-2-8*v+S0*(12+8*v-10*S0)),i2=k*k,r2=D0*D0,P0=3*i2*r2,u0=P0*D2,A=u0*U0*N0,U=u0*n0*Y0,P0*=D0,u0=P0*U2,Z=u0*B0*k0,D=u0*C0*L0,P0*=D0,u0=2*P0*S2,I=u0*V0*Z0,F=u0*E0*E,P0*=D0,u0=P0*F2,w=u0*H0*d2,y=u0*O0*f2,u0=2*P0*z2,V=u0*t0*e2,$=u0*s0*X0,x0=(S+u+u-(y2+y2))%Q,z0=c+f0+2*(d0+g0-p2)-O,e=t2,r=N2}o0===1&&(F0=1+r*(-2.5+.8125*r),k0=1+2*r,n=1+r*(-6+6.60937*r),U0=.75*(1+v)*(1+v),M0=.9375*i*i*(1+3*v)-.75*(1+v),y0=1+v,y0*=1.875*y0*y0,b0=3*k*k*D0*D0,T0=2*b0*U0*F0*R0,I0=3*b0*y0*n*I2*D0,b0=b0*M0*k0*T2*D0,x0=(S+u+h-y2)%Q,z0=c+J+f0+A0+g0-(O+p2)),p0=x0,j0=O,e0=0,k=O+q2}return{em:e,argpm:H,inclm:T,mm:_,nm:k,nodem:w0,irez:o0,atime:e0,d2201:A,d2211:U,d3210:Z,d3222:D,d4410:I,d4422:F,d5220:w,d5232:y,d5421:V,d5433:$,dedt:L,didt:P,dmdt:f0,dndt:q2,dnodt:g0,domdt:A0,del1:b0,del2:T0,del3:I0,xfact:z0,xlamo:x0,xli:p0,xni:j0}}function W2(a){var v=(a-2451545)/36525,h=-62e-7*v*v*v+.093104*v*v+(876600*3600+8640184812866e-6)*v+67310.54841;return h=h*m2/240%Q,h<0&&(h+=Q),h}function B2(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?W2(w2.apply(void 0,arguments)):W2.apply(void 0,arguments)}function c2(a){var v=a.ecco,h=a.epoch,m=a.inclo,x=a.opsmode,o=a.no,z=v*v,d=1-z,i=Math.sqrt(d),b=Math.cos(m),g=b*b,p=Math.pow(K0/o,l2),C=.75*_0*(3*g-1)/(i*d),s=C/(p*p),X=p*(1-s*s-s*(1/3+134*s*s/81));s=C/(X*X),o/=1+s;var h0=Math.pow(K0/o,l2),Y=Math.sin(m),G=h0*d,R=1-5*g,t=-R-g-g,W=1/h0,j=G*G,l=h0*(1-v),q="n",N;if(x==="a"){var S=h-7305,c=Math.floor(S+1e-8),O=S-c,u=.017202791694070362,d0=1.7321343856509375,J=5075514194322695e-30,a0=u+Q;N=(d0+u*c+a0*O+S*S*J)%Q,N<0&&(N+=Q)}else N=B2(h+24332815e-1);return{no:o,method:q,ainv:W,ao:h0,con41:t,con42:R,cosio:b,cosio2:g,eccsq:z,omeosq:d,posq:j,rp:l,rteosq:i,sinio:Y,gsto:N}}function a1(a){var v=a.irez,h=a.d2201,m=a.d2211,x=a.d3210,o=a.d3222,z=a.d4410,d=a.d4422,i=a.d5220,b=a.d5232,g=a.d5421,p=a.d5433,C=a.dedt,s=a.del1,X=a.del2,h0=a.del3,Y=a.didt,G=a.dmdt,R=a.dnodt,t=a.domdt,W=a.argpo,j=a.argpdot,l=a.t,q=a.tc,N=a.gsto,S=a.xfact,c=a.xlamo,O=a.no,u=a.atime,d0=a.em,J=a.argpm,a0=a.inclm,M=a.xli,i0=a.mm,K=a.xni,B=a.nodem,m0=a.nm,v0=.13130908,f=2.8843198,q0=.37448087,l0=5.7686396,r=.95240898,e=1.8014998,H=1.050833,T=4.4108898,_=.0043752690880113,k=720,w0=-720,o0=259200,e0,A,U,Z,D,I,F,w,y=0,V=0,$=(N+q*_)%Q;if(d0+=C*l,a0+=Y*l,J+=t*l,B+=R*l,i0+=G*l,v!==0){(u===0||l*u<=0||Math.abs(l)<Math.abs(u))&&(u=0,K=O,M=c),l>0?e0=k:e0=w0;for(var L=381;L===381;)v!==2?(F=s*Math.sin(M-v0)+X*Math.sin(2*(M-f))+h0*Math.sin(3*(M-q0)),D=K+S,I=s*Math.cos(M-v0)+2*X*Math.cos(2*(M-f))+3*h0*Math.cos(3*(M-q0)),I*=D):(w=W+j*u,U=w+w,A=M+M,F=h*Math.sin(U+M-l0)+m*Math.sin(M-l0)+x*Math.sin(w+M-r)+o*Math.sin(-w+M-r)+z*Math.sin(U+A-e)+d*Math.sin(A-e)+i*Math.sin(w+M-H)+b*Math.sin(-w+M-H)+g*Math.sin(w+A-T)+p*Math.sin(-w+A-T),D=K+S,I=h*Math.cos(U+M-l0)+m*Math.cos(M-l0)+x*Math.cos(w+M-r)+o*Math.cos(-w+M-r)+i*Math.cos(w+M-H)+b*Math.cos(-w+M-H)+2*(z*Math.cos(U+A-e)+d*Math.cos(A-e)+g*Math.cos(w+A-T)+p*Math.cos(-w+A-T)),I*=D),Math.abs(l-u)>=k?L=381:(V=l-u,L=0),L===381&&(M+=D*e0+F*o0,K+=F*e0+I*o0,u+=e0);m0=K+F*V+I*V*V*.5,Z=M+D*V+F*V*V*.5,v!==1?(i0=Z-2*B+2*$,y=m0-O):(i0=Z-B-J+$,y=m0-O),m0=O+y}return{atime:u,em:d0,argpm:J,inclm:a0,xli:M,mm:i0,xni:K,nodem:B,dndt:y,nm:m0}}function H2(a,v){var h,m,x,o,z,d,i,b,g,p,C,s,X,h0,Y,G,R,t,W,j,l,q,N,S,c,O,u,d0=15e-13;a.t=v,a.error=0;var J=a.mo+a.mdot*a.t,a0=a.argpo+a.argpdot*a.t,M=a.nodeo+a.nodedot*a.t;g=a0,l=J;var i0=a.t*a.t;if(N=M+a.nodecf*i0,R=1-a.cc1*a.t,t=a.bstar*a.cc4*a.t,W=a.t2cof*i0,a.isimp!==1){i=a.omgcof*a.t;var K=1+a.eta*Math.cos(J);d=a.xmcof*(K*K*K-a.delmo),G=i+d,l=J+G,g=a0-G,s=i0*a.t,X=s*a.t,R=R-a.d2*i0-a.d3*s-a.d4*X,t+=a.bstar*a.cc5*(Math.sin(l)-a.sinmao),W=W+a.t3cof*s+X*(a.t4cof+a.t*a.t5cof)}q=a.no;var B=a.ecco;if(j=a.inclo,a.method==="d"){h0=a.t;var m0={irez:a.irez,d2201:a.d2201,d2211:a.d2211,d3210:a.d3210,d3222:a.d3222,d4410:a.d4410,d4422:a.d4422,d5220:a.d5220,d5232:a.d5232,d5421:a.d5421,d5433:a.d5433,dedt:a.dedt,del1:a.del1,del2:a.del2,del3:a.del3,didt:a.didt,dmdt:a.dmdt,dnodt:a.dnodt,domdt:a.domdt,argpo:a.argpo,argpdot:a.argpdot,t:a.t,tc:h0,gsto:a.gsto,xfact:a.xfact,xlamo:a.xlamo,no:a.no,atime:a.atime,em:B,argpm:g,inclm:j,xli:a.xli,mm:l,xni:a.xni,nodem:N,nm:q},v0=a1(m0);B=v0.em,g=v0.argpm,j=v0.inclm,l=v0.mm,N=v0.nodem,q=v0.nm}if(q<=0)return a.error=2,[!1,!1];var f=Math.pow(K0/q,l2)*R*R;if(q=K0/Math.pow(f,1.5),B-=t,B>=1||B<-.001)return a.error=1,[!1,!1];B<1e-6&&(B=1e-6),l+=a.no*W,c=l+g+N,N%=Q,g%=Q,c%=Q,l=(c-g-N)%Q;var q0=Math.sin(j),l0=Math.cos(j),r=B;if(S=j,p=g,u=N,O=l,o=q0,x=l0,a.method==="d"){var e={inclo:a.inclo,init:"n",ep:r,inclp:S,nodep:u,argpp:p,mp:O,opsmode:a.operationmode},H=P2(a,e);if(r=H.ep,u=H.nodep,p=H.argpp,O=H.mp,S=H.inclp,S<0&&(S=-S,u+=W0,p-=W0),r<0||r>1)return a.error=3,[!1,!1]}a.method==="d"&&(o=Math.sin(S),x=Math.cos(S),a.aycof=-.5*$0*o,Math.abs(x+1)>15e-13?a.xlcof=-.25*$0*o*(3+5*x)/(1+x):a.xlcof=-.25*$0*o*(3+5*x)/d0);var T=r*Math.cos(p);G=1/(f*(1-r*r));var _=r*Math.sin(p)+G*a.aycof,k=O+p+u+G*a.xlcof*T,w0=(k-u)%Q;b=w0,Y=9999.9;for(var o0=1;Math.abs(Y)>=1e-12&&o0<=10;)m=Math.sin(b),h=Math.cos(b),Y=1-h*T-m*_,Y=(w0-_*h+T*m-b)/Y,Math.abs(Y)>=.95&&(Y>0?Y=.95:Y=-.95),b+=Y,o0+=1;var e0=T*h+_*m,A=T*m-_*h,U=T*T+_*_,Z=f*(1-U);if(Z<0)return a.error=4,[!1,!1];var D=f*(1-e0),I=Math.sqrt(f)*A/D,F=Math.sqrt(Z)/D,w=Math.sqrt(1-U);G=A/(1+w);var y=f/D*(m-_-T*G),V=f/D*(h-T+_*G);C=Math.atan2(y,V);var $=(V+V)*y,L=1-2*y*y;G=1/Z;var P=.5*_0*G,f0=P*G;a.method==="d"&&(z=x*x,a.con41=3*z-1,a.x1mth2=1-z,a.x7thm1=7*z-1);var g0=D*(1-1.5*f0*w*a.con41)+.5*P*a.x1mth2*L;if(g0<1)return a.error=6,{position:!1,velocity:!1};C-=.25*f0*a.x7thm1*$;var A0=u+1.5*f0*x*$,b0=S+1.5*f0*x*o*L,T0=I-q*P*a.x1mth2*$/K0,I0=F+q*P*(a.x1mth2*L+1.5*a.con41)/K0,z0=Math.sin(C),x0=Math.cos(C),p0=Math.sin(A0),j0=Math.cos(A0),U0=Math.sin(b0),n0=Math.cos(b0),M0=-p0*n0,B0=j0*n0,C0=M0*z0+j0*x0,y0=B0*z0+p0*x0,V0=U0*z0,E0=M0*x0-j0*z0,H0=B0*x0-p0*z0,O0=U0*x0,t0={x:g0*C0*G0,y:g0*y0*G0,z:g0*V0*G0},s0={x:(T0*C0+I0*E0)*A2,y:(T0*y0+I0*H0)*A2,z:(T0*V0+I0*O0)*A2};return{position:t0,velocity:s0}}function v1(a,v){var h=v.opsmode,m=v.satn,x=v.epoch,o=v.xbstar,z=v.xecco,d=v.xargpo,i=v.xinclo,b=v.xmo,g=v.xno,p=v.xnodeo,C,s,X,h0,Y,G,R,t,W,j,l,q,N,S,c,O,u,d0,J,a0,M,i0,K,B,m0,v0,f,q0,l0,r,e,H,T,_,k,w0,o0,e0,A,U,Z,D,I,F,w,y,V,$,L,P,f0,g0,A0,b0,T0,I0,z0=15e-13;a.isimp=0,a.method="n",a.aycof=0,a.con41=0,a.cc1=0,a.cc4=0,a.cc5=0,a.d2=0,a.d3=0,a.d4=0,a.delmo=0,a.eta=0,a.argpdot=0,a.omgcof=0,a.sinmao=0,a.t=0,a.t2cof=0,a.t3cof=0,a.t4cof=0,a.t5cof=0,a.x1mth2=0,a.x7thm1=0,a.mdot=0,a.nodedot=0,a.xlcof=0,a.xmcof=0,a.nodecf=0,a.irez=0,a.d2201=0,a.d2211=0,a.d3210=0,a.d3222=0,a.d4410=0,a.d4422=0,a.d5220=0,a.d5232=0,a.d5421=0,a.d5433=0,a.dedt=0,a.del1=0,a.del2=0,a.del3=0,a.didt=0,a.dmdt=0,a.dnodt=0,a.domdt=0,a.e3=0,a.ee2=0,a.peo=0,a.pgho=0,a.pho=0,a.pinco=0,a.plo=0,a.se2=0,a.se3=0,a.sgh2=0,a.sgh3=0,a.sgh4=0,a.sh2=0,a.sh3=0,a.si2=0,a.si3=0,a.sl2=0,a.sl3=0,a.sl4=0,a.gsto=0,a.xfact=0,a.xgh2=0,a.xgh3=0,a.xgh4=0,a.xh2=0,a.xh3=0,a.xi2=0,a.xi3=0,a.xl2=0,a.xl3=0,a.xl4=0,a.xlamo=0,a.zmol=0,a.zmos=0,a.atime=0,a.xli=0,a.xni=0,a.bstar=o,a.ecco=z,a.argpo=d,a.inclo=i,a.mo=b,a.no=g,a.nodeo=p,a.operationmode=h;var x0=78/G0+1,p0=(120-78)/G0,j0=p0*p0*p0*p0;a.init="y",a.t=0;var U0={satn:m,ecco:a.ecco,epoch:x,inclo:a.inclo,no:a.no,method:a.method,opsmode:a.operationmode},n0=c2(U0),M0=n0.ao,B0=n0.con42,C0=n0.cosio,y0=n0.cosio2,V0=n0.eccsq,E0=n0.omeosq,H0=n0.posq,O0=n0.rp,t0=n0.rteosq,s0=n0.sinio;if(a.no=n0.no,a.con41=n0.con41,a.gsto=n0.gsto,a.a=Math.pow(a.no*X2,-2/3),a.alta=a.a*(1+a.ecco)-1,a.altp=a.a*(1-a.ecco)-1,a.error=0,E0>=0||a.no>=0){if(a.isimp=0,O0<220/G0+1&&(a.isimp=1),f=x0,M=j0,d0=(O0-1)*G0,d0<156){f=d0-78,d0<98&&(f=20);var F0=(120-f)/G0;M=F0*F0*F0*F0,f=f/G0+1}J=1/H0,y=1/(M0-f),a.eta=M0*a.ecco*y,q=a.eta*a.eta,l=a.ecco*a.eta,a0=Math.abs(1-q),G=M*Math.pow(y,4),R=G/Math.pow(a0,3.5),h0=R*a.no*(M0*(1+1.5*q+l*(4+q))+.375*_0*y/a0*a.con41*(8+3*q*(8+q))),a.cc1=a.bstar*h0,Y=0,a.ecco>1e-4&&(Y=-2*G*y*$0*a.no*s0/a.ecco),a.x1mth2=1-y0,a.cc4=2*a.no*R*M0*E0*(a.eta*(2+.5*q)+a.ecco*(.5+2*q)-_0*y/(M0*a0)*(-3*a.con41*(1-2*l+q*(1.5-.5*l))+.75*a.x1mth2*(2*q-l*(1+q))*Math.cos(2*a.argpo))),a.cc5=2*R*M0*E0*(1+2.75*(q+l)+l*q),t=y0*y0,I=1.5*_0*J*a.no,F=.5*I*_0*J,w=-.46875*$2*J*J*a.no,a.mdot=a.no+.5*I*t0*a.con41+.0625*F*t0*(13-78*y0+137*t),a.argpdot=-.5*I*B0+.0625*F*(7-114*y0+395*t)+w*(3-36*y0+49*t),$=-I*C0,a.nodedot=$+(.5*F*(4-19*y0)+2*w*(3-7*y0))*C0,V=a.argpdot+a.nodedot,a.omgcof=a.bstar*Y*Math.cos(a.argpo),a.xmcof=0,a.ecco>1e-4&&(a.xmcof=-l2*G*a.bstar/l),a.nodecf=3.5*E0*$*a.cc1,a.t2cof=1.5*a.cc1,Math.abs(C0+1)>15e-13?a.xlcof=-.25*$0*s0*(3+5*C0)/(1+C0):a.xlcof=-.25*$0*s0*(3+5*C0)/z0,a.aycof=-.5*$0*s0;var N0=1+a.eta*Math.cos(a.mo);if(a.delmo=N0*N0*N0,a.sinmao=Math.sin(a.mo),a.x7thm1=7*y0-1,2*W0/a.no>=225){a.method="d",a.isimp=1,Z=0,c=a.inclo;var Y0={epoch:x,ep:a.ecco,argpp:a.argpo,tc:Z,inclp:a.inclo,nodep:a.nodeo,np:a.no,e3:a.e3,ee2:a.ee2,peo:a.peo,pgho:a.pgho,pho:a.pho,pinco:a.pinco,plo:a.plo,se2:a.se2,se3:a.se3,sgh2:a.sgh2,sgh3:a.sgh3,sgh4:a.sgh4,sh2:a.sh2,sh3:a.sh3,si2:a.si2,si3:a.si3,sl2:a.sl2,sl3:a.sl3,sl4:a.sl4,xgh2:a.xgh2,xgh3:a.xgh3,xgh4:a.xgh4,xh2:a.xh2,xh3:a.xh3,xi2:a.xi2,xi3:a.xi3,xl2:a.xl2,xl3:a.xl3,xl4:a.xl4,zmol:a.zmol,zmos:a.zmos},n=Z2(Y0);a.e3=n.e3,a.ee2=n.ee2,a.peo=n.peo,a.pgho=n.pgho,a.pho=n.pho,a.pinco=n.pinco,a.plo=n.plo,a.se2=n.se2,a.se3=n.se3,a.sgh2=n.sgh2,a.sgh3=n.sgh3,a.sgh4=n.sgh4,a.sh2=n.sh2,a.sh3=n.sh3,a.si2=n.si2,a.si3=n.si3,a.sl2=n.sl2,a.sl3=n.sl3,a.sl4=n.sl4,s=n.sinim,C=n.cosim,W=n.em,j=n.emsq,i0=n.s1,K=n.s2,B=n.s3,m0=n.s4,v0=n.s5,q0=n.ss1,l0=n.ss2,r=n.ss3,e=n.ss4,H=n.ss5,T=n.sz1,_=n.sz3,k=n.sz11,w0=n.sz13,o0=n.sz21,e0=n.sz23,A=n.sz31,U=n.sz33,a.xgh2=n.xgh2,a.xgh3=n.xgh3,a.xgh4=n.xgh4,a.xh2=n.xh2,a.xh3=n.xh3,a.xi2=n.xi2,a.xi3=n.xi3,a.xl2=n.xl2,a.xl3=n.xl3,a.xl4=n.xl4,a.zmol=n.zmol,a.zmos=n.zmos,u=n.nm,L=n.z1,P=n.z3,f0=n.z11,g0=n.z13,A0=n.z21,b0=n.z23,T0=n.z31,I0=n.z33;var k0={inclo:c,init:a.init,ep:a.ecco,inclp:a.inclo,nodep:a.nodeo,argpp:a.argpo,mp:a.mo,opsmode:a.operationmode},L0=P2(a,k0);a.ecco=L0.ep,a.inclo=L0.inclp,a.nodeo=L0.nodep,a.argpo=L0.argpp,a.mo=L0.mp,N=0,S=0,O=0;var Z0={cosim:C,emsq:j,argpo:a.argpo,s1:i0,s2:K,s3:B,s4:m0,s5:v0,sinim:s,ss1:q0,ss2:l0,ss3:r,ss4:e,ss5:H,sz1:T,sz3:_,sz11:k,sz13:w0,sz21:o0,sz23:e0,sz31:A,sz33:U,t:a.t,tc:Z,gsto:a.gsto,mo:a.mo,mdot:a.mdot,no:a.no,nodeo:a.nodeo,nodedot:a.nodedot,xpidot:V,z1:L,z3:P,z11:f0,z13:g0,z21:A0,z23:b0,z31:T0,z33:I0,ecco:a.ecco,eccsq:V0,em:W,argpm:N,inclm:c,mm:O,nm:u,nodem:S,irez:a.irez,atime:a.atime,d2201:a.d2201,d2211:a.d2211,d3210:a.d3210,d3222:a.d3222,d4410:a.d4410,d4422:a.d4422,d5220:a.d5220,d5232:a.d5232,d5421:a.d5421,d5433:a.d5433,dedt:a.dedt,didt:a.didt,dmdt:a.dmdt,dnodt:a.dnodt,domdt:a.domdt,del1:a.del1,del2:a.del2,del3:a.del3,xfact:a.xfact,xlamo:a.xlamo,xli:a.xli,xni:a.xni},E=R2(Z0);a.irez=E.irez,a.atime=E.atime,a.d2201=E.d2201,a.d2211=E.d2211,a.d3210=E.d3210,a.d3222=E.d3222,a.d4410=E.d4410,a.d4422=E.d4422,a.d5220=E.d5220,a.d5232=E.d5232,a.d5421=E.d5421,a.d5433=E.d5433,a.dedt=E.dedt,a.didt=E.didt,a.dmdt=E.dmdt,a.dnodt=E.dnodt,a.domdt=E.domdt,a.del1=E.del1,a.del2=E.del2,a.del3=E.del3,a.xfact=E.xfact,a.xlamo=E.xlamo,a.xli=E.xli,a.xni=E.xni}a.isimp!==1&&(X=a.cc1*a.cc1,a.d2=4*M0*y*X,D=a.d2*y*a.cc1/3,a.d3=(17*M0+f)*D,a.d4=.5*D*M0*y*(221*M0+31*f)*a.cc1,a.t3cof=a.d2+2*X,a.t4cof=.25*(3*a.d3+a.cc1*(12*a.d2+10*X)),a.t5cof=.2*(3*a.d4+12*a.cc1*a.d3+6*a.d2*a.d2+15*X*(2*a.d2+X)))}H2(a,0),a.init="n"}function o1(a,v){var h="i",m=1440/(2*W0),x=0,o={};o.error=0,o.satnum=a.substring(2,7),o.epochyr=parseInt(a.substring(18,20),10),o.epochdays=parseFloat(a.substring(20,32)),o.ndot=parseFloat(a.substring(33,43)),o.nddot=parseFloat(".".concat(parseInt(a.substring(44,50),10),"E").concat(a.substring(50,52))),o.bstar=parseFloat("".concat(a.substring(53,54),".").concat(parseInt(a.substring(54,59),10),"E").concat(a.substring(59,61))),o.inclo=parseFloat(v.substring(8,16)),o.nodeo=parseFloat(v.substring(17,25)),o.ecco=parseFloat(".".concat(v.substring(26,33))),o.argpo=parseFloat(v.substring(34,42)),o.mo=parseFloat(v.substring(43,51)),o.no=parseFloat(v.substring(52,63)),o.no/=m,o.inclo*=m2,o.nodeo*=m2,o.argpo*=m2,o.mo*=m2,o.epochyr<57?x=o.epochyr+2e3:x=o.epochyr+1900;var z=Q2(x,o.epochdays),d=z.mon,i=z.day,b=z.hr,g=z.minute,p=z.sec;return o.jdsatepoch=w2(x,d,i,b,g,p),v1(o,{opsmode:h,satn:o.satnum,epoch:o.jdsatepoch-24332815e-1,xbstar:o.bstar,xecco:o.ecco,xargpo:o.argpo,xinclo:o.inclo,xmo:o.mo,xno:o.no,xnodeo:o.nodeo}),o}function n1(a,v){for(var h=6378.137,m=6356.7523142,x=Math.sqrt(a.x*a.x+a.y*a.y),o=(h-m)/h,z=2*o-o*o,d=Math.atan2(a.y,a.x)-v;d<-W0;)d+=Q;for(;d>W0;)d-=Q;for(var i=20,b=0,g=Math.atan2(a.z,Math.sqrt(a.x*a.x+a.y*a.y)),p;b<i;)p=1/Math.sqrt(1-z*(Math.sin(g)*Math.sin(g))),g=Math.atan2(a.z+h*p*z*Math.sin(g),x),b+=1;var C=x/Math.cos(g)-h*p;return{longitude:d,latitude:g,height:C}}const Y2={appName:"Stuff in Space",baseUrl:"/StuffInSpace",propergateInterval:1e3,pushHistory:!1,logLevel:"debug",satelliteGroups:[{id:"GPSGroup",name:"GPS",groupType:"intlDes",data:["90103A","93068A","96041A","97035A","99055A","00025A","00040A","00071A","01004A","03005A","03010A","03058A","04009A","04023A","04045A","05038A","06042A","06052A","07047A","07062A","08012A","09043A","10022A","11036A","12053A","13023A","14008A","14026A","14045A","14068A","15013A"]},{id:"IridiumGroup",name:"Iridium Debris",groupType:"nameRegex",data:/IRIDIUM(?!.*DEB)/},{id:"Iridium33DebrisGroup",name:"Iridium 33 Debris",groupType:"nameRegex",data:/(COSMOS 2251|IRIDIUM 33) DEB/},{id:"GlonassGroup",name:"Glonass",groupType:"nameRegex",data:/GLONASS/},{id:"GalileoGroup",name:"Galileo",groupType:"nameRegex",data:/GALILEO/},{id:"FunGroup",name:"Fun",groupType:"nameRegex",data:/SYLDA/},{id:"WestfordNeedlesGroup",name:"Westford Needles",groupType:"nameRegex",data:/WESTFORD NEEDLES/},{id:"SpaceXGroup",name:"Space X",groupType:"nameRegex",data:/FALCON [19]/},{id:"DebrisGroup",name:"Debris",groupType:"objectType",data:"DEBRIS"},{id:"Starlink",name:"Starlink",groupType:"nameRegex",data:/STARLINK/},{id:"Unknown",name:"Unknown Objects",groupType:"objectType",data:"UNKNOWN"}]},g2=["error","warn","info","debug"],v2={};let x2={};function b2(a,v,h,...m){a.enabledOutputs[v]&&h(v.toUpperCase(),...m)}function J2(a){const v=g2.indexOf(a.toLowerCase());if(v<0)throw new Error("Unknown log level");for(let h=0;h<g2.length;h++)v2[g2[h]]=h<=v}function d1(){return{error:x2.error,warn:x2.warn,info:x2.info,debug:x2.debug,setLogLevel:J2}}function i1(){x2={error:b2.bind(this,{enabledOutputs:v2},"error",console.error),warn:b2.bind(this,{enabledOutputs:v2},"warn",console.warn),info:b2.bind(this,{enabledOutputs:v2},"info",console.info),debug:b2.bind(this,{enabledOutputs:v2},"debug",console.debug)};for(let a=0;a<g2.length;a++)v2[g2[a]]=!0}i1(),J2(Y2.logLevel);var s2=d1();const Q0=[],r1=Y2.propergateInterval;let o2,n2,u2;function K2(){const a=new Date;let v=w2(a.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds());v+=a.getUTCMilliseconds()*115741e-13;const h=B2(v);for(let m=0;m<Q0.length;m++){const x=(v-Q0[m].jdsatepoch)*1440,o=H2(Q0[m],x);let z,d,i,b,g,p,C;try{z=o.position.x,d=o.position.y,i=o.position.z,b=o.velocity.x,g=o.velocity.y,p=o.velocity.z,C=n1(o.position,h).height}catch{z=0,d=0,i=0,b=0,g=0,p=0,C=0}const s=3185.5;o2[m*3]=z/s,o2[m*3+1]=i/s,o2[m*3+2]=d/s,n2[m*3]=b,n2[m*3+1]=p,n2[m*3+2]=g,u2[m]=C}postMessage({satPos:o2.buffer,satVel:n2.buffer,satAlt:u2.buffer}),o2=new Float32Array(Q0.length*3),n2=new Float32Array(Q0.length*3),u2=new Float32Array(Q0.length),setTimeout(K2,r1)}onmessage=function(a){try{s2.debug("Sat cruncher worker handling message");const v=Date.now(),h=JSON.parse(a.data),m=h.length,x=[];for(let z=0;z<m;z++){const d={},i=o1(h[z].TLE_LINE1,h[z].TLE_LINE2);d.inclination=i.inclo,d.eccentricity=i.ecco,d.raan=i.nodeo,d.argPe=i.argpo,d.meanMotion=i.no*60*24/(2*Math.PI),d.semiMajorAxis=(8681663653e-3/d.meanMotion)**(2/3),d.semiMinorAxis=d.semiMajorAxis*Math.sqrt(1-d.eccentricity**2),d.apogee=d.semiMajorAxis*(1+d.eccentricity)-6371,d.perigee=d.semiMajorAxis*(1-d.eccentricity)-6371,d.period=1440/d.meanMotion,x.push(d),Q0.push(i)}o2=new Float32Array(m*3),n2=new Float32Array(m*3),u2=new Float32Array(m);const o=Date.now();postMessage({extraData:JSON.stringify(x)}),s2.debug(`sat-cruncher init: ${Date.now()-v} ms  (incl post: ${Date.now()-o} ms)`),K2()}catch(v){s2.error("Error while runnning worker",v)}}})();