// components/nineimage/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      imageArr:[
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560078721382&di=3c04190afe92ed728c6f6cd44b96e05f&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cef70d70409845d688d53f20f7.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560078721559&di=a82f9bb7ec5d5cdda303aec07e81d8bf&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8d5494eef01f3a2922ce9d749325bc315c607c01.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560078721558&di=e419edb2b27c139bb8ed607a25af7bb1&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F78310a55b319ebc4c27e3e238826cffc1e171601.jpg",
        "https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=0f942ad4d91b0ef473e89e5eedc551a1/b151f8198618367a71e21d2725738bd4b21ce5e5.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560078721382&di=80dcc2170a1d91184dac5d5952fc27be&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F838ba61ea8d3fd1fc9c7b6853a4e251f94ca5f46.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560078721382&di=b760f0c938216655eaa6592e884df8a8&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560078721381&di=80e9ff0e60b279735ca1cfb7f4e9a505&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560078721381&di=7243451f0ed25f3929b5361a9c62e5cf&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb151f8198618367aa7f3cc7424738bd4b31ce525.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560078721381&di=e1337670d65e017057ba85dccb61508b&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ff603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg"
      ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ontap(e) {
      const index=e.currentTarget.dataset.index;
      const array=this.data.imageArr;
      wx.previewImage({
        urls:array,
        current:array[index]
      })
    }
  }
})
