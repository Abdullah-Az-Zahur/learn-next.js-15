import { Metadata } from "next";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;

  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 100);
  });

  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error Loading Review");
  }

  return {
    title: `Product ${title}`,
  };
};

export default async function page({ params }: Props) {
  const productId = (await params).productId;
  return <div>Details About Product {productId}</div>;
}
