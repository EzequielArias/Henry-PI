import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../redux/actions/actions'
import Pagination from '../components/Pagination/Pagination'
import Card from '../components/Card/Card'
import Header from '../components/Navbar/Navbar'

const Home = () => {

let recetas = useSelector((state) => state.inputSearch ? state.recipesFilter : state.recipes)
let dispatch = useDispatch()

useEffect(() => {
 if(recetas.length < 1) dispatch(getRecipes());
},[dispatch])
    
  const [currentPage, setCurrentPage ] = useState(1)
  const [postsPerPage] = useState(9) 
 
  const lastPostsIndex = currentPage * postsPerPage
  const firstPostsIndex = lastPostsIndex - postsPerPage
  const currentPosts = recetas.slice(firstPostsIndex,lastPostsIndex)


  return (
    <>
      <Header/>
      {
        currentPosts.length === 0 
        ? ( <h1>CARGANDO</h1> )
        : 
        (
          <div className='Home-card'>
            {
              currentPosts.map(el => (
                <Card
                key={el.id}
                id={el.id} 
                name={el.name}
                image={el.image}
                healthScore={el.healthScore}
                diets={el.diets}
                />
              ))
          }
          </div>
        )
     }
      <Pagination 
        totalPosts={recetas.length} 
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default Home
