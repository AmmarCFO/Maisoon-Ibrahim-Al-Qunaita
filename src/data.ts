import { OwnerProfile, BranchDetails, OperatingReport } from './types';
import { IMAGES } from './constants/images';

export const logoUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69732f9a6a14d6634b2cbd49/e37995eab_mathwa_logo-removebg-preview.png";

export const ownerProfile: OwnerProfile = {
  salutation: {
    ar: "الأستاذة",
    en: "Ms."
  },
  name: {
    ar: "ميسون إبراهيم سعيد قنيطة",
    en: "Maysoon Ibrahim Saeed Qunaita"
  },
  ownerCode: "OWNER-MTH57-2026",
  email: "maysoon@example.com",
  phone: "+966 50 123 4567",
  contractDate: "2026-04-25",
  totalBranches: 1,
  totalUnits: 3,
  cumulativeEarnings: 14340.17
};

export const branchesList: BranchDetails[] = [
  {
    id: "sahman-57",
    branchNumber: "57",
    fullCode: "MTH-SHM-57",
    name: {
      ar: "مثوى ٥٧ - حي السحمان",
      en: "Mathwaa 57 — Al-Sahman District"
    },
    location: {
      ar: "حي السحمان",
      en: "Al-Sahman District"
    },
    district: {
      ar: "حي السحمان",
      en: "Al-Sahman District"
    },
    city: {
      ar: "الرياض",
      en: "Riyadh"
    },
    address: {
      ar: "حي السحمان، المملكة العربية السعودية",
      en: "Al-Sahman District, Kingdom of Saudi Arabia"
    },
    photos: IMAGES.all,
    totalUnits: 3,
    unitBreakdown: [
      { type: { ar: "شقة ثلاث غرف نوم (3BR)", en: "3 Bedrooms (3BR)" }, count: 1, avgMonthlyRate: "—" },
      { type: { ar: "شقة غرفة نوم واحدة (1BR)", en: "1 Bedroom (1BR)" }, count: 1, avgMonthlyRate: "—" },
      { type: { ar: "استوديو (Studio)", en: "Studio" }, count: 1, avgMonthlyRate: "—" }
    ],
    contactPhone: "+966 56 208 9171"
  }
];

export const initialOperatingReports: OperatingReport[] = [
  {
    id: "REP-57-01",
    reportNumber: "57",
    periodKey: "2026-Q2-Q3",
    periodName: {
      ar: "٢٥ أبريل ٢٠٢٦ - ٣١ يوليو ٢٠٢٦",
      en: "25 Apr 2026 to 31 Jul 2026"
    },
    periodDates: {
      ar: "من ٢٥ أبريل ٢٠٢٦ إلى ٣١ يوليو ٢٠٢٦",
      en: "25 Apr 2026 to 31 Jul 2026"
    },
    quarter: "25 Apr 2026 - 31 Jul 2026",
    year: 2026,
    branchId: "sahman-57",
    branchName: {
      ar: "مثوى ٥٧: حي السحمان",
      en: "Mathwaa 57: Al-Sahman District"
    },
    tagline: {
      ar: "تقرير أداء التشغيل المعتمد",
      en: "Certified Operating Performance Report"
    },
    clientName: {
      ar: "ميسون إبراهيم سعيد قنيطة",
      en: "Maysoon Ibrahim Saeed Qunaita"
    },
    
    // Core Required Metrics
    occupancyRate: 39,
    totalContracts: 20090.57, // Revenue
    totalRevenue: 20090.57,   // Revenue
    avgMonthlyReturn: 6278.30,
    directExpenses: 727.76,
    operatorSharePercentage: 25,
    operatorShareAmount: 5022.64,
    capitalExpenses: 0.00,
    netToOwner: 14340.17,

    // Segregated reporting for 3 units
    unitReports: [
      {
        id: "U1-3BR",
        unitNumber: "1",
        unitName: { ar: "شقة ثلاث غرف نوم (3BR)", en: "3 Bedrooms (3BR)" },
        occupancyRate: 42,
        periodRevenue: 11721.95,
        collectedRevenue: 11721.95,
        operatorShare: 2930.49,
        netToOwner: 8791.46
      },
      {
        id: "U2-1BR",
        unitNumber: "2",
        unitName: { ar: "شقة غرفة نوم واحدة (1BR)", en: "1 Bedroom (1BR)" },
        occupancyRate: 42,
        periodRevenue: 5130.87,
        collectedRevenue: 5130.87,
        operatorShare: 1282.72,
        netToOwner: 3848.15
      },
      {
        id: "U3-STUDIO",
        unitNumber: "3",
        unitName: { ar: "استوديو (Studio)", en: "Studio" },
        occupancyRate: 32,
        periodRevenue: 3237.75,
        collectedRevenue: 3237.75,
        operatorShare: 809.43,
        netToOwner: 2428.32
      }
    ],

    // Monthly Occupancy Trend
    monthlyOccupancyTrend: [
      {
        monthKey: "2026-04",
        monthName: { ar: "أبريل ٢٠٢٦", en: "April 2026" },
        occupancyRate: 10,
        threeBedRate: 30,
        oneBedRate: 0,
        studioRate: 0
      },
      {
        monthKey: "2026-05",
        monthName: { ar: "مايو ٢٠٢٦", en: "May 2026" },
        occupancyRate: 34,
        threeBedRate: 40,
        oneBedRate: 29,
        studioRate: 32
      },
      {
        monthKey: "2026-06",
        monthName: { ar: "يونيو ٢٠٢٦", en: "June 2026" },
        occupancyRate: 14,
        threeBedRate: 6,
        oneBedRate: 3,
        studioRate: 34
      },
      {
        monthKey: "2026-07",
        monthName: { ar: "يوليو ٢٠٢٦", en: "July 2026" },
        occupancyRate: 72,
        threeBedRate: 80,
        oneBedRate: 100,
        studioRate: 35
      }
    ],

    totalUnits: 3,
    occupiedUnits: 1,
    adr: 280,
    revPar: 109,
    revenueBreakdown: [
      { category: { ar: "إيراد عقود الوحدات السكنية", en: "Residential Units Rental Revenue" }, amount: 20090.57, percentage: 100 }
    ],
    maintenanceCostsCovered: 727.76,
    utilitiesCostCovered: 0,
    payoutStatus: "transferred",
    payoutRef: "TXN-20260731-MTH57",
    payoutDate: "2026-07-31",
    bankAccount: "",
    notes: {
      ar: "تقرير أداء التشغيل للأستاذة ميسون إبراهيم سعيد قنيطة - فرع ٥٧ (حي السحمان). سجلت الوحدات الـ ٣ متوسط نسبة إشغال إجمالية ٣٩٪ (شقة ٣ غرف ٤٢٪، شقة غرفة ٤٢٪، استوديو ٣٢٪)، بإيراد قدره ٢٠,٠٩٠٫٥٧ ريال، ومتوسط عائد شهري ٦,٢٧٨٫٣٠ ريال، ومصاريف مباشرة ٧٢٧٫٧٦ ريال، وحصة مشغل ٥,٠٢٢٫٦٤ ريال (٢٥٪)، ومصاريف رأسمالية ٠٫٠٠ ريال، وصافي عائد للعميل ١٤,٣٤٠٫١٧ ريال.",
      en: "Certified operating performance report for Maysoon Ibrahim Saeed Qunaita - Branch 57 (Al-Sahman District). The 3 units achieved an overall average occupancy rate of 39% (3BR 42%, 1BR 42%, Studio 32%), with SAR 20,090.57 revenue, SAR 6,278.30 average monthly return, SAR 727.76 direct expenses, SAR 5,022.64 operator's share (25%), SAR 0.00 capital expenditures, and SAR 14,340.17 net return to client."
    },
    additionalRemarks: [
      {
        ar: "يعود السبب في ظهور صافي الربح الإجمالي بالسالب إلى خصم المصاريف الرأسمالية والمصاريف المباشرة من إجمالي صافي الإيراد للمستثمر من الوحدتين، حيث تجاوزت قيمة هذه المصاريف مجموع الإيراد الصافي.",
        en: "The reason for the overall negative net profit is the deduction of capital expenditures and direct expenses from the investor's total net revenue for the two units, as the total of these expenses exceeded the net revenue."
      }
    ]
  }
];

export const mathwaaBrandInfo = {
  hqAddress: {
    ar: "الصحافة، الرياض، المملكة العربية السعودية",
    en: "Al Sahafah District, Riyadh, Kingdom of Saudi Arabia"
  },
  phoneDirect: "+966 56 208 9171",
  phoneTollFree: "+966 9200 15627",
  email: "owners@mathwaa.com",
  website: "www.mathwaa.com"
};
