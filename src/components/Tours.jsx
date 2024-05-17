import React from 'react'
import tour1 from '../assets/images/tour-1.jpeg'
import tour2 from '../assets/images/tour-2.jpeg'
import tour3 from '../assets/images/tour-3.jpeg'
import tour4 from '../assets/images/tour-4.jpeg'
import { toursdata } from '../data'
import Tour from './Tour'
import Heading from './Heading'

const Tours = () => {
  return <>
  
  <section className="section" id="tours">
      <Heading heading="Featured" subheading="Tours" />

      <div className="section-center featured-center">
        {
          toursdata.map(
            (item) => (
              <Tour {...item} />
            )
          )
        }
      </div>
    </section>

  </>
}

export default Tours