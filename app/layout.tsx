import Sidebar from "./components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-5">
            {/* <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1> */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
