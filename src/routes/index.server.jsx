import { Suspense } from 'react';
import {
  CacheLong,
  gql,
  Seo,
  ShopifyAnalyticsConstants,
  useServerAnalytics,
  useLocalization,
  useShopQuery,
} from '@shopify/hydrogen';
import { Text } from '~/components';

import { MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT } from '~/lib/fragments';
import { getHeroPlaceholder } from '~/lib/placeholders';
import { FeaturedCollections, Hero } from '~/components';
import { Layout, ProductSwimlane } from '~/components/index.server';
import Sliderdata from '../components/custom/Sliderdata';
import Bannerrr from '../components/custom/Banner';


export default function Homepage() {
  useServerAnalytics({
    shopify: {
      canonicalPath: '/',
      pageType: ShopifyAnalyticsConstants.pageType.home,
    },
  });
  return (
    <Layout>
      <Suspense>
        <SeoForHomepage />
      </Suspense>
      <Suspense>
        <HomepageContent />
      </Suspense>
    </Layout>
  );
}
function HomepageContent() {
  const {
    language: { isoCode: languageCode },
    country: { isoCode: countryCode },
  } = useLocalization();

  const { data } = useShopQuery({
    query: HOMEPAGE_CONTENT_QUERY,
    variables: {
      language: languageCode,
      country: countryCode,
    },
    preload: true,
  });


  const { heroBanners, featuredCollections, featuredProducts } = data;

  // fill in the hero banners with placeholders if they're missing
  const [primaryHero, secondaryHero, tertiaryHero] = getHeroPlaceholder(
    heroBanners.nodes,
  );

  return (
    // <>

    // <Home/>
    // </>
    <>
      {/* {primaryHero && (
        <Hero {...primaryHero} height="full" top loading="eager" />
      )} */}

      {/**/}
      {/* <>{res[0].node.title}</> */}
      {/* {
        res.map((x)=>{
          return  <Text>{x.node.title}</Text>
        })
      } */}



      <Bannerrr />
      <Sliderdata namespace={"hydrogen"} key2={"featured-collection-1"} />
      <Sliderdata namespace={"hydrogen1"} key2={"feature-collection-2-homepage"} />
      <Sliderdata namespace={"hydrogen"} key2={"feature-collection-3-homepage"} />
      <Sliderdata namespace={"hydrogen"} key2={"feature-collection-4-homepage"} />
      <Sliderdata namespace={"hydrogen"} key2={"feature-collection-6-homepage"} />
      <Sliderdata namespace={"hydrogen"} key2={"feature-collection-5-homepage"} />
      <Sliderdata namespace={"hydrogen"} key2={"feature-collection-7-homepage"} />
      <Sliderdata namespace={"hydrogen"} key2={"feature-collection-8-homepage"} />
      <Sliderdata namespace={"hydrogen"} key2={"feature-collection-9-homepage"} />
      <Sliderdata namespace={"hydrogen"} key2={"feature-collection-10-homepage"} />
      <Sliderdata namespace={"hydrogen"} key2={"feature-collection-11-homepage"} />
      {/* <Image2 data={res} title={collection_name} /> */}





      {/* <ProductSwimlane
        data={featuredProducts.nodes}
        title="Winterwear"
        divider="bottom"
      />
      <ProductSwimlane
        data={featuredProducts.nodes}
        title="Print Sizes"
        divider="bottom"
      /> */}
      {/* {secondaryHero && <Hero {...secondaryHero} />} */}
      {/* <FeaturedCollections
        data={res.nodes}
        title="Collections"
      /> */}

      {/* {tertiaryHero && <Hero {...tertiaryHero} />} */}
    </>
  );
}

function SeoForHomepage() {
  const {
    data: {
      shop: { name, description },
    },
  } = useShopQuery({
    query: HOMEPAGE_SEO_QUERY,
    cache: CacheLong(),
    preload: true,
  });

  return (
    <Seo
      type="homepage"
      data={{
        title: name,
        description,
        titleTemplate: '%s · Powered by Hydrogen',
      }}
    />
  );
}

/**
 * The homepage content query includes a request for custom metafields inside the alias
 * `heroBanners`. The template loads placeholder content if these metafields don't
 * exist. Define the following five custom metafields on your Shopify store to override placeholders:
 * - hero.title             Single line text
 * - hero.byline            Single line text
 * - hero.cta               Single line text
 * - hero.spread            File
 * - hero.spread_secondary  File
 *
 * @see https://help.shopify.com/manual/metafields/metafield-definitions/creating-custom-metafield-definitions
 * @see https://github.com/Shopify/hydrogen/discussions/1790
 */

const HOMEPAGE_CONTENT_QUERY = gql`
  ${MEDIA_FRAGMENT}
  ${PRODUCT_CARD_FRAGMENT}
  query homepage($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    heroBanners: collections(
      first: 3
      query: "collection_type:custom"
      sortKey: UPDATED_AT
    ) {
      nodes {
        id
        handle
        title
        descriptionHtml
        heading: metafield(namespace: "hero", key: "title") {
          value
        }
        byline: metafield(namespace: "hero", key: "byline") {
          value
        }
        cta: metafield(namespace: "hero", key: "cta") {
          value
        }
        spread: metafield(namespace: "hero", key: "spread") {
          reference {
            ...Media
          }
        }
        spreadSecondary: metafield(namespace: "hero", key: "spread_secondary") {
          reference {
            ...Media
          }
        }
      }
    }
    featuredCollections: collections(
      first: 3
      query: "collection_type:smart"
      sortKey: UPDATED_AT
    ) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
    featuredProducts: products(first: 12) {
      nodes {
        ...ProductCard
      }
    }
  }
`;

const HOMEPAGE_SEO_QUERY = gql`
  query shopInfo {
    shop {
      name
      description
    }
  }
`;



