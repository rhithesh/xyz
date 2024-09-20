"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function FloatingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { select, wallets, publicKey, disconnect } = useWallet();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? " bg-black shadow-md" : "bg-black "
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl text-white font-bold ">
              Go Fund ME
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavItem href="#home">Home</NavItem>
              <NavItem href="#about">About</NavItem>
              <NavItem href="#services">Services</NavItem>
              <NavItem href="#contact">Contact</NavItem>
              <NavItem href="#contact">
                <WalletMultiButton style={{}} />
              </NavItem>
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem href="#home" mobile>
              Home
            </NavItem>
            <NavItem href="#about" mobile>
              About
            </NavItem>
            <NavItem href="#services" mobile>
              Services
            </NavItem>
            <NavItem href="#contact" mobile>
              Contact
            </NavItem>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItem({
  href,
  children,
  mobile = false,
}: {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}) {
  const baseClasses =
    "text-white hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const mobileClasses = "block text-base";
  const desktopClasses = "text-sm";

  return (
    <a
      href={href}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
    >
      {children}
    </a>
  );
}
