import React from 'react'
import { useContext } from 'react'
// COMPONENT IMPORTS
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
// CONTEXT
import GithubContext from '../../context/github/GithubContext'

// COMPONENT START
const UserResults = () => {
  const { loading, users } = useContext(GithubContext)

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults
