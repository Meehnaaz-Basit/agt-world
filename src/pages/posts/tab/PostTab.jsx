const PostTab = () => {
  return (
    <div>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b w-full border-gray-200 ">
        <li className="me-2">
          <a
            href="#"
            aria-current="page"
            className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active "
          >
            All Post(32)
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 "
          >
            Article
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 "
          >
            Event
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 "
          >
            Education
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 "
          >
            Job
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PostTab;
