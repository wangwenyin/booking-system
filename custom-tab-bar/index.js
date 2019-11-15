Component({
    data: {
        selected: 0,
        color: "#fff",
        selectedColor: "#fff",
        list: [{
                "pagePath": "/pages/booking/booking",
                "text": "预定",
                "iconPath": "../images/index.png",
                "selectedIconPath": "../images/index-selected.png"
            },
            {
                "pagePath": "/pages/user-center/user-center",
                "text": "个人中心",
                "iconPath": "../images/user.png",
                "selectedIconPath": "../images/user-selected.png"
            }
        ],
        isIphoneX: false
    },
    attached() {
        if (wx.getSystemInfoSync().model.includes('iPhone X')) {
            this.setData({ isIphoneX: true })
        }
    },
    methods: {
        switchTab(e) {
            const data = e.currentTarget.dataset
            const url = data.path
            wx.switchTab({
                url
            })
        }
    }
})

// custom-tab-bar组件需与pages同级目录（防报错）