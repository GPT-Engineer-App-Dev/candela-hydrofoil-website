import { Home, Info, Package, Zap, Mail } from "lucide-react";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Technology from "./pages/Technology";
import Contact from "./pages/Contact";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Products",
    to: "/products",
    icon: <Package className="h-4 w-4" />,
    page: <Products />,
  },
  {
    title: "Technology",
    to: "/technology",
    icon: <Zap className="h-4 w-4" />,
    page: <Technology />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <Contact />,
  },
];