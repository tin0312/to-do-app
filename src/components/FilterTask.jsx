import React from 'react';

export default function FilterTask() {
  return (
    <div className="filter-tasks">
      <button className="btn btn-primary">All</button>
      <button className="btn btn-primary">Active</button>
      <button className="btn btn-primary">Completed</button>
    </div>
  );
}
