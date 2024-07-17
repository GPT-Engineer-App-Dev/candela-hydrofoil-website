import { navItems } from "@/nav-items";
import { Outlet } from "react-router-dom";
import { DesktopNavbar } from "./_components/DesktopNavbar";
import { MobileSheet } from "./_components/MobileSheet";
import { UserMenu } from "./_components/UserMenu";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <DesktopNavbar navItems={navItems} />
        <MobileSheet navItems={navItems} />
        <UserMenu />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent-foreground">Facebook</a>
            <a href="#" className="hover:text-accent-foreground">Twitter</a>
            <a href="#" className="hover:text-accent-foreground">Instagram</a>
          </div>
          <div>
            &copy; 2024 Candela Hydrofoil. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;