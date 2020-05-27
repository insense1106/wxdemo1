# view  
 - 块级元素,独占一行 
- bindscroll: 需要设置容器高度,否则监听函数不起作用
- 组件标签 元素 共同属性  
1. size  disable   selectable  id  class style hidden data_ bind catch 

# 样式 
- 内联样式, 局部样式,全局样式app.wxss 
### 样式优先级
- 内联 > 局部 > 全局
# 适配
> 屏幕适配单位
- rem
- em
- rpx
> rpx 
-  rpx是px的一半
-  rpx能够自适应不同设备 

#
# 插值表达式 mustache
- set data
-  use data
-  formate  the data
- >    ```class="{{active?a:b}}"```  
  如果active为true: 则class=a  else  class=b 注意和vue稍有区别

# API
- OnLoad
-  this.setData({key:value})
- `view wx:if="{{isShow}}"`
- 多个条件判断  
 - `wx:if="{{score>=90}}"`
 - `wx:elif="{{score>=80}}"`
 - `wx:elif="{{score>=70}}"`
- ` number.toFixed(n)` 保留n位小数
## input 事件
- bindinput
- bindblur
- bindfocus
- bindfocus
## 绑定事件
- bind
- catch
## 公有事件
- touchstart
- touchmove
- touchcancel
- touchend
 
# 更改data
- `this.setData({key:this.key})`
- `this.setData({key:this.key}+6)`
- `this.setData({key:!this.key})`
# wx:if & hidden
- 渲染
- 样式
- 元素必须先渲染,样式才能依附
# wx:for
## 语法
- `wx:for="{{xxx}}"`
- `wx:for="{{[1,2,3]}}"`
- `wx:for-item="{{foo}}"` 自定义item,引用时,使用foo
- `wx:for-index="{{i}}"` 自定义index,引用时,使用i
## 特性
- 自动生成 item,index属性
- 可以遍历的数据类型为: 数组 数字 对象
- 多层遍历的场景下,item 重复时,最好自定义item的名字
## 关于 key
-  设置key 会提高性能
-  key必须是 唯一标识
-  没有key 每次data更新,会渲染整个list
-  有key,只会渲染当前item, 大大降低性能开销
# block
- 空标签 占位符 容器 相当于html中的div
### 注意事项
- 包裹 元素
- 不宜设置class 
- 性能更高 不需要渲染

# 模板 template
## 如何使用
- `template name="tempName"`  定义
- `import src="xxxx"`  导入 
- `template is="tempName" data="{{key:value}}" ` 使用
- 模板中的内容,仅在使用时,才会进行渲染
- name属性必须存在
- 先定义后使用
- 动态传递数据
## 导入 template
- `import src="xxxx"`
- 绝对路径 || 相对路径 都可以
- 模板文件中不可以再导入模板文件
- 无法通过include导入模板
 # include
## 语法
- `include src="xxx"`  
## 特性
- 除了模板 和 wxs文件, 都可以使用include导入
- include相当于 拷贝代码
- 可以递归导入 
# import
- 主要是导入 模板
- 不能递归导入

# WSX
## 语法
- ` <wxs module='name'>    //js代码  //module.exports={...} </wxs> `
- ` <view> {{name.msg}} </view>`
## wxs导入
- `<wxs src="xxx" module="name"></wxs>`
-  `<view> {{name.function(LOCAL_DATA)}}</view>`
- 必须使用相对路径


# 关于小程序
- 没有过滤器
## dom结构
- 所有iframe 组成一个dom树
- 
# 事件对象
## api
- type string  事件类型 例如: tap scroll
- timeStamp integer 页面打开到触发事件的毫秒数
- target Object 触发事件的属性值集合
- currentTarget Object 当前组件的一些属性值集合
## 在一些情况下 target和currentTarget 不是同一个对象
- target 记录事件的源
- currentTarget 记录事件的触发
- dataset属性
## touches 和changeTouches 的区别 
- 是否存在触摸
- 触摸是否发生变化 - - ( 指有新的触摸事件, 触摸位置发生变化)
# 关于tap 事件
- 每个手指的触摸都是单一的事件对象 

# 组件
## 定义组件
- 在json文件中声明 
- 书写组件内容
## 使用组件
-  在json中声明
-  在页面中使用
-  注册全局组件
- 组件名不能使用wx- 为前缀
- 组件可以嵌套组件
## 属性设置
- options 属性
- `styleIsolation:'isolated `
## 页面和组件间的通信
- 组件 定义 properties属性
- 定义 type , value 属性
##  样式传递
- 组件内定义 externalClasses:['className']
- ` 页面中 <cpt className="newClassName"> xxx </cpt>`
## 传递函数
- 定义 methods属性 
- 在methods中 定义 函数
- ` this.triggerEvent(function, data)`

#  tab-control cpt
- create cpt 
- register cpt
- user register cpt
- 数组最好只存储在data里
- in page listen which item  clicked
-  set the listen function
-  get the index  `event.detail.index`
-  