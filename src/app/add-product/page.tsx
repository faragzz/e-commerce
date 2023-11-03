import { number } from "zod";
import { prisma } from "../lib/db/prisma";
import { redirect } from "next/navigation";
import FormSubmitBtn from "@/components/FormSubmitBtn";

export const metadata = {
  title: "Add Product -Flowmazon",
};

async function addProduct(formData: FormData) {
  "use server";
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageURL")?.toString();
  const price = Number(formData.get("price") || 0);
  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required filed");
  }
  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });
  redirect("/");
}
export default function AddProductPage() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          placeholder="Name"
          className="input input-bordered mb-3 w-full"
        />
        <br />
        <textarea
          required
          name="description"
          className=" textarea textarea-bordered w-full"
          placeholder="Description"
        ></textarea>
        <input
          required
          name="imageURL"
          placeholder="Image URL"
          className="input input-bordered mb-3 w-full"
        />
        <input
          required
          name="price"
          type="number"
          placeholder="Price"
          className="input input-bordered mb-3 w-full"
        />
        <FormSubmitBtn className="btn-block" type="submit">
          Add Product
        </FormSubmitBtn>
      </form>
    </div>
  );
}
