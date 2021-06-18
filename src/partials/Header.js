import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header>
      <div className="max-w-6xl mx-auto px-5 bg-grey-900 sm:px-6">
        <div className="flex items-center justify-between h-8 md:h-10">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link to='/blog' target="_blank" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Прайслист</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                  <svg width="62" height="62" viewBox="0 0 257 258" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M200.022 225.441C196.492 224.293 191.999 218.703 189.042 211.781C185.79 204.166 181.048 185.391 179.222 172.899C178.792 169.955 178.269 164.064 178.269 162.156V161.015L181.642 159.963C188.039 157.967 197.083 155.377 197.21 155.504C197.28 155.574 197.576 157.582 197.867 159.965C200.621 182.504 204.29 196.648 209.361 204.269C211.956 208.168 214.043 209.534 218.138 210.013C219.493 210.172 220.602 210.387 220.602 210.492C220.602 211.488 212.938 219.543 209.007 222.678C205.718 225.301 202.569 226.269 200.022 225.441ZM239.02 177.536C236.619 176.68 234.805 173.919 232.8 168.068C229.512 158.475 227.874 147.022 227.567 131.491C227.148 110.258 229.776 92.0892 234.767 81.7117C236.245 78.6399 238.462 76.8398 240.741 76.8608C242.456 76.8766 244.621 78.6145 246.127 81.1838C248.57 85.3524 251.059 93.9902 252.222 102.334C253.936 114.639 254.178 136.538 252.73 148.412C251.879 155.386 250.499 161.983 248.761 167.378C246.031 175.849 243.04 178.968 239.02 177.536ZM177.907 144.012C177.809 140.327 177.655 136.032 177.565 134.468L177.4 131.624H166.704H156.009L156.194 121.636C156.295 116.142 156.401 111.62 156.428 111.586C156.455 111.552 161.045 111.824 166.629 112.191C172.213 112.558 176.967 112.822 177.194 112.778C177.545 112.711 177.692 111.356 178.17 103.761C178.48 98.8455 178.779 94.7781 178.834 94.7225C178.89 94.6669 182.982 95.6808 187.929 96.9756C192.875 98.2705 197.028 99.3332 197.158 99.3372C197.38 99.3442 197.269 104.691 196.883 112.597L196.72 115.929L205.23 116.953C209.91 117.516 213.859 118.051 214.005 118.141C214.275 118.308 213.935 129.913 213.651 130.196C213.575 130.272 209.81 130.405 205.284 130.492L197.054 130.649V138.79V146.932L195.665 147.215C194.901 147.371 190.883 148.16 186.736 148.969C182.588 149.778 178.945 150.501 178.639 150.576C178.09 150.71 178.082 150.642 177.907 144.012ZM194.144 91.6414C191.743 90.7844 187.534 89.3393 184.791 88.43L179.803 86.7769L179.977 84.9248C180.588 78.4266 182.454 68.5095 184.781 59.3925C186.977 50.795 188.519 46.0561 190.43 42.0375C192.333 38.0351 193.725 35.9605 196.109 33.5753C199.401 30.2816 202.662 29.2817 205.65 30.6498C209.632 32.4726 215.549 38.06 218.899 43.1595C219.545 44.1431 220.073 45.0869 220.073 45.2568C220.073 45.439 219.404 45.6415 218.441 45.7504C215.121 46.1261 212.867 47.3322 211.095 49.6832C206.947 55.1838 203.862 63.7617 201.323 76.855C200.467 81.269 199.285 88.6541 199.003 91.3491C198.908 92.2632 198.757 93.0534 198.669 93.1053C198.582 93.1572 196.545 92.4984 194.144 91.6414Z" fill="#FD5631" />
                    <path d="M146.851 251.358C145.931 250.93 144.528 249.795 142.684 247.987C141.154 246.488 139.903 245.133 139.904 244.974C139.904 244.816 140.768 244.443 141.823 244.145C142.878 243.848 147.545 242.501 152.195 241.152L160.649 238.699L161.841 240.128C165.03 243.954 167.595 245.709 170.537 246.077L171.992 246.258L171.095 246.638C170.603 246.846 168.405 247.656 166.213 248.437C158.968 251.018 154.64 252.011 150.657 252.007C148.652 252.005 148.002 251.894 146.851 251.358ZM133.817 230.648C132.436 226.801 131.246 223.624 131.173 223.589C131.1 223.554 125.925 223.976 119.673 224.526C113.421 225.076 108.284 225.501 108.258 225.472C108.232 225.443 107.266 221.528 106.111 216.772L104.011 208.126L105.223 207.98C105.889 207.9 110.899 207.517 116.356 207.129C121.813 206.741 126.332 206.377 126.398 206.32C126.464 206.264 125.785 201.731 124.889 196.248C123.994 190.765 123.285 186.257 123.314 186.229C123.344 186.202 128.011 185.69 133.687 185.092C139.362 184.493 144.374 183.943 144.824 183.871L145.643 183.738L147.205 192.497C148.065 197.315 148.837 201.369 148.922 201.507C149.009 201.649 153.585 200.435 159.496 198.702C165.227 197.022 170.034 195.686 170.178 195.734C170.393 195.806 174.111 209.964 173.953 210.106C173.926 210.131 169.26 211.904 163.585 214.048C157.909 216.192 153.168 218.034 153.048 218.142C152.929 218.251 154.018 221.399 155.468 225.139C157.139 229.448 157.994 231.976 157.802 232.04C157.636 232.096 153.094 233.285 147.71 234.684C142.325 236.082 137.562 237.32 137.124 237.435L136.328 237.644L133.817 230.648ZM121.119 172.917C121.119 172.654 120.945 170.011 120.731 167.046C116.79 112.24 119.6 70.2108 129.448 36.6516C131.777 28.7148 135.525 18.1569 136.091 17.9398C136.368 17.8332 156.238 22.6852 157.151 23.0827C157.545 23.254 157.366 23.8986 155.628 28.5685C149.329 45.4892 146.044 59.6323 143.893 79.1039C142.157 94.8108 141.483 109.826 141.633 129.507C141.761 146.473 142.168 157.35 142.961 164.999C143.317 168.439 143.609 171.368 143.609 171.508C143.609 171.648 142.567 171.843 141.293 171.941C139.251 172.099 127.799 172.928 122.905 173.272C121.311 173.384 121.119 173.346 121.119 172.917ZM181.886 20.6225C177.728 17.9843 166.063 12.032 165.051 12.032C164.918 12.032 163.653 13.431 162.24 15.1409C160.827 16.8508 159.537 18.283 159.374 18.3236C159.065 18.4002 138.593 12.9253 138.376 12.7081C138.308 12.6406 139.343 11.0161 140.675 9.0981C142.007 7.18011 143.042 5.55635 142.975 5.48974C142.75 5.2641 137.144 4.39877 133.951 4.09678C132.205 3.9316 128.72 3.71469 126.208 3.61477L121.639 3.43308L123.562 2.27568L125.485 1.11829L133.025 1.26327C148.313 1.5572 160.112 3.73467 169.222 7.94292C173.072 9.72189 185.299 16.6599 188.976 19.1531L189.762 19.6856L187.521 20.7177C184.167 22.2627 184.48 22.268 181.886 20.6225V20.6225Z" fill="#C6003A" />
                    <path d="M107.249 252.261C99.6673 250.978 96.9102 250.223 93.0993 248.388C90.3882 247.082 89.8368 246.69 87.6539 244.511C77.5233 234.401 69.9637 210.493 66.098 176.338C64.0651 158.378 63.5967 148.394 63.7889 127.126C63.9391 110.497 64.1103 105.181 64.9091 92.3331C65.4735 83.2539 66.6845 70.9242 67.0514 70.5201C67.2043 70.3517 86.5069 68.613 86.6488 68.7549C86.7139 68.82 86.3423 72.9611 85.8229 77.9573C84.3191 92.4239 83.996 98.1085 83.5344 118.212C82.804 150.02 84.8878 178.626 89.6673 202.4C93.5532 221.729 98.2743 235.077 104.594 244.601C106.836 247.98 109.71 250.817 113.087 252.986C113.357 253.159 113.519 253.298 113.446 253.294C113.373 253.29 110.585 252.825 107.249 252.261ZM68.5945 59.5909C69.2896 56.587 72.1661 41.991 72.1107 41.7499C72.0652 41.5526 68.8713 42.6374 63.4398 44.6947C58.7104 46.4862 54.7961 47.9115 54.7415 47.8622C54.5695 47.7071 57.9533 35.4629 58.2564 35.1437C58.4151 34.9765 62.6205 33.0863 67.6018 30.9432L76.6585 27.0467L79.464 21.5899C81.0071 18.5886 82.3624 16.0362 82.4759 15.9178C82.6869 15.6976 101.808 11.7187 102.095 11.8354C102.181 11.8708 101.262 14.2215 100.052 17.0591C98.8425 19.8968 97.8488 22.3271 97.8441 22.4599C97.839 22.6044 102.416 22.6331 109.239 22.5315C118.45 22.3943 120.617 22.4268 120.512 22.7003C120.441 22.8866 119.471 26.0096 118.356 29.6402C117.242 33.2709 116.208 36.6284 116.058 37.1013L115.786 37.9612H104.302H92.8186L92.6764 38.5565C92.5982 38.8839 91.7042 43.3078 90.6898 48.3873C89.6754 53.4669 88.797 57.6713 88.7378 57.7306C88.6504 57.8179 69.3583 60.1751 68.6603 60.1837C68.5484 60.185 68.5188 59.9183 68.5945 59.5909ZM83.2836 13.1397C83.2836 12.6748 85.5637 10.7916 87.3069 9.81668C91.7937 7.30753 100.621 4.85572 108.287 3.98925L109.61 3.83972L108.062 4.68129C106.546 5.50607 104.377 7.37242 103.626 8.49966C103.299 8.99061 101.91 9.34672 93.4638 11.1051C88.0829 12.2253 83.5911 13.1969 83.482 13.264C83.3729 13.3312 83.2836 13.2753 83.2836 13.1397Z" fill="#8E0C3C" />
                    <path d="M52.5919 225.24C46.5415 219.988 41.7096 214.549 38.7344 209.643C34.6729 202.944 31.4813 193.578 28.9288 180.864C27.9749 176.113 25.9603 161.871 26.2073 161.624C26.3073 161.524 37.7617 165.827 38.2297 166.14C38.2614 166.161 38.596 169.209 38.9734 172.912C40.1944 184.894 41.4461 191.927 43.9666 200.969C45.6227 206.911 47.0169 210.821 49.1572 215.529C50.5187 218.524 53.6269 224.498 55.0249 226.808C55.3112 227.281 55.506 227.664 55.4577 227.66C55.4095 227.656 54.1199 226.567 52.5919 225.24ZM14.9246 184.72C13.1812 182.371 11.1382 178.69 9.90115 175.668C7.00898 168.604 4.43113 157.316 3.22633 146.44C2.18966 123.455 2.00009 94.0381 14.9922 75.7376C15.501 75.0503 15.9493 74.52 15.9885 74.5593C16.0278 74.5985 15.8855 75.2799 15.6723 76.0735C13.7679 83.1629 11.7852 95.7163 10.5342 108.605C8.85477 125.907 8.80789 133.741 10.2777 151.467C11.3205 164.046 12.5088 171.676 14.9951 181.761C15.569 184.088 16.0166 186.014 15.9899 186.041C15.9633 186.068 15.4839 185.473 14.9246 184.72ZM31.2644 153.914L25.4151 152.177L25.2451 149.4C25.1517 147.872 25.0752 144.078 25.0752 140.967C25.0752 136.106 25.0177 135.289 24.6657 135.154C24.4404 135.068 22.3866 134.737 20.1016 134.42L15.9471 133.842L15.8766 126.942L15.8061 120.042L19.5808 119.342C21.6568 118.957 23.6613 118.582 24.0352 118.508L24.715 118.374L25.177 109.724C25.4311 104.966 25.661 101.053 25.6879 101.028C25.7147 101.003 26.9273 100.565 28.3825 100.056C29.8377 99.5462 32.5547 98.5845 34.4203 97.9187L37.8122 96.7081L37.6216 106.493L37.4309 116.278H38.6716C39.9149 116.278 47.2222 115.888 51.0705 115.616L53.1211 115.472V126.362V137.252L47.4987 137.078C44.4063 136.982 40.8239 136.831 39.5377 136.741L37.1991 136.579L37.3549 141.377C37.4405 144.016 37.5801 148.319 37.665 150.938C37.7906 154.815 37.7537 155.696 37.4665 155.676C37.2725 155.663 34.4816 154.87 31.2644 153.914ZM141.807 116.344C141.856 116.089 142.071 115.881 142.286 115.881C142.5 115.881 142.715 116.089 142.764 116.344C142.827 116.669 142.684 116.807 142.286 116.807C141.887 116.807 141.744 116.669 141.807 116.344ZM26.6627 91.9969C26.6627 89.924 27.1545 86.03 27.9156 81.5513C28.8867 75.8365 30.2961 69.1697 31.6815 64.1195C34.7757 52.8398 37.9155 46.2099 43.1924 39.8133C45.2898 37.2709 49.24 33.285 52.0784 30.6595C54.3738 28.5364 55.9422 27.3028 55.216 28.4414C46.5395 42.0466 41.3662 59.6702 39.4839 82.0356C39.2399 84.9343 38.9479 87.5497 38.8348 87.8476C38.6815 88.2517 37.4296 88.8484 33.9028 90.1984C31.3032 91.1935 28.6107 92.2279 27.9195 92.4972L26.6627 92.9868V91.9969Z" fill="#561843" />
                  </svg>
                </li>
                <li>
                  <h1 className="text-2xl md:text-2xl font-extrabold leading-tighter tracking-tighter ml-4" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-red-800"> SK-MEDLAB</span></h1>
                </li>
              </ul>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {/* <li>
                <Link to={pdf} target="_blank" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out" download="pricelist.pdf">Прайслист</Link>
              </li> */}
              <li>
                <Link to="/signin" className="btn-sm text-white bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Вход</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li>
              {/* <li>
                <Link to="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Регистрация</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li> */}
            </ul>

          </nav>

        </div>
      </div>
      </div>
    </header>
  );
}

export default Header;
