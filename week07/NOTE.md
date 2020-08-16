学习笔记



## CSS排版

### 盒

HTML代码中可以书写开始**标签**，结束**标签**，和自封闭**标签**。

一对起止**标签**，表示一个**元素**。

DOM树中存储的是**元素**和其他类型的节点（Node）。

CSS选择器选中的是**元素**。

CSS选择器选中的**元素**，在排版时可能产生多个**盒。**

排版和渲染的基本单位是**盒**。



### 正常流排版

- 收集盒进行
- 计算盒在行中的排布
- 计算行的排布



### Block

- Block Container：里面有BFC的。
  - block
  - inline-block
  - table-cell
  - flex item
  - grid item
  - table-caption
- Block-level Box：外面有BFC的。
  - display: block、flex、table、grid......
- Block Box = Block Container + Block-level Box



#### 设立BFC

- floats
- absolutely positioned elements
- Block containers（such as inline-blocks, table-cells,  table-captions, flex items, grid cell, ......）that are not block boxes
- block boxes whith 'overflow' other than 'visible'



### Flex排版

- 收集盒进行
- 计算盒在主轴方向的排布
- 计算盒在交叉轴方向的排布



分行：

- 根据主轴尺寸，把元素分进行
- 若设置了no-wrap，则强行分配进第一行

计算主轴方向：

- 找出所有Flex元素
- 把主轴方向的剩余尺寸按比例分配给这些元素
- 若剩余空间为负数，所有flex元素为0，等比压缩剩余元素

计算交叉轴方向：

- 根据每一行中最大元素尺寸计算行高
- 根据行高flex-align和item-align，确定元素具体位置





## CSS动画与绘制

### Aniamtion

- @keyframes定义
- animation: 使用

组成：

- animation-name 时间曲线
- animation-duration 动画的时长
- animation-timing-function 动画的时间曲线
- animation-delay 动画开始前的延迟
- animation-iteration-count 动画的播放次数
- animation-direction 动画的方向



### Transition

- transition-property 要变换的属性
- transition- duration 变换的时长
- transition-timing-function 时间曲线
- transition-delay 延迟



### 绘制

- 几何图形
  - border
  - box-shadow
  - border-radius
- 文字
  - font
  - text-decoration
- 位图
  - background-image

