import React from 'react'
import SeedList from './SeedList'
import Navbar from './Navbar'
import AddSeed from './AddSeed'

function SeedPage() {
  return (
    <div>
        <Navbar />
        <AddSeed />
        <SeedList />
    </div>
  )
}

export default SeedPage