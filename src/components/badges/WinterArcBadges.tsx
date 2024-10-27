import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"

const badges = [
    { id: 1, name: "Winter Challenge", description: "Aceptaste el reto Winter Arc", url: "/INSIGNIAS/punto.png" },
    { id: 2, name: "Administrador", description: "Administrador del Winter Arc", url: "/INSIGNIAS/winter_admin.png" },
    { id: 3, name: "Top #1", description: "Top 1 ranking del mes de octubre", url: "/INSIGNIAS/winter_first_october.png" },
    { id: 4, name: "Top #1", description: "Top 1 ranking del mes de noviembre", url: "/INSIGNIAS/winter_first_november.png" },
]

export const WinterArcBadges = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-stone-900 to-zinc-950 flex items-center justify-center p-4">
            <Card className="w-full max-w-4xl bg-gradient-to-b from-black via-stone-900 to-zinc-950 text-stone-100 border-stone-600">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Insignias</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[70vh]">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
                            {badges.map((badge) => (
                                <TooltipProvider key={badge.id}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="flex flex-col items-center space-y-2">
                                                <Avatar className="w-20 h-20 border-2 border-stone-600 hover:border-stone-400 transition-colors duration-200">
                                                    <AvatarImage src={badge.url} alt={badge.name} />
                                                    <AvatarFallback className="bg-stone-700 text-stone-300">{badge.name.slice(0, 2)}</AvatarFallback>
                                                </Avatar>
                                                <span className="text-sm font-medium text-stone-300 text-center">{badge.name}</span>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent side="bottom" className="bg-stone-700 text-stone-100 border-stone-600">
                                            <p>{badge.description}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    )
}
