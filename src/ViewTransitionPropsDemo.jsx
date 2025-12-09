import { ViewTransition, startTransition, useState } from 'react'

export default function ViewTransitionPropsDemo() {
  const [visible, setVisible] = useState(false)
  const [version, setVersion] = useState(1)

  function toggleVisible() {
    startTransition(() => {
      setVisible(prev => !prev)
    })
  }

  function updateContent() {
    startTransition(() => {
      setVersion(prev => prev + 1)
    })
  }

  function handleEnter(element, types) {
    console.log('Enter animation finished', { element, types })
  }

  function handleExit(element, types) {
    console.log('Exit animation finished', { element, types })
  }

  function handleUpdate(element, types) {
    console.log('Update animation finished', { element, types })
  }

  function handleShare(element, types) {
    console.log('Share animation finished', { element, types })
  }

  return (
    <div className="props-demo">
      <button onClick={toggleVisible}>
        {visible ? 'Hide box (exit)' : 'Show box (enter)'}
      </button>

      <button onClick={updateContent} disabled={!visible}>
        Update content (update)
      </button>

      {visible && (
        <ViewTransition
          name="props-demo-box"
          default="vt-fade"
          enter="vt-enter"
          exit="vt-exit"
          update="vt-update"
          share="vt-share"
          onEnter={handleEnter}
          onExit={handleExit}
          onUpdate={handleUpdate}
          onShare={handleShare}
        >
          <div className="props-box">
            <h3>Props Box</h3>
            <p>Version: {version}</p>
          </div>
        </ViewTransition>
      )}
    </div>
  )
}
