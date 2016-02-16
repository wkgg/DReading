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

class PostList extends Component {
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.getData())
        }
    }

    getData() {
        return [
            {
                title: "Kotlin 1.0 Released: Pragmatic Language for JVM and Android",
                postTime: "2014-08-20 15:30:00",
                from: "Reddit",
                url: "http://blog.jetbrains.com/kotlin/2016/02/kotlin-1-0-released-pragmatic-language-for-jvm-and-android/"
            },
            {
                title: "Looking forward to GCC6 - Many new warnings",
                postTime: "2014-08-25 11:20:25",
                from: "Reddit",
                url: "https://gnu.wildebeest.org/blog/mjw/2016/02/15/looking-forward-to-gcc6-many-new-warnings/"
            },
            {
                title: "How to Safely Store a Password in 2016 (PHP, Java, Node.js, C#, Ruby, Python)",
                postTime: "2016-01-05 11:10:00",
                from: "Reddit",
                url: "https://paragonie.com/blog/2016/02/how-safely-store-password-in-2016"
            }
        ];
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
