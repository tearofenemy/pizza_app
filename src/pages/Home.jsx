import React, {useEffect, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, Pizza, LoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавиту', type: 'name', order: 'asc'}
];

const Home = () => {
    const dispatch = useDispatch();

    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [category, sortBy]);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));       
    }, []);

    const onSelectSortType = useCallback((index) => {
        dispatch(setSortBy(index))
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickСategory={onSelectCategory}
                    items={categoryNames} 
                />
                <SortPopup onClickSortType={onSelectSortType} activeSortType={sortBy} items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded 
                    ? items.map(obj => (<Pizza key={obj.id} isLoading={true} {...obj} />))
                    : Array(12).fill(0).map((_, index) => <LoadingBlock key={index}/>)}
            </div>
        </div>
    );
}

export default Home; 