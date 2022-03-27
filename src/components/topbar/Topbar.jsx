import React, { useState } from "react"
import "./topBar.scss"
import lupa from "../../assets/lupa.png"
const Topbar = ({ action, handleBtn, onChange, type }) => {
  const [active, setActive] = useState(false)

  const handleTogle = () => {
    setActive(!active)
  }

  return (
    <div className="topBarContainer">
      <h1 className="title">Country Search</h1>
      <h3 className="subTitle">
        Perform instant searches and sort by content or language
      </h3>
      <div className={active ? " activeSearch" : "contentSearch"}>
        <img
          onClick={handleTogle}
          className="lupaSearch"
          src={lupa}
          alt="Search"
        />
        <input
          className="inputSearch"
          type={type}
          placeholder="Search..."
          onChange={onChange}
        />
      </div>
      <div className="topBarOrderContainer">
        <h4 className="titleTopBarOrder">ORDER BY : </h4>
        <div className="topBarContentBtn">
          <button
            className={action ? "active" : "btnOrder"}
            onClick={handleBtn}
          >
            CONTINENTS
          </button>
          <button
            className={!action ? "active" : "btnOrder"}
            onClick={handleBtn}
          >
            LANGUAGES
          </button>
        </div>
      </div>
    </div>
  )
}

export default Topbar
