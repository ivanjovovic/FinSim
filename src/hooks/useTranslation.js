import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../locales/translations';

export function useTranslation() {
  const { language } = useLanguage();
  
  const translate = (key) => {
    return t(language, key);
  };
  
  return { t: translate, language };
}
