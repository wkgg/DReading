'use strict';
import React, {
    StyleSheet,
    Component,
    TouchableOpacity,
    Text,
    Image,
    View
} from 'react-native';

class ArticleItem extends Component {
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
    var imageSource = require('../images/hackernews-logo.png');
    if (this.props.from === 'Reddit') { imageSource = require('../images/reddit-logo.png');}

    return (
        <TouchableOpacity style={styles.postItem} onPress={this.onPress.bind(this)}>
          <View style={styles.itemTitle}>
            <Image style={styles.icon}
                   source={imageSource}
            />
            <Text style={styles.from}>
              {this.props.from}
            </Text>
          </View>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
          <Text>
            {this.props.postTime}
          </Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  postItem: {
    marginTop: 5,
    backgroundColor: 'white',
    padding: 15
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  from: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 5
  },
  itemTitle: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10
  },
  icon: {
    width: 30,
    height: 30
  }
});

module.exports = ArticleItem;

