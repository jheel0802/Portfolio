
import React from 'react';
import { CONTACT } from '../constants';

interface HeaderProps {
  scrolled: boolean;
  handleScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrolled, handleScrollTo }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 border-b border-gray-200' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => handleScrollTo(e, 'top')}
          className="text-xl font-bold tracking-tighter text-gray-900"
        >
          JHEEL<span className="text-indigo-600">.GALA</span>
        </a>
        
        <div className="flex gap-6 md:gap-8 text-sm font-medium">
          {['Experience', 'Projects', 'Skills', 'Education'].map(item => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => handleScrollTo(e, item.toLowerCase())}
              className="text-gray-500 hover:text-indigo-600 transition-colors cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
