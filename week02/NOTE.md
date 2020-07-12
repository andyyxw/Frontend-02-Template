学习笔记

# JS 语言通识：

## 泛用语言分类方法：

1. 按语法：
   - 非形式语言：
     - 中文
     - 英文
   - 形式语言（乔姆斯基谱系）：
     - 0 型 无限制文法
     - 1 型 上下文相关文法
     - 2 型 上下文无关文法
     - 3 型 正则文法

## 产生式：

- **巴科斯-诺尔范式（BNF）**：

  - 用尖括号括起来的名称来表示语法结构名

  - 语法结构分成基础结构和需要用其他语法结构定义的复合结构

        - 基础结构称 终结符
        - 复合结构称 非终结符

  - 引号和中间的字符表示终结符

  - 可以有括号

  - `*` 表示重复多次

  - `|` 表示或

  - `+` 表示至少一次

  - BFC 描述四则运算：

    - 四则运算：1 + 2 \* 3
    - 终结符：
      - `Number`
      - `+` `-` `*` `/`
    - 非终结符：
      - `MultiplicativeExpression`
      - `AdditiveExpression`

    ```html
    <Expression
      >::=
      <AdditiveExpression
        ><EOF>
          <MultiplicativeExpression
            >::=
            <Number>
              |<MultiplicativeExpression
                >"*"<Number>
                  |<MultiplicativeExpression
                    >"/"<Number>
                      <AdditiveExpression
                        >::=
                        <MultiplicativeExpression>
                          |<AdditiveExpression
                            >"+"<MultiplicativeExpression>
                              |<AdditiveExpression
                                >"-"<MultiplicativeExpression>
                                  |"("<AdditiveExpression
                                    >")"</AdditiveExpression
                                  ></MultiplicativeExpression
                                ></AdditiveExpression
                              ></MultiplicativeExpression
                            ></AdditiveExpression
                          ></MultiplicativeExpression
                        ></AdditiveExpression
                      ></Number
                    ></MultiplicativeExpression
                  ></Number
                ></MultiplicativeExpression
              ></Number
            ></MultiplicativeExpression
          ></EOF
        ></AdditiveExpression
      ></Expression
    >
    ```

## 通过产生式理解乔姆斯基谱系：

- 0 型 无限制文法
  - `?::=?`
- 1 型 上下文相关文法
  - `?<A>?::=?<B>?`
- 2 型 上下文无关文法
  - `<A>::=?`
- 3 型 正则文法
  - `<A>::=<A>?` ✅
  - `<A>::=?<A>` ❌

## 现代语言的分类

- 形式语言的用途：

  - 数据描述语言：

    `JSON`、`HTML`、`XAML`、`SQL`、`CSS`

  - 编程语言：

    `C`、`C++`、`Java`、`C#`、`Python`、`Ruby`、`Perl`、`Lisp`、`T-SQL`、`Clojure`、`Haskell`、`JavaScript`

- 形式语言-表达方式

  - 声明式语言：

    `JSON`、`HTML`、`XAML`、`SQL`、`CSS`、`Lisp`、`Clojure`、`Haskell`

  - 命令形语言：

    `C`、`C++`、`Java`、`C#`、`Python`、`Ruby`、`Perl`、`JavaScript`

### 计算机语言详细分类

- **`机器语言`**

- **`汇编语言`**

- **高级语言**

  - 编译型语言：

    `C`、`C++`、`Pascal`、`Object-C`、`swift`

  - 解释型语言：

    - 脚本语言：

      `Python`、`JavaScript`、`ASP`、`PHP`、`Perl`

    - 其他：

      `Java`、`Ruby`、`MATLAB`

## 编程语言的性质

- 图灵完备性

  - 命令式--图灵机
    - goto
    - if 和 while
  - 声明式--lambda
    - 递归

- 动态与静态

  - 动态：
    - 在用户的设备/在线服务器上
    - 产品实际运行时
    - Runtime
  - 静态：
    - 在程序员的设备上
    - 产品开发时
    - Compiletime

- 类型系统

- 动态类型系统与静态类型系统

- 强类型与弱类型

  - String + Number
  - String == Boolean

- 复合类型

  - 结构体
  - 函数签名

- 子类型

- 泛型

  - 逆变

    _凡是能用`Function<Parent>`的地方，都能用`Array<Child>`_

  - 协变

    _凡是能用`Function<Child>`的地方，都能用`Array<Parent>`_

## 一般命令式编程语言的设计方式

- Atom
  - Identifier
  - Literal
- Expression
  - Atom
  - Operator
  - Punctuator
- Statement
  - Expression
  - Keyword
  - Punctuator
- Structure
  - Function
  - Class
  - Process
  - Namespace
  - ......
- Program
  - Program
  - Module
  - Package
  - Library

# JS 类型

- **`Number`**

  - IEEE 754 Double Float
    - Sign（1）
    - Exponent（11）
    - Fraction（52）
  - Grammer
    - DecimalLiteral
    - BinaryIntegerLiteral
    - OctalIntegerLiteral
    - HexIntegerLiteral

- **`String`**

  - Character
  - Code Point
  - Encoding
    - UTF
      - UTF8
      - UTF16
  - 字符集
    - ASCII
    - Unicode
    - UCS
    - GB
      - GB2312
      - GBK(GB13000)
      - GB18030
    - ISO-8859
    - BIG5

- **`Boolean`**

  - true
  - false

- **`Object`**

  - 三要素：

    - identifier
    - state
    - behavior

  - 描述对象的方式：

    - Class

      _任何一个对象都是唯一的，这与他本身的状态无关。_

      _所以，即使状态完全一致的两个对象，也并不相等。_

      _我们用状态来描述对象。_

      _我们状态的改变即是行为。_

      _类是一种常见的描述对象的方式。_

      _而“归类”和“分类”则是两个主要的流派。_

      _对于“归类”方法而言，多继承是非常自然的事情。如 C++_

      _而采用分类思想的计算机语言，则是单继承结构。并且会有一个基类 Object。_

    - Prototype

      _原型是一种更接近人类原始人之的描述对象的方法。_

      _我们并不试图做严谨的分类，而是采用“相似”这样的方式去描述对象。_

      _任何对象仅仅需要描述他自己与原型的区别即可。_

  - 原型

    - 原型链

      _当我们访问属性时，如果当前对象没有，则会沿着原型找原型对象是否有此名称的属性，而原型对象还可能有原型，因此，即形成“原型链”。_

      _这一算法保证了 每个对象只需要描述自己和原型的区别即可。_

  - 属性

    _JavaScript 用属性来统一抽象对象状态和行为。_

    _是一个 key-value 键值对，我们可以根据 key 找到 value。_

    属性的 key 有两种类型：

    - String

    - Symbol

      _只能通过变量去引用。_

      _很好地实现了属性访问的权限控制。_

    属性的 value 有两种形态：

    - Data Property（数据属性，用于描述状态）
      - [[value]]（如果是函数，也可以用于描述行为）
      - writable
      - enumerable
      - configurable
    - Accessor Property（访问器属性，用于描述行为）
      - get
      - set
      - enumerable
      - Configurable

  - API / Grammer

    - 基本的对象机制：`{}`、`.`、`[]`、`Object.defineProperty`
    - 基于原型：`Object.create`、`Object.setPrototypeOf`、`Object.getPrototypeOf`
    - 基于类：`new` / `class` / `extends`
    - 历史包袱：`new` / `function` / `prototype`

  - Function Object

  - Special Object

    - `Array`：_Array 的 length 属性根据最大的下标自动发生变化。_
    - `Object.prototype`：_作为所有正常对象的默认原型，不能再给它设置原型了。_
    - `String`：_为了支持下标运算，String 的正整数属性访问会去字符串里查找。_
    - `Arguments`：_arguments 的非负整数型下标属性跟对应的变量联动。_
    - 模块的 `namespace` 对象：_特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 。_
    - 类型数组和数组缓冲区：_跟内存块相关联，下标运算比较特殊。_
    - `bind` 后的 `function`：_跟原来的函数相关联。_

  - Host Object

- **`Null`**

  表示有值但是值是空

- `Undefined`

  表示未定义

  赋空值尽量用`null`而不是`undefined`

- `Symbol`
