import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { defaultLocale, languages } from '@/utils/locale';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: Object.keys(languages),

    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale,
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
