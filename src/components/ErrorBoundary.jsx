import { Component } from 'react';
import Icon from './Icon';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('The task list could not be displayed.', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="empty-state error-state" role="alert">
          <div className="empty-icon"><Icon name="list" size={28} /></div>
          <h3>We could not display your tasks.</h3>
          <p>Something went wrong with the task list. Please try again.</p>
          <button
            type="button"
            className="button secondary-button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
