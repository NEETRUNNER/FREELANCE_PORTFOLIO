import { Link } from 'react-scroll'; // Для скролла

const Arrow = () => {
    return (
        <>
        <Link to='slider' smooth={true} offset={-64}>
            <img className='absolute left-1/2 transform -translate-x-1/2 top-[90%] cursor-pointer' width="64" height="64" src="https://img.icons8.com/avantgarde/100/expand-arrow.png" alt="chevron-down"/> 
        </Link>
        </>
    )
}

export default Arrow;