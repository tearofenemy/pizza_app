import React from 'react'

const Categories = React.memo(function Categories({ activeCategory, items, onClickСategory }) {

    return (
        <div className="categories"> 
            <ul>
                <li 
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickСategory(null)}
                >Все</li>
                {items && items.map((item, index) => (
                    <li
                        className={activeCategory === index ? 'active' : ''}
                        onClick={() => onClickСategory(index)}
                        key={`${item}_${index}`}
                    >{item}</li>
                ))}
            </ul>
        </div>
    );
});

export default Categories;