(function(){"use strict";/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var V0=Math.PI,X=V0*2,m2=V0/180,G2=398600.8,L0=6378.135,B0=60/Math.sqrt(L0*L0*L0/G2),w2=L0*B0/60,B2=1/B0,W0=.001082616,K2=-253881e-11,Q2=-165597e-11,X0=K2/W0,l2=2/3;function W2(v,a){for(var h=[31,v%4===0?29:28,31,30,31,30,31,31,30,31,30,31],m=Math.floor(a),g=1,o=0;m>o+h[g-1]&&g<12;)o+=h[g-1],g+=1;var p=g,d=m-o,i=(a-m)*24,y=Math.floor(i);i=(i-y)*60;var x=Math.floor(i),M=(i-x)*60;return{mon:p,day:d,hr:y,minute:x,sec:M}}function N2(v,a,h,m,g,o){var p=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*v-Math.floor(7*(v+Math.floor((a+9)/12))*.25)+Math.floor(275*a/9)+h+17210135e-1+((p/6e4+o/60+g)/60+m)/24}function u2(v,a,h,m,g,o,p){if(v instanceof Date){var d=v;return N2(d.getUTCFullYear(),d.getUTCMonth()+1,d.getUTCDate(),d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds())}return N2(v,a,h,m,g,o,p)}function H2(v,a){var h=v.e3,m=v.ee2,g=v.peo,o=v.pgho,p=v.pho,d=v.pinco,i=v.plo,y=v.se2,x=v.se3,M=v.sgh2,I=v.sgh3,T=v.sgh4,Z=v.sh2,h0=v.sh3,$=v.si2,L=v.si3,R=v.sl2,P=v.sl3,V=v.sl4,S=v.t,l=v.xgh2,w=v.xgh3,N=v.xgh4,j=v.xh2,c=v.xh3,O=v.xi2,q=v.xi3,d0=v.xl2,G=v.xl3,v0=v.xl4,e=v.zmol,i0=v.zmos,B=a.init,Y=a.opsmode,m0=a.ep,a0=a.inclp,z=a.nodep,w0=a.argpp,l0=a.mp,r,f,_,C,Q,H,s0,o0,f0,u,A,t,U,F,D,s,b,K,W,k,J,z0=119459e-10,x0=.01675,u0=.00015835218,y0=.0549;J=i0+z0*S,B==="y"&&(J=i0),k=J+2*x0*Math.sin(J),b=Math.sin(k),u=.5*b*b-.25,A=-.5*b*Math.cos(k);var F0=y*u+x*A,U0=$*u+L*A,p0=R*u+P*A+V*b,g0=M*u+I*A+T*b,M0=Z*u+h0*A;J=e+u0*S,B==="y"&&(J=e),k=J+2*y0*Math.sin(J),b=Math.sin(k),u=.5*b*b-.25,A=-.5*b*Math.cos(k);var S0=m*u+h*A,A0=O*u+q*A,n0=d0*u+G*A+v0*b,e0=l*u+w*A+N*b,Y0=j*u+c*A;return t=F0+S0,D=U0+A0,s=p0+n0,U=g0+e0,F=M0+Y0,B==="n"&&(t-=g,D-=d,s-=i,U-=o,F-=p,a0+=D,m0+=t,C=Math.sin(a0),_=Math.cos(a0),a0>=.2?(F/=C,U-=_*F,w0+=U,z+=F,l0+=s):(H=Math.sin(z),Q=Math.cos(z),r=C*H,f=C*Q,s0=F*Q+D*_*H,o0=-F*H+D*_*Q,r+=s0,f+=o0,z%=X,z<0&&Y==="a"&&(z+=X),K=l0+w0+_*z,f0=s+U-D*z*C,K+=f0,W=z,z=Math.atan2(r,f),z<0&&Y==="a"&&(z+=X),Math.abs(W-z)>V0&&(z<W?z+=X:z-=X),l0+=s,w0=K-l0-_*z)),{ep:m0,inclp:a0,nodep:z,argpp:w0,mp:l0}}function X2(v){var a=v.epoch,h=v.ep,m=v.argpp,g=v.tc,o=v.inclp,p=v.nodep,d=v.np,i,y,x,M,I,T,Z,h0,$,L,R,P,V,S,l,w,N,j,c,O,q,d0,G,v0,e,i0,B,Y,m0,a0,z,w0,l0,r,f,_,C,Q,H,s0,o0,f0,u,A,t,U,F,D,s,b,K,W,k,J,z0,x0,u0,y0,F0,U0,p0,g0,M0,S0=.01675,A0=.0549,n0=29864797e-13,e0=47968065e-14,Y0=.39785416,I0=.91744867,b0=.1945905,K0=-.98088458,E0=d,_0=h,O0=Math.sin(p),P0=Math.cos(p),C0=Math.sin(m),D0=Math.cos(m),N0=Math.sin(o),$0=Math.cos(o),n=_0*_0,H0=1-n,k0=Math.sqrt(H0),c0=0,E=0,d2=0,f2=0,z2=0,Q0=a+18261.5+g/1440,G0=(4.523602-.00092422029*Q0)%X,q0=Math.sin(G0),J0=Math.cos(G0),i2=.91375164-.03568096*J0,r2=Math.sqrt(1-i2*i2),T0=.089683511*q0/r2,j0=Math.sqrt(1-T0*T0),r0=5.8351514+.001944368*Q0,v2=.39785416*q0/r2,C2=j0*J0+.91744867*T0*q0;v2=Math.atan2(v2,C2),v2+=r0-G0;var F2=Math.cos(v2),U2=Math.sin(v2);O=b0,q=K0,v0=I0,e=Y0,d0=P0,G=O0,R=n0;for(var T2=1/E0,p2=0;p2<2;)p2+=1,i=O*d0+q*v0*G,x=-q*d0+O*v0*G,Z=-O*G+q*v0*d0,h0=q*e,$=q*G+O*v0*d0,L=O*e,y=$0*Z+N0*h0,M=$0*$+N0*L,I=-N0*Z+$0*h0,T=-N0*$+$0*L,P=i*D0+y*C0,V=x*D0+M*C0,S=-i*C0+y*D0,l=-x*C0+M*D0,w=I*C0,N=T*C0,j=I*D0,c=T*D0,p0=12*P*P-3*S*S,g0=24*P*V-6*S*l,M0=12*V*V-3*l*l,W=3*(i*i+y*y)+p0*n,k=6*(i*x+y*M)+g0*n,J=3*(x*x+M*M)+M0*n,z0=-6*i*I+n*(-24*P*j-6*S*w),x0=-6*(i*T+x*I)+n*(-24*(V*j+P*c)+-6*(S*N+l*w)),u0=-6*x*T+n*(-24*V*c-6*l*N),y0=6*y*I+n*(24*P*w-6*S*j),F0=6*(M*I+y*T)+n*(24*(V*w+P*N)-6*(l*j+S*c)),U0=6*M*T+n*(24*V*N-6*l*c),W=W+W+H0*p0,k=k+k+H0*g0,J=J+J+H0*M0,F=R*T2,U=-.5*F/k0,D=F*k0,t=-15*_0*D,s=P*S+V*l,b=V*S+P*l,K=V*l-P*S,p2===1&&(i0=t,B=U,Y=F,m0=D,a0=s,z=b,w0=K,l0=W,r=k,f=J,_=z0,C=x0,Q=u0,H=y0,s0=F0,o0=U0,f0=p0,u=g0,A=M0,O=F2,q=U2,v0=i2,e=r2,d0=j0*P0+T0*O0,G=O0*j0-P0*T0,R=e0);var M2=(4.7199672+(.2299715*Q0-r0))%X,j2=(6.2565837+.017201977*Q0)%X,A2=2*i0*z,a2=2*i0*w0,o2=2*B*C,D2=2*B*(Q-_),I2=-2*Y*r,L2=-2*Y*(f-l0),S2=-2*Y*(-21-9*n)*S0,h2=2*m0*u,k2=2*m0*(A-f0),E2=-18*m0*S0,e2=-2*B*s0,q2=-2*B*(o0-H),b2=2*t*b,O2=2*t*K,P2=2*U*x0,r1=2*U*(u0-z0),h1=-2*F*k,m1=-2*F*(J-W),l1=-2*F*(-21-9*n)*A0,x1=2*D*g0,g1=2*D*(M0-p0),f1=-18*D*A0,z1=-2*U*F0,p1=-2*U*(U0-y0);return{snodm:O0,cnodm:P0,sinim:N0,cosim:$0,sinomm:C0,cosomm:D0,day:Q0,e3:O2,ee2:b2,em:_0,emsq:n,gam:r0,peo:c0,pgho:f2,pho:z2,pinco:E,plo:d2,rtemsq:k0,se2:A2,se3:a2,sgh2:h2,sgh3:k2,sgh4:E2,sh2:e2,sh3:q2,si2:o2,si3:D2,sl2:I2,sl3:L2,sl4:S2,s1:t,s2:U,s3:F,s4:D,s5:s,s6:b,s7:K,ss1:i0,ss2:B,ss3:Y,ss4:m0,ss5:a0,ss6:z,ss7:w0,sz1:l0,sz2:r,sz3:f,sz11:_,sz12:C,sz13:Q,sz21:H,sz22:s0,sz23:o0,sz31:f0,sz32:u,sz33:A,xgh2:x1,xgh3:g1,xgh4:f1,xh2:z1,xh3:p1,xi2:P2,xi3:r1,xl2:h1,xl3:m1,xl4:l1,nm:E0,z1:W,z2:k,z3:J,z11:z0,z12:x0,z13:u0,z21:y0,z22:F0,z23:U0,z31:p0,z32:g0,z33:M0,zmol:M2,zmos:j2}}function Z2(v){var a=v.cosim,h=v.argpo,m=v.s1,g=v.s2,o=v.s3,p=v.s4,d=v.s5,i=v.sinim,y=v.ss1,x=v.ss2,M=v.ss3,I=v.ss4,T=v.ss5,Z=v.sz1,h0=v.sz3,$=v.sz11,L=v.sz13,R=v.sz21,P=v.sz23,V=v.sz31,S=v.sz33,l=v.t,w=v.tc,N=v.gsto,j=v.mo,c=v.mdot,O=v.no,q=v.nodeo,d0=v.nodedot,G=v.xpidot,v0=v.z1,e=v.z3,i0=v.z11,B=v.z13,Y=v.z21,m0=v.z23,a0=v.z31,z=v.z33,w0=v.ecco,l0=v.eccsq,r=v.emsq,f=v.em,_=v.argpm,C=v.inclm,Q=v.mm,H=v.nm,s0=v.nodem,o0=v.irez,f0=v.atime,u=v.d2201,A=v.d2211,t=v.d3210,U=v.d3222,F=v.d4410,D=v.d4422,s=v.d5220,b=v.d5232,K=v.d5421,W=v.d5433,k=v.dedt,J=v.didt,z0=v.dmdt,x0=v.dnodt,u0=v.domdt,y0=v.del1,F0=v.del2,U0=v.del3,p0=v.xfact,g0=v.xlamo,M0=v.xli,S0=v.xni,A0,n0,e0,Y0,I0,b0,K0,E0,_0,O0,P0,C0,D0,N0,$0,n,H0,k0,c0,E,d2,f2,z2,Q0,G0,q0,J0,i2,r2,T0,j0,r0,v2=17891679e-13,C2=21460748e-13,F2=22123015e-14,U2=17891679e-13,T2=73636953e-16,p2=21765803e-16,M2=.0043752690880113,j2=37393792e-14,A2=11428639e-14,a2=.00015835218,o2=119459e-10;o0=0,H<.0052359877&&H>.0034906585&&(o0=1),H>=.00826&&H<=.00924&&f>=.5&&(o0=2);var D2=y*o2*T,I2=x*o2*($+L),L2=-o2*M*(Z+h0-14-6*r),S2=I*o2*(V+S-6),h2=-o2*x*(R+P);(C<.052359877||C>V0-.052359877)&&(h2=0),i!==0&&(h2/=i);var k2=S2-a*h2;k=D2+m*a2*d,J=I2+g*a2*(i0+B),z0=L2-a2*o*(v0+e-14-6*r);var E2=p*a2*(a0+z-6),e2=-a2*g*(Y+m0);(C<.052359877||C>V0-.052359877)&&(e2=0),u0=k2+E2,x0=h2,i!==0&&(u0-=a/i*e2,x0+=e2/i);var q2=0,b2=(N+w*M2)%X;if(f+=k*l,C+=J*l,_+=u0*l,s0+=x0*l,Q+=z0*l,o0!==0){if(T0=Math.pow(H/B0,l2),o0===2){j0=a*a;var O2=f;f=w0;var P2=r;r=l0,r0=f*r,N0=-.306-(f-.64)*.44,f<=.65?($0=3.616-13.247*f+16.29*r,H0=-19.302+117.39*f-228.419*r+156.591*r0,k0=-18.9068+109.7927*f-214.6334*r+146.5816*r0,c0=-41.122+242.694*f-471.094*r+313.953*r0,E=-146.407+841.88*f-1629.014*r+1083.435*r0,d2=-532.114+3017.977*f-5740.032*r+3708.276*r0):($0=-72.099+331.819*f-508.738*r+266.724*r0,H0=-346.844+1582.851*f-2415.925*r+1246.113*r0,k0=-342.585+1554.908*f-2366.899*r+1215.972*r0,c0=-1052.797+4758.686*f-7193.992*r+3651.957*r0,E=-3581.69+16178.11*f-24462.77*r+12422.52*r0,f>.715?d2=-5149.66+29936.92*f-54087.36*r+31324.56*r0:d2=1464.74-4664.75*f+3763.64*r),f<.7?(Q0=-919.2277+4988.61*f-9064.77*r+5542.21*r0,f2=-822.71072+4568.6173*f-8491.4146*r+5337.524*r0,z2=-853.666+4690.25*f-8624.77*r+5341.4*r0):(Q0=-37995.78+161616.52*f-229838.2*r+109377.94*r0,f2=-51752.104+218913.95*f-309468.16*r+146349.42*r0,z2=-40023.88+170470.89*f-242699.48*r+115605.82*r0),G0=i*i,A0=.75*(1+2*a+j0),n0=1.5*G0,Y0=1.875*i*(1-2*a-3*j0),I0=-1.875*i*(1+2*a-3*j0),K0=35*G0*A0,E0=39.375*G0*G0,_0=9.84375*i*(G0*(1-2*a-5*j0)+.33333333*(-2+4*a+6*j0)),O0=i*(4.92187512*G0*(-2-4*a+10*j0)+6.56250012*(1+2*a-3*j0)),P0=29.53125*i*(2-8*a+j0*(-12+8*a+10*j0)),C0=29.53125*i*(-2-8*a+j0*(12+8*a-10*j0)),i2=H*H,r2=T0*T0,J0=3*i2*r2,q0=J0*U2,u=q0*A0*N0,A=q0*n0*$0,J0*=T0,q0=J0*j2,t=q0*Y0*H0,U=q0*I0*k0,J0*=T0,q0=2*J0*T2,F=q0*K0*c0,D=q0*E0*E,J0*=T0,q0=J0*A2,s=q0*_0*d2,b=q0*O0*z2,q0=2*J0*p2,K=q0*P0*f2,W=q0*C0*Q0,g0=(j+q+q-(b2+b2))%X,p0=c+z0+2*(d0+x0-M2)-O,f=O2,r=P2}o0===1&&(D0=1+r*(-2.5+.8125*r),H0=1+2*r,n=1+r*(-6+6.60937*r),A0=.75*(1+a)*(1+a),e0=.9375*i*i*(1+3*a)-.75*(1+a),b0=1+a,b0*=1.875*b0*b0,y0=3*H*H*T0*T0,F0=2*y0*A0*D0*v2,U0=3*y0*b0*n*F2*T0,y0=y0*e0*H0*C2*T0,g0=(j+q+h-b2)%X,p0=c+G+z0+u0+x0-(O+M2)),M0=g0,S0=O,f0=0,H=O+q2}return{em:f,argpm:_,inclm:C,mm:Q,nm:H,nodem:s0,irez:o0,atime:f0,d2201:u,d2211:A,d3210:t,d3222:U,d4410:F,d4422:D,d5220:s,d5232:b,d5421:K,d5433:W,dedt:k,didt:J,dmdt:z0,dndt:q2,dnodt:x0,domdt:u0,del1:y0,del2:F0,del3:U0,xfact:p0,xlamo:g0,xli:M0,xni:S0}}function J2(v){var a=(v-2451545)/36525,h=-62e-7*a*a*a+.093104*a*a+(876600*3600+8640184812866e-6)*a+67310.54841;return h=h*m2/240%X,h<0&&(h+=X),h}function V2(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?J2(u2.apply(void 0,arguments)):J2.apply(void 0,arguments)}function t2(v){var a=v.ecco,h=v.epoch,m=v.inclo,g=v.opsmode,o=v.no,p=a*a,d=1-p,i=Math.sqrt(d),y=Math.cos(m),x=y*y,M=Math.pow(B0/o,l2),I=.75*W0*(3*x-1)/(i*d),T=I/(M*M),Z=M*(1-T*T-T*(1/3+134*T*T/81));T=I/(Z*Z),o/=1+T;var h0=Math.pow(B0/o,l2),$=Math.sin(m),L=h0*d,R=1-5*x,P=-R-x-x,V=1/h0,S=L*L,l=h0*(1-a),w="n",N;if(g==="a"){var j=h-7305,c=Math.floor(j+1e-8),O=j-c,q=.017202791694070362,d0=1.7321343856509375,G=5075514194322695e-30,v0=q+X;N=(d0+q*c+v0*O+j*j*G)%X,N<0&&(N+=X)}else N=V2(h+24332815e-1);return{no:o,method:w,ainv:V,ao:h0,con41:P,con42:R,cosio:y,cosio2:x,eccsq:p,omeosq:d,posq:S,rp:l,rteosq:i,sinio:$,gsto:N}}function R2(v){var a=v.irez,h=v.d2201,m=v.d2211,g=v.d3210,o=v.d3222,p=v.d4410,d=v.d4422,i=v.d5220,y=v.d5232,x=v.d5421,M=v.d5433,I=v.dedt,T=v.del1,Z=v.del2,h0=v.del3,$=v.didt,L=v.dmdt,R=v.dnodt,P=v.domdt,V=v.argpo,S=v.argpdot,l=v.t,w=v.tc,N=v.gsto,j=v.xfact,c=v.xlamo,O=v.no,q=v.atime,d0=v.em,G=v.argpm,v0=v.inclm,e=v.xli,i0=v.mm,B=v.xni,Y=v.nodem,m0=v.nm,a0=.13130908,z=2.8843198,w0=.37448087,l0=5.7686396,r=.95240898,f=1.8014998,_=1.050833,C=4.4108898,Q=.0043752690880113,H=720,s0=-720,o0=259200,f0,u,A,t,U,F,D,s,b=0,K=0,W=(N+w*Q)%X;if(d0+=I*l,v0+=$*l,G+=P*l,Y+=R*l,i0+=L*l,a!==0){(q===0||l*q<=0||Math.abs(l)<Math.abs(q))&&(q=0,B=O,e=c),l>0?f0=H:f0=s0;for(var k=381;k===381;)a!==2?(D=T*Math.sin(e-a0)+Z*Math.sin(2*(e-z))+h0*Math.sin(3*(e-w0)),U=B+j,F=T*Math.cos(e-a0)+2*Z*Math.cos(2*(e-z))+3*h0*Math.cos(3*(e-w0)),F*=U):(s=V+S*q,A=s+s,u=e+e,D=h*Math.sin(A+e-l0)+m*Math.sin(e-l0)+g*Math.sin(s+e-r)+o*Math.sin(-s+e-r)+p*Math.sin(A+u-f)+d*Math.sin(u-f)+i*Math.sin(s+e-_)+y*Math.sin(-s+e-_)+x*Math.sin(s+u-C)+M*Math.sin(-s+u-C),U=B+j,F=h*Math.cos(A+e-l0)+m*Math.cos(e-l0)+g*Math.cos(s+e-r)+o*Math.cos(-s+e-r)+i*Math.cos(s+e-_)+y*Math.cos(-s+e-_)+2*(p*Math.cos(A+u-f)+d*Math.cos(u-f)+x*Math.cos(s+u-C)+M*Math.cos(-s+u-C)),F*=U),Math.abs(l-q)>=H?k=381:(K=l-q,k=0),k===381&&(e+=U*f0+D*o0,B+=D*f0+F*o0,q+=f0);m0=B+D*K+F*K*K*.5,t=e+U*K+D*K*K*.5,a!==1?(i0=t-2*Y+2*W,b=m0-O):(i0=t-Y-G+W,b=m0-O),m0=O+b}return{atime:q,em:d0,argpm:G,inclm:v0,xli:e,mm:i0,xni:B,nodem:Y,dndt:b,nm:m0}}function Y2(v,a){var h,m,g,o,p,d,i,y,x,M,I,T,Z,h0,$,L,R,P,V,S,l,w,N,j,c,O,q,d0=15e-13;v.t=a,v.error=0;var G=v.mo+v.mdot*v.t,v0=v.argpo+v.argpdot*v.t,e=v.nodeo+v.nodedot*v.t;x=v0,l=G;var i0=v.t*v.t;if(N=e+v.nodecf*i0,R=1-v.cc1*v.t,P=v.bstar*v.cc4*v.t,V=v.t2cof*i0,v.isimp!==1){i=v.omgcof*v.t;var B=1+v.eta*Math.cos(G);d=v.xmcof*(B*B*B-v.delmo),L=i+d,l=G+L,x=v0-L,T=i0*v.t,Z=T*v.t,R=R-v.d2*i0-v.d3*T-v.d4*Z,P+=v.bstar*v.cc5*(Math.sin(l)-v.sinmao),V=V+v.t3cof*T+Z*(v.t4cof+v.t*v.t5cof)}w=v.no;var Y=v.ecco;if(S=v.inclo,v.method==="d"){h0=v.t;var m0={irez:v.irez,d2201:v.d2201,d2211:v.d2211,d3210:v.d3210,d3222:v.d3222,d4410:v.d4410,d4422:v.d4422,d5220:v.d5220,d5232:v.d5232,d5421:v.d5421,d5433:v.d5433,dedt:v.dedt,del1:v.del1,del2:v.del2,del3:v.del3,didt:v.didt,dmdt:v.dmdt,dnodt:v.dnodt,domdt:v.domdt,argpo:v.argpo,argpdot:v.argpdot,t:v.t,tc:h0,gsto:v.gsto,xfact:v.xfact,xlamo:v.xlamo,no:v.no,atime:v.atime,em:Y,argpm:x,inclm:S,xli:v.xli,mm:l,xni:v.xni,nodem:N,nm:w},a0=R2(m0);Y=a0.em,x=a0.argpm,S=a0.inclm,l=a0.mm,N=a0.nodem,w=a0.nm}if(w<=0)return v.error=2,[!1,!1];var z=Math.pow(B0/w,l2)*R*R;if(w=B0/Math.pow(z,1.5),Y-=P,Y>=1||Y<-.001)return v.error=1,[!1,!1];Y<1e-6&&(Y=1e-6),l+=v.no*V,c=l+x+N,N%=X,x%=X,c%=X,l=(c-x-N)%X;var w0=Math.sin(S),l0=Math.cos(S),r=Y;if(j=S,M=x,q=N,O=l,o=w0,g=l0,v.method==="d"){var f={inclo:v.inclo,init:"n",ep:r,inclp:j,nodep:q,argpp:M,mp:O,opsmode:v.operationmode},_=H2(v,f);if(r=_.ep,q=_.nodep,M=_.argpp,O=_.mp,j=_.inclp,j<0&&(j=-j,q+=V0,M-=V0),r<0||r>1)return v.error=3,[!1,!1]}v.method==="d"&&(o=Math.sin(j),g=Math.cos(j),v.aycof=-.5*X0*o,Math.abs(g+1)>15e-13?v.xlcof=-.25*X0*o*(3+5*g)/(1+g):v.xlcof=-.25*X0*o*(3+5*g)/d0);var C=r*Math.cos(M);L=1/(z*(1-r*r));var Q=r*Math.sin(M)+L*v.aycof,H=O+M+q+L*v.xlcof*C,s0=(H-q)%X;y=s0,$=9999.9;for(var o0=1;Math.abs($)>=1e-12&&o0<=10;)m=Math.sin(y),h=Math.cos(y),$=1-h*C-m*Q,$=(s0-Q*h+C*m-y)/$,Math.abs($)>=.95&&($>0?$=.95:$=-.95),y+=$,o0+=1;var f0=C*h+Q*m,u=C*m-Q*h,A=C*C+Q*Q,t=z*(1-A);if(t<0)return v.error=4,[!1,!1];var U=z*(1-f0),F=Math.sqrt(z)*u/U,D=Math.sqrt(t)/U,s=Math.sqrt(1-A);L=u/(1+s);var b=z/U*(m-Q-C*L),K=z/U*(h-C+Q*L);I=Math.atan2(b,K);var W=(K+K)*b,k=1-2*b*b;L=1/t;var J=.5*W0*L,z0=J*L;v.method==="d"&&(p=g*g,v.con41=3*p-1,v.x1mth2=1-p,v.x7thm1=7*p-1);var x0=U*(1-1.5*z0*s*v.con41)+.5*J*v.x1mth2*k;if(x0<1)return v.error=6,{position:!1,velocity:!1};I-=.25*z0*v.x7thm1*W;var u0=q+1.5*z0*g*W,y0=j+1.5*z0*g*o*k,F0=F-w*J*v.x1mth2*W/B0,U0=D+w*J*(v.x1mth2*k+1.5*v.con41)/B0,p0=Math.sin(I),g0=Math.cos(I),M0=Math.sin(u0),S0=Math.cos(u0),A0=Math.sin(y0),n0=Math.cos(y0),e0=-M0*n0,Y0=S0*n0,I0=e0*p0+S0*g0,b0=Y0*p0+M0*g0,K0=A0*p0,E0=e0*g0-S0*p0,_0=Y0*g0-M0*p0,O0=A0*g0,P0={x:x0*I0*L0,y:x0*b0*L0,z:x0*K0*L0},C0={x:(F0*I0+U0*E0)*w2,y:(F0*b0+U0*_0)*w2,z:(F0*K0+U0*O0)*w2};return{position:P0,velocity:C0}}function c2(v,a){var h=a.opsmode,m=a.satn,g=a.epoch,o=a.xbstar,p=a.xecco,d=a.xargpo,i=a.xinclo,y=a.xmo,x=a.xno,M=a.xnodeo,I,T,Z,h0,$,L,R,P,V,S,l,w,N,j,c,O,q,d0,G,v0,e,i0,B,Y,m0,a0,z,w0,l0,r,f,_,C,Q,H,s0,o0,f0,u,A,t,U,F,D,s,b,K,W,k,J,z0,x0,u0,y0,F0,U0,p0=15e-13;v.isimp=0,v.method="n",v.aycof=0,v.con41=0,v.cc1=0,v.cc4=0,v.cc5=0,v.d2=0,v.d3=0,v.d4=0,v.delmo=0,v.eta=0,v.argpdot=0,v.omgcof=0,v.sinmao=0,v.t=0,v.t2cof=0,v.t3cof=0,v.t4cof=0,v.t5cof=0,v.x1mth2=0,v.x7thm1=0,v.mdot=0,v.nodedot=0,v.xlcof=0,v.xmcof=0,v.nodecf=0,v.irez=0,v.d2201=0,v.d2211=0,v.d3210=0,v.d3222=0,v.d4410=0,v.d4422=0,v.d5220=0,v.d5232=0,v.d5421=0,v.d5433=0,v.dedt=0,v.del1=0,v.del2=0,v.del3=0,v.didt=0,v.dmdt=0,v.dnodt=0,v.domdt=0,v.e3=0,v.ee2=0,v.peo=0,v.pgho=0,v.pho=0,v.pinco=0,v.plo=0,v.se2=0,v.se3=0,v.sgh2=0,v.sgh3=0,v.sgh4=0,v.sh2=0,v.sh3=0,v.si2=0,v.si3=0,v.sl2=0,v.sl3=0,v.sl4=0,v.gsto=0,v.xfact=0,v.xgh2=0,v.xgh3=0,v.xgh4=0,v.xh2=0,v.xh3=0,v.xi2=0,v.xi3=0,v.xl2=0,v.xl3=0,v.xl4=0,v.xlamo=0,v.zmol=0,v.zmos=0,v.atime=0,v.xli=0,v.xni=0,v.bstar=o,v.ecco=p,v.argpo=d,v.inclo=i,v.mo=y,v.no=x,v.nodeo=M,v.operationmode=h;var g0=78/L0+1,M0=(120-78)/L0,S0=M0*M0*M0*M0;v.init="y",v.t=0;var A0={satn:m,ecco:v.ecco,epoch:g,inclo:v.inclo,no:v.no,method:v.method,opsmode:v.operationmode},n0=t2(A0),e0=n0.ao,Y0=n0.con42,I0=n0.cosio,b0=n0.cosio2,K0=n0.eccsq,E0=n0.omeosq,_0=n0.posq,O0=n0.rp,P0=n0.rteosq,C0=n0.sinio;if(v.no=n0.no,v.con41=n0.con41,v.gsto=n0.gsto,v.a=Math.pow(v.no*B2,-2/3),v.alta=v.a*(1+v.ecco)-1,v.altp=v.a*(1-v.ecco)-1,v.error=0,E0>=0||v.no>=0){if(v.isimp=0,O0<220/L0+1&&(v.isimp=1),z=g0,e=S0,d0=(O0-1)*L0,d0<156){z=d0-78,d0<98&&(z=20);var D0=(120-z)/L0;e=D0*D0*D0*D0,z=z/L0+1}G=1/_0,b=1/(e0-z),v.eta=e0*v.ecco*b,w=v.eta*v.eta,l=v.ecco*v.eta,v0=Math.abs(1-w),L=e*Math.pow(b,4),R=L/Math.pow(v0,3.5),h0=R*v.no*(e0*(1+1.5*w+l*(4+w))+.375*W0*b/v0*v.con41*(8+3*w*(8+w))),v.cc1=v.bstar*h0,$=0,v.ecco>1e-4&&($=-2*L*b*X0*v.no*C0/v.ecco),v.x1mth2=1-b0,v.cc4=2*v.no*R*e0*E0*(v.eta*(2+.5*w)+v.ecco*(.5+2*w)-W0*b/(e0*v0)*(-3*v.con41*(1-2*l+w*(1.5-.5*l))+.75*v.x1mth2*(2*w-l*(1+w))*Math.cos(2*v.argpo))),v.cc5=2*R*e0*E0*(1+2.75*(w+l)+l*w),P=b0*b0,F=1.5*W0*G*v.no,D=.5*F*W0*G,s=-.46875*Q2*G*G*v.no,v.mdot=v.no+.5*F*P0*v.con41+.0625*D*P0*(13-78*b0+137*P),v.argpdot=-.5*F*Y0+.0625*D*(7-114*b0+395*P)+s*(3-36*b0+49*P),W=-F*I0,v.nodedot=W+(.5*D*(4-19*b0)+2*s*(3-7*b0))*I0,K=v.argpdot+v.nodedot,v.omgcof=v.bstar*$*Math.cos(v.argpo),v.xmcof=0,v.ecco>1e-4&&(v.xmcof=-l2*L*v.bstar/l),v.nodecf=3.5*E0*W*v.cc1,v.t2cof=1.5*v.cc1,Math.abs(I0+1)>15e-13?v.xlcof=-.25*X0*C0*(3+5*I0)/(1+I0):v.xlcof=-.25*X0*C0*(3+5*I0)/p0,v.aycof=-.5*X0*C0;var N0=1+v.eta*Math.cos(v.mo);if(v.delmo=N0*N0*N0,v.sinmao=Math.sin(v.mo),v.x7thm1=7*b0-1,2*V0/v.no>=225){v.method="d",v.isimp=1,t=0,c=v.inclo;var $0={epoch:g,ep:v.ecco,argpp:v.argpo,tc:t,inclp:v.inclo,nodep:v.nodeo,np:v.no,e3:v.e3,ee2:v.ee2,peo:v.peo,pgho:v.pgho,pho:v.pho,pinco:v.pinco,plo:v.plo,se2:v.se2,se3:v.se3,sgh2:v.sgh2,sgh3:v.sgh3,sgh4:v.sgh4,sh2:v.sh2,sh3:v.sh3,si2:v.si2,si3:v.si3,sl2:v.sl2,sl3:v.sl3,sl4:v.sl4,xgh2:v.xgh2,xgh3:v.xgh3,xgh4:v.xgh4,xh2:v.xh2,xh3:v.xh3,xi2:v.xi2,xi3:v.xi3,xl2:v.xl2,xl3:v.xl3,xl4:v.xl4,zmol:v.zmol,zmos:v.zmos},n=X2($0);v.e3=n.e3,v.ee2=n.ee2,v.peo=n.peo,v.pgho=n.pgho,v.pho=n.pho,v.pinco=n.pinco,v.plo=n.plo,v.se2=n.se2,v.se3=n.se3,v.sgh2=n.sgh2,v.sgh3=n.sgh3,v.sgh4=n.sgh4,v.sh2=n.sh2,v.sh3=n.sh3,v.si2=n.si2,v.si3=n.si3,v.sl2=n.sl2,v.sl3=n.sl3,v.sl4=n.sl4,T=n.sinim,I=n.cosim,V=n.em,S=n.emsq,i0=n.s1,B=n.s2,Y=n.s3,m0=n.s4,a0=n.s5,w0=n.ss1,l0=n.ss2,r=n.ss3,f=n.ss4,_=n.ss5,C=n.sz1,Q=n.sz3,H=n.sz11,s0=n.sz13,o0=n.sz21,f0=n.sz23,u=n.sz31,A=n.sz33,v.xgh2=n.xgh2,v.xgh3=n.xgh3,v.xgh4=n.xgh4,v.xh2=n.xh2,v.xh3=n.xh3,v.xi2=n.xi2,v.xi3=n.xi3,v.xl2=n.xl2,v.xl3=n.xl3,v.xl4=n.xl4,v.zmol=n.zmol,v.zmos=n.zmos,q=n.nm,k=n.z1,J=n.z3,z0=n.z11,x0=n.z13,u0=n.z21,y0=n.z23,F0=n.z31,U0=n.z33;var H0={inclo:c,init:v.init,ep:v.ecco,inclp:v.inclo,nodep:v.nodeo,argpp:v.argpo,mp:v.mo,opsmode:v.operationmode},k0=H2(v,H0);v.ecco=k0.ep,v.inclo=k0.inclp,v.nodeo=k0.nodep,v.argpo=k0.argpp,v.mo=k0.mp,N=0,j=0,O=0;var c0={cosim:I,emsq:S,argpo:v.argpo,s1:i0,s2:B,s3:Y,s4:m0,s5:a0,sinim:T,ss1:w0,ss2:l0,ss3:r,ss4:f,ss5:_,sz1:C,sz3:Q,sz11:H,sz13:s0,sz21:o0,sz23:f0,sz31:u,sz33:A,t:v.t,tc:t,gsto:v.gsto,mo:v.mo,mdot:v.mdot,no:v.no,nodeo:v.nodeo,nodedot:v.nodedot,xpidot:K,z1:k,z3:J,z11:z0,z13:x0,z21:u0,z23:y0,z31:F0,z33:U0,ecco:v.ecco,eccsq:K0,em:V,argpm:N,inclm:c,mm:O,nm:q,nodem:j,irez:v.irez,atime:v.atime,d2201:v.d2201,d2211:v.d2211,d3210:v.d3210,d3222:v.d3222,d4410:v.d4410,d4422:v.d4422,d5220:v.d5220,d5232:v.d5232,d5421:v.d5421,d5433:v.d5433,dedt:v.dedt,didt:v.didt,dmdt:v.dmdt,dnodt:v.dnodt,domdt:v.domdt,del1:v.del1,del2:v.del2,del3:v.del3,xfact:v.xfact,xlamo:v.xlamo,xli:v.xli,xni:v.xni},E=Z2(c0);v.irez=E.irez,v.atime=E.atime,v.d2201=E.d2201,v.d2211=E.d2211,v.d3210=E.d3210,v.d3222=E.d3222,v.d4410=E.d4410,v.d4422=E.d4422,v.d5220=E.d5220,v.d5232=E.d5232,v.d5421=E.d5421,v.d5433=E.d5433,v.dedt=E.dedt,v.didt=E.didt,v.dmdt=E.dmdt,v.dnodt=E.dnodt,v.domdt=E.domdt,v.del1=E.del1,v.del2=E.del2,v.del3=E.del3,v.xfact=E.xfact,v.xlamo=E.xlamo,v.xli=E.xli,v.xni=E.xni}v.isimp!==1&&(Z=v.cc1*v.cc1,v.d2=4*e0*b*Z,U=v.d2*b*v.cc1/3,v.d3=(17*e0+z)*U,v.d4=.5*U*e0*b*(221*e0+31*z)*v.cc1,v.t3cof=v.d2+2*Z,v.t4cof=.25*(3*v.d3+v.cc1*(12*v.d2+10*Z)),v.t5cof=.2*(3*v.d4+12*v.cc1*v.d3+6*v.d2*v.d2+15*Z*(2*v.d2+Z)))}Y2(v,0),v.init="n"}function v1(v,a){var h="i",m=1440/(2*V0),g=0,o={};o.error=0,o.satnum=v.substring(2,7),o.epochyr=parseInt(v.substring(18,20),10),o.epochdays=parseFloat(v.substring(20,32)),o.ndot=parseFloat(v.substring(33,43)),o.nddot=parseFloat(".".concat(parseInt(v.substring(44,50),10),"E").concat(v.substring(50,52))),o.bstar=parseFloat("".concat(v.substring(53,54),".").concat(parseInt(v.substring(54,59),10),"E").concat(v.substring(59,61))),o.inclo=parseFloat(a.substring(8,16)),o.nodeo=parseFloat(a.substring(17,25)),o.ecco=parseFloat(".".concat(a.substring(26,33))),o.argpo=parseFloat(a.substring(34,42)),o.mo=parseFloat(a.substring(43,51)),o.no=parseFloat(a.substring(52,63)),o.no/=m,o.inclo*=m2,o.nodeo*=m2,o.argpo*=m2,o.mo*=m2,o.epochyr<57?g=o.epochyr+2e3:g=o.epochyr+1900;var p=W2(g,o.epochdays),d=p.mon,i=p.day,y=p.hr,x=p.minute,M=p.sec;return o.jdsatepoch=u2(g,d,i,y,x,M),c2(o,{opsmode:h,satn:o.satnum,epoch:o.jdsatepoch-24332815e-1,xbstar:o.bstar,xecco:o.ecco,xargpo:o.argpo,xinclo:o.inclo,xmo:o.mo,xno:o.no,xnodeo:o.nodeo}),o}function a1(v,a){for(var h=6378.137,m=6356.7523142,g=Math.sqrt(v.x*v.x+v.y*v.y),o=(h-m)/h,p=2*o-o*o,d=Math.atan2(v.y,v.x)-a;d<-V0;)d+=X;for(;d>V0;)d-=X;for(var i=20,y=0,x=Math.atan2(v.z,Math.sqrt(v.x*v.x+v.y*v.y)),M;y<i;)M=1/Math.sqrt(1-p*(Math.sin(x)*Math.sin(x))),x=Math.atan2(v.z+h*M*p*Math.sin(x),g),y+=1;var I=g/Math.cos(x)-h*M;return{longitude:d,latitude:x,height:I}}const o1={appName:"Stuff in Space",baseUrl:"/StuffInSpace",propergateInterval:500,pushHistory:!1,logLevel:"info"},x2=["error","warn","info","debug"],n2={};let _2={};function y2(v,a,h,...m){v.enabledOutputs[a]&&h(a.toUpperCase(),...m)}function $2(v){const a=x2.indexOf(v.toLowerCase());if(a<0)throw new Error("Unknown log level");for(let h=0;h<x2.length;h++)n2[x2[h]]=h<=a}function n1(){return{..._2,setLogLevel:$2}}function d1(){_2={error:y2.bind(this,{enabledOutputs:n2},"error",console.error),warn:y2.bind(this,{enabledOutputs:n2},"warn",console.warn),info:y2.bind(this,{enabledOutputs:n2},"info",console.info),debug:y2.bind(this,{enabledOutputs:n2},"debug",console.debug)};for(let v=0;v<x2.length;v++)n2[x2[v]]=!0}d1(),$2(o1.logLevel);var s2=n1();const Z0=[];let t0,R0,g2;function i1(){const v=new Date;let a=u2(v.getUTCFullYear(),v.getUTCMonth()+1,v.getUTCDate(),v.getUTCHours(),v.getUTCMinutes(),v.getUTCSeconds());a+=v.getUTCMilliseconds()*115741e-13;const h=V2(a);for(let m=0;m<Z0.length;m++){const g=(a-Z0[m].jdsatepoch)*1440,o=Y2(Z0[m],g);let p,d,i,y,x,M,I;try{p=o.position.x,d=o.position.y,i=o.position.z,y=o.velocity.x,x=o.velocity.y,M=o.velocity.z,I=a1(o.position,h).height}catch{p=0,d=0,i=0,y=0,x=0,M=0,I=0}t0[m*3]=p,t0[m*3+1]=d,t0[m*3+2]=i,R0[m*3]=y,R0[m*3+1]=x,R0[m*3+2]=M,g2[m]=I}postMessage({satPos:t0.buffer,satVel:R0.buffer,satAlt:g2.buffer},[t0.buffer,R0.buffer,g2.buffer]),t0=new Float32Array(Z0.length*3),R0=new Float32Array(Z0.length*3),g2=new Float32Array(Z0.length)}onmessage=function(v){try{s2.debug("Sat cruncher worker handling message");const a=Date.now(),h=JSON.parse(v.data),m=h.length,g=[];for(let p=0;p<m;p++){const d={},i=v1(h[p].TLE_LINE1,h[p].TLE_LINE2);d.inclination=i.inclo,d.eccentricity=i.ecco,d.raan=i.nodeo,d.argPe=i.argpo,d.meanMotion=i.no*60*24/(2*Math.PI),d.semiMajorAxis=(8681663653e-3/d.meanMotion)**(2/3),d.semiMinorAxis=d.semiMajorAxis*Math.sqrt(1-d.eccentricity**2),d.apogee=d.semiMajorAxis*(1+d.eccentricity)-6371,d.perigee=d.semiMajorAxis*(1-d.eccentricity)-6371,d.period=1440/d.meanMotion,g.push(d),Z0.push(i)}t0=new Float32Array(m*3),R0=new Float32Array(m*3),g2=new Float32Array(m);const o=Date.now();postMessage({extraData:JSON.stringify(g)}),s2.debug(`sat-cruncher init: ${Date.now()-a} ms  (incl post: ${Date.now()-o} ms)`),i1()}catch(a){s2.error("Error while runnning worker",a)}}})();
