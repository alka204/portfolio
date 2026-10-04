export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface-raised/50">
      <div className="section-container flex flex-col items-center justify-between gap-2 py-6 text-center sm:flex-row sm:gap-4 sm:py-8 sm:text-left">
        <p className="text-xs text-subtle sm:text-sm">
          &copy; {year} Alka Kumari. All rights reserved.
        </p>
        <p className="text-xs text-muted sm:text-sm">
          Built with care for web development.
        </p>
      </div>
    </footer>
  )
}
