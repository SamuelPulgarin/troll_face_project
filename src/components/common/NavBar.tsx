import { Snowflake, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"
import { Link } from "react-router-dom"

const navItems = [
    { title: "Inicio", href: "/home" },
    { title: "Acerca de", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
]

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Snowflake className="h-8 w-8 text-white" />
                        <span className="ml-2 text-2xl font-bold text-white">Winter Arc</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Button
                                    key={item.title}
                                    variant="ghost"
                                    asChild
                                    className="text-white hover:bg-white/50"
                                >
                                    <Link to={`${item.href}`}>{item.title}</Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" className="px-2 text-white hover:bg-white/10">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[240px] sm:w-[300px] bg-black border-l border-white/20">
                                <nav className="flex flex-col space-y-4 mt-4">
                                    {navItems.map((item) => (
                                        <Button
                                            key={item.title}
                                            variant="ghost"
                                            asChild
                                            className="justify-start text-white hover:bg-white/10"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <Link to={`${item.href}`}>{item.title}</Link>
                                        </Button>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}