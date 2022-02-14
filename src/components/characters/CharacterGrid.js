import React from 'react'
import CharacterItem from './CharacterItem'


const CharacterGrid = ({data, isLoading}) => {
  return(
    <section className='cards'>
        {data.map(item => (
            <CharacterItem item={item} key={item.char_id} />
        ))}
    </section>
    )
}

export default CharacterGrid