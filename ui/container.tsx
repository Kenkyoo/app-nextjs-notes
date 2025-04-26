export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer lg:drawer-open bg-base min-h-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  );
}
