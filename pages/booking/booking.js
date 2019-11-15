// pages/booking/booking.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isShowMeeting: true,
        roomList: [
            { name: '会议室', num: 30, hours: '06', minutes: '30', seconds: '18', isFree: true },
            { name: '奥巴马的会议室', num: 20, hours: '05', minutes: '30', seconds: '18', isFree: false },
            { name: '3号会议室', num: 50, hours: '10', minutes: '30', seconds: '18', isFree: false }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    selectMeetingRoom(e) {
        wx.navigateTo({
            url: `/pages/booking-info/booking-info?roomName=${e.target.dataset.name}`
        })
    },

    toggleShow(e) {
        const flag = +e.target.dataset.flag;
        flag ? this.setData({ isShowMeeting: true }) : this.setData({ isShowMeeting: false })
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
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            })
        }
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

