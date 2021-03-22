const Filter = ({ newFilter, setNewFilter }) => {
  return (
    <div>
      <h3>Filter</h3>
      filter shown with{" "}
      <input
        value={newFilter}
        onChange={(e) => {
          setNewFilter(e.target.value);
        }}
      />
    </div>
  );
};

export default Filter;
