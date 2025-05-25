import { Skeleton } from 'primereact/skeleton';

type Props = {
  itemsQuantity?: number;
}

export function LastItemsSkeleton({ itemsQuantity = 3 }: Props) {
  const skeletonItems = Array.from({ length: itemsQuantity }, (_, index) => index);

  return (
    <article style={{
      display: 'grid',
      gridTemplateRows: 'repeat(4, 1fr)',
      gap: '1rem',
    }}>
      {skeletonItems.map((_, index) => (
        <Skeleton borderRadius='5px' key={index}></Skeleton>
      ))}
    </article>
  );
}