import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('site');

  return (
      <h1>
          AUTH
      </h1>
  );
}
