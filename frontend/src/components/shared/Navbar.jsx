import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Avatar, AvatarImage } from '../ui/avatar'
import image1 from '../../assets/person.png'
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const navigation = [
    { name: 'Discover', href: '#' },
    { name: 'For job seekers', href: '#' },
    { name: 'For companies', href: '#' },
]

export default function Example() {
    const user = false;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <Link to='/' className="-m-1.5 p-1.5">
                            <span className="font-bold text-[24px]">hiredpath<span className='text-blue-600'>::</span></span>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 ">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-500">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    {
                        !user ? (
                            <div  className="hidden lg:flex lg:flex-1 lg:justify-end gap-5">
                                 <Link to='/login'><Button className="text-sm font-semibold leading-6 text-gray-900 bg-white border border-solid px-6 rounded-xl hover:bg-black hover:text-white py-2">
              Log in 
            </Button></Link>
            <Link to='/signup'>
            <Button className="text-sm font-semibold leading-6 text-white bg-black border border-solid px-6 rounded-xl hover:bg-gray-100 hover:text-black animate-in py-2">
              Sign Up <span aria-hidden="true" className='pl-1'>→</span>
            </Button></Link>
                            </div>

                        ) : (
                            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                       
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer border-2 ">
                                        <AvatarImage src={image1} alt="@shadcn" />
    
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div className='flex gap-4 space-y-2'>
                                        <Avatar className="cursor-pointer border-2 space-y-1">
                                            <AvatarImage src={image1} alt="@shadcn" />
    
                                        </Avatar>
                                        <div>
                                            <h1 className='font-medium'>Ishita Malik</h1>
                                            <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet.</p>
                                        </div>
    
                                    </div>
                                    <div className='flex text-gray-600 gap-5 mt-5'>
                                        <div className='flex w-fit items-center gap-2'>
                                            <Button className="bg-black text-white rounded-xl hover:bg-gray-800 hover:text-white flex items-center gap-2 text-[12px]">
                                                <User2 className="text-white " />
                                                View Profile
                                            </Button>
                                            <Button className="bg-red-500 text-white rounded-xl hover:bg-red-600 hover:text-white flex items-center gap-2 text-[12px]">
                                                <LogOut className="text-white text-[12px]" />
                                                Logout
                                            </Button>
                                        </div>
    
    
                                    </div>
                                </PopoverContent>
    
    
                            </Popover>
    
                        </div> 
                        )
                    }
                   

                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="font-bold text-[24px]">hiredpath<span className='text-blue-600'>::</span></span>
                                {/* <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                /> */}
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Sign Up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

        </div>
    )
}
