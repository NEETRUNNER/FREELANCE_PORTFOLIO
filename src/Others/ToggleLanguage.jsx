import { Switch } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

import { useState, useEffect } from 'react';

const SwitchLanguage = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [enabled, setEnabled] = useState(i18n.language === 'ru');

  // Изменяем язык при изменении состояния свитча
  const handleChange = (isEnabled) => {
    const newLanguage = isEnabled ? 'ua' : 'ru';
    i18n.changeLanguage(newLanguage);
    setEnabled(isEnabled);
  };

  // Устанавливаем корректное состояние свитча при загрузке компонента
  useEffect(() => {
    setEnabled(i18n.language === 'ua');
  }, [i18n.language]);

  return (
    <div className="switch flex pt-5">
      <h1 className="text-lg font-semibold mr-2 lg:block xs:hidden">{t('language')}</h1>
      <Switch
        checked={enabled}
        onChange={handleChange}
        className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex h-[30px] w-[66px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
      >
        <span className="sr-only">Switch Language</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default SwitchLanguage;