'use strict';
import React, {
    Component,
    ListView
} from 'react-native';


import * as Article from '../repositories/article.js';
import ArticleItem from './article-overview-item.js';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class ArticleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }

  componentWillMount() {
    Article.getAll().then(results => {
      this.setState({
        dataSource: ds.cloneWithRows(results)
      });
    });
  }

  render() {
    return (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <ArticleItem {...this.props} {...rowData} />}
        />
    );
  }
}

module.exports = ArticleList;

