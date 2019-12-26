import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Team extends Component {
    
    
    handleRegister = (e) =>{
        e.preventDefault();
        this.props.history.push("/register");
    }

    render() {
        return (
                <div className="container">   
                 
                    <br/>
                    <br/>
                    <br/>

                    <h1 className="title">
                            Simply A Cell
                            <br/>
                            <small>Join Only If You Are A Cell!</small>
                        </h1>
                        <Button bsStyle="primary" className='btn-lg'>Email us at info@yogafire.guru</Button>
                        <br/>
                    <br/>
                    <br/>
                <div className="row">
                    <div className="col-sm-10 col-sm-offset-1">
                    <div className="col-md-4 col-sm-6">
                        <div className="card-container">
                            <div className="card">
                                <div className="front">
                                    <div className="cover">
                                        <img src="assets/rotating_card_thumb2.png"/>
                                    </div>
                                    <div className="user">
                                        <img className="img-circle" src="assets/rotating_card_profile3.png"/>
                                    </div>
                                    <div className="content">
                                        <div className="main">
                                            <h3 className="name">Rajat Ratewal</h3>
                                            <p className="profession">Just Another Cell Of Planet Earth</p>
                                            <p className="text-center">"A Cool Fire, A Conscious Burning Desire, You Can Call Me YogaFire!"</p>
                                        </div>
                                        <div className="footer">
                                            <i className="fa fa-mail-forward"></i> More Details
                                        </div>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="header">
                                        <h5 className="motto">"Helping In Solving World Problems Is My Only Moto!"</h5>
                                    </div>
                                    <div className="content">
                                        <div className="main">
                                            <h4 className="text-center">Job Description</h4>
                                            <p className="text-center">Started with the vision for YogaFire. My Job is to connect disconnected dots and explain it to people.</p>

                                           
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <div className="social-links text-center">
                                            <a href="https://www.facebook.com/rajat.ratewal" className="facebook"><i className="fa fa-facebook fa-fw"></i></a>
                                            <a href="http://fabacademy.org/2019/labs/akgec/students/rajat-ratewal/Introduction/" className="google"><i className="fa fa-google-plus fa-fw"></i></a>
                                            <a href="https://twitter.com/rajatratewal" className="twitter"><i className="fa fa-twitter fa-fw"></i></a>
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                    
                    </div>
            </div>


           

                    <br/>
                    <img width="100%" src="assets/academany.png"/>
                    <img width="100%" src="assets/teammission.png"/>
                    <br/>
                    <br/>
                    <br/>
                    <img width="100%" src="assets/fab.jpg"/>
                    <img width="100%" src="assets/backgroundteamimage.png"/>


    </div>  
        )
    }
}


export default Team;