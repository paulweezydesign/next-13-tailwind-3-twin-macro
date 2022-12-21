import * as React from 'react'
import type * as Polymorphic from '@reach/utils/polymorphic'
import tw from 'twin.macro'

import InfiniteSpinner from './InfiniteSpinner'
import { MacroBase } from '../../types/twin'
import { focus } from '~styles/utility'

interface ButtonPropsPrimitive
  extends React.ComponentPropsWithoutRef<'button'> {
  as?: 'button' | 'div'
  size?: 'small' | 'medium' | 'large'
  variation?:
    | 'blank'
    | 'outline'
    | 'primary'
    | 'outlinePrimary'
    | 'danger'
    | 'outlineDanger'
    | 'hover'
    | 'contrast'
  iconLeft?: React.ReactElement
  iconRight?: React.ReactElement
  iconStandalone?: React.ReactElement
  fullWidth?: boolean
  loading?: boolean
  circular?: boolean
}

type ButtonProps = ButtonPropsPrimitive & MacroBase

const Button = React.forwardRef(
  (
    {
      size = 'medium',
      variation = 'primary',
      iconLeft,
      iconRight,
      iconStandalone,
      disabled,
      loading,
      children,
      fullWidth,
      type = 'button',
      circular,
      ...rest
    },
    forwardedRef,
  ) => {
    const nonInteractive = disabled || loading

    return (
      <button
        type={rest.as ? undefined : type}
        css={{
          // Base
          ...tw`relative font-semibold duration-150`,
          ...focus,

          // Border radius
          ...(circular ? tw`rounded-full` : tw`rounded`),

          // Width variant
          ...(fullWidth ? tw`block w-full` : tw`inline-block`),

          // Hover-states
          ...(!nonInteractive &&
            variation !== 'hover' &&
            variation !== 'blank' &&
            tw`shadow-sm hover:(shadow-md brightness-105)`),

          // Sizes
          ...(size === 'small' && tw`text-xs`),
          ...(size === 'medium' && tw`text-sm`),
          ...(size === 'large' && tw`text-lg`),

          // Standalone icon
          ...(size === 'small'
            ? iconStandalone
              ? tw`w-7 h-7`
              : tw`px-3 h-7`
            : null),
          ...(size === 'medium'
            ? iconStandalone
              ? tw`w-9 h-9`
              : tw`px-3 h-9`
            : null),
          ...(size === 'large'
            ? iconStandalone
              ? tw`w-12 h-12`
              : tw`px-4 h-12`
            : null),

          // Primary
          ...(variation === 'primary' &&
            !nonInteractive &&
            tw`text-whiteA-12 bg-primary-9`),

          // Danger
          ...(variation === 'danger' &&
            !nonInteractive &&
            tw`text-whiteA-12 bg-danger-9`),

          // Hover (with <ToggleButton /> support)
          ...(variation === 'hover' &&
            !nonInteractive && {
              ...tw`hover:bg-slate-5`,

              '&[aria-pressed="true"]': tw`bg-slate-4`,
            }),

          // Outline (group)
          ...(['outlinePrimary', 'outlineDanger', 'outline'].includes(
            variation,
          ) && tw`border border-slate-7`),

          // Outline primary
          ...(variation === 'outlinePrimary' &&
            !nonInteractive &&
            tw`text-primary-11 border-primary-9 hover:bg-primary-2`),

          // Outline danger
          ...(variation === 'outlineDanger' &&
            !nonInteractive &&
            tw`text-danger-11 border-danger-9 hover:bg-danger-2`),

          // Outline
          ...(variation === 'outline' &&
            !nonInteractive &&
            tw`hover:(border-slate-8 bg-slate-4)`),

          // Contrast
          ...(variation === 'contrast' &&
            !nonInteractive &&
            tw`text-slate-1 bg-slate-12`),

          // Intermediary states
          ...(nonInteractive && tw`text-slate-11 bg-slate-4`),
          ...(disabled && tw`cursor-not-allowed`),
        }}
        disabled={disabled}
        {...rest}
        ref={forwardedRef}
      >
        <span
          css={tw`flex space-x-2 place-content-center place-items-center h-full`}
        >
          {iconLeft && <span css={tw`text-bump`}>{iconLeft}</span>}
          {iconStandalone ? (
            <span css={tw`text-bump`}>{iconStandalone}</span>
          ) : (
            <span css={tw`line-clamp-1`}>{children}</span>
          )}
          {iconRight && <span css={tw`text-bump`}>{iconRight}</span>}
          {loading && <InfiniteSpinner size="bump" />}
        </span>
      </button>
    )
  },
) as Polymorphic.ForwardRefComponent<'button', ButtonProps>

export default Button
