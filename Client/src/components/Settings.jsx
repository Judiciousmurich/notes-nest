
const Settings = ({ onThemeChange, onFontSizeChange }) => {
  return (
    <div>
      <h2>Settings</h2>
      <label>
        Theme:
        <select onChange={(e) => onThemeChange(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      <label>
        Font Size:
        <select onChange={(e) => onFontSizeChange(e.target.value)}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
    </div>
  );
};

export default Settings;
