// @flow
import 'react-image-lightbox/style.css';
import Img from 'gatsby-image';
import Lightbox from 'react-image-lightbox';
import React from 'react';
import Icon, { ICONS } from '../common/Icon';
import styles from './Gallery.module.scss';

type Image = {
  +title: string,
  +description?: string,
  +original: {
    +src: string,
    +aspectRatio: number,
  },
  +thumbnail: {
    +src: string,
    +aspectRatio: number,
  },
};
type Props = {
  +images: Image[],
};

type State = {
  +photoIndex: number,
  +isOpen: boolean,
  +columnWidthPercentage: number,
  +sortedImages: Array<Image>,
};

export default class Gallery extends React.Component<Props, State> {
  static defaultProps = {
    images: [],
  };

  state = {
    photoIndex: 0,
    isOpen: false,
    columnWidthPercentage: 1,
    sortedImages: [],
  };

  componentDidMount() {
    const sortedImages = this.sortImages(this.props.images);
    const columnWidthPercentage = this.getColumnWidthPercentage(sortedImages);
    this.setState({
      sortedImages: sortedImages,
      columnWidthPercentage: columnWidthPercentage,
    });
  }

  onThumbnailClick(index: number) {
    this.setState({
      photoIndex: index,
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
          (previousState.photoIndex + this.props.images.length - 1) % this.props.images.length,
      };
    });
  }
  onClickNext() {
    this.setState(previousState => {
      return {
        photoIndex: (previousState.photoIndex + 1) % this.props.images.length,
      };
    });
  }

  getColumnWidthPercentage(images: Array<Image>) {
    let columnWidthPercentage = 1;
    if (images.length >= 5) {
      var leftRatio =
        images[0].original.aspectRatio /
        (1 + images[0].original.aspectRatio / images[1].original.aspectRatio);

      var rightRatio =
        images[2].original.aspectRatio /
        (1 +
          images[2].original.aspectRatio / images[3].original.aspectRatio +
          images[2].original.aspectRatio / images[4].original.aspectRatio);

      columnWidthPercentage = leftRatio / (rightRatio + leftRatio);
    }

    return columnWidthPercentage;
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
  sortImages(images: Image[]) {
    //make a copy of the array to provide a custom sort without altering the original collection
    images = images.map(img => img);
    // image nearest to 0.89 (190 / 214) ratio for left column
    images.sort(
      (a, b) => Math.abs(a.original.aspectRatio - 0.89) - Math.abs(b.original.aspectRatio - 0.89)
    );

    //sortedImages = sortedImages.concat(images.splice(0, 2));
    let sortedImages: Image[] = images.splice(0, 2);

    // image nearest to 1.33 ( 190 / 142 ) ratio for right column
    images.sort(
      (a, b) => Math.abs(a.original.aspectRatio - 1.33) - Math.abs(b.original.aspectRatio - 1.33)
    );
    sortedImages = [...sortedImages, ...images.splice(0, 3)];

    images.sort((a, b) => {
      const aIndex = images.indexOf(a);
      const bIndex = images.indexOf(b);
      return aIndex > bIndex ? 1 : bIndex > aIndex ? -1 : 0;
    });
    sortedImages = [...sortedImages, ...images];

    return sortedImages;
  }

  renderImage(index: number, image: Image) {
    const { thumbnail, title } = image;
    return (
      <button onClick={() => this.onThumbnailClick(index)} type="button">
        <Icon icon={ICONS.MAGNIFY} />
        <Img fluid={thumbnail} className="img-fluid" title={title} />
      </button>
    );
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    const sortedImages = this.state.sortedImages;

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
                flexBasis: `${this.state.columnWidthPercentage * 100}%`,
                maxWidth: `${this.state.columnWidthPercentage * 100}%`,
              }}
            >
              <li>{this.renderImage(0, sortedImages[0])}</li>
              <li>{this.renderImage(1, sortedImages[1])}</li>
            </ul>
            <ul
              className={`${styles.column2}`}
              style={{
                flexBasis: `${(1 - this.state.columnWidthPercentage) * 100}%`,
                maxWidth: `${(1 - this.state.columnWidthPercentage) * 100}%`,
              }}
            >
              <li>{this.renderImage(2, sortedImages[2])}</li>
              <li>{this.renderImage(3, sortedImages[3])}</li>
              <li>
                {sortedImages.length > 5 && (
                  <div className={styles.overlay}>
                    <div>
                      <p>+{sortedImages.length - 5}</p>
                    </div>
                  </div>
                )}
                {this.renderImage(4, sortedImages[4])}
              </li>
            </ul>
          </div>
        </>
      );
    }
  }
}
