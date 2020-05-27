//app.js
// 常量
const TOKEN='token'
App({
  onLaunch: function () {
    // 从本地获取token
    const token = wx.getStorageSync(TOKEN)
    // 判断token是否有效
    // 验证token是否过期
    //仅当token有效时 执行login()

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {}
    // 登录
    wx.login({
      // 只要login执行,就会执行complete函数 
      complete: (res) => {},
      // login函数执行成功时,执行 success函数
      success:res=>{
        const code = res.code ;
        // 执行request函数
        wx.request({
          // 注意默认开启 域名检查功能, 注意关闭
          url: 'url',
          // 请求方式
          method:'post',
          //请求参数
          data:{
            code
          },
          // 当http_request成功时,执行success函数
          // res : 服务器返回的数据
          success:res=>{
            console.log(res);
            // 封装数据
            const token= res.data.token
            // 保存至全局对象[短暂存储]
            this.globalData.token=token
            // 保存至本地[持久存储]
            // async function
            wx.setStorage({
              data: data,
              key: 'key',
            })
            // sync function
            wx.setStorageSync('key_token', data)
            
          }
        })
      }
    })

  }
})
