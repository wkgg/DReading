'use strict';
import React, {
    StyleSheet,
    Component,
    TouchableOpacity,
    Text
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

const styles = StyleSheet.create({
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
  }
});

module.exports = ArticleItem;

