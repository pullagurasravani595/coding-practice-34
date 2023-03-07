import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderCategoryList = () => {
    const {categoryOptions, changeCategory, activeCategoryId} = props

    return categoryOptions.map(eachItem => {
      const {name, categoryId} = eachItem
      const changeCategoryId = () => changeCategory(categoryId)
      const isActive = categoryId === activeCategoryId
      const categoryContainerName = isActive ? 'high-light' : 'normal'

      return (
        <li
          className="category-item"
          onClick={changeCategoryId}
          key={categoryId}
        >
          <p className={categoryContainerName}>{name}</p>
        </li>
      )
    })
  }

  const onChangeSearchInput = event => {
    const {changeSearchInputVal} = props
    changeSearchInputVal(event.target.value)
  }

  const completeSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="input-container">
        <input
          type="search"
          placeholder="Search"
          className="input-element"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={completeSearchInput}
        />
        <BsSearch />
      </div>
    )
  }

  const renderCategoryDetails = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="category-container">{renderCategoryList()}</ul>
    </>
  )
  const renderRatingList = () => {
    const {ratingsList, ratingChange, activeRatingId} = props

    return ratingsList.map(eachRating => {
      const {ratingId, imageUrl} = eachRating
      const onClickRatingImg = () => ratingChange(ratingId)
      const pattern = ratingId === activeRatingId
      const containerClassName = pattern ? 'high-light' : 'normal'

      return (
        <li className="rating-item" onClick={onClickRatingImg} key={ratingId}>
          <img
            src={imageUrl}
            className="rating-img"
            alt={`rating ${ratingId}`}
          />
          <p className={containerClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingDetails = () => (
    <>
      <h1 className="category-heading">Rating</h1>
      <ul className="category-container">{renderRatingList()}</ul>
    </>
  )

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryDetails()}
      {renderRatingDetails()}
      <button type="button" className="clear-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
