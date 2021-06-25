import ShowMoreText from 'react-show-more-text';
import { Component } from 'react';

// ...

class Test extends Component {

    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }

    render() {
        return (
            <div class="w-full max-w-6xl mx-auto">
                <div class="-mx-3 md:flex items-start">
                    <div class="px-3 md:w-1/3">
                        <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img src="https://i.imgur.com/wtEw8cD.jpg" alt="" />
                                </div>
                                <div class="flex-grow pl-3">
                                    <h6 class="font-bold text-sm uppercase text-gray-900">Ашимов Аскар</h6>
                                    <p className="text-gray-600">Главный врач </p>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span><ShowMoreText
                                    /* Default options */
                                    lines={3}
                                    more='Show more'
                                    less='Show less'
                                    className='content-css'
                                    anchorClass='my-anchor-css-class'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={280}
                                >
                                    Lorem ipsum dolor sit amet, consectetur <a href="https://www.yahoo.com/" target="_blank" rel="noopener noreferrer">yahoo.com</a> adipiscing elit, sed do eiusmod tempor incididunt
                                    {/* <a href="https://www.google.bg/" title="Google" rel="nofollow" target="_blank" rel="noopener noreferrer">www.google.bg</a> ut labore et dolore magna amet, consectetur adipiscing elit, */}
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore

                                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                </ShowMoreText><span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                            </div>
                        </div>
                        <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img src="https://i.pravatar.cc/100?img=2" alt="" />
                                </div>
                                <div class="flex-grow pl-3">
                                    <h6 class="font-bold text-sm uppercase text-gray-600">Stevie Tifft.</h6>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span><ShowMoreText
                                    /* Default options */
                                    lines={3}
                                    more='Show more'
                                    less='Show less'
                                    className='content-css'
                                    anchorClass='my-anchor-css-class'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={280}
                                >
                                    Lorem ipsum dolor sit amet, consectetur <a href="https://www.yahoo.com/" target="_blank" rel="noopener noreferrer">yahoo.com</a> adipiscing elit, sed do eiusmod tempor incididunt
                                    {/* <a href="https://www.google.bg/" title="Google" rel="nofollow" target="_blank" rel="noopener noreferrer">www.google.bg</a> ut labore et dolore magna amet, consectetur adipiscing elit, */}
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore

                                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                </ShowMoreText><span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="px-3 md:w-1/3">
                        <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img src="https://i.pravatar.cc/100?img=3" alt="" />
                                </div>
                                <div class="flex-grow pl-3">
                                    <h6 class="font-bold text-sm uppercase text-gray-900">Толегенова Сауле</h6>
                                    <p className="text-gray-600">Заведующий лабораторией</p>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span><ShowMoreText
                                    /* Default options */
                                    lines={3}
                                    more='Show more'
                                    less='Show less'
                                    className='content-css'
                                    anchorClass='my-anchor-css-class'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={280}
                                >
                                    Lorem ipsum dolor sit amet, consectetur <a href="https://www.yahoo.com/" target="_blank" rel="noopener noreferrer">yahoo.com</a> adipiscing elit, sed do eiusmod tempor incididunt
                                    {/* <a href="https://www.google.bg/" title="Google" rel="nofollow" target="_blank" rel="noopener noreferrer">www.google.bg</a> ut labore et dolore magna amet, consectetur adipiscing elit, */}
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore

                                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                </ShowMoreText><span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                            </div>
                        </div>
                        <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img src="https://i.pravatar.cc/100?img=4" alt="" />
                                </div>
                                <div class="flex-grow pl-3">
                                    <h6 class="font-bold text-sm uppercase text-gray-600">Charlie Howse.</h6>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span><ShowMoreText
                                    /* Default options */
                                    lines={3}
                                    more='Show more'
                                    less='Show less'
                                    className='content-css'
                                    anchorClass='my-anchor-css-class'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={280}
                                >
                                    Lorem ipsum dolor sit amet, consectetur <a href="https://www.yahoo.com/" target="_blank" rel="noopener noreferrer">yahoo.com</a> adipiscing elit, sed do eiusmod tempor incididunt
                                    {/* <a href="https://www.google.bg/" title="Google" rel="nofollow" target="_blank" rel="noopener noreferrer">www.google.bg</a> ut labore et dolore magna amet, consectetur adipiscing elit, */}
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore

                                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                </ShowMoreText><span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="px-3 md:w-1/3">
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img src="https://i.pravatar.cc/100?img=6" alt="" />
                                </div>
                                <div class="flex-grow pl-3">
                                    <h6 class="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span><ShowMoreText
                                    /* Default options */
                                    lines={3}
                                    more='Show more'
                                    less='Show less'
                                    className='content-css'
                                    anchorClass='my-anchor-css-class'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={280}
                                >
                                    Lorem ipsum dolor sit amet, consectetur <a href="https://www.yahoo.com/" target="_blank" rel="noopener noreferrer">yahoo.com</a> adipiscing elit, sed do eiusmod tempor incididunt
                                    {/* <a href="https://www.google.bg/" title="Google" rel="nofollow" target="_blank" rel="noopener noreferrer">www.google.bg</a> ut labore et dolore magna amet, consectetur adipiscing elit, */}
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore

                                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                </ShowMoreText><span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                            </div>
                        </div>
                        <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img src="https://i.pravatar.cc/100?img=6" alt="" />
                                </div>
                                <div class="flex-grow pl-3">
                                    <h6 class="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span><ShowMoreText
                                    /* Default options */
                                    lines={3}
                                    more='Show more'
                                    less='Show less'
                                    className='content-css'
                                    anchorClass='my-anchor-css-class'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={280}
                                >
                                    Lorem ipsum dolor sit amet, consectetur <a href="https://www.yahoo.com/" target="_blank" rel="noopener noreferrer">yahoo.com</a> adipiscing elit, sed do eiusmod tempor incididunt
                                    {/* <a href="https://www.google.bg/" title="Google" rel="nofollow" target="_blank" rel="noopener noreferrer">www.google.bg</a> ut labore et dolore magna amet, consectetur adipiscing elit, */}
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore

                                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                </ShowMoreText><span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test;