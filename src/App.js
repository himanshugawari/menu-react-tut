import { useEffect, useState } from 'react';
import './App.css';
import Categories from './components/Categories';
import Menu from './components/Menu';
import Search from './components/Search';

function App() {
  const [itemsOriginal, setItemsOriginal] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const uniqueCategories = (data) => {
    const allCategories = [
      'all',
      ...new Set(data.map((item) => item.category)),
    ];
    setCategories(allCategories);
  };

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(itemsOriginal);
      return;
    }
    const newItems = itemsOriginal.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  const fetchItems = async () => {
    const response = await fetch('http://starlord.hackerearth.com/recipe');
    const data = await response.json();
    setItemsOriginal(data);
    setMenuItems(data);
    uniqueCategories(data);
  };

  const handleChange = (e) => {
    const newItems = itemsOriginal.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <Search handleChange={handleChange} />
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
