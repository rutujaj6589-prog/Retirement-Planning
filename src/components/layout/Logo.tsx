import { Users } from "lucide-react"

type LogoProps = {
  variant?: "default" | "on-dark"
}

const Logo = ({ variant = "default" }: LogoProps) => {
  const isOnDark = variant === "on-dark"

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-[0_12px_28px_rgba(212,118,42,0.28)] ${
          isOnDark
            ? "bg-white"
            : "bg-gradient-to-br from-[#e8a045] to-[#d4762a]"
        }`}
      >
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full ${
            isOnDark
              ? "bg-gradient-to-br from-[#e8a045] to-[#d4762a]"
              : "bg-white"
          }`}
        >
          <Users className={`w-5 h-5 ${isOnDark ? "text-white" : "text-[#d4762a]"}`} />
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-bold tracking-tight ${isOnDark ? "text-white" : "text-[#1a1a2e]"}`}>
          Family First
        </span>
        <span className={`text-[10px] uppercase tracking-[0.35em] font-bold ${isOnDark ? "text-[#e8a045]" : "text-[#d4762a]"}`}>
          Insurance
        </span>
      </div>
    </div>
  )
}

export default Logo
