'use client'

export type FilterKey =
  | 'all'
  | 'live'
  | 'concept'
  | 'naturopath'
  | 'nutritionist'
  | 'coach'
  | 'gp'

interface Pill {
  key: FilterKey
  label: string
  count?: number
}

const PILLS: Pill[] = [
  { key: 'all', label: 'All work', count: 4 },
  { key: 'live', label: 'Live sites', count: 1 },
  { key: 'concept', label: 'Concept designs', count: 3 },
  { key: 'naturopath', label: 'Naturopath' },
  { key: 'nutritionist', label: 'Nutritionist' },
  { key: 'coach', label: 'Health coach' },
  { key: 'gp', label: 'Integrative GP' },
]

interface FilterBarProps {
  activeFilter: FilterKey
  onFilter: (key: FilterKey) => void
  visibleCount: number
}

export default function FilterBar({ activeFilter, onFilter, visibleCount }: FilterBarProps) {
  return (
    <div
      className="border-b border-sage/20 sticky z-[90] py-8"
      style={{
        top: 65,
        background: 'rgba(250,248,244,0.92)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-container mx-auto px-12">
        <div className="flex items-center justify-between gap-5 flex-wrap">
          <div className="flex gap-2 flex-wrap">
            {PILLS.map((pill) => (
              <button
                key={pill.key}
                onClick={() => onFilter(pill.key)}
                className="inline-flex items-center gap-1.5 px-[18px] py-2 rounded-full text-[13px] font-normal font-body tracking-[0.01em] cursor-pointer border transition-all duration-200"
                style={
                  activeFilter === pill.key
                    ? {
                        background: 'var(--sage-dark)',
                        borderColor: 'var(--sage-dark)',
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
          <div className="text-[13px] font-light" style={{ color: 'var(--ink-light)' }}>
            Showing{' '}
            <span className="text-ink font-medium">{visibleCount}</span>{' '}
            projects
          </div>
        </div>
      </div>
    </div>
  )
}
