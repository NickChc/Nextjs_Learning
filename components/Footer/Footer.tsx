export function Footer() {
  return (
    <footer className="bg-slate-500 h-[30dvh] flex justify-center a:no-underline">
      <div className="flex gap-x-6 mt-14">
        <nav className="w-[50%] flex flex-col items-center">
          <a href={"facebook.com"} target="_blank">
            facebook
          </a>
          <a href={"instagram.com"} target="_blank">
            instagram
          </a>
          <a href={"twitter.com"} target="_blank">
            twitter
          </a>
          <a href={"reddit.com"} target="_blank">
            reddit
          </a>
          <a href={"github.com"} target="_blank">
            github
          </a>
        </nav>
        <nav className="w-[50%] flex flex-col items-center">
          <a href={"google.maps.com"} target="_blank">
            Find Us
          </a>
          <a href={"gmail.com"} target="_blank">
            Mail Us
          </a>
          <a href={"#"} target="_blank">
            Call Us
          </a>
        </nav>
      </div>
    </footer>
  );
}
