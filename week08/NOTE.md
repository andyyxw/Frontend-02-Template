学习笔记



## HTML语法

### 合法元素

- Elelemt：`<tagname>...</tagname>`
- Text: `text`
- Comment: `<!-- comments -->`
- DocumentType: `<!Doctype html>`
- ProcessingInstruction: `<?a 1?>`
- CDATA: `<![CDATA[]]>`

### 字符引用

- `$#161;`
- `$amp;`
- `&lt;`
- `&quot;`



## 浏览器API

### DOM API

Node：

- Element：元素型节点，跟标签相对应
  - HTMLElement
    - HTMLAnchorElement
    - HTMLAppletElement
    - HTMLAreaElement
    - HTMLAudioElement
    - HTMLBaseElement
    - HTMLBodyElement
    - ......
  - SVGElement
    - SVGAElement
    - SVGAltGlyphElement
    - ......
- Document：文档根节点
- CharacterData：字符数据
  - Text：文本节点
    - CDATASection：CDATA节点
  - Comment：注释
  - ProcessingInstruction：处理信息
- DocumentFragment：文档片段
- DocumentType：文档类型



### 操作

- 导航类操作
  - parentNode
  - childNode
  - firstNode
  - lastNode
  - nextSibling
  - previousSibling
  - parentElement
  - children
  - firstElement
  - lastElement
  - nextElement
  - previousElement
- 修改操作
  - appendChild
  - insertChild
  - removeChild
  - replaceChild
- 高级操作
  - compareDocumentPosition 是一个用于比较两个节点中关系的函数
  - contains 检查一个节点是否包含另一个节点的函数
  - isEqualNode 检查两个节点是否完全相同
  - isSameNode 检查两个节点是否是同一个节点， 实际上在JavaScript中可以用`===`。
  - cloneNode 复制一个节点，如果传入参数true，则会连同子元素做深拷贝。



### Event

- 冒泡和捕获

  先捕获，后冒泡



### Range API

- range.setStartBefore
- range.setEndBefore
- range.setStartAfter
- range.setEndAfter
- range.selectNode
- range.selectNodeContents
- 主要操作：
  - var fragment = ange.extractContents()
  - range.insertNode(document.createTextNode("aa"))



## CSSOM

### Rules

- document.styleSheet[0].cssRules
- document.styleSheet[0].insertRule("p { color:pink; }", 0)
- document.styleSheet[0].removeRule(0)



### window

- window.innerHeight, window.innerWidth
- window.outerWidth, window.outerHeight
- window.devicePixelRatio
- window.screen
  - window.screen.width
  - window.screen.height
  - window.screen.availWidth
  - window.screen.availHeight
- Window.open("about:blank", "blank", "width=100,height=100,left=100,right=100")
- moveTo(x, y)
- moveBy(x, y)
- resizeTo(x, y)
- resizeBy(x, y)

### scroll

- scrollTop
- scrollLeft
- scrollWidth
- scrollHeight
- scroll(x, y)
- scrollBy(x, y)
- scrollIntoView()
- window
  - scrollX
  - scrollY
  - scroll(x, y)
  - scrollBy(x, y)

### layout

- getClientRects()
- getBoundingClientRect()