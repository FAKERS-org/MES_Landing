import React from "react";
import { Box, Lock, Sparkles, Settings, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTranslation, type TranslationKey } from "@/lib/i18n";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  isTall?: boolean;
  hasGradientBorder?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = "",
  isTall = false,
  hasGradientBorder = false,
}) => {
  return (
    <Card
      className={cn(
        "relative h-full max-w-none bg-white border border-gray-200",
        "hover:shadow-lg transition-shadow duration-300",
        isTall && "md:row-span-2",
        className,
      )}
    >
      <CardContent className="p-8 h-full">
        <div className="w-11 h-11 border-[1.5px] border-gray-300 rounded-lg flex items-center justify-center mb-6 text-gray-700">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </CardContent>
      {hasGradientBorder && (
        <div className="absolute bottom-0 left-8 right-8 h-[3px] rounded-sm bg-gradient-to-r from-pink-400 via-yellow-400 to-emerald-400" />
      )}
    </Card>
  );
};

const FEATURES: {
  icon: React.ReactNode;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  isTall?: boolean;
  hasGradientBorder?: boolean;
}[] = [
  {
    icon: <Box className="w-5 h-5" />,
    titleKey: "feature.lessonsTitle",
    descKey: "feature.lessonsDesc",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    titleKey: "feature.techTitle",
    descKey: "feature.techDesc",
    isTall: true,
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    titleKey: "feature.usersTitle",
    descKey: "feature.usersDesc",
    hasGradientBorder: true,
  },
  {
    icon: <Settings className="w-5 h-5" />,
    titleKey: "feature.abilityTitle",
    descKey: "feature.abilityDesc",
  },
  {
    icon: <Search className="w-5 h-5" />,
    titleKey: "feature.subjectsTitle",
    descKey: "feature.subjectsDesc",
  },
];

export const SectionFeature: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white rounded-3xl p-6 md:p-10">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.titleKey}
              icon={feature.icon}
              title={t(feature.titleKey)}
              description={t(feature.descKey)}
              isTall={feature.isTall}
              hasGradientBorder={feature.hasGradientBorder}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFeature;
