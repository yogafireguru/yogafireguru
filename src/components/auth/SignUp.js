import React, { Component } from 'react';

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../store/actions/authActions'

class SignUp extends Component {
    state ={
        email:'',
        password:'',
        firstName:'',
        lastName:''   
    }

    handleChange = (e) =>{
       this.setState({
           [e.target.id]:e.target.value
       })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        this.props.signUp(this.state);
        this.props.history.push("/");

    }
    render() {

        const { auth,authError } = this.props;

        //if(!auth.uid) return <Redirect to ='/' />

        return (
             <div className="container">   
                <div className="row">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
    
                    <div className="col-sm-10 col-sm-offset-1">
                         <div className="col-md-2 col-sm-6">
                             <div className="card-container">        
                            </div> 
                         </div> 

                         <div className="col-md-8">
                            <div className="card">
                                <div className="front">
                                    <div className="cover">
                                        <img src="assets/rotating_card_thumb.png"/>
                                    </div>
                                    
                                    <form onSubmit={this.handleSubmit} className="white">
                                        <br/>
                                        <div>
                                            <label htmlFor="email">Email:</label>
                                            <input type="email" id="email" onChange={this.handleChange} />
                                        </div>

                                        <div>
                                            <label htmlFor="password">Password:</label>
                                            <input type="password" id="password" onChange={this.handleChange} />
                                        </div>

                                        <div>
                                            <label htmlFor="firstName">First Name:</label>
                                            <input type="text" id="firstName" onChange={this.handleChange} />
                                        </div>

                                        <div>
                                            <label htmlFor="lastName">Last Name:</label>
                                            <input type="text" id="lastName" onChange={this.handleChange} />
                                        </div>

                                        <div>
                                        <button>Sign Up</button>
                                        <div>
                                                {authError ? <p>{authError}</p>:null}
                                        </div>
                                        </div>
                                    </form>
                                </div>
                                
                            </div> 
                            
                        </div>                
                    </div>
               </div>
                    <br/>
                    <img width="100%" src="assets/backgroundteamimage.png"/>
            </div>  

            
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}

const mapDispatchToProps =(dispatch) =>{
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);