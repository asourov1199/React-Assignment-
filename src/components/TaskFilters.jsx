const filters = [
  { value: 'all', label: 'All' },
  { value: 'pending', label: 'Pending' },
  { value: 'completed', label: 'Completed' },
];

export default function TaskFilters({ activeFilter, onFilterChange, counts }) {
  return (
    <div className="task-filters" role="group" aria-label="Filter tasks">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          className={`filter-button ${activeFilter === value ? 'active' : ''}`}
          aria-pressed={activeFilter === value}
          onClick={() => onFilterChange(value)}
        >
          {label}
          <span className="filter-count" aria-hidden="true">{counts[value]}</span>
        </button>
      ))}
    </div>
  );
}
