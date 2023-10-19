function Footer() {
  return (
    <footer className="mt-6 flex justify-between border-t border-primary-100 px-5">
      <div className="mt-6 flex w-full items-center justify-between">
        <button className="rounded-md px-4 py-2 transition-all hover:bg-black-100">
          Clear all
        </button>
        <button className="rounded-md bg-black-900 px-6 py-[14px] text-white transition-colors hover:bg-black">
          Show X recipes
        </button>
      </div>
    </footer>
  );
}

export default Footer;
