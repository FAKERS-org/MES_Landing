import React from "react";

interface TestimonialProps {
  name: string;
  text: string;
  initials: string;
}

const GoalCard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow flex items-center mb-6">
      <div className="flex-1">
        <h2 className="text-xl font-bold text-blue-700 mb-4">គោលបំណង</h2>
        <p className="text-gray-700 mb-2">
          ប្រវត្តិនៃការបង្កើតរូបភាពសម្រាប់សិស្ស ៥ នៅសាកលវិទ្យាល័យ
          ដែលចង់ធ្វើការប្រលងចូលសាកលវិទ្យាល័យបច្ចេកវិទ្យាកម្ពុជា (តិចណូ)។
        </p>
      </div>
    </div>
  );
};

const FeatureItem: React.FC<{ title: string; description: string }> = ({ title, description }) => {
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

const SpecialitySection: React.FC = () => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold text-blue-700 mb-4">លក្ខណៈពិសេស</h2>
      <FeatureItem
        title="ប្រលងឥតគិតថ្លៃ"
        description="សិស្សានុសិស្សអាចធ្វើតេស្តឥតគិតថ្លៃគ្រប់ពេលវេលា"
      />
      <FeatureItem
        title="លំហាត់ជាច្រើន"
        description="មានលំហាត់ជាច្រើនសម្រាប់ហាត់រៀន"
      />
      <FeatureItem
        title="វិភាគលទ្ធផល"
        description="អាចមើលលទ្ធផលនិងកំណត់ចំណុចខ្វិន"
      />
    </div>
  );
};

const HowToSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold text-blue-700 mb-4">របៀបប្រើប្រាស់</h2>
      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        <li>ចុះឈ្មោះឬចូលប្រព័ន្ធ</li>
        <li>ជ្រើសរើសមុខវិជ្ជាដែលចង់ហាត់</li>
        <li>ចាប់ផ្តើមធ្វើតេស្ត</li>
        <li>មើលលទ្ធផលនិងវិភាគ</li>
      </ol>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    { name: "សិស្ស A", text: "វាជួយខ្ញុំរៀនបានច្រើនណាស់!", initials: "A" },
    { name: "សិស្ស B", text: "ងាយស្រួលប្រើនិងឥតគិតថ្លៃ", initials: "B" },
    { name: "សិស្ស C", text: "លំហាត់ជាច្រើនអាចជ្រើសរើស", initials: "C" },
  ];
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold text-blue-700 mb-4">មតិរបស់សិស្សានុសិស្ស</h2>
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

const AboutUsSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold text-blue-700 mb-4">អំពីយើង</h2>
      <p className="text-gray-700 mb-2">
        យើងជាក្រុមហ៊ុនដែលចង់ជួយសិស្សានុសិស្សក្នុងការត្រៀមខ្លួនសម្រាប់ការប្រលងចូលសាកលវិទ្យាល័យ។
      </p>
    </div>
  );
};

const KhmerWebsitePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <GoalCard />
      <SpecialitySection />
      <HowToSection />
      <TestimonialsSection />
      <AboutUsSection />
    </div>
  );
};

export default KhmerWebsitePage;
