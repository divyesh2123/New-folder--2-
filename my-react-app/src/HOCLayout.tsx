import React from 'react'
import UIFooter from './UIFooter'
import UIHeader from './UIHeader'
import AppHeader from './AppHeader'

export default function HOCLayout(Component: React.ComponentType) {
  return function HOC() {
    
    return (
      <div>
         <AppHeader/>
        <main>
          <Component />
        </main>
        <UIFooter />
      </div>
    )
  }
}

