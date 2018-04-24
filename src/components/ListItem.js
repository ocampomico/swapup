import React, {Component} from 'react';
import {Text} from 'react-native';
import {CardSection} from './common';

class ListItem extends Component {
    render(){
        const {name} = this.props.user;
    
    return(
        <CardSection>
            <Text style={styles.tittleStyle}>
                {name}
            </Text>
        </CardSection>

    );
}
}

const styles = {
    titleStyle: {
        fontSioze: 18,
        paddingLeft:15
    }
}
export default ListItem;
