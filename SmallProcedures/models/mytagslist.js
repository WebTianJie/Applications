class MyTagsListModel {
    getTagsList(){
        return wx.getStorageSync('myTagsList')||[];
    }
    setTagsList(value){
        wx.setStorageSync('myTagsList',value);
    }
    removeTagsList(tagId){
        let tagList=this.getTagsList();
        let delIndex=0;
        tagList.forEach((item,index) => {
            if(item.tagId==tagId){
                delIndex=index;    
            }
        });
        tagList.splice(delIndex,1);
        this.setTagsList(tagList);
    }
    loadMyTagList(tagId){
        let tagList=this.getTagsList();
        let isMyTag=false;
        tagList.forEach((item,index) => {
            if(item.tagId==tagId){
                isMyTag=true;
                return ;
            }
        });
        return isMyTag;
    }
}

export {MyTagsListModel}