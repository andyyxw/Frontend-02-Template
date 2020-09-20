学习笔记



## 组件化



#### 目标： 复用。

组件是跟UI强相关的东西，可以认为是一种特殊的模块或对象。

#### 特点：可以以树形结构来进行组合。有一定的模板化的配置的能力。

#### 组件跟对象的区别：

| 对象       | 组件           |
| ---------- | -------------- |
| Properties | Properties     |
| Methods    | Methods        |
| Inherit    | Inherit        |
|            | Attribute      |
|            | Config & State |
|            | Event          |
|            | Liftcycle      |
|            | Children       |



##### Attribute vs Property：

- Attribute强调描述性
- Property强调从属关系



#### 如何设计组件状态：

| Markup set | JS set | JS Change | User Input Change         |                                      |
| ---------- | ------ | --------- | ------------------------- | ------------------------------------ |
| ❎          | ✅      | ✅         | ❓（大部分情况下不应该变） | property                             |
| ✅          | ✅      | ✅         | ❓（大部分情况下不应该变） | attribute                            |
| ❎          | ❎      | ❎         | ✅                         | state（只应该在组件内部改变）        |
| ❎          | ✅      | ❎         | ❎                         | config（在组件构造时触发，不可更改） |



##### Liftcycle

一定会有：

- created
- destroyed

中间会有：

- mount
- render/update
- unmout



##### Children：

- Content型Children
- Template型Children

