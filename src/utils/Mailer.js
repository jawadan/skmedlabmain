import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_rv8q4tn',
            'template_iz2tvrs',
            e.target,
            'user_LjKR708pIWhUrhq58QPnP'
        );
    }

    toast.configure()

    const notify = () => toast("Спасибо, Ваш запрос был отправлен.");

    return (
        <div className="text-center lg:text-left lg:max-w-xl">
            <h3 className="h3 text-white mb-2">Зарабатывайте с нами</h3>
            <p className="text-gray-300 text-lg mb-6">Сотрудничайте с нами и получайте бонусы на все услуги до 35%</p>

            {/* CTA form */}
            <form className="w-full lg:w-auto" onSubmit={sendEmail}>
                <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input type="email" className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" name="email" placeholder="Ваш email" aria-label="Your email…" required oninvalid="this.setCustomValidity('Ваш email должен содержать символ @')" />
                    <input type="text" className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" name="ник" placeholder="Промо ник" aria-label="Your email…" required oninvalid="this.setCustomValidity('Придумайте солидный ник')" />
                    <button onClick={notify} className="btn text-white bg-yellow-600 hover:bg-yellow-700 shadow" type="submit" value="Отправить">Отправить</button>
                </div>
                {/* Success message */}
                {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                <p className="text-sm text-gray-400 mt-3">Заявка рассматривается в течении 7 дней.</p>
            </form>
        </div>
    );
};
export default Mailer;