import Navbar from "./navbar";
import "@/app/globals.css";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <hr className="h-px bg-gray-100 border-0 dark:bg-gray-700" />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1696552004842-8c72b901e2a8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RhcnMlMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D')`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          zIndex: "-1", // Pastikan background berada di belakang konten
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
