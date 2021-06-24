export default {
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}',
      include: ['<rootDir>/src'],
    },
  ],
  compileNamespace: 'cjs',
  fallbackLocales: {
    default: 'ru-RU',
  },
  format: 'po',
  formatOptions: {
    lineNumbers: false,
  },
  locales: ['en-US', 'ru-RU'],
  orderBy: 'messageId',
  rootDir: '.',
  runtimeConfigModule: ['@lingui/core', 'i18n'],
  sourceLocale: 'ru-RU',
}
