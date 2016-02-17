'use strict';
import React, {
    StyleSheet,
    Component,
    WebView
} from 'react-native';

class ArticleDetailView extends Component {
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

const styles = StyleSheet.create({
  webView: {
    height: 350
  }
});

module.exports = ArticleDetailView;

