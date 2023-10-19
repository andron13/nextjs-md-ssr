import Button from '../../button';

function Footer() {
  return (
    <footer className="mt-6 flex justify-between border-t border-primary-100 px-5">
      <div className="mt-6 flex w-full items-center justify-between">
        <Button type="empty">Clear all</Button>
        <Button>Show X recipes</Button>
      </div>
    </footer>
  );
}

export default Footer;
