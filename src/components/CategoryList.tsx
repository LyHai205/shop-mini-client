import type { Product } from "../data/products";

type Props = {
  items: Product[];
};

export default function CategoryList({ items }: Props) {
  const categories = ["Tất cả", ...new Set(items.map((p) => p.category))];

  return (
    <section className="container category-section">
      <div className="category-list">
        {categories.map((cat) => (
          <button key={cat} className="category-pill">
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
