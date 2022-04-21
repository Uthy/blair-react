import AnimateRoute from 'components/AnimateRoute';
import React from 'react';

function About(props) {
    return (
        <AnimateRoute>
        <div className='about'>
            <div className='about-wrap container'>
                <div className='row'>
                    <div className='about-img col-lg-5 col-md-6 col-sm-12'>
                        <img src='/images/about.jpeg' alt="about blair waldorff" />
                    </div>

                    <div className='about-img col-lg-7 col-md-6 col-sm-12'>
                    <div className="pl-lg-4 pt-5 pt-lg-0">
                        <h2>Blair Waldorff</h2>
                        <h3>Hello! I’m Blair, a designer and front-end developer. I work as the Creative Director at the upper east side mansion</h3>
                        <p className=''>I’ve been designing for 10+ years, approaching each project with equal parts strategy and style.</p>
                        <p className='my-2'>When I’m not designing a webpage or writing code in the warm glow of my computer screen, you can find me playing ball at the park.</p>
                        <p className=''>If you have any exciting projects to talk about, or just want to be friends, feel free to hit me up.</p> 


                        <div className='social my-5'>
                        <h4 className='mb-0'>Let's Connect:</h4>
                        <ul className="connect my-2">
                            <li><a className="connect-link" href="#!"><span>Twitter</span></a></li>
                            <li><a className="connect-link" href="#!"><span>Behance</span></a></li>
                            <li><a className="connect-link" href="#!"><span>Github</span></a></li>
                        </ul>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </AnimateRoute>
    );
}

export default About;