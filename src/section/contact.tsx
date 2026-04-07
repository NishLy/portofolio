import SectionHeader from "../components/ui/section_header";
import { MdAttachEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="w-screen text-white">
      <div className="px-8 md:px-32 grid grid-cols-1 lg:grid-cols-2 gap-8 py-20   justify-center">
        <div className="lg:col-span-1">
          <div className="flex flex-col gap-2">
            <SectionHeader>CONTACT</SectionHeader>
            <h2 className="text-3xl font-bold mt-4">Get problem to solve?</h2>
            <p className="text-gray-400 text-left max-w-2xl">
              I'd love to hear from you! Please feel free to reach out using the
              form below or by sending an email to
              <b className="text-white"> adhipamungkaswijayadi@gmail.com.</b>
            </p>
          </div>
        </div>
        <div className="lg:col-span-1">
          <form
            className="w-full"
            action="mailto:adhipamungkaswijayadi@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={2}
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
              />
              <div className="flex flex-wrap gap-2 justify-between">
                <div className="flex gap-1 wrap-break-word">
                  <MdAttachEmail size={20} className="text-white" />
                  adhipamungkaswijayadi@gmail.com
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded font-semibold hover:opacity-90"
                >
                  Contact me
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
