interface FilterTaskProps {
  filterStatus: string;
  setFilterStatus: React.Dispatch<React.SetStateAction<string>>;
  appMode: string;
}

export default function FilterTask({ filterStatus, setFilterStatus, appMode }: FilterTaskProps) {
  function handleClick(status: string) {
    setFilterStatus(status);
  }
  return (
    <div className={`filter-section d-flex justify-content-center gap-2 ${appMode}-filter-section`}>
      <a className={filterStatus === 'all' ? 'btn-active' : ''} onClick={() => handleClick('all')}>
        All
      </a>
      <a
        className={filterStatus === 'active' ? 'btn-active' : ''}
        onClick={() => handleClick('active')}
      >
        Active
      </a>
      <a
        className={filterStatus === 'completed' ? 'btn-active' : ''}
        onClick={() => handleClick('completed')}
      >
        Completed
      </a>
    </div>
  );
}
