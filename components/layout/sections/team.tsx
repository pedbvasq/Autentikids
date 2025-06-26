"use client";
import GithubIcon from "@/components/icons/github-icon";
import React, { useState } from "react";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
  slogan:string;
  descripcion:string;
}
interface SocialNetworkProps {
  name: string;
  url: string;
}

interface ModalProps {
  user: TeamProps | null;
  onClose: () => void;
}
const Modal = ({ user, onClose }: { user: TeamProps | null; onClose: () => void }) => {
  if (!user) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg max-w-md w-full p-6 shadow-lg"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            {user.firstName} {user.lastName}
          </h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            ✕
          </button>
        </div>

  <Image
  src={user.imageUrl}
  alt={`${user.firstName} ${user.lastName}`}
  width={300} // Mantiene buena calidad de carga, Next optimiza esto
  height={300}
  className="object-cover rounded mb-4 mx-auto max-w-[200px] w-full h-auto"
/>

        <p className="text-primary italic mb-2">{user.slogan}</p>
        <p className="text-gray-700 mb-4">{user.descripcion}</p>

      </div>
    </div>
  );
};

export const TeamSection = () => {
    const [selectedUser, setSelectedUser] = useState<TeamProps | null>(null);
  const teamList: TeamProps[] = [

    {
      imageUrl:
        "/IMG_6590.png",
      firstName: "Elizabeth",
      lastName: "Moore",
      positions: ["UI/UX Designer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
      slogan: "Diseño que inspira",
      descripcion: "Elizabeth es experta en diseñar experiencias visuales que combinan estética y funcionalidad."
    },
    {
      imageUrl:
        "/IMG_6682.png",
      firstName: "David",
      lastName: "Diaz",
      positions: ["Machine Learning Engineer", "TensorFlow Tinkerer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
        
      ],
      slogan: "Diseño que inspira",
      descripcion: "Elizabeth es experta en diseñar experiencias visuales que combinan estética y funcionalidad."
    },
    {
      imageUrl:
        "/IMG_6666.png",
      firstName: "Sarah",
      lastName: "Robinson",
      positions: ["Cloud Native Developer", " Kubernetes Orchestrator"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
      slogan: "Diseño que inspira",
      descripcion: "Elizabeth es experta en diseñar experiencias visuales que combinan estética y funcionalidad."
    },
    {
      imageUrl:
        "/IMG_6704.png",
      firstName: "Michael",
      lastName: "Holland",
      positions: ["DevOps Engineer", "CI/CD Pipeline Mastermind"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
      ],
      slogan: "Diseño que inspira",
      descripcion: "Elizabeth es experta en diseñar experiencias visuales que combinan estética y funcionalidad."
    },
    {
      imageUrl:
        "/IMG_6631.png",
      firstName: "Evan",
      lastName: "James",
      positions: ["Backend Developer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/leopoldo-miranda/",
        },
        {
          name: "Github",
          url: "https://github.com/leoMirandaa",
        },
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
      slogan: "Diseño que inspira",
      descripcion: "Elizabeth es experta en diseñar experiencias visuales que combinan estética y funcionalidad."
    },
    {
      imageUrl:
        "/IMG_6601.png",
      firstName: "Pam",
      lastName: "Taylor",
      positions: ["Fullstack Developer", "UX Researcher"],
      socialNetworks: [
        {
          name: "X",
          url: "https://x.com/leo_mirand4",
        },
      ],
      slogan: "Diseño que inspira",
      descripcion: "Elizabeth es experta en diseñar experiencias visuales que combinan estética y funcionalidad."
    },
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

   return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary mb-2 tracking-wider">Equipo</h2>
        <h2 className="text-3xl md:text-4xl font-bold">The Company Dream Team</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks,slogan,descripcion },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`${firstName} ${lastName}`}
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>

              {positions.map((position, i) => (
                <CardContent
                  key={i}
                  className={`pb-0 text-muted-foreground ${
                    i === positions.length - 1 ? "pb-6" : ""
                  }`}
                >
                  {position}
                  {i < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}

              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, i) => (
                  <Link
                    key={i}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                    rel="noopener noreferrer"
                  >
                    {(() => {
                      switch (name) {
                        case "LinkedIn":
                          return <LinkedInIcon />;
                        case "Github":
                          return <GithubIcon />;
                        case "X":
                          return <XIcon />;
                        default:
                          return null;
                      }
                    })()}
                  </Link>
                ))}
              </CardFooter>

              <button
                onClick={() =>
                  setSelectedUser({
                    imageUrl,
                    firstName,
                    lastName,
                    positions,
                    socialNetworks,
                    slogan,
                    descripcion
                  })
                }
                className="m-4 py-2 px-4 bg-primary text-white rounded hover:bg-primary-dark"
              >
                Ver Más
              </button>
            </Card>
          )
        )}
      </div>

      {/* Modal */}
      <Modal user={selectedUser} onClose={() => setSelectedUser(null)} />
    </section>
  );
};