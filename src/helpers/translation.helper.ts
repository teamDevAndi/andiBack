export function getTranslation(obj: Record<string, string>, lang: string): string {
  return obj?.[lang] ?? obj?.['en'] ?? '';
}
