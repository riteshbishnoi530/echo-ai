import React from 'react'
import { COUNTER_LIST } from '../utils/helper';

const Counter = () => {
    return (
        <div className="pt-[56px] pb-[175px] max-lg:py-10 max-md:py-8">
            <div className="max-w-[1138px] mx-auto">
                <div className="flex max-lg:flex-wrap justify-center gap-y-10 max-md:gap-[30px]">
                    {COUNTER_LIST.map((item, index) => (
                        
                        <div
                            className={`w-4/12 max-lg:w-1/2 max-md:w-full justify-center flex max-md:pr-0 pr-[17px] border-r-liner border-solid   ${index === 1
                                    ? "max-lg:border-r-0"
                                    : index === 2
                                        ? "!border-r-0 max-lg:w-full max-lg:pr-0 "
                                        : ""
                                }`}
                        >
                            <div className="max-w-[365px] justify-center items-center flex flex-col">
                                <h2 className='text-white text-5xl font-semibold mb-2'>{item.heading}
                                    </h2>
                                
                                <p
                                    className={`max-w-[146px] text-center text-white leading-[150%] text-base max-md:text-sm ${index === 2 ? "max-w-[187px]" : "max-w-[146px]"
                                        }`}
                                >
                                    {item.description}{" "}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Counter