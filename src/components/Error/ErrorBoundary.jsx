import React from 'react'
import { DefaultErrorPage } from './NotMatch'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      hasError: false
    }
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setError = error;
    if (process.env.NODE_ENV === "development") {
      console.dir({ error, errorInfo })
    }
    //+ 필요시 에러 발생마다 별도로 기록
  }

  render() {
    if (this.state.hasError) {
      return <DefaultErrorPage errorMsg={String(this.state.error)} />
    }

    return this.props.children
  }
}