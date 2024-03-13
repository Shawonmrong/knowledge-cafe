
import PropTypes from 'prop-types'
import Bookmark from '../bookmark/bookmark'

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className=" md:w-1/3  bg-[#e6e6e9]  ml-4 mt-2 pt-4">
            <div className='pb-4'>
                <h3 className=" text-4xl text-center mx-8 p-4 bg-[#edf2f4] border border-[#d6ce93] hover:border-[#a3a380]">Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center mx-8 p-4 bg-[#f0f7f4] border border-[#f19c79] hover:border-[#a44a3f]">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks