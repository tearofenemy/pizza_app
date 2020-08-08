import React, {useState} from 'react'

const Categories = ({ items }) => {

    const [active, setActive] = useState(null);

    return (
        <div className="categories">
            <ul>
                <li className={active === null ? 'active' : ''} onClick={() => setActive(null)}>Все</li>
                {items && items.map((item, index) => (
                    <li
                        className={active === index ? 'active' : ''}
                        onClick={() => setActive(index)}
                        key={`${item}_${index}`}
                    >{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;