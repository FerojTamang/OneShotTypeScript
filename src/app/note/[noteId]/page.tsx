import { Note } from '@/types'
import Image from 'next/image'
import React from 'react'
import PreviewButton from './components/PreviewButton'

const SingleNote = async ({params} : {params : {noteId : string}}) => {
let note : Note | null = null
 try {
    const response= await fetch (`${process.env.BACKEND_URL}/notes/${params.noteId}`)
    if(!response.ok) {
        throw new Error ("Error fetching")

    }
    
    const {data} =await response.json()
    note = data

 } catch (error) {
    throw new Error ("Error fetching")
    
 }


    return(
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                    <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                        <Image src={note?.file as string} alt= {note?.title as string} width={500} height={400} />
                    </div>

                    <div className="flex -mx-2 mb-4">
                        <div className="w-1/2 px-2">
                        <PreviewButton fileLink={note?.file as string} />
                        </div>

                        <div className="w-1/2 px-2">
                            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                        </div>

                    </div>
                </div>

                <div className="md:flex-1 px-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{note?.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {note?.subtitle}
                    </p>
                    
                
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                            {note?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}
export default SingleNote