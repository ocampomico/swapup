import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image, } from 'react-native';
  
  export default class Header extends Component {
    render(){
        return (
              <Image style= {styles.headerBackground} source= {require('../img/headerbg.jpg')}>
                
                <View style = {styles.header}>
                  <View style={styles.profilepicWrap}>
                    <Image style={styles.profilepic} source={require('../img/profilepic.jpg')} />
                    </View>
                    
                    <Text style={styles.name}>John Doe </Text>
                    <Text style={styles.pos}> - Professional Cook - </Text>
                    
                    </View>
                    </Image>
                     <View style = {styles.bar}>

                     <View style={(styles.barItem, styles.barseparator)}>
                         <Text style={styles.barTop}>12k</Text>
                         <Text style={styles.barBottom}>Followers</Text>
     
                     </View>
                     <View style= {(styles.barITem)}>
                         <Text style={styles.barTop}>Rating</Text>
                         <Text style={styles.barBottom}>4/5</Text>
                     </View>
                 </View>
                    
          
          );
                    }
  }
        
      const styles = StyleSheet.create({
        headerBackground: {
          flex: 1,
          width: null,
          alignSelf: 'stretch'
        },
        header: {
          flex:1,
          allignItems: 'center',
          justifyContent: 'center',
          padding: 20,
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
        profilepicWrap: {
          width: 180,
          height: 180,
          borderRadius: 100,
          borderColor: 'rgba(0,0,0, 0.4)',
          borderWidth: 16,
        },
        profilepic :
        {
          flex:1,
          width: null,
          alignSelf: 'strech',
          borderRadius: 100,
          borderColor: '#fff',
          borderWidth: 4
        },
        name: {
          marginTop: 20,
          fontSize: 16,
          color: '#fff',
          fontWeight: 'bold'

        },
        pos: {
          fontSize: 14,
          color: '#0394c0',
          fontWeight: '300',
          fontStyle: 'italic'
        },
        bar: {
          borderTopColor: '#fff',
          borderTopWidth: 4,
          backgroundColor: '#ec2e4a',
          fixedDirection: 'row'
      },
      barseparator: {
          borderRightWidth: 4
      },
      barItem: {
          flex:1,
          padding:10,
          allignItems: 'center',
      },
      barTop: {
          color: '#fff',
          fontSize: 16,
          fontWeight: 'bold',
          fontStyle: 'italic'
      },
      barBottom: {
          color: '#000',
          fontSize: 14,
          fontWeight: 'bold'
  
      },
        })
        
      
                      
  