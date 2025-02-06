import {useForm, SubmitHandler} from "react-hook-form"

export default function FormComp() {
    interface IFormInput {
        name: string
        phone: string
        mail: string
        subject: string
        message: string
    }

    const {register, formState: {errors}, handleSubmit} = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) =>{
        fetch("https://formsubmit.co/ajax/mterror2004@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                phone: data.phone,
                mail:data.mail,
                subject: data.subject,
                message: data.message,
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))

        console.log('Fired')

    }
    return (
        <div className={'form-container'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>If you want to send message just fill below and click the send!</p>
                <div className={'form-row'}>
                    <div className={'input-data'}>
                        <input {...register("name", {
                            required: {message: 'Name Require!', value: true},
                            minLength: {message: 'Name Must 3 Characters Long!', value: 3},
                            maxLength: {message: 'Name Too Long!', value: 20},
                            pattern: {
                                message: "Invalid Name!",
                                value: /^[a-zA-Z ]{2,30}$/
                            }
                        })}
                               aria-invalid={errors.name ? "true" : "false"} placeholder={'Your Name'}
                        />
                        <small
                            role="alert">{errors.name?.message}</small>
                    </div>
                    <div className={'input-data'}>
                        <input {...register("phone", {
                            required: {message: 'Phone Number Require!', value: true},
                            minLength: {message: 'Phone Number Must 11 Characters Long!', value: 11},
                            maxLength: {message: 'Phone Number Too Long!', value: 20},
                            pattern: {
                                message: "Invalid Phone Number!",
                                value: /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/
                            }
                        })}
                               aria-invalid={errors.phone ? "true" : "false"} placeholder={'Your Phone Number'}/>
                        <small
                            role="alert">{errors.phone?.message}</small>
                    </div>
                </div>
                <div className={'form-row'}>
                    <div className={'input-data'}>
                        <input {...register("mail", {
                            required: {message: 'Email Require!', value: true},
                            minLength: {message: 'Email Must 11 Characters Long!', value:11},
                            maxLength: {message: 'Email Number Too Long!', value: 320},
                            pattern: {
                                message: "Invalid Email Address!",
                                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            }
                        })}
                               aria-invalid={errors.mail ? "true" : "false"} placeholder={'Your Email'}/>
                        <small
                            role="alert">{errors.mail?.message}</small>
                    </div>
                    <div className={'input-data'}>
                        <input {...register("subject", {
                            required: {message: 'Email Subject Require!', value: true},
                            minLength: {message: 'Email Subject Must 5 Characters Long!', value: 5},
                            maxLength: {message: 'Email Subject Too Long!', value: 20},
                            pattern: {
                                message: "Invalid Email Subject!",
                                value: /^\w+( +\w+)*$/
                            }
                        })}
                               aria-invalid={errors.subject ? "true" : "false"} placeholder={'Subject'}/>
                        <small
                            role="alert">{errors.subject?.message}</small>
                    </div>
                </div>
                <div className={'form-row'}>
                    <div className={'input-data'}>
                    <textarea {...register("message", {
                        required: {message: 'Message Require!', value: true},
                        minLength: {message: 'Message Must 5 Characters Long!', value: 5},
                        maxLength: {message: 'Message Too Long!', value: 500},
                        pattern: {
                            message: "Invalid Message!",
                            value: /^\w+( +\w+)*$/
                        }
                    })}
                              aria-invalid={errors.message ? "true" : "false"} rows={10}/>
                        <small
                            role="alert">{errors.message?.message}</small>
                    </div>
                </div>
                <div className={'form-row'}>
                <button type={'submit'}>Send</button>
                </div>
            </form>
        </div>
    )
}