'use client'

export type FilterKey =
  | 'all'
  | 'live'
  | 'concept'

interface Pill {
  key: FilterKey
  label: string
  count?: number
}

const PILLS: Pill[] = [
  { key: 'all', label: 'All work', count: 6 },
  { key: 'live', label: 'Live sites', count: 3 },
  { key: 'concept', label: 'Concept designs', count: 3 },
]

interface FilterBarProps {
  activeFilter: FilterKey
  onFilter: (key: FilterKey) => void
  visibleCount: number
}

export default function FilterBar({ activeFilter, onFilter, visibleCount }: FilterBarProps) {
  return (
    <div
      className="border-b border-gold/20 sticky z-[90] py-5 md:py-8"
      style={{
        top: 65,
        background: 'rgba(250,248,244,0.92)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-container mx-auto px-5 md:px-12">
        <div className="flex items-center justify-between gap-3 md:gap-5 flex-wrap">
          <div className="flex gap-1.5 md:gap-2 flex-wrap">
            {PILLS.map((pill) => (
              <button
                key={pill.key}
                onClick={() => onFilter(pill.key)}
                className="inline-flex items-center gap-1 md:gap-1.5 px-3 md:px-[18px] py-1.5 md:py-2 rounded-full text-[11px] md:text-[13px] font-normal font-body tracking-[0.01em] cursor-pointer border transition-all duration-200"
                style={
                  activeFilter === pill.key
                    ? {
                        background: 'var(--night)',
                        borderColor: 'var(--night)',
                        color: '#fff',
                      }
                    : {
                        background: 'transparent',
                        borderColor: 'var(--border)',
                        color: 'var(--ink-mid)',
                      }
                }
              >
                {pill.label}
                {pill.count !== undefined && (
                  <span className="text-[11px] opacity-65">({pill.count})</span>
                )}
              </button>
            ))}
          </div>
          <div className="text-[11px] md:text-[13px] font-light" style={{ color: 'var(--ink-light)' }}>
            Showing{' '}
            <span className="text-ink font-medium">{visibleCount}</span>{' '}
            projects
          </div>
        </div>
      </div>
    </div>
  )
}
