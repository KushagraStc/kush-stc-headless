import {
    CacheLong,
    gql,
    useShopQuery
} from '@shopify/hydrogen';
import Image2 from './Image';

export default Sliderdata = ({ namespace, key2 }) => {

    const COLLECTION_NAME = gql`
    query shopInfo{
        shop {
    metafield(key: "${key2}", namespace: "${namespace}") {
      namespace
      key
      id
      value
    }
  }
        # color: metafield(namespace: "hydrogen", key: "featured-collection-1") {           value         }
        # color2: metafield(namespace: "hydrogen1", key: "feature-collection-2-homepage") {           value         }
      }
    
    `
    const collection_handle = useShopQuery({
        query: COLLECTION_NAME,
        cache: CacheLong(),
        preload: true,
    });
    let collection_name = collection_handle.data.shop.metafield.value
    let test;

    const abc = () => {
        if (collection_name) {
            let handle = `handle: "${collection_name}"`;
            const Testquery = gql`
            query shopInfo{
         collectionByHandle(${handle}) {
            title
          products(first: 10) {
          edges {
            node {
              title
              id
              handle
              publishedAt
              variants(first: 10) {
                nodes {
                  id
                  priceV2 {
                    amount
                    currencyCode
                  }
                  compareAtPriceV2 {
                    amount
                    currencyCode
                  }
                  image {
                    altText
                    height
                    url
                    width
                  }
                }
              }
            }
          }
        }
      }
      
      }
    
    `
            test = useShopQuery({
                query: Testquery,
                variables: {
                    collection_name
                },
                cache: CacheLong(),
                preload: true,
            });
        } else {
            setTimeout(abc, 1000);
        }
    }
    abc();
let title = test.data.collectionByHandle.title
    let res = test.data.collectionByHandle.products.edges
    // console.log(res)


    return (
        <Image2 data={res} title={title} />
    )
}

