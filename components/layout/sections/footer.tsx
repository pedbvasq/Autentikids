import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
                <img
    src="/logo_autentikids.png"
    alt="AutentiKids Logo"
    className="w-9 h-9 mr-2 rounded-lg border border-secondary object-contain"
  />

              <h3 className="text-2xl">AutentiKids</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contactos</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                autentikids@ddasda
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                +73736463
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Ubicacion</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Ubicacion
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Android
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Web
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Horarios</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
               Lunes a viernes 08h00 a 17h00 
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
              Sábados y domingo 09h00 a 14h00 
              </Link>
            </div>

  
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Redes sociales</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Twitch
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Discord
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Dribbble
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; Desarrollado por 
            <Link
              target="_blank"
              href=""
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
            PEDRO
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
