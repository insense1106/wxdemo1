// components/w-tabcontrol/tabcontrol.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      list:{
        type:Array,
        value:[1,2,3,4]
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current_index:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handler_item_click(e){     
      const index = e.currentTarget.dataset.index;

      
     this.setData({current_index:index});
     this.triggerEvent('title_click',{index},{})
    }
  }
})
