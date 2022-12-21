import * as React from 'react'
import tw from 'twin.macro'
import { MacroBase } from '../../types/twin'

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & MacroBase

export const PageTitle: React.FC<HeadingProps> = props => {
  return <h1 css={tw`font-extrabold text-7xl`} {...props} />
}

export const SectionTitle: React.FC<HeadingProps> = props => {
  return <h2 css={tw`font-extrabold text-4xl`} {...props} />
}

export const Subtitle: React.FC<HeadingProps> = props => {
  return <h3 css={tw`font-extrabold text-2xl`} {...props} />
}
