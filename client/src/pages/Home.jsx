import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../redux/actions/actions'
import Pagination from '../components/Pagination/Pagination'
import Card from '../components/Card/Card'

const Home = () => {

const recetas = useSelector((state) => state.recipes)
const dispatch = useDispatch()

useEffect(() => {
   dispatch(getRecipes());
  }, [dispatch])
    
  const [currentPage, setCurrentPage ] = useState(1)
  const [postsPerPage, setPostsPerPage ] = useState(9) 
 
  const lastPostsIndex = currentPage * postsPerPage
  const firstPostsIndex = lastPostsIndex - postsPerPage
  const currentPosts = recetas.slice(firstPostsIndex,lastPostsIndex)

  return (
    <>
      {
        currentPosts.length === 0 
        ? ( <h1>CARGANDO</h1> )
        : 
        (
          <div>
            {
              currentPosts.map(el => (
                <Card
                key={el.id}
                id={el.id}
                name={el.id}
                image={el.image}
                healthScore={el.healthScore}
                />
              ))
          }
          <Pagination totalPosts={recetas.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
          </div>
        )

     }
    </>
  )
}

export default Home
/*{
              recetas.map(el => {
                <Card
                key={el.id}
                id={el.id}
                name={el.id}
                image={el.image}
                healthScore={el.healthScore}
                />
            })
          }*/