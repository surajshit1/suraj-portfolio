import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import Alert from '../components/Alert.jsx';
const Contact = () => {
    const formRef= useRef();
    const [loading, setLoading]= useState(false);
    const [form, setForm]= useState({
        name:'',
        email:'',
        message:'',
    });

    const handleChange =({target: {name, value}})=>{
        setForm ({...form, [name]: value});

    }

// service_cnau66f

    const handleSubmit =async (e)=>{
        e.preventDefault();
        setLoading(ture);

        try {
            
            await emailjs.send(
                'service_cnau66f', 
                'template_mpcgn66',
            { from_name: form.name,
                to_name:'Suraj',
                from_email: 'surajshit15@gmail.com',
                message: form.message
            }, 'DnhzurUs8BoCMgfoG')
            setLoading(false);
            alert('Your message has been sent!')

            setForm({
                name: '',
                email: '',
                message: '',
            })

        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong!')
            
        }

    }

  return (
    <section className='c-space my-20 ' id='contact'>
        {alert.show && <Alert {...alert}/>}
        <div className='relative min-h-screen flex items-center justify-center flex-col'>
            {/* <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen'/> */}
            <div className='contact-container'>
                <h3 className='head-text mt-7'>Let's talk</h3>
                <p className='text-lg text-white-600 mt-3'>Whether you're looking to build a new website improve your exisiting platform, or bring a unique project to life. I'm here to help.</p>

                <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                    <label className='space-y-3'>
                        <span className='field-label'>Full Name</span>
                        <input type="text" 
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        required
                        className='field-input'
                        placeholder='Suraj'/>
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'>Email</span>
                        <input type="email" 
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        required
                        className='field-input'
                        placeholder='suraj@gamil.com'/>
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'>Your Message</span>
                        <textarea type="text" 
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className='field-input'
                        placeholder='Hi, I wanna give you a job...'/>
                    </label>
                    <button className='field-btn' type='submit' disabled={loading}> {loading ? 'Sending...' : 'Send Message'}

                        <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow'/>

                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact