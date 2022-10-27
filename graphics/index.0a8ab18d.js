var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequire5971;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,a.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequire5971=a),a("MvNHK").register(JSON.parse('{"1iOMD":"index.0a8ab18d.js","c0VRY":"default_album_cover.b902dc0a.jpg"}'));var l=a("jJu03"),n=a("4Dq4i"),i=a("ecxJc");a("gVqGt");var s=a("hcek7"),u=a("4gmId");const o=e=>{const t=window.getComputedStyle(e),r=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight);return e.clientWidth-r};var c;c=new URL(a("MvNHK").resolve("c0VRY"),import.meta.url).toString();const f=(0,s.component)((()=>{const[e]=(0,u.useReplicant)("nowPlaying",{artUrl:"",title:"",artist:"",album:""}),{title:t,artist:r,album:a,artUrl:f}=e,[d]=(0,u.useReplicant)("nowPlayingShowing",!1),g=(0,s.useRef)(n.default.timeline()),p=(0,s.useRef)((0,i.createRef)()),h=(0,s.useRef)((0,i.createRef)()),m=(0,s.useRef)((0,i.createRef)());(0,s.useEffect)((()=>{const e=p.current.value.querySelector(".title"),t=e.scrollWidth,r=o(p.current.value);t>r?n.default.set(e,{scaleX:r/t}):n.default.set(e,{scaleX:1})}),[t]),(0,s.useEffect)((()=>{const e=p.current.value.querySelector(".artist"),t=e.scrollWidth,r=o(p.current.value);t>r?n.default.set(e,{scaleX:r/t}):n.default.set(e,{scaleX:1})}),[r]),(0,s.useEffect)((()=>{const e=p.current.value.querySelector(".album"),t=e.scrollWidth,r=o(p.current.value);t>r?n.default.set(e,{scaleX:r/t}):n.default.set(e,{scaleX:1})}),[a]);const v=(0,s.useCallback)((()=>{g.current.to({},.01,{}),g.current.to(m.current.value,{duration:.5,height:"100%",ease:"Power1.easeInOut"}),g.current.add("stuffIn"),g.current.to(h.current.value,{duration:.4,x:"0%",ease:"Power1.easeOut"},"stuffIn"),g.current.to(p.current.value,{duration:.7,x:"0%",ease:"Power1.easeOut"},"stuffIn")}),[]),x=(0,s.useCallback)((()=>{g.current.add("stuffOut"),g.current.to(h.current.value,{duration:.4,x:"100%",ease:"Power1.easeIn"},"stuffOut+=0.3"),g.current.to(p.current.value,{duration:.7,x:"-100%",ease:"Power1.easeIn"},"stuffOut"),g.current.to(m.current.value,{duration:.5,height:"0%",ease:"Power1.easeInOut"})}),[]);return(0,s.useEffect)((()=>{d?v():x()}),[d,v,x]),l.html`
    <style>
      :host {
        display: flex;
        position: absolute;
        bottom: 88px;
        left: 88px;
      }

      .fullHeight {
        height: 120px;
      }

      .cull {
        overflow: hidden;
      }

      .centerFlex {
        display: flex;
        align-items: center;
      }

      .background {
        background-color: rgba(0, 0, 0, 0.75);
      }

      .art {
        width: 120px;
        background-position: center;
        background-size: contain;
        background-color: #D3C9C9;
        transform: translateX(100%);
      }

      .line {
        width: 3px;
        height: 0;
        background-color: #ac09ff;
      }

      .details {
        display: flex;
        flex-direction: column;
        padding: 1.2em 2em 1em 1em;
        color: #E4E4E4;
        white-space: nowrap;
        max-width: 500px;
        box-sizing: border-box;
        transform: translateX(-100%);
      }

      .title {
        font-size: 30px;
        line-height: 34px;
        transform-origin: left;
        font-weight: 600;
        margin: 0 0 0.25em 0;
      }

      .artist {
        font-size: 20px;
        line-height: 22px;
        transform-origin: left;
        margin: 0 0 0.25em 0;
      }

      .album {
        font-size: 18px;
        line-height: 22px;
        transform-origin: left;
        margin: 0;
      }
    </style>

    <div class="cull fullHeight">
      <iron-image
        class="art fullHeight"
        sizing="contain"
        src="${f}"
        placeholder="${new URL(c)}"
        preload
        fade
        ${(0,i.ref)(h.current)}
      >
      </iron-image>
    </div>
    <div class="cull fullHeight centerFlex">
      <div class="line" ${(0,i.ref)(m.current)}></div>
    </div>
    <div class="cull">
      <div class="details background fullHeight" ${(0,i.ref)(p.current)}>
        <div>
          <p class="title">&#9834; ${t}</p>
          <p class="artist">${r}</p>
          <p class="album">${a}</p>
        </div>
      </div>
    </div>
  `}));customElements.define("element-nowplaying",f);
//# sourceMappingURL=index.0a8ab18d.js.map
