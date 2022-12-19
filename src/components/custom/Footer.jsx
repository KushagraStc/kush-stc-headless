// import { useState } from 'react
import {
    CacheLong,
    gql,
    useShopQuery
} from '@shopify/hydrogen';
const CustomFotter = () => {
    const COLLECTION_NAME = gql`
    query shopInfo{
        menu(handle: "footer") {
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

    return (
        <>

            <footer
                role="contentinfo"
                className="w-full  p-6 md:p-8 lg:p-12 border-none  min-h-[25rem] items-start  py-8 px-6 md:px-8 lg:px-12 border-b  bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden">

                {/* footer top */}
                <section className="footer_top flex justify-center items-center w-full h-72		 ">
                    <div className="footer_top_left w-1/2 flex flex-col items-center justify-center  ">
                        <h3>GET EXCLUSIVE OFFERS & UPDATES</h3>
                        <p>BE THE FIRST ONE TO KNOW ABOUT A NEW COLLECTION LAUNCH, A BIG-FAT SALE OR SURPRISES. SIGN UP TO KNOW EVERYTHING ABOUT FEMELLA. IT’S SERIOUSLY ALL THE THINGS YOU DON’T WANT TO MISS OUT ON.</p>
                    </div>
                    <div className="footer_top_right w-1/2 flex items-center justify-start ">
                        <input type='email' placeholder="ENTER YOUR EMAIL" />
                        <button >SUBSCRIBE</button>
                    </div>
                </section>
                <hr />

                {/* footer middle */}
                <div className="footer_middle">
                    <section className="footer_middle-top flex ">

                        <div className="footer_middle_top_right justify-center">
                            <div className="footer_middle_top_right_div w-1/4">
                                <div className="w-full m-auto">
                                    <p className="font-bold w-1/2 m-auto">STC HEADLESS</p>
                                </div>
                                <div className="footer_middle_top_right_div_top">
                                    <p>Making clothes that are simple, effortless and based on you, your style and your needs. </p>
                                </div>
                            </div>
                            <div className="footer_middle_top_right_div">
                                <h2 className="font-bold">{collection_handle.data.menu.items[0].title}</h2>
                                <ul>
                                    <li>{collection_handle.data.menu.items[0].items[0].title}</li>
                                    <li>{collection_handle.data.menu.items[0].items[1].title}</li>
                                    <li>{collection_handle.data.menu.items[0].items[2].title}</li>
                                    <li>{collection_handle.data.menu.items[0].items[3].title}</li>
                                    <li>{collection_handle.data.menu.items[0].items[4].title}</li>
                                    <li>{collection_handle.data.menu.items[0].items[5].title}</li>
                                    <li>{collection_handle.data.menu.items[0].items[6].title}</li>

                                </ul>

                            </div>
                            <div className="footer_middle_top_right_div">
                                <h2 className="font-bold">{collection_handle.data.menu.items[1].title}</h2>
                                <ul>
                                    <li>{collection_handle.data.menu.items[1].items[0].title}</li>
                                    <li>{collection_handle.data.menu.items[1].items[1].title}</li>
                                    <li>{collection_handle.data.menu.items[1].items[2].title}</li>
                                    <li>{collection_handle.data.menu.items[1].items[3].title}</li>
                                    <li>{collection_handle.data.menu.items[1].items[4].title}</li>
                                    <li>{collection_handle.data.menu.items[1].items[5].title}</li>
                                </ul>

                            </div>
                            <div className="footer_middle_top_right_div">
                                <h2 className="font-bold">{collection_handle.data.menu.items[2].title}</h2>
                                <ul>
                                    <li>{collection_handle.data.menu.items[2].items[0].title}</li>
                                    <li>{collection_handle.data.menu.items[2].items[1].title}</li>
                                    <li>{collection_handle.data.menu.items[2].items[2].title}</li>
                                    <li>{collection_handle.data.menu.items[2].items[3].title}</li>
                                </ul>

                            </div>


                        </div>

                        <div className="footer_middle_top_left w-1/4">
                            <div className="footer_contact">
                                <p>{collection_handle.data.menu.items[3].title}</p>
                                <ul>
                                    <l1 className="footer_li text-xs flex flex-col">
                                        <p>
                                            {collection_handle.data.menu.items[3].items[0].title}
                                        </p>
                                        <p>
                                            {collection_handle.data.menu.items[3].items[1].title}
                                        </p>
                                    </l1>
                                    <l1 className="footer_li">
                                        <p className="font-bold">{collection_handle.data.menu.items[3].items[2].title}
                                        </p>


                                    </l1>

                                </ul>

                            </div>
                        </div>
                    </section>
                    <hr />

                    {/* footer bottom  */}
                    <div className="flex justify-center  self-end pt-8  md:col-span-2 lg:col-span-2">
                        © 2022, STC HEADLESS
                    </div>
                </div>

            </footer>
        </>

    )
};
export default CustomFotter