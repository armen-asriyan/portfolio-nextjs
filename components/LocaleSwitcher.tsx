"use client";

import { useLocale, useTranslations } from "next-intl";
import { SelectItem } from "@/components/ui/select";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "@/components/LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {routing.locales.map((cur) => (
        <SelectItem key={cur} value={cur}>
          {cur.toUpperCase()}
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  );
}
