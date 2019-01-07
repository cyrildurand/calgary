import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Icon, { ICONS } from './Icon';
import styles from './Pagination.module.scss';

export default class Pagination extends React.Component {
  static propTypes = {
    currentPageIndex: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
    pageLinkBuilder: PropTypes.func.isRequired,
  };

  getPageElement(pageIndex) {
    const { currentPageIndex, pageLinkBuilder } = this.props;

    const getClassName = () => {
      switch (pageIndex) {
        case currentPageIndex:
          return `d-block ${styles.current}`;
        case currentPageIndex + 1:
        case currentPageIndex - 1:
          return 'd-none d-sm-block';
        default:
          return 'd-none d-md-block';
      }
    };

    return (
      <li key={pageIndex} className={getClassName()}>
        <Link to={pageLinkBuilder(pageIndex)} role="button">
          {pageIndex + 1}
        </Link>
      </li>
    );
  }
  getBreakElement(pageIndex) {
    return (
      <li key={pageIndex} className="d-none d-md-block">
        <span>...</span>
      </li>
    );
  }
  // copy/paste from https://github.com/AdeleD/react-paginate/blob/master/react_components/PaginationBoxView.js
  getPagination() {
    const { currentPageIndex, pageCount } = this.props;
    const selected = currentPageIndex + 1;
    const pageRangeDisplayed = 5;
    const marginPagesDisplayed = 2;

    const items = [];

    if (pageCount <= pageRangeDisplayed) {
      for (let index = 0; index < pageCount; index++) {
        items.push(this.getPageElement(index));
      }
    } else {
      let leftSide = pageRangeDisplayed / 2;
      let rightSide = pageRangeDisplayed - leftSide;

      // If the selected page index is on the default right side of the pagination,
      // we consider that the new right side is made up of it (= only one break element).
      // If the selected page index is on the default left side of the pagination,
      // we consider that the new left side is made up of it (= only one break element).
      if (selected > pageCount - pageRangeDisplayed / 2) {
        rightSide = pageCount - selected;
        leftSide = pageRangeDisplayed - rightSide;
      } else if (selected < pageRangeDisplayed / 2) {
        leftSide = selected;
        rightSide = pageRangeDisplayed - leftSide;
      }

      let index;
      let page;
      let breakView;

      for (index = 0; index < pageCount; index++) {
        page = index + 1;

        // If the page index is lower than the margin defined,
        // the page has to be displayed on the left side of
        // the pagination.
        if (page <= marginPagesDisplayed) {
          items.push(this.getPageElement(index));
          continue;
        }

        // If the page index is greater than the page count
        // minus the margin defined, the page has to be
        // displayed on the right side of the pagination.
        if (page > pageCount - marginPagesDisplayed) {
          items.push(this.getPageElement(index));
          continue;
        }

        // If the page index is near the selected page index
        // and inside the defined range (pageRangeDisplayed)
        // we have to display it (it will create the center
        // part of the pagination).
        if (index >= selected - leftSide && index <= selected + rightSide) {
          items.push(this.getPageElement(index));
          continue;
        }

        // If the page index doesn't meet any of the conditions above,
        // we check if the last item of the current "items" array
        // is a break element. If not, we add a break element, else,
        // we do nothing (because we don't want to display the page).
        if (items[items.length - 1] !== breakView) {
          breakView = this.getBreakElement(index);
          items.push(breakView);
        }
      }
    }
    return items;
  }
  render() {
    const { currentPageIndex, pageCount, pageLinkBuilder } = this.props;
    const items = this.getPagination();

    const isFirst = currentPageIndex === 0;
    const isLast = currentPageIndex === pageCount - 1;

    return (
      <ul className={styles.pagination} role="menubar" aria-label="Pagination">
        <li className={`${isFirst ? styles.disabled : ''} d-block d-md-none`}>
          <Link to={pageLinkBuilder(0)} rel="first" role="button">
            <Icon color="rgba(255, 255, 255, 0.85)" icon={ICONS.FIRST} />
          </Link>
        </li>
        <li className={`${isFirst ? styles.disabled : ''} d-block d-md-none`}>
          <Link to={pageLinkBuilder(Math.max(currentPageIndex - 1, 0))} rel="prev" role="button">
            <Icon color="rgba(255, 255, 255, 0.85)" icon={ICONS.PREVIOUS} />
          </Link>
        </li>
        {items}
        <li className={`${isLast ? styles.disabled : ''} d-block d-md-none`}>
          <Link
            to={pageLinkBuilder(Math.min(currentPageIndex + 1, pageCount - 1))}
            rel="next"
            role="button"
          >
            <Icon color="rgba(255, 255, 255, 0.85)" icon={ICONS.NEXT} />
          </Link>
        </li>
        <li className={`${isLast ? styles.disabled : ''} d-block d-md-none`}>
          <Link to={pageLinkBuilder(pageCount - 1)} rel="last" role="button">
            <Icon color="rgba(255, 255, 255, 0.85)" icon={ICONS.LAST} />
          </Link>
        </li>
      </ul>
    );
  }
}
