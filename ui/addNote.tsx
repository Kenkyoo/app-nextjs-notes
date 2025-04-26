export default function AddNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="dropdown mt-3">
      <span>Add new note </span>
      <div className="tooltip  tooltip-right" data-tip="add new note">
        <div tabIndex={0} role="button" className="btn btn-primary">
          +
        </div>
      </div>
      <div
        tabIndex={0}
        className="dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md"
      >
        {children}
      </div>
    </div>
  );
}
