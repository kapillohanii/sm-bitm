
export default function ContactButton({ name, email, phno }) {
    return <div className='px-2'>
        <button className=' w-48 border-2 hover:border-yellow-400 text-sm border-orange text-white rounded p-4 hover:animate-bounce'>{name}<br /><i className="fas fa-phone text-white mr-2 transform -scale-x-100"></i>{phno}<br /><i className="fas fa-envelope text-white mr-2"></i>{email}</button>
    </div>
}