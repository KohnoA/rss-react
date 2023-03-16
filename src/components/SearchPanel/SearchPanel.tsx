import { Component } from 'react';
import styles from './SearchPanel.module.scss';

interface SearchPanelState {
  value: string;
}

export default class SearchPanel extends Component<unknown, SearchPanelState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount(): void {
    const savedValue = localStorage.getItem('search');
    if (savedValue) this.setState({ value: savedValue });
  }

  componentWillUnmount(): void {
    localStorage.setItem('search', this.state.value);
  }

  handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
  }

  render() {
    return (
      <form
        className={styles.search}
        action="#"
        method="GET"
        onSubmit={this.handleSubmit}
        data-testid="search-panel"
      >
        <input
          className={styles.search__input}
          type="text"
          placeholder="I want to find..."
          value={this.state.value}
          onChange={(event) => this.setState({ value: event.target.value })}
        />

        {this.state.value && (
          <>
            <span
              className={styles.search__clean}
              onClick={() => this.setState({ value: '' })}
              data-testid="clean-button"
            />
            <button className={styles.search__find} type="submit">
              Search
            </button>
          </>
        )}
      </form>
    );
  }
}
