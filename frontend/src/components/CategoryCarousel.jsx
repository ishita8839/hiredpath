import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Mobile Developer",
    "DevOps Engineer",
    "Data Scientist",
    "UI/UX Designer",
    "Data Analyst"
]

function CategoryCarousel() {
    return (
        <div >
            <Carousel className="w-full max-w-xl mx-auto mb-10">
                <CarouselContent className="space-x-2">
                    {
                        category.map((cat, index) => (
                            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                                <Button onClick={() => searchJobHandler(cat)} variant="outline" className="rounded-xl bg-[#e4e3fc] text-black outline-none shadow-xl border-gray-200 hover:bg-white hover:text-black">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel
