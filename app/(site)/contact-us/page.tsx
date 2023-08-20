import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  return (
    <div><h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{"Contact US"}</h1>
      <form className="w-full max-w-lg px-5" action="https://formspree.io/f/xpzblrbk" method="POST">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-zinc-500 text-xs font-bold mb-2" htmlFor="name">
              FirstName
            </label>
            <input className="appearance-none block w-full bg-gray-300 dark:bg-gray-200 text-zinc-500  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" name="name" required={true} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-zinc-500  text-xs font-bold mb-2" htmlFor="surname">
              Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-300 dark:bg-gray-200  text-zinc-500  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="surname" type="text" name="surname" required={true} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-zinc-500 text-xs font-bold mb-2" htmlFor="_replyto">
              E-mail
            </label>
            <input className="appearance-none block w-full bg-gray-300 dark:bg-gray-200   text-zinc-500  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="_replyto" name="_replyto" type="email" required={true} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-zinc-500  text-xs font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className=" no-resize appearance-none block w-full bg-gray-300 dark:bg-gray-200 text-zinc-500  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="message"></textarea>
          </div>
        </div>
        <div className="g-recaptcha" data-sitekey="6LcZatslAAAAACxQQEO4UZCzd7AG_ww8uf14wXKu"></div>
        <input type="text" name="_gotcha" className="hidden" />
        <div className="flex flex-wrap mb-6">
          {/* <div className="block"> */}
          <input className="shadow w-full hover:bg-zinc-400 focus:shadow-outline focus:outline-none text-white bg-zinc-500  font-bold py-3 px-4 mb-3 rounded" type="submit" value="Send" />
          {/* </div> */}
        </div>
      </form>
    </div>
  )
}

