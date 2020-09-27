学习笔记



### 帧处理：

1. 方案一：

   ```
   setInterval(() => {}, 16);
   ```

   不推荐，可能发生积压。

   不推荐，可能发生积压。

2. 方案二：

   ```
   let tick = {
   	setTimeout(tick, 16);
   }
   ```

   相对来说更安全。

   相对来说更安全。

3. 方案三：

   ```
   let tick = () => {
   	requestAnimationFrame(tick);
   }
   ```

   申请浏览器执行下一帧时进行处理。跟着浏览器的帧率走，更丝滑。




**`window.requestAnimationFrame()`** 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。

**`window.mozCancelAnimationFrame()`**取消一个先前通过调用`window.requestAnimationFrame()`方法添加到计划中的动画帧请求.



### 动画

- 属性动画
- 帧动画