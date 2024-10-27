import { Button } from "@/components/ui/button"
import { Inbox } from "lucide-react"
import { Link } from "react-router-dom"

export const MailBoxButton = ({ unreadCount = 3 }) => {
    return (
        <Link to={'/message'}>
            <Button
                variant="outline"
                size="icon"
                className="relative w-14 h-14 rounded-full bg-stone-800 border-2 border-stone-700 hover:bg-stone-700 hover:border-stone-600 transition-all duration-300 ease-in-out"
            >
                <Inbox className="w-6 h-6 text-stone-300" />
                {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                        {unreadCount}
                    </span>
                )}
            </Button>
        </Link>
    )
}
