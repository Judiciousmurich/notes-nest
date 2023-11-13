
const Tagging = ({ onAddTag, onDeleteTag, tags }) => {
  return (
    <div>
      <h2>Tags</h2>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            {tag} <button onClick={() => onDeleteTag(tag)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Add a tag..." onKeyDown={(e) => e.key === 'Enter' && onAddTag(e.target.value)} />
    </div>
  );
};

export default Tagging;
