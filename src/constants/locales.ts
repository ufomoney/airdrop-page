export const SUPPORTED_LOCALES = ['ru-RU'] as const
export type SupportedLocale = typeof SUPPORTED_LOCALES[number]

export const DEFAULT_LOCALE: SupportedLocale = 'ru-RU'

export const LOCALE_LABEL: { [locale in SupportedLocale]: string } = {
  'ru-RU': 'русский',
}
