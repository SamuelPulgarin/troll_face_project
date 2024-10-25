import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const activities = [
    "Levantarse temprano",
    "Lectura",
    "Meditación",
    "Agua",
    "Cardio",
    "Entrenamiento",
    "Estudiar",
    "Meta nutricional",
    "Skin Care",
    "Acostarse temprano"
]

const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 5 }, (_, i) => currentYear - i)


export const BarProgress = () => {

    const [selectedMonth, setSelectedMonth] = useState(months[0])
    const [selectedYear, setSelectedYear] = useState(currentYear.toString())

    // Simulación de datos de progreso
    const getProgress = (activity: string, month: string, year: string) => {
        // Usar una semilla basada en la actividad, mes y año para generar números consistentes
        const seed = activity.length + months.indexOf(month) + parseInt(year)
        return Math.floor((Math.sin(seed) + 1) / 2 * 101)
    }

    const progressData = useMemo(() => {
        return activities.map(activity => ({
            name: activity,
            progress: getProgress(activity, selectedMonth, selectedYear)
        }))
    }, [selectedMonth, selectedYear])

    const totalProgress = useMemo(() => {
        const total = progressData.reduce((sum, activity) => sum + activity.progress, 0)
        return Math.round(total / activities.length)
    }, [progressData])

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-stone-900 to-zinc-950 text-stone-100 p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto mt-10">
                <h1 className="text-3xl font-bold mb-6">Progreso del Reto</h1>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                    <Select onValueChange={setSelectedMonth} defaultValue={selectedMonth}>
                        <SelectTrigger className="w-full sm:w-[180px] bg-stone-800 text-stone-100 border-stone-600">
                            <SelectValue placeholder="Seleccionar mes" />
                        </SelectTrigger>
                        <SelectContent className="bg-stone-800 text-stone-100 border-stone-600">
                            {months.map(month => (
                                <SelectItem key={month} value={month}>{month}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select onValueChange={setSelectedYear} defaultValue={selectedYear}>
                        <SelectTrigger className="w-full sm:w-[180px] bg-stone-800 text-stone-100 border-stone-600">
                            <SelectValue placeholder="Seleccionar año" />
                        </SelectTrigger>
                        <SelectContent className="bg-stone-800 text-stone-100 border-stone-600">
                            {years.map(year => (
                                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Card className="bg-stone-800 text-stone-100 mb-6 border-stone-600">
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                            Progreso Total
                            <Badge variant="secondary" className="bg-stone-700 text-stone-100">
                                {totalProgress}%
                            </Badge>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Progress value={totalProgress} className="h-2 bg-stone-700" />
                    </CardContent>
                </Card>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {progressData.map(activity => (
                        <Card key={activity.name} className="bg-stone-800 text-stone-100 border-stone-600">
                            <CardHeader>
                                <CardTitle className="flex justify-between items-center">
                                    {activity.name}
                                    <Badge variant="secondary" className="bg-stone-700 text-stone-100">
                                        {activity.progress}%
                                    </Badge>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Progress value={activity.progress} className="h-2 bg-stone-700" />
                                <p className="mt-2 text-sm text-stone-400">
                                    {Math.round(activity.progress * 0.3)} de 30 días en {selectedMonth} {selectedYear}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
