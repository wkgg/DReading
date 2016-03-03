'use strict';
import React, {
    StyleSheet,
    Component,
    View,
    ScrollView,
    Text
} from 'react-native';

class ArticleDetailView extends Component {
  render() {
    return (
        <ScrollView style={styles.view}>
          <View style={styles.title}>
            <Text >
              {this.props.title}
            </Text>
          </View>
          <Text style={styles.content}>
            {this.props.content}
          </Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 80,
    paddingLeft: 10,
    height: 300
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },
  content: {
    fontFamily: 'HiraginoSans-W3',
    backgroundColor: '#fff'
  }
});

module.exports = ArticleDetailView;

