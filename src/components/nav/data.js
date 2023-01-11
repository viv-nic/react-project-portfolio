import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {SlPuzzle} from 'react-icons/sl'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineReviews} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'


const data = [
    {id: 1, link: '/', icon: <AiOutlineHome />},
    {id: 2, link: '/about', icon: <AiOutlineUser />},
    {id: 3, link: '/experience', icon: <BiBook />},
    {id: 4, link: '/services', icon: <SlPuzzle />},
    {id: 5, link: '/portfolio', icon: <RiServiceLine />},
    {id: 6, link: '/testimonials', icon: <MdOutlineReviews />},
    {id: 7, link: '/contact', icon: <BiMessageSquareDetail />}
]

export default data;