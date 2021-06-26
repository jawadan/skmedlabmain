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
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z" fill="#FD5631" />
                <path d="M120.18 363.196L268.064 511.709C403.846 505.408 512 393.34 512 256C512 250.823 511.828 245.686 511.524 240.583L391.614 120.673L120.18 363.196Z" fill="#E44D2C" />
                <path d="M135.613 369.778H376.386C388.446 369.778 398.223 360.002 398.223 347.941V135.613C398.223 123.554 388.447 113.778 376.386 113.778H135.613C123.554 113.778 113.778 123.554 113.778 135.613V347.941C113.778 360.001 123.554 369.778 135.613 369.778Z" fill="#5C88AD" />
                <path d="M376.385 113.778H255.424V369.778H376.385C388.445 369.778 398.222 360.002 398.222 347.941V135.614C398.222 123.554 388.446 113.778 376.385 113.778Z" fill="#366695" />
                <path d="M376.385 341.333H135.614C123.554 341.333 113.777 331.557 113.777 319.496V347.94C113.777 360 123.553 369.777 135.614 369.777H376.387C388.447 369.777 398.224 360.001 398.224 347.94V319.496C398.222 331.557 388.446 341.333 376.385 341.333Z" fill="#366695" />
                <path d="M376.385 341.333H255.424V369.777H376.385C388.445 369.777 398.222 360.001 398.222 347.94V319.496C398.222 331.557 388.446 341.333 376.385 341.333Z" fill="#273B7A" />
                <path d="M146.963 200.297H365.037C372.891 200.297 379.259 193.929 379.259 186.075V183.705C379.259 175.851 372.891 169.483 365.037 169.483H146.963C139.109 169.483 132.741 175.851 132.741 183.705V186.075C132.741 193.929 139.109 200.297 146.963 200.297Z" fill="#DFDAD7" />
                <path d="M365.037 169.482H255.426V200.297H365.037C372.891 200.297 379.259 193.929 379.259 186.075V183.705C379.259 175.849 372.891 169.482 365.037 169.482Z" fill="#C4C0BF" />
                <path d="M334.079 213.333H303.192C298.868 213.333 295.362 216.838 295.362 221.163V228.777C295.362 233.101 298.867 236.607 303.192 236.607H310.877V248.242C310.877 252.526 314.351 256 318.635 256C322.919 256 326.393 252.526 326.393 248.242V236.606H334.078C338.402 236.606 341.908 233.101 341.908 228.776V221.162C341.907 216.838 338.403 213.333 334.079 213.333Z" fill="#C7D0D3" />
                <path d="M341.333 224.108H295.937C288.004 224.108 281.57 217.676 281.57 209.741V164.347C281.57 156.414 288.002 149.98 295.937 149.98H341.333C349.266 149.98 355.698 156.412 355.698 164.347V209.743C355.699 217.676 349.267 224.108 341.333 224.108Z" fill="#193A51" />
                <path d="M297.805 325.818H339.465C343.67 325.818 347.08 322.41 347.08 318.204V276.544C347.08 272.339 343.672 268.929 339.466 268.929H297.806C293.601 268.929 290.191 272.337 290.191 276.543V318.203C290.19 322.41 293.6 325.818 297.805 325.818Z" fill="#71E2EF" />
                <path d="M156.444 362.452C160.253 362.452 163.34 359.365 163.34 355.556C163.34 351.747 160.253 348.66 156.444 348.66C152.635 348.66 149.548 351.747 149.548 355.556C149.548 359.365 152.635 362.452 156.444 362.452Z" fill="#E03A00" />
                <path d="M177.562 362.452C181.371 362.452 184.458 359.365 184.458 355.556C184.458 351.747 181.371 348.66 177.562 348.66C173.753 348.66 170.666 351.747 170.666 355.556C170.666 359.365 173.753 362.452 177.562 362.452Z" fill="#FFC61B" />
              </svg>
              {/* <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Оборудование</h4> */}
              <p className="text-gray-900 text-center">Анализаторы и реагенты ведущих мировых производителей.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 297 297" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M148.5 297C230.514 297 297 230.514 297 148.5C297 66.4857 230.514 0 148.5 0C66.4857 0 0 66.4857 0 148.5C0 230.514 66.4857 297 148.5 297Z" fill="#FD5631" />
                  <path d="M295.261 125.716L258.923 89.378L65.861 195.214L166.548 295.906C240.049 287 297 224.405 297 148.5C297 140.752 296.405 133.144 295.261 125.716Z" fill="#E44D2C" />
                  <path d="M221.411 197.645C173.655 184.793 123.345 184.793 75.589 197.645C70.199 199.095 64.636 195.975 62.995 190.641C53.711 160.462 44.427 130.284 35.143 100.105C33.415 94.487 36.682 88.573 42.345 86.997C111.794 67.675 185.208 67.675 254.657 86.997C260.32 88.572 263.587 94.487 261.859 100.105C252.575 130.284 243.291 160.462 234.007 190.641C232.364 195.975 226.8 199.095 221.411 197.645Z" fill="white" />
                  <path d="M254.656 86.997C219.824 77.307 183.996 72.479 148.17 72.509V188.009C172.796 187.98 197.426 191.191 221.41 197.645C226.8 199.095 232.363 195.975 234.004 190.641C243.288 160.462 252.572 130.284 261.856 100.105C263.586 94.487 260.319 88.572 254.656 86.997Z" fill="#EDECEB" />
                  <path d="M57.175 171.722C59.115 178.028 61.055 184.334 62.995 190.641C64.636 195.975 70.2 199.096 75.589 197.645C123.345 184.793 173.655 184.793 221.411 197.645C226.801 199.095 232.364 195.975 234.005 190.641C235.945 184.335 237.885 178.028 239.825 171.722C179.928 156.234 117.072 156.234 57.175 171.722Z" fill="#71E2EF" />
                  <path d="M148.171 160.108V188.008C172.797 187.979 197.426 191.19 221.411 197.644C226.801 199.094 232.364 195.974 234.005 190.64C235.945 184.334 237.885 178.027 239.825 171.721C209.77 163.95 178.969 160.081 148.171 160.108Z" fill="#38C6D9" />
                  <path d="M170.667 118.944H155.889V104.167H141.111V118.944H126.333V133.722H141.111V148.5H155.889V133.722H170.667V118.944Z" fill="#F86E51" />
                  <path d="M155.889 118.944V104.167H148.171V148.5H155.889V133.722H170.667V118.944H155.889Z" fill="#C63C22" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="297" height="297" fill="white" />
                  </clipPath>
                </defs>
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
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 297 297" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M148.5 297C230.514 297 297 230.514 297 148.5C297 66.4857 230.514 0 148.5 0C66.4857 0 0 66.4857 0 148.5C0 230.514 66.4857 297 148.5 297Z" fill="#FD5631" />
                <path d="M214.5 66L82.5 264L110.616 292.116C122.711 295.298 135.406 297 148.5 297C230.489 297 296.958 230.555 296.999 148.576L214.5 66Z" fill="#E44D2C" />
                <path d="M214.5 66H82.5V264H214.5V66Z" fill="white" />
                <path d="M214.5 66H148.834V264H214.5V66Z" fill="#EDECEB" />
                <path d="M126 105.5H171C176.799 105.5 181.5 100.799 181.5 95V50C181.5 44.201 176.799 39.5 171 39.5H126C120.201 39.5 115.5 44.201 115.5 50V95C115.5 100.799 120.201 105.5 126 105.5Z" fill="#DFDAD7" />
                <path d="M171 39.5H148.833V105.5H171C176.799 105.5 181.5 100.799 181.5 95V50C181.5 44.201 176.799 39.5 171 39.5Z" fill="#C4C0BF" />
                <path d="M165 214.5H132V264H165V214.5Z" fill="#DFDAD7" />
                <path d="M165 214.5H148.834V264H165V214.5Z" fill="#C4C0BF" />
                <path d="M132 115.5H99V148.5H132V115.5Z" fill="#71E2EF" />
                <path d="M198 115.5H165V148.5H198V115.5Z" fill="#38C6D9" />
                <path d="M132 165H99V198H132V165Z" fill="#71E2EF" />
                <path d="M198 165H165V198H198V165Z" fill="#C4C0BF" />
                <path d="M168.5 65.833H155.167V52.5H141.833V65.833H128.5V79.167H141.833V92.5H155.167V79.167H168.5V65.833Z" fill="#F86E51" />
                <path d="M155.167 65.833V52.5H148.834V92.5H155.167V79.167H168.5V65.833H155.167Z" fill="#C63C22" />
              </svg>
              {/* <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Стаж</h4> */}
              <p className="text-gray-900 text-center">Успешный опыт по возведению многопрофильных лабораторий.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 452 452" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M225.638 451.286C350.254 451.286 451.276 350.264 451.276 225.648C451.276 101.032 350.254 0.0100098 225.638 0.0100098C101.022 0.0100098 0 101.032 0 225.648C0 350.264 101.022 451.286 225.638 451.286Z" fill="#FD5631" />
                <path opacity="0.1" d="M451.296 225.648C451.296 224.112 451.211 222.597 451.18 221.068L349.985 118.301L328.36 96.347C328.36 108.476 318.534 118.302 306.405 118.302H128.277L92.407 167.712L225.827 351.529L225.639 354.914L306.894 436.169C391.356 403.543 451.296 321.62 451.296 225.648Z" fill="black" />
                <path d="M89.727 167.716L225.638 354.931L153.904 167.716H89.727Z" fill="#71E2EF" />
                <path d="M172.841 118.293H125.606L89.727 167.716H153.904L172.841 118.293Z" fill="#38C6D9" />
                <path d="M225.638 354.931L361.55 167.716H297.373L225.638 354.931Z" fill="#38C6D9" />
                <path d="M278.436 118.293L297.373 167.716H361.55L325.671 118.293H278.436Z" fill="#71E2EF" />
                <path d="M225.638 167.716V118.293H172.841L153.904 167.716H225.638Z" fill="#71E2EF" />
                <path d="M153.904 167.716L225.638 354.931V167.716H153.904Z" fill="#38C6D9" />
                <path d="M297.373 167.716L278.436 118.293H225.638V167.716H297.373Z" fill="#38C6D9" />
                <path d="M225.638 167.716V354.931L297.373 167.716H225.638Z" fill="#71E2EF" />
                <path d="M153.904 145.787C153.904 157.898 144.086 167.716 131.976 167.716C144.087 167.716 153.904 177.533 153.904 189.644C153.904 177.533 163.722 167.716 175.833 167.716C163.722 167.716 153.904 157.898 153.904 145.787Z" fill="white" />
                <path d="M325.671 96.365C325.671 108.475 315.853 118.293 303.743 118.293C315.854 118.293 325.671 128.111 325.671 140.222C325.671 128.111 335.488 118.293 347.6 118.293C335.488 118.293 325.671 108.475 325.671 96.365Z" fill="white" />
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
