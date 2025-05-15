import './App.css';
import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import Header from './components/Header/Header';
import RecipeForm from './components/RecipeForm/RecipeForm';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

function App() {
  const [recipe, setRecipe] = useState({ title: '', ingredients: '', instructions: '' });
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // 1.2s splash
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Recipe submitted:', recipe);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  if (loading) return <LoadingScreen />;

  return (
    <main id='app'>
      <Header toggleDarkMode={toggleDarkMode} />
      <RecipeForm
        recipe={recipe}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

export default App;
