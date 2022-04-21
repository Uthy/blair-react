import Marquee from "react-fast-marquee";

function Footer(props) {
    const footerLinks = [ { title: 'Twitter', url: '#!' }, { title: 'Behance', url: '#!' }, { title: 'Github', url: '#!' }, { title: 'Resume', url: '#!' },];
    return (
        <>
        <Marquee 
        speed={150}
        gradient={false}
        pauseOnHover={true}
        >
        <section className="marquee-content">
            <div className="marquee-wrap">
                 <h2 className="marquee-text"> Let's create something together </h2>
                 <div className="marquee-link">
                    <a className="link" href="mailto:hello@uthmanolomide.com">Email me</a>     
                </div>
            </div>
        </section>
        </Marquee>
       
        <footer className="footer">
        <div className="footer-wrap container">
        <div className="footer-grid">
            <div className="footer-col contact">
                <div className="footer-contact">
                    <p>Blair Waldorff © 2022</p>    
                </div>  
            </div> 

            <div className="footer-col footer-links">
                <ul className="connect">
                    {
                        footerLinks.map((link, key) => (
                            <li key={key}><a className="connect-link arrow" href={link.url}><span>{link.title}</span></a></li>
                        ))
                    }
                </ul>
            </div>
        </div>
       </div>
   </footer>
   </>
    );
}

export default Footer;