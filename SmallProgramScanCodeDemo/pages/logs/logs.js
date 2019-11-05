//logs.js
const util = require('../..//utils/util.js')

Page({
  data: {
    scanLogs: []
  },
  onShow() {
    let that=this;
    wx.getStorage({
      key: 'scanLogs',
      success: (res) => {
        console.log(res);
        that.setData({
          scanLogs: (res.data|| []).map(n => {
            n.date = util.formatTime(new Date(n.date));
            return n;
          })
        })
      }
    })
  },
})
