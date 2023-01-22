import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const changeProjectsList = () => {
    updateActiveTabId(tabId)
  }

  const activeButtonClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeButtonClassName}`}
        onClick={changeProjectsList}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
