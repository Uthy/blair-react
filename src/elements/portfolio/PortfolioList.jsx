import React from 'react';

const portData = [
    {
        title: 'The Rain Nutrio',
        itemImage: '/images/1.jpeg',
        category: ['Branding', 'Graphic Design'],
    },
    
    {
        title: 'Blue line',
        itemImage: '/images/image-2.jpeg',
        category: ['Motion Design', 'Web Design'],
    },

    {
        title: 'FujiFilm Campaign',
        itemImage: '/images/image-4.jpeg',
        category: ['Motion Design' , 'Graphic Design'],
    },

    {
        title: 'Inception Architecture',
        itemImage: '/images/image-5.jpeg',
        category: ['Branding', 'Web Design'],
    },
]

function PortfolioList(props) {
    return (
        <div className='portfolio container'>
            <div className='portfolio-wrap'>
                
                {
                    portData.map((item, key) => (
                        
                        <a href={`/portfolio/${item.title.toLowerCase().replace(/\s/g, '-')}`} className='portfolio-item'
                        key={key}
                        >
                            <div>
                                    <div className='item-img'>
                                        <img src={item.itemImage} alt={item.title}/>
                                    </div>
                                    <div className='item-info'>
                                        <div className='item-title'>
                                            <h3>{item.title}</h3>    
                                        </div>
                                        <div className='item-meta'>
                                            <span>{item.category.join(' - ')}</span>    
                                        </div>    
                                    </div>
                            </div> 
                        </a>   
                    ))
                }

            </div>
        </div>
    );
}

export {portData, PortfolioList};