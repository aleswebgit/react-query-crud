import useProducts from "../api/useProducts";

const ProductForm = () => {
  const { addProduct } = useProducts();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData);
    addProduct.mutate({
      ...product,
      inStock: true,
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="price">Price</label>
      <input type="number" name="price" id="price" />
      <label htmlFor="description">Description</label>
      <textarea name="description" id="description" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
