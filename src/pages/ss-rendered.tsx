// Libs
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=12");
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
    <div className="my-10 tracking-wide mx-4">
      <h1 className="text-6xl font-light text-center">server-side rendering</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 place-items-center">
        {productList.map((product) => {
          return (
            <article key={product.id}>
              <h2 className="text-2xl text-teal-600">{product.title}</h2>
              <p className="max-w-xs">{product.description}</p>
              <p>${product.price}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
