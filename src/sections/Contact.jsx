import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formInitialState = {
        name: '',
        email: '',
        message: '',
    };
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(formInitialState);
    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };


    const handleSubmit = (e) => {
        //service_b20yqyt
        e.preventDefault();
        setLoading(true);
        emailjs.send('service_b20yqyt', 'template_33ceawq', {
            from_name: form.name,
            to_name: 'Leo',
            from_email: form.email,
            message: form.message
        }, 'IWk8CKbT8e3sIbisn')
        setForm(formInitialState);
        setLoading(false); 
    };

    return (
        <section id="contact" className="sm:px-10 px-5  h-fit  min-h-[95vh] bg-[#0c0414] py-10 rounded-lg shadow-[0_-2px_21px_5px_rgba(0,0,0,0.3)]">
            <div className="relative flex items-center justify-center flex-col    rounded-lg py-12  ">
                
               
                <div className="md:w-[50vw] xl:w-[40vw] border-4 border-[#381263]  p-4 rounded-lg bg-[#0c0414]">
                    <h3 className="head-text">Let&apos;s talk</h3>
                    <p className="text-lg text-white-600 mt-3">Wheter you&apos;re looking to build a new website, comprove your existing platform, or bring a unique project to life, I&apos;d love to hear from you.</p> 
                    <form ref={formRef} onSubmit={handleSubmit} className="flex mt-12 flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                className="field-input"
                                placeholder="John Doe"
                                required
                                onChange={handleChange}
                                value={form.name}
                            />

                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                className="field-input"
                                placeholder="johndoe@example.com"
                                required
                                onChange={handleChange}
                                value={form.email}
                            />

                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Message</span>
                            <textarea
                                name="message"
                                className="field-input"
                                placeholder="I&apos;m interested in..."
                                required
                                onChange={handleChange}
                                value={form.message}
                            />

                        </label>
                        <button className="field-btn " type="submit" disabled={loading} >{loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>

                    </form>
                </div>
            </div>
        </section>
    )


}

export default Contact