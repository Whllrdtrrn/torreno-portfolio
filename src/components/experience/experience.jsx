import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './experience.css'

const experience = () => {
    return(
        <section id='experience'>
                <h5>What Skills I Have</h5>
                <h2>My Experience</h2>

                <div className="container exContainer">
                    <div className="frontendCard">
                        <h3>Frontend Development</h3>
                        <div className="exFrontend">
                            <article className='exDetails'>
                                <BsFillPatchCheckFill className='exIcon' />
                                <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='exDetails'>
                                <BsFillPatchCheckFill className='exIcon' />
                                <div>
                                <h4>Laravel</h4>
                                <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='exDetails'>
                                <BsFillPatchCheckFill className='exIcon' />
                                <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='exDetails'>
                                <BsFillPatchCheckFill className='exIcon' />
                                <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='exDetails'>
                                <BsFillPatchCheckFill className='exIcon' />
                                <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='exDetails'>
                                <BsFillPatchCheckFill className='exIcon' />
                                <div>
                                <h4>React</h4>
                                <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="backendCard">
                        <h3>Backend Development</h3>
                        <div className="exBackend">
                        <article className='exDetails'>
                                <BsFillPatchCheckFill className='exIcon' />
                                <div>
                                <h4>Python</h4>
                                <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='exDetails'>
                                <BsFillPatchCheckFill className='exIcon' />
                                <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                            <article className='exDetails'>
                                <BsFillPatchCheckFill className='exIcon' />
                                <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
        </section>
    )
}
export default experience