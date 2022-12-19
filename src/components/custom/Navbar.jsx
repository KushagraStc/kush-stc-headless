import {
    CacheLong,
    gql,
    useShopQuery
} from '@shopify/hydrogen';
const Navbar = () => {

    const COLLECTION_NAME = gql`
    query shopInfo{
        menu(handle: "kushagra-navbar") {
    handle
    items {
      url
      title
      items {
        title
        url
      }
    }
    title
  }
    }
    
    `


    const collection_handle = useShopQuery({
        query: COLLECTION_NAME,
        cache: CacheLong(),
        preload: true,
    });
    console.log(collection_handle)
    return (
        <>
            <header role='banner' className="bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary  hidden h-nav lg:flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-around w-full leading-none gap-8 px-12 py-6 h-32	">
                <div className="flex h-2/3	">
                    <a className="font-bold text-4xl	" href="/">STC HEADLESS</a>
                </div>
                <div className="flex items-center w-2/3 h-2/3">
                    <form action="/search" className="flex items-center w-3/4 h-full">
                        <input type="search" placeholder="Search" name="q" className="bg-transparent hidden md:inline-block text-left  border-b transition border-transparent -mb-px border-x-0 border-t-0 appearance-none px-0 py-1 focus:ring-transparent placeholder:opacity-20 placeholder:text-inherit focus:border-contrast/20 dark:focus:border-primary/20 h-full w-3/4" />
                        <button type="submit" className="relative flex items-center justify-center w-8 focus:ring-primary/5 h-full ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><title>Search...</title><path fillRule="evenodd" d="M13.3 8.52a4.77 4.77 0 1 1-9.55 0 4.77 4.77 0 0 1 9.55 0Zm-.98 4.68a6.02 6.02 0 1 1 .88-.88l4.3 4.3-.89.88-4.3-4.3Z"></path></svg>
                        </button>
                    </form>
                    <a className="relative flex items-center justify-center  h-full focus:ring-primary/5" href="/account">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><title>Account</title><path fillRule="evenodd" d="M9.9998 12.625c-1.9141 0-3.6628.698-5.0435 1.8611C3.895 13.2935 3.25 11.7221 3.25 10c0-3.728 3.022-6.75 6.75-6.75 3.7279 0 6.75 3.022 6.75 6.75 0 1.7222-.645 3.2937-1.7065 4.4863-1.3807-1.1632-3.1295-1.8613-5.0437-1.8613ZM10 18c-2.3556 0-4.4734-1.0181-5.9374-2.6382C2.7806 13.9431 2 12.0627 2 10c0-4.4183 3.5817-8 8-8s8 3.5817 8 8-3.5817 8-8 8Zm0-12.5c-1.567 0-2.75 1.394-2.75 3s1.183 3 2.75 3 2.75-1.394 2.75-3-1.183-3-2.75-3Z"></path></svg>

                    </a>
                    <button className="relative flex items-center justify-center w-1/6 h-full focus:ring-primary/5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><title>Bag</title><path fillRule="evenodd" d="M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"></path></svg>
                    </button>
                </div>
            </header>
            <hr />



            <navbar className="bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary  hidden h-nav lg:flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-center w-full leading-none gap-8 px-12 pb-8">
                <nav className="flex gap-14 navtest">

                    <a target="_self" href={collection_handle.data.menu.items[0].url}>{collection_handle.data.menu.items[0].title}
                    </a>
                    <div className="dropdown" style={{ float: "left" }}>
                        <button className="dropbtn">{collection_handle.data.menu.items[1].title}</button>
                        <div className="dropdown-content" >
                            {/* <div className="dropbtn2"><button>Best Seller</button>
                                <div className="dropdown2 " style={{ float: "left" }}>

                                    <div className="dropdown-content2" >
                                        <a target="_self" href="/products">DRESSES</a>
                                        <a target="_self" href="/products">JUMPSUITS</a>
                                        <a target="_self" href="/products">TOPS</a>
                                        <a target="_self" href="/products">SHIRTS</a>
                                        <a target="_self" href="/products">SCRAVES</a>
                                        <a target="_self" href="/products">HAND MIST SPRAY</a>
                                        <a target="_self" href="/products">TROUSERS</a>
                                        <a target="_self" href="/products">LEGGING</a>
                                        <a target="_self" href="/products">SALE</a>
                                    </div>
                                </div></div> */}

                            <a target="_self" href="/products">{collection_handle.data.menu.items[1].items[0].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[1].items[1].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[1].items[2].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[1].items[3].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[1].items[4].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[1].items[5].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[1].items[6].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[1].items[7].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[1].items[8].title}</a>

                        </div>
                    </div>

                    <a target="_self" href="/pages/contact">{collection_handle.data.menu.items[2].title}</a>
                    <div className="dropdown" style={{ float: "left" }}>
                        <button className="dropbtn">{collection_handle.data.menu.items[3].title}</button>
                        <div className="dropdown-content" >

                            <a target="_self" href="/products">{collection_handle.data.menu.items[3].items[0].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[3].items[1].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[3].items[2].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[3].items[3].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[3].items[4].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[3].items[5].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[3].items[6].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[3].items[7].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[3].items[8].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[3].items[9].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[3].items[10].title}</a>
                        </div>
                    </div>
                    <a target="_self" href="/pages/contact">{collection_handle.data.menu.items[4].title}</a>
                    <a target="_self" href="/pages/contact">{collection_handle.data.menu.items[5].title}</a>
                    <a target="_self" href="/pages/contact">{collection_handle.data.menu.items[6].title}</a>
                    <div className="dropdown" style={{ float: "left" }}>
                        <button className="dropbtn">{collection_handle.data.menu.items[7].title}</button>
                        <div className="dropdown-content" >


                            <a target="_self" href="/products">{collection_handle.data.menu.items[7].items[0].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[7].items[1].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[7].items[2].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[7].items[3].title}</a>
                            <a target="_self" href="/products">{collection_handle.data.menu.items[7].items[4].title}</a>
                        </div>
                    </div>
                </nav>
            </navbar>
            <hr />
        </>
    )
}
export default Navbar