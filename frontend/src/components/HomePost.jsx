

const HomePost = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left div */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img src="https://reactjs.org/logo-og.png" alt="" className="h-full w-full object-cover"/>

      </div>

      {/* right div */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          10 Uses of artificial intelligence in day to day life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@prashant</p>
          <div className="flex space-x-2">
            <p>29/03/2024</p>
            <p>16:45</p>

          </div>
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquam perspiciatis autem odit? Laudantium veniam rem, voluptatem aut accusantium maxime quo! Maiores ea dolore quod?
        </p>

      </div>

    </div>
  )
}

export default HomePost