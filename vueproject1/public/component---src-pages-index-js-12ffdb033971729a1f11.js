/*! For license information please see component---src-pages-index-js-12ffdb033971729a1f11.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{5855:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(434)),i=r(n(7071)),o=r(n(7867)),c=m(n(7294)),l=r(n(5697)),s=r(n(6162)),u=["objectFit","objectPosition"];function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}var f=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).imageRef=t.props.innerRef||(0,c.createRef)(),t.placeholderRef=(0,c.createRef)(),t}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this,t=document.createElement("img");void 0!==t.style.objectFit&&void 0!==t.style.objectPosition||Promise.resolve().then((function(){return m(n(6797))})).then((function(t){var n=t.default;n(e.imageRef.current.imageRef.current),n(e.placeholderRef.current)}))},r.render=function(){var e=this.props,t=e.objectFit,n=e.objectPosition,r=(0,i.default)(e,u),o={objectFit:t,objectPosition:n,fontFamily:'"object-fit: '+t+"; object-position: "+n+'"'};return c.default.createElement(s.default,(0,a.default)({ref:this.imageRef,placeholderRef:this.placeholderRef},r,{imgStyle:(0,a.default)({},r.imgStyle,o),placeholderStyle:(0,a.default)({},r.placeholderStyle,o)}))},t}(c.Component);f.propTypes={objectFit:l.default.string,objectPosition:l.default.string},f.defaultProps={objectFit:"cover",objectPosition:"50% 50%"};var g=(0,c.forwardRef)((function(e,t){return c.default.createElement(f,(0,a.default)({},e,{innerRef:t}))}));t.Z=g},1904:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(7294),a=n(5855),i=n(4184),o=n.n(i),c=n(1883),l=n(4037),s=n(7227),u=n(3745),d=n(632),m=n(4018),f=n(6213),g=n(477),p=n(8183),h="index-module--heroText--0feec",b="index-module--sectionHeader--1c5bd",y="index-module--sectionLink--e7f90",E="index-module--sectionParagraph--fb00c",v=e=>{let{data:t}=e;const{isMobile:n}=(0,d.Fy)(),i=(e,t)=>r.createElement("div",{className:o()("index-module--imgContainer--a9a9e",{"index-module--imgContainer--mobile--63904":n})},r.createElement(a.Z,{fluid:e,styles:{maxWidth:e.presentationWidth,margin:"0 auto"}}),r.createElement(l.Z,{direction:"column",align:"center"},t));return r.createElement(g.Z,{transparent:!0},r.createElement(p.Z,{title:"Home"}),r.createElement("div",{className:"index-module--heroContainer--e3f41"},r.createElement(a.Z,{style:{height:500},fluid:t.hero.childImageSharp.fluid,objectPosition:"20% 15%"}),r.createElement("div",{className:"index-module--filter--93893"}),r.createElement(l.Z,{className:"index-module--heroTextContainer--a686b"},r.createElement(l.Z,{flex:"1",justify:"flexend",direction:"column"},r.createElement("h1",{className:h},"Your Life."),r.createElement("h1",{className:h},"Your Health."),r.createElement("h1",{className:h},"Your Family.")),!!t.site.siteMetadata.announcement&&!n&&r.createElement(l.Z,{justify:"flexend",direction:"column",className:"index-module--messageContainer--66bab"},r.createElement("div",{className:"index-module--message--50ab4"},t.site.siteMetadata.announcement)))),r.createElement(m.Z,{isLight:!0},r.createElement(l.Z,{align:"center",direction:"column"},r.createElement("h1",{className:"index-module--header--2323d"},"Papillion Family Medicine"),r.createElement("p",{className:"index-module--subHeader--4f1ea"},"We're here to help you and your family"),r.createElement("a",{href:"https://omahamagazine.com/best-of-omaha-2020-results/",target:"_blank",rel:"noopener noreferrer",className:"index-module--bestOfOmaha--71e3c"},r.createElement(a.Z,{className:"index-module--booImage--213c2",fixed:t.bestOfOmaha.childImageSharp.fixed}),r.createElement(l.Z,{align:"center",className:"index-module--flag--8507d"},"Dr. Mantler voted best Family Doctor of Omaha in 2021, 2020 & 2019")))),r.createElement(m.Z,null,r.createElement(l.Z,{justify:"spacebetween",direction:n?"column":"row"},i(t.office.childImageSharp.fluid,r.createElement(r.Fragment,null,r.createElement("h3",{className:b},"Location"),r.createElement("p",{className:E},"We are located on Cornhusker Road just west of 72nd Street and three minutes from downtown Papillion."),r.createElement(u.Z,{to:"https://maps.google.com/?q="+t.site.siteMetadata.address,className:y},t.site.siteMetadata.address))),i(t.staff.childImageSharp.fluid,r.createElement(r.Fragment,null,r.createElement("h3",{className:b},"Our Professional Associates"),r.createElement("p",{className:E},"Our providers at Papillion Family Medicine take pride in providing a wide range of services to meet your needs."),r.createElement(c.Link,{to:"/providers",className:y},"Meet Our Providers")))),r.createElement(s.Z,{title:"Connect with us",body:"Find a provider that fits your needs, schedule an appointment, and see what our staff can do for you.",button:r.createElement(c.Link,{to:"/contact"},r.createElement(f.Z,null,"Contact Us"))})))}},7227:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7294),a=n(4184),i=n.n(a),o=n(4037),c=n(632),l="action-callout-module--callout--43b8d",s="action-callout-module--calloutText--5afa3",u="action-callout-module--calloutText--collapsed--f014f",d="action-callout-module--container--31ae1";function m(e){let{title:t,body:n,button:a}=e;const{isMini:m}=(0,c.Fy)();return r.createElement("div",{className:d},r.createElement(o.Z,{direction:m?"column":"row",className:l,align:"center"},r.createElement(o.Z,{className:i()(s,{[u]:m}),direction:"column"},r.createElement("h3",null,t),r.createElement("p",null,n)),a))}},6797:function(e){var t="bfred-it:object-fit-images",n=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,r="undefined"==typeof Image?{style:{"object-position":1}}:new Image,a="object-fit"in r.style,i="object-position"in r.style,o="background-size"in r.style,c="string"==typeof r.currentSrc,l=r.getAttribute,s=r.setAttribute,u=!1;function d(e,t,n){var r="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(t||1)+"' height='"+(n||0)+"'%3E%3C/svg%3E";l.call(e,"src")!==r&&s.call(e,"src",r)}function m(e,t){e.naturalWidth?t(e):setTimeout(m,100,e,t)}function f(e){var r=function(e){for(var t,r=getComputedStyle(e).fontFamily,a={};null!==(t=n.exec(r));)a[t[1]]=t[2];return a}(e),i=e[t];if(r["object-fit"]=r["object-fit"]||"fill",!i.img){if("fill"===r["object-fit"])return;if(!i.skipTest&&a&&!r["object-position"])return}if(!i.img){i.img=new Image(e.width,e.height),i.img.srcset=l.call(e,"data-ofi-srcset")||e.srcset,i.img.src=l.call(e,"data-ofi-src")||e.src,s.call(e,"data-ofi-src",e.src),e.srcset&&s.call(e,"data-ofi-srcset",e.srcset),d(e,e.naturalWidth||e.width,e.naturalHeight||e.height),e.srcset&&(e.srcset="");try{!function(e){var n={get:function(n){return e[t].img[n||"src"]},set:function(n,r){return e[t].img[r||"src"]=n,s.call(e,"data-ofi-"+r,n),f(e),n}};Object.defineProperty(e,"src",n),Object.defineProperty(e,"currentSrc",{get:function(){return n.get("currentSrc")}}),Object.defineProperty(e,"srcset",{get:function(){return n.get("srcset")},set:function(e){return n.set(e,"srcset")}})}(e)}catch(o){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(e){if(e.srcset&&!c&&window.picturefill){var t=window.picturefill._;e[t.ns]&&e[t.ns].evaled||t.fillImg(e,{reselect:!0}),e[t.ns].curSrc||(e[t.ns].supported=!1,t.fillImg(e,{reselect:!0})),e.currentSrc=e[t.ns].curSrc||e.src}}(i.img),e.style.backgroundImage='url("'+(i.img.currentSrc||i.img.src).replace(/"/g,'\\"')+'")',e.style.backgroundPosition=r["object-position"]||"center",e.style.backgroundRepeat="no-repeat",e.style.backgroundOrigin="content-box",/scale-down/.test(r["object-fit"])?m(i.img,(function(){i.img.naturalWidth>e.width||i.img.naturalHeight>e.height?e.style.backgroundSize="contain":e.style.backgroundSize="auto"})):e.style.backgroundSize=r["object-fit"].replace("none","auto").replace("fill","100% 100%"),m(i.img,(function(t){d(e,t.naturalWidth,t.naturalHeight)}))}function g(e,n){var r=!u&&!e;if(n=n||{},e=e||"img",i&&!n.skipTest||!o)return!1;"img"===e?e=document.getElementsByTagName("img"):"string"==typeof e?e=document.querySelectorAll(e):"length"in e||(e=[e]);for(var a=0;a<e.length;a++)e[a][t]=e[a][t]||{skipTest:n.skipTest},f(e[a]);r&&(document.body.addEventListener("load",(function(e){"IMG"===e.target.tagName&&g(e.target,{skipTest:n.skipTest})}),!0),u=!0,e="img"),n.watchMQ&&window.addEventListener("resize",g.bind(null,e,{skipTest:n.skipTest}))}g.supportsObjectFit=a,g.supportsObjectPosition=i,function(){function e(e,n){return e[t]&&e[t].img&&("src"===n||"srcset"===n)?e[t].img:e}i||(HTMLImageElement.prototype.getAttribute=function(t){return l.call(e(this,t),t)},HTMLImageElement.prototype.setAttribute=function(t,n){return s.call(e(this,t),t,String(n))})}(),e.exports=g}}]);
//# sourceMappingURL=component---src-pages-index-js-12ffdb033971729a1f11.js.map