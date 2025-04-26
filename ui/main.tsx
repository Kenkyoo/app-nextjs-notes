export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer-content">
      <div className="flex flex-col gap-2 justify-center items-center bg-base mx-auto">
        {children}
      </div>
    </div>
  );
}
