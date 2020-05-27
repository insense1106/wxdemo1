// pages/home/home.js
const DT=1000;
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
      list:[],
      list2:[],
      list3:[],
      list_tabcontrol:['aaa','bbb','ccc','ddd'],
      list_goods:[],
      flag_show:false,
      flag_update:false
  },
// 点击事件
  title_click(event){
    let index =event.detail.index;
    console.log(`tab__control`);
    
    wx.request({
      url: 'https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg',
      method:'get',
      data:{
      format: 'jsonp',
        tpl: 'v12',
        page: 'other',
        rnd: 0,
        g_tk: new Date().getTime(),
        loginUin: 0,
        hostUin: 0,
        inCharset: 'utf8',
        outCharset: 'GB2312',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0
      },
      success:(res)=>{
     
        let res2 = res.data.substring(18);
        let res3 = res2.split('');
        res3.pop();
        let res5 = res3.join('');
        let res6 = JSON.parse(res5);
        let res_list=res6.data.hotdiss.list
        if (index==0) {
          this.setData({list_goods:res_list.slice(4,8) })
        }
        if (index==1) {
          this.setData({list_goods:res_list.slice(0,4) })
          
        }
        if (index==2) {
          this.setData({list_goods:res_list.slice(8,12) })
        }
        if (index==3) {
          this.setData({list_goods:res_list.slice(12,16) })
        }                                   
      }
      
    })
  }
,
// 点击 跳转页面
handler_tap(e){
  console.log(e.detail);
  // data 存放在缓存中
  wx.setStorageSync('current_goods',e.detail)
  wx.navigateTo({
    url: '/pages/detail/detail'
  })
  // wx.reLaunch({
  //   url: '/pages/detail/detail',
  // })
},
// 返回顶部图标
handler_backtop(){
  this.setData({flag_show:false})
  this.flag1=false
  wx.pageScrollTo({
    scrollTop:0
  })
  
  
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.request({
        // url: 'http://localhost:80/xiaomi/question',
        // url: 'http://39.97.33.178/api/movieOnInfoList?cityId=10',
        url: 'https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg',
        method:'get',
        data:{
        format: 'jsonp',
          tpl: 'v12',
          page: 'other',
          rnd: 0,
          g_tk: new Date().getTime(),
          loginUin: 0,
          hostUin: 0,
          inCharset: 'utf8',
          outCharset: 'GB2312',
          notice: 0,
          platform: 'yqq',
          needNewCode: 0
        },
        success:(res)=>{
          // console.log(res.data);
          let res2 = res.data.substring(18);
          let res3 = res2.split('');
          res3.pop();
          let res5 = res3.join('');
          let res6 = JSON.parse(res5);
          let res_list=res6.data.hotdiss.list
          this.setData({list:res_list.slice(5,9)})
          // list_type
      
          this.setData({list2:res_list.slice(4,8) })
          this.setData({list3:res_list.slice(3,7) })
          this.setData({list_goods:res_list.slice(4,8)  })
       
          


          
        
        }
        
      })
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  
    // request http data
    wx.request({
      url: 'https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg',
      method:'get',
      data:{
      format: 'jsonp',
        tpl: 'v12',
        page: 'other',
        rnd: 0,
        g_tk: new Date().getTime(),
        loginUin: 0,
        hostUin: 0,
        inCharset: 'utf8',
        outCharset: 'GB2312',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0
      },
      success:(res)=>{
     
        let res2 = res.data.substring(18);
        let res3 = res2.split('');
        res3.pop();
        let res5 = res3.join('');
        let res6 = JSON.parse(res5);
        let res_list=res6.data.hotdiss.list     
       this.setData({list_goods:res_list})
     
                                          
      }
      
    })
   

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
   
    

  },
  onPageScroll(options){
    // console.log(options);
        // bug 
        // 执行顺序 :
        // 上拉到底, flag=true 
        // 点击icon , flag=false 回顶部
        // 回顶过程中,触发滚动,  flag=true,  bug原因
        // 在回滚过程中, 判断flag1 和flag是否相同,只有不同时,才会进行改变
        let flag2=options.scrollTop>=DT
        if (flag2!=this.data.flag_show) {
          this.setData({flag_show:flag2})   
          console.log('ffff');
                
        }
        /**
         * 1 show = false
         * 2 top change 0-999 flag2= false  flag2 !=show-----false
         * 3 top=1000  flag2=true  show=false,  flag2!=show ------ true
         * 4 setData show=true  S第一次赋值 显示
         * 5 click icon  show=false  C第二次赋值 隐藏
         * 6 top=1200  flag2=true show=false  -------true
         * 6  setData ---- show=true   S第二次赋值 
         * 7 top=999    flag2=false  show=true  --------true
         * 8  setData---- show=false  S第三次赋值
         * 9  top=100  flag2=false  show=false  ------ false 
         * 10  top=0    flag2=false   show=false  ------false
         * 11 END
         */
    
  }
})