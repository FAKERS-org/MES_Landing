import React from "react";
import { ArrowUpRight, Box, Check, Lock, Search, Settings, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTranslation, type TranslationKey } from "@/lib/i18n";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  detailsLabel: string;
  footnote: string;
  index: number;
  className?: string;
  isTall?: boolean;
  hasGradientBorder?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  details,
  detailsLabel,
  footnote,
  index,
  className = "",
  isTall = false,
  hasGradientBorder = false,
}) => {
  return (
    <Card
      className={cn(
        "group relative flex h-full overflow-hidden rounded-2xl border border-gray-200 bg-white py-0 shadow-sm",
        "transition-shadow duration-300 hover:shadow-lg",
        isTall && "md:row-span-2",
        className,
      )}
    >
      {hasGradientBorder && (
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500" />
      )}

      <CardContent className="flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-700">
            {icon}
          </div>
          <span className="rounded-full border border-gray-100 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-400">
            {String(index).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold leading-snug text-gray-900 sm:text-2xl">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">{description}</p>
        </div>

        <div className="mt-6 flex-1">
          <div className="h-px w-full bg-gray-100" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">{detailsLabel}</p>
          <ul className="mt-4 space-y-3.5">
            {details.map((detail) => (
              <li key={detail} className="flex items-start gap-2.5 text-sm leading-6 text-gray-600">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
          <span className="text-xs font-medium text-gray-400">{footnote}</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-300 transition-colors duration-300 group-hover:border-blue-200 group-hover:text-blue-600">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </CardContent>

      {!hasGradientBorder && (
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
    </Card>
  );
};

const FEATURES: {
  icon: React.ReactNode;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  detailsKeys: TranslationKey[];
  isTall?: boolean;
  hasGradientBorder?: boolean;
}[] = [
  {
    icon: <Box className="h-5 w-5" />,
    titleKey: "feature.lessonsTitle",
    descKey: "feature.lessonsDesc",
    detailsKeys: [
      "feature.lessonsDetail1",
      "feature.lessonsDetail2",
      "feature.lessonsDetail3",
    ],
  },
  {
    icon: <Lock className="h-5 w-5" />,
    titleKey: "feature.techTitle",
    descKey: "feature.techDesc",
    detailsKeys: [
      "feature.techDetail1",
      "feature.techDetail2",
      "feature.techDetail3",
    ],
    isTall: true,
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    titleKey: "feature.usersTitle",
    descKey: "feature.usersDesc",
    detailsKeys: [
      "feature.usersDetail1",
      "feature.usersDetail2",
      "feature.usersDetail3",
    ],
    hasGradientBorder: true,
  },
  {
    icon: <Settings className="h-5 w-5" />,
    titleKey: "feature.abilityTitle",
    descKey: "feature.abilityDesc",
    detailsKeys: [
      "feature.abilityDetail1",
      "feature.abilityDetail2",
      "feature.abilityDetail3",
    ],
  },
  {
    icon: <Search className="h-5 w-5" />,
    titleKey: "feature.subjectsTitle",
    descKey: "feature.subjectsDesc",
    detailsKeys: [
      "feature.subjectsDetail1",
      "feature.subjectsDetail2",
      "feature.subjectsDetail3",
    ],
  },
];

export const SectionFeature: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full rounded-3xl bg-white p-6 md:p-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-[minmax(0,1fr)_minmax(0,1fr)] md:gap-6">
        {FEATURES.map((feature, index) => (
          <FeatureCard
            key={feature.titleKey}
            icon={feature.icon}
            title={t(feature.titleKey)}
            description={t(feature.descKey)}
            details={feature.detailsKeys.map((detailKey) => t(detailKey))}
            detailsLabel={t("feature.detailsLabel")}
            footnote={t("feature.cardFootnote")}
            index={index + 1}
            isTall={feature.isTall}
            hasGradientBorder={feature.hasGradientBorder}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionFeature;
