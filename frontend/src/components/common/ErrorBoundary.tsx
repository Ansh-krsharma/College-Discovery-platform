import React from "react";

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (
      this.state.hasError
    ) {
      return (
        <div className="min-h-screen flex justify-center items-center">
          Something went wrong.
        </div>
      );
    }

    return this.props.children;
  }
}