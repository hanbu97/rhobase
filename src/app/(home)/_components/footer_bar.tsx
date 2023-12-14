import { Twitter, Youtube, Facebook, Linkedin, Github } from "lucide-react";
import Image from "next/image";

const FooterBar = () => {
  const footerLinks = [
    {
      title: "LEARN",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Start Tutorial", href: "#" },
        { name: "Video Demonstration", href: "#" },
      ],
    },
    {
      title: "BUILD",
      links: [
        { name: "Dashboard", href: "#" },
        { name: "Authencation", href: "#" },
        { name: "Wallet Management", href: "#" },
        { name: "Build React application", href: "#" },
      ],
    },
    {
      title: "NETWORK",
      links: [
        { name: "Join Us", href: "#" },
        { name: "Sponsor", href: "#" },
        { name: "Grants", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Logo and description */}
        <div className="md:col-span-3 h-12">
          {/* <img src="/vara-logo.png" alt="VARA Logo" className="h-12 mb-4" /> */}
          <Image
            src="/rho.svg" // Assuming your SVG file is named vara-logo.svg and located in the public folder
            width={150}
            height={150}
            alt="Rhobase"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 md:col-span-9 gap-8">
          {footerLinks.map((column) => (
            <div key={column.title} className="md:col-span-2">
              <h5 className="text-lg mb-4 px-2">{column.title}</h5>
              <ul>
                {column.links.map((link) => (
                  <li key={link.name} className="mt-1">
                    <a
                      href={link.href}
                      className="text-sm hover:text-[#909090] cursor-pointer px-2 py-2 transition-colors duration-300 ease-in-out hover:bg-white/20 hover:rounded-xl hover:shadow-md hover:backdrop-blur-md"
                      style={{ display: "block" }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright and Social icons */}
        <div className="md:col-span-12 flex justify-between items-center mt-4 md:mt-0">
          <p className="flex justify-end">
            © 2023 Rhobase. All Rights Reserved.
          </p>
          <div className="flex">
            <a href="#" className="hover:text-gray-300">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 ml-4">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 ml-4">
              <Youtube size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 ml-4">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 ml-4">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
