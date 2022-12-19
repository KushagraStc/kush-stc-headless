// import clsx from 'clsx';
// import {
//     flattenConnection,
//     Image,
//     Link,
//     Money,
//     useMoney,
// } from '@shopify/hydrogen';
// import { Text } from '~/components';
// import { isDiscounted, isNewArrival } from '~/lib/utils';

// import { ProductCard } from "../index"
// import { getProductPlaceholder } from '~/lib/placeholders';
import { Section } from "../index"
import { ProductCards } from "../sections/ProductCards"

const Image2 = ({ data, title }) => {
// console.log(data, "data")
    return (
        <>
        
            <Section
                heading={title}
                padding="y" >
                <div className="swimlane hiddenScroll md:pb-8 md:scroll-px-8 lg:scroll-px-12 md:px-8 lg:px-12">
                    <ProductCards products={data} />
                </div>
            </Section>
        </>
    )

}
export default Image2