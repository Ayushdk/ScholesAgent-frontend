import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CalculatorForm from "../components/calculator/CalculatorForm";

export default function Calculator() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Option Price Calculator
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Enter your parameters to calculate call and put option prices
            </p>
          </div>

          <CalculatorForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
