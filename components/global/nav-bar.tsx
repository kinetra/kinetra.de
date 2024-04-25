import React from "react";
import Link from "next/link";
import { Edit } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Image from "next/image";

interface Props {
  blog?: boolean;
  benc?: boolean;
}

function Navbar({ blog, benc }: Props) {
  const socials = [
    {
      link: "https://github.com/orgs/bencv2/repositories",
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
        className="flex items-center gap-x-2 text-2xl font-bold -rotate-2"
      >
        <Image src="/favicon.ico" width={40} height={40} alt="logo" />
        {benc ? (
          <span>
            Benc <span className="text-indigo-400"> Docs</span>
          </span>
        ) : (
          <span>
            Kinetra {blog && <span className="text-indigo-400"> Blog</span>}
          </span>
        )}
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
