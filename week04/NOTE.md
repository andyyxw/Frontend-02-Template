学习笔记

## HTTP

- Request

  - request line

    - mathod（`GET`、`POST`、`HEAD`、`PUT`、`DELETE`、`CONNECT`、`OPTIONS`、`TRACE`）

      浏览器通过地址栏访问页面都是 GET 方法。表单提交产生 POST 方法。

      HEAD 则是跟 GET 类似，只返回请求头，多数由 JavaScript 发起。

      PUT 和 DELETE 分别表示添加资源和删除资源，但是实际上这只是语义上的一种约定，并没有强约束。

      CONNECT 现在多用于 HTTPS 和 WebSocket。

      OPTIONS 和 TRACE 一般用于调试，多数线上服务都不支持。

    - path

    - version

  - head

    | Request Header    | 规定                                                                                         |
    | ----------------- | -------------------------------------------------------------------------------------------- |
    | Accept            | 浏览器端接受的格式。                                                                         |
    | Accept-Encoding   | 浏览器端接收的编码方式。                                                                     |
    | Accept-Language   | 浏览器端接受的语言，用于服务端判断多语言。                                                   |
    | Cache-Control     | 控制缓存的时效性。                                                                           |
    | Connection        | 连接方式，如果是 keep-alive，且服务端支持，则会复用连接。                                    |
    | Host              | HTTP 访问使用的域名。                                                                        |
    | If-Modified-Since | 上次访问时的更改时间，如果服务端认为此事件后自己没有更新，则会给出 304 响应。                |
    | If-None-Match     | 上次访问时使用的 E-Tag，通常是页面的信息摘要，这个比更改时间更准确一些。                     |
    | User-Agent        | 客户端标识，因为一些历史原因，这是一笔糊涂账，多数浏览器的这个字段都十分复杂，区别十分微妙。 |
    | Cookie            | 客户端存储的 cookie 字符串。                                                                 |

  - body

    - application/json
    - application/x-www-form-urlencoded
    - mutipart/form-data
    - text/html

- Response

  - response line

    - version
    - status code
      - 1xx：临时回应，表示客户端请继续。
      - 2xx：请求成功。
        - 200：请求成功。
      - 3xx: 表示请求的目标有变化，希望客户端进一步处理。
        - 301&302：永久性与临时性跳转。
        - 304：跟客户端缓存没有更新。
      - 4xx：客户端请求错误。
        - 403：无权限。
        - 404：表示请求的页面不存在。
        - 418：It’s a teapot. 这是一个彩蛋，来自 ietf 的一个愚人节玩笑。（超文本咖啡壶控制协议）
      - 5xx：服务端请求错误。
        - 500：服务端错误。
        - 503：服务端暂时性错误，可以一会再试。
    - status text

  - head

    | Response Header  | 规定                                                                 |
    | ---------------- | -------------------------------------------------------------------- |
    | Cache-Control    | 缓存控制，用于通知各级缓存保存的时间，例如 max-age=0，标识不要缓存。 |
    | Connection       | 连接类型，Keep-Alive 表示复用连接。                                  |
    | Content-Encoding | 内容编码方式，通常是 gzip。                                          |
    | Content-Length   | 内容的长度，有利于浏览器判断内容是否已经结束。                       |
    | Content-Type     | 内容类型，所有请求网页的都是 tetx/html。                             |
    | Date             | 当前的服务器日期。                                                   |
    | ETag             | 页面的信息摘要，用于判断是否需要重新到服务端取回页面。               |
    | Expires          | 过期时间，用于判断下次请求是否需要到服务端取回页面。                 |
    | Keep-Alive       | 保持连接不断时需要的一些信息，如 timeout=5，max=100。                |
    | Last-Modified    | 页面上次修改的时间。                                                 |
    | Server           | 服务端软件的类型。                                                   |
    | Set-Cookie       | 设置 cookie，可以存在多个。                                          |
    | Via              | 服务端的请求链路，对一些调试场景至关重要的一个头。                   |

  - body

## HTTPS

在 HTTP 协议的基础上，HTTPS 和 HTTP2 规定了更复杂的内容，但是它基本保持了 HTTP 的设计思想，即：使用上的 Request-Response 模式。

HTTPS 有两个作用：

1. 确定请求的目标服务端身份。
2. 保证传输的数据不会被网络中间节点窃听或者篡改。

## HTTP 2

HTTP 2 是 HTTP 1.1 的升级版本，HTTP 2.0 最大的改进有两点：

1. 支持服务端推送。
2. 支持 TCP 连接复用。

## 状态机

- 每一个状态都是一个机器
  - 在每一个机器里，我们可以做计算、存储、输出......
  - 所有的这些机器接受的输入是一致的
  - 状态机的每一个机器本身没有状态，如果我们用函数来表示的话，他应该是纯函数（无副作用）
- 每一个机器知道下一个状态
  - 每个机器都有确定的下一个状态（Moore）
  - 每个及其根据输入决定下一个状态（Mealy）

## ISO-OSI 七层网络模型

- 应用层
- 表示层
- 会话层
- 传输层
- 网络层
- 数据链路层
- 物理层

## HTTP 请求

1. 实现一个 HTTP 的请求
   - 设计一个 HTTP 请求的类
   - Content-Type 是一个必要的字段，要有默认值
   - body 是 kv 格式
   - 不同的 Content-Type 影响 body 的格式
2. send 函数
   - 在 Request 的构造器中收集必要的信息
   - 设计一个 send 函数，把请求真实发送到服务器
   - send 函数应该是异步的，所以返回 Promise
3. 发送请求
   - 设计支持已有的 connection 或者自己新建 connection
   - 收到数据传给 parser
   - 根据 parser 的状态 resolve Promise
4. ResponseParser
   - Response 必须分段构造，所以我们要用一个 ResponseParser 来”装配“
   - ResponseParser 分段处理 ResponseText，我们用状态机来分析文本的结构
5. BodyParser
   - Response 的 body 可能根据 Content-Type 有不同的结构，因此我们会采用子 Parser 的结构来解决问题
   - 以 TrunkedBodyParser 为例，我们同样用状态机来处理 body 的格式

## HTML 解析

1. 拆分文件
   - 为了方便文件管理，我们吧 parser 单独拆到文件中
   - parser 接受 HTML 文本作为参数，返回一刻 DOM 树
2. 用 FSM 实现 HTML 的解析
   - 我们用 FSM 来实现 HTML 的分析
   - 在 HTML 标准中，已经规定了 HTML 的状态
   - Toy-Browser 只挑选其中一部分状态，完成一个最简版本
3. 解析标签
   - 主要的标签有：开始标签、结束标签和自封闭标签
   - 在这一步我们暂时忽略属性
4. 创建元素
   - 在状态机中，除了状态前一，我们还会要加入业务逻辑
   - 我们在标签结束状态提交标签 token
5. 处理属性
   - 属性值分为单引号、双引号、无引号三种写法，因此需要较多状态处理
   - 处理属性的方式跟标签类似
   - 属性结束时，我们把属性加到标签 Token 上
6. 用 token 构建 DOM 树
   - 从标签构建 DOM 树的基本技巧是适用栈
   - 遇到开始标签时创建元素并入栈，遇到结束标签时出栈
   - 自封闭节点可视为入栈后立刻出栈
   - 任何元素的父元素是它入栈前的栈顶
7. 将文本节点加到 DOM 树
   - 文本节点与自封闭标签处理类似
   - 多个文本节点需要合并
