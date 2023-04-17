import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "./productsApi";

const useProducts = () => {
  const queryClient = useQueryClient();

  const addProduct = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      // invalidate cache and refetch
      queryClient.invalidateQueries("products");
    },
  });

  return {
    addProduct
  }
}

export default useProducts