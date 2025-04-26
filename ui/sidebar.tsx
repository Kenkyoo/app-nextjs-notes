export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer-side flex flex-col justify-beetwen items-center gap-5 p-5 w-56 bg-base-300">
      <div>
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay mx-auto"
        ></label>
      </div>
      {children}
    </div>
  );
}
