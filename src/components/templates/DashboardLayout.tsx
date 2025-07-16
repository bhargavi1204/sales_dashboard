// src/components/templates/DashboardLayout.tsx

import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">📊 Sales Dashboard</h1>
        {children}
      </div>
    </div>
  );
}
