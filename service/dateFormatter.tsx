import { format, parseISO } from 'date-fns';
import { de, enUS, ru } from 'date-fns/locale';

type propsType = {
  dateString: Date | string;
  locale?: string;
};

export const DateFormatter = ({ dateString = new Date(), locale = 'de' }: propsType) => {
  const date = parseISO(dateString.toString());

  const localesMap = {
    ru: ru,
    enUS: enUS,
    de: de,
  };

  const chosenLocale = localesMap[locale] || de;

  const ariaLabel = `Posted on ${format(date, 'd LLLL, yyyy', { locale: chosenLocale })}`;
  const timeCode = format(date, 'LLLL d, yyyy', { locale: chosenLocale });

  return (
    <time dateTime={dateString.toString()} aria-label={ariaLabel}>
      {timeCode}
    </time>
  );
};

export default DateFormatter;
