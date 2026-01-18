import { Link } from "react-router-dom";
import { TrendingUp, Github, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo & Description */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <img src="/logo.png" className="h-8 w-8" alt="Logo" />
              </div>
              <span className="font-semibold text-foreground">
                ScholesAgent
              </span>
            </Link>

            <p className="text-sm text-muted-foreground">
              Options pricing made simple with Black-Scholes
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Ayushdk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ScholesAgent. Built for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
