var path=new Map();
function  getAllProducts(request,response) {
    response.writeHeader(200,{'Content-Type':'text/html;charset=utf-8'});
    response.write('您请求了getAllProducts接口');
    response.end();
}
path.set('/getAllProducts',getAllProducts);
module.exports.path=path;