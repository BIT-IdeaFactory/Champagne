import React from 'react';
import { View, StyleSheet, TextInput, Text, AsyncStorage } from 'react-native';

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(){
        super();
        this.state={
            Person:{
                FirstName: '',
                LastName: ''
            }
        }
    }
    async storeState(){
        try{
            let jsonOfState = await AsyncStorage.setItem('Person', JSON.stringify(this.state.Person));
            return jsonOfState;
        } catch(error){
            console.log(error.message);
        }
    }
    handleFirstName = (data) => {
        let newPerson = this.state.Person;
        newPerson.FirstName = data;
        this.storeState();
        this.setState({Person:newPerson});
    };
    handleLastName = (data) => {
        let newPerson = this.state.Person;
        newPerson.LastName = data;
        this.storeState();
        this.setState({Person:newPerson});
    };
    async retrieveState(){
        try{
            AsyncStorage.getItem('Person').then((data) => {
                if(data !== null)
                    this.setState({'Person':JSON.parse(data)});
            });
        } catch(error){
            console.log(error.message);
        }
    }

    componentWillMount(){
        this.retrieveState();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <Text>Input your first name here:</Text>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.TextInput}
                        placeholder={this.state.Person.FirstName}
                        onChangeText= {this.handleFirstName}
                    />
                </View>
                <View style={{flex: 1}}>
                    <Text>Input your last name here:</Text>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.TextInput}
                        placeholder={this.state.Person.LastName}
                        onChangeText= {this.handleLastName}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#fff',
        flexDirection: "row",
    },
    TextInput: {
        borderColor: 'gray',
        borderWidth: 1,
    },
});
