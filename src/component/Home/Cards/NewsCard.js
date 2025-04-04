import React from 'react'
import './NewsCard.css'
import { Link } from 'react-router-dom';

const NewsCard = ({ data }) => {

  return (
    <>
      <div className="news_card">
        <Link to={data?.url} target="_blank"><div className="news_card_img" style={{ backgroundImage: `url(${data?.image})` }}></div></Link>
        <div className="news_card_details">
          <div className="news_info">
            <p>{data?.title}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsCard
