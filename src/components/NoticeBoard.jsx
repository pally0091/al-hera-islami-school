/* eslint-disable react/prop-types */
import { notices } from "../data/Notice";

const Notice = ({ data }) => {
  return (
    <div className="bg-green-100 text-left py-8 px-6 md:px-20 max-h-[55vh] overflow-y-scroll">
      <h5>{data.title}</h5>
    </div>
  );
};

export default function NoticeBoard() {
  return (
    <div className="bg-green-100 text-left py-8 px-6 max-h-[55vh] overflow-y-scroll max-w-[450px] w-full mx-auto">
      <h4>NoticeBoard</h4>
      {notices.map((notice, index) => (
        <Notice
          key={index}
          data={notice}
        />
      ))}
    </div>
  );
}
