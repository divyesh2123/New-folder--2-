import React, { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

export default class ErrorBoundry extends Component<Props> {

    state = {
        hasError: false
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        this.setState({
            hasError: true
        })
    }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
