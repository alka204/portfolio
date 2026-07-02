export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface-raised/50">
      <div className="section-container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-subtle">
          &copy; {year} Alka Kumari. All rights reserved.
        </p>
        <p className="text-sm text-muted">
          Built with care for web development.
        </p>
      </div>
    </footer>
  )
}
