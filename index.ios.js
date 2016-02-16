'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    ListView,
    Navigator,
    TouchableOpacity,
    WebView
} from 'react-native';
import moment from 'moment';
import config from './config/leanCloud.config.js';

var AV = require('avoscloud-sdk');
AV.initialize(config.appId, config.appKey);


class DetailView extends Component {
    render() {
        return (
            <WebView
                automaticallyAdjustContentInsets={false}
                style={styles.webView}
                url={this.props.url}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
            />
        );
    }
}


class PostItem extends Component {
    constructor(props) {
        super(props);
    }

    onPress() {
        this.props.navigator.push({
            name: "DetailPage",
            index: this.props.route.index + 1,
            url: this.props.url
        });
    }

    render() {
        return (
            <TouchableOpacity style={styles.postItem} onPress={this.onPress.bind(this)}>
                <Text style={styles.title}>
                    {this.props.title}
                </Text>
                <Text>
                    {this.props.postTime}
                </Text>
                <Text style={styles.from}>
                    From: {this.props.from}
                </Text>
            </TouchableOpacity>
        );
    }
}

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([])
        }
    }

    getArticleObject(data) {
      var articleObj = {};
      console.log("date: ", data.get('postTime'));
      articleObj.title = data.get('title');
      articleObj.from = data.get('from');
      articleObj.url = data.get('url');
      articleObj.postTime = moment(data.get('postTime')).format('DD-MM-YYYY');;
      return articleObj;
    }

    componentWillMount() {
      AV.Query.doCloudQuery('select title, from, url, postTime from Article').then((data) => {
        var results = data.results.map(r => this.getArticleObject(r));
        this.setState({
          dataSource: ds.cloneWithRows(results)
        });
      }, function(error) {
        console.log(error);
      });
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <PostItem {...this.props} {...rowData} />}
            />
        );
    }
}

class DReading extends Component {
    renderScene(route, navigator) {
        if (route.name === 'DetailPage') return <DetailView url={route.url}/>;
        return <PostList route={route} navigator={navigator}/>;
    }

    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{name: 'HomePage', index: 0}}
                    renderScene={this.renderScene}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },
    postItem: {
        margin: 10,
        borderWidth: 2,
        borderColor: '#222222',
        padding: 5
    },
    title: {
        fontWeight: 'bold'
    },
    from: {
        marginTop: 5
    },
    webView: {
        height: 350
    }
});

AppRegistry.registerComponent('DReading', () => DReading);
