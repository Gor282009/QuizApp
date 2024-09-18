import React from 'react'
 
const HeaderItens = [
    {id:1, name: "Home"},
    {id:2, name: "About"},
    {id:3, name: "Services"},
    {id:4, name: "Contact"},
    {id:5, name: "Blog"},
]

function Header() {
  return (
    <div >
        <header className='w-full flex justify-around bg-yellow p-[5px] items-center '>
            <div>
                <img src="https://c8.alamy.com/comp/H2N261/test-icon-H2N261.jpg" 
                className='w-[90px] h-[90px] rounded-full object-cover' alt="" />
            </div>
            <nav>
                <ul className='flex gap-7'>
                    {
                        HeaderItens.map(item => (
                            <li key={item.id}>
                                <a href="#" className='text-blue'>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header