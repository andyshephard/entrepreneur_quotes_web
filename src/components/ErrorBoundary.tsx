import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-cream flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-coffee-800 mb-4">Oops, something went wrong!</h2>
            <p className="text-coffee-600 mb-4">Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-terra-600 text-cream px-6 py-2 rounded-lg hover:bg-terra-500 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 