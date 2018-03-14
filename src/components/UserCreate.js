import React, { Component } from 'react';
import { Picker, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from './common';
import { Button } from 'react-native-elements';
import { userUpdate, userCreate } from '../actions';

class UserCreate extends Component {
    
    onButtonPress() {
        const { name, occupation, city } = this.props;
        this.props.userCreate({ name, occupation, city });
        this.props.navigation.navigate('main');
    }

    render() {
        return(
            <Card style={{ marginTop: 50 }}>
                <CardSection>
                    <Input
                        label="Name:"
                        placeholder="John Doe"
                        value={this.props.name}
                        onChangeText={value => this.props.userUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Occupation:"
                        placeholder="Hair Stylist"
                        value={this.props.occupation}
                        onChangeText={value => this.props.userUpdate({ prop: 'occupation', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="City:"
                        placeholder="Azusa, CA"
                        value={this.props.city}
                        onChangeText={value => this.props.userUpdate({ prop: 'city', value })}
                    />
                </CardSection>

                    <Button
                        style={{ 
                            marginTop: 30, 
                            alignItems: 'center', 
                            justifyContent: 'center' 
                        }}
                        title=" Create User "
                        backgroundColor='lightblue'
                        rounded
                        onPress={this.onButtonPress.bind(this)}
                    />
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, occupation, city } = state.userFormReducer;

    return { name, occupation, city };
};

export default connect(mapStateToProps, {userUpdate, userCreate}) (UserCreate);