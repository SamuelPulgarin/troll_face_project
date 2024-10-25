import { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import {
    Tooltip, TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const activities = [
    { id: 'wake-up', label: 'Levantarse temprano', info: 'Despertarse antes de las 6:00 AM' },
    { id: 'reading', label: 'Lectura', info: 'Leer al menos 30 minutos al día' },
    { id: 'meditation', label: 'Meditación', info: 'Practicar meditación por 10-15 minutos' },
    { id: 'water', label: 'Agua', info: 'Beber al menos 2 litros de agua al día' },
    { id: 'cardio', label: 'Cardio', info: 'Realizar 15-30 minutos de ejercicio cardiovascular' },
    { id: 'training', label: 'Entrenamiento', info: 'Completar una sesión de entrenamiento fisico' },
    { id: 'study', label: 'Estudiar', info: 'Dedicar 1 hora al estudio o aprendizaje' },
    { id: 'nutrition', label: 'Meta nutricional', info: 'Cumplir con la dieta planificada del día' },
    { id: 'skincare', label: 'Skin Care', info: 'Realizar la rutina de cuidado de la piel' },
    { id: 'sleep', label: 'Acostarse temprano', info: 'Ir a la cama antes de las 10:00 PM' },
]

export const DailyActivitiesTracker = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [checkedActivities, setCheckedActivities] = useState<string[]>([])

    const handleActivityToggle = (activityId: string) => {
        setCheckedActivities((prev) =>
            prev.includes(activityId)
                ? prev.filter((id) => id !== activityId)
                : [...prev, activityId]
        )
    }

    const progress = (checkedActivities.length / activities.length) * 100

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-stone-900 to-zinc-950 py-20 px-2">
            <Card className="w-full max-w-lg mx-auto border-stone-600 bg-stone-800/50 text-stone-100 shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-3xl font-bold text-center bg-clip-text text-transparent text-stone-200">Registro de Actividades Diarias</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between items-center mb-6">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[240px] justify-start text-left font-normal",
                                        "bg-stone-700 text-stone-100 hover:bg-stone-600 hover:text-stone-50 border-stone-600"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-stone-700" align="start">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="bg-stone-700 text-stone-100"
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        <div className="text-sm text-stone-400 font-medium">
                            Progreso: {Math.round(progress)}%
                        </div>
                    </div>
                    <Progress value={progress} className="h-2 mb-6 bg-stone-700">
                        <div
                            className="h-full bg-gradient-to-r from-stone-500 to-stone-300 transition-all duration-500 ease-in-out"
                            style={{ width: `${progress}%` }}
                        />
                    </Progress>
                    <TooltipProvider>
                        <div className="space-y-4">
                            {activities.map((activity) => (
                                <div key={activity.id}
                                    className={cn(
                                        "flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ease-in-out",
                                        checkedActivities.includes(activity.id)
                                            ? "bg-stone-700 text-stone-100"
                                            : "bg-stone-850 text-stone-300"
                                    )}
                                >
                                    <Checkbox
                                        id={activity.id}
                                        checked={checkedActivities.includes(activity.id)}
                                        onCheckedChange={() => handleActivityToggle(activity.id)}
                                        className="border-stone-500 data-[state=checked]:bg-stone-500 data-[state=checked]:border-stone-500"
                                    />
                                    <label
                                        htmlFor={activity.id}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {activity.label}
                                    </label>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <HelpCircle className="h-4 w-4 text-stone-400 hover:text-stone-200 transition-colors duration-200" />
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-stone-700 text-stone-100 border-stone-600">
                                            <p>{activity.info}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            ))}
                        </div>
                    </TooltipProvider>
                </CardContent>
                <CardFooter>
                    <Button className="w-full bg-stone-600 hover:bg-stone-500 text-stone-100 transition-all duration-300 ease-in-out transform hover:scale-105">Guardar Registro</Button>
                </CardFooter>
            </Card>
        </div >
    )
}