学习笔记

## JS表达式

（按优先级）

- Member

  - a.b

  - a[b]

  - ```js
    foo`string`
    ```

  - super.b

  - super['b']

  - new.target

  - new Foo()

- New

  - New Foo

- Call

  - foo()
  - super()
  - foo()['b']
  - foo().b

- Left hand side & Right hand side

  只有Left Handside Expression才有资格放到等号左边。

  在JavaScript中，Left Handside Expression一定是Right Handside Expression。

- Unary

  - delete a.b
  - void foo()
  - typeof a
  - `+ a`
  - `- a`
  - ! a
  - await a

- Exponental

  - **

- Multiplicative

  - `*`、`/`、`%`

- Additive

  - `+`、`-`

- Shift

  - `<<`、`>>`、`>>>`

- Relationship

  - `<`、`>`、`<=`、`>=`、`instanceof`、`in`

- Equality

  - ==
  - !=
  - ===
  - !==

- Bitwise

  - `&`、`^`、`|`

- Logical

  - &&
  - ||

- Conditional

  - ? :



### 类型转换

- Type Convertion

  - a + b

  - 'false' == false

  - a[0] = 1

    |           | Number   | String            | Boolean   | Undefined | Null | Object | Symbol |
    | --------- | -------- | ----------------- | --------- | --------- | ---- | ------ | ------ |
    | Number    | -        |                   | 0  false  | ❌         | ❌    | Boxing | ❌      |
    | String    |          | -                 | “”  False | ❌         | ❌    | Boxing | ❌      |
    | Boolean   | true  1  | 'true'  'false'   | -         | ❌         | ❌    | Boxing | ❌      |
    | Undefined | false  0 | 'undefined'       | false     | -         | ❌    | ❌      | ❌      |
    | Null      | 0        | 'null'            | false     | ❌         | -    | ❌      | ❌      |
    | Object    | valueOf  | valueOf  toString | True      | ❌         | ❌    | -      | ❌      |
    | Symbol    | ❌        | ❌                 | ❌         | ❌         | ❌    | Boxing | -      |

- Unboxing

  - ToPremitive

  - toString vs valueOf

    转Number时优先调用valueOf，例如 加法、位运算

    转字符串时优先调用toString，例如作为属性名

  - Symbol.toPrimitive

- Boxing

  | 类型    | 对象                    | 值          |
  | ------- | ----------------------- | ----------- |
  | Number  | new Number(1)           | 1           |
  | String  | new String("a")         | "a"         |
  | Boolean | new Boolean(true)       | true        |
  | Symbol  | new Object(Symbol("a")) | Symbol("a") |





## JS语句

- Grammer

  - 简单语句
    - ExpessionStatement
    - EmptyStatement
    - DebuggerStatement
    - ThrowStatement
    - ContinueStatement
    - BreakStatement
    - ReturnStatement
  - 组合语句
    - BlockStatement
      - [[type]]:  normal
      - [[value]]:  --
      - [[target]]:  --
    - IfStatement
    - IterationStatement
      - while( ) 
      - do  while()
      - for( ; ; ) 
      - for( in ) 
      - for( of ) 
      - for await( of )
    - LabelledStatement
    - TryStatement
      - [[type]]:  return
      - [[value]]:  --
      - [[target]]:  label
  - 声明
    - FunctionDeclaration
    - GenaratorDeclaration
    - AsyncFunctionDeclaration
    - AsyncGeneratorDeclaration
    - VariableDeclaration
    - ClassDeclaration
    - LexicalDeclaration

- Runtime

  - Completion Record
    - [[type]]：normal, break, continue, return, or throw
    - [[value]]：基本类型
    - [[target]]：label
  - Lexcal Environment

  

## JS结构化

### JS执行粒度：

- 宏任务

  *传给JavaScript引擎的任务*

- 微任务（Promise）

- 函数调用（Execution Cntext）

- 语句/声明（Completion Record）

- 表达式（Reference）

- 直接量/变量/this ......

### 函数调用

- Execution Context

  组成部分：

  - code evaluation state（用于保存async和generator代码执行状态）

  - Funtion（由function初始化的Execution Context会有）

  - Script or Module

  - Generator

  - Realm（保存所有使用的内置对象的领域）

  - LexicalEnvironment（执行代码中所需要访问的环境）

    - this
    - new.target
    - super
    - 变量

  - VariableEnvironment（用var去声明的变量所在的环境）

    仅用于处理var声明

- ECMAScript Code Execution Context

- Generator Execution Contexts

- Environment Records

  - Declarative Environment Records
    - Function Environment Records
    - module Environment Records
  - Global Environment Records
  - Object Environment Records

- 闭包

  - 代码部分
  - 环境部分（object + 变量序列）

  每个函数都会形成一个闭包。

- Realm

  在JavaScript引擎的实例里面，它所有的内置对象会被放进一个Realm里面。

  在不同的Realm实例时间，他们是完全互相独立的。