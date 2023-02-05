import './featuredProperties.css'

const FeaturedProperties = () => {
  return (
    <div className='fp'>
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/421852968.webp?k=f3889222c82f4a8e3783dddb5f1cc04d6140eeb2d5cb8297817a15aacfe4d191&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">3 Epoques Apartments by Prague Residences</span>
        <span className="fpCity">Prague</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.7</button>
          <span>Fabulous</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/421853145.webp?k=140bfc6c54ee753d4a748ee7b5a86c00c988e6fc9bb340c87172ead66a3ea9d5&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">3 Epoques Apartments by Prague Residences</span>
        <span className="fpCity">Prague</span>
        <span className="fpPrice">Starting from $94</span>
        <div className="fpRating">
          <button>8.3</button>
          <span>Very Good</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">3 Epoques Apartments by Prague Residences</span>
        <span className="fpCity">Budapest</span>
        <span className="fpPrice">Starting from 89</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Fabulous</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">Oriente Palace Apartments</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $74</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Fabulous</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties