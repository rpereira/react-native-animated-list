import React, { Component } from 'react';
import {
  FlatList,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class AnimatedVirtualizedList extends Component {
  state = {
    items: [{ key: Date.now() }],
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  _onPressAddItem = () => {
    this.setState(state => ({ items: [...state.items, { key: Date.now() }]}));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity onPress={this._onPressAddItem}>
            <View style={styles.button}>
              <Text>Add entry</Text>
            </View>
          </TouchableOpacity>
          <FlatList
            data={this.state.items}
            renderItem={({item}) => <Text>{item.key}</Text>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  content: {
    margin: 40,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
