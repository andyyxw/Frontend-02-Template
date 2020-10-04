学习笔记



## 手势与动画



**组件系统最重要的两个基石是动画和手势，难点在于touch事件跟mouse事件是完全不同的，所以需要将两者整合**



### 手势：

- 触摸屏（手指触摸时会触发）：touch、start、move、end
- 鼠标：down、move、up
- touch 相关事件一定会在同一个对象上触发，不可能跳过 touchstart 去触发 touchmove，所以 touch 相关事件的监听写法不需和 mouse 相关事件的监听写法一样嵌套



### 鼠标事件

- 左键点击是event.button = 0 ， 中间键是event.button = 1，右键是event.button = 2