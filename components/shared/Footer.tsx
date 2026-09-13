import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: '/icon/facebook.png', href: '#' },
    { name: 'Instagram', icon: '/icon/instragram.png', href: '#' },
    { name: 'YouTube', icon: '/icon/youtube.png', href: '#' },
    { name: 'X', icon: '/icon/x.png', href: '#' },
    { name: 'LinkedIn', icon: '/icon/lilnkedin.png', href: '#' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Refund Policy', href: '#' },
  ];

  const servicePages = [
    { name: 'Facebook SMM Panel', href: '#' },
    { name: 'Instagram SMM Panel', href: '#' },
    { name: 'YouTube SMM Panel', href: '#' },
    { name: 'TikTok SMM Panel', href: '#' },
    { name: 'Telegram SMM Panel', href: '#' },
    { name: 'X-Twitter SMM Panel', href: '#' },
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-[#d84d09] via-[#bf3c00] to-[#992c00] text-white pt-12 pb-6 px-4 md:px-12 rounded-t-3xl relative overflow-hidden">
      
      {/* Background Decorative Patterns (Triangles/Geometric effect) */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Column 1: Logo, Description & Social Icons */}
          <div className="flex flex-col space-y-4">
            <div className="bg-white text-orange-600 font-extrabold text-xl px-6 py-2 rounded-lg w-fit shadow-md">
              LOGO
            </div>
            <p className="text-xs text-orange-100/90 leading-relaxed max-w-sm">
              SMM is Bangladesh's most trusted SMM panel. We offer fast, affordable social media growth services for every platform, with full support for local payments like bKash and Nagad.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-2 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all p-1"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-orange-100/80">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Pages */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Services Pages</h4>
            <ul className="space-y-2 text-xs text-orange-100/80">
              {servicePages.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="hover:text-white transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Contact Info</h4>
            <div className="space-y-3 text-xs text-orange-100/90">
              {/* Email */}
              <div className="flex items-center space-x-3">
                <img src="/icon/letter.png" alt="Email" className="w-6 h-6 object-contain" />
                <span>info@smmsun.com</span>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-center space-x-3">
                <img src="/icon/whatsapp.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
                <span>+1 833 212 278</span>
              </div>

              {/* Support Info */}
              <div className="flex items-start space-x-3">
                <img src="/icon/call.png" alt="Support" className="w-6 h-6 object-contain" />
                <div>
                  <p>Serving all of Bangladesh</p>
                  <p className="font-semibold text-white">Support: 24/7</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="border-t border-orange-500/40 pt-4 text-center text-xs text-orange-200/80 bg-black/20 rounded-xl py-3 px-4">
          © 2026 SMM Limited. All Rights Reserved. | Operated under the Bangladesh ICT framework.
        </div>
      </div>
    </footer>
  );
}