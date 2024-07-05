const Phone = () => {
  return (
    <div className="w-[22rem] border-[.9rem] rounded-[2.5rem] border-white bg-app-bg overflow-hidden text-xs shadow-2xl">
      <div className="rounded-3xl">

        <div className="flex flex-1 items-center p-6 pt-12 relative bg-gradient-to-r from-gradient-violet to-gradient-magenta rounded-b-lg ">
          <div className="w-2 h-2 border-l-2 border-t-2 border-white -rotate-45 mr-2"></div>

          <div className="flex flex-1 items-center gap-2">
            <img
              src="/images/avatar.jpg"
              alt="user avatar"
              width={35}
              height={35}
              className="rounded-full border-2 border-white" />

              <div>
                <h2 className="text-white font-medium text-base leading-5">Samuel Green</h2>
                <p className="text-xs text-sub-heading-app">Available to work</p>
              </div>

              
          </div>
          <div className="grid gap-[.1rem]">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>

          <div className="w-[65%] h-[2rem] bg-white rounded-full absolute -top-3
          left-[50%] -translate-x-[50%]"></div>
        </div>
      </div>


      <div className="p-3">
        <div>
          <p className="text-chat-left text-xs w-[13rem] bg-gradient-magenta bg-opacity-10 rounded-lg p-2 pr-6 mb-3 rounded-bl-sm">That sounds great. I'd be happy with that</p>
          <p className="text-chat-left text-xs w-[13rem] bg-gradient-magenta bg-opacity-10 rounded-lg p-2 pr-6 mb-3 rounded-bl-sm">Could you send over some pictures of your dog, please?</p>
        </div>

        <div className="flex items-center gap-3 justify-end mt-8 mb-3">
          <img 
            src="/images/dog-image-1.jpg" 
            alt="dog image"
            width={60}
            height={60}
            className="rounded-xl" />
          <img 
            src="/images/dog-image-2.jpg" 
            alt="dog image"
            width={60}
            height={60}
            className="rounded-xl" />
          <img 
            src="/images/dog-image-3.jpg" 
            alt="dog image"
            width={60}
            height={60}
            className="rounded-xl" />
        </div>

        <div className="flex flex-col items-end">
          <p className="text-chat-right text-xs w-[13rem] bg-white rounded-lg p-3 mb-3 shadow-lg shadow-gray-200 rounded-br-sm">Here are a few pictures. She's a happy girl!</p>
          <p className="text-chat-right text-xs w-max-content bg-white rounded-lg p-3 mb-3 shadow-gray-200 rounded-br-sm">Can you make it?</p>
        </div>

        <div className="mb-4">
          <p className="text-chat-left text-xs w-[13rem] bg-gradient-magenta bg-opacity-10 rounded-lg p-2 pr-6 mb-3 rounded-bl-sm">She looks so happy! The time we discussed works. How long shall I take her out for?</p>

          <div>
            <label 
              htmlFor="halfHourSelect"
              className="flex items-center justify-between bg-gradient-to-r from-gradient-magenta to-gradient-violet text-sub-heading-app text-xs p-2 px-4 w-[14rem] rounded-xl rounded-bl-sm mb-3" >
              <div className="flex items-center gap-2">
                <input 
                  type="radio" 
                  id="halfHourSelect" 
                  className="sr-only"/>
                
                <div className="w-[1rem] h-[1rem] rounded-full border-2 border-sub-heading-app"></div>
                <span>30 mins walk</span>
              </div>
              <p className="text-xl font-bold text-white">$29</p>
            </label>
          </div>

          <div>
            <label 
              htmlFor="halfHourSelect"
              className="flex items-center justify-between bg-gradient-to-r from-gradient-magenta to-gradient-violet text-sub-heading-app text-xs p-2 px-4 w-[14rem] rounded-xl rounded-bl-sm" >
              <div className="flex items-center gap-2">
                <input 
                  type="radio" 
                  id="halfHourSelect" 
                  className="sr-only"/>
                
                <div className="w-[1rem] h-[1rem] rounded-full border-2 border-sub-heading-app"></div>
                <span>1 hour walk</span>
              </div>
              <p className="text-xl font-bold text-white">$49</p>
            </label>
          </div>
        </div>

        <div className="relative">
          <label 
            htmlFor="messageInput" >
            <input 
              type="text" 
              id="messageInput"
              placeholder="Type a message"
              className="p-4 rounded-full w-full" />
            <button className="w-8 h-8 grid place-items-center rounded-full bg-black absolute top-2 right-2">
              <div className="w-3 h-3 border-t-4 border-l-4 border-white rotate-[135deg]"></div>
            </button>
          </label>
        </div>


      </div>
    </div>
  )
}

export default Phone