// pages/booking-info/booking-info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        pageTitle: '',
        timeList: [],
        freeTime: '06 : 30 : 18',
        calendar: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({ pageTitle: options.roomName });
        
        let timeList = [];
        const num = 24;
        for (let i = 0; i < num; i++) {
            let time = i < 10 ? `0${i}:00` : `${i}:00`;
            let freeTime, noMTime, heldMTime, disabledTime;
            let item;
            if (i < 8 || i > 21) {
                freeTime = noMTime = heldMTime = 0;
                disabledTime = 100;
            } else if (i == 8 || i == 12) {
                freeTime = disabledTime = heldMTime = 0;
                noMTime = 100;
            } else if (i > 8 && i < 12) {
                freeTime = disabledTime = noMTime = 0;
                heldMTime = 100;
            } else if (i == 13) {
                heldMTime = noMTime = 0;
                freeTime = disabledTime = 50;
            } else {
                heldMTime = disabledTime = noMTime = 0;
                freeTime = 100;
            }
            item = { time: time, freeTime: freeTime, noMTime: noMTime, heldMTime: heldMTime, disabledTime: disabledTime };
            timeList.push(item)
        }

        this.setData({
            timeList: timeList
        })
    },

    toBooking() {
        wx.navigateTo({
            url: '/pages/meeting-room-deployment/meeting-room-deployment'
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})