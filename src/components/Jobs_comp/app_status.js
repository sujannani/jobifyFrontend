import React from 'react'
import { applications,jobs } from '../../pages/data'

const AppStatus = (arr) => {
    var color;
    if(arr.status=='accepted'){color='success'}
    else if(arr.status=='shortlisted'){color='warning'}
    else if(arr.status=='rejected'){color='danger'};
  return (
    <div className='d-flex flex-row shadow rounded-3 justify-content-between p-3 align-items-center'>
        <p className='sub-head fw-bold'>{arr.head}</p>
        <div className='d-flex flex-row gap-2 align-items-center'>
            <img src={arr.img}/>
            <p className='body'>{arr.company}</p>
        </div>
        <div className='d-flex flex-row gap-2 align-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 17 24" fill="none">
                <path d="M8.16667 11.4168C7.39312 11.4168 6.65125 11.1095 6.10427 10.5626C5.55729 10.0156 5.25 9.27371 5.25 8.50016C5.25 7.72661 5.55729 6.98475 6.10427 6.43777C6.65125 5.89079 7.39312 5.5835 8.16667 5.5835C8.94022 5.5835 9.68208 5.89079 10.2291 6.43777C10.776 6.98475 11.0833 7.72661 11.0833 8.50016C11.0833 8.88319 11.0079 9.26246 10.8613 9.61632C10.7147 9.97019 10.4999 10.2917 10.2291 10.5626C9.95822 10.8334 9.63669 11.0482 9.28283 11.1948C8.92896 11.3414 8.54969 11.4168 8.16667 11.4168ZM8.16667 0.333496C6.00073 0.333496 3.92351 1.19391 2.39196 2.72546C0.860414 4.257 0 6.33423 0 8.50016C0 14.6252 8.16667 23.6668 8.16667 23.6668C8.16667 23.6668 16.3333 14.6252 16.3333 8.50016C16.3333 6.33423 15.4729 4.257 13.9414 2.72546C12.4098 1.19391 10.3326 0.333496 8.16667 0.333496Z" fill="black"/>
            </svg>
            <p className='body'>{arr.location}</p>
        </div>
        <div className='d-flex flex-row gap-2 align-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2273 1.4585H14.106C13.0572 1.4585 12.1833 1.4585 11.4903 1.55183C10.7577 1.64983 10.0962 1.86683 9.56533 2.39766C9.03333 2.92966 8.81633 3.59116 8.71833 4.32266C8.65183 4.82083 8.632 6.00966 8.62733 7.02933C6.26833 7.1075 4.85083 7.38283 3.86733 8.3675C2.5 9.73366 2.5 11.934 2.5 16.3335C2.5 20.733 2.5 22.9333 3.86733 24.2995C5.2335 25.6668 7.43383 25.6668 11.8333 25.6668H16.5C20.8995 25.6668 23.0998 25.6668 24.466 24.2995C25.8333 22.9333 25.8333 20.733 25.8333 16.3335C25.8333 11.934 25.8333 9.73366 24.466 8.3675C23.4825 7.38283 22.065 7.1075 19.706 7.0305C19.7013 6.00966 19.6827 4.82083 19.615 4.32383C19.517 3.59116 19.3 2.92966 18.768 2.39883C18.2372 1.86683 17.5757 1.64983 16.843 1.55183C16.15 1.4585 15.275 1.4585 14.2273 1.4585ZM17.956 7.0025C17.9502 6.01433 17.9338 4.9515 17.8813 4.556C17.8078 4.01816 17.683 3.78716 17.5313 3.6355C17.3797 3.48383 17.1487 3.359 16.6097 3.2855C16.0473 3.21083 15.2913 3.2085 14.1667 3.2085C13.042 3.2085 12.286 3.21083 11.7225 3.28666C11.1847 3.359 10.9537 3.48383 10.802 3.63666C10.6503 3.78833 10.5255 4.01816 10.452 4.556C10.3995 4.95266 10.382 6.01433 10.3773 7.0025C10.8335 7.00016 11.32 7.00016 11.8333 7.00016H16.5C17.0145 7.00016 17.4998 7.00016 17.956 7.0025ZM14.1667 10.7918C14.3987 10.7918 14.6213 10.884 14.7854 11.0481C14.9495 11.2122 15.0417 11.4348 15.0417 11.6668V11.6785C16.3122 11.9982 17.375 13.0003 17.375 14.3887C17.375 14.6207 17.2828 14.8433 17.1187 15.0074C16.9546 15.1715 16.7321 15.2637 16.5 15.2637C16.2679 15.2637 16.0454 15.1715 15.8813 15.0074C15.7172 14.8433 15.625 14.6207 15.625 14.3887C15.625 13.9407 15.128 13.32 14.1667 13.32C13.2053 13.32 12.7083 13.9407 12.7083 14.3887C12.7083 14.8367 13.2053 15.4585 14.1667 15.4585C15.7825 15.4585 17.375 16.5785 17.375 18.2783C17.375 19.6667 16.3122 20.6677 15.0417 20.9885V21.0002C15.0417 21.2322 14.9495 21.4548 14.7854 21.6189C14.6213 21.783 14.3987 21.8752 14.1667 21.8752C13.9346 21.8752 13.712 21.783 13.5479 21.6189C13.3839 21.4548 13.2917 21.2322 13.2917 21.0002V20.9885C12.0212 20.6688 10.9583 19.6667 10.9583 18.2783C10.9583 18.0463 11.0505 17.8237 11.2146 17.6596C11.3787 17.4955 11.6013 17.4033 11.8333 17.4033C12.0654 17.4033 12.288 17.4955 12.4521 17.6596C12.6161 17.8237 12.7083 18.0463 12.7083 18.2783C12.7083 18.7263 13.2053 19.347 14.1667 19.347C15.128 19.347 15.625 18.7263 15.625 18.2783C15.625 17.8303 15.128 17.2085 14.1667 17.2085C12.5508 17.2085 10.9583 16.0885 10.9583 14.3887C10.9583 13.0003 12.0212 11.9982 13.2917 11.6785V11.6668C13.2917 11.4348 13.3839 11.2122 13.5479 11.0481C13.712 10.884 13.9346 10.7918 14.1667 10.7918Z" fill="black"/>
            </svg>
            <p className='body'>{arr.salary}</p>
        </div>
        <button className={`btn btn-${color}`} disabled>{arr.status}</button>
    </div>
  )
}

export default AppStatus