import React from "react";

const ContactDetails = () => {
  return (
    <div className="bg-[#F5F6FA] min-h-screen p-4 md:p-6 font-Nunito">
      <h2 className="text-2xl md:text-[28px] font-bold mb-4 md:ml-4">
        Contacts
      </h2>
      <div className="flex flex-col md:flex-row min-h-screen mt-4 md:mt-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white p-4 md:border-r mb-4 md:mb-0">
          <ul className="space-y-2">
            <li className="p-3 rounded-lg text-sm relative">
              Hi, I need industrial automation for making shoes in a continue
              process
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></span>
            </li>
            <li className="p-3 text-sm rounded-lg">
              Hi, I need industrial automation for making shoes in a continue
              process
            </li>
            <li className="p-3 text-sm rounded-lg">
              Hi, I need industrial automation for making shoes in a continue
              process
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 p-4 md:p-6 bg-white">
          <h2 className="text-2xl md:text-[28px] font-bold text-center mb-4">
            Contacts Details
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 shadow-md rounded-lg">
              <tbody>
                {[
                  ["Full Name", "Ahnaf Mohi"],
                  ["Email", "mmmamon89@gmail.com"],
                  ["Phone Number", "+880123456789"],
                  ["Company Name", "BMS Robotics"],
                  ["Located Country", "Canada"],
                  ["Category", "Industrial Automation"],
                ].map(([label, value], index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="p-3 text-sm border-r border-gray-300">
                      {label}
                    </td>
                    <td className="p-3 text-sm">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-base md:text-lg leading-relaxed">
            Hi, I need industrial automation for making shoes in a continuous
            process. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </main>
      </div>
    </div>
  );
};

export default ContactDetails;
