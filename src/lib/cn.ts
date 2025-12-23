import { twMerge } from 'tailwind-merge'
import { classNames } from './classNames'

export function cn(...inputs: Array<string | false | null | undefined>) {
  return twMerge(classNames(...inputs))
}
