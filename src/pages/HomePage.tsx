import { NavBar } from "@/components/common/NavBar"
import Particles from "@/components/home/Particles"
import { WelcomeScreen } from "@/components/home/WelcomeScreen"

export const HomePage = () => {
    return (
        <>
            <NavBar />
            <WelcomeScreen />
            <Particles className="absolute inset-0 pointer-events-none" quantity={50} />
        </>
    )
}
