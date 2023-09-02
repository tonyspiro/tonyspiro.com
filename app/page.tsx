export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-4">
          Hello, I&apos;m Tony Spiro.
        </h1>
        <p className="max-w-[700px] text-lg text-gray-800 dark:text-dark-gray-800 mb-6">
          Welcome to my corner of the internet universe.
        </p>
        <p className="max-w-[700px] text-lg text-gray-800 dark:text-dark-gray-800 mb-2">
          Some things about me:
        </p>
        <p className="max-w-[700px] text-lg text-gray-800 dark:text-dark-gray-800 mb-6">
          <ul className="ml-6 list-disc">
            <li>
              I&apos;m the CEO of{" "}
              <a
                href="https://www.cosmicjs.com"
                className="text-blue-500 dark:text-blue-400"
              >
                Cosmic
              </a>
              . ✨
            </li>
            <li>I grew up in Los Angeles, California. ☀️</li>
            <li>
              I studied music composition and performance because I love jazz
              music. 🎶
            </li>
            <li>I&apos;ve traveled all over the world performing music. 🌎</li>
            <li>I spent 20 years living in Texas. 🤠 </li>
            <li>I&apos;m a self-taught software engineer. 💻</li>
            <li>I founded Cosmic in 2016. 🏗️</li>
            <li>
              I attended{" "}
              <a
                href="https://ycombinator.com"
                className="text-blue-500 dark:text-blue-400"
              >
                Y Combinator
              </a>{" "}
              (W19). 🟧
            </li>
            <li>I now live in SF. 🌉</li>
          </ul>
        </p>
        <p className="max-w-[700px] text-lg text-gray-800 dark:text-dark-gray-800 mb-6">
          When I&apos;m not building digital products, you can find me playing
          music (🥁, 🎹, 🎸), hiking 🗻, surfing 🏄🏻‍♂️, or grilling. 🥩
        </p>
        <p className="max-w-[700px] text-lg text-gray-800 dark:text-dark-gray-800">
          What to learn more?{" "}
          <a
            href="https://x.com/tonyspiro"
            className="text-blue-500 dark:text-blue-400"
          >
            Follow me on X
          </a>
          .
        </p>
      </div>
    </section>
  )
}
