import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Transición y variantes para animaciones
const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export const AboutDeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-stone-900 to-zinc-950 text-stone-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8 mt-10">
        <motion.header
          className="text-center space-y-4"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={transition}
        >
          <h1 className="text-4xl font-bold tracking-tight">Sobre el Desarrollador</h1>
          <p className="text-xl text-stone-400">El genio detrás del reto Winter ARC</p>
        </motion.header>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ...transition, delay: 0.2 }}
        >
          <Card className="[background:linear-gradient(45deg,#292524,theme(colors.stone.800)_50%,#292524)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.stone.700/.48)_80%,_theme(colors.stone.600)_86%,_theme(colors.stone.500)_90%,_theme(colors.stone.600)_94%,_theme(colors.stone.700/.48))_border-box] rounded-2xl border border-transparent animate-border">
            <CardHeader className="text-center">
              <Avatar className="w-32 h-32 mx-auto">
                <AvatarImage src="https://github.com/shadcn.png" alt="Developer" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl md:text-2xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
                Samuel Pulgarin
              </CardTitle>
              <CardDescription className="text-stone-400">
                Analista y desarrollador de Software
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center text-stone-300">
                Apasionado por crear soluciones innovadoras y enfrentar desafíos tecnológicos.
                Especializado en desarrollo web Full Stack.
              </p>
              <div className="flex justify-center space-x-2">
                {["React", "Node.js", "TypeScript", "Vercel"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-stone-700 text-stone-200">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center space-x-4">
              {[
                { icon: <Github className="h-5 w-5 text-stone-200" />, url: 'https://github.com/SamuelPulgarin' },
                { icon: <Linkedin className="h-5 w-5 text-stone-200" />, url: 'https://www.linkedin.com/in/samuel-pulgarin-986407245' },
                { icon: <Twitter className="h-5 w-5 text-stone-200" />, url: '#' },
                { icon: <Mail className="h-5 w-5 text-stone-200" />, url: '#' }
              ].map((item, index) => (
                <Link key={index} to={item.url}>
                  <Button variant="outline" size="icon" className="[background:linear-gradient(45deg,#292524,theme(colors.stone.800)_50%,#292524)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.stone.700/.48)_80%,_theme(colors.stone.600)_86%,_theme(colors.stone.500)_90%,_theme(colors.stone.600)_94%,_theme(colors.stone.700/.48))_border-box] rounded-2xl border border-transparent animate-border">
                    {item.icon}
                  </Button>
                </Link>
              ))}
            </CardFooter>
          </Card>
        </motion.div>

        <Separator className="bg-stone-700" />

        <motion.section
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ...transition, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold">Sobre el Proyecto Winter ARC</h2>
          <p className="text-stone-300">
            Winter ARC no fue solo un desafío; fue una experiencia transformadora que redefine la forma en
            que interactuamos con nuestra rutina diaria, especialmente en los fríos meses de invierno.
            Bajo la dirección visionaria de Samuel, se desarrolló una plataforma web innovadora que convierte
            la autoevaluación en un juego envolvente.
            <br />
            <br />
            Winter ARC no solo documenta tu viaje, lo eleva. Atrévete a desafiar tus límites y descubre una
            nueva forma de interactuar con tu crecimiento personal. Prepárate para jugar, avanzar y conquistar
            tus objetivos como nunca antes.
          </p>
        </motion.section>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ...transition, delay: 0.6 }}
        >
          <Card className="bg-stone-800 border-stone-700">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
                Agradecimientos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-stone-300">
                Este proyecto no habría sido posible sin el apoyo de:
              </p>
              <ul className="list-disc list-inside mt-2 text-stone-400">
                <li>El equipo de administradores de Winter ARC.</li>
                <li>La comunidad de programadores open source.</li>
                <li>Familia y amigos por su apoyo incondicional.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <footer className="text-center text-stone-400">
          <p>&copy; 2024 Winter ARC Project. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
};
