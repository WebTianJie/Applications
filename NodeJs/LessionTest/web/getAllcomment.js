var path=new Map();
function  getAllComments(request,response) {
    response.writeHeader(200,{'Content-Type':'text/html;charset=utf-8'});
    response.write('您请求了getAllComments接口');
    response.end();
}
path.set('/getAllComments',getAllComments);
module.exports.path=path;