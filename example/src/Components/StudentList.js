import React from 'react'

function StudentList({sName}) {
    if(sName === 'ananya') {
    throw new Error('she does not beong to this class')
}  
return (
    <div>{sName}</div>
  )
}

export default StudentList