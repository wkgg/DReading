'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Navigator,
    View,
    Text,
    TouchableOpacity,
    TabBarIOS
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
    constructor() {
      super();
      this.state = {
        selectedTab: 'article'
      }
    }
    renderScene(route, navigator) {
        if (route.name === 'DetailPage') return <ArticleDetailView content={route.content} title={route.title}/>;
        return <ArticleListView route={route} navigator={navigator} />;
    }

    renderArticle() {
      return(
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

    renderQA() {
      return(
        <View style={styles.qa}>
          <Text>Hello QA</Text>
        </View>
      );
    }

    renderTalking() {
      return(
        <View style={styles.talking}>
          <Text>Hello Talking</Text>
        </View>
      );
    }

    render() {
      var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
        return (
            <TabBarIOS
              tintColor="white"
              barTintColor="darkslateblue">
              <TabBarIOS.Item
                title="Article"
                icon={{uri: base64Icon, scale: 3}}
                selected={this.state.selectedTab === 'article'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'article',
                  });
                }}>
                {this.renderArticle()}
              </TabBarIOS.Item>
              <TabBarIOS.Item
                title="Q/A"
                icon={{uri: base64Icon, scale: 3}}
                selected={this.state.selectedTab === 'qa'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'qa',
                  });
                }}>
                {this.renderQA()}
              </TabBarIOS.Item>
              <TabBarIOS.Item
                title="Talking"
                icon={{uri: base64Icon, scale: 3}}
                selected={this.state.selectedTab === 'talking'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'talking',
                  });
                }}>
                {this.renderTalking()}
              </TabBarIOS.Item>
            </TabBarIOS>
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
    },
    qa: {
      paddingTop: 60
    },
    talking: {
      paddingTop: 60
    }
});

AppRegistry.registerComponent('DReading', () => DReading);
