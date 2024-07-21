import React from 'react'

const CareerInfo = () => {
  return (
    <section className='max-w-[1200px] m-auto px-8 '>
      <h2 className='text-center items-center text-2xl font-semibold py-3'>Career Info</h2>
      <p className='pb-2'>Fill in the below details or email to contact@resolutecorp.in</p>
      <div className=' gap-10 pb-3'>
        <div className='grid md:grid-cols-2 gap-5'>
          <div className='flex flex-col'>
           <label htmlFor="" className='mb-1'>Candidate Code*</label>
           <input type="text" name="" id="" placeholder='123' className='border border-[#0A235C] px-2 py-1' /> 
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='mb-1'>Candidate Type*</label>
            <select className='border border-[#0A235C] px-2 py-1'>
            <option value="">—Select Candidte Type—</option>
              <option value="Exp">Experince</option>
              <option value="Fresher">Fresher</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <input type="text" placeholder='Candidate Name*' className='border border-[#0A235C] px-2 py-1' />
          </div>
          <div className='flex flex-col'>
            <input type="text" placeholder='Candidate Middle Name*' className='border border-[#0A235C] px-2 py-1' />
          </div>
          <div className='flex flex-col'>
            <input type="text" placeholder='Candidate Last Name*' className='border border-[#0A235C] px-2 py-1' />
          </div>
          <div className='flex flex-col'>
            <input type="text" placeholder='Age*' className='border border-[#0A235C] px-2 py-1' />
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-5 py-4'>
          <div className='flex flex-col'>
            <label htmlFor="" className='mb-1'>Birth Date*</label>
            <input type="date" name="" id="" placeholder='dd-mm-yyyy' className='border border-[#0A235C] px-2 py-1'/>
          </div>
          <div className='flex flex-col'>
             <label htmlFor="" className='mb-1'>Gender*</label>
             <div className='flex flex-wrap gap-4'>
              <div className='flex items-center'>
                <input type="radio" name="gender" id="male" className='border border-[#0A235C] px-2 py-1'/>
                <label htmlFor="male" className='ml-2'>Male</label>
              </div>
              <div className='flex items-center'>
                <input type="radio" name="gender" id="female" className='border border-[#0A235C] px-2 py-1'/>
                <label htmlFor="female" className='ml-2'>Female</label>
              </div>
              <div className='flex items-center'>
                <input type="radio" name="gender" id="other" className='border border-[#0A235C] px-2 py-1'/>
                <label htmlFor="other" className='ml-2'>Other</label>
              </div>
            </div>
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-5 py-4'>
          <div className='flex flex-col'>
            <input type="tel" pattern="9[0-9]{9}" name="" id="" placeholder='Mobile Number' className='border border-[#0A235C] px-2 py-1 mb-2' />
            <input type="file" name="" id="" className='pt-2'/>
          </div>
          <div className='flex flex-col'>
            <input type="email" name="" id="" placeholder='Email' className='border border-[#0A235C] px-2 py-1' />
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-5 py-4'>
          <div className='flex flex-col'>
            <select className='border border-[#0A235C] px-2 py-1'>
              <option value="">—Select title—</option>
              <option value="Exp">One </option>
              <option value="Fresher">Mr</option>
            </select>
          </div>
          <div className='flex flex-col'>
             <input type="tel" pattern="9[0-9]{9}" name="" id="" placeholder='Phone Number' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Address 1' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Address 2' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Address 3' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='City' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="tel" pattern="[0-9]{6}" name="" id="" placeholder='Pin Code' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Perferred Location*' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Total Expeeince In Month*' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
            <select className='border border-[#0A235C] px-2 py-1'>
              <option value="">—Select Ex-Employee—</option>
              <option value="Exp">Yes </option>
              <option value="Fresher">No</option>
            </select>
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Last Positon*' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Last Salary*' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Expected Salary*' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Highest Qualification*' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Notice Period*' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Emergency Contact Person Name' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Emergency Contact Number' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Relation' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">Document</label>
            <input type="file" name="" id="" className='pt-2'/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="">All Our Company Department*</label>
            <select className='border border-[#0A235C] px-2 py-1'>
              <option value="">—Select Department—</option>
              <option value="Exp">Yes </option>
              <option value="Fresher">No</option>
            </select>
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Languages Known' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Positon Applied' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Previous Organization Name' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Family Name' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-5 py-5'>
        <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Family Relationship' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Family Age' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Family Occupation' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='Family Dependant' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
          <div className='flex flex-col'>
             <input type="text" name="" id="" placeholder='LinkedIn Url' className='border border-[#0A235C] px-2 py-1 mb-2' />
          </div>
        </div>
        <button className='border border-[#0A235C] px-2 py-1 mb-2'>Submit</button>
      </div>
    </section>
  )
}

export default CareerInfo