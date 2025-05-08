// components/SidebarFilter.tsx
const categories = ["Men's Wear", "Ladies Wear", "Kids Wear"];

const SidebarFilter = ({
  selected,
  onChange,
}: {
  selected: string[];
  onChange: (cats: string[]) => void;
}) => {
  const toggleCategory = (category: string) => {
    const updated = selected.includes(category)
      ? selected.filter((c) => c !== category)
      : [...selected, category];
    onChange(updated);
  };

  return (
    <div className="border p-4 min-w-[200px] h-48">
      <h3 className="font-bold mb-2">Categories</h3>
      {categories.map((cat) => (
        <label key={cat} className="block">
          <input
            type="checkbox"
            checked={selected.includes(cat)}
            onChange={() => toggleCategory(cat)}
            className="mr-2"
          />
          {cat}
        </label>
      ))}
    </div>
  );
};

export default SidebarFilter;
