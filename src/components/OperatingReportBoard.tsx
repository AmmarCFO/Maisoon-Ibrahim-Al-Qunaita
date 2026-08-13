import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, Printer, Home, Layers,
  BarChart3, CheckCircle2, Building2, MapPin, LayoutGrid, User, Info
} from 'lucide-react';
import { 
  ResponsiveContainer, ComposedChart, Area, Line, XAxis, YAxis, 
  Tooltip, CartesianGrid, Legend
} from 'recharts';
import { OperatingReport } from '../types';

interface OperatingReportBoardProps {
  isAr: boolean;
  reports: OperatingReport[];
  onSelectPrintReport: (report: OperatingReport) => void;
}

export const OperatingReportBoard: React.FC<OperatingReportBoardProps> = ({
  isAr,
  reports,
  onSelectPrintReport
}) => {
  const report = reports[0];
  if (!report) return null;

  const clientNameText = report.clientName 
    ? report.clientName[isAr ? 'ar' : 'en'] 
    : (isAr ? 'ميسون إبراهيم سعيد قنيطة' : 'Maysoon Ibrahim Saeed Qunaita');
  const branchNumberText = report.branchNumber || '57';
  const branchLocationText = isAr ? 'حي السحمان' : 'Al-Sahman District';

  const formatCurrency = (val: number) => {
    const isNegative = val < 0;
    const absVal = Math.abs(val).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return isNegative ? `-${absVal}` : absVal;
  };

  const key3BR = isAr ? 'شقة ثلاث غرف (3BR)' : '3BR Unit';
  const key1BR = isAr ? 'شقة غرفة (1BR)' : '1BR Unit';
  const keyStudio = isAr ? 'استوديو (Studio)' : 'Studio Unit';
  const keyOverall = isAr ? 'المتوسط العام' : 'Overall Avg';

  // Format trend chart data for recharts
  const chartData = (report.monthlyOccupancyTrend || []).map((item) => ({
    name: item.monthName[isAr ? 'ar' : 'en'],
    [key3BR]: item.threeBedRate ?? 0,
    [key1BR]: item.oneBedRate ?? 0,
    [keyStudio]: item.studioRate ?? 0,
    [keyOverall]: item.occupancyRate,
  }));

  return (
    <div className="space-y-6 sm:space-y-8 my-4 sm:my-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#EDE5DC] shadow-xs space-y-8 sm:space-y-10"
      >
        {/* Main Document Header & Structured Showcase Cards */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-[#1d1d1f] via-[#2a2622] to-[#121110] text-white rounded-2xl p-5 sm:p-6 border border-[#C89565]/60 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {isAr ? 'تقرير تشغيلي معتمد' : 'Verified Operating Statement'}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#F3E5D8] mt-2.5">
                {isAr ? 'تقرير الأداء التشغيلي (١)' : 'Operational Performance Report (1)'}
              </h2>
              <p className="text-xs text-stone-300 mt-1 font-medium">
                {isAr ? 'فرع مثوى ٥٧ • حي السحمان' : 'Branch Mathwaa 57 • Al-Sahman District'}
              </p>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectPrintReport(report)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-xs font-bold text-white bg-[#C89565] hover:bg-[#b58253] active:bg-[#a37245] px-4 py-3 rounded-xl transition shadow-xs min-h-[44px]"
            >
              <Printer className="w-4 h-4 text-white" />
              <span>{isAr ? 'طباعة التقرير / PDF' : 'Print Report / PDF'}</span>
            </motion.button>
          </div>

          {/* 5 Dedicated Showcase Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
            {/* Card 1: Client Name */}
            <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#EDE5DC] shadow-2xs hover:border-[#C89565]/50 transition-colors flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#8B6F47] uppercase tracking-wider">
                  {isAr ? 'اسم العميل' : 'Client Name'}
                </span>
                <div className="w-8 h-8 rounded-xl bg-[#B8865F]/15 border border-[#C89565]/30 flex items-center justify-center text-[#8B6F47]">
                  <User className="w-4 h-4 text-[#B8865F]" />
                </div>
              </div>
              <div>
                <span className="text-sm sm:text-base font-extrabold text-[#1d1d1f] block leading-snug">
                  {clientNameText}
                </span>
              </div>
            </div>

            {/* Card 2: Branch */}
            <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#EDE5DC] shadow-2xs hover:border-[#C89565]/50 transition-colors flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#8B6F47] uppercase tracking-wider">
                  {isAr ? 'الفرع' : 'Branch'}
                </span>
                <div className="w-8 h-8 rounded-xl bg-[#B8865F]/15 border border-[#C89565]/30 flex items-center justify-center text-[#8B6F47]">
                  <Building2 className="w-4 h-4 text-[#B8865F]" />
                </div>
              </div>
              <div>
                <span className="text-base sm:text-lg font-black text-[#1d1d1f] block">
                  {isAr ? 'مثوى ٥٧' : 'Mathwaa 57'}
                </span>
              </div>
            </div>

            {/* Card 3: Location */}
            <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#EDE5DC] shadow-2xs hover:border-[#C89565]/50 transition-colors flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#8B6F47] uppercase tracking-wider">
                  {isAr ? 'الموقع' : 'Location'}
                </span>
                <div className="w-8 h-8 rounded-xl bg-[#B8865F]/15 border border-[#C89565]/30 flex items-center justify-center text-[#8B6F47]">
                  <MapPin className="w-4 h-4 text-[#B8865F]" />
                </div>
              </div>
              <div>
                <span className="text-base sm:text-lg font-black text-[#1d1d1f] block">
                  {isAr ? 'حي السحمان' : 'Al-Sahman District'}
                </span>
              </div>
            </div>

            {/* Card 4: Number of Units */}
            <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#EDE5DC] shadow-2xs hover:border-[#C89565]/50 transition-colors flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#8B6F47] uppercase tracking-wider">
                  {isAr ? 'عدد الوحدات' : 'Number of Units'}
                </span>
                <div className="w-8 h-8 rounded-xl bg-[#B8865F]/15 border border-[#C89565]/30 flex items-center justify-center text-[#8B6F47]">
                  <Layers className="w-4 h-4 text-[#B8865F]" />
                </div>
              </div>
              <div>
                <span className="text-base sm:text-lg font-black text-[#1d1d1f] block">
                  {isAr ? `ثلاث وحدات (${report.totalUnits || 3})` : `${report.totalUnits || 3} Units`}
                </span>
              </div>
            </div>

            {/* Card 5: Type of Units */}
            <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#EDE5DC] shadow-2xs hover:border-[#C89565]/50 transition-colors flex flex-col justify-between space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#8B6F47] uppercase tracking-wider">
                  {isAr ? 'أنواع الوحدات' : 'Type of Units'}
                </span>
                <div className="w-8 h-8 rounded-xl bg-[#B8865F]/15 border border-[#C89565]/30 flex items-center justify-center text-[#8B6F47]">
                  <LayoutGrid className="w-4 h-4 text-[#B8865F]" />
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {report.unitReports && report.unitReports.length > 0 ? (
                  report.unitReports.map((u, idx) => (
                    <span key={u.id || idx} className="inline-flex items-center gap-1 bg-white text-[#1d1d1f] px-2 py-1 rounded-lg border border-[#EDE5DC] text-[11px] font-extrabold shadow-2xs">
                      <span className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-blue-500' : idx === 1 ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                      {u.unitName[isAr ? 'ar' : 'en']}
                    </span>
                  ))
                ) : (
                  <>
                    <span className="inline-flex items-center gap-1 bg-white text-[#1d1d1f] px-2 py-1 rounded-lg border border-[#EDE5DC] text-[11px] font-extrabold shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {isAr ? 'شقة ثلاث غرف (3BR)' : '3 Bedrooms (3BR)'}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white text-[#1d1d1f] px-2 py-1 rounded-lg border border-[#EDE5DC] text-[11px] font-extrabold shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {isAr ? 'شقة غرفة نوم (1BR)' : '1 Bedroom (1BR)'}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white text-[#1d1d1f] px-2 py-1 rounded-lg border border-[#EDE5DC] text-[11px] font-extrabold shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {isAr ? 'استوديو (Studio)' : 'Studio'}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 1: FINANCIAL SUMMARY */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 border-b border-[#EDE5DC] pb-3">
            <div className="w-8 h-8 rounded-xl bg-[#B8865F]/15 border border-[#C89565]/30 flex items-center justify-center text-[#8B6F47] flex-shrink-0">
              <Layers className="w-4 h-4 text-[#B8865F]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#1d1d1f]">
                {isAr ? 'الملخص المالي العام' : 'Financial Summary'}
              </h3>
              <p className="text-xs text-stone-500">
                {isAr ? 'المؤشرات المالية الرئيسية لأداء الفرع' : 'Core financial performance metrics for Branch 57'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 pt-1">
            {/* 1. Occupancy Rate */}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EDE5DC]">
              <span className="text-xs font-bold text-stone-500 block mb-1">
                • {isAr ? 'نسبة الإشغال الكلية' : 'Overall Occupancy Rate'}
              </span>
              <p className="text-xl font-black text-emerald-600 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                <span>{report.occupancyRate}%</span>
              </p>
            </div>

            {/* 2. Total Revenue */}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EDE5DC]">
              <span className="text-xs font-bold text-stone-500 block mb-1">
                • {isAr ? 'الإيراد' : 'Revenue'}
              </span>
              <p className="text-lg sm:text-xl font-black text-emerald-700">
                {formatCurrency(report.totalRevenue)} <span className="text-xs font-normal text-stone-500">{isAr ? 'ريال' : 'SAR'}</span>
              </p>
            </div>

            {/* 3. Average Monthly Return */}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EDE5DC]">
              <span className="text-xs font-bold text-stone-500 block mb-1">
                • {isAr ? 'متوسط العائد الشهري' : 'Average Monthly Return'}
              </span>
              <p className="text-lg sm:text-xl font-extrabold text-[#8B6F47]">
                {formatCurrency(report.avgMonthlyReturn || 6278.30)} <span className="text-xs font-normal text-stone-500">{isAr ? 'ريال' : 'SAR'}</span>
              </p>
            </div>

            {/* 4. Direct Expenses */}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EDE5DC]">
              <span className="text-xs font-bold text-stone-500 block mb-1">
                • {isAr ? 'المصاريف المباشرة' : 'Direct Expenses'}
              </span>
              <p className="text-lg sm:text-xl font-extrabold text-rose-700">
                {formatCurrency(report.directExpenses || 727.76)} <span className="text-xs font-normal text-stone-500">{isAr ? 'ريال' : 'SAR'}</span>
              </p>
            </div>

            {/* 5. Operator's Share */}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EDE5DC]">
              <span className="text-xs font-bold text-stone-500 block mb-1">
                • {isAr ? `حصة المشغل (${report.operatorSharePercentage}%)` : `Operator's Share (${report.operatorSharePercentage}%)`}
              </span>
              <p className="text-lg sm:text-xl font-black text-amber-900">
                {formatCurrency(report.operatorShareAmount)} <span className="text-xs font-normal text-stone-500">{isAr ? 'ريال' : 'SAR'}</span>
              </p>
            </div>

            {/* 6. Capital Expenditures */}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EDE5DC]">
              <span className="text-xs font-bold text-stone-500 block mb-1">
                • {isAr ? 'المصاريف الرأسمالية' : 'Capital Expenditures'}
              </span>
              <p className="text-lg sm:text-xl font-extrabold text-stone-600">
                {formatCurrency(report.capitalExpenses ?? 0)} <span className="text-xs font-normal text-stone-500">{isAr ? 'ريال' : 'SAR'}</span>
              </p>
            </div>

            {/* 7. Net Amount for the Owner */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#1d1d1f] via-[#2a2622] to-[#121110] text-white p-4 sm:p-5 rounded-2xl border border-[#C89565]/80 shadow-md col-span-1 sm:col-span-2 lg:col-span-3 group">
              {/* Animated Light Ray Shimmer */}
              <motion.div
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C89565]/25 to-transparent -skew-x-12 pointer-events-none"
              />

              {/* Glowing Bottom Ambient Light */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.95, 1.1, 0.95]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#C89565]/30 rounded-full blur-xl pointer-events-none"
              />

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-extrabold text-[#E0C9B1] block mb-1">
                    • {isAr ? 'الصافي للمالك' : 'Net Return to Client'}
                  </span>
                  <p className="text-2xl sm:text-3xl font-black text-[#F3E5D8]">
                    {formatCurrency(report.netToOwner)} <span className="text-sm font-bold text-[#C89565]">{isAr ? 'ريال' : 'SAR'}</span>
                  </p>
                </div>
                <div className="text-xs text-[#E0C9B1]/80 font-semibold bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                  {isAr ? 'صافي العائد للعميل' : 'Net Payable to Client'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SEGREGATED UNITS BREAKDOWN */}
        <section className="space-y-5 pt-4 border-t border-[#EDE5DC]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EDE5DC] pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#B8865F]/15 border border-[#C89565]/30 flex items-center justify-center text-[#8B6F47] flex-shrink-0">
                <Home className="w-4 h-4 text-[#B8865F]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#1d1d1f]">
                  {isAr ? `تفاصيل أداء الوحدات (${report.totalUnits || 3} وحدات)` : `Segregated Units Breakdown (${report.totalUnits || 3} Units)`}
                </h3>
                <p className="text-xs text-stone-500">
                  {isAr ? 'توزيع الإيراد والإشغال والعائد حسب الوحدات' : 'Detailed revenue, occupancy, and net return breakdown per unit'}
                </p>
              </div>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-mono font-bold text-[#8B6F47] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#EDE5DC]">
              {isAr ? `إجمالي المحفظة: ${report.totalUnits || 3} وحدات` : `${report.totalUnits || 3} Units Portfolio`}
            </span>
          </div>

          {/* Unit Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(report.unitReports || []).map((u, index) => (
              <motion.div 
                key={u.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative group bg-[#FAF7F2] rounded-2xl p-4 sm:p-5 border border-[#EDE5DC] space-y-3.5 hover:border-[#B8865F] transition-all shadow-2xs hover:shadow-lg overflow-hidden"
              >
                {/* Subtle top glowing accent border on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B8865F] via-[#C89565] to-[#E0C9B1] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between border-b border-[#EDE5DC] pb-2">
                  <span className="text-xs font-extrabold text-[#8B6F47] bg-[#B8865F]/15 px-2.5 py-0.5 rounded-full border border-[#C89565]/30">
                    {isAr ? `وحدة رقم ${u.unitNumber}` : `Unit #${u.unitNumber}`}
                  </span>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 shadow-2xs">
                    {u.occupancyRate}% {isAr ? 'إشغال' : 'Occupancy'}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-extrabold text-[#1d1d1f]">
                  {u.unitName[isAr ? 'ar' : 'en']}
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-stone-200/60">
                    <span className="text-stone-500 font-medium">• {isAr ? 'الإيراد' : 'Revenue'}:</span>
                    <span className="font-extrabold text-[#1d1d1f]">{formatCurrency(u.collectedRevenue)} SAR</span>
                  </div>

                  <div className="flex justify-between items-center py-1 border-b border-stone-200/60">
                    <span className="text-stone-500 font-medium">• {isAr ? `حصة المشغل (${report.operatorSharePercentage}%)` : `Operator's Share (${report.operatorSharePercentage}%)`}:</span>
                    <span className="font-extrabold text-amber-900">{formatCurrency(u.operatorShare)} SAR</span>
                  </div>

                  <div className="flex justify-between items-center pt-2 text-xs sm:text-sm font-black text-[#1d1d1f]">
                    <span className="text-[#8B6F47]">• {isAr ? 'الصافي للمالك' : 'Net to Owner'}:</span>
                    <span className="text-[#B8865F]">{formatCurrency(u.netToOwner)} SAR</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Table Scroll Hint */}
          <div className="text-[11px] text-stone-500 flex items-center justify-between sm:hidden px-1 font-medium">
            <span>{isAr ? 'جدول المقارنة التفصيلي' : 'Detailed Comparison Table'}</span>
            <span className="bg-[#FAF7F2] text-[#8B6F47] px-2 py-0.5 rounded-md border border-[#EDE5DC] text-[10px] font-bold">
              {isAr ? 'اسحب أفقياً 👈👉' : 'Swipe horizontally 👈👉'}
            </span>
          </div>

          {/* Structured Segregated Comparison Table */}
          <div className="overflow-x-auto border border-[#EDE5DC] rounded-2xl touch-pan-x [-webkit-overflow-scrolling:touch]">
            <table className="w-full text-xs text-right border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-[#1d1d1f] text-white">
                  <th className="p-3 font-bold border-b border-stone-800">{isAr ? 'الوحدة' : 'Unit'}</th>
                  <th className="p-3 font-bold border-b border-stone-800">{isAr ? 'نوع الوحدة' : 'Unit Type'}</th>
                  <th className="p-3 font-bold border-b border-stone-800">{isAr ? 'نسبة الإشغال' : 'Occupancy Rate'}</th>
                  <th className="p-3 font-bold border-b border-stone-800">{isAr ? 'الإيراد' : 'Revenue'}</th>
                  <th className="p-3 font-bold border-b border-stone-800">{isAr ? `حصة المشغل (${report.operatorSharePercentage}%)` : `Operator Share (${report.operatorSharePercentage}%)`}</th>
                  <th className="p-3 font-bold border-b border-stone-800">{isAr ? 'الصافي للمالك' : 'Net to Owner'}</th>
                </tr>
              </thead>
              <tbody>
                {(report.unitReports || []).map((u, i) => (
                  <tr key={u.id} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF7F2]'}>
                    <td className="p-3 font-extrabold text-[#1d1d1f]">#{u.unitNumber}</td>
                    <td className="p-3 font-bold text-[#8B6F47]">{u.unitName[isAr ? 'ar' : 'en']}</td>
                    <td className="p-3 font-extrabold text-emerald-700">{u.occupancyRate}%</td>
                    <td className="p-3 font-extrabold text-[#1d1d1f]">{formatCurrency(u.collectedRevenue)} SAR</td>
                    <td className="p-3 font-extrabold text-amber-900">{formatCurrency(u.operatorShare)} SAR</td>
                    <td className="p-3 font-black text-[#B8865F]">{formatCurrency(u.netToOwner)} SAR</td>
                  </tr>
                ))}
                <tr className="bg-[#1d1d1f] text-white font-black text-xs">
                  <td className="p-3">{isAr ? 'الإجمالي' : 'Total'}</td>
                  <td className="p-3">{isAr ? `${report.totalUnits || 3} وحدات` : `${report.totalUnits || 3} Units`}</td>
                  <td className="p-3 text-emerald-400">{report.occupancyRate}% ({isAr ? 'المتوسط' : 'Avg'})</td>
                  <td className="p-3 text-white">{formatCurrency(report.totalRevenue)} SAR</td>
                  <td className="p-3 text-amber-300">{formatCurrency(report.operatorShareAmount)} SAR</td>
                  <td className="p-3 text-[#E0C9B1]">{formatCurrency(report.netToOwner)} SAR</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3: OCCUPANCY TREND CHART */}
        <section className="space-y-4 pt-4 border-t border-[#EDE5DC]">
          <div className="flex items-center justify-between border-b border-[#EDE5DC] pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#B8865F]/15 border border-[#C89565]/30 flex items-center justify-center text-[#8B6F47] flex-shrink-0">
                <BarChart3 className="w-4 h-4 text-[#B8865F]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#1d1d1f]">
                  {isAr ? 'مؤشر الإشغال (أبريل - يوليو 2026)' : 'Occupancy Trend (Apr to Jul 2026)'}
                </h3>
                <p className="text-xs text-stone-500">
                  {isAr ? 'تطور الأداء الشهري المعتمد للوحدات' : 'Monthly certified occupancy performance evolution across the 4 months'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF7F2] p-4 sm:p-6 rounded-2xl border border-[#EDE5DC] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EDE5DC] pb-3">
              <div>
                <h4 className="text-sm font-extrabold text-[#1d1d1f]">
                  {isAr ? 'تطور نسبة الإشغال الشهري (أبريل ٢٠٢٦ - يوليو ٢٠٢٦)' : 'Monthly Occupancy Rate Trend (April 2026 - July 2026)'}
                </h4>
                <p className="text-xs text-stone-500">
                  {isAr ? 'مؤشر نسبة إشغال وحدات الفرع' : 'Branch unit occupancy rate trend'}
                </p>
              </div>
              <div className="text-xs font-bold text-[#8B6F47] bg-[#B8865F]/15 px-3 py-1 rounded-full border border-[#C89565]/30 self-start sm:self-auto">
                {isAr ? `متوسط الفترة: ${report.occupancyRate}%` : `Period Average: ${report.occupancyRate}%`}
              </div>
            </div>

            {/* Recharts Composed Chart showing 3BR, 1BR, Studio & Overall Average */}
            <div className="h-72 sm:h-80 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorOverall" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#B8865F" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#B8865F" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#555', fontWeight: 'bold' }} interval={0} />
                  <YAxis unit="%" domain={[0, 100]} tick={{ fontSize: 10, fill: '#555' }} />
                  <Tooltip 
                    formatter={(val: any) => [`${val}%`, '']}
                    contentStyle={{ backgroundColor: '#1d1d1f', borderRadius: '12px', color: '#fff', fontSize: '12px', border: '1px solid #B8865F', padding: '10px' }}
                    itemStyle={{ color: '#E0C9B1' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                  <Area 
                    type="monotone" 
                    dataKey={keyOverall} 
                    stroke="#B8865F" 
                    strokeWidth={2.5}
                    strokeDasharray="4 4"
                    fillOpacity={1} 
                    fill="url(#colorOverall)" 
                  />
                  <Line type="monotone" dataKey={key3BR} stroke="#3B82F6" strokeWidth={3} dot={{ r: 5, fill: '#3B82F6' }} />
                  <Line type="monotone" dataKey={key1BR} stroke="#10B981" strokeWidth={3} dot={{ r: 5, fill: '#10B981' }} />
                  <Line type="monotone" dataKey={keyStudio} stroke="#F59E0B" strokeWidth={3} dot={{ r: 5, fill: '#F59E0B' }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Monthly Numbers Breakdown Data Grid showing Unit Breakdown per month */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {(report.monthlyOccupancyTrend || []).map((m) => (
                <div key={m.monthKey} className="bg-white p-3.5 rounded-xl border border-[#EDE5DC] shadow-2xs space-y-2">
                  <div className="flex justify-between items-center border-b border-[#EDE5DC] pb-1.5">
                    <span className="text-xs font-black text-[#1d1d1f]">
                      {m.monthName[isAr ? 'ar' : 'en']}
                    </span>
                    <span className="text-xs font-black text-[#B8865F] bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#EDE5DC]">
                      {isAr ? `المتوسط: ${m.occupancyRate}%` : `Avg: ${m.occupancyRate}%`}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-[11px] font-medium text-center">
                    <div className="bg-blue-50/60 p-1 rounded-lg border border-blue-100">
                      <span className="text-blue-700 font-bold block text-[10px]">3BR</span>
                      <span className="font-black text-blue-900">{m.threeBedRate ?? 0}%</span>
                    </div>
                    <div className="bg-emerald-50/60 p-1 rounded-lg border border-emerald-100">
                      <span className="text-emerald-700 font-bold block text-[10px]">1BR</span>
                      <span className="font-black text-emerald-900">{m.oneBedRate ?? 0}%</span>
                    </div>
                    <div className="bg-amber-50/60 p-1 rounded-lg border border-amber-100">
                      <span className="text-amber-700 font-bold block text-[10px]">Studio</span>
                      <span className="font-black text-amber-900">{m.studioRate ?? 0}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Explanatory note regarding April 6 operational days */}
            <div className="bg-[#FAF7F2] border border-[#EDE5DC] p-3.5 rounded-xl flex items-start gap-2.5 text-xs text-[#8B6F47] font-semibold mt-3 shadow-2xs">
              <Info className="w-4 h-4 text-[#B8865F] flex-shrink-0 mt-0.5" />
              <span>
                {isAr 
                  ? 'ملاحظة: يتضمن شهر أبريل ٦ أيام تشغيلية فقط وليس الشهر كاملاً، نظراً لبدء فترة التقرير والتشغيل بتاريخ ٢٥ أبريل ٢٠٢٦.'
                  : 'Note: April includes only 6 operational days rather than the full month, as reporting and operations commenced on April 25, 2026.'
                }
              </span>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};
