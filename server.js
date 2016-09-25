var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articleone{
    title:'Article one I am Ravi';
    heading:'Article one';
    content: ` <p>
                this is my first article on the webapp page
                this is my first article on the webapp page
                this is my first article on the webapp page
            </p>
             <p>
                this is my first article on the webapp page
                this is my first article on the webapp page
                this is my first article on the webapp page
            </p> 
             <p>
                this is my first article on the webapp page
                this is my first article on the webapp page
                this is my first article on the webapp page
            </p> ` ; 
            
}
function createtempalets(data)
{
var title=data.title;
var heading=data.heading;
var content=data.content;


var htmltemplates = `
    
    
    <html>
    <head>
        <title>
           $(title)
        
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        
        <h3>
            $(heading)
        </h3>
        <div>
           $(content)
        </div>
        </div>
    </body>
</html>


    
    `
;
return htmltemplates;
}

app.get('/article-one', function(req, res){
    res.send(createtempalates(articleone));
});
app.get('/article-Two', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-Three', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
