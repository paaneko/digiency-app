import Image from 'next/image';
import OrangeButton from '@shared/ui/buttons/orange-button';

export function ContactUsForm() {
  return (
    <div className="flex justify-between">
      <Image className="inline-flex" width={490} height={333} src="contact-us-form.svg" alt="contact-us-form-image" />
      <div className="">
        <div className="font-semibold text-3xl">
          Send Your <span className="text-orange-main">Message To Us</span>
        </div>
        <form>
          <div className="flex-col inline-flex mt-5">
            <div className="flex justify-between">
              <input
                className=" mr-2.5 w-[330px] h-[60px] appearance-none block w-full text-gray-pg shadow-div p-[18px] leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-[330px] h-[60px] appearance-none block w-full text-gray-pg shadow-div p-[18px] leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="flex justify-between mt-5">
              <input
                className=" mr-2.5 w-[330px] h-[60px] appearance-none block w-full text-gray-pg shadow-div p-[18px] leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Mobile No"
              />
              <input
                className="w-[330px] h-[60px] appearance-none block w-full text-gray-pg shadow-div p-[18px] leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Subject"
              />
            </div>
            <textarea
              className="resize-none mt-7 h-[163px] appearance-none block w-full text-gray-pg shadow-div p-[18px] leading-tight focus:outline-none focus:bg-white"
              placeholder="Send Message"
            />
            <div className="mt-10">
              <OrangeButton label="Send Message" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
