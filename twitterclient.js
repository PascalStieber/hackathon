var express = require('express');
var twittertext = require('twitter-text')
var Twitter = require('twitter');
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



var client = new Twitter({
  consumer_key: 'FZaLaMHLX26NvlyhcC9o0SPw7',
  consumer_secret: '3FPXTzBLHVxP8abQb0TrPKiUTXIXTnmMlOIvkCHHcSIpZkwUP2',
  access_token_key: '1326684985-qOHDq4NYevxx4Lo9zAHucx6OCfVRYee0yTbbUP9',
  access_token_secret: 'GZ4ueHorIMpMDKLMCfKh5j2z26B1Llhnfjl39qNgYohoo'
});

/*client.post('statuses/update', {status: 'I Love Twitter'})
  .then(function (tweet) {
    console.log(tweet);
  })
  .catch(function (error) {
    throw error;
  })*/

/*var stream = client.stream('statuses/filter', {track: 'javascript'});
var myEvent = stream.on('data', function(event) {
  console.log(event && event.text);
});

stream.on('error', function(error) {
  throw error;
});  */

var params = {
  q: '#javascript',
  count: 100,
  result_type: 'recent',
  lang: 'en'
}

module.exports.queryTwitter = function(fn){
  client.get('search/tweets', params, function(err, data, response) {
    fn(data);
  });
}

module.exports.getEvents = function(){

  return "hallo welt";
}

 
// You can also get the stream in a callback if you prefer. (Same as above)
/*client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
  stream.on('data', function(event) {
    console.log(event && event.text);
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});*/
