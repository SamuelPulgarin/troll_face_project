import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { HelpCircle } from "lucide-react"

const pointsTable = [
    { percentage: "90-100%", points: 100 },
    { percentage: "80-89%", points: 80 },
    { percentage: "70-79%", points: 60 },
    { percentage: "60-69%", points: 40 },
    { percentage: "50-59%", points: 20 },
    { percentage: "0-49%", points: 0 },
]

export const WinPointsTable = () => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                variant="secondary"
                                size="sm"
                                className="fixed bottom-4 right-4 bg-stone-700 hover:bg-stone-600 text-stone-100"
                            >
                                <HelpCircle className="mr-2 h-4 w-4" />
                                ¿Cómo subir de rango?
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-stone-800 text-stone-100 border-stone-700">
                            <DialogHeader>
                                <DialogTitle>Cómo subir de rango</DialogTitle>
                            </DialogHeader>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-stone-300">Porcentaje de constancia</TableHead>
                                        <TableHead className="text-stone-300">Puntos ganados</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {pointsTable.map((row) => (
                                        <TableRow key={row.percentage}>
                                            <TableCell className="text-stone-300">{row.percentage}</TableCell>
                                            <TableCell className="text-stone-300">{row.points}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </DialogContent>
                    </Dialog>
                </TooltipTrigger>
                <TooltipContent className="bg-stone-700 text-stone-100 border-stone-600">
                    <p>Gana partidas para acumular puntos y subir de rango</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
