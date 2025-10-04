
import React from 'react'

function Post({name, date, venue, time}) {
  return (
    <div>
      <div>
        <b>
          {name}
        </b>
      </div>
      <div>
        {date}
      </div>
      <div>
        {venue}
      </div>
      <div>
        {time} 
      </div>
    </div>
  )
}

export default Post