import {ProductCard} from '../cards/ProductCard.client';

export function ProductCards({products}) {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          product={product.node}
          key={product.node.id}
          className={'snap-start w-80'}
        />
      ))}
    </>
  );
}
