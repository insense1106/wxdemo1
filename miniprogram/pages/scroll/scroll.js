// pages/scroll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handler_scroll(event){
      console.log('累计滚动距离',event.detail.scrollTop);
      
    },  touch_start(){
      console.log('touch_start');
      
    },
    handler_tap(){
      console.log(`handler_click`);
      // get cpt obj 
      const obj= this.selectComponent('.select')
      console.log(obj.data);
     
    //  obj.setData({counter: obj.data.counter+=10})
     obj.set_number(30)
      
      
    }
  }
})
