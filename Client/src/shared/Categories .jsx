const uniqueCategories = Array.from(new Set(notes.map(note => note.category)));


<select
  value={currentCategory}
  onChange={(e) => filterNotes(e.target.value)}
>
  <option value="">All</option>
  {uniqueCategories.map((category, index) => (
    <option key={index} value={category}>{category}</option>
  ))}
</select>
