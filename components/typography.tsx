import * as React from 'react'

type TextProps = {
  children: React.ReactNode
}

export function HeroTitle({ children }: TextProps) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-primary">{children}</h1>
  )
}

export function HeroSubtitle({ children }: TextProps) {
  return (
    <h2 className="text-xl text-primary-foreground">{children}</h2>
  )
}