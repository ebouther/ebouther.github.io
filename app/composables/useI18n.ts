import { fr } from '../locales/fr'
import { en } from '../locales/en'

type Dict = Record<string, unknown>
type Locale = 'fr' | 'en'

const LOCALE_KEY = 'eb-locale'
const locales: Record<Locale, Dict> = { fr, en }

function getSavedLocale(): Locale | null {
  if (import.meta.client) {
    const saved = localStorage.getItem(LOCALE_KEY)
    if (saved === 'fr' || saved === 'en') return saved
  }
  return null
}

function detectBrowserLocale(): Locale {
  if (import.meta.client) {
    return navigator.language?.startsWith('fr') ? 'fr' : 'en'
  }
  return 'fr'
}

const locale = ref<Locale>(getSavedLocale() ?? 'fr')

function resolve(path: string): unknown {
  const keys = path.split('.')
  let result: unknown = locales[locale.value]
  for (const k of keys) {
    if (result == null || typeof result !== 'object') return undefined
    result = (result as Dict)[k]
  }
  return result
}

export function useI18n() {
  function t(path: string): string {
    const val = resolve(path)
    return typeof val === 'string' ? val : path
  }

  function tv(path: string): unknown {
    return resolve(path)
  }

  function setLocale(l: Locale) {
    locale.value = l
    if (import.meta.client) {
      localStorage.setItem(LOCALE_KEY, l)
    }
  }

  function toggleLocale() {
    setLocale(locale.value === 'fr' ? 'en' : 'fr')
  }

  function initLocale() {
    if (!getSavedLocale()) {
      setLocale(detectBrowserLocale())
    }
  }

  const isFr = computed(() => locale.value === 'fr')

  return { locale, isFr, t, tv, setLocale, toggleLocale, initLocale }
}
