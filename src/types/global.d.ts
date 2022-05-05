declare global {
  interface Document {
    documentMode?: any
    xxx: string
  }

  interface Window {
    MSStream?: any
  }
}

export {}
