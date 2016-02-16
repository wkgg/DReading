import config from './config/leanCloud.config.js';
import moment from 'moment';

var AV = require('avoscloud-sdk');
AV.initialize(config.appId, config.appKey);

class Article {
  static getArticleObject(data) {
    var articleObj = {};
    articleObj.title = data.get('title');
    articleObj.from = data.get('from');
    articleObj.url = data.get('url');
    articleObj.postTime = moment(data.get('postTime')).format('DD-MM-YYYY');;
    return articleObj;
  }
  static getAll(callback){
    AV.Query.doCloudQuery('select title, from, url, postTime from Article').then((data) => {
      var results = data.results.map(r => this.getArticleObject(r));
      callback(results);
    }, function(error) {
      console.log(error);
    });
  }
}

export { Article as default}

