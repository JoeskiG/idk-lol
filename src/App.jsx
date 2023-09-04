import { useEffect, useRef, useState } from 'react'
import { ColorBox } from './components/ColorBox'
import { useGlobalContext } from './contexts/useGlobalContext'
import { BaseModal } from './components/common/BaseModal'
import { ColorBoxSettingsModal } from './components/ColorBoxSettingsModal'

const gridSettings = {
  columns: {
    count: 12
  },
  rows: {
    count: 12
  }
}

function App() {
  const { setModal, modal, clearModal } = useGlobalContext()
  const mainRef = useRef()

  const handleMenuOpen = (e) => {
    if (e.keyCode === 27) {
      console.log(`Key: ${e.key} with keycode ${e.keyCode} has been pressed`)
      if (!modal) {
        setModal(
          <ColorBoxSettingsModal />
        )
      } else {
        clearModal()
      }
    }
  }

  useEffect(() => {
    mainRef.current.focus()
  })


  return (
    <div
      ref={mainRef}
      tabIndex={0}
      onKeyDown={handleMenuOpen}
      className='w-full h-full'
    >
      <div
        style={
          {
            gridTemplateColumns: `repeat(${gridSettings.columns.count}, 1fr)`,
            gridTemplateRows: `repeat(${gridSettings.rows.count}, 1fr)`
          }
        } className={`w-full grid gap-2 h-full overflow-hidden`}>
        {

          (() => {
            const idk = []
            for (let i = 0; i < gridSettings.columns.count * gridSettings.rows.count; i++) {
              idk.push(<ColorBox key={i} />)

            }

            return idk
          })()

        }

      </div>
      {
        modal
      }
    </div>

  )
}

export default App
