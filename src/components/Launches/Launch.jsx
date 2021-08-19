import React from 'react'
import Falc from './falcon9.jpeg'

const Launch = ({details, info, setSelected}) => {
  return (
    <div className="overlay">
      <div className="modal w-full lg:w-1/3 sm:w-4/5 md:w-3/4 md:h-full h-5/6">
        {info.map((key, index) =>(
          details === index &&
            <>
              <div className='flex justify-around'>
                <img className='md:w-1/4 w-14 h-14 md:h-auto' src={Falc} alt='satellite' />
                <div>
                  <h4 className='md:text-2xl'>{key.mission_name}</h4>
                  <h4 className='mt-2'>{key.rocket.rocket_type}</h4>
                </div>
                <div>    
                  {(key.launch_success == null) ?           
                    <p  
                      className="text-sm font-medium
                        leading-5 whitespace-no-wrap
                        bg-blue-300 text-blue-700 font-bold w-full text-center px-2 py-1 rounded-full"
                        >
                        Upcoming
                    </p>

                    : key.launch_success ? 
                        <p 
                        className="text-sm font-medium
                        leading-5 whitespace-no-wrap
                        bg-green-200 text-green-700 font-bold w-full text-center px-2 py-1 rounded-full"
                        >
                        Success
                        </p>
                    :           
                        <p  
                        className="text-sm font-medium
                        leading-5 whitespace-no-wrap
                        bg-red-200 text-red-700 font-bold w-full text-center px-2 py-1 rounded-full"
                        >
                        Failed
                        </p>}
                </div>
                <button className='fixed top-7 right-7 text-2xl' onClick={()=>setSelected(false)}>&times;</button>
              </div>
            <div>
            {key.details ? 
                <p className='m-5 text-sm w-full'>{key.details}<span className='text-blue-600 p-2' >Wikipedia</span></p>
                : <p className='m-5'>No details as of now. We will update you soon...</p>}
            </div>
            <div className='grid grid-cols-1 divide-y divide-gray-500'>
            <div className='flex justify-between sm:p-3 md:p-3 lg:p-4'>
                <h3>Flight Number</h3>
                <h3>{key.flight_number}</h3>
            </div>
            <div className='flex justify-between sm:p-3 md:p-3 lg:p-4'>
                <h3>Mission Name</h3>
                <h3>{key.mission_name}</h3>
            </div>
            <div className='flex justify-between sm:p-3 md:p-3 lg:p-4'>
                <h3>Rocket Type</h3>
                <h3>{key.rocket.rocket_type}</h3>
            </div>
            <div className='flex justify-between sm:p-3 md:p-3 lg:p-4'>
                <h3>Manufacturer</h3>
                <h3>{key.rocket.second_stage.payloads[0].manufacturer}</h3>
            </div>
            <div className='flex justify-between sm:p-3 md:p-3 lg:p-4'>
                <h3>Nationality</h3>
                <h3>{key.rocket.second_stage.payloads[0].nationality}</h3>
            </div>
            <div className='flex justify-between sm:p-3 md:p-3 lg:p-4'>
                <h3>Launch Date</h3>
                <h3>{key.launch_date_utc}</h3>
            </div>
            <div className='flex justify-between sm:p-3 md:p-3 lg:p-4'>
                <h3>Payload Type</h3>
                <h3>{key.rocket.second_stage.payloads[0].payload_type}</h3>
            </div>
            <div className='flex justify-between sm:p-3 md:p-3 lg:p-4'>
                <h3>Orbit</h3>
                <h3>{key.rocket.second_stage.payloads[0].orbit}</h3>
            </div>
            <div className='flex justify-between sm:p-3 md:p-3 lg:p-4'>
                <h3>Site Name</h3>
                <h3>{key.launch_site.site_name}</h3>
            </div> 
            </div>
            </>
        ))}
      </div>
    </div>
  )
}

export default Launch;