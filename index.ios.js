'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Navigator,
    View,
    Text,
  TouchableOpacity
} from 'react-native';

import ArticleDetailView from './components/article-detail-view.js';
import ArticleListView from './components/article-overview-list.js';

const cssVar = require('cssVar');
const NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }
    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {previousRoute.name}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {

  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.name}
      </Text>
    );
  }
};

class DReading extends Component {
    renderScene(route, navigator) {
        if (route.name === 'DetailPage') return <ArticleDetailView url={route.url}/>;
        return <ArticleListView route={route} navigator={navigator} />;
    }

    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{name: 'HomePage', index: 0}}
                    renderScene={this.renderScene}
                    navigationBar={
                      <Navigator.NavigationBar
                        routeMapper={NavigationBarRouteMapper}
                        style={styles.navBar}
                      />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDEDED'
    },
    navBar: {
      backgroundColor: 'white'
    },
    navBarText: {
      fontSize: 16,
      marginVertical: 10
    },
    navBarTitleText: {
      color: cssVar('fbui-bluegray-60'),
      fontWeight: '500',
      marginVertical: 9
    },
    navBarLeftButton: {
      paddingLeft: 10
    },
    navBarRightButton: {
      paddingRight: 10
    },
    navBarButtonText: {
      color: cssVar('fbui-accent-blue')
    }
});

AppRegistry.registerComponent('DReading', () => DReading);
