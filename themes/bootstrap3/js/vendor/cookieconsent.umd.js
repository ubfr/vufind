/*!
* CookieConsent 3.0.0-rc.15
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e){'use strict';const t='opt-in',o='opt-out',n='show--consent',s='show--preferences',a='disable--interaction',c='data-category',r='div',i='button',l='aria-hidden',d='btn-group',f='click',_='data-role',u='consentModal',p='preferencesModal';class m{constructor(){this.t={mode:t,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],g:!1,v:null,h:null,C:null,S:'',M:!0,D:!1,T:!1,k:!1,A:!1,N:[],H:!1,F:!0,V:[],j:!1,P:'',I:!1,L:[],O:[],R:[],B:[],G:!1,J:!1,U:!1,$:[],q:[],K:null,W:[],X:[],Y:{},Z:{},ee:{},te:{},oe:{},ne:[]},this.se={ae:{},ce:{}},this.re={},this.ie={le:'cc:onFirstConsent',de:'cc:onConsent',fe:'cc:onChange',_e:'cc:onModalShow',ue:'cc:onModalHide',pe:'cc:onModalReady'}}}const g=new m,b=(e,t)=>e.indexOf(t),v=(e,t)=>-1!==b(e,t),y=e=>Array.isArray(e),h=e=>'string'==typeof e,C=e=>!!e&&'object'==typeof e&&!y(e),w=e=>'function'==typeof e,S=e=>Object.keys(e),x=e=>Array.from(new Set(e)),M=()=>document.activeElement,D=e=>e.preventDefault(),T=(e,t)=>e.querySelectorAll(t),E=e=>e.dispatchEvent(new Event('change')),k=e=>{const t=document.createElement(e);return e===i&&(t.type=e),t},A=(e,t,o)=>e.setAttribute(t,o),N=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},H=(e,t,o)=>e.getAttribute(o?'data-'+t:t),F=(e,t)=>e.appendChild(t),V=(e,t)=>e.classList.add(t),j=(e,t)=>V(e,'cm__'+t),P=(e,t)=>V(e,'pm__'+t),I=(e,t)=>e.classList.remove(t),L=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=L(n)}return t},O=()=>{const e={},{L:t,Y:o,Z:n}=g.o;for(const s of t)e[s]=J(n[s],S(o[s]));return e},R=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),B=(e,t,o,n)=>{e.addEventListener(t,o),n&&g.o.m.push({me:e,ge:t,be:o})},G=()=>{const e=g.t.cookie.expiresAfterDays;return w(e)?e(g.o.P):e},J=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!v(n,e))).concat(n.filter((e=>!v(o,e))))},U=e=>{g.o.O=x(e),g.o.P=(()=>{let e='custom';const{O:t,L:o,R:n}=g.o,s=t.length;return s===o.length?e='all':s===n.length&&(e='necessary'),e})()},$=(e,t,o,n)=>{const s='accept-',{show:a,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,d=e||document,_=e=>T(d,`[data-cc="${e}"]`),u=(e,t)=>{D(e),l(t),i(),r()},p=_('show-preferencesModal'),m=_('show-consentModal'),b=_(s+'all'),v=_(s+'necessary'),y=_(s+'custom'),h=g.t.lazyHtmlGeneration;for(const e of p)A(e,'aria-haspopup','dialog'),B(e,f,(e=>{D(e),c()})),h&&(B(e,'mouseenter',(e=>{D(e),g.o.A||o(t,n)}),!0),B(e,'focus',(()=>{g.o.A||o(t,n)})));for(let e of m)A(e,'aria-haspopup','dialog'),B(e,f,(e=>{D(e),a(!0)}),!0);for(let e of b)B(e,f,(e=>{u(e,'all')}),!0);for(let e of y)B(e,f,(e=>{u(e)}),!0);for(let e of v)B(e,f,(e=>{u(e,[])}),!0)},z=(e,t,o)=>{e&&(o&&(e.tabIndex=-1),e.focus()),t&&(g.o.K=1===t?g.se.ve:g.se.ye,g.o.W=1===t?g.o.$:g.o.q),o&&e&&e.removeAttribute('tabindex')};let q;const K=e=>{clearTimeout(q),e?V(g.se.he,a):q=setTimeout((()=>{I(g.se.he,a)}),500)},Q=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],W=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${Q[e]}"/></svg>`,X=['[href]',i,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),Y=e=>{const{o:t,se:o}=g,n=(e,t)=>{const o=T(e,X);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.D&&n(o.Ce,t.$),2===e&&t.A&&n(o.we,t.q)},Z=(e,t,o)=>{const{fe:n,de:s,le:a,ue:c,pe:r,_e:i}=g.re,l=g.ie,d={cookie:g.o.p};if(t){const n={modalName:t};return e===l._e?w(i)&&i(n):e===l.ue?w(c)&&c(n):(n.modal=o,w(r)&&r(n)),R(e,n)}e===l.le?w(a)&&a(L(d)):e===l.de?w(s)&&s(L(d)):(d.changedCategories=g.o.V,d.changedServices=g.o.te,w(n)&&n(L(d))),R(e,L(d))},ee=e=>{const{Z:t,te:o,L:n,Y:s,ne:a,p:r,V:i}=g.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=s[e][o];if(!n)continue;const{onAccept:a,onReject:c}=n;!n.Se&&v(t[e],o)&&w(a)?(n.Se=!0,a()):n.Se&&!v(t[e],o)&&w(c)&&(n.Se=!1,c())}}if(!g.t.manageScriptTags)return;const l=a,d=e||r.categories||[],f=(e,n)=>{if(n>=e.length)return;const s=a[n];if(s.xe)return f(e,n+1);const r=s.Me,l=s.De,_=s.Te,u=v(d,l),p=!!_&&v(t[l],_);if(!_&&!s.Ee&&u||!_&&s.Ee&&!u&&v(i,l)||_&&!s.Ee&&p||_&&s.Ee&&!p&&v(o[l]||[],_)){s.xe=!0;const t=H(r,'type',!0);N(r,'type',!!t),N(r,c);let o=H(r,'src',!0);o&&N(r,'src',!0);const a=k('script');a.textContent=r.innerHTML;for(const{nodeName:e}of r.attributes)A(a,e,r[e]||H(r,e));t&&(a.type=t),o?a.src=o:o=r.src;const i=!!o&&(!t||['text/javascript','module'].includes(t));if(i&&(a.onload=a.onerror=()=>{f(e,++n)}),r.replaceWith(a),i)return}f(e,++n)};f(l,0)},te='bottom',oe='left',ne='center',se='right',ae='inline',ce='wide',re='pm--',ie=['middle','top',te],le=[oe,ne,se],de={box:{ke:[ce,ae],Ae:ie,Ne:le,He:te,Fe:se},cloud:{ke:[ae],Ae:ie,Ne:le,He:te,Fe:ne},bar:{ke:[ae],Ae:ie.slice(1),Ne:[],He:te,Fe:''}},fe={box:{ke:[],Ae:[],Ne:[],He:'',Fe:''},bar:{ke:[ce],Ae:[],Ne:[oe,se],He:'',Fe:oe}},_e=e=>{const t=g.o.i.guiOptions,o=t&&t.consentModal,n=t&&t.preferencesModal;0===e&&ue(g.se.Ce,de,o,'cm--','box','cm'),1===e&&ue(g.se.we,fe,n,re,'box','pm')},ue=(e,t,o,n,s,a)=>{e.className=a;const c=o&&o.layout,r=o&&o.position,i=o&&o.flipButtons,l=!o||!1!==o.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],u=f in t?f:s,p=t[u],m=v(p.ke,_)&&_,b=r&&r.split(' ')||[],y=b[0],h=n===re?b[0]:b[1],C=v(p.Ae,y)?y:p.He,w=v(p.Ne,h)?h:p.Fe,S=t=>{t&&V(e,n+t)};S(u),S(m),S(C),S(w),i&&S('flip');const x=a+'__btn--secondary';if('cm'===a){const{Ve:e,je:t}=g.se;e&&(l?I(e,x):V(e,x)),t&&(l?I(t,x):V(t,x))}else{const{Pe:e}=g.se;e&&(l?I(e,x):V(e,x))}},pe=(e,t)=>{const o=g.o,n=g.se,{hide:s,hidePreferences:a,acceptCategory:c}=e,u=e=>{c(e),a(),s()},m=o.u&&o.u.preferencesModal;if(!m)return;const b=m.title,v=m.closeIconLabel,y=m.acceptAllBtn,w=m.acceptNecessaryBtn,x=m.savePreferencesBtn,M=m.sections,D=y||w||x;if(n.ye)n.Ie=k(r),P(n.Ie,'body');else{n.ye=k(r),V(n.ye,'pm-wrapper'),n.ye.tabIndex=-1;const e=k('div');V(e,'pm-overlay'),F(n.ye,e),B(e,f,a),n.we=k(r),n.we.style.visibility='hidden',V(n.we,'pm'),A(n.we,'role','dialog'),A(n.we,l,!0),A(n.we,'aria-modal',!0),A(n.we,'aria-labelledby','pm__title'),B(n.he,'keydown',(e=>{27===e.keyCode&&a()}),!0),n.Le=k(r),P(n.Le,'header'),n.Oe=k(r),P(n.Oe,'title'),n.Oe.id='pm__title',A(n.Oe,'role','heading'),A(n.Oe,'aria-level','2'),n.Re=k(i),P(n.Re,'close-btn'),A(n.Re,'aria-label',m.closeIconLabel||''),B(n.Re,f,a),n.Be=k('span'),n.Be.innerHTML=W(),F(n.Re,n.Be),n.Ge=k(r),P(n.Ge,'body'),n.Je=k(r),P(n.Je,'footer');var T=k(r);V(T,'btns');var E=k(r),N=k(r);P(E,d),P(N,d),F(n.Je,E),F(n.Je,N),F(n.Le,n.Oe),F(n.Le,n.Re),F(n.we,n.Le),F(n.we,n.Ge),D&&F(n.we,n.Je),F(n.ye,n.we)}let H;b&&(n.Oe.innerHTML=b,v&&A(n.Re,'aria-label',v)),M&&M.forEach(((e,t)=>{const s=e.title,a=e.description,c=e.linkedCategory,d=c&&o.I[c],_=e.cookieTable,u=_&&_.body,p=_&&_.caption,g=u&&u.length>0,b=!!d,v=b&&o.Y[c],y=C(v)&&S(v)||[],w=b&&(!!a||!!g||S(v).length>0);var x=k(r);if(P(x,'section'),w||a){var M=k(r);P(M,'section-desc-wrapper')}let D=y.length;if(w&&D>0){const e=k(r);P(e,'section-services');for(const t of y){const o=v[t],n=o&&o.label||t,s=k(r),a=k(r),i=k(r),l=k(r);P(s,'service'),P(l,'service-title'),P(a,'service-header'),P(i,'service-icon');const f=me(n,t,d,!0,c);l.innerHTML=n,F(a,i),F(a,l),F(s,a),F(s,f),F(e,s)}F(M,e)}if(s){var T=k(r),E=k(b?i:r);if(P(T,'section-title-wrapper'),P(E,'section-title'),E.innerHTML=s,F(T,E),b){const e=k('span');e.innerHTML=W(2,3.5),P(e,'section-arrow'),F(T,e),x.className+='--toggle';const t=me(s,c,d);let o=m.serviceCounterLabel;if(D>0&&h(o)){let e=k('span');P(e,'badge'),P(e,'service-counter'),A(e,l,!0),A(e,'data-servicecounter',D),o&&(o=o.split('|'),o=o.length>1&&D>1?o[1]:o[0],A(e,'data-counterlabel',o)),e.innerHTML=D+(o?' '+o:''),F(E,e)}if(w){P(x,'section--expandable');var N=c+'-desc';A(E,'aria-expanded',!1),A(E,'aria-controls',N)}F(T,t)}else A(E,'role','heading'),A(E,'aria-level','3');F(x,T)}if(a){var j=k(r);P(j,'section-desc'),j.innerHTML=a,F(M,j)}if(w&&(A(M,l,'true'),M.id=N,((e,t,o)=>{B(E,f,(()=>{t.classList.contains('is-expanded')?(I(t,'is-expanded'),A(o,'aria-expanded','false'),A(e,l,'true')):(V(t,'is-expanded'),A(o,'aria-expanded','true'),A(e,l,'false'))}))})(M,x,E),g)){const e=k('table'),o=k('thead'),s=k('tbody');if(p){const t=k('caption');P(t,'table-caption'),t.innerHTML=p,e.appendChild(t)}P(e,'section-table'),P(o,'table-head'),P(s,'table-body');const a=_.headers,c=S(a),i=n.Ue.createDocumentFragment(),l=k('tr');for(const e of c){const o=a[e],n=k('th');n.id='cc__row-'+o+t,A(n,'scope','col'),P(n,'table-th'),n.innerHTML=o,F(i,n)}F(l,i),F(o,l);const d=n.Ue.createDocumentFragment();for(const e of u){const o=k('tr');P(o,'table-tr');for(const n of c){const s=a[n],c=e[n],i=k('td'),l=k(r);P(i,'table-td'),A(i,'data-column',s),A(i,'headers','cc__row-'+s+t),l.insertAdjacentHTML('beforeend',c),F(i,l),F(o,i)}F(d,o)}F(s,d),F(e,o),F(e,s),F(M,e)}(w||a)&&F(x,M);const L=n.Ie||n.Ge;b?(H||(H=k(r),P(H,'section-toggles')),H.appendChild(x)):H=null,F(L,H||x)})),y&&(n.$e||(n.$e=k(i),P(n.$e,'btn'),A(n.$e,_,'all'),F(E,n.$e),B(n.$e,f,(()=>u('all')))),n.$e.innerHTML=y),w&&(n.Pe||(n.Pe=k(i),P(n.Pe,'btn'),A(n.Pe,_,'necessary'),F(E,n.Pe),B(n.Pe,f,(()=>u([])))),n.Pe.innerHTML=w),x&&(n.ze||(n.ze=k(i),P(n.ze,'btn'),P(n.ze,'btn--secondary'),A(n.ze,_,'save'),F(N,n.ze),B(n.ze,f,(()=>u()))),n.ze.innerHTML=x),n.Ie&&(n.we.replaceChild(n.Ie,n.Ge),n.Ge=n.Ie),_e(1),o.A||(o.A=!0,Z(g.ie.pe,p,n.we),t(e),F(n.qe,n.ye),setTimeout((()=>V(n.ye,'cc--anim')),100)),Y(2)};function me(e,t,n,s,a){const r=g.o,i=g.se,d=k('label'),_=k('input'),u=k('span'),p=k('span'),m=k('span'),b=k('span'),y=k('span');if(b.innerHTML=W(1,3),y.innerHTML=W(0,3),_.type='checkbox',V(d,'section__toggle-wrapper'),V(_,'section__toggle'),V(b,'toggle__icon-on'),V(y,'toggle__icon-off'),V(u,'toggle__icon'),V(p,'toggle__icon-circle'),V(m,'toggle__label'),A(u,l,'true'),s?(V(d,'toggle-service'),A(_,c,a),i.ce[a][t]=_):i.ae[t]=_,s?(e=>{B(_,'change',(()=>{const t=i.ce[e],o=i.ae[e];r.ee[e]=[];for(let o in t){const n=t[o];n.checked&&r.ee[e].push(n.value)}o.checked=r.ee[e].length>0}))})(a):(e=>{B(_,f,(()=>{const t=i.ce[e],o=_.checked;r.ee[e]=[];for(let n in t)t[n].checked=o,o&&r.ee[e].push(n)}))})(t),_.value=t,m.textContent=e.replace(/<.*>.*<\/.*>/gm,''),F(p,y),F(p,b),F(u,p),r.M)(n.readOnly||r.i.mode===o&&n.enabled)&&(_.checked=!0);else if(s){const e=r.Z[a];_.checked=n.readOnly||v(e,t)}else v(r.O,t)&&(_.checked=!0);return n.readOnly&&(_.disabled=!0),F(d,_),F(d,u),F(d,m),d}const ge=()=>{const e=k('span');return g.se.Ke||(g.se.Ke=e),e},be=(e,t)=>{const o=g.o,n=g.se,{hide:s,showPreferences:a,acceptCategory:c}=e,p=o.u&&o.u.consentModal;if(!p)return;const m=p.acceptAllBtn,b=p.acceptNecessaryBtn,v=p.showPreferencesBtn,y=p.closeIconLabel,h=p.footer,C=p.label,w=p.title,S=e=>{s(),c(e)};if(!n.ve){n.ve=k(r),n.Ce=k(r),n.Qe=k(r),n.We=k(r),n.Xe=k(r),V(n.ve,'cm-wrapper'),V(n.Ce,'cm'),j(n.Qe,'body'),j(n.We,'texts'),j(n.Xe,'btns'),n.ve.tabIndex=-1,A(n.Ce,'role','dialog'),A(n.Ce,'aria-modal','true'),A(n.Ce,l,'false'),A(n.Ce,'aria-describedby','cm__desc'),C?A(n.Ce,'aria-label',C):w&&A(n.Ce,'aria-labelledby','cm__title'),n.Ce.style.visibility='hidden';const e='box',t=o.i.guiOptions,s=t&&t.consentModal,a=(s&&s.layout||e).split(' ')[0]===e;w&&y&&a&&(n.je||(n.je=k(i),n.je.innerHTML=W(),j(n.je,'btn'),j(n.je,'btn--close'),B(n.je,f,(()=>{S([])})),F(n.Qe,n.je)),A(n.je,'aria-label',y)),F(n.Qe,n.We),(m||b||v)&&F(n.Qe,n.Xe),F(n.Ce,n.Qe),F(n.ve,n.Ce)}w&&(n.Ye||(n.Ye=k(r),n.Ye.className=n.Ye.id='cm__title',A(n.Ye,'role','heading'),A(n.Ye,'aria-level','2'),F(n.We,n.Ye)),n.Ye.innerHTML=w);let x=p.description;if(x&&(o.H&&(x=x.replace('{{revisionMessage}}',o.F?'':p.revisionMessage||'')),n.Ze||(n.Ze=k(r),n.Ze.className=n.Ze.id='cm__desc',F(n.We,n.Ze)),n.Ze.innerHTML=x),m&&(n.et||(n.et=k(i),F(n.et,ge()),j(n.et,'btn'),A(n.et,_,'all'),B(n.et,f,(()=>{S('all')}))),n.et.firstElementChild.innerHTML=m),b&&(n.Ve||(n.Ve=k(i),F(n.Ve,ge()),j(n.Ve,'btn'),A(n.Ve,_,'necessary'),B(n.Ve,f,(()=>{S([])}))),n.Ve.firstElementChild.innerHTML=b),v&&(n.tt||(n.tt=k(i),F(n.tt,ge()),j(n.tt,'btn'),j(n.tt,'btn--secondary'),A(n.tt,_,'show'),B(n.tt,'mouseenter',(()=>{o.A||pe(e,t)})),B(n.tt,f,a)),n.tt.firstElementChild.innerHTML=v),n.ot||(n.ot=k(r),j(n.ot,d),m&&F(n.ot,n.et),b&&F(n.ot,n.Ve),(m||b)&&F(n.Qe,n.ot),F(n.Xe,n.ot)),n.tt&&!n.nt&&(n.nt=k(r),n.Ve&&n.et?(j(n.nt,d),F(n.nt,n.tt),F(n.Xe,n.nt)):(F(n.ot,n.tt),j(n.ot,d+'--uneven'))),h){if(!n.st){let e=k(r),t=k(r);n.st=k(r),j(e,'footer'),j(t,'links'),j(n.st,'link-group'),F(t,n.st),F(e,t),F(n.Ce,e)}n.st.innerHTML=h}_e(0),o.D||(o.D=!0,Z(g.ie.pe,u,n.Ce),t(e),F(n.qe,n.ve),setTimeout((()=>V(n.ve,'cc--anim')),100)),Y(1),$(n.Qe,e,pe,t)},ve=e=>h(e)&&e in g.o._,ye=()=>g.o.l||g.o.i.language.default,he=e=>{e&&(g.o.l=e)},Ce=async e=>{const t=g.o;let o=ve(e)?e:ye(),n=t._[o];if(!n)return!1;if(h(n)){const e=await(async e=>{try{const t=await fetch(e);return!(!t||!t.ok)&&await t.json()}catch(e){return!1}})(n);if(!e)return!1;n=e}return t.u=n,he(o),!0},we=()=>{let e=g.o.i.language.rtl,t=g.se.qe;e&&t&&(y(e)||(e=[e]),v(e,g.o.l)?V(t,'cc--rtl'):I(t,'cc--rtl'))},Se=()=>{const e=g.se;if(!e.qe){e.qe=k(r),e.qe.id='cc-main',we();let t=g.o.i.root;t&&h(t)&&(t=document.querySelector(t)),(t||e.Ue.body).appendChild(e.qe)}},xe=e=>{const{hostname:t,protocol:o}=location,{name:n,path:s,domain:a,sameSite:c}=g.t.cookie,r=encodeURIComponent(JSON.stringify(g.o.p)),i=e?(()=>{const e=g.o.C,t=e?new Date-e:0;return 864e5*G()-t})():864e5*G(),l=new Date;l.setTime(l.getTime()+i);let d=n+'='+r+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+s+'; SameSite='+c;v(t,'.')&&(d+='; Domain='+a),'https:'===o&&(d+='; Secure'),document.cookie=d,g.o.p},Me=(e,t,o)=>{const n=o||g.t.cookie.domain,s=t||g.t.cookie.path,a='www.'===n.slice(0,4),c=a&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+s+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),a&&r(t,c)},De=e=>(e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t})(Te(e||g.t.cookie.name,!0)),Te=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},Ee=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];if(e)try{e.test(t)&&o.push(t)}catch(e){}else o.push(t)}return o},ke=(e,n=[])=>{((e,t)=>{const{L:o,O:n,R:s,A:a,ee:c,Y:r}=g.o;let i=[];if(e){y(e)?i.push(...e):h(e)&&(i='all'===e?o:[e]);for(const e of o)c[e]=v(i,e)?S(r[e]):[]}else i=a?(()=>{const e=g.se.ae;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})():n;i=i.filter((e=>!v(o,e)||!v(t,e))),i.push(...s),U(i)})(e,n),(e=>{const t=g.o,{ee:o,R:n,Z:s,Y:a,L:c}=t,r=c;t.oe=L(s);for(const e of r){const t=a[e],c=S(t),r=o[e]&&o[e].length>0,i=v(n,e);if(0!==c.length){if(s[e]=[],i)s[e].push(...c);else if(r){const t=o[e];s[e].push(...t)}else s[e]=[];s[e]=x(s[e])}}})(),(()=>{const e=g.o;g.t.mode===o&&e.M?e.V=J(e.B,e.O):e.V=J(e.O,e.p.categories);let n=e.V.length>0,s=!1;for(const t of e.L)e.te[t]=J(e.Z[t],e.oe[t]),e.te[t].length>0&&(s=!0);const a=g.se.ae;for(let t in a)a[t].checked=v(e.O,t);for(const t of e.L){const o=g.se.ce[t],n=e.Z[t];for(const e in o)o[e].checked=v(n,e)}e.h||(e.h=new Date),e.S||(e.S=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.p={categories:L(e.O),revision:g.t.revision,data:e.v,consentTimestamp:e.h.toISOString(),consentId:e.S,services:L(e.Z)};let c=!1;(e.M||n||s)&&(e.M&&(e.M=!1,c=!0),e.C?e.C=new Date:e.C=e.h,e.p.lastConsentTimestamp=e.C.toISOString(),xe(),g.t.autoClearCookies&&(c||!e.M&&n)&&(e=>{const t=g.o,o=Ee();t.j=!1;let n=e?t.L:t.V;n=n.filter((e=>{let o=t.I[e];return!!o&&!o.readOnly&&!!o.autoClear}));for(const s of n){const n=t.I[s].autoClear,a=n&&n.cookies||[],c=v(t.V,s),r=!v(t.O,s),i=c&&r;if(e&&r||!e&&i){!0===n.reloadPage&&i&&(t.j=!0);for(const e of a){let t=[];const n=e.name,s=e.domain,a=e.path;if(n instanceof RegExp)for(let e of o)n.test(e)&&t.push(e);else{let e=b(o,n);e>-1&&t.push(o[e])}t.length>0&&Me(t,a,s)}}}})(c),ee()),c&&(Z(g.ie.le),Z(g.ie.de),g.t.mode===t)||((n||s)&&Z(g.ie.fe),e.j&&location.reload())})()},Ae=e=>{const t=g.o.M?[]:g.o.O;return v(t,e)},Ne=(e,t)=>{const o=g.o.M?[]:g.o.Z[t];return v(o,e)},He=(e,t,o)=>{let n=[];const s=e=>{if(h(e)){let t=Te(e);''!==t&&n.push(t)}else n.push(...Ee(e))};if(y(e))for(let t of e)s(t);else s(e);Me(n,t,o)},Fe=e=>{const{se:t,o:o}=g;if(!o.T){if(!o.D){if(!e)return;be(Ie,Se)}o.T=!0,o.J=M(),o.g&&K(!0),V(t.he,n),A(t.Ce,l,'false'),z(t.ve,1),Z(g.ie._e,u)}},Ve=()=>{const{se:e,o:t,ie:o}=g;t.T&&(t.T=!1,t.g&&K(),z(e.Ke,!1,!0),I(e.he,n),A(e.Ce,l,'true'),z(t.J),t.J=null,Z(o.ue,u))},je=()=>{const e=g.o;e.k||(e.A||pe(Ie,Se),e.k=!0,V(g.se.he,s),A(g.se.we,l,'false'),e.T?e.U=M():e.J=M(),z(g.se.ye,2),Z(g.ie._e,p))},Pe=()=>{const e=g.o;e.k&&(e.k=!1,(()=>{const e=Oe(),t=g.o.I,n=g.se.ae,s=g.se.ce,a=e=>g.o.i.mode===o&&!!t[e].enabled;for(const o in n){const c=!!t[o].readOnly;n[o].checked=c||(e?Ae(o):a(o));for(const t in s[o])s[o][t].checked=c||(e?Ne(t,o):a(o))}})(),z(g.se.Be,!1,!0),I(g.se.he,s),A(g.se.we,l,'true'),e.T?(z(e.U,1),e.U=null):(z(e.J),e.J=null),Z(g.ie.ue,p))};var Ie={show:Fe,hide:Ve,showPreferences:je,hidePreferences:Pe,acceptCategory:ke};const Le=(e,t)=>{const o=De(t);return e?o[e]:o},Oe=()=>!g.o.M;e.acceptCategory=ke,e.acceptService=(e,t)=>{const{L:o,Y:n}=g.o;if(!(e&&t&&h(t)&&v(o,t)&&0!==S(n[t]).length))return!1;((e,t)=>{const o=g.o,{Y:n,ee:s,A:a}=o,c=g.se.ce[t]||{},r=g.se.ae[t]||{},i=S(n[t]);if(s[t]=[],h(e)){if('all'===e){if(s[t].push(...i),a)for(let e in c)c[e].checked=!0,E(c[e])}else if(v(i,e)&&s[t].push(e),a)for(let t in c)c[t].checked=e===t,E(c[t])}else if(y(e))for(let o of i){const n=v(e,o);n&&s[t].push(o),a&&(c[o].checked=n,E(c[o]))}const l=0===s[t].length;o.O=l?o.O.filter((e=>e!==t)):x([...o.O,t]),a&&(r.checked=!l,E(r))})(e,t),ke()},e.acceptedCategory=Ae,e.acceptedService=Ne,e.eraseCookies=He,e.getConfig=e=>{const t=g.t,o=g.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},e.getCookie=Le,e.getUserPreferences=()=>{const{P:e,Z:t}=g.o,{accepted:o,rejected:n}=(()=>{const{M:e,O:t,L:o}=g.o;return{accepted:t,rejected:e?[]:o.filter((e=>!v(t,e)))}})();return L({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:O()})},e.hide=Ve,e.hidePreferences=Pe,e.loadScript=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=k('script'),C(t))for(const e in t)A(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,F(document.head,o)}))},e.reset=e=>{const{qe:t,he:o}=g.se,{name:c,path:r,domain:i}=g.t.cookie;e&&He(c,r,i);for(const{me:e,ge:t,be:o}of g.o.m)e.removeEventListener(t,o);t&&t.remove(),o&&o.classList.remove(a,s,n);const l=new m;for(const e in g)g[e]=l[e];window._ccRun=!1},e.run=async e=>{const{o:t,t:n,ie:s}=g,a=window;if(!a._ccRun){if(a._ccRun=!0,(e=>{const{se:t,t:n,o:s}=g,a=n,r=s,{cookie:i}=a,l=g.re,d=e.cookie,f=e.categories,_=S(f)||[],u=navigator,p=document;t.Ue=p,t.he=p.documentElement,i.domain=location.hostname,r.i=e,r.I=f,r.L=_,r._=e.language.translations,r.g=!!e.disablePageInteraction,l.le=e.onFirstConsent,l.de=e.onConsent,l.fe=e.onChange,l.ue=e.onModalHide,l._e=e.onModalShow,l.pe=e.onModalReady;const{mode:m,autoShow:b,lazyHtmlGeneration:y,autoClearCookies:h,revision:w,manageScriptTags:x,hideFromBots:M}=e;m===o&&(a.mode=m),'boolean'==typeof h&&(a.autoClearCookies=h),'boolean'==typeof x&&(a.manageScriptTags=x),'number'==typeof w&&w>=0&&(a.revision=w,r.H=!0),'boolean'==typeof b&&(a.autoShow=b),'boolean'==typeof y&&(a.lazyHtmlGeneration=y),!1===M&&(a.hideFromBots=!1),!0===a.hideFromBots&&u&&(r.G=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),C(d)&&(a.cookie={...i,...d}),a.autoClearCookies,r.H,a.manageScriptTags,(e=>{const{I:t,Y:o,Z:n,ee:s,R:a}=g.o;for(let c of e){const e=t[c],r=e.services||{},i=C(r)&&S(r)||[];o[c]={},n[c]=[],s[c]=[],e.readOnly&&(a.push(c),n[c]=i),g.se.ce[c]={};for(let e of i){const t=r[e];t.Se=!1,o[c][e]=t}}})(_),(()=>{if(!g.t.manageScriptTags)return;const e=g.o,t=T(document,'script['+c+']');for(const o of t){let t=H(o,c),n=o.dataset.service||'',s=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),s=!0),'!'===n.charAt(0)&&(n=n.slice(1),s=!0),v(e.L,t)&&(e.ne.push({Me:o,xe:!1,Ee:s,De:t,Te:n}),n)){const o=e.Y[t];o[n]||(o[n]={Se:!1})}}})(),he((()=>{const e=g.o.i.language.autoDetect;if(e){let t;if('browser'===e?t=navigator.language.slice(0,2).toLowerCase():'document'===e&&(t=document.documentElement.lang),ve(t))return t}return ye()})())})(e),t.G)return;(()=>{const e=g.o,t=g.t,n=De(),{categories:s,services:a,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=n,f=y(s);e.p=n,e.S=c;const _=!!c&&h(c);e.h=r,e.h&&(e.h=new Date(r)),e.C=i,e.C&&(e.C=new Date(i)),e.v=void 0!==l?l:null,e.H&&_&&d!==t.revision&&(e.F=!1),e.M=!(_&&e.F&&e.h&&e.C&&f),e.M,e.M?t.mode===o&&((()=>{const e=g.o;for(const t of e.L){const n=e.I[t];if(n.readOnly||n.enabled&&e.i.mode===o){e.B.push(t);const o=e.Y[t]||{};for(let n in o)e.Z[t].push(n)}}})(),e.O=[...e.B]):(e.Z={...e.Z,...a},U([...e.R,...s])),e.ee={...e.Z}})();const i=Oe();if(!await Ce())return!1;if($(null,r=Ie,pe,Se),g.o.M&&be(r,Se),g.t.lazyHtmlGeneration||pe(r,Se),(()=>{const e=g.se,t=g.o;B(e.he,'keydown',(e=>{if('Tab'!==e.key)return;if(!t.k&&!t.T)return;const o=t.W,n=t.K;if(o.length>0){const t=M();e.shiftKey?t!==o[0]&&n.contains(t)||(D(e),z(o[1])):t!==o[1]&&n.contains(t)||(D(e),z(o[0]))}}),!0)})(),n.autoShow&&!i&&Fe(!0),i)return ee(),Z(s.de);n.mode===o&&ee(t.B)}var r},e.setCookieData=e=>{let t,o=e.value,n=e.mode,s=!1;const a=g.o;if('update'===n){a.v=t=Le('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],s=!0)}else!e&&t||t===o||(t=o,s=!0)}else t=o,s=!0;return s&&(a.v=t,a.p.data=t,xe(!0)),s},e.setLanguage=async(e,t)=>{if(!ve(e))return!1;const o=g.o;return!(e===ye()&&!0!==t||!await Ce(e)||(he(e),o.D&&be(Ie,Se),o.A&&pe(Ie,Se),we(),0))},e.show=Fe,e.showPreferences=je,e.validConsent=Oe,e.validCookie=e=>''!==Te(e,!0)},'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={});