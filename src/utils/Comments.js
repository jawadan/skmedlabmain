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
                                    <img src="https://i.imgur.com/wkyoNny.png" alt="Ибраева Гульмира Алписпаевна" />
                                </div>
                                <div class="flex-grow pl-3">
                                    <h6 class="font-bold text-sm text-gray-900">Ибраева Гульмира Алписпаевна</h6>
                                    <p className="text-sm text-gray-600">Директор Нац.центра непрерывного</p>
                                    <p className="text-sm text-gray-600">образования "PROFESSIONAL", КМН</p>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight"><ShowMoreText
                                    /* Default options */
                                    lines={3}
                                    more='Подробнее'
                                    less='Свернуть'
                                    className='content-css'
                                    anchorClass='my-anchor'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={280}
                                >"Сауле Кадырхановна ведет свою трудовую деятельность на протяжении многих лет в области лабораторной диагностики и на этом поприще зарекомендовала себя грамотным специалистом. За ее плечами опыт работы в многопрофильных клинических лабораториях, где она возглавляла данную службу, поднимала их на качественно новый уровень, готовила лаборатории к проведению международной аккредитации. Имея большой опыт в лабораторной службе республики, зная проблемные вопросы и перспективы ее развития, считаю закономерным открытие Сауле Кадырхановной мед.центра  «SK-medlab». Желаю успехов в ее начинании, динамического развития в рамках совместного партнерства с целью качественной подготовки специалистов лабораторной службы."
                                </ShowMoreText></p>
                            </div>
                        </div>
                        <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img src="https://i.imgur.com/cxHjrAu.png" alt="Нарибай Роза Жұмбайқызы" />
                                </div>
                                <div class="flex-grow pl-3">
                                    <h6 class="font-bold text-sm text-gray-900">Нарибай Роза Жұмбайқызы</h6>
                                    <p className="text-sm text-gray-600">БҒК, Абай атындағы ҚазҰПУ доценті</p>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight"><ShowMoreText
                                    
                                    lines={3}
                                    more='Подробнее'
                                    less='Свернуть'
                                    className='content-css'
                                    anchorClass='my-anchor'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={280}
                                >"Тұрсынова Сәуле Кәдірханқызын Алматы қаласы Жедел медициналық жәрдем ауруханасының клиникалық-диагностикалық зертханасында білікті маман ретінде қызмет атқарған кезінен білемін. Дәлірек айтсам, С.К.Тұрсынованың біліктілігі арқасында, нақты анықтамалар алынып, соның нәтижесінде дұрыс ем қабылданып, жазылып, өмірге қайта оралған өте жақын адамдар арқылы таныстығымыз басталды. Осындай араластық барысында, ол кісінің өз ісіне адал екенін және әр уақытта біліктілігін арттырып, шыңдалуда талай еңбек атқарғанының куәсі болдым. Соның арқасында сырқаттарды емдеудің ұтымды тәсілі болып табылатын зертханалық диагностика-процесс маманы ретінде Алматы қалалық дәрігер-зертханашылар қоғамының жұмысына қатысып, кейін оның төрайымы болып сайланды. Жақында, Сәуле Кәдірханқызының медициналық орталықты ашқаны туралы хабарламаны естіп, қатты қуандым. Әрине, жақсылықты мың естігеннен бір көрген дұрыс деген шешіммен, барып көрдім. Шынында, медициналық орталық зертханалық диагностиканың ең заманауи технологияларымен қамтылған екен, бұл дегеніміз барлық стандарттар мен нормативтерді қатаң сақтай отыра халыққа жоғары дәрежелі кәсіби қызмет көрсетеді деген үлкен сенімдемін. Сәуле Кәдірханқызы, игілікті ісіңізге сәттілік пен өркендеу тілеймін!"
                                </ShowMoreText></p>
                            </div>
                        </div>
                    </div>
                    <div class="px-3 md:w-1/3">
                        <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img src="https://i.imgur.com/IbZ31TP.png" alt="Искакова Сауле Акельбековна" />
                                </div>
                                <div class="flex-grow pl-3">
                                    <h6 class="font-bold text-sm text-gray-900">Искакова Сауле Акельбековна</h6>
                                    <p className="text-sm text-gray-600">ДБН, зам.руков. НИИ Атчабарова</p>
                                    <p className="text-sm text-gray-600">КазНМУ им С.Д.Асфендиярова</p>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight"><ShowMoreText
                                    /* Default options */
                                    lines={3}
                                    more='Подробнее'
                                    less='Свернуть'
                                    className='content-css'
                                    anchorClass='my-anchor'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={280}
                                >"Знаю Сауле Кадырхановну более 30-ти лет, когда она работала еще  в Центральной клинической больнице 4-го Главного Управления при МЗ. медсестрой детского отделения. С тех пор она прошла длинный путь становления как специалиста, профессионала, работала в БСМП, ГКБ №5. Отмечаю работу Сауле Кадырхановны как высокопрофессиональную: блестящий интеллектуал, доброжелательная, отзывчивая, знающая, умеющая ответить на любые сложные вопросы лабораторной работы, как в методическом плане по соблюдению стандартов клинической лабораторной диагностики, так и практическом их применении. Рада отметить открытие ею медицинского центра. Считаю верным такое решение, побольше таких частных центров с таким грамотным руководством. Желаю на этом пути развития, расширения пула оказываемых услуг и побольше таких же профессиональных сотрудников."
                                </ShowMoreText></p>
                            </div>
                        </div>
                        <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img src="https://i.imgur.com/2VA98ub.png" alt="Габдушева Светлана Касымхановна" />
                                </div>
                                <div class="flex-grow pl-3">
                                    <h6 class="font-bold text-sm text-gray-900">Габдушева Светлана Касымхановна</h6>
                                    <p className="text-sm text-gray-600">Врач-лаборант первой категории,</p>
                                    <p className="text-sm text-gray-600">Отличник здравоохранения РК</p>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight"><ShowMoreText
                                    /* Default options */
                                    lines={3}
                                    more='Подробнее'
                                    less='Свернуть'
                                    className='content-css'
                                    anchorClass='my-anchor'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={280}
                                >"Турсынову Сауле Кадырхановну знаю более 25 лет. Познакомились мы как коллеги в клинико-диагностической лаборатории Больницы скорой медицинской помощи г.Алматы. В процессе нашей совместной деятельности она проявила себя как профессионал высокого класса и надежный товарищ. Постоянно повышая свою квалификацию, она заслуженно росла как специалист лабораторной диагностики — процесса, являющегося основой эффективного лечения пациентов. Принимала участие в работе Алматинского  городского общества врачей-лаборантов, и позже была избрана его председателем. Меня обрадовала новость об открытии ею медицинского центра. Зная ее многие годы, могу подтвердить, что она действительно дорожит своей профессиональной репутацией, применяет самые современные технологии лабораторной диагностики и строго соблюдает все стандарты и нормативы. Желаю ей успеха и процветания!"
                                </ShowMoreText></p>
                            </div>
                        </div>
                    </div>
                    <div class="px-3 md:w-1/3">
                        <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img src="https://i.imgur.com/ZN5pukI.png" alt="Буркутбаева Татьяна Нуриденовна" />
                                </div>
                                <div class="flex-grow pl-3">
                                    <h6 class="font-bold text-sm text-gray-900">Буркутбаева Татьяна Нуриденовна</h6>
                                    <p className="text-sm text-gray-600">ДМН, профессор кафедры </p>
                                    <p className="text-sm text-gray-600">оториноларингологии КазМУНО</p>
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight"><ShowMoreText

                                    lines={3}
                                    more='Подробнее'
                                    less='Свернуть'
                                    className='content-css'
                                    anchorClass='my-anchor'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={280}
                                >"Огромный опыт, потенциал, высокая квалификация позволили Сауле Кадырхановне достичь установленных задач по организации мед.центра «SK-MEDLAB». Уверена, что преданность своему делу, трудолюбие, ответственность, инициативность и целеустремленность позволят добиться ей и в дальнейшем блестящих результатов.  Желаю медицинскому центру процветания и успехов в деле сохранения здоровья общества. Пусть оптимизм и деловой настрой сопутствуют в работе! "
                                </ShowMoreText></p>
                            </div>
                        </div>
                        {/* <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
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
                                    
                                    lines={3}
                                    more='Подробнее'
                                    less='Свернуть'
                                    className='content-css'
                                    anchorClass='my-anchor'
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
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Comments;