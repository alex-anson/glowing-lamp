// Libs
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return {
    props: { data },
  };
};

interface Product {
  brand: string;
  category: string;
  description: string;
  id: number;
  price: number;
  rating: number;
  stock: number;
  title: string;
}

interface Props {
  data: Record<string, any>;
}
export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
): JSX.Element {
  const productList = props.data.products as Product[]; // again... don't typecast like this at home.
  return (
    <div className="mt-10 tracking-wide">
      <h1 className="text-6xl font-light text-center">server-side rendering</h1>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-20 xl:mt-40">
        {productList.map((product) => {
          return (
            <article key={product.id}>
              <p>Product name: {product.title}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
