import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import FormulaSection from "../components/about/FormulaSection";
import VariablesTable from "../components/about/VariablesTable";
import AssumptionsSection from "../components/about/AssumptionsSection";
import UseCasesSection from "../components/about/UseCasesSection";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Understanding Black–Scholes
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              A comprehensive guide to the options pricing model
            </p>
          </div>

          <div className="space-y-12">
            <FormulaSection />
            <VariablesTable />
            <AssumptionsSection />
            <UseCasesSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
