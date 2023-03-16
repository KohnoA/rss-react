import { Component } from 'react';
import styles from './Main.module.scss';
import SearchPanel from 'src/components/SearchPanel/SearchPanel';

export default class Main extends Component {
  render() {
    return (
      <div className="container page" data-testid="page-main">
        <h2 className={styles.main__title}>Main</h2>

        <SearchPanel />
      </div>
    );
  }
}
