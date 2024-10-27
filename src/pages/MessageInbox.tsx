import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { NavBar } from '@/components/common/NavBar'
import { Footer } from '@/components/common/Footer'

// Simulated message data
const messages = [
    { id: 1, title: "Bienvenido a la plataforma", content: "Esperamos que disfrutes de tu experiencia...", sender: "Admin", createdAt: "2023-05-01" },
    { id: 2, title: "Actualización importante", content: "Hemos añadido nuevas funcionalidades...", sender: "Sistema", createdAt: "2023-05-15" },
    { id: 3, title: "Recordatorio: Evento próximo", content: "No olvides nuestro evento del próximo...", sender: "Eventos", createdAt: "2023-05-20" },
]

export const MessageInbox = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const messagesPerPage = 5

    const filteredMessages = messages.filter(message =>
        message.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.content.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const indexOfLastMessage = currentPage * messagesPerPage
    const indexOfFirstMessage = indexOfLastMessage - messagesPerPage
    const currentMessages = filteredMessages.slice(indexOfFirstMessage, indexOfLastMessage)

    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-gradient-to-b from-black via-stone-900 to-zinc-950">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 className="text-3xl font-bold text-stone-100 mb-8">Bandeja de Entrada</h1>

                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="relative flex-grow">
                            <Input
                                type="text"
                                placeholder="Buscar mensajes..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-stone-800 text-stone-100 border-stone-700 focus:border-stone-500"
                            />
                            <Search className="absolute right-3 top-2.5 text-stone-400" />
                        </div>
                        <Select defaultValue="all">
                            <SelectTrigger className="w-full md:w-[180px] bg-stone-800 text-stone-100 border-stone-700">
                                <SelectValue placeholder="Filtrar por" />
                            </SelectTrigger>
                            <SelectContent className="bg-stone-800 text-stone-100 border-stone-700">
                                <SelectItem value="all">Todos los mensajes</SelectItem>
                                <SelectItem value="unread">No leídos</SelectItem>
                                <SelectItem value="read">Leídos</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-4">
                        {currentMessages.map((message) => (
                            <Card key={message.id} className="bg-stone-800 border-stone-700 hover:border-stone-600 transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="text-stone-100">{message.title}</CardTitle>
                                    <CardDescription className="text-stone-400">
                                        De: {message.sender} | Fecha: {message.createdAt}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-stone-300">{message.content}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="flex justify-between items-center mt-6">
                        <Button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="bg-stone-700 hover:bg-stone-600 text-stone-100"
                        >
                            <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
                        </Button>
                        <span className="text-stone-400">
                            Página {currentPage} de {Math.ceil(filteredMessages.length / messagesPerPage)}
                        </span>
                        <Button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredMessages.length / messagesPerPage)))}
                            disabled={indexOfLastMessage >= filteredMessages.length}
                            className="bg-stone-700 hover:bg-stone-600 text-stone-100"
                        >
                            Siguiente <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
