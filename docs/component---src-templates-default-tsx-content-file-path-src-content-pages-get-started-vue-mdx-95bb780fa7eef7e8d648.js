"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[9982],{2824:function(e,t,n){n.r(t),n.d(t,{Head:function(){return v},default:function(){return y}});var a=n(1184),l=n(4041),r=n(1658),o=n(8783),c=n(7259);function i(e){const t=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",pre:"pre",code:"code",hr:"hr",h2:"h2",span:"span"},(0,a.RP)(),e.components),{Admonition:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Admonition",!0),l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Vue"),"\n",l.createElement(t.p,null,"Embla Carousel provides a wrapper for ",l.createElement(t.a,{href:"https://vuejs.org/"},"Vue")," that ensures seamless integration of the carousel into your Vue project and automatic cleanup on component unmount."),"\n",l.createElement(t.p,null,"Start by installing the Embla Carousel ",l.createElement(t.strong,null,"npm package")," and add it to your dependencies."),"\n",l.createElement(r.t,{groupId:c.sk.GROUP_ID},l.createElement(o.O,{tab:c.sk.TABS.NPM},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-shell"},"npm install embla-carousel-vue --save\n"))),l.createElement(o.O,{tab:c.sk.TABS.YARN},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-shell"},"yarn add embla-carousel-vue\n")))),"\n",l.createElement(n,{type:"note"},l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," ",l.createElement(t.code,null,"embla-carousel-vue")," only supports ",l.createElement(t.code,null,"Vue 3")," and up. However, you can\nuse the ",l.createElement(t.a,{href:"/get-started/module/"},"core package")," that ",l.createElement(t.code,null,"embla-carousel-vue")," is\nusing under the hood, and re-create the behaviour of ",l.createElement(t.code,null,"embla-carousel-vue"),".\nHere's an ",l.createElement(t.a,{href:"https://github.com/meirroth/embla-carousel-vue2"},"example")," of how\nyou can use Embla Carousel with ",l.createElement(t.code,null,"Vue 2")," Options API.")),"\n",l.createElement(t.hr),"\n",l.createElement(t.h2,{id:"the-component-structure",style:{position:"relative"}},l.createElement(t.a,{href:"#the-component-structure","aria-label":"the component structure permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"The component structure"),"\n",l.createElement(t.p,null,"Embla Carousel provides the handy ",l.createElement(t.code,null,"emblaCarouselVue")," function for seamless integration with Vue. A minimal setup requires an ",l.createElement(t.strong,null,"overflow wrapper")," and a ",l.createElement(t.strong,null,"scroll container"),". Start by adding the following structure to your carousel:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<script setup>\n  import emblaCarouselVue from \'embla-carousel-vue\'\n\n  const [emblaRef] = emblaCarouselVue()\n<\/script>\n\n<template>\n  <div class="embla" ref="emblaRef">\n    <div class="embla__container">\n      <div class="embla__slide">Slide 1</div>\n      <div class="embla__slide">Slide 2</div>\n      <div class="embla__slide">Slide 3</div>\n    </div>\n  </div>\n</template>\n')),"\n",l.createElement(t.h2,{id:"styling-the-carousel",style:{position:"relative"}},l.createElement(t.a,{href:"#styling-the-carousel","aria-label":"styling the carousel permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Styling the carousel"),"\n",l.createElement(t.p,null,"The ",l.createElement(t.code,null,"emblaCarouselVue")," function gives us an ",l.createElement(t.strong,null,"emblaRef")," to attach to our wrapping element with the classname ",l.createElement(t.code,null,"embla"),", which is needed to cover the scroll overflow. The element with the ",l.createElement(t.code,null,"container")," classname is the scroll body that scrolls the slides. Continue by adding the following ",l.createElement(t.strong,null,"CSS")," to these elements:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},"<style scoped>\n  .embla {\n    overflow: hidden;\n  }\n  .embla__container {\n    display: flex;\n  }\n  .embla__slide {\n    flex: 0 0 100%;\n    min-width: 0;\n  }\n</style>\n")),"\n",l.createElement(t.h2,{id:"accessing-the-carousel-api",style:{position:"relative"}},l.createElement(t.a,{href:"#accessing-the-carousel-api","aria-label":"accessing the carousel api permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Accessing the carousel API"),"\n",l.createElement(t.p,null,"The ",l.createElement(t.code,null,"emblaCarouselVue")," function takes the Embla Carousel ",l.createElement(t.a,{href:"/api/options/"},"options")," as the first argument. Additionally, you can access the ",l.createElement(t.a,{href:"/api/"},"API")," with an ",l.createElement(t.code,null,"onMounted")," like demonstrated below:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html___highlight={5,7-11}"},'<script setup>\n  import { onMounted } from \'vue\'\n  import emblaCarouselVue from \'embla-carousel-vue\'\n\n  const [emblaRef, emblaApi] = emblaCarouselVue({ loop: false })\n\n  onMounted(() => {\n    if (emblaApi.value) {\n      console.log(emblaApi.value.slideNodes()) // Access API\n    }\n  })\n<\/script>\n\n<template>\n  <div class="embla" ref="emblaRef">\n    <div class="embla__container">\n      <div class="embla__slide">Slide 1</div>\n      <div class="embla__slide">Slide 2</div>\n      <div class="embla__slide">Slide 3</div>\n    </div>\n  </div>\n</template>\n')),"\n",l.createElement(t.h2,{id:"adding-plugins",style:{position:"relative"}},l.createElement(t.a,{href:"#adding-plugins","aria-label":"adding plugins permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Adding plugins"),"\n",l.createElement(t.p,null,"Start by installing the plugin you want to use. In this example, we're going to install the ",l.createElement(t.a,{href:"/plugins/autoplay/"},"Autoplay")," plugin:"),"\n",l.createElement(r.t,{groupId:c.sk.GROUP_ID},l.createElement(o.O,{tab:c.sk.TABS.NPM},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-shell"},"npm install embla-carousel-autoplay --save\n"))),l.createElement(o.O,{tab:c.sk.TABS.YARN},l.createElement(t.pre,null,l.createElement(t.code,{className:"language-shell"},"yarn add embla-carousel-autoplay\n")))),"\n",l.createElement(t.p,null,"The ",l.createElement(t.code,null,"emblaCarouselVue")," function accepts ",l.createElement(t.a,{href:"/plugins/"},"plugins")," as the second argument. Note that plugins need to be passed in an ",l.createElement(t.strong,null,"array")," like so:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html___highlight={3,5}"},'<script setup>\n  import emblaCarouselVue from \'embla-carousel-vue\'\n  import Autoplay from \'embla-carousel-autoplay\'\n\n  const [emblaRef] = emblaCarouselVue({ loop: false }, [Autoplay()])\n<\/script>\n\n<template>\n  <div class="embla" ref="emblaRef">\n    <div class="embla__container">\n      <div class="embla__slide">Slide 1</div>\n      <div class="embla__slide">Slide 2</div>\n      <div class="embla__slide">Slide 3</div>\n    </div>\n  </div>\n</template>\n')),"\n",l.createElement(t.p,null,"Congratulations! You just created your first Embla Carousel component."))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?l.createElement(t,e,l.createElement(i,e)):i(e)};var m=n(352),u=n(824),d=n(408),p=n(6169),g=n(8324),h=n(2272),E=n(3908),f=n(3594),b=n(5413);const v=e=>{const{data:t,pageContext:n}=e,{siteUrl:a,author:r}=(0,d.Q)(),{title:o="",description:c,date:i}=t.mdx.frontmatter,s=(0,l.useMemo)((()=>new Date(i+" UTC").toISOString()),[i]);return l.createElement(m.G,{title:o,description:c,url:""+a+n.slug},l.createElement("script",{type:"application/ld+json"},'\n      {\n        "@context": "https://schema.org",\n        "@type": "TechArticle",\n        "name": "'+(0,f.b)(a)+'",\n        "description": "'+c+'",\n        "url": "'+a+n.slug+'",\n        "headline": "'+o+'",\n        "image": "'+a+'/share-image.png",\n        "datePublished": "'+s+'",\n        "dateModified": "'+s+'",\n        "author": {\n          "@type": "Person",\n          "name": "'+r+'"\n        },\n        "publisher": {\n          "@type": "Organization",\n          "name": "'+r+'",\n          "logo": {\n            "@type": "ImageObject",\n            "width": "512",\n            "height": "512",\n            "url": "'+a+u.A+'"\n          }\n        }\n      }\n    '))},_=e=>{const{pageContext:t,children:n}=e,{next:a,previous:r,filePath:o,id:c}=t;return l.createElement(l.Fragment,null,l.createElement(h.Q,{id:c}),l.createElement("article",{id:E.e},l.createElement(b.A,null,n)),l.createElement(p.R,{pageUrl:o}),l.createElement(g.o,{previous:r,next:a}))};function y(e){return l.createElement(_,e,l.createElement(s,e))}},2272:function(e,t,n){n.d(t,{Q:function(){return E}});var a=n(4041),l=n(3057),r=n(7286),o=n(3724),c=n(3214),i=n(6341),s=n(4702),m=n(4393);const u=l.default.nav.withConfig({displayName:"PageBreadcrumbs__PageBreadcrumbsWrapper",componentId:"sc-1mlty1z-0"})(["display:flex;align-items:center;font-size:",";margin-bottom:",";"],s.$.COMPLEMENTARY,m.F.THREE),d=(0,l.css)(["color:",";padding:"," 0;"],i.lm.TEXT_LOW_CONTRAST,m.F.ONE),p=(0,l.default)(r.l).withConfig({displayName:"PageBreadcrumbs__Link",componentId:"sc-1mlty1z-1"})(["",";"],d),g=l.default.span.withConfig({displayName:"PageBreadcrumbs__ActiveTitle",componentId:"sc-1mlty1z-2"})(["",";"],d),h=(0,l.default)(c.I).withConfig({displayName:"PageBreadcrumbs__Separator",componentId:"sc-1mlty1z-3"})(["color:",";margin:0 ",";"],i.lm.TEXT_LOW_CONTRAST,m.F.ONE),E=e=>{const{id:t}=e,n=(0,o.rx)(t);return 0===n.length?null:a.createElement(u,{"aria-label":"Breadcrumb Navigation"},n.map(((e,t)=>{let{id:l,slug:r,title:o}=e;return t!==n.length-1?a.createElement(a.Fragment,{key:l},a.createElement(p,{to:r},o),a.createElement(h,{size:"0.6rem",svg:"chevronRight",role:"presentation","aria-hidden":"false"})):a.createElement(g,{key:l},o)})))}},6169:function(e,t,n){n.d(t,{R:function(){return d}});var a=n(4041),l=n(3057),r=n(7286),o=n(6341),c=n(4702),i=n(4393),s=n(8893),m=n(405);const u=(0,l.default)(r.l).withConfig({displayName:"PageEditThisPage__PageEditThisPageWrapper",componentId:"sc-15acsrz-0"})(["display:inline-flex;align-items:center;text-decoration:none;font-size:",";padding-top:",";padding-bottom:",";margin-top:",";color:",";"],c.$.COMPLEMENTARY,i.F.ONE,i.F.ONE,i.F.EIGHT,o.lm.TEXT_LOW_CONTRAST),d=e=>{const{pageUrl:t}=e,n=s.t.GITHUB_DOCUMENTATION+"/"+t;return a.createElement(u,{to:n},a.createElement(m.vK,{iconSvg:"pen",iconSize:"1.5rem"},"Edit this page on GitHub"))}},8324:function(e,t,n){n.d(t,{o:function(){return f}});var a=n(4041),l=n(3057),r=n(7286),o=n(4906),c=n(6341),i=n(4393),s=n(4702),m=n(405),u=n(4094);const d=i.F.FOUR,p=l.default.nav.withConfig({displayName:"PagePagination__PagePaginationWrapper",componentId:"sc-3ejrow-0"})(["",";display:flex;justify-content:space-between;margin-top:",";"],(0,u.F)(d,"","div"),i.F.EIGHT),g=l.default.div.withConfig({displayName:"PagePagination__Item",componentId:"sc-3ejrow-1"})(["> a{color:",";}&:nth-child(2) > a{text-align:right;color:",";}"],c.lm.BRAND_PRIMARY,c.lm.BRAND_SECONDARY),h=l.default.div.withConfig({displayName:"PagePagination__ItemLabel",componentId:"sc-3ejrow-2"})(["color:",";padding-bottom:",";"],c.lm.TEXT_LOW_CONTRAST,i.F.ONE),E=l.default.div.withConfig({displayName:"PagePagination__ItemTitle",componentId:"sc-3ejrow-3"})(["display:inline-flex;align-items:center;font-weight:",";","{",";}"],s.s.MEDIUM,m.eU,o.y),f=e=>{const{next:t,previous:n}=e;return a.createElement(p,{"aria-label":"Pagination Navigation"},a.createElement(g,null,n&&a.createElement(r.l,{to:n.slug},a.createElement(h,null,"Previous"),a.createElement(E,null,a.createElement(m.vK,{iconSvg:"arrowLeft"},n.title)))),a.createElement(g,null,t&&a.createElement(r.l,{to:t.slug},a.createElement(h,null,"Next"),a.createElement(E,null,a.createElement(m.vK,{iconSvg:"arrowRight",iconSide:"right"},t.title)))))}},352:function(e,t,n){n.d(t,{G:function(){return c}});var a=n(4041),l=n(408),r=n(3594),o=n(7564);const c=e=>{const{title:t,description:n,lang:c="en",url:i,children:s}=e,m=(0,l.Q)(),u=t+" | "+(0,o.fq)(m.title),d=n||m.description;return a.createElement(a.Fragment,null,a.createElement("html",{lang:c}),a.createElement("title",null,u),a.createElement("link",{rel:"canonical",href:i}),a.createElement("meta",{name:"description",content:d}),a.createElement("meta",{name:"og:title",content:t}),a.createElement("meta",{name:"og:description",content:d}),a.createElement("meta",{name:"og:type",content:"article"}),a.createElement("meta",{name:"og:locale",content:"en_EN"}),a.createElement("meta",{name:"og:url",content:i}),a.createElement("meta",{name:"og:site_name",content:(0,r.b)(m.siteUrl)}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:m.author}),a.createElement("meta",{name:"twitter:title",content:t}),a.createElement("meta",{name:"twitter:description",content:d}),s)}},8783:function(e,t,n){n.d(t,{O:function(){return l}});var a=n(4041);const l=e=>a.createElement(a.Fragment,e)},3594:function(e,t,n){n.d(t,{b:function(){return a}});const a=e=>e.replace(/(^\w+:|^)\/\//,"")},824:function(e,t,n){t.A=n.p+"static/maskable-36b9e327abc26d5d02e9350d184a058f.png"}}]);
//# sourceMappingURL=component---src-templates-default-tsx-content-file-path-src-content-pages-get-started-vue-mdx-95bb780fa7eef7e8d648.js.map