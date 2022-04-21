import { useParams } from "react-router-dom";
import { portData } from "../../elements/portfolio/PortfolioList";
import Error404 from '../Error404';
import PortfolioDetails from "../../elements/PortfolioDetails";

function SinglePortfolio({match}) {
    const {name} = useParams();

    const titleToURL = function(title){
        return title.toLowerCase().replace(/\s/g, '-');
    }

    const portfolio = portData.find(item => titleToURL(item.title) === name);

    const currentPort = portData.findIndex(item => item.title === portfolio.title);
    const nextUrl = function(){
        return portData[currentPort + 1] !== undefined ? portData[currentPort + 1].title : ''; 
    }
    const prevUrl = function(){
        return portData[currentPort - 1] !== undefined ? portData[currentPort - 1].title : ''; 
    }

    if(!portfolio) return <Error404/>

    return (
            <PortfolioDetails
            title={portfolio.title}
            categories={portfolio.category.join(' - ')}
            services={portfolio.category}
            next={titleToURL(nextUrl())}
            previous={titleToURL(prevUrl())}
            />
    );
}

export default SinglePortfolio;