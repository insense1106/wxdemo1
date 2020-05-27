// pages/userConsole/userConsole.js
// 调用 全局对象
// 全局对象放在内存里, 程序关闭,内部数据则会被清除
const app =getApp()
// 使用全局对象的属性
// app.globalData.token
Page({

  data: {
    openid: ''
  },

  onLoad: function (options) {
    this.setData({
      openid: getApp().globalData.openid
    })
  }
})