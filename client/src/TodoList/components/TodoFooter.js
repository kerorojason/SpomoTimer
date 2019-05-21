import React from 'react';
import Left from '../containers/Left';
import FilterButton from '../containers/FilterButton';
import ClearButton from '../containers/ClearButton';
import { VisibilityFilters } from '../../actions';

export default () => {
  return (
    <footer className='todo-app__footer' id='todo-footer'>
      <Left />
      <ul className='todo-app__view-buttons'>
        <FilterButton filter={VisibilityFilters.SHOW_ALL}>All</FilterButton>
        <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>
          Active
        </FilterButton>
        <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterButton>
      </ul>
      <div className='todo-app__clean' id='clean'>
        <ClearButton>Clear Completed</ClearButton>
      </div>
    </footer>
  );
};
