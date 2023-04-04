import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { updateFilterStatus } from '../slices/todoSlice';
import { updateSearchValue } from '../slices/todoSlice';

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const initialSearchValue = useSelector((state) => state.todo.searchValue);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const [searchValue, setSearchValue] = useState(initialSearchValue);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  const updateSearch = (e) => {
    setSearchValue(e.target.value);
    dispatch(updateSearchValue(e.target.value));
  };

  return (
    <div>
      <header className={styles.header}>
        <h1 className="title">Todo List</h1>
        <div class={styles.searchContainer}>
        <input type="text" placeholder="Search..." onChange={(e) => updateSearch(e)} />
        <i class={styles.searchIcon}></i>
      </div>
        <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Todo
      </Button>
      </header>
  <div>
    <br /><br /><br />
      <div className={styles.appHeader}>
      <SelectButton
        id="status"
        onChange={(e) => updateFilter(e)}
        value={filterStatus}
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
      </div>
    </div>
  
  );
}

export default AppHeader;
