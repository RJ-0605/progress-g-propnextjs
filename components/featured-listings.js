const FeaturedListings = () => {
  return (
    <div className="my-32 w-full grid grid-cols-2 space-x-7 shadow-md overflow-hidden">
      <div className="flex flex-col items-start pt-5 pl-5">
        <h1 className="text-2xl">Saint Helena, CA, US</h1>
        <div className="flex flex-col space-y-4">
          <p className="text-base">Sotheby's International Realty - Wine Country - East Napa Street Brokerage</p>
          <p className="text-base">$18,500,000 - $18,500,000</p>
        </div>
        <a className="py-2 px-5 mt-auto -ml-5 border-b-2 link-with-hover-effect hover:text-white">View property</a>
      </div>
      
      <div className="max-h-60 overflow-hidden">
        <img src="https://th.bing.com/th/id/R6456abb3a0a5adc3db8b51eccc465e37?rik=oYt5gScpeYMckA&riu=http%3a%2f%2fimages.dailyhive.com%2f20160919115313%2fReal-estate-in-Vancouver-Shutterstock.jpg&ehk=b1j%2btOwjQI62cmjh2v0rfXh1pFaSHc5BnpwPhXrvnL0%3d&risl=&pid=ImgRaw" />
      </div>

    </div>
  )
}

export default FeaturedListings;