import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Cake, Ruler, Weight, User2 } from "lucide-react"


export const UserProfile = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-stone-900 to-zinc-950 p-4">
            <Card className="w-full border-stone-600 max-w-2xl bg-stone-800 text-stone-100 overflow-hidden">
                <div className="h-32 bg-gradient-to-br from-black via-stone-800 to-zinc-950 relative">
                    <div className="absolute -bottom-12 left-4">
                        <img 
                        className="w-32 h-32 object-cover rounded-full border-4 border-stone-600 relative z-10"
                        src="/HUMANOS/1_recluta_ferreo.jpg"
                        alt="Rnage image" />
                    </div>
                </div>
                <CardHeader className="pt-16 pb-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-2xl font-bold">John Doe</CardTitle>
                            <p className="text-stone-400">@johndoe</p>
                        </div>
                        <Button className="bg-gradient-to-r from-black via-stone-900 to-zinc-950 text-white hover:bg-gradient-to-br hover:from-gray-950 hover:via-stone-800 hover:to-zinc-900">
                            Editar Perfil
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex justify-between items-center bg-stone-700 p-4 rounded-lg">
                        <div>
                            <Badge variant="outline" className="text-pink-400 border-pink-500 mb-2">
                                Rango: Humano
                            </Badge>
                            <p className="text-sm text-stone-300">13900 / 17100 puntos</p>
                        </div>
                        <div className="w-48">
                            <Progress value={75} className="h-3" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-stone-300">
                        <div className="flex items-center space-x-2">
                            <Cake className="text-stone-500" />
                            <div>
                                <p className="text-sm text-stone-400">Edad</p>
                                <p>28 años</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <User2 className="text-stone-500" />
                            <div>
                                <p className="text-sm text-stone-400">Sexo</p>
                                <p>Masculino</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Weight className="text-stone-500" />
                            <div>
                                <p className="text-sm text-stone-400">Peso</p>
                                <p>75 kg</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Ruler className="text-stone-500" />
                            <div>
                                <p className="text-sm text-stone-400">Altura</p>
                                <p>180 cm</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
