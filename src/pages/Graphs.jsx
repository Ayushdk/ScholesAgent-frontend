import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GraphsContainer from "../components/graphs/GraphsContainer";

export default function Graphs() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Market Analytics
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Interactive charts for stock analysis and options visualization
            </p>
          </div>

          <GraphsContainer />
        </div>
      </main>

      <Footer />
    </div>
  );
}
