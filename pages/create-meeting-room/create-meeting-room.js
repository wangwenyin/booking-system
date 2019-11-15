// pages/create-meeting-room/create-meeting-room.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        peopleNum: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    addNum() {
        this.data.peopleNum++;
        this.setData({ peopleNum: this.data.peopleNum })
    },

    decreaseNum() {
        const num = this.data.peopleNum;
        num > 0 ? this.data.peopleNum-- : this.data.peopleNum = 0
        this.setData({ peopleNum: this.data.peopleNum })
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