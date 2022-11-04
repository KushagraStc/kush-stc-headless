import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'IN',
    defaultLanguageCode: 'EN',
    storeDomain: "stc-test-headless.myshopify.com",
    storefrontToken: Oxygen.env.PUBLIC_STOREFRONT_API_TOKEN|| "e29fdde0b1089b5874663d656fc91dff",
    privateStorefrontToken: Oxygen?.env?.PRIVATE_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-07',
    storefrontId: Oxygen?.env?.PUBLIC_STOREFRONT_ID,
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
