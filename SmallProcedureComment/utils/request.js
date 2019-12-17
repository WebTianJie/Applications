const baseServeUrl='http://192.168.6.254:12306/';
module.exports={
  // 首页>根据登录的res_code获取openid
  getOpenId:baseServeUrl+'getOpenId',
  // 首页>根据openId获取登录用户信息
  getUserByOpenId:baseServeUrl+'getUserByOpenId',
  // 首页>根据title获取评论列表
  queryComment:baseServeUrl+'queryComment',
  // 首页>更新点赞次数,参数isClicked:是否点击过, count:数量, id:评论id
  updateFabulous:baseServeUrl+'updateFabulous',
  // 首页>留言更新回复点赞 isClicked:是否点击过, count:数量, id:回复id
  updateFabulousReplay:baseServeUrl+'updateFabulousReplay',
  // 首页>获取留言下面的回复留言,根据标题获取回复
  getReplyCommitByTitle:baseServeUrl+'getReplyCommitByTitle',
  // 首页>根据id回复留言
  insertReplyGuestById:baseServeUrl+'insertReplyGuestById',
  // 首页>根据id删除回复留言
  deleteGuestById:baseServeUrl+'deleteGuestById',
  // 首页>根据id删除评论
  delCommitById:baseServeUrl+'delCommitById',

  // 留言页面 增加留言
  insertComment:baseServeUrl+'insertComment',

  //待审核评论列表 审核
  updateApprovalCommentsById:baseServeUrl+'updateApprovalCommentsById',
  //待审核评论列表  获取所有的待审核评论的列表
  getAllApprovalCommentsByTitle:baseServeUrl+'getAllApprovalCommentsByTitle',

  //文章列表 根据title,获取所有文章列表
  queryComment:baseServeUrl+'queryComment',
  //文章列表 根据title,删除文章下面所有的评论
  delCommentByTitle:baseServeUrl+'delCommentByTitle',

  //管理员页面,添加管理员
  addUser:baseServeUrl+'addUser'

}