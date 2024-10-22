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
        <Card className="w-full max-w-lg mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Registro de Actividades Diarias</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center mb-6">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={
                                    "w-[240px] justify-start text-left font-normal"
                                }
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <div className="text-sm text-muted-foreground">
                        Progreso: {Math.round(progress)}%
                    </div>
                </div>
                <Progress value={progress} className="mb-6" />
                <TooltipProvider>
                    <div className="space-y-4">
                        {activities.map((activity) => (
                            <div key={activity.id} className="flex items-center space-x-2">
                                <Checkbox
                                    id={activity.id}
                                    checked={checkedActivities.includes(activity.id)}
                                    onCheckedChange={() => handleActivityToggle(activity.id)}
                                />
                                <label
                                    htmlFor={activity.id}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {activity.label}
                                </label>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{activity.info}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        ))}
                    </div>
                </TooltipProvider>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Guardar Registro</Button>
            </CardFooter>
        </Card>
    )
}