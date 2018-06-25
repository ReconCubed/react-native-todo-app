import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  SafeAreaView,
  ListView,
  Keyboard
} from 'react-native';
import Header from './header';
import Footer from './footer';


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      allComplete: false,
      value: "",
      items: [],
      dataSource: ds.cloneWithRows([])
    };
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this)
  }
  handleToggleAllComplete() {
    const complete = !this.state.allComplete;
    const newItems = this.state.items.map((item) => ({
      ...item,
      complete
    }));
    this.setState({
      items: newItems,
      allComplete: complete
    })
  }

  handleAddItem() {
    if(!this.state.value) return;
    const newItems = [
      ...this.state.items,
      {
        key: Date.now(),
        text: this.state.value,
        complete: false
      }
    ];
    this.setState({
      items: newItems,
      value: ""
    })
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>

        <Header
        value={this.state.value}
        onAddItem={this.handleAddItem}
        onChange={(value) => this.setState({ value })}
        onToggleAllComplete={this.handleToggleAllComplete}
        />

        <View style={styles.content}>
        </View>

        <Footer />

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    ...Platform.select({
      ios: {
        paddingTop: 30
      }
    })
  },
  content: {
    flex: 1,
  },
});
