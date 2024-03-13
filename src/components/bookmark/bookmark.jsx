import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-[#d8f3dc] p-4 m-4 rounded-xl border border-[#014f86]'>
            <h3 className='text-[24px] text-[#6f1d1b] '>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;