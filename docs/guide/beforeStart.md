# 有关浏览器扩展，你需要知道

## 浏览器扩展是什么？

浏览器扩展是由 Web 技术构建的小程序（HTML、CSS 和 JavaScript），扩展程序可通过自定义界面、监控浏览器事件和修改网页来提升浏览体验。

自 web 技术诞生初始不久，浏览器插件、扩展技术并应运而生，而后 FireFox、Chrome 等浏览器大厂也纷纷下场，并在 2015 年确定了统一的 WebExtensions 标准

在我眼中，浏览器扩展是 web 世界的“外挂”，你几乎可以通过它去操纵一切网页；同时它也是良好的应用内容载体，其独特的交互模式在一些场景实有奇效

## 统一的标准：WebExtensions（2015+）

Mozilla、Google、Microsoft 达成共识，共同确立了 WebExtensions API ，我们之后的开发之路也围绕这个标准，这里先做个“路由”，这样以后找文档不至于迷路哈哈

**WebExtensions 标准适用的浏览器：**

- **Mozilla** **Firefox**
- **Google** **Chrome**
- **Microsoft** **Edge**
- **Apple Safari（部分）**

比较详尽的内容参照 MDN / chrome 文档 ： [MDN web Extensions](https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions) / [Chrome web Extension](https://developer.chrome.com/docs/extensions?hl=zh-cn)

## 它是一个完整的应用

虽然我们通过 Web 技术来开发浏览器扩展，但它的形态绝对不是一个单纯的网页中的网页，而更像是一个完整的应用，有自己独立的一套运作体系，这个“应用”大致的构成成分如下

<p align=center><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/2701aceb55464c0f985204e00e309b6f~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgSnVzdEhhcHB5:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMTQ4OTE3ODc1NzQ0NTAwMyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1771100536&x-orig-sign=B9l7vfteXcFLRfyvRoVaIv8kYyw%3D" alt=""  width="70%"/></p>
