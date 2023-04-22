import './App.css'

function App() {
  return (
  <>
    <div className="flex max-h-full max-w-full bg-gray-300">
      
      <div className="bg-gray-800   md:w-2/6 lg:w-1/6 sm:w-2/6 w-1/6">
        
      </div>

      <div className='  max-h-full lg:w-5/6 md:w-4/6  sm:w-4/6 w-5/6 mb-10'>
      <div className="bg-gray-300  flex justify-center md:ml-5 sm:ml-5 ml-5	lg:max-w-full    sm:w-5/6 " >
          <div  className=" flex overflow-auto bg-gray-800 h-9  mtt text-white pt-2  pl-2 text-start lg:w-5/6 md:w-2/6 sm:w-1/2  text-sm"> How are you</div>
          <div className="bg-gray-800 overflow-auto  h-9 text-white	mll ml-9 p-3 pt-2 pl-2 text-start  lg:w-5/6 md:w-2/6 sm:w-1/2">I am fine</div>
          
      </div>
      <div  className='flex  justify-center      '>
        <input  className='lg:w-5/12 md:5/12 sm:-ml-20 md:-ml-30 lg:-ml-40 h-9 mt-7  p-3 bg-gray-800 text-white brr 'type='text' placeholder='type your text'/>
      </div>
      
     
      </div>
     
      
      
      
       </div>
     
  
  </>
  );
}

export default App;
