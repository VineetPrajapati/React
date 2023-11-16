
function card({userName, btnText = "visitme"}) {
  return (
    <><div className="relative h-[400px] w-[300px] rounded-md">
    <img
      src="https://images.pexels.com/photos/17223425/pexels-photo-17223425/free-photo-of-person-holding-a-canon-eos-m50-digital-camera.jpeg"
      alt="AirMax Pro"
      className="z-0 h-full w-full rounded-md object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">{userName}</h1>
      <p className="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
        {btnText} →
      </button>
    </div>
  </div>
    </>
  )
}

export default card