//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    areaState: false,
    city:""
  },
  onLoad: function () {
    
  },
  changeState(e) {
    this.setData({
      areaState: e.detail
    });
  },
  //获取地区
  getData(e) {
    // console.log(e);
    this.setData({
      areaState: false,
      city: e.detail.val
    })
  },
})
