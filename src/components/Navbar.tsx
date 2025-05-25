import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/5cab5ef1-a411-413d-8ba7-ca15b6162039.png" alt="ScreenWise Eating Logo" className="h-12" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/our-story" className="nav-link">Our Story</Link>
          <Link to="/product" className="nav-link">Product</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          
          {/* Resources Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="nav-link bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent px-3 py-2 font-normal text-base">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid w-[200px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/supporting-research" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          Supporting Research
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/faq" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          FAQ
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button className="ml-4 bg-screenwise-teal hover:bg-screenwise-teal-dark text-white rounded-full px-6" onClick={() => window.open('https://forms.gle/LXALB8iVEWS6SwwJA', '_blank')}>
            Start Free Trial
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-screenwise-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="fixed inset-0 bg-white z-40 pt-20">
          <nav className="flex flex-col items-center space-y-6 p-8 animate-fade-in">
            <Link to="/our-story" className="text-xl" onClick={() => setIsOpen(false)}>Our Story</Link>
            <Link to="/product" className="text-xl" onClick={() => setIsOpen(false)}>Product</Link>
            <Link to="/pricing" className="text-xl" onClick={() => setIsOpen(false)}>Pricing</Link>
            
            {/* Resources dropdown for mobile */}
            <div className="w-full flex flex-col items-center">
              <button className="text-xl mb-2 flex items-center" onClick={e => {
            e.preventDefault();
            const resourcesContent = document.getElementById('mobile-resources-content');
            if (resourcesContent) {
              resourcesContent.classList.toggle('hidden');
            }
          }}>
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div id="mobile-resources-content" className="hidden w-full flex flex-col items-center space-y-4 py-2">
                <Link to="/supporting-research" className="text-lg" onClick={() => setIsOpen(false)}>Supporting Research</Link>
                <Link to="/faq" className="text-lg" onClick={() => setIsOpen(false)}>FAQ</Link>
              </div>
            </div>
            
            <Button className="mt-4 bg-screenwise-teal hover:bg-screenwise-teal-dark text-white rounded-full px-8 py-3 text-lg w-full" onClick={() => {
          window.open('https://forms.gle/LXALB8iVEWS6SwwJA', '_blank');
          setIsOpen(false);
        }}>
              Start Free Trial
            </Button>
          </nav>
        </div>}
    </header>;
};
export default Navbar;