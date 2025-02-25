import React from 'react';
import {
  Instagram,
  
  Facebook,
  Mail
} from 'lucide-react';

const SocialFooter = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://www.instagram.com/bluawayofficial/',
      color: 'hover:bg-pink-500'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={24} />,
      url: 'https://www.facebook.com/profile.php?id=61571966904270',
      color: 'hover:bg-blue-800'
    },
    {
      name: 'Email',
      icon: <Mail size={24} />,
      url: 'mailto:bluawayclo@gmail.com',
      color: 'hover:bg-green-600'
    }
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50">
      <div className="flex flex-col items-center justify-center py-6 bg-black/30 backdrop-blur-sm border-t border-white/10">
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 text-white hover:scale-110 hover:bg-white/10 transform transition-all duration-300"
              aria-label={`Visit our ${social.name} page`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Company Info */}
        <div className="text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Blu Away . All rights reserved.  
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SocialFooter;