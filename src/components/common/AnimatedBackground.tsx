
export const AnimatedBackground = () => {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-black via-stone-900 to-zinc-950">
          <ul className="circles">
            {[...Array(10)].map((_, index) => (
              <li key={index} className={`animate-animate`} />
            ))}
          </ul>
        </div>
      </div>
    );
  };