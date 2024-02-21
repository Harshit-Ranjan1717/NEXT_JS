import React from 'react'

const ProfileLayout = ({children}) => {
  return (
    <div>
      <h1> This is profile HEader </h1>
      {children}
      <h1> This is profile Footer </h1>
    </div>
  )
}

export default ProfileLayout
