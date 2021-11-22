import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import ProductContainer from "../../src/components/product/ProductContainer";
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';

export default function ProductPage() {
    const router = useRouter();
    const crrid = router.query.id;

    const [product, setProduct] = useState([]);

    useEffect(async () => {
        const data = await fetch(process.env.apiUrl + "/" + "nfts" + "/" + crrid)
        .then((response) => response.json());

        setProduct(data);
    }, [])

    const productData = 
        <ProductContainer
         name={product?.name}
         owner={product?.owner}
         price={product?.price}
         currency={product?.currency}
         details={product?.details}
         source={product?.source?.url}
         likes={product?.likes}
         bids={product?.bids}
         />;

    return (
        <div>
            <Header />
            {productData}
            <Footer />
        </div>
    )
}