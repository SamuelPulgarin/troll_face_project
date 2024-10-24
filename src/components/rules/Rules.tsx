import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const rules = [
    { title: "Madrugar", content: "Todos los miembros del grupo deberán madrugar en los siguientes horarios: 4am, 5am y como máximo 6am, los integrantes del grupo deberán Reportarse en estas horas, tomando una captura de pantalla para verificar la hora.", type: "obligatoria" },
    { title: "Duchas frías", content: "Los integrantes del grupo deberán de tomar todos los días al despertar una ducha con agua fría, esto es con el fin de mejorar nuestra salud y poder trabajar la mente y obligarla a acostumbrarse que si hay cosas que nos incomodan las debemos hacer.", type: "obligatoria" },
    { title: "Meditación", content: "Los integrantes del grupo deberán meditar mínimo 10 minutos al despertarse (antes de ducharse o después de ducharse) además que la meditación ayuda a la reducción del estrés, mejora de la concentración, la regulación emocional, entre otras cosas.", type: "obligatoria" },
    { title: "Ejercicio", content: "Los integrantes del grupo deberán de hacer ejercicio mínimo 4 días a la semana y máximo 6 días a la semana ya sea, ejercicio en el gimnasio, ejercicio en casa o ejercicio haciendo calistenia.", type: "obligatoria" },
    { title: "Cardio", content: "Los integrantes del grupo deberán de correr los días que hagan ejercicio, el mínimo de tiempo para las personas que están en volumen son 5 minutos y máximo 15, el mínimo de tiempo para los que están en definición es de 15 minutos y el máximo lo decides tu.", type: "obligatoria" },
    { title: "Lectura", content: "Los integrantes del grupo deberán de leer como mínimo 30 minutos en el día la lectura a leer debe de ser sobre crecimiento personal, el tema a leer lo escogen ustedes, media vez sea relacionado a crecer como persona.", type: "obligatoria" },
    { title: "Comida", content: "Los integrantes del grupo deberán de comer de manera saludable para poder cumplir sus objetivos, si tu quieres bajar de peso deveras de hacer un déficit calórico, si tú quieres aumentar masa muscular deveras de hacer un volumen.", type: "obligatoria" },
    { title: "Cortarse el cabello", content: "Raparse o hacerse un buzz cut no es obligatorio, pero para las personas que quieran empezar una nueva era el cortarse el raparse o hacerse un buzz cut es como decir un adiós al yo de antes y decirle un bienvenido al tu nuevo yo.", type: "opcional" },
    { title: "Rutina diaria de cuidado personal", content: "Todos los integrantes del grupo deberán de cuidarse la cara y el cuerpo en general, los integrantes del grupo deberán de cuidarse la piel, el mal aliento, el mal olor etc. deberán de seguir una rutina diaria.", type: "obligatoria" },
    { title: "Relaciones emocionales", content: "El estar soltero o soltera es opcional siempre y cuando su pareja no sea una distracción durante el reto, recuerden que el propósito y la finalidad del reto es que todos saquen su mejor versión, se enfoquen en si mismos.", type: "opcional" },
    { title: "Pornografía", content: "Queda estrictamente prohibido, ver, hablar, sobre la pornografía, este es una de las adicciones mas fuerte para muchos, lo único que hace la pornografía es, dañar tu salud mental, ser un adicto, perder concentración en otras actividades.", type: "obligatoria" },
    { title: "Masturbación", content: "Queda prohibido la autosatisfacción ósea la masturbación, para los que dice 'es sana' si bien muchos estudios dicen que la masturbación es algo que te puede ayudar en tu salud media vez sea moderada y no todos los días.", type: "obligatoria" },
    { title: "Bebidas alcohólicas", content: "Quedan estrictamente prohibido las bebidas alcohólicas, el alcohol solo le hace daño a tu cuerpo provocando en este, múltiples enfermedades que solo te llevaran a la muerte.", type: "obligatoria" },
    { title: "Fumar", content: "Queda estrictamente prohibido fumar, drogarse, fumar mariguana etc. es otra adicción como el alcohol que lo único que hace es matar tus pulmones a demás no te ves 'Cool' solo te ves ridiculo/a.", type: "obligatoria" },
    { title: "Comida chatarra", content: "Queda prohibido consumir comida chatarra, se puede comer de vez en cuando media vez sea de manera moderada, no excesiva ya sea cada 15 días o algún fin de semana que quieran comer esta permitido, se pueden dar sus gustos de vez en cuando.", type: "obligatoria" },
]

export const Rules = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-black via-stone-900 to-zinc-950 text-stone-100 p-8">
                <Card className="w-full max-w-4xl mx-auto bg-gradient-to-b from-black via-stone-900 to-zinc-950 border-stone-700">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-stone-100">Winter Arc</CardTitle>
                        <CardDescription className="text-stone-400">
                            Guía para completar el Winter ARC (1 de octubre - 1 de enero)
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-6 text-stone-300">
                            Bienvenidos a todos, esta es la guía oficial que deberán cumplir todos los integrantes del grupo. El propósito del Winter Arc es que todos los que estén dispuestos a cumplirlo saquen su mejor versión de sí mismos, para que crezcan tanto en el ámbito económico, físico y mental.
                        </p>
                        <ScrollArea className="h-[60vh]">
                            <Accordion type="single" collapsible className="w-full">
                                {rules.map((rule, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-stone-700">
                                        <AccordionTrigger className="text-stone-100 hover:text-stone-300">
                                            <div className="flex justify-between items-center w-full pr-4">
                                                <span>{rule.title}</span>
                                                <Badge
                                                    variant="outline"
                                                    className={`${rule.type === 'obligatoria' ? 'bg-red-900 text-red-100' : 'bg-yellow-900 text-yellow-100'
                                                        } min-w-[90px] justify-center`}
                                                >
                                                    {rule.type}
                                                </Badge>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="text-stone-300">
                                            {rule.content}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
