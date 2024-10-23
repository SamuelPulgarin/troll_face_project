import { LoginForm } from "@/components/auth/LoginForm"

export const LoginPage = () => {
  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden">
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/winter_video.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>

        {/* Contenido sobre el video */}
        <div className="relative z-10">
          <LoginForm />
        </div>
      </div>
      {/* <div className="bg-[url('/winter_background_5.jfif')] bg-fixed bg-center bg-cover bg-no-repeat">
        <LoginForm />
      </div> */}
    </>
  )
}
