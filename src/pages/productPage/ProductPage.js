import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

const ProductPage = () => {
    const params = useParams();

    useEffect(()=>{
        console.log(params.name);
    },[]);
    return (
        <div>

        </div>
    );
};

export default ProductPage;