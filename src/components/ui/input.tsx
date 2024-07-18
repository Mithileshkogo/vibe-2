import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string
  icon: any
  shouldIconshow?: boolean
  iconDirection?: string
}


const Input = ({ className, placeholder, type, labelText, icon, shouldIconshow, iconDirection, ...props }: InputProps) => {
  return (
    <>

      <label className="text-placeholdertext figtree font-light text-[12px] mb-1 flex">{labelText}</label >
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          "flex h-10 w-full rounded-[10px] border border-textprimary bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-light placeholder:text-placeholdertext focus:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
          className
        )}

        {...props}
      />
    </>
  )
}

Input.displayName = "Input"

export { Input }
