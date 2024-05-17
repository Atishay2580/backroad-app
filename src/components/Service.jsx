import React from 'react'

const Service = ({icons,title,info}) => {
  return (
    <>
    <article className="service">
                <span className="service-icon"><i className={icons}></i></span>
                <div className="service-info">
                  <h4 className="servive-title">{title}</h4>
                  <p className="service-text">
                    {info}
                  </p>
                </div>
        </article>
    </>
  )
}

export default Service