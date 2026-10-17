/**
 * Idiomas em que o app fala. O criterio e objetivo: todo idioma em que a Play
 * Console publica ficha de loja e que o Android oferece como idioma do sistema
 * (o romanche fica de fora porque o Android nao tem). Quem usa um idioma fora
 * da lista recebe o ingles — no JS e no overlay nativo, que le `values/`.
 *
 * `android` e o sufixo da pasta `res/values-*`. Segue o que o proprio Android
 * resolve, nao o BCP-47 puro: `ResourcesImpl` troca `he` por `iw` e `id` por `in`
 * antes de procurar o recurso, entao a pasta precisa do codigo antigo. `''` e a
 * pasta `values/` sem qualificador.
 *
 * `escrita` (ISO 15924) existe pra recusar a tag do aparelho que pede outra
 * escrita do mesmo idioma: `sr-Latn` nao pode receber o servio cirilico, porque o
 * Android tambem nao entrega `values-sr` pra ela — e os dois lados divergiriam.
 */
export const IDIOMAS = [
  { tag: 'pt-BR', nome: 'Português (Brasil)', android: 'pt', escrita: 'Latn', rtl: false },
  { tag: 'pt-PT', nome: 'Português (Portugal)', android: 'pt-rPT', escrita: 'Latn', rtl: false },
  { tag: 'en', nome: 'English', android: '', escrita: 'Latn', rtl: false },
  { tag: 'es', nome: 'Español (España)', android: 'es', escrita: 'Latn', rtl: false },
  {
    tag: 'es-419',
    nome: 'Español (Latinoamérica)',
    android: 'b+es+419',
    escrita: 'Latn',
    rtl: false,
  },
  { tag: 'fr', nome: 'Français', android: 'fr', escrita: 'Latn', rtl: false },
  { tag: 'de', nome: 'Deutsch', android: 'de', escrita: 'Latn', rtl: false },
  { tag: 'it', nome: 'Italiano', android: 'it', escrita: 'Latn', rtl: false },
  { tag: 'nl', nome: 'Nederlands', android: 'nl', escrita: 'Latn', rtl: false },
  { tag: 'ru', nome: 'Русский', android: 'ru', escrita: 'Cyrl', rtl: false },
  { tag: 'uk', nome: 'Українська', android: 'uk', escrita: 'Cyrl', rtl: false },
  { tag: 'pl', nome: 'Polski', android: 'pl', escrita: 'Latn', rtl: false },
  { tag: 'cs', nome: 'Čeština', android: 'cs', escrita: 'Latn', rtl: false },
  { tag: 'sk', nome: 'Slovenčina', android: 'sk', escrita: 'Latn', rtl: false },
  { tag: 'hu', nome: 'Magyar', android: 'hu', escrita: 'Latn', rtl: false },
  { tag: 'ro', nome: 'Română', android: 'ro', escrita: 'Latn', rtl: false },
  { tag: 'bg', nome: 'Български', android: 'bg', escrita: 'Cyrl', rtl: false },
  { tag: 'hr', nome: 'Hrvatski', android: 'hr', escrita: 'Latn', rtl: false },
  { tag: 'sr', nome: 'Српски', android: 'sr', escrita: 'Cyrl', rtl: false },
  { tag: 'sl', nome: 'Slovenščina', android: 'sl', escrita: 'Latn', rtl: false },
  { tag: 'el', nome: 'Ελληνικά', android: 'el', escrita: 'Grek', rtl: false },
  { tag: 'tr', nome: 'Türkçe', android: 'tr', escrita: 'Latn', rtl: false },
  { tag: 'ar', nome: 'العربية', android: 'ar', escrita: 'Arab', rtl: true },
  { tag: 'he', nome: 'עברית', android: 'iw', escrita: 'Hebr', rtl: true },
  { tag: 'fa', nome: 'فارسی', android: 'fa', escrita: 'Arab', rtl: true },
  { tag: 'ur', nome: 'اردو', android: 'ur', escrita: 'Arab', rtl: true },
  { tag: 'hi', nome: 'हिन्दी', android: 'hi', escrita: 'Deva', rtl: false },
  { tag: 'bn', nome: 'বাংলা', android: 'bn', escrita: 'Beng', rtl: false },
  { tag: 'mr', nome: 'मराठी', android: 'mr', escrita: 'Deva', rtl: false },
  { tag: 'te', nome: 'తెలుగు', android: 'te', escrita: 'Telu', rtl: false },
  { tag: 'ta', nome: 'தமிழ்', android: 'ta', escrita: 'Taml', rtl: false },
  { tag: 'gu', nome: 'ગુજરાતી', android: 'gu', escrita: 'Gujr', rtl: false },
  { tag: 'kn', nome: 'ಕನ್ನಡ', android: 'kn', escrita: 'Knda', rtl: false },
  { tag: 'ml', nome: 'മലയാളം', android: 'ml', escrita: 'Mlym', rtl: false },
  { tag: 'pa', nome: 'ਪੰਜਾਬੀ', android: 'pa', escrita: 'Guru', rtl: false },
  { tag: 'zh-Hans', nome: '简体中文', android: 'b+zh+Hans', escrita: 'Hans', rtl: false },
  { tag: 'zh-Hant', nome: '繁體中文', android: 'b+zh+Hant', escrita: 'Hant', rtl: false },
  { tag: 'ja', nome: '日本語', android: 'ja', escrita: 'Jpan', rtl: false },
  { tag: 'ko', nome: '한국어', android: 'ko', escrita: 'Kore', rtl: false },
  { tag: 'vi', nome: 'Tiếng Việt', android: 'vi', escrita: 'Latn', rtl: false },
  { tag: 'th', nome: 'ไทย', android: 'th', escrita: 'Thai', rtl: false },
  { tag: 'id', nome: 'Bahasa Indonesia', android: 'in', escrita: 'Latn', rtl: false },
  { tag: 'ms', nome: 'Bahasa Melayu', android: 'ms', escrita: 'Latn', rtl: false },
  { tag: 'fil', nome: 'Filipino', android: 'b+fil', escrita: 'Latn', rtl: false },
  { tag: 'sv', nome: 'Svenska', android: 'sv', escrita: 'Latn', rtl: false },
  { tag: 'da', nome: 'Dansk', android: 'da', escrita: 'Latn', rtl: false },
  { tag: 'nb', nome: 'Norsk bokmål', android: 'nb', escrita: 'Latn', rtl: false },
  { tag: 'fi', nome: 'Suomi', android: 'fi', escrita: 'Latn', rtl: false },
  { tag: 'et', nome: 'Eesti', android: 'et', escrita: 'Latn', rtl: false },
  { tag: 'lv', nome: 'Latviešu', android: 'lv', escrita: 'Latn', rtl: false },
  { tag: 'lt', nome: 'Lietuvių', android: 'lt', escrita: 'Latn', rtl: false },
  { tag: 'ca', nome: 'Català', android: 'ca', escrita: 'Latn', rtl: false },
  { tag: 'sw', nome: 'Kiswahili', android: 'sw', escrita: 'Latn', rtl: false },
  { tag: 'af', nome: 'Afrikaans', android: 'af', escrita: 'Latn', rtl: false },
  { tag: 'zu', nome: 'isiZulu', android: 'zu', escrita: 'Latn', rtl: false },
  { tag: 'am', nome: 'አማርኛ', android: 'am', escrita: 'Ethi', rtl: false },
  { tag: 'az', nome: 'Azərbaycan', android: 'az', escrita: 'Latn', rtl: false },
  { tag: 'kk', nome: 'Қазақ', android: 'kk', escrita: 'Cyrl', rtl: false },
  { tag: 'ka', nome: 'ქართული', android: 'ka', escrita: 'Geor', rtl: false },
  { tag: 'hy', nome: 'Հայերեն', android: 'hy', escrita: 'Armn', rtl: false },
  { tag: 'km', nome: 'ខ្មែរ', android: 'km', escrita: 'Khmr', rtl: false },
  { tag: 'lo', nome: 'ລາວ', android: 'lo', escrita: 'Laoo', rtl: false },
  { tag: 'my', nome: 'မြန်မာ', android: 'my', escrita: 'Mymr', rtl: false },
  { tag: 'ne', nome: 'नेपाली', android: 'ne', escrita: 'Deva', rtl: false },
  { tag: 'si', nome: 'සිංහල', android: 'si', escrita: 'Sinh', rtl: false },
  { tag: 'mn', nome: 'Монгол', android: 'mn', escrita: 'Cyrl', rtl: false },
  { tag: 'be', nome: 'Беларуская', android: 'be', escrita: 'Cyrl', rtl: false },
  { tag: 'mk', nome: 'Македонски', android: 'mk', escrita: 'Cyrl', rtl: false },
  { tag: 'sq', nome: 'Shqip', android: 'sq', escrita: 'Latn', rtl: false },
  { tag: 'is', nome: 'Íslenska', android: 'is', escrita: 'Latn', rtl: false },
  { tag: 'eu', nome: 'Euskara', android: 'eu', escrita: 'Latn', rtl: false },
  { tag: 'gl', nome: 'Galego', android: 'gl', escrita: 'Latn', rtl: false },
  { tag: 'ky', nome: 'Кыргызча', android: 'ky', escrita: 'Cyrl', rtl: false },
] as const;

export type Idioma = (typeof IDIOMAS)[number]['tag'];

/** O que fala com quem o app nao entende. Tambem e o `values/` do Android. */
export const IDIOMA_PADRAO: Idioma = 'en';

/** Onde o texto nasce. Todo outro catalogo e traducao deste. */
export const IDIOMA_FONTE: Idioma = 'pt-BR';
