import useWindowStore from '#store/window'
import React, { useRef } from 'react'

const WindowWrapper = (Component,windowKey) => {

    const Wrapped = (props) =>{
        const {focusWindow,windows} = useWindowStore();
        const { isOpen,zIndex} = windows[windowKey]
        const ref = useRef(null);

        return <section ref={ref} id={windowKey} style={{zIndex}} className='absolute'>
            <Component {...props}/>
        </section>
    }

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'}`
  return Wrapped
}


export default WindowWrapper