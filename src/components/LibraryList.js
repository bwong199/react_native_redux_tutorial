import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator, Text } from 'react-native';

class LibraryList extends Component {
    render(){
        return (
            <Text>Hello</Text>
        )
    }
};

const mapStateToProps = state => {

    return { librareis: state.libraries}
}


export default connect()(LibraryList);