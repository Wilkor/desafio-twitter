var Twitter = require('twitter');
var express = require('express');
var router = express.Router();


var client = new Twitter({

    consumer_key: 'HaNje53ElEIdzzDYCZFBFLUqW',
    consumer_secret: 'ejaSo0aNXt6r1O1p13XRWoFU2FxMVek4vjM9ga9qnWyVnAptMh',
    access_token_key: '1119382765282234368-gzZXjxlrdCaqMSasfxonv1thHC4LBj',
    access_token_secret: 'qJ0JorHyDDD7mXotXlDN10lzI5M9XpSZus03cFlU2c11i'
       
  });
  
  
  router.get('/tweets', function(req, res, next) {
  
      client.get('search/tweets', {q: '#bolsonaro'}, function(error, tweets, response) {
         
         res.send(tweets)
       });
       
    });

  module.exports = router;