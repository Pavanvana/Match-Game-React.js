import './index.css'
import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'

const Game = props => {
  const {
    imagesList,
    tabsList,
    thumbnailImagesList,
    activeTabId,
    currentImageId,
    onClickTab,
    onClickThumbnail,
  } = props

  const {imageUrl} = imagesList.find(image => image.id === currentImageId)

  return (
    <div className="game-container">
      <img className="match-image" src={imageUrl} alt="match" />
      <ul className="tab-items-container">
        {tabsList.map(tab => (
          <TabItem
            tabDetails={tab}
            active={tab.tabId === activeTabId}
            onClick={onClickTab}
            key={tab.tabId}
          />
        ))}
      </ul>
      <ul className="thumbnails-container">
        {thumbnailImagesList.map(thumbnail => (
          <ThumbnailItem
            thumbnail={thumbnail}
            key={thumbnail.id}
            onClickThumbnail={onClickThumbnail}
          />
        ))}
      </ul>
    </div>
  )
}
export default Game
