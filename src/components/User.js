/**
 * Created by User on 07.04.2017.
 */
import React, {PropTypes, Component} from 'react';

export default class User extends Component{
    render(){
        const {name, error} = this.props;
        let template;

        if (name){
            template = <p>Hello, {name}</p>
        } else {
            template = <button className='btn' onClick={this.props.handleLogin}>Войти</button>
        }
        return(
            <div className="ib user">
                {template}
                {error ? <p className='error'> {error}. <br /> You shall not pass!</p> : ''}
            </div>
        )
    }
}

User.propTypes ={
    name: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};