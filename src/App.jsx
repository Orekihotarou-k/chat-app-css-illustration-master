import Phone from "./components/Phone";

export default function App() {
  return (
    <main className="w-full sm:min-h-dvh mx-auto relative grid py-16 place-items-center justify-center max-container font-rubik px-4 overflow-hidden">
      <div className="absolute -top-60 sm:top-0 -left-80 sm:-left-32 w-[32rem] h-[85%] bg-gradient-to-b from-gradient-magenta to-gradient-violet rounded-b-full -z-10"></div>

      <div className="absolute -right-[20rem] sm:-right-[10rem] bottom-0 w-[32rem] h-[85%] bg-gradient-magenta bg-opacity-5 rounded-t-full -z-20"></div>

      <div className=" lg:w-[60rem] grid sm:grid-cols-2 place-items-center gap-16 text-lg text-paragraph leading-normal">
        <Phone />

        <div className="text-center sm:text-left">
          <h1 className="text-[2.65rem] text-main-heading font-medium mb-4">Simple booking</h1>
          <p>Stay in touch with dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed, you can rate the walker and book again through the chat</p>
        </div>
      </div>

    </main>
  )
}