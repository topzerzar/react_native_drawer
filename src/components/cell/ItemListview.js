import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


export default class ItemListView extends Component {
  render() {
    return (
     <TouchableOpacity onClick={() => { console.warn('x')}}>
      <View style={styles.viewParent}>
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width: 40, height: 40}} />
        <Text style={styles.textItem}> {this.props.text}</Text>
      </View>
     </TouchableOpacity> 
    )
  }
}

ItemListView.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

const styles = StyleSheet.create({
  viewParent: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  textItem: {
    color: '#fff',
    flex: 1,
  }
})