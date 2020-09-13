学习笔记



## proxy

- `Proxy` 用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）。

- `proxy` 是一种强大且危险的设计，`proxy`对象行为的可预测性较差，不建议在业务中大量使用`proxy`



- 通过`reactive` 和 `addEventListener` 实现数据和DOM的双向绑定



## range

- `Range` 接口表示一个包含节点与文本节点的一部分的文档片段。

- [`document.createRange`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createRange) 方法创建 Range对象
- [`range.setStart()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Range/setStart) 设置 `Range` 的起点
- [`range.setEnd()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Range/setEnd) 设置 `Range`的终点
- [`range.getBoundingClientRect()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Range/getBoundingClientRect) 返回一个 [`DOMRect`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMRect) 对象，该对象将范围中的内容包围起来；即该对象是一个将范围内所有元素的边界矩形包围起来的矩形。