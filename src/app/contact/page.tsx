import ContactButton from "./ContactButton";

export default function Page() {
    return <div className="h-full border-gray-400 border p-10 m-5 rounded-lg bg-black">
        <div className="flex flex-row justify-around">
            <ContactButton name="Shiva Shantanu" email="shiva@gmail.com" phno="+91-9413791823" />
            <ContactButton name="Shiva Shantanu" email="shiva@gmail.com" phno="+91-9413791823" />
            <ContactButton name="Shiva Shantanu" email="shiva@gmail.com" phno="+91-9413791823" />
            <ContactButton name="Shiva Shantanu" email="shiva@gmail.com" phno="+91-9413791823" />
            <ContactButton name="Shiva Shantanu" email="shiva@gmail.com" phno="+91-9413791823" />
        </div>


    </div>;
};