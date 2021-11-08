// import Head from "../../src/components/header/Header";
// import Footer from "../../src/components/footer/Footer";
// import ProductImage from "../../src/components/product/ProductImage";
// import data from "../data/nfts.json"

// export const getStaticPaths = () => {
//     const paths = data.map(crrNft => {
//         return {
//             params : {id: crrNft.id.toString()}
//         }
//     })

//     return {
//         paths,
//         fallback: false
//     }
// };

// export const getStaticProps = (context) => {
//     const crrid = context.params.id;
//     const nft = data.reduce(currNft => currNft.id == Number(crrid));

//     return {
//         props: {nft : nft}
//     }
// }

// export default function Product({nft}) {
// console.log(nft)
//     return (
//         <div>
//             <Head />
//             <ProductImage />
//             <Footer />

//         </div>

//     )
// };
