import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ListView,
  Image,
} from 'react-native'
import ItemListView from './cell/ItemListview';

export default class ControlPanel extends Component {
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4']),
    };
  }

  render() {
    let {closeDrawer} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.viewHeader}>
            <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width: 70, height: 70, margin: 20}} />
            <Text style={styles.controlText}>Mr. React Native</Text>
            <Text style={styles.controlText}>reactnative@reactnative.com</Text>
        </View>

        <ScrollView style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={closeDrawer}>
            <Text>Close Drawer</Text>
          </TouchableOpacity>

          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <ItemListView text={rowData}/>
            }
          />
          
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  viewHeader: {
    backgroundColor: '#5f9ea0',
  },
  controlText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  }
})