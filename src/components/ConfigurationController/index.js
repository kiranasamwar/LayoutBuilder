// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onClickInputContent = () => {
        onToggleShowContent()
      }

      const onClickLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onClickRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="nav-container">
          <h1 className="main-heading">Layout</h1>
          <div className="input-container">
            <input
              type="checkbox"
              id="content"
              onChange={onClickInputContent}
              checked={showContent}
            />
            <label htmlFor="content" className="label-name">
              Content
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              id="leftNavBar"
              onChange={onClickLeftNavbar}
              checked={showLeftNavbar}
            />
            <label htmlFor="leftNavBar" className="label-name">
              Left NavBar
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="rightNavbar"
              onChange={onClickRightNavbar}
              checked={showRightNavbar}
            />
            <label htmlFor="rightNavbar" className="label-name">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
