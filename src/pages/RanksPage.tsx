import { GameRank } from '@/components/ranges/GameRank';
import { NavBar } from '../components/common/NavBar';
import { Footer } from '@/components/common/Footer';

export const RanksPage = () => {
    return (
        <>
            <NavBar />
            <div className='bg-gradient-to-b from-black via-stone-900 to-zinc-950'>
                <GameRank />
            </div>
            <Footer />
        </>
    )
}
