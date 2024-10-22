import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { HelpCircle } from 'lucide-react'

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
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setCheckedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const progress = (checkedItems.length / activities.length) * 100

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Registro de Actividades Diarias</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="mb-4" />
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-2">
              <Checkbox
                id={activity.id}
                checked={checkedItems.includes(activity.id)}
                onCheckedChange={() => toggleItem(activity.id)}
              />
              <label
                htmlFor={activity.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {activity.label}
              </label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{activity.info}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Guardar Registro</Button>
      </CardFooter>
    </Card>
  )
}
