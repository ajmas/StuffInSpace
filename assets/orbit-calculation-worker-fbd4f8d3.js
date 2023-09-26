(function(){"use strict";/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var G0=Math.PI,d0=G0*2,h2=G0/180,W2=398600.8,S0=6378.135,Q0=60/Math.sqrt(S0*S0*S0/W2),q2=S0*Q0/60,B2=1/Q0,Z0=.001082616,G2=-253881e-11,Q2=-165597e-11,$0=G2/Z0,r2=2/3;function V2(v,a){for(var n=[31,v%4===0?29:28,31,30,31,30,31,31,30,31,30,31],f=Math.floor(a),l=1,d=0;f>d+n[l-1]&&l<12;)d+=n[l-1],l+=1;var T=l,I=f-d,i=(a-f)*24,y=Math.floor(i);i=(i-y)*60;var g=Math.floor(i),w=(i-g)*60;return{mon:T,day:I,hr:y,minute:g,sec:w}}function P2(v,a,n,f,l,d){var T=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*v-Math.floor(7*(v+Math.floor((a+9)/12))*.25)+Math.floor(275*a/9)+n+17210135e-1+((T/6e4+d/60+l)/60+f)/24}function y2(v,a,n,f,l,d,T){if(v instanceof Date){var I=v;return P2(I.getUTCFullYear(),I.getUTCMonth()+1,I.getUTCDate(),I.getUTCHours(),I.getUTCMinutes(),I.getUTCSeconds(),I.getUTCMilliseconds())}return P2(v,a,n,f,l,d,T)}function H2(v,a){var n=v.e3,f=v.ee2,l=v.peo,d=v.pgho,T=v.pho,I=v.pinco,i=v.plo,y=v.se2,g=v.se3,w=v.sgh2,Z=v.sgh3,O=v.sgh4,$=v.sh2,r0=v.sh3,W=v.si2,D=v.si3,R=v.sl2,P=v.sl3,Y=v.sl4,S=v.t,r=v.xgh2,b=v.xgh3,H=v.xgh4,F=v.xh2,t=v.xh3,N=v.xi2,M=v.xi3,n0=v.xl2,B=v.xl3,c=v.xl4,z=v.zmol,i0=v.zmos,G=a.init,A=a.opsmode,m0=a.ep,v0=a.inclp,x=a.nodep,w0=a.argpp,x0=a.mp,h,m,K,u,V,_,U0,a0,f0,e,L,s,C,U,j,q,p,Q,X,E,J,z0=119459e-10,l0=.01675,u0=.00015835218,q0=.0549;J=i0+z0*S,G==="y"&&(J=i0),E=J+2*l0*Math.sin(J),p=Math.sin(E),e=.5*p*p-.25,L=-.5*p*Math.cos(E);var T0=y*e+g*L,I0=W*e+D*L,p0=R*e+P*L+Y*p,g0=w*e+Z*L+O*p,M0=$*e+r0*L;J=z+u0*S,G==="y"&&(J=z),E=J+2*q0*Math.sin(J),p=Math.sin(E),e=.5*p*p-.25,L=-.5*p*Math.cos(E);var E0=f*e+n*L,j0=N*e+M*L,o0=n0*e+B*L+c*p,b0=r*e+b*L+H*p,A0=F*e+t*L;return s=T0+E0,j=I0+j0,q=p0+o0,C=g0+b0,U=M0+A0,G==="n"&&(s-=l,j-=I,q-=i,C-=d,U-=T,v0+=j,m0+=s,u=Math.sin(v0),K=Math.cos(v0),v0>=.2?(U/=u,C-=K*U,w0+=C,x+=U,x0+=q):(_=Math.sin(x),V=Math.cos(x),h=u*_,m=u*V,U0=U*V+j*K*_,a0=-U*_+j*K*V,h+=U0,m+=a0,x%=d0,x<0&&A==="a"&&(x+=d0),Q=x0+w0+K*x,f0=q+C-j*x*u,Q+=f0,X=x,x=Math.atan2(h,m),x<0&&A==="a"&&(x+=d0),Math.abs(X-x)>G0&&(x<X?x+=d0:x-=d0),x0+=q,w0=Q-x0-K*x)),{ep:m0,inclp:v0,nodep:x,argpp:w0,mp:x0}}function X2(v){var a=v.epoch,n=v.ep,f=v.argpp,l=v.tc,d=v.inclp,T=v.nodep,I=v.np,i,y,g,w,Z,O,$,r0,W,D,R,P,Y,S,r,b,H,F,t,N,M,n0,B,c,z,i0,G,A,m0,v0,x,w0,x0,h,m,K,u,V,_,U0,a0,f0,e,L,s,C,U,j,q,p,Q,X,E,J,z0,l0,u0,q0,T0,I0,p0,g0,M0,E0=.01675,j0=.0549,o0=29864797e-13,b0=47968065e-14,A0=.39785416,D0=.91744867,e0=.1945905,V0=-.98088458,N0=I,K0=n,P0=Math.sin(T),H0=Math.cos(T),C0=Math.sin(f),O0=Math.cos(f),_0=Math.sin(d),W0=Math.cos(d),o=K0*K0,J0=1-o,k0=Math.sqrt(J0),s0=0,k=0,o2=0,x2=0,l2=0,X0=a+18261.5+l/1440,B0=(4.523602-.00092422029*X0)%d0,y0=Math.sin(B0),Y0=Math.cos(B0),d2=.91375164-.03568096*Y0,n2=Math.sqrt(1-d2*d2),F0=.089683511*y0/n2,L0=Math.sqrt(1-F0*F0),h0=5.8351514+.001944368*X0,R0=.39785416*y0/n2,u2=L0*Y0+.91744867*F0*y0;R0=Math.atan2(R0,u2),R0+=h0-B0;var U2=Math.cos(R0),C2=Math.sin(R0);N=e0,M=V0,c=D0,z=A0,n0=H0,B=P0,R=o0;for(var T2=1/N0,g2=0;g2<2;)g2+=1,i=N*n0+M*c*B,g=-M*n0+N*c*B,$=-N*B+M*c*n0,r0=M*z,W=M*B+N*c*n0,D=N*z,y=W0*$+_0*r0,w=W0*W+_0*D,Z=-_0*$+W0*r0,O=-_0*W+W0*D,P=i*O0+y*C0,Y=g*O0+w*C0,S=-i*C0+y*O0,r=-g*C0+w*O0,b=Z*C0,H=O*C0,F=Z*O0,t=O*O0,p0=12*P*P-3*S*S,g0=24*P*Y-6*S*r,M0=12*Y*Y-3*r*r,X=3*(i*i+y*y)+p0*o,E=6*(i*g+y*w)+g0*o,J=3*(g*g+w*w)+M0*o,z0=-6*i*Z+o*(-24*P*F-6*S*b),l0=-6*(i*O+g*Z)+o*(-24*(Y*F+P*t)+-6*(S*H+r*b)),u0=-6*g*O+o*(-24*Y*t-6*r*H),q0=6*y*Z+o*(24*P*b-6*S*F),T0=6*(w*Z+y*O)+o*(24*(Y*b+P*H)-6*(r*F+S*t)),I0=6*w*O+o*(24*Y*H-6*r*t),X=X+X+J0*p0,E=E+E+J0*g0,J=J+J+J0*M0,U=R*T2,C=-.5*U/k0,j=U*k0,s=-15*K0*j,q=P*S+Y*r,p=Y*S+P*r,Q=Y*r-P*S,g2===1&&(i0=s,G=C,A=U,m0=j,v0=q,x=p,w0=Q,x0=X,h=E,m=J,K=z0,u=l0,V=u0,_=q0,U0=T0,a0=I0,f0=p0,e=g0,L=M0,N=U2,M=C2,c=d2,z=n2,n0=L0*H0+F0*P0,B=P0*L0-H0*F0,R=b0);var f2=(4.7199672+(.2299715*X0-h0))%d0,I2=(6.2565837+.017201977*X0)%d0,F2=2*i0*x,t0=2*i0*w0,c0=2*G*u,L2=2*G*(V-K),j2=-2*A*h,O2=-2*A*(m-x0),D2=-2*A*(-21-9*o)*E0,i2=2*m0*e,S2=2*m0*(L-f0),E2=-18*m0*E0,z2=-2*G*U0,e2=-2*G*(a0-_),p2=2*s*p,k2=2*s*Q,N2=2*C*l0,d1=2*C*(u0-z0),n1=-2*U*E,i1=-2*U*(J-X),h1=-2*U*(-21-9*o)*j0,r1=2*j*g0,m1=2*j*(M0-p0),x1=-18*j*j0,l1=-2*C*T0,g1=-2*C*(I0-q0);return{snodm:P0,cnodm:H0,sinim:_0,cosim:W0,sinomm:C0,cosomm:O0,day:X0,e3:k2,ee2:p2,em:K0,emsq:o,gam:h0,peo:s0,pgho:x2,pho:l2,pinco:k,plo:o2,rtemsq:k0,se2:F2,se3:t0,sgh2:i2,sgh3:S2,sgh4:E2,sh2:z2,sh3:e2,si2:c0,si3:L2,sl2:j2,sl3:O2,sl4:D2,s1:s,s2:C,s3:U,s4:j,s5:q,s6:p,s7:Q,ss1:i0,ss2:G,ss3:A,ss4:m0,ss5:v0,ss6:x,ss7:w0,sz1:x0,sz2:h,sz3:m,sz11:K,sz12:u,sz13:V,sz21:_,sz22:U0,sz23:a0,sz31:f0,sz32:e,sz33:L,xgh2:r1,xgh3:m1,xgh4:x1,xh2:l1,xh3:g1,xi2:N2,xi3:d1,xl2:n1,xl3:i1,xl4:h1,nm:N0,z1:X,z2:E,z3:J,z11:z0,z12:l0,z13:u0,z21:q0,z22:T0,z23:I0,z31:p0,z32:g0,z33:M0,zmol:f2,zmos:I2}}function Z2(v){var a=v.cosim,n=v.argpo,f=v.s1,l=v.s2,d=v.s3,T=v.s4,I=v.s5,i=v.sinim,y=v.ss1,g=v.ss2,w=v.ss3,Z=v.ss4,O=v.ss5,$=v.sz1,r0=v.sz3,W=v.sz11,D=v.sz13,R=v.sz21,P=v.sz23,Y=v.sz31,S=v.sz33,r=v.t,b=v.tc,H=v.gsto,F=v.mo,t=v.mdot,N=v.no,M=v.nodeo,n0=v.nodedot,B=v.xpidot,c=v.z1,z=v.z3,i0=v.z11,G=v.z13,A=v.z21,m0=v.z23,v0=v.z31,x=v.z33,w0=v.ecco,x0=v.eccsq,h=v.emsq,m=v.em,K=v.argpm,u=v.inclm,V=v.mm,_=v.nm,U0=v.nodem,a0=v.irez,f0=v.atime,e=v.d2201,L=v.d2211,s=v.d3210,C=v.d3222,U=v.d4410,j=v.d4422,q=v.d5220,p=v.d5232,Q=v.d5421,X=v.d5433,E=v.dedt,J=v.didt,z0=v.dmdt,l0=v.dnodt,u0=v.domdt,q0=v.del1,T0=v.del2,I0=v.del3,p0=v.xfact,g0=v.xlamo,M0=v.xli,E0=v.xni,j0,o0,b0,A0,D0,e0,V0,N0,K0,P0,H0,C0,O0,_0,W0,o,J0,k0,s0,k,o2,x2,l2,X0,B0,y0,Y0,d2,n2,F0,L0,h0,R0=17891679e-13,u2=21460748e-13,U2=22123015e-14,C2=17891679e-13,T2=73636953e-16,g2=21765803e-16,f2=.0043752690880113,I2=37393792e-14,F2=11428639e-14,t0=.00015835218,c0=119459e-10;a0=0,_<.0052359877&&_>.0034906585&&(a0=1),_>=.00826&&_<=.00924&&m>=.5&&(a0=2);var L2=y*c0*O,j2=g*c0*(W+D),O2=-c0*w*($+r0-14-6*h),D2=Z*c0*(Y+S-6),i2=-c0*g*(R+P);(u<.052359877||u>G0-.052359877)&&(i2=0),i!==0&&(i2/=i);var S2=D2-a*i2;E=L2+f*t0*I,J=j2+l*t0*(i0+G),z0=O2-t0*d*(c+z-14-6*h);var E2=T*t0*(v0+x-6),z2=-t0*l*(A+m0);(u<.052359877||u>G0-.052359877)&&(z2=0),u0=S2+E2,l0=i2,i!==0&&(u0-=a/i*z2,l0+=z2/i);var e2=0,p2=(H+b*f2)%d0;if(m+=E*r,u+=J*r,K+=u0*r,U0+=l0*r,V+=z0*r,a0!==0){if(F0=Math.pow(_/Q0,r2),a0===2){L0=a*a;var k2=m;m=w0;var N2=h;h=x0,h0=m*h,_0=-.306-(m-.64)*.44,m<=.65?(W0=3.616-13.247*m+16.29*h,J0=-19.302+117.39*m-228.419*h+156.591*h0,k0=-18.9068+109.7927*m-214.6334*h+146.5816*h0,s0=-41.122+242.694*m-471.094*h+313.953*h0,k=-146.407+841.88*m-1629.014*h+1083.435*h0,o2=-532.114+3017.977*m-5740.032*h+3708.276*h0):(W0=-72.099+331.819*m-508.738*h+266.724*h0,J0=-346.844+1582.851*m-2415.925*h+1246.113*h0,k0=-342.585+1554.908*m-2366.899*h+1215.972*h0,s0=-1052.797+4758.686*m-7193.992*h+3651.957*h0,k=-3581.69+16178.11*m-24462.77*h+12422.52*h0,m>.715?o2=-5149.66+29936.92*m-54087.36*h+31324.56*h0:o2=1464.74-4664.75*m+3763.64*h),m<.7?(X0=-919.2277+4988.61*m-9064.77*h+5542.21*h0,x2=-822.71072+4568.6173*m-8491.4146*h+5337.524*h0,l2=-853.666+4690.25*m-8624.77*h+5341.4*h0):(X0=-37995.78+161616.52*m-229838.2*h+109377.94*h0,x2=-51752.104+218913.95*m-309468.16*h+146349.42*h0,l2=-40023.88+170470.89*m-242699.48*h+115605.82*h0),B0=i*i,j0=.75*(1+2*a+L0),o0=1.5*B0,A0=1.875*i*(1-2*a-3*L0),D0=-1.875*i*(1+2*a-3*L0),V0=35*B0*j0,N0=39.375*B0*B0,K0=9.84375*i*(B0*(1-2*a-5*L0)+.33333333*(-2+4*a+6*L0)),P0=i*(4.92187512*B0*(-2-4*a+10*L0)+6.56250012*(1+2*a-3*L0)),H0=29.53125*i*(2-8*a+L0*(-12+8*a+10*L0)),C0=29.53125*i*(-2-8*a+L0*(12+8*a-10*L0)),d2=_*_,n2=F0*F0,Y0=3*d2*n2,y0=Y0*C2,e=y0*j0*_0,L=y0*o0*W0,Y0*=F0,y0=Y0*I2,s=y0*A0*J0,C=y0*D0*k0,Y0*=F0,y0=2*Y0*T2,U=y0*V0*s0,j=y0*N0*k,Y0*=F0,y0=Y0*F2,q=y0*K0*o2,p=y0*P0*l2,y0=2*Y0*g2,Q=y0*H0*x2,X=y0*C0*X0,g0=(F+M+M-(p2+p2))%d0,p0=t+z0+2*(n0+l0-f2)-N,m=k2,h=N2}a0===1&&(O0=1+h*(-2.5+.8125*h),J0=1+2*h,o=1+h*(-6+6.60937*h),j0=.75*(1+a)*(1+a),b0=.9375*i*i*(1+3*a)-.75*(1+a),e0=1+a,e0*=1.875*e0*e0,q0=3*_*_*F0*F0,T0=2*q0*j0*O0*R0,I0=3*q0*e0*o*U2*F0,q0=q0*b0*J0*u2*F0,g0=(F+M+n-p2)%d0,p0=t+B+z0+u0+l0-(N+f2)),M0=g0,E0=N,f0=0,_=N+e2}return{em:m,argpm:K,inclm:u,mm:V,nm:_,nodem:U0,irez:a0,atime:f0,d2201:e,d2211:L,d3210:s,d3222:C,d4410:U,d4422:j,d5220:q,d5232:p,d5421:Q,d5433:X,dedt:E,didt:J,dmdt:z0,dndt:e2,dnodt:l0,domdt:u0,del1:q0,del2:T0,del3:I0,xfact:p0,xlamo:g0,xli:M0,xni:E0}}function _2(v){var a=(v-2451545)/36525,n=-62e-7*a*a*a+.093104*a*a+(876600*3600+8640184812866e-6)*a+67310.54841;return n=n*h2/240%d0,n<0&&(n+=d0),n}function $2(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?_2(y2.apply(void 0,arguments)):_2.apply(void 0,arguments)}function s2(v){var a=v.ecco,n=v.epoch,f=v.inclo,l=v.opsmode,d=v.no,T=a*a,I=1-T,i=Math.sqrt(I),y=Math.cos(f),g=y*y,w=Math.pow(Q0/d,r2),Z=.75*Z0*(3*g-1)/(i*I),O=Z/(w*w),$=w*(1-O*O-O*(1/3+134*O*O/81));O=Z/($*$),d/=1+O;var r0=Math.pow(Q0/d,r2),W=Math.sin(f),D=r0*I,R=1-5*g,P=-R-g-g,Y=1/r0,S=D*D,r=r0*(1-a),b="n",H;if(l==="a"){var F=n-7305,t=Math.floor(F+1e-8),N=F-t,M=.017202791694070362,n0=1.7321343856509375,B=5075514194322695e-30,c=M+d0;H=(n0+M*t+c*N+F*F*B)%d0,H<0&&(H+=d0)}else H=$2(n+24332815e-1);return{no:d,method:b,ainv:Y,ao:r0,con41:P,con42:R,cosio:y,cosio2:g,eccsq:T,omeosq:I,posq:S,rp:r,rteosq:i,sinio:W,gsto:H}}function R2(v){var a=v.irez,n=v.d2201,f=v.d2211,l=v.d3210,d=v.d3222,T=v.d4410,I=v.d4422,i=v.d5220,y=v.d5232,g=v.d5421,w=v.d5433,Z=v.dedt,O=v.del1,$=v.del2,r0=v.del3,W=v.didt,D=v.dmdt,R=v.dnodt,P=v.domdt,Y=v.argpo,S=v.argpdot,r=v.t,b=v.tc,H=v.gsto,F=v.xfact,t=v.xlamo,N=v.no,M=v.atime,n0=v.em,B=v.argpm,c=v.inclm,z=v.xli,i0=v.mm,G=v.xni,A=v.nodem,m0=v.nm,v0=.13130908,x=2.8843198,w0=.37448087,x0=5.7686396,h=.95240898,m=1.8014998,K=1.050833,u=4.4108898,V=.0043752690880113,_=720,U0=-720,a0=259200,f0,e,L,s,C,U,j,q,p=0,Q=0,X=(H+b*V)%d0;if(n0+=Z*r,c+=W*r,B+=P*r,A+=R*r,i0+=D*r,a!==0){(M===0||r*M<=0||Math.abs(r)<Math.abs(M))&&(M=0,G=N,z=t),r>0?f0=_:f0=U0;for(var E=381;E===381;)a!==2?(j=O*Math.sin(z-v0)+$*Math.sin(2*(z-x))+r0*Math.sin(3*(z-w0)),C=G+F,U=O*Math.cos(z-v0)+2*$*Math.cos(2*(z-x))+3*r0*Math.cos(3*(z-w0)),U*=C):(q=Y+S*M,L=q+q,e=z+z,j=n*Math.sin(L+z-x0)+f*Math.sin(z-x0)+l*Math.sin(q+z-h)+d*Math.sin(-q+z-h)+T*Math.sin(L+e-m)+I*Math.sin(e-m)+i*Math.sin(q+z-K)+y*Math.sin(-q+z-K)+g*Math.sin(q+e-u)+w*Math.sin(-q+e-u),C=G+F,U=n*Math.cos(L+z-x0)+f*Math.cos(z-x0)+l*Math.cos(q+z-h)+d*Math.cos(-q+z-h)+i*Math.cos(q+z-K)+y*Math.cos(-q+z-K)+2*(T*Math.cos(L+e-m)+I*Math.cos(e-m)+g*Math.cos(q+e-u)+w*Math.cos(-q+e-u)),U*=C),Math.abs(r-M)>=_?E=381:(Q=r-M,E=0),E===381&&(z+=C*f0+j*a0,G+=j*f0+U*a0,M+=f0);m0=G+j*Q+U*Q*Q*.5,s=z+C*Q+j*Q*Q*.5,a!==1?(i0=s-2*A+2*X,p=m0-N):(i0=s-A-B+X,p=m0-N),m0=N+p}return{atime:M,em:n0,argpm:B,inclm:c,xli:z,mm:i0,xni:G,nodem:A,dndt:p,nm:m0}}function J2(v,a){var n,f,l,d,T,I,i,y,g,w,Z,O,$,r0,W,D,R,P,Y,S,r,b,H,F,t,N,M,n0=15e-13;v.t=a,v.error=0;var B=v.mo+v.mdot*v.t,c=v.argpo+v.argpdot*v.t,z=v.nodeo+v.nodedot*v.t;g=c,r=B;var i0=v.t*v.t;if(H=z+v.nodecf*i0,R=1-v.cc1*v.t,P=v.bstar*v.cc4*v.t,Y=v.t2cof*i0,v.isimp!==1){i=v.omgcof*v.t;var G=1+v.eta*Math.cos(B);I=v.xmcof*(G*G*G-v.delmo),D=i+I,r=B+D,g=c-D,O=i0*v.t,$=O*v.t,R=R-v.d2*i0-v.d3*O-v.d4*$,P+=v.bstar*v.cc5*(Math.sin(r)-v.sinmao),Y=Y+v.t3cof*O+$*(v.t4cof+v.t*v.t5cof)}b=v.no;var A=v.ecco;if(S=v.inclo,v.method==="d"){r0=v.t;var m0={irez:v.irez,d2201:v.d2201,d2211:v.d2211,d3210:v.d3210,d3222:v.d3222,d4410:v.d4410,d4422:v.d4422,d5220:v.d5220,d5232:v.d5232,d5421:v.d5421,d5433:v.d5433,dedt:v.dedt,del1:v.del1,del2:v.del2,del3:v.del3,didt:v.didt,dmdt:v.dmdt,dnodt:v.dnodt,domdt:v.domdt,argpo:v.argpo,argpdot:v.argpdot,t:v.t,tc:r0,gsto:v.gsto,xfact:v.xfact,xlamo:v.xlamo,no:v.no,atime:v.atime,em:A,argpm:g,inclm:S,xli:v.xli,mm:r,xni:v.xni,nodem:H,nm:b},v0=R2(m0);A=v0.em,g=v0.argpm,S=v0.inclm,r=v0.mm,H=v0.nodem,b=v0.nm}if(b<=0)return v.error=2,[!1,!1];var x=Math.pow(Q0/b,r2)*R*R;if(b=Q0/Math.pow(x,1.5),A-=P,A>=1||A<-.001)return v.error=1,[!1,!1];A<1e-6&&(A=1e-6),r+=v.no*Y,t=r+g+H,H%=d0,g%=d0,t%=d0,r=(t-g-H)%d0;var w0=Math.sin(S),x0=Math.cos(S),h=A;if(F=S,w=g,M=H,N=r,d=w0,l=x0,v.method==="d"){var m={inclo:v.inclo,init:"n",ep:h,inclp:F,nodep:M,argpp:w,mp:N,opsmode:v.operationmode},K=H2(v,m);if(h=K.ep,M=K.nodep,w=K.argpp,N=K.mp,F=K.inclp,F<0&&(F=-F,M+=G0,w-=G0),h<0||h>1)return v.error=3,[!1,!1]}v.method==="d"&&(d=Math.sin(F),l=Math.cos(F),v.aycof=-.5*$0*d,Math.abs(l+1)>15e-13?v.xlcof=-.25*$0*d*(3+5*l)/(1+l):v.xlcof=-.25*$0*d*(3+5*l)/n0);var u=h*Math.cos(w);D=1/(x*(1-h*h));var V=h*Math.sin(w)+D*v.aycof,_=N+w+M+D*v.xlcof*u,U0=(_-M)%d0;y=U0,W=9999.9;for(var a0=1;Math.abs(W)>=1e-12&&a0<=10;)f=Math.sin(y),n=Math.cos(y),W=1-n*u-f*V,W=(U0-V*n+u*f-y)/W,Math.abs(W)>=.95&&(W>0?W=.95:W=-.95),y+=W,a0+=1;var f0=u*n+V*f,e=u*f-V*n,L=u*u+V*V,s=x*(1-L);if(s<0)return v.error=4,[!1,!1];var C=x*(1-f0),U=Math.sqrt(x)*e/C,j=Math.sqrt(s)/C,q=Math.sqrt(1-L);D=e/(1+q);var p=x/C*(f-V-u*D),Q=x/C*(n-u+V*D);Z=Math.atan2(p,Q);var X=(Q+Q)*p,E=1-2*p*p;D=1/s;var J=.5*Z0*D,z0=J*D;v.method==="d"&&(T=l*l,v.con41=3*T-1,v.x1mth2=1-T,v.x7thm1=7*T-1);var l0=C*(1-1.5*z0*q*v.con41)+.5*J*v.x1mth2*E;if(l0<1)return v.error=6,{position:!1,velocity:!1};Z-=.25*z0*v.x7thm1*X;var u0=M+1.5*z0*l*X,q0=F+1.5*z0*l*d*E,T0=U-b*J*v.x1mth2*X/Q0,I0=j+b*J*(v.x1mth2*E+1.5*v.con41)/Q0,p0=Math.sin(Z),g0=Math.cos(Z),M0=Math.sin(u0),E0=Math.cos(u0),j0=Math.sin(q0),o0=Math.cos(q0),b0=-M0*o0,A0=E0*o0,D0=b0*p0+E0*g0,e0=A0*p0+M0*g0,V0=j0*p0,N0=b0*g0-E0*p0,K0=A0*g0-M0*p0,P0=j0*g0,H0={x:l0*D0*S0,y:l0*e0*S0,z:l0*V0*S0},C0={x:(T0*D0+I0*N0)*q2,y:(T0*e0+I0*K0)*q2,z:(T0*V0+I0*P0)*q2};return{position:H0,velocity:C0}}function t2(v,a){var n=a.opsmode,f=a.satn,l=a.epoch,d=a.xbstar,T=a.xecco,I=a.xargpo,i=a.xinclo,y=a.xmo,g=a.xno,w=a.xnodeo,Z,O,$,r0,W,D,R,P,Y,S,r,b,H,F,t,N,M,n0,B,c,z,i0,G,A,m0,v0,x,w0,x0,h,m,K,u,V,_,U0,a0,f0,e,L,s,C,U,j,q,p,Q,X,E,J,z0,l0,u0,q0,T0,I0,p0=15e-13;v.isimp=0,v.method="n",v.aycof=0,v.con41=0,v.cc1=0,v.cc4=0,v.cc5=0,v.d2=0,v.d3=0,v.d4=0,v.delmo=0,v.eta=0,v.argpdot=0,v.omgcof=0,v.sinmao=0,v.t=0,v.t2cof=0,v.t3cof=0,v.t4cof=0,v.t5cof=0,v.x1mth2=0,v.x7thm1=0,v.mdot=0,v.nodedot=0,v.xlcof=0,v.xmcof=0,v.nodecf=0,v.irez=0,v.d2201=0,v.d2211=0,v.d3210=0,v.d3222=0,v.d4410=0,v.d4422=0,v.d5220=0,v.d5232=0,v.d5421=0,v.d5433=0,v.dedt=0,v.del1=0,v.del2=0,v.del3=0,v.didt=0,v.dmdt=0,v.dnodt=0,v.domdt=0,v.e3=0,v.ee2=0,v.peo=0,v.pgho=0,v.pho=0,v.pinco=0,v.plo=0,v.se2=0,v.se3=0,v.sgh2=0,v.sgh3=0,v.sgh4=0,v.sh2=0,v.sh3=0,v.si2=0,v.si3=0,v.sl2=0,v.sl3=0,v.sl4=0,v.gsto=0,v.xfact=0,v.xgh2=0,v.xgh3=0,v.xgh4=0,v.xh2=0,v.xh3=0,v.xi2=0,v.xi3=0,v.xl2=0,v.xl3=0,v.xl4=0,v.xlamo=0,v.zmol=0,v.zmos=0,v.atime=0,v.xli=0,v.xni=0,v.bstar=d,v.ecco=T,v.argpo=I,v.inclo=i,v.mo=y,v.no=g,v.nodeo=w,v.operationmode=n;var g0=78/S0+1,M0=(120-78)/S0,E0=M0*M0*M0*M0;v.init="y",v.t=0;var j0={satn:f,ecco:v.ecco,epoch:l,inclo:v.inclo,no:v.no,method:v.method,opsmode:v.operationmode},o0=s2(j0),b0=o0.ao,A0=o0.con42,D0=o0.cosio,e0=o0.cosio2,V0=o0.eccsq,N0=o0.omeosq,K0=o0.posq,P0=o0.rp,H0=o0.rteosq,C0=o0.sinio;if(v.no=o0.no,v.con41=o0.con41,v.gsto=o0.gsto,v.a=Math.pow(v.no*B2,-2/3),v.alta=v.a*(1+v.ecco)-1,v.altp=v.a*(1-v.ecco)-1,v.error=0,N0>=0||v.no>=0){if(v.isimp=0,P0<220/S0+1&&(v.isimp=1),x=g0,z=E0,n0=(P0-1)*S0,n0<156){x=n0-78,n0<98&&(x=20);var O0=(120-x)/S0;z=O0*O0*O0*O0,x=x/S0+1}B=1/K0,p=1/(b0-x),v.eta=b0*v.ecco*p,b=v.eta*v.eta,r=v.ecco*v.eta,c=Math.abs(1-b),D=z*Math.pow(p,4),R=D/Math.pow(c,3.5),r0=R*v.no*(b0*(1+1.5*b+r*(4+b))+.375*Z0*p/c*v.con41*(8+3*b*(8+b))),v.cc1=v.bstar*r0,W=0,v.ecco>1e-4&&(W=-2*D*p*$0*v.no*C0/v.ecco),v.x1mth2=1-e0,v.cc4=2*v.no*R*b0*N0*(v.eta*(2+.5*b)+v.ecco*(.5+2*b)-Z0*p/(b0*c)*(-3*v.con41*(1-2*r+b*(1.5-.5*r))+.75*v.x1mth2*(2*b-r*(1+b))*Math.cos(2*v.argpo))),v.cc5=2*R*b0*N0*(1+2.75*(b+r)+r*b),P=e0*e0,U=1.5*Z0*B*v.no,j=.5*U*Z0*B,q=-.46875*Q2*B*B*v.no,v.mdot=v.no+.5*U*H0*v.con41+.0625*j*H0*(13-78*e0+137*P),v.argpdot=-.5*U*A0+.0625*j*(7-114*e0+395*P)+q*(3-36*e0+49*P),X=-U*D0,v.nodedot=X+(.5*j*(4-19*e0)+2*q*(3-7*e0))*D0,Q=v.argpdot+v.nodedot,v.omgcof=v.bstar*W*Math.cos(v.argpo),v.xmcof=0,v.ecco>1e-4&&(v.xmcof=-r2*D*v.bstar/r),v.nodecf=3.5*N0*X*v.cc1,v.t2cof=1.5*v.cc1,Math.abs(D0+1)>15e-13?v.xlcof=-.25*$0*C0*(3+5*D0)/(1+D0):v.xlcof=-.25*$0*C0*(3+5*D0)/p0,v.aycof=-.5*$0*C0;var _0=1+v.eta*Math.cos(v.mo);if(v.delmo=_0*_0*_0,v.sinmao=Math.sin(v.mo),v.x7thm1=7*e0-1,2*G0/v.no>=225){v.method="d",v.isimp=1,s=0,t=v.inclo;var W0={epoch:l,ep:v.ecco,argpp:v.argpo,tc:s,inclp:v.inclo,nodep:v.nodeo,np:v.no,e3:v.e3,ee2:v.ee2,peo:v.peo,pgho:v.pgho,pho:v.pho,pinco:v.pinco,plo:v.plo,se2:v.se2,se3:v.se3,sgh2:v.sgh2,sgh3:v.sgh3,sgh4:v.sgh4,sh2:v.sh2,sh3:v.sh3,si2:v.si2,si3:v.si3,sl2:v.sl2,sl3:v.sl3,sl4:v.sl4,xgh2:v.xgh2,xgh3:v.xgh3,xgh4:v.xgh4,xh2:v.xh2,xh3:v.xh3,xi2:v.xi2,xi3:v.xi3,xl2:v.xl2,xl3:v.xl3,xl4:v.xl4,zmol:v.zmol,zmos:v.zmos},o=X2(W0);v.e3=o.e3,v.ee2=o.ee2,v.peo=o.peo,v.pgho=o.pgho,v.pho=o.pho,v.pinco=o.pinco,v.plo=o.plo,v.se2=o.se2,v.se3=o.se3,v.sgh2=o.sgh2,v.sgh3=o.sgh3,v.sgh4=o.sgh4,v.sh2=o.sh2,v.sh3=o.sh3,v.si2=o.si2,v.si3=o.si3,v.sl2=o.sl2,v.sl3=o.sl3,v.sl4=o.sl4,O=o.sinim,Z=o.cosim,Y=o.em,S=o.emsq,i0=o.s1,G=o.s2,A=o.s3,m0=o.s4,v0=o.s5,w0=o.ss1,x0=o.ss2,h=o.ss3,m=o.ss4,K=o.ss5,u=o.sz1,V=o.sz3,_=o.sz11,U0=o.sz13,a0=o.sz21,f0=o.sz23,e=o.sz31,L=o.sz33,v.xgh2=o.xgh2,v.xgh3=o.xgh3,v.xgh4=o.xgh4,v.xh2=o.xh2,v.xh3=o.xh3,v.xi2=o.xi2,v.xi3=o.xi3,v.xl2=o.xl2,v.xl3=o.xl3,v.xl4=o.xl4,v.zmol=o.zmol,v.zmos=o.zmos,M=o.nm,E=o.z1,J=o.z3,z0=o.z11,l0=o.z13,u0=o.z21,q0=o.z23,T0=o.z31,I0=o.z33;var J0={inclo:t,init:v.init,ep:v.ecco,inclp:v.inclo,nodep:v.nodeo,argpp:v.argpo,mp:v.mo,opsmode:v.operationmode},k0=H2(v,J0);v.ecco=k0.ep,v.inclo=k0.inclp,v.nodeo=k0.nodep,v.argpo=k0.argpp,v.mo=k0.mp,H=0,F=0,N=0;var s0={cosim:Z,emsq:S,argpo:v.argpo,s1:i0,s2:G,s3:A,s4:m0,s5:v0,sinim:O,ss1:w0,ss2:x0,ss3:h,ss4:m,ss5:K,sz1:u,sz3:V,sz11:_,sz13:U0,sz21:a0,sz23:f0,sz31:e,sz33:L,t:v.t,tc:s,gsto:v.gsto,mo:v.mo,mdot:v.mdot,no:v.no,nodeo:v.nodeo,nodedot:v.nodedot,xpidot:Q,z1:E,z3:J,z11:z0,z13:l0,z21:u0,z23:q0,z31:T0,z33:I0,ecco:v.ecco,eccsq:V0,em:Y,argpm:H,inclm:t,mm:N,nm:M,nodem:F,irez:v.irez,atime:v.atime,d2201:v.d2201,d2211:v.d2211,d3210:v.d3210,d3222:v.d3222,d4410:v.d4410,d4422:v.d4422,d5220:v.d5220,d5232:v.d5232,d5421:v.d5421,d5433:v.d5433,dedt:v.dedt,didt:v.didt,dmdt:v.dmdt,dnodt:v.dnodt,domdt:v.domdt,del1:v.del1,del2:v.del2,del3:v.del3,xfact:v.xfact,xlamo:v.xlamo,xli:v.xli,xni:v.xni},k=Z2(s0);v.irez=k.irez,v.atime=k.atime,v.d2201=k.d2201,v.d2211=k.d2211,v.d3210=k.d3210,v.d3222=k.d3222,v.d4410=k.d4410,v.d4422=k.d4422,v.d5220=k.d5220,v.d5232=k.d5232,v.d5421=k.d5421,v.d5433=k.d5433,v.dedt=k.dedt,v.didt=k.didt,v.dmdt=k.dmdt,v.dnodt=k.dnodt,v.domdt=k.domdt,v.del1=k.del1,v.del2=k.del2,v.del3=k.del3,v.xfact=k.xfact,v.xlamo=k.xlamo,v.xli=k.xli,v.xni=k.xni}v.isimp!==1&&($=v.cc1*v.cc1,v.d2=4*b0*p*$,C=v.d2*p*v.cc1/3,v.d3=(17*b0+x)*C,v.d4=.5*C*b0*p*(221*b0+31*x)*v.cc1,v.t3cof=v.d2+2*$,v.t4cof=.25*(3*v.d3+v.cc1*(12*v.d2+10*$)),v.t5cof=.2*(3*v.d4+12*v.cc1*v.d3+6*v.d2*v.d2+15*$*(2*v.d2+$)))}J2(v,0),v.init="n"}function c2(v,a){var n="i",f=1440/(2*G0),l=0,d={};d.error=0,d.satnum=v.substring(2,7),d.epochyr=parseInt(v.substring(18,20),10),d.epochdays=parseFloat(v.substring(20,32)),d.ndot=parseFloat(v.substring(33,43)),d.nddot=parseFloat(".".concat(parseInt(v.substring(44,50),10),"E").concat(v.substring(50,52))),d.bstar=parseFloat("".concat(v.substring(53,54),".").concat(parseInt(v.substring(54,59),10),"E").concat(v.substring(59,61))),d.inclo=parseFloat(a.substring(8,16)),d.nodeo=parseFloat(a.substring(17,25)),d.ecco=parseFloat(".".concat(a.substring(26,33))),d.argpo=parseFloat(a.substring(34,42)),d.mo=parseFloat(a.substring(43,51)),d.no=parseFloat(a.substring(52,63)),d.no/=f,d.inclo*=h2,d.nodeo*=h2,d.argpo*=h2,d.mo*=h2,d.epochyr<57?l=d.epochyr+2e3:l=d.epochyr+1900;var T=V2(l,d.epochdays),I=T.mon,i=T.day,y=T.hr,g=T.minute,w=T.sec;return d.jdsatepoch=y2(l,I,i,y,g,w),t2(d,{opsmode:n,satn:d.satnum,epoch:d.jdsatepoch-24332815e-1,xbstar:d.bstar,xecco:d.ecco,xargpo:d.argpo,xinclo:d.inclo,xmo:d.mo,xno:d.no,xnodeo:d.nodeo}),d}const v1={appName:"Stuff in Space",baseUrl:"/StuffInSpace",propergateInterval:500,pushHistory:!1,logLevel:"info"},m2=["error","warn","info","debug"],v2={};let Y2={};function M2(v,a,n,...f){v.enabledOutputs[a]&&n(a.toUpperCase(),...f)}function A2(v){const a=m2.indexOf(v.toLowerCase());if(a<0)throw new Error("Unknown log level");for(let n=0;n<m2.length;n++)v2[m2[n]]=n<=a}function a1(){return{...Y2,setLogLevel:A2}}function o1(){Y2={error:M2.bind(this,{enabledOutputs:v2},"error",console.error),warn:M2.bind(this,{enabledOutputs:v2},"warn",console.warn),info:M2.bind(this,{enabledOutputs:v2},"info",console.info),debug:M2.bind(this,{enabledOutputs:v2},"debug",console.debug)};for(let v=0;v<m2.length;v++)v2[m2[v]]=!0}o1(),A2(v1.logLevel);var w2=a1();let b2;const a2=[];let K2;onmessage=function(v){if(w2.debug("WORKER: Orbital calculation worker handling message"),v.data.isInit){K2=Date.now(),w2.debug("id",K2),w2.debug("message.data.isInit");const a=JSON.parse(v.data.satData);for(let n=0;n<a.length;n++)a2[n]=c2(a[n].TLE_LINE1,a[n].TLE_LINE2);b2=v.data.numSegs}else{const{satId:a}=v.data,n=new Float32Array((b2+1)*3);if(!a2||!a2[a])return;const f=new Date;let l=y2(f.getUTCFullYear(),f.getUTCMonth()+1,f.getUTCDate(),f.getUTCHours(),f.getUTCMinutes(),f.getUTCSeconds());l+=f.getUTCMilliseconds()*115741e-13;const d=(l-a2[a].jdsatepoch)*1440,I=2*Math.PI/a2[a].no/b2;for(let i=0;i<b2+1;i++){const y=d+i*I,g=J2(a2[a],y).position;try{n[i*3]=g.x,n[i*3+1]=g.y,n[i*3+2]=g.z}catch{n[i*3]=0,n[i*3+1]=0,n[i*3+2]=0}}postMessage({pointsOut:n.buffer,satId:a},[n.buffer])}}})();