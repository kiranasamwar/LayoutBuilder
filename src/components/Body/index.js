// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-nav-bar-container">
              <h1 className="left-nav-bar-heading">Left Navbar Menu</h1>
              <ul className="ul-list-container">
                <li className="list-name">item 1</li>
                <li className="list-name">item 2</li>
                <li className="list-name">item 3</li>
                <li className="list-name">item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p>
                Lorem ipsum With it installed in the code editor you are using,
                you can type “lorem” and then tab and it will expand into a
                paragraph of Lorem Ipsum placeholder text. But it can do more!
                You can control how much you get, place it within HTML structure
                as it expands, and get different bits of it in repeated
                elements.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-nav-bar-container">
              <h1 className="main-heading">Right Navbar Menu</h1>
              <p className="list-ad-1">Ad 1</p>
              <p className="list-ad-1">Ad 2</p>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
