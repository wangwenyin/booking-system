// pages/login/login.js
let countdown = 60;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        disabled: false,
        text: '发送验证码',
        showTip: false,
        tipContent: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    // 获取验证码
    getVerifyCode() {
        setTimeout(() => {
            this.setCountdown();
        }, 100)
    },
    // 验证码倒计时
    setCountdown() {
        if (countdown === 0) {
            this.setData({
                disabled: false,
                text: `发送验证码`
            })
            countdown = 60
            return
        } else {
            this.setData({
                disabled: true,
                text: `重新发送 ${countdown}s`
            })
            countdown--
        }
        setTimeout(() => {
            this.setCountdown()
        }, 1000)
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

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})