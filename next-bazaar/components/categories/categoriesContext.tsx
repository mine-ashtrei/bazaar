import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Category } from "../../lib/api/categories";
import API from "../../lib/api";

type CategoryContextType = {
  categories: Category[];
};

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export function useCategories() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategories must be used within a CategoryProvider");
  }
  return context;
}

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const fetchedCategories = await API.categories.getAll();
      setCategories(fetchedCategories);
    }

    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
}
