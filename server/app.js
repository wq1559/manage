var express = require('express');
const querystring = require('querystring');

var app = express();



// 设置静态资源服务器
app.use('/public', express.static('public'));



app.get('/', function(req, res) {
    res.send('hello word');
    res.end();
})

app.get('/login', function(req, res) {
    let obj = '';
    req.on('data', data => {
        obj += data;
    })
    req.on('end', () => {
        console.log(obj)
    })
    res.write(obj);
    res.end();
})

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port
    
    console.log("Node.JS 服务器已启动，访问地址： http://%s:%s", host, port)

})
