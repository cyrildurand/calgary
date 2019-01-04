import 'react-image-lightbox/style.css';
import Icon, { ICONS } from '../Icon';
import Img from 'gatsby-image';
import Lightbox from 'react-image-lightbox';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Gallery.module.scss';

export default class Gallery extends React.Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        original: PropTypes.shape({ src: PropTypes.string.isRequired }),
        thumbnail: PropTypes.shape({ src: PropTypes.string.isRequired }),
      })
    ),
  };

  static defaultProps = {
    images: [],
  };

  constructor() {
    super();
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  componentDidMount() {
    this.sortImages();
  }

  /**
   * This component display images like this
   *
   * +-----+-----+
   * |     |     |
   * |     |     |
   * |     |-----+
   * +-----+     |
   * |     |-----|
   * |     |     |
   * +-----+-----+
   *
   * This method will sort images to find best candidate based on aspect ratio and then compute
   * width in percent to have both column the same height
   *
   * @remarks For now the method only works with 0 or 5+ images
   */
  sortImages() {
    var sortedImages = [];
    //make a copy of the array to provide a custom sort without altering the original collection
    var images = this.props.images.map((img, i) => {
      img.originalIndex = i;
      return img;
    });
    // image nearest to 0.89 (190 / 214) ratio for left column
    images.sort(
      (a, b) => Math.abs(a.original.aspectRatio - 0.89) - Math.abs(b.original.aspectRatio - 0.89)
    );
    sortedImages = sortedImages.concat(images.splice(0, 2));

    // image nearest to 1.33 ( 190 / 142 ) ratio for right column
    images.sort(
      (a, b) => Math.abs(a.original.aspectRatio - 1.33) - Math.abs(b.original.aspectRatio - 1.33)
    );
    sortedImages = sortedImages.concat(images.splice(0, 3));

    images.sort((a, b) =>
      a.originalIndex > b.originalIndex ? 1 : b.originalIndex > a.originalIndex ? -1 : 0
    );
    sortedImages = sortedImages.concat(images);

    this.setState({ sortedImages: sortedImages });

    if (sortedImages.length >= 5) {
      var leftRatio =
        sortedImages[0].original.aspectRatio /
        (1 + sortedImages[0].original.aspectRatio / sortedImages[1].original.aspectRatio);

      var rightRatio =
        sortedImages[2].original.aspectRatio /
        (1 +
          sortedImages[2].original.aspectRatio / sortedImages[3].original.aspectRatio +
          sortedImages[2].original.aspectRatio / sortedImages[4].original.aspectRatio);

      var percentage = leftRatio / (rightRatio + leftRatio);
      this.setState({ percentage: percentage });
    }
  }

  onThumbnailClick(item) {
    this.setState({
      photoIndex: item.index,
      isOpen: true,
    });
  }
  onLightboxClose() {
    this.setState({
      isOpen: false,
    });
  }
  onClickPrevious() {
    this.setState(previousState => {
      return {
        photoIndex:
          (previousState.photoIndex + previousState.sortedImages.length - 1) %
          previousState.sortedImages.length,
      };
    });
  }
  onClickNext() {
    this.setState(previousState => {
      return {
        photoIndex: (previousState.photoIndex + 1) % previousState.sortedImages.length,
      };
    });
  }

  renderImage(item) {
    const { thumbnail, description } = item;
    return (
      <span onClick={() => this.onThumbnailClick(item)}>
        <Icon icon={ICONS.MAGNIFY} />
        <Img fluid={thumbnail} className="img-fluid" title={description} />
      </span>
    );
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    const sortedImages = this.state.sortedImages || [];

    if (sortedImages.length == 0) {
      return <p>No images</p>;
    } else {
      return (
        <>
          {isOpen && (
            <Lightbox
              onCloseRequest={() => this.onLightboxClose()}
              onMovePrevRequest={() => this.onClickPrevious()}
              onMoveNextRequest={() => this.onClickNext()}
              mainSrc={sortedImages[photoIndex].original.src}
              nextSrc={sortedImages[(photoIndex + 1) % sortedImages.length].original.src}
              prevSrc={
                sortedImages[(photoIndex + sortedImages.length - 1) % sortedImages.length].original
                  .src
              }
              imageTitle={`${photoIndex + 1}/${sortedImages.length}`}
              imageCaption={sortedImages[photoIndex].description}
            />
          )}
          <div className={`${styles.gallery}`}>
            <ul
              className={`${styles.column1}`}
              style={{
                flexBasis: `${this.state.percentage * 100}%`,
                maxWidth: `${this.state.percentage * 100}%`,
              }}
            >
              <li>
                {this.renderImage({
                  thumbnail: sortedImages[0].thumbnail,
                  index: 0,
                })}
              </li>
              <li>
                {this.renderImage({
                  thumbnail: sortedImages[1].thumbnail,
                  index: 1,
                })}
              </li>
            </ul>
            <ul
              className={`${styles.column2}`}
              style={{
                flexBasis: `${(1 - this.state.percentage) * 100}%`,
                maxWidth: `${(1 - this.state.percentage) * 100}%`,
              }}
            >
              <li>
                {this.renderImage({
                  thumbnail: sortedImages[2].thumbnail,
                  index: 2,
                })}
              </li>
              <li>
                {this.renderImage({
                  thumbnail: sortedImages[3].thumbnail,
                  index: 3,
                })}
              </li>
              <li>
                {sortedImages.length > 5 && (
                  <div className={styles.overlay}>
                    <div>
                      <p>+{sortedImages.length - 5}</p>
                    </div>
                  </div>
                )}
                {this.renderImage({
                  thumbnail: sortedImages[4].thumbnail,
                  index: 4,
                })}
              </li>
            </ul>
          </div>
        </>
      );
    }
  }
}
