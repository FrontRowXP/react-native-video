(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2725:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7390)}])},7390:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return i}});var o=n(5893),l=n(2673),r=n(2643);let i=[{depth:2,value:"About",id:"about"},{depth:2,value:"V6.0.0 Information",id:"v600-information"},{depth:2,value:"Usage",id:"usage"}];function c(s){let e=Object.assign({h1:"h1",code:"code",h2:"h2",p:"p",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",a:"a",pre:"pre",span:"span"},(0,r.a)(),s.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{children:["A ",(0,o.jsx)(e.code,{children:"<Video>"})," component for React Native"]}),"\n",(0,o.jsx)(e.h2,{id:"about",children:"About"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"react-native-video"})," is a React Native library that provides a Video component that renders media content such as videos and streams"]}),"\n",(0,o.jsx)(e.p,{children:"It allows to stream video files (m3u, mpd, mp4, ...) inside your react native application."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Exoplayer for android"}),"\n",(0,o.jsx)(e.li,{children:"AVplayer for iOS, tvOS and visionOS"}),"\n",(0,o.jsx)(e.li,{children:"Windows UWP for windows"}),"\n",(0,o.jsx)(e.li,{children:"HTML5 for web"}),"\n",(0,o.jsx)(e.li,{children:"Trick mode support"}),"\n",(0,o.jsx)(e.li,{children:"Subtitles (embeded or side loaded)"}),"\n",(0,o.jsx)(e.li,{children:"DRM support"}),"\n",(0,o.jsx)(e.li,{children:"Client side Ads insertion (via google IMA)"}),"\n",(0,o.jsx)(e.li,{children:"Pip"}),"\n",(0,o.jsx)(e.li,{children:"Embedded playback controls"}),"\n",(0,o.jsx)(e.li,{children:"And much more"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"The aim of this package is to have a thin and exhaustive control of player."}),"\n",(0,o.jsx)(e.h2,{id:"v600-information",children:"V6.0.0 Information"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["⚠️ ",(0,o.jsx)(e.strong,{children:"Version 6"}),": The following documentation refer to features only available through the v6.0.0 releases.\nAs major rework has been done in case of doubt, you can still use ",(0,o.jsx)(e.a,{href:"https://github.com/TheWidlarzGroup/react-native-video/blob/v5.2.0/README.md",children:"version 5.2.x, see documentation"})]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Version 6.x requires ",(0,o.jsx)(e.strong,{children:"react-native >= 0.68.2"})]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["⚠️ from ",(0,o.jsx)(e.strong,{children:"6.0.0-beta.8"})," requires also ",(0,o.jsx)(e.strong,{children:"iOS >= 13.0"})," (default in react-native 0.73)"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["For older versions of react-native, ",(0,o.jsx)(e.a,{href:"https://github.com/TheWidlarzGroup/react-native-video/tree/v5.2.0",children:"please use version 5.x"}),"."]}),"\n",(0,o.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(e.pre,{"data-language":"javascript","data-theme":"default",children:(0,o.jsxs)(e.code,{"data-language":"javascript","data-theme":"default",children:[(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// Load the module"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Video"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {VideoRef} "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react-native-video'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// Within your render function, assuming you have a file called"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:'// "background.mp4" in your project. You can include multiple videos'})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// on a single screen if you like."})}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"VideoPlayer"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"useRef"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"VideoRef"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"background"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"require"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./background.mp4'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"   <"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Video"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// Can be a URL or a local file."})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"source"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{background}"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// Store reference  "})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"ref"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{videoRef}"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// Callback when remote video is buffering                                      "})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"onBuffer"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{onBuffer}"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// Callback when video cannot be loaded              "})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"onError"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{onError}               "})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"style"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"styles"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".backgroundVideo}"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"   />"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" )"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// Later on in your styles.."})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" styles "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"StyleSheet"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".create"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  backgroundVideo"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    position"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'absolute'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    top"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    left"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    bottom"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    right"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})})]})})]})}e.default=(0,l.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.a)(),s.components);return e?(0,o.jsx)(e,{...s,children:(0,o.jsx)(c,{...s})}):c(s)},pageOpts:{filePath:"pages/index.md",route:"/",timestamp:1736776875e3,title:"A <Video> component for React Native",headings:i},pageNextRoute:"/"})}},function(s){s.O(0,[673,888,774,179],function(){return s(s.s=2725)}),_N_E=s.O()}]);