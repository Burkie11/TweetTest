const twitterController = require("../controllers/twitterController");
const request = require('request');
var shouldRun = false;
var query = "";

function collect(query)
{

    request.post({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://localhost:3000/getTweets',
        body:    "word=" + query
    }, function(error, response, body){
        //console.log(err);
    });
}

exports.updateState = function(word, autoCollect)
{
    query = word;
    shouldRun = autoCollect;

    setInterval(function(){

        if (shouldRun)
        {
            collect(query);
        }
    }, 30000);
};
