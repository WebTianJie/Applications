class LikeModel {
    setLikeList(value) {
        wx.setStorageSync('likeList', value);
    }
    addLikeList(likeObj) {
        const likeList = this.getLikeList();
        likeList.unshift(likeObj);
        this.setLikeList(likeList);
    }
    getLikeList() {
        return wx.getStorageSync('likeList') || [];
    }
    removeLikeList(artId) {
        let likeList = this.getLikeList();
        let artIndex = 0;
        likeList.forEach((ele, index) => {
            if (artId == ele.artId) {
                artIndex = index;
                return ;
            }
        });
        likeList.splice(artIndex, 1);
        this.setLikeList(likeList);
    }
    loadLikeList(artId){
        const likeList=this.getLikeList();
        let likeStatus=false;
        likeList.forEach((ele, index) => {
            if (artId == ele.artId) {
              likeStatus=true;
            }
          });
        return likeStatus
    }
}
export {LikeModel}