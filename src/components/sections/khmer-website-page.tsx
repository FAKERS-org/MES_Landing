import React from "react";

interface PageT {
  goalTitle: string;
  goalText: string;
  featuresTitle: string;
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  feature3Title: string;
  feature3Desc: string;
  howToTitle: string;
  howTo1: string;
  howTo2: string;
  howTo3: string;
  howTo4: string;
  testimonialsTitle: string;
  testimonial1Name: string;
  testimonial1Text: string;
  testimonial2Name: string;
  testimonial2Text: string;
  testimonial3Name: string;
  testimonial3Text: string;
  aboutTitle: string;
  aboutText: string;
}

const GoalCard: React.FC<{ t: PageT }> = ({ t }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow flex items-center mb-6">
      <div className="flex-1">
        <h2 className="text-xl font-bold text-blue-700 mb-4">{t.goalTitle}</h2>
        <p className="text-gray-700 mb-2">{t.goalText}</p>
      </div>
    </div>
  );
};

const FeatureItem: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-start mb-4">
      <div className="w-2 h-2 mt-2 mr-3 bg-blue-700 rounded-full" />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const SpecialitySection: React.FC<{ t: PageT }> = ({ t }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold text-blue-700 mb-4">
        {t.featuresTitle}
      </h2>
      <FeatureItem title={t.feature1Title} description={t.feature1Desc} />
      <FeatureItem title={t.feature2Title} description={t.feature2Desc} />
      <FeatureItem title={t.feature3Title} description={t.feature3Desc} />
    </div>
  );
};

const HowToSection: React.FC<{ t: PageT }> = ({ t }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold text-blue-700 mb-4">{t.howToTitle}</h2>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        <li>{t.howTo1}</li>
        <li>{t.howTo2}</li>
        <li>{t.howTo3}</li>
        <li>{t.howTo4}</li>
      </ol>
    </div>
  );
};

const TestimonialsSection: React.FC<{ t: PageT }> = ({ t }) => {
  const testimonials = [
    { name: t.testimonial1Name, text: t.testimonial1Text, initials: "A" },
    { name: t.testimonial2Name, text: t.testimonial2Text, initials: "B" },
    { name: t.testimonial3Name, text: t.testimonial3Text, initials: "C" },
  ];
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold text-blue-700 mb-4">
        {t.testimonialsTitle}
      </h2>
      {testimonials.map((t) => (
        <div key={t.name} className="flex items-start gap-3 mb-4 last:mb-0">
          <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
            {t.initials}
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">{t.name}</h3>
            <p className="text-sm text-gray-600">{t.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const AboutUsSection: React.FC<{ t: PageT }> = ({ t }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold text-blue-700 mb-4">{t.aboutTitle}</h2>
      <p className="text-gray-700 mb-2">{t.aboutText}</p>
    </div>
  );
};

const KhmerWebsitePage: React.FC<{ t: PageT }> = ({ t }) => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <GoalCard t={t} />
      <SpecialitySection t={t} />
      <HowToSection t={t} />
      <TestimonialsSection t={t} />
      <AboutUsSection t={t} />
    </div>
  );
};

export default KhmerWebsitePage;
