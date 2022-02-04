import Categories from '../components/Categories'
import HotItems from '../components/HotItems'
import NewItems from '../components/NewItems'
import PromotionArea from '../components/PromotionArea'

const Home = () => {
  return (
    <main>
      <PromotionArea />
      <Categories />
      <NewItems />
      <HotItems />
    </main>
  )
}

export default Home
