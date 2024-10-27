import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Props {
  img: string;
  quote: string;
  name: string;
  role: string;
}

export default function FancyTestimonialsSlider({ testimonials }: { testimonials: Props[] }) {
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number>(0)
  const [autorotate, setAutorotate] = useState<boolean>(true)
  const autorotateTiming: number = 7000

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === testimonials.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate])

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement) testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-stone-900 to-zinc-950 animate-background-animate'>
      <div className="w-full max-w-3xl mx-auto text-center">
        {/* Testimonial image */}
        <div className="relative h-32">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-stone-500/25 before:via-stone-500/5 before:via-25% before:to-stone-500/0 before:to-75% before:rounded-full before:-z-10">
            <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">

              {testimonials.map((testimonial, index) => (
                <Transition
                  as="div"
                  key={index}
                  show={active === index}
                  className="absolute inset-0 h-full -z-10"
                  enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                  enterFrom="opacity-0 -rotate-[60deg]"
                  enterTo="opacity-100 rotate-0"
                  leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                  leaveFrom="opacity-100 rotate-0"
                  leaveTo="opacity-0 rotate-[60deg]"
                  beforeEnter={() => heightFix()}
                >
                  <img className="relative top-11 left-1/2 -translate-x-1/2 rounded-full" src={testimonial.img} width={56} height={56} alt={testimonial.name} />
                </Transition>
              ))}

            </div>
          </div>
        </div>
        {/* Text */}
        <div className="mb-9 transition-all duration-150 delay-300 ease-in-out">
          <div className="relative flex flex-col" ref={testimonialsRef}>

            {testimonials.map((testimonial, index) => (
              <Transition
                as="div"
                key={index}
                show={active === index}
                enter="transition ease-in-out duration-500 delay-200 order-first"
                enterFrom="opacity-0 -translate-x-4"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-out duration-300 delay-300 absolute"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-4"
                beforeEnter={() => heightFix()}
              >
                <div className="text-2xl font-bold text-stone-400 before:content-['\201C'] after:content-['\201D'] bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.stone.400),theme(colors.gray.100),theme(colors.zinc.400),theme(colors.gray.400),theme(colors.slate.400),theme(colors.stone.100),theme(colors.stone.400))] bg-[length:200%_auto] animate-gradient">{testimonial.quote}</div>
              </Transition>
            ))}

          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-wrap justify-center -m-1.5">

          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-stone-300 dark:focus-visible:ring-stone-600 transition-colors duration-150 ${active === index ? 'bg-stone-800 text-stone-100 shadow-indigo-950/10' : 'bg-stone-300 hover:bg-stone-200 text-slate-900'}`}
              onClick={() => { setActive(index); setAutorotate(false); }}
            >
              <span>{testimonial.name}</span> <span className={`${active === index ? 'text-indigo-200' : 'text-slate-300'}`}>-</span> <span>{testimonial.role}</span>
            </button>
          ))}
        </div>

        <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-6">Winter Arc Challenge Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-stone-800 border-stone-700">
            <CardHeader>
              <CardTitle className="text-4xl text-stone-400 font-bold">1,500+</CardTitle>
              <CardDescription className="text-stone-400">Participantes Activos</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-stone-800 border-stone-700">
            <CardHeader>
              <CardTitle className="text-4xl text-stone-400 font-bold">50+</CardTitle>
              <CardDescription className="text-stone-400">Desafios Winter</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-stone-800 border-stone-700">
            <CardHeader>
              <CardTitle className="text-4xl text-stone-400 font-bold">98%</CardTitle>
              <CardDescription className="text-stone-400">Satisfacción en la comunidad</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
      </div>
    </div>
  )
}
