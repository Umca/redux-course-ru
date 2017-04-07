/**
 * Created by User on 06.04.2017.
 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import * as pageActions from '../actions/PageActions';
import * as userActions from '../actions/UserActions'


class App extends Component{
    render(){
        const {user, page} = this.props;
        const {getPhotos} = this.props.pageActions;
        const {handleLogin} = this.props.userActions;
        return(
            <div className="row">
                <User name = {user.name} error={user.error} handleLogin={handleLogin}/>
                <Page year = {page.year} photos={page.photos} getPhotos={getPhotos}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user:state.user,
        page:state.page
    }
}
function mapDispatchToProps(dispatch){
    return{
        pageActions: bindActionCreators(pageActions, dispatch),
        userActions:bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)