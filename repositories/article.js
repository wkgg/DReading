import config from '../config/leanCloud.config.js';
import moment from 'moment';

var AV = require('avoscloud-sdk');
AV.initialize(config.appId, config.appKey);

function getArticleObject(data) {
  var articleObj = {};
  articleObj.title = data.get('title');
  articleObj.from = data.get('from');
  articleObj.url = data.get('url');
  articleObj.postTime = moment(data.get('postTime')).format('DD-MM-YYYY');
  return articleObj;
}

function getAll(){
  return AV.Query.doCloudQuery('select title, from, url, postTime from Article').then((data) => {
    return data.results.map(r => getArticleObject(r));
  }, error => {
    console.log(error);
  });
}


export {getAll}

