import Typical from 'react-typical';


function Typi() {

    return(
    <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Мы делаем высококачественные анализы{' '}
        <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
                'в короткие сроки.',
                2000,
                'по доступным ценам.',
                2000,
                'в день приема.',
                2000,
                'с заботой и любовью.',
                2000
            ]}
        /></p>
);
}
export default Typi;