import {useState} from 'react'
import analyzeLight from '../../app/assets/analyze-light.svg'
import analyzeDark from '../../app/assets/analyze-dark.svg'
import createLight from '../../app/assets/create-light.svg'
import createDark from '../../app/assets/create-dark.svg'
import assetLight from '../../app/assets/asset-light.svg'
import assetDark from '../../app/assets/asset-dark.svg'
import SeeAllAppsModal from './SeeAllAppsModal'
import useDarkMode from '../lib/useDarkMode'

const QuickActions = () => {
  const [open, setOpen] = useState(false)
  const dark = useDarkMode()
  const isDark = dark.theme === 'dark'

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
    <>
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
              color: isDark ? '#c0c7ce' : '#7c8694',
            }}
          >
            <div
              onClick={() => {
                if (action.isSeeAll) {
                  setOpen(true)
                }
              }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 18,
                background: isDark 
                  ? '#1b1f24' 
                  : '#f8f9fb',
                border: isDark ? '1px solid #303438' : '1px solid #e1e4e9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 8px',
                cursor: action.isSeeAll ? 'pointer' : 'default',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                if (!action.isSeeAll) return;
                e.currentTarget.style.background = isDark ? '#3a3e42' : '#dfe0e1';
              }}
              onMouseLeave={(e) => {
                if (!action.isSeeAll) return;
                e.currentTarget.style.background = isDark ? '#1b1f24' : '#f8f9fb';
              }}
            >
              {action.isSeeAll ? (
                <span
                  style={{
                    fontSize: 12,
                    color: isDark ? '#c0c7ce' : '#7c8694',
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
                  <span key={t} style={{display: 'block'}}>
                    {t}
                  </span>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>

      <SeeAllAppsModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default QuickActions
