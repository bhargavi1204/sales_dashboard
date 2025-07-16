
# 📊 Next.js Sales Dashboard (2022–2024)

A dynamic and responsive sales analytics dashboard built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Recharts**. This app visualizes multi-year sales trends (2022–2024) using real or mock data, and supports multiple chart types and filtering.

---

## 🚀 Features

- ✅ Interactive **bar**, **line**, and **pie charts** using [Recharts](https://recharts.org/)
- 🎯 Dynamic filtering based on **sales threshold input**
- 📆 Data separated by year (2022, 2023, 2024)
- 📂 Modular component architecture using the **Atomic Design** principle
- ⚡ Client-side chart switching and filtering
- 📁 Based on **App Router** (Next.js 15)

---

## 🖼️ Screenshots

| Dashboard View | Chart Switcher |
|----------------|----------------|
| ![Dashboard](./public/screenshot1.png) | ![Switcher](./public/screenshot2.png) |

---

## 🛠️ Tech Stack

- **Next.js 15** with App Router
- **TypeScript**
- **Tailwind CSS**
- **Recharts** for charts
- **Mock Kaggle CSV** converted to JSON

---

## 📂 Project Structure

```
.
├── app/
│   └── dashboard/
│       └── page.tsx             # Main dashboard page
├── components/
│   ├── ChartSwitcher.tsx        # Toggle bar/line/pie
│   ├── FilterInput.tsx          # Input for threshold
│   └── SalesChart.tsx           # Chart rendering
├── public/
│   └── sales.json               # Sales data (mock or real)
├── styles/
│   └── globals.css
├── README.md
└── ...
```

---

## 📈 Data Source

> You can either use the mock dataset provided or integrate your own data from Kaggle.

Recommended Kaggle Dataset:  
📦 [Random Sample Sales Data](https://www.kaggle.com/datasets/raohamzatariq/random-sample-sales-dataset)

Make sure to convert your CSV to JSON and place it at:  
`public/sales.json`

---

## 🧪 How to Run Locally

1. **Clone the repository**
```bash
git clone [repository]
cd sales_dashboard_nextjs
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Visit**  
Open [http://localhost:3000/dashboard](http://localhost:3000/dashboard) in your browser.

---

## 📌 Future Enhancements

- 🔌 Real API integration
- ⏱ Incremental Static Regeneration (ISR)
- 📤 CSV upload and data parsing
- 🧮 Year-wise statistics summary cards


