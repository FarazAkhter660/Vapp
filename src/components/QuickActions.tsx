import { useMemo } from 'react'
import analyzeLight from "../../app/assets/analyze-light.svg"
import analyzeDark from '../../app/assets/analyze-dark.svg'
import createLight from '../../app/assets/create-light.svg'
import createDark from '../../app/assets/create-dark.svg'
import assetLight from '../../app/assets/asset-light.svg'
import assetDark from '../../app/assets/asset-dark.svg'

const QuickActions = () => {
  const isDark = useMemo(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches,
    []
  )

  const actions = [
    {
      label: 'Analyze\nDocument',
      light: analyzeLight,
      dark: analyzeDark,
    },
    {
      label: 'Create\nImage',
      light: createLight,
      dark: createDark,
    },
    {
      label: 'Create\nMarketing Asset',
      light: assetLight,
      dark: assetDark,
    },
    {
      label: 'See all',
      isSeeAll: true,
    },
  ]

  return (
    <div
      style={{
        marginTop: 24,
        display: 'flex',
        justifyContent: 'center',
        gap: 18,
      }}
    >
      {actions.map((action) => (
        <div
          key={action.label}
          style={{
            width: 72,
            textAlign: 'center',
            color: '#cfd3da',
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: 18,
              background: 'rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 8px',
            }}
          >
            {action.isSeeAll ? (
              <span
                style={{
                  fontSize: 12,
                  color: '#9ca3af',
                  fontWeight: 500,
                }}
              >
                See all
              </span>
            ) : (
              <img
                src={isDark ? action.dark! : action.light!}
                alt={action.label}
                style={{
                  width: 28,
                  height: 28,
                }}
              />
            )}
          </div>

          {!action.isSeeAll && (
            <p
              style={{
                fontSize: 12,
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              {action.label.split('\n').map((t) => (
                <span key={t} style={{ display: 'block' }}>
                  {t}
                </span>
              ))}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default QuickActions
