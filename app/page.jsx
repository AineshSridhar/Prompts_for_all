import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="font-semibold text-2xl text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="text-orange-500 text-center"> AI-Powered Prompts </span>
        </h1>
        <p className="text-center">
            Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts
        </p>

        <Feed />
    </section>
  )
}

export default Home
