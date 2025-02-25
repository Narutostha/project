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
      icon: <Instagram size={20} />,
      url: 'https://www.instagram.com/bluawayofficial/',
      color: 'hover:bg-pink-500'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={20} />,
      url: 'https://www.facebook.com/profile.php?id=61571966904270',
      color: 'hover:bg-blue-800'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:bluawayclo@gmail.com',
      color: 'hover:bg-green-600'
    }
  ];

  return (
    <footer className="relative z-50">
      <div className="flex flex-col items-center justify-center py-4 bg-black/40 backdrop-blur-md border-t border-white/10">
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-2">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full bg-white/5 text-white hover:scale-110 ${social.color} transform transition-all duration-300 hover:shadow-lg hover:shadow-white/10`}
              aria-label={`Visit our ${social.name} page`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Company Info */}
        <div className="text-center">
          <p className="text-white/60 text-xs font-medium">
            © {new Date().getFullYear()} Blu Away . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SocialFooter;