import ShowMoreText from 'react-show-more-text';
import { Component } from 'react';

// ...

class Comments extends Component {

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
                                    <img src="https://i.imgur.com/o48qD5D.png" alt="Габдушева Светлана Касымхановна" />
                                </div>
                                <div class="flex-grow pl-3">
                                    <h6 class="font-bold text-sm text-gray-900">Габдушева Светлана Касымхановна</h6>
                                    <p className="text-gray-600">Отличник здравоохранения РК</p>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight"><ShowMoreText
                                    /* Default options */
                                    lines={3}
                                    more='Подробнее'
                                    less='Свернуть'
                                    className='content-css'
                                    anchorClass='my-anchor-css-class'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={280}
                                >"Турсынову Сауле Кадырхановну знаю более 25 лет. Познакомились мы как коллеги в клинико-диагностической лаборатории Больницы скорой медицинской помощи г.Алматы. В процессе нашей совместной деятельности она проявила себя как профессионал высокого класса и надежный товарищ. Постоянно повышая свою квалификацию, она заслуженно росла как специалист лабораторной диагностики — процесса, являющегося основой эффективного лечения пациентов. Принимала участие в работе Алматинского  городского общества врачей-лаборантов, и позже была избрана его председателем. Меня обрадовала новость об открытии ею медицинского центра. Зная ее многие годы, могу подтвердить, что она действительно дорожит своей профессиональной репутацией, применяет самые современные технологии лабораторной диагностики и строго соблюдает все стандарты и нормативы. Желаю ей успеха и процветания!"
                                </ShowMoreText></p>
                            </div>
                        </div>
                        <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img src="https://i.pravatar.cc/100?img=2" alt="" />
                                </div>
                                <div class="flex-grow pl-3">
                                    <h6 class="font-bold text-sm text-gray-600">Stevie Tifft.</h6>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight"><ShowMoreText
                                    /* Default options */
                                    lines={3}
                                    more='Подробнее'
                                    less='Свернуть'
                                    className='content-css'
                                    anchorClass='my-anchor-css-class'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={280}
                                >
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                </ShowMoreText></p>
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
                                    <h6 class="font-bold text-sm text-gray-900">Толегенова Сауле</h6>
                                    <p className="text-gray-600">Заведующий лабораторией</p>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight"><ShowMoreText
                                    /* Default options */
                                    lines={3}
                                    more='Подробнее'
                                    less='Свернуть'
                                    className='content-css'
                                    anchorClass='my-anchor-css-class'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={280}
                                >
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                </ShowMoreText></p>
                            </div>
                        </div>
                        <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img src="https://i.pravatar.cc/100?img=4" alt="" />
                                </div>
                                <div class="flex-grow pl-3">
                                    <h6 class="font-bold text-sm text-gray-600">Charlie Howse.</h6>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight"><ShowMoreText
                                    /* Default options */
                                    lines={3}
                                    more='Подробнее'
                                    less='Свернуть'
                                    className='content-css'
                                    anchorClass='my-anchor-css-class'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={280}
                                >
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                </ShowMoreText></p>
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
                                    <h6 class="font-bold text-sm text-gray-600">Kris Stanton.</h6>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight"><ShowMoreText
                                    /* Default options */
                                    lines={3}
                                    more='Подробнее'
                                    less='Свернуть'
                                    className='content-css'
                                    anchorClass='my-anchor-css-class'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={280}
                                >
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                </ShowMoreText></p>
                            </div>
                        </div>
                        <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img src="https://i.pravatar.cc/100?img=6" alt="" />
                                </div>
                                <div class="flex-grow pl-3">
                                    <h6 class="font-bold text-sm text-gray-600">Kris Stanton.</h6>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight"><ShowMoreText
                                    /* Default options */
                                    lines={3}
                                    more='Подробнее'
                                    less='Свернуть'
                                    className='content-css'
                                    anchorClass='my-anchor-css-class'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={280}
                                >
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                </ShowMoreText></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comments;