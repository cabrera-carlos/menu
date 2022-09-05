import { useState } from "react";
import menuItems from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

function App() {
  const [category, setCategory] = useState("all");

  function getAllCategories() {
    const categories = [
      "all",
      ...new Set(menuItems.map((item) => item.category)),
    ];

    return categories;
  }

  function getMenuByCat() {
    if (category === "all") {
      return menuItems;
    }

    return menuItems.filter((item) => item.category === category);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={getAllCategories()}
          updateCategory={(cat) => setCategory(cat)}
        />
        <Menu menuItems={getMenuByCat()} />
      </section>
    </main>
  );
}

export default App;
