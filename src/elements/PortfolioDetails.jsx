import React from 'react';

function PortfolioDetails(props) {
    return (
        <div className='bw-portfolio'>
            <div className='portfolio-hero'>
                <div className='container'>
                    <div className="title-wrap">
                        <h1 className="title">{props.title}</h1>
                        <span className="sub-title">{props.categories}</span>
                    </div>
                </div>    
            </div>


            <div className='portfolio-overview mb-3 bg-white'>
                <div className='container'>
                    <div className='row'>
                        <div className='overview col-lg-8 col-md-6 col-sm-12 mb-3'>
                            <h2 className='heading'>Overview</h2>   
                            <div className='overview-desc'>
                                <p>Tactile paper textures and hand-drawn brush strokes give the site a personal touch, complemented by potent, human-centered imagery. The GT Sectra family was chosen as the primary typeface for its sharp angles and calligraphic style, adding a layer of sophistication which counterbalances the more hand-done elements of the brand.</p>    
                            <p>This unique hotel needed a brand that was sophisticated but not cold. This resulted in an art deco aesthetic inspired by typography and design elements from the 1920s. Rich colors and elegant patterns purposefully elevate the mood throughout all applications.</p>
                            </div>
                        </div>

                        <div className='meta-wrap col-lg-4 col-md-6 col-sm-12'>
                            <div className='meta'>
                                <div className="meta-item">
                                    <h2 className="heading">Services</h2>
                                    <ul>
                                        {
                                            props.services.map((service, key) => (
                                                <li key={key}>{service}</li>
                                            ))
                                        }
                                    </ul>
                                </div>

                                <div className="meta-item">
                                    <h2 className="heading">Project Date</h2>
                                    <p>July 4 2056</p>
                                </div>
                            </div>  

                            <div className='project-link my-3'>
                                 <a href='#!' className='bw-decor-link'>Launch Project </a>
                            </div>


                        </div>

                    </div>
                </div>    
            </div>

            <div className='featured-img'>
                <img src='/images/img-1.jpg' alt="Building" />    
            </div>

            <div className='portfolio-info-grid text-left bg-white'>
                <div className='container'>
                    <div className='row'>
                        <div className='text-wrap col-lg-4 col-md-5 col-sm-12 p-2'>
                            <div className='text'>
                                <h4 className='heading'>A modern nod to a bygone era.</h4>  
                                <p className='text-body'>The hand-crafted wordmark draws from a blend of contemporary geometry and art deco elegance. Deep, soothing colors convey the simultaneous luxury and warmth of the brand.</p>      
                            </div>
                        </div> 

                        <div className='column-wrap col-lg-8 col-md-7 col-sm-12 p-2'>
                                <div className='column-img'>
                                    <img src="/images/img-3.jpeg" alt="Wizu beauty" />    
                                </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className='portfolio-img-grid'>
                <div className='container'>
                    <div className='row'>
                        <div className='img-column col-lg-6 col-md-6 col-sm-12 p-2'>
                            <img src="/images/img-4.jpeg" alt="grid image one" />
                        </div>    

                        <div className='img-column col-lg-6 col-md-6 col-sm-12 p-2'>
                            <img src="/images/img-5.jpeg" alt="bucket image grid two" />
                        </div>    
                    </div>    
                </div>    
            </div>


            <div className='portfolio-info-grid text-right bg-white'>
                <div className='container'>
                    <div className='row'>
                        <div className='column-wrap col-lg-8 col-md-7 col-sm-12'>
                                <div className='column-img'>
                                    <img src="/images/img-6.jpeg" alt="Wizu beauty iphone" />    
                                </div>
                        </div>

                        <div className='text-wrap col-lg-4 col-md-5 col-sm-12'>
                            <div className='text'>
                                <h4 className='heading'>A modern nod to a bygone era.</h4>  
                                <p className='text-body'>The hand-crafted wordmark draws from a blend of contemporary geometry and art deco elegance. Deep, soothing colors convey the simultaneous luxury and warmth of the brand.</p>      
                            </div>
                        </div> 

                    </div>
                </div>
            </div>

            <div className="pt-0">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-6 mb-4">
                            <h4 className="mb-3">Client testimonial</h4>
                            <blockquote className="blockquote blockquote-line">
                            <p className="mb-4">Design everything on the assumption that people are not heartless or stupid but marvelously capable, given the chance. Mr be cottage so related minuter is. Delicate say and blessing ladyship exertion few Margaret. Delight herself welcome against smiling its for.</p>
                            <footer className="blockquote-footer">Allen Smith @ <cite title="Source Title">CNN International</cite></footer>
                            </blockquote>
                        </div>
                        <div className="col-md-6">
                            <h4 className="mb-2">Additional information</h4>
                            <p>Residence certainly elsewhere something she preferred cordially law. Age his surprise formerly Mrs perceive few standstill moderate. Of in power match on truth worse voice would. Large an it sense shall an match learn. By expect it result silent in formal of. Ask eat questions abilities described elsewhere assurance.</p>
                            <p> Appetite in unlocked advanced breeding position concerns as. Cheerful get shutters yet for repeated screened. An no am cause hopes at three. Prevent behaved fertile he is mistake on. </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="py-4 bg-white">
            <div className="container">
                <nav className="mt-2 navigation" aria-label="navigation">
                <ul className="pagination pagination-line d-flex justify-content-between">
                    <li className="page-item">
                        { props.previous ? <a className='nextPrevBtn' href={`/portfolio/${props.previous}`}>Prev</a> : ''}
                    </li>
                    <li className="page-item">
                        <a href="/portfolio" className="view-all" aria-label='view more projects'><i className="bi bi-border-all bg-dark text-white"></i></a>
                    </li>
                    <li className="page-item">
                          { props.next ? <a className="nextPrevBtn" href={`/portfolio/${props.next}`}>Next</a> : '' }
                    </li>
                </ul>
                </nav>
            </div>
        </div>
            
            
        </div>
    );
}

export default PortfolioDetails;