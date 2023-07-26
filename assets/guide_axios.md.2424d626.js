import{_ as s,c as a,o as n,O as l}from"./chunks/framework.cb0944e1.js";const h=JSON.parse('{"title":"与服务端交互","description":"","frontmatter":{},"headers":[],"relativePath":"guide/axios.md","filePath":"guide/axios.md"}'),o={name:"guide/axios.md"},e=l(`<h1 id="与服务端交互" tabindex="-1">与服务端交互 <a class="header-anchor" href="#与服务端交互" aria-label="Permalink to &quot;与服务端交互&quot;">​</a></h1><p>框架使用 <a href="https://axios-http.com/zh/" target="_blank" rel="noreferrer">Axios</a> 做为异步请求工具，并进行了简单的封装。</p><h2 id="接口请求" tabindex="-1">接口请求 <a class="header-anchor" href="#接口请求" aria-label="Permalink to &quot;接口请求&quot;">​</a></h2><h3 id="设置-baseurl" tabindex="-1">设置 baseURL <a class="header-anchor" href="#设置-baseurl" aria-label="Permalink to &quot;设置 baseURL&quot;">​</a></h3><h3 id="请求调用" tabindex="-1">请求调用 <a class="header-anchor" href="#请求调用" aria-label="Permalink to &quot;请求调用&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> request </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/request</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Moments</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ChatUser</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ChatFile</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/api/interface/media</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">listauditPage</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Moments</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ReqMomentsParams</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">request</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/yntz-service-im/im/friendsCircle/auditPage</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    method</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">post</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">data</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>Get 类型请求参数为 params: data</p></div><h2 id="模块管理" tabindex="-1">模块管理 <a class="header-anchor" href="#模块管理" aria-label="Permalink to &quot;模块管理&quot;">​</a></h2><p>项目里的接口很多，推荐根据模块来管理接口，目录为 <code>/src/api/xxx</code> 。</p>`,9),p=[e];function t(r,c,i,F,D,y){return n(),a("div",null,p)}const C=s(o,[["render",t]]);export{h as __pageData,C as default};