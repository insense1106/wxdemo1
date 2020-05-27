// components/w-good/goods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
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
      handler_tap(e){
        
        
        // console.log(`handler_tap`);
        this.triggerEvent('handler_tap',e.currentTarget.dataset,{})

      }
  }
})
