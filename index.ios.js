'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Navigator,
    View
} from 'react-native';

import ArticleDetailView from './components/article-detail-view.js';
import ArticleListView from './components/article-overview-list.js';

class DReading extends Component {
    renderScene(route, navigator) {
        if (route.name === 'DetailPage') return <ArticleDetailView url={route.url}/>;
        return <ArticleListView route={route} navigator={navigator}/>;
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
    }
});

AppRegistry.registerComponent('DReading', () => DReading);
