import React, { Component } from 'react';
import {Jumbotron, Grid,Row, Col} from 'react-bootstrap';

import './Home.css';
import Typist from 'react-typist';

class Home extends Component {
    render() {
        const words = ['Join The Cell Network','Work On UN Sustainable Development Goals','Solve World Problems','Starting with - Solving HomelessNess Issue','Using Open Source Technology, Tools and Skills'];

        for (let i = 5; i < 1000; i++) {
            words[i] = words[i - 5];
        }

        return (
           <Grid>
           <div className="container">

               <Jumbotron>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <h1>
                        <Typist>
                            {words.map((word, i) => (
                            <span key={word}>
                                {word}
                                <Typist.Backspace
                                    count={word.length}
                                    delay={(i + 1) * 500}
                                />
                            </span>
                            ))}
                        </Typist>
                    </h1>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                   <br/>

                   
               </Jumbotron>
               
             </div>  
    <div className="container">
    <ul className="timeline">
        <li>
          <div className="timeline-badge primary"></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <img className="img-responsive" src="assets/problem.jpg" />
              
            </div>
            <div className="timeline-footer">
              <p>Housten Why We Have So Many Problems In The World? Simple Answer: Human Consciousness Has Not Been Raised in Society. Surprised! Surprised! but let us show you how deep the rabbit hole goes.</p>
              
            </div>
            
            <div className="timeline-footer">
                <a className="pull-center" href='/problem'>Understand The Problem</a>
            </div>
          </div>
        </li>
        
        <li  className="timeline-inverted">
          <div className="timeline-badge primary"></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <img className="img-responsive" src="assets/plan.jpg" />
              
            </div>
            <div className="timeline-footer">
              <p>What is the Solution? Simple Answer is that solution exists but its scattered all over the planet and are not organised. We have a solution to organise all existing solutions in one vision and direction. Its an operational and managemnet issue and not a technical issue.Can this be Done? Yes it can be done, with the advent of technology we are far better connected across the world. But we need a plan, a strategy and a burning desire to make a difference.</p>
             
            </div>
            
            <div className="timeline-footer">
                 <a className="pull-center" href='/solution'>Turning Idea Into The Reality - The Big Plan</a>
            </div>
          </div>
        </li>
       
        
        <li>
          <div className="timeline-badge primary"><a><i className="glyphicon glyphicon-record invert" rel="tooltip" title="11 hours ago via Twitter" id=""></i></a></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <img className="img-responsive" src="assets/team.jpg" />
              
            </div>
            <div className="timeline-footer">
              <p>How we are going to do this ? True power belongs to the people.If you have landed on this page, then go through our vision, values and principles. Join and make a difference, we understand the problem, we have the solution and we have a plan and above all a will to make a difference.</p>
              
            </div>
            
            <div className="timeline-footer">
                <a className="pull-center" href="/team">Join Us As A Cell</a>
            </div>
          </div>
        </li>   
    </ul>
</div>      

<div className="card">
              
        <div className="content">
            <Grid fluid>
                
            <div className="card">
                <div className="header">
                  <h3 className="title">Why YogaFire, How We Do It & What We Do?</h3>
                 </div>
                 <br/>
                 <br/>
                 <div className="content">
                 <Row>
                 <br/>
                 <br/>
                 <br/>
                 <br/>
                 <br/>
                 <br/>
                 <h3>As the famous Simon Sinek TED Talk says “Start with why.." So why does YogaFire exist? To understand our Why you need to understand yours, as if your Why is different than ours then this is not the right platform for you.<br/><br/></h3> <h4 className="title">"<b>(Why)</b> We Are Just Cells Of Planet Earth, <b><a href='/solution'>(How)</a></b> Who Are Trying To Empower Another Cell i.e. You(Any Normal Guy/Gal, Any Company, NGO or Government) , <b><a href='/problem'>(What)</a></b> Resulting In Cells That Can Solve World Problems Themselves In Their Community, Village, City, Country Or The World By Using Our Holistic Solution Pattern!"  <br/> <br/> Check out below video to understand more on our Why?</h4>
                 <br/>
                 <br/>
                 <br/>
                 <Col md={1}>
                 </Col>
                <Col md={10}>
                <iframe width="100%" height="700" src="https://www.youtube.com/embed/rrikyi5c0Xk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="yes"></iframe> 
                </Col>
                <Col md={1}>
                </Col>
              </Row>



                </div>

            </div>

         </Grid>   
        </div>

       
      </div>



           </Grid>
           
            
        )
    }
}


export default Home;