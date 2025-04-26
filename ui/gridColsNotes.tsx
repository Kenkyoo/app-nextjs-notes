export default function GridCols({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap4 bg-base min-w-full mx-1">
      {children}
    </div>
  );
}
