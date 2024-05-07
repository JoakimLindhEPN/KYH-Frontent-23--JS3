import { Features } from "./features"
import { Hero } from "./hero"

export const Blocks = ({ blocks }) => {
  console.log(blocks)



  return (
    <>
      {
        blocks.map(block => {

          let Component

          switch(block.__component) {
            case 'layout.hero':
              Component = Hero
              break
            
              case 'layout.features':
                Component = Features
                break
          }

          return <Component key={block.id} data={block} />
        })
      }
    </>
  )
}