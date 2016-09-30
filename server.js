var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article={
    'article-one':{
        title:'This is It',
        heading:'ARTICLE ONE',
        date:'oct 5,2016',
        content:` <p>
                    hi! mama You are the creature of your own destiny                                         hi! mama You are the creature of your own destiny
        
                </p>`
    },
    'article-two':{
        title:'This is It 2',
        heading:'ARTICLE TWO',
        date:'oct 5,2016',
        content:` <p>
                    hi! mama You are the creature of your own destiny                               
        
                </p>`
        
    },
    'article-three':{
        title:'This is It 3',
        heading:'ARTICLE THREE',
        date:'oct 30,2016',
        content:` <p>
                    hi! mama You are the creature of your own destiny                           
        
                </p>`
    }
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
         <div>
             <a href="/">Home</a>
         </div>
         <h3>
            ${heading}
         </h3>
         <div>
            ${date}
         </div>
         <div>
            <p>
                ${content}  
            </p>
         </div>
        </div>
    </body>
    </html>

`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function(req,res){
    counter++;
    res.send(counter.toString());
});

app.get('/favicon.ico', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});

var names = [];
app.get('/submit-names',function(req,res){
    //Get the namefrom the request
    var names = req.query.name;
    names.push(name);
    //JSON:Javascript Object Notation
    res.send(JSON.stringfy(names));
});

app.get('/:articleName',function (req,res){
  var articleName=req.params.articleName;    
  res.send(createTemplate(article[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
