import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Trophy, User, Scroll, BarChart, Medal } from "lucide-react"
import Spotlight, { SpotlightCard } from "./Spotlight"
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-router-dom";

const panelOptions = [
    {
        id: '1',
        title: 'Registro Diario',
        description: 'Registra tu progreso diario',
        action: 'Registrar',
        href: '/daily/register',
        icon: <Calendar />
    },
    {
        id: '2',
        title: 'Rangos',
        description: 'Consulta tu rango actual',
        action: 'Rangos',
        href: '/ranks',
        icon: <Trophy />
    },
    {
        id: '3',
        title: 'Perfil',
        description: 'Actualiza tu información',
        action: 'Mi perfil',
        href: '/user/profile',
        icon: <User />
    },
    {
        id: '4',
        title: 'Reglas',
        description: 'Conoce las reglas del reto',
        action: 'Reglas',
        href: '/rules',
        icon: <Scroll />
    },
    {
        id: '5',
        title: 'Progreso',
        description: 'Revisa tu avance en el reto',
        action: 'Progreso',
        href: '/progress',
        icon: <BarChart />
    },
    {
        id: '6',
        title: 'Ranking',
        description: 'Observa a los mejores guerreros',
        action: 'Top',
        href: '/top/leader',
        icon: <Medal />
    }
];

export const WelcomeScreen = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-stone-900 to-zinc-950 p-8">
            <div className="font-extrabold text-3xl text-center md:text-4xl my-12 [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-50% to-pink-500">¡Transforma tu <span className="text-blue-400 hover:text-pink-500 transition ease-in duration-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className="block animate-text-slide-6 text-left leading-tight [&_li]:block">
                    <li>Mente!</li>
                    <li>Fisico!</li>
                    <li>Meta!</li>
                    <li>Espiritualidad!</li>
                    <li>Rutina!</li>
                    <li>Fortaleza!</li>
                    <li aria-hidden="true">Mente!</li>
                </ul>
            </span></div>
            <Spotlight className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {
                    panelOptions.map((option) => (
                        <SpotlightCard>
                            <Card className="bg-stone-800 border-none">
                                <CardHeader>
                                    <CardTitle className="text-stone-100">{option.title}</CardTitle>
                                    <CardDescription className="text-stone-400">{option.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Link to={`${option.href}`}>
                                        <Button className="w-full bg-stone-600 hover:bg-stone-700 text-stone-100">
                                            {option.icon} {option.action}
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </SpotlightCard>
                    ))
                }
            </Spotlight>

            {/* Botones flotantes para redes sociales */}
            <div className="fixed bottom-8 right-8 flex flex-col gap-4">
                <Button size="icon" className="rounded-full bg-white hover:bg-gray-100">
                    <TiSocialFacebook className="text-black" />
                </Button>
                <Button size="icon" className="rounded-full bg-white hover:bg-gray-100">
                    <TiSocialInstagram className="text-black" />
                </Button>
                <Button size="icon" className="rounded-full bg-white hover:bg-gray-100">
                    <IoLogoWhatsapp className="text-black" />
                </Button>
            </div>
        </div>
    )
}
