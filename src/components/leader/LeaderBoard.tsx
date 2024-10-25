import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Search, Snowflake, Trophy, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const participants = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Winter Warrior ${i + 1}`,
    score: Math.floor(Math.random() * 1000) + 500,
    level: Math.floor(Math.random() * 30) + 10,
})).sort((a, b) => b.score - a.score);


export const LeaderBoard = () => {

    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10

    const filteredParticipants = participants
        .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))

    const pageCount = Math.ceil(filteredParticipants.length / itemsPerPage)
    const currentParticipants = filteredParticipants.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const getRankBadge = (index: number) => {
        if (index === 0) return <Trophy className="h-5 w-5 text-yellow-400" />
        if (index === 1) return <Trophy className="h-5 w-5 text-gray-400" />
        if (index === 2) return <Trophy className="h-5 w-5 text-amber-600" />
        if (index < 10) return <Star className="h-5 w-5 text-blue-400" />
        return null
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-stone-900 to-zinc-950 text-stone-100 p-2 sm:p-8 flex justify-center">
            <div className="w-full max-w-4xl mt-10">
                <Card className="bg-gradient-to-b from-black via-stone-900 to-zinc-950 border-stone-600 p-2 sm:p-6 overflow-hidden">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold text-center text-stone-100 flex items-center justify-center">
                            <Snowflake className="mr-2 text-blue-400" />
                            Winter Arc Clasificación
                            <Snowflake className="ml-2 text-blue-400" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="relative flex-1 mb-4">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-stone-400" />
                            <Input
                                placeholder="Search participants"
                                className="pl-8 bg-stone-700 text-stone-100 border-stone-600"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-stone-600 hover:bg-stone-700">
                                        <TableHead className="text-stone-100 min-w-[100px]">Posición</TableHead>
                                        <TableHead className="text-stone-100 min-w-[150px]">Nombre</TableHead>
                                        <TableHead className="text-stone-100 min-w-[100px]">Puntos</TableHead>
                                        <TableHead className="text-stone-100 min-w-[100px]">Nivel</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {currentParticipants.map((participant, index) => (
                                        <Dialog key={participant.id}>
                                            <DialogTrigger asChild>
                                                <TableRow className="border-stone-600 hover:bg-stone-700 cursor-pointer">
                                                    <TableCell className="font-medium">
                                                        <div className="flex items-center">
                                                            {getRankBadge(index + (currentPage - 1) * itemsPerPage)}
                                                            <span className="ml-2 text-stone-100">
                                                                {index + 1 + (currentPage - 1) * itemsPerPage}
                                                            </span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-stone-100">{participant.name}</TableCell>
                                                    <TableCell className="text-stone-100">{participant.score}</TableCell>
                                                    <TableCell className="text-stone-100">{participant.level}</TableCell>
                                                </TableRow>
                                            </DialogTrigger>
                                            <DialogContent className="bg-stone-800 text-stone-100 border-stone-600">
                                                <DialogHeader>
                                                    <DialogTitle className="text-2xl font-bold">{participant.name}</DialogTitle>
                                                </DialogHeader>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="text-center">
                                                        <p className="text-stone-400">Rank</p>
                                                        <p className="text-3xl font-bold">{index + 1 + (currentPage - 1) * itemsPerPage}</p>
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="text-stone-400">Score</p>
                                                        <p className="text-3xl font-bold">{participant.score}</p>
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="text-stone-400">Level</p>
                                                        <p className="text-3xl font-bold">{participant.level}</p>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <Button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="bg-stone-700 text-stone-100 hover:bg-stone-600"
                            >
                                Anterior
                            </Button>
                            <span className="text-stone-100">
                                Página {currentPage} de {pageCount}
                            </span>
                            <Button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
                                disabled={currentPage === pageCount}
                                className="bg-stone-700 text-stone-100 hover:bg-stone-600"
                            >
                                Siguiente
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
