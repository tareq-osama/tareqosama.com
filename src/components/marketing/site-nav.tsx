import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Lenis from '@studio-freight/lenis';

const navigationItems = [
 { name: 'Start', href: '/' },
 { name: 'Features', href: '#features' },
 { name: 'Resources', href: '/resources' },
 { name: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
 const pathname = usePathname();
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 useEffect(() => {
   const lenis = new Lenis({
     duration: 1.2,
     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
     orientation: 'vertical',
     smoothWheel: true,
   });

   function raf(time: number) {
     lenis.raf(time);
     requestAnimationFrame(raf);
   }

   requestAnimationFrame(raf);

   return () => {
     lenis.destroy();
   };
 }, []);

 const scrollToSection = (id: string) => {
   const element = document.getElementById(id);
   if (element) {
     element.scrollIntoView({ behavior: 'smooth' });
   }
   setIsMobileMenuOpen(false);
 };

 const handleNavigation = (href: string) => {
   if (href.startsWith('#')) {
     const id = href.substring(1);
     scrollToSection(id);
   }
 };

 return (
   <>
     <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
       <div className="max-w-[90vw] mx-auto px-6">
         <div className="flex items-center justify-between py-4">
           <Link href="/" className="relative w-32 h-8">
             <Image
               src="/corvexlogo.svg"
               alt="Corvex - Client Portal for One-Person Businesses"
               fill
               className="object-contain"
               priority
               sizes="128px"
             />
           </Link>

           <div className="hidden lg:flex gap-8">
             {navigationItems.map((item) => (
               <button
                 key={item.name}
                 onClick={() => handleNavigation(item.href)}
                 className={`
                   relative text-sm font-medium pb-6 transition-colors
                   ${pathname === item.href ? 'text-white' : 'text-gray-500 hover:text-gray-300'}
                 `}
               >
                 {item.name}
                 {pathname === item.href && (
                   <motion.div
                     className="absolute bottom-0 left-0 right-0 h-px bg-white"
                     layoutId="activeTab"
                   />
                 )}
               </button>
             ))}
           </div>

           <div className="hidden lg:flex items-center gap-4">
             <Link
               href="https://app.usecorvex.com"
               target="_blank"
               rel="noopener noreferrer"
               className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
             >
               Login
             </Link>
             <Link
               href="#pricing"
               className="text-sm font-medium text-white border-slate-700 border hover:bg-slate-600 px-4 py-2 rounded-full transition-colors"
               onClick={() => handleNavigation('#pricing')}
             >
               Get Started
             </Link>
           </div>

           <button
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
           >
             {isMobileMenuOpen ? (
               <X className="w-6 h-6" />
             ) : (
               <Menu className="w-6 h-6" />
             )}
           </button>
         </div>
       </div>
     </div>

     <AnimatePresence>
       {isMobileMenuOpen && (
         <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -20 }}
           transition={{ duration: 0.2 }}
           className="fixed inset-0 z-40 lg:hidden"
         >
           <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
           <div className="relative min-h-screen flex flex-col pt-20 px-6">
             <nav className="flex flex-col gap-4">
               {navigationItems.map((item) => (
                 <button
                   key={item.name}
                   onClick={() => handleNavigation(item.href)}
                   className={`
                     text-lg font-medium py-2 transition-colors text-left
                     ${pathname === item.href ? 'text-white' : 'text-gray-500 hover:text-gray-300'}
                   `}
                 >
                   {item.name}
                 </button>
               ))}
             </nav>

             <div className="flex flex-col gap-4 mt-8">
               <Link
                 href="https://app.usecorvex.com"
                 target="_blank"
                 rel="noopener noreferrer"
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="text-center text-sm font-medium text-gray-300 hover:text-white px-4 py-3 transition-colors"
               >
                 Login
               </Link>
               <Link
                 href="#pricing"
                 onClick={() => {
                   handleNavigation('#pricing');
                   setIsMobileMenuOpen(false);
                 }}
                 className="text-center text-sm font-medium text-white border-slate-700 border hover:bg-slate-600 px-4 py-3 rounded-full transition-colors"
               >
                 Get Started
               </Link>
             </div>
           </div>
         </motion.div>
       )}
     </AnimatePresence>
   </>
 );
}