import Link from "next/link";

import { db } from "../server/db/index"

export const dynamic = "force-dynamic"


export default async function HomePage() {

  const contacts = await db.query.users.findMany()

  return (
    <main className="flex flex-wrap gap-5">
      <div className="mx-auto px-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Users</h2>
        </div>
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {contacts.map((cnt) => (

            <div className=" border-2 rounded-xl p-8 border-solid hover:border-green-600" key={cnt.id}>
              <article className="flex max-w-xl flex-col items-start justify-between ">
                <div className="relative mb-8 flex items-center gap-x-4">
                  <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50"></img>
                  <div className="text-sm leading-6">
                    <p className="font-semibold ">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        {cnt.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{cnt.role}</p>
                  </div>
                </div>
                {/* <div className="flex items-center gap-x-4 text-xs"> */}
                {/*   <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a> */}
                {/* </div> */}
                <div className="group relative text-gray-400">
                  <p>ID: {cnt.id}</p>
                  <p>Email: {cnt.email}</p>
                  <p className=" text-xs pt-10 text-gray-700">posted: {cnt.createdAt.toString()}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
