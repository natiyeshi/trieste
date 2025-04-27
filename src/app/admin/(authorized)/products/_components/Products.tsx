"use client";

import { useState } from "react";
import { IProduct } from "@/interfaces/product.interface";
import AddProduct from "./AddProduct";
import Product from "./Product";
import { useToast } from "@/hooks/use-toast";

interface Props {
  initialProducts: IProduct[];
}

const Products = ({ initialProducts }: Props) => {
  const [products, setProducts] = useState<IProduct[]>(initialProducts);

  const { toast } = useToast();
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/product/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setProducts((test) => test.filter((data) => data._id != id));
        return true;
      }
      toast({
        description: "Error deleting product ",
      });
    } catch (error) {
      toast({
        description: "Error deleting product ",
      });
    }
    return false;
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <div className="text-2xl font-black">Products</div>
        <AddProduct setProducts={setProducts} />
      </div>
      <div className=" text-adminText capitalize">Available Products</div>
      <div className="grid grid-cols-3 mt-8 gap-5 ">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            onDelete={() => handleDelete(product._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
