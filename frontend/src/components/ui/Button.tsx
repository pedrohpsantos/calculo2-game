import React from 'react'
import { cn } from '@/lib/utils'
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'math'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  is3D?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', is3D = true, children, ...props }, ref) => {
    
    const baseStyles = "relative inline-flex items-center justify-center font-display tracking-wider text-sm transition-all overflow-hidden select-none"
    
    // Size variations
    const sizes = {
      sm: "h-10 px-4 text-xs rounded-xl",
      md: "h-14 px-6 text-sm rounded-2xl",
      lg: "h-16 px-8 text-base rounded-2xl",
      icon: "h-14 w-14 rounded-2xl"
    }

    // Color/Theme variations
    const variants = {
      primary: "bg-[#FFC800] text-black border-[#B38C02]",
      secondary: "bg-[#4ECDC4] text-black border-[#2B9A93]",
      danger: "bg-[#FF6B6B] text-white border-[#C92A2A]",
      math: "bg-[#845EF7] text-white border-[#5F3DC4]",
      ghost: "bg-white/10 text-white border-transparent hover:bg-white/20"
    }

    // 3D Shadow effects based on variant
    const shadows3D = {
      primary: "shadow-[0_6px_0_#B38C02,0_15px_20px_rgba(255,200,0,0.4)] active:shadow-[0_0px_0_#B38C02,0_0px_0px_rgba(255,200,0,0.4)] active:translate-y-[6px]",
      secondary: "shadow-[0_6px_0_#2B9A93,0_15px_20px_rgba(78,205,196,0.4)] active:shadow-[0_0px_0_#2B9A93,0_0px_0px_rgba(78,205,196,0.4)] active:translate-y-[6px]",
      danger: "shadow-[0_6px_0_#C92A2A,0_15px_20px_rgba(255,107,107,0.4)] active:shadow-[0_0px_0_#C92A2A,0_0px_0px_rgba(255,107,107,0.4)] active:translate-y-[6px]",
      math: "shadow-[0_6px_0_#5F3DC4,0_15px_20px_rgba(132,94,247,0.4)] active:shadow-[0_0px_0_#5F3DC4,0_0px_0px_rgba(132,94,247,0.4)] active:translate-y-[6px]",
      ghost: "active:scale-95"
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          sizes[size],
          variants[variant],
          is3D ? shadows3D[variant] : "",
          is3D && variant !== 'ghost' ? "border-b-4 border-r-2 border-t border-l hover:-translate-y-1 hover:shadow-[0_8px_0_var(--tw-shadow-color),0_20px_25px_var(--tw-shadow-color)]" : "border active:scale-95",
          className
        )}
        {...props}
      >
        {/* Subtle inner highlight for 3D effect */}
        {is3D && variant !== 'ghost' && (
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-white/20 rounded-t-xl pointer-events-none" />
        )}
        
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    )
  }
)
Button.displayName = 'Button'
