import React from "react";
import Link from "next/link";
import { Edit } from "lucide-react";
import { SiGithub } from "react-icons/si";

interface Props {
  blog?: boolean;
}

function Navbar({ blog }: Props) {
  const socials = [
    {
      link: "https://github.com/kinetra",
      label: "Github",
      icon: SiGithub,
    },
    {
      link: "https://github.com/kinetra/kinetra.de",
      label: "Edit",
      icon: Edit,
    },
  ];

  return (
    <nav className="py-10 flex justify-between items-center">
      <a
        href="/"
        className="text-2xl font-bold underline underline-offset-8 decoration-purple-500 -rotate-2"
      >
        Kinetra {blog && <span className="text-indigo-200"> Blog</span>}
      </a>

      <div className="flex items-center gap-5">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <Link
              href={social.link}
              key={social.link}
              aria-label={social.label}
            >
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
