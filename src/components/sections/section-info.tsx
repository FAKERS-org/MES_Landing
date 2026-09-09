import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Library, Youtube, Laptop, Briefcase, TrendingUp } from "lucide-react";

// 1. Define the data structure
interface InfoItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

// 2. Mock data based on the image description
const cardData: InfoItem[] = [
  {
    icon: Book,
    title: "เรื่องจริง",
    description: "บทความและเรื่องราวจริงที่น่าสนใจในการอ่านและเรียนรู้",
  },
  {
    icon: Library,
    title: "หนังสือ 400+",
    description: "รวบรวมหนังสือดีๆ กว่า 400 เล่มสำหรับนักอ่าน",
  },
  {
    icon: Youtube,
    title: "โควต้ายูทูบ",
    description: "คอนเทนต์และช่องยูทูบแนะนำสำหรับการศึกษา",
  },
  {
    icon: Laptop,
    title: "โปรแกรมที่ช่วยการเรียน",
    description: "เครื่องมือและโปรแกรมช่วยเสริมประสิทธิภาพการเรียน",
  },
  {
    icon: Briefcase,
    title: "เข้าใจทักษะในการทำงาน",
    description: "พัฒนาและเข้าใจทักษะที่จำเป็นสู่การทำงานจริง",
  },
  {
    icon: TrendingUp,
    title: "พัฒนาตัวเอง",
    description: "แนวทางและเป้าหมายเพื่อพัฒนาตนเองให้ก้าวหน้า",
  },
];

export default function InfoCards() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      {/* Header Section (Optional) */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-800">
          หมวดหมู่ข้อมูลและการเรียนรู้
        </h2>
        <p className="mt-2 text-muted-foreground">
          รวบรวมข้อมูลและเครื่องมือที่มีประโยชน์สำหรับการพัฒนาตนเอง
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card 
              key={index} 
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-6">
                {/* Icon Container */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <CardTitle className="text-base font-semibold text-gray-900">
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}