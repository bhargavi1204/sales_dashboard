'use client';

import { useState } from 'react';
import { salesData } from '@/data/mockSalesData';
import DashboardLayout from '@/components/templates/DashboardLayout';
import FilterControls from '@/components/molecules/FilterControls';
import SalesChart from '@/components/organisms/SalesChart'; // ✅ FIXED: default import

export default function DashboardPage() {
  const [threshold, setThreshold] = useState(0);

  const filteredData = salesData.filter((item) => item.sales >= threshold);

  return (
    <DashboardLayout>
      <FilterControls
        threshold={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
      />
      <SalesChart data={filteredData} />
    </DashboardLayout>
  );
}
