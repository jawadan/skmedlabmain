import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Наши преимущества</h2>
            <p className="text-xl text-gray-600">Грамотно проведенное исследование является главным приоритетом в нашей работе.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 513 513" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M511.501 256C511.501 397.109 397.11 511.5 256.001 511.5C114.892 511.5 0.500977 397.109 0.500977 256C0.500977 114.891 114.892 0.5 256.001 0.5C397.11 0.5 511.501 114.891 511.501 256Z" fill="#FD5631" stroke="black" />
                <path d="M511.377 273.763L390.288 152.062L367.477 136.243L184.485 319.236L189.024 323.775L118.199 393.802L235.588 511.191C242.323 511.722 249.129 512.001 256.001 512.001C391.414 512 502.252 406.859 511.377 273.763Z" fill="#E44D2C" />
                <path d="M121.247 395.064C120.144 395.064 119.042 394.643 118.199 393.802C116.515 392.118 116.515 389.391 118.199 387.708L189.589 316.318C191.273 314.634 194 314.634 195.683 316.318C197.366 318.002 197.367 320.729 195.683 322.412L124.294 393.802C123.451 394.643 122.35 395.064 121.247 395.064Z" fill="white" />
                <path d="M118.357 393.931C119.178 394.677 120.207 395.064 121.246 395.064C122.349 395.064 123.451 394.643 124.294 393.802L195.684 322.412C197.318 320.778 197.351 318.168 195.813 316.477L118.357 393.931Z" fill="#D0D1D3" />
                <path d="M388.962 150.081L361.921 123.04C359.532 120.651 355.658 120.651 353.267 123.04C350.878 125.429 350.878 129.303 353.267 131.694L361.38 139.807L294.315 206.869L305.133 217.687L372.196 150.624L380.309 158.737C382.698 161.126 386.574 161.126 388.963 158.737C391.352 156.344 391.352 152.471 388.962 150.081Z" fill="#D0D1D3" />
                <path d="M388.962 150.081L375.584 136.703L299.867 212.42L305.132 217.685L372.195 150.622L380.308 158.735C382.697 161.124 386.573 161.124 388.962 158.735C391.352 156.346 391.352 152.471 388.962 150.081Z" fill="#A6A8AA" />
                <path d="M183.624 346.045L165.957 328.378C160.978 323.399 160.978 315.328 165.957 310.349L290.71 185.597C295.689 180.618 303.76 180.618 308.739 185.597L326.406 203.264C331.385 208.243 331.385 216.314 326.406 221.293L201.653 346.045C196.674 351.022 188.601 351.022 183.624 346.045Z" fill="white" />
                <path d="M243.296 233.008L165.956 310.348C160.977 315.327 160.977 323.398 165.956 328.377L183.623 346.044C188.602 351.023 196.673 351.023 201.652 346.044L278.992 268.704L243.296 233.008Z" fill="#71E2EF" />
                <path d="M174.934 337.355L183.624 346.045C188.603 351.024 196.674 351.024 201.653 346.045L278.993 268.705L261.288 251L174.934 337.355Z" fill="#38C6D9" />
                <path d="M326.405 221.291C331.384 216.312 331.384 208.241 326.405 203.262L308.738 185.595C303.759 180.616 295.688 180.616 290.709 185.595L243.296 233.008L278.991 268.703L326.405 221.291Z" fill="white" />
                <path d="M317.715 194.574L261.288 251.001L278.993 268.706L326.406 221.293C331.385 216.314 331.385 208.243 326.406 203.264L317.715 194.574Z" fill="#D0D1D3" />
                <path d="M341.334 236.175C339.129 236.175 336.921 235.334 335.24 233.649L278.351 176.76C274.984 173.395 274.984 167.937 278.351 164.572C281.714 161.205 287.176 161.205 290.539 164.572L347.428 221.461C350.795 224.826 350.795 230.284 347.428 233.649C345.747 235.334 343.539 236.175 341.334 236.175Z" fill="#A6A8AA" />
                <path d="M319.129 193.16L306.941 205.348L335.242 233.649C336.921 235.333 339.129 236.175 341.334 236.175C343.539 236.175 345.747 235.334 347.428 233.649C350.795 230.284 350.795 224.826 347.428 221.461L319.129 193.16Z" fill="#808183" />
              </svg>
              {/* <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Качество</h4> */}
              <p className="text-gray-900 text-center">Качественные расходные материалы для взятия образцов.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-yellow-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle className="stroke-current text-gray-900" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
                    <path className="stroke-current text-gray-900" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
                    <path className="stroke-current text-teal-700" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
                  </g>
                </g>
              </svg>
              {/* <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Оборудование</h4> */}
              <p className="text-gray-900 text-center">Анализаторы и реагенты ведущих мировых производителей.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-yellow-600" width="64" height="64" rx="32" />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path className="stroke-current text-teal-700" d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207" />
                    <path className="stroke-current text-gray-900" d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285" />
                  </g>
                </g>
              </svg>
              {/* <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Профессионализм</h4> */}
              <p className="text-gray-900 text-center">Опытный, квалифицированный и заботливый персонал.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-yellow-600" width="64" height="64" rx="32" />
                  <g transform="translate(22.857 19.429)" strokeWidth="2">
                    <path className="stroke-current text-gray-900" strokeLinecap="square" d="M12.571 4.571V0H0v25.143h12.571V20.57" />
                    <path className="stroke-current text-gray-900" d="M16 12.571h8" />
                    <path className="stroke-current text-gray-900" strokeLinecap="square" d="M19.429 8L24 12.571l-4.571 4.572" />
                    <circle className="stroke-current text-teal-700" strokeLinecap="square" cx="12.571" cy="12.571" r="3.429" />
                  </g>
                </g>
              </svg>
              {/* <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Системные программы</h4> */}
              <p className="text-gray-900 text-center">Лабораторная и медицинская информационная системы.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-yellow-600" width="64" height="64" rx="32" />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path className="stroke-current text-gray-900" d="M20.571 20.571h13.714v17.143H20.571z" />
                    <path className="stroke-current text-teal-700" d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58" />
                  </g>
                </g>
              </svg>
              {/* <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Стаж</h4> */}
              <p className="text-gray-900 text-center">Успешный опыт по возведению многопрофильных лабораторий.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-yellow-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-gray-900" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
                    <path className="stroke-current text-gray-900" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
                    <path className="stroke-current text-gray-900" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
                    <path className="stroke-current text-teal-700" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
                  </g>
                </g>
              </svg>
              {/* <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Бдительность</h4> */}
              <p className="text-gray-900 text-center">Участие в системе внешнего и внутреннего контроля качества.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
