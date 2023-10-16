function Aside() {
  return (
    <aside className="my-1 mr-1 w-full rounded-lg bg-gray-200 p-4 shadow-md sm:col-start-5 sm:col-end-6">
      <h2 className="mb-4 text-xl font-bold">Меню</h2>
      <ul className="space-y-2">
        <li>
          <a href="/">Главная</a>
        </li>
        <li>
          <a href="#">О нас</a>
        </li>
        <li>
          <a href="#">Продукты</a>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
