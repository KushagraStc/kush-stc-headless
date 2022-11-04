## documentation for shopify hydrogen 

Our Main page to start with is App.server.jsx Here we are returning our whole froentend here files are calling in router we have to give path in the route and page name in page props so our page can renders
there is another file named Layout.server.jsx presented in components/globals in this file our header, fotter and the main content is calling here we can call our custom navbar and footer here instaed of <HeaderWithMenu /> and <FooterWithMenu /> respectively. In layout main the main content of the application. For our home page there is file named hero.jsx in component/section the banners are comming from here in this file data is comming as a props from placeholder.js and then we are passing it to SpreadMedia which will check if the data is in image format or video format and will return it respectively. 

