Component({
    /* 组件的属性列表 */
    properties: {
        isShow: {
            type: Boolean,
            value: false
        },
        imgInfo: {
            type: Object,
            value: null
        },
        titleInfo: {      
            type: Object,
            value: null
        },
        btnInfo: {
            type: Object,
            value: null
        },
        sub_title: {
            type: String,
            value: ''
        },
        isShowCancle: {
            type: Boolean,
            value: false
        }
    },
    /* 组件的初始数据 */
    data: {
        type: "组件"     
    },
    /* 组件的方法列表 */
    methods: {
        confirm() {
            this.triggerEvent('confirm')
        },
        cancle() {
            this.setData({ isShow: false })
        }
    }
})