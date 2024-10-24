import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { WinPointsTable } from './WinPointsTable'

const ranks = [
    { id: 1, name: "Recluta Ferreo", category: "Humano", level: 1, points: 0, image: "/HUMANOS/1_recluta_ferreo.jpg" },
    { id: 2, name: "Guerrero Incansable", category: "Humano", level: 2, points: 100, image: "/HUMANOS/2_guerrero_incansable.jpg" },
    { id: 3, name: "Burlador del Dolor", category: "Humano", level: 3, points: 300, image: "/HUMANOS/3_burlador_del_dolor.png" },
    { id: 4, name: "Rey de la Fortaleza", category: "Humano", level: 4, points: 600, image: "/HUMANOS/4_rey_de_la_fortaleza.png" },
    { id: 5, name: "Espectro del gimnasio", category: "Humano", level: 5, points: 1000, image: "/HUMANOS/5_espectro_del_gimnasio.jpg" },
    { id: 6, name: "Destructor de limites", category: "Humano", level: 6, points: 1500, image: "/HUMANOS/6_destructor_de_limites.jpg" },

    { id: 7, name: "Recluta Convicción Oscura", category: "Guerreros de las fuerzas oscuras", level: 7, points: 2100, image: "/GUERREROS_DE_LAS_FUERZAS_OSCURAS/1_recluta_de_la_conviccion_oscura.jfif" },
    { id: 8, name: "Fuerza del Dolor", category: "Guerreros de las fuerzas oscuras", level: 8, points: 2800, image: "/GUERREROS_DE_LAS_FUERZAS_OSCURAS/2_fuerza_del_dolor.jfif" },
    { id: 9, name: "Iniciado del Cosmos Infernal", category: "Guerreros de las fuerzas oscuras", level: 9, points: 3600, image: "/GUERREROS_DE_LAS_FUERZAS_OSCURAS/3_iniciado_del_cosmos_infernal.png" },
    { id: 10, name: "Titan de los Campos Oscuros", category: "Guerreros de las fuerzas oscuras", level: 10, points: 4500, image: "/GUERREROS_DE_LAS_FUERZAS_OSCURAS/4_titan_de_los_campos_oscuros.jpg" },
    { id: 11, name: "Sombra del Poder Demoniaco", category: "Guerreros de las fuerzas oscuras", level: 11, points: 5500, image: "/GUERREROS_DE_LAS_FUERZAS_OSCURAS/5_sombra_del_poder_demoniaco.jpg" },

    { id: 12, name: "Espectro de las sombras cosmicas", category: "Gobernantes de los planos infernales", level: 12, points: 6600, image: "/GOBERNANTES_DE_LOS_PLANOS_INFERNALES/1_espectro_de_las_sombras_cosmicas.jfif" },
    { id: 13, name: "Tirano de los Mundos Infernales", category: "Gobernantes de los planos infernales", level: 13, points: 7800, image: "/GOBERNANTES_DE_LOS_PLANOS_INFERNALES/2_tirano_de_los_mundos_infernales.jpg" },
    { id: 14, name: "Bestia del Vacío Demoniaco", category: "Gobernantes de los planos infernales", level: 14, points: 9100, image: "/GOBERNANTES_DE_LOS_PLANOS_INFERNALES/3_bestia_del_vacio_demoniaco.jpg" },
    { id: 15, name: "Engendro de la Maldad Estelar", category: "Gobernantes de los planos infernales", level: 15, points: 10500, image: "/GOBERNANTES_DE_LOS_PLANOS_INFERNALES/4_engendro_de_la_maldad_estelar.png" },

    { id: 16, name: "Burlador del Laberinto Cosmico", category: "Divinidades del poder absoluto", level: 16, points: 12000, image: "/DIVINIDADES_DEL_PODER_ABSOLUTO/1_burlador_del_laberinto_cosmico.jfif" },
    { id: 17, name: "Principe de la Ruina Cosmica", category: "Divinidades del poder absoluto", level: 17, points: 13600, image: "/DIVINIDADES_DEL_PODER_ABSOLUTO/2_principe_de_la_ruina_cosmica.png" },
    { id: 18, name: "Destructor de Galaxias", category: "Divinidades del poder absoluto", level: 18, points: 15000, image: "/DIVINIDADES_DEL_PODER_ABSOLUTO/3_destructor_de_galaxias.jpg" },
    { id: 19, name: "Rey de los Universos Desconocidos", category: "Divinidades del poder absoluto", level: 19, points: 17100, image: "/DIVINIDADES_DEL_PODER_ABSOLUTO/4_rey_de_los_universos_desconocidos.jfif" },
]

export const GameRank = () => {
    const [currentRank, setCurrentRank] = useState(0)

    const nextRank = () => setCurrentRank((prev) => (prev + 1) % ranks.length)
    const prevRank = () => setCurrentRank((prev) => (prev - 1 + ranks.length) % ranks.length)

    return (
        <div className="min-h-screen  flex items-center justify-center p-4">
            <Card className="w-full max-w-4xl bg-stone-800/50 border-stone-700 text-stone-100 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center mb-2 text-stone-100">Troll ranking</CardTitle>
                    <CardDescription className="text-center text-stone-400">
                        Explora los rangos y asciende en la jerarquía del reto
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-100 hover:bg-stone-700/50"
                            onClick={prevRank}
                        >
                            <ChevronLeft className="h-8 w-8" />
                        </Button>
                        <div className="flex flex-col items-center space-y-4">
                            <Badge variant="secondary" className="text-sm sm:text-lg py-1 px-4 bg-stone-700 text-stone-100">
                                {ranks[currentRank].category}
                            </Badge>
                            <div className="relative">
                                <div className="absolute inset-0 bg-stone-600 rounded-full blur-2xl opacity-50"></div>
                                <img
                                    src={ranks[currentRank].image}
                                    alt={ranks[currentRank].name}
                                    className="w-32 h-32 object-cover rounded-full border-4 border-stone-600 relative z-10"
                                />
                            </div>
                            <h2 className="text-lg sm:text-4xl font-bold text-stone-100">{ranks[currentRank].name}</h2>
                            <div className="flex items-center space-x-2">
                                <Star className="text-stone-400" />
                                <span className="text-2xl font-semibold text-stone-100">Nivel {ranks[currentRank].level}</span>
                            </div>
                            <Progress value={(ranks[currentRank].points / 17100) * 100} className="w-64 bg-stone-700" />
                            <p className="text-lg text-stone-100">{ranks[currentRank].points} puntos</p>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-100 hover:bg-stone-700/50"
                            onClick={nextRank}
                        >
                            <ChevronRight className="h-8 w-8" />
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className="justify-center">
                    <p className="text-sm text-stone-400">
                        {currentRank + 1} de {ranks.length} rangos
                    </p>
                </CardFooter>
            </Card>

            {/* ¿Cómo subir de rango? */}
            <WinPointsTable />
        </div>
    )
}
