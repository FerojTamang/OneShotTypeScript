'use client'

import react from 'react'

const PreviewButton = ({fileLink} : {fileLink:string}) => {
const handlePreview = ()=> {
    window.open(fileLink, "_blank")
}
return (
<div>
    <button onClick={handlePreview}  className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
        Preview Button
    </button>
    </div>
)

}

export default PreviewButton