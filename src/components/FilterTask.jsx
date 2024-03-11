import React from 'react';

export default function FilterTask() {
  return (
    <div className="filter-tasks d-flex justify-content-center gap-2">
      <button className="btn btn-primary">All</button>
      <button className="btn btn-primary">Active</button>
      <button className="btn btn-primary">Completed</button>
    </div>
  );
}
