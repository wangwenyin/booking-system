Component({
    /* 组件的属性列表 */
    properties: {
        title: {      // 设置标题
            type: String,
            value: ''
        },
        title_color: {      // 设置标题颜色
            type: String,
            value: '#fff'
        },
        isShowBack: {     // 控制返回箭头是否显示
            type: Boolean,
            value: false
        },
        background_color: {//背景颜色
            type: String,
            value: "#24AFFF"
        },
        content_offset: { //内容是否偏移（不让导航栏遮挡内容）
            type: Boolean,
            value: true
        }
    },
    /* 组件的初始数据 */
    data: {
        type: "组件",
        phone_model: wx.getSystemInfoSync().model,
        bar_Height: wx.getSystemInfoSync().statusBarHeight    // 获取手机状态栏高度
    },
    /* 组件的方法列表 */
    methods: {
        goBack: function () { 
            console.log(wx.getSystemInfoSync().model)      
            wx.navigateBack({
                delta: 1,
            })
        }
    }
})