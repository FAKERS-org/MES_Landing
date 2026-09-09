import React from 'react';
import { Box, Lock, Sparkles, Settings, Search } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

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
    <Card className={`
      relative bg-white border border-gray-200 
      hover:shadow-lg transition-shadow duration-300 
      ${isTall ? 'row-span-2' : ''} 
      ${className}
    `}>
      <CardContent className="p-8">
        <div className="w-11 h-11 border-[1.5px] border-gray-300 rounded-lg flex items-center justify-center mb-6 text-gray-700">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
      </CardContent>
      {hasGradientBorder && (
        <div className="absolute bottom-0 left-8 right-8 h-[3px] rounded-sm bg-gradient-to-r from-pink-400 via-yellow-400 to-emerald-400" />
      )}
    </Card>
  );
};

export const SectionFeature: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-gray-50 rounded-3xl p-10 max-w-6xl w-full">
        <div className="grid grid-cols-3 gap-6">
          {/* Column 1, Row 1 */}
          <FeatureCard
            icon={<Box className="w-5 h-5" />}
            title="ពិពីកមេរៀន"
            description="ការរនពីគីតាបេឡង់នៃការសរសេរ គ្រប់ទំព័រនៃពួកសរសេរមិនគិត ជាអត្ថបទអំណានទេ - Patricia Reilly Giff"
          />

          {/* Column 2, Row 1-2 (tall card) */}
          <FeatureCard
            icon={<Lock className="w-5 h-5" />}
            title="សមយល់ពីបចចេកវិទ្យាថ្មីៗ"
            description="បច្ចេកវិទយាថ្មីៗ តែងតែមានការប្ែប្រួល និង អភិវឌ្ន៍យ៉ាងឆាប់រហ័សជារងរាល់ឆ្នាំ។"
            isTall
          />

          {/* Column 3, Row 1 */}
          <FeatureCard
            icon={<Sparkles className="w-5 h-5" />}
            title="អ្នកប្រើបរាស់ 400+"
            description="កំពុងកីតាបាស់ផ្លែយលូកដល់បច្ចុប្ន្ននេះ យើងមានអ្នកប្ើប្ាស់ជាច្ើនលើពីកីតាបាស់និងទុក។"
            hasGradientBorder
          />

          {/* Column 1, Row 2 */}
          <FeatureCard
            icon={<Settings className="w-5 h-5" />}
            title="សេសរសមត្ថភាព"
            description="កំពូលនៃការសាកលបដីយ ក្នុងតំបន់នៃលមិនបានសាកលបង - Micheal Jordan"
          />

          {/* Column 3, Row 2 */}
          <FeatureCard
            icon={<Search className="w-5 h-5" />}
            title="គ្រប់មុខវិជ្ជា គ្រប់កម្រិតវិទ្យាល័យ"
            description="មានគ្រប់មុខវិជ្ា និងកម្រិតវិទ្យាល័យជាច្រើនតាមបំណងរបស់សិស្ស។"
          />
        </div>
      </div>
    </div>
  );
};