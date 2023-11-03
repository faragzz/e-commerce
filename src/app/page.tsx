import Image from "next/image";
import { prisma } from "./lib/db/prisma";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <div>
      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={products[0].imageUrl}
            alt={products[0].name}
            width={400}
            height={800}
            className="w-full max-w-sm rounded-lg shadow-2xl"
            priority
          />
          <div>
            <h2 className="text-2xl font-bold">{products[0].name}</h2>
            <h2 className="py-6">{products[0].description}</h2>
            <Link
              href={"/products/" + products[0].id}
              className="btn btn-primary"
            >
              Check it out
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {products.slice(1).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
