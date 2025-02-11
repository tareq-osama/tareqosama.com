import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const companyLinks = [
    { title: 'USE CASES', links: ['Features', 'Pricing', 'Enterprise', 'Security'] },
    { title: 'RESOURCES', links: ['Documentation', 'Guides', 'Blog', 'Support'] },
    { title: 'COMPANY', links: ['About', 'Careers', 'Contact', 'Legal'] }
  ];

  return (
    <footer className="relative w-full bg-black/90 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 p-12">
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="block relative w-32 h-8">
              <Image src="/corvexlogo.svg" alt="Corvex" fill className="object-contain" />
            </Link>
            <p className="text-gray-400 text-sm max-w-md">
              Empower your business with a modern client portal that streamlines communication, 
              project management, and invoicing.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {companyLinks.map((section) => (
            <div key={section.title} className="md:col-span-2">
              <h3 className="text-white font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h3 className="text-white font-medium mb-4">Download</h3>
            <ul className="space-y-3">
              <li>
                <button className="text-sm px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-900 transition-colors w-full text-left">
                  iOS App
                </button>
              </li>
              <li>
                <button className="text-sm px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-900 transition-colors w-full text-left">
                  Android App
                </button>
              </li>
              <li>
                <button className="text-sm px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-900 transition-colors w-full text-left">
                  Desktop App
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 p-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Corvex. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}