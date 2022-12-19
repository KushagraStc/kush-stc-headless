import {CacheLong, gql, useShopQuery} from '@shopify/hydrogen';
// import { Test} from '~/components';
// import A  from './index';
// import Image2 from './Image';

const Bannerrr = () => {
//     console.log("testststg")
  const COLLECTION_NAME = gql`
  query shopInfo{
      shop {
        metafield(key: "homepage-banner", namespace: "hydrogen") {
    namespace
    key
    id
    value
  }
}
    }
  `
  const collection_handle = useShopQuery({
      query: COLLECTION_NAME,
      cache: CacheLong(),
      preload: true,
  });
  let collection_name = collection_handle.data.shop.metafield.value
  // console.log(Test,"tests");
  return (
    <>
    {/* <Test/> */}

     {/* <img url={collection_name} /> */}
    </>
  );
};
export default Bannerrr;
