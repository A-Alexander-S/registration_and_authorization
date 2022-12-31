import { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import './pagination.scss';

function Pagination({
  length,
  onClick
}) {

  const [activePage, setActivePage] = useState(1);
  const [arrayPagination, setArrayPagination] = useState([]);

  const indent = 2; // Число цифр показываемых с лева и права от активной

  useEffect(() => {
    let items = [];
    let currentPage = activePage;

    // Номера слева и справа относительно активного номера, которые остаются видимыми
    let left = Math.max(currentPage - indent, 1);
    let right = Math.min(left + indent * 2, length);

    // Корректировка когда страница в конце
    if (currentPage >= length - indent) {
      left = Math.max(length - indent * 2, 1);
    };

    // Первая страница всегда нужна
    if (left > 1) {
      items.push(1);
    };

    // Пропуск
    if (left > 2) {
      items.push(null);
    };

    // Последваотельность страниц
    for (let page = left; page <= right; page++) {
      items.push(page);
    };

    // Пропуск
    if (right < length - 1) {
      items.push(null);
    };

    // Последнаяя страница
    if (right < length) {
      items.push(length);
    };
    setArrayPagination(items);
  }, [activePage, length]);

  const onClickHandlerNumber = (e) => {

    let page = e.currentTarget.querySelector('.pagination__list-item-number').innerHTML;

    setActivePage(page);
    onClick(page);

    let prevNode =
      e.currentTarget.closest('.pagination__list').querySelector('.pagination__list-item--active')?.classList.remove('pagination__list-item--active');
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {arrayPagination.map((item, index) => (item) ?
          <li
            className="pagination__list-item"
            onClick={onClickHandlerNumber}
            key={index}
          >
            <p className={item == activePage ? "pagination__list-item-number pagination__list-item--active" : "pagination__list-item-number"}> {item}</p>
            <span>{(item == length) ? '' : ','}</span>
          </li> :
          <li
            className="pagination__list-item"
            key={index}
          >
            ...
          </li>
        )}
      </ul>
    </div>
  )
}

Pagination.propTypes = {
  length: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

Pagination.defaultProps = {
  onClick: () => { }
}

export default memo(Pagination);