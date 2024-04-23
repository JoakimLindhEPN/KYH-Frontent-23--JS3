"use client"
import { useState, useRef, useEffect } from "react"
import { LinkList } from "./LinkList"

const Sidebar = () => {
  const [small, setSmall] = useState(false)
  const [sidebarWidth, setsidebarWidth] = useState('250px')
  const sidebarRef = useRef(null)

  useEffect(() => {
    const resizeWindow = () => {
      if (window.innerWidth < 640) {
        Promise.all([
          setSmall(true),
          setsidebarWidth('45px')
        ])

      } else {
        Promise.all([
          setSmall(false),
          setsidebarWidth('250px')
        ])
      }
    }

    window.addEventListener('resize', resizeWindow)
    Promise.all([
      setSmall(window.innerWidth < 640),
      setsidebarWidth(window.innerWidth < 640 ? '45px' :'250px')
    ])

    return () => {
      window.removeEventListener('resize', resizeWindow)
    }
  }, [])

  const handleResize = (event) => {
    setsidebarWidth(`${(event.pageX)}px`);
  };
  
  const stopResize = () => {
    document.removeEventListener('mousemove', handleResize)
    document.body.style.userSelect = 'auto'
  }
  
  const handleMouseDown = () => {
    if (window.innerWidth >= 640) {
      document.body.style.userSelect = 'none'
      document.addEventListener('mousemove', handleResize)
      document.addEventListener('mouseup', stopResize)
    }
  }
  

  return (
    <aside className={`fixed sm:relative z-10 h-full w-full bg-slate-100 sm:min-w-[250px] sm:max-w-[700px]`} style={{width: sidebarWidth}} ref={sidebarRef}>
      <div className="absolute z-20 right-0 w-3 h-full border-r-2 border-slate-300 cursor-ew-resize hover:border-slate-400" onMouseDown={handleMouseDown} />
      <LinkList small={small} />
    </aside>
  )
}
export default Sidebar