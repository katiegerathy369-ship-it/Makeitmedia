export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between flex-wrap gap-5 px-12 py-10"
      style={{ background: 'var(--ink)', color: 'rgba(255,255,255,0.5)' }}
    >
      <a
        href="#home"
        className="font-display text-[20px] font-medium no-underline"
        style={{ color: 'rgba(255,255,255,0.85)' }}
      >
        make it <span className="italic" style={{ color: 'var(--sage-light)' }}>media</span>
      </a>

      <div className="flex flex-col items-center gap-1">
        <a
          href="mailto:kate@makeitmedia.io"
          className="text-[13px] no-underline transition-colors duration-200 hover:text-white/85"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          kate@makeitmedia.io
        </a>
        <p className="text-[13px] font-light">
          © 2026 Make It Media. All rights reserved.
        </p>
      </div>

      <div className="flex gap-6">
        <a
          href="/privacy"
          className="text-[13px] no-underline transition-colors duration-200 hover:text-white/85"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          Privacy policy
        </a>
        <a
          href="#"
          className="text-[13px] no-underline transition-colors duration-200 hover:text-white/85"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          Instagram
        </a>
        <a
          href="#"
          className="text-[13px] no-underline transition-colors duration-200 hover:text-white/85"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
