import styles from './searchPage.module.css';
import { Header, Footer, FilterArea, ProductList } from '../../components';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Spin } from 'antd';
import { searchProduct } from '../../redux/productSearch/slice';
import { useSelector, useDispatch } from '../../redux/hooks';

type MatchParams = {
    keywords: string
}

export const SearchPage: React.FC = () => {
    const { keywords } = useParams<MatchParams>();
    const loading = useSelector(state => state.productSearch.loading);
    const error = useSelector(state => state.productSearch.error);
    const pagination = useSelector(state => state.productSearch.pagination);
    const productList = useSelector(state => state.productSearch.data);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (keywords) {
            dispatch(searchProduct({ nextPage: 1, pageSize: 10, keywords }));
        }
    }, [location])

    const onPageChange = (nextPage, pageSize) => {
        if (keywords) {
            dispatch(searchProduct({ nextPage, pageSize, keywords }));
        } else {
            // Handle the situation when keywords are undefined. 
            // Maybe dispatch an action with a default keyword or show an error, depends on your requirement.
        }
    }
    if (loading) {
        return <Spin size={"large"} style={{
            marginTop: 200,
            marginBottom: 200,
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%"
        }}/>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

    console.log(productList)

    return (
        <>
            <Header />
            <div className={styles['page-content']}>
                {/* seperator-filter */}
                <div className={styles['product-list-container']}>
                    <FilterArea />
                </div>
                {/* productList */}
                
                <div className={styles['product-list-container']}>
                    <ProductList data={productList} paging={pagination} onPageChange={onPageChange}/>
                </div>
            </div>
            <Footer />
        </>
    )
}