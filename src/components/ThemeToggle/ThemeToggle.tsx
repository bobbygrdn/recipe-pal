import './ThemeToggle.css';

interface ThemeToggleProps {
  toggleDarkMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({toggleDarkMode}) => {
  return (
<label className="switch">
    <input type="checkbox" onClick={toggleDarkMode} />
    <span className="slider"></span>
</label>
  )
}

export default ThemeToggle
