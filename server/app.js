var express = require('express');

var app = express();


// 设置静态资源服务器
app.use('/public', express.static('public'));



app.get('/', function(res, req) {
    res.send('hello word');
})

app.get('/login', function(res, req) {
    
})

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port
    
    console.log("Node.JS 服务器已启动，访问地址： http://%s:%s", host, port)

})
