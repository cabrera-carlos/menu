function Categories({ categories, updateCategory }) {
  return (
    <div className="btn-container">
      {categories.map((cat) => {
        return (
          <button
            key={cat}
            className="filter-btn"
            onClick={() => updateCategory(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
