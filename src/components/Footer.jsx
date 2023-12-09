import Link from "next/link";
import React from "react";

function Footer() {
  const handleEmailClick = () => {
    const email = "hachembouhadede@gmail.com";
    navigator.clipboard.writeText(email);
    // You may also want to provide some visual feedback to the user, like a tooltip or notification.
    alert(`Email "${email}" copied to clipboard!`);
  };
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
         <p>
          Hachem<span className="italic"> &quot;Timeless&quot; </span>Bouhadede.
          <br />
          
          Providing reliable tech
        </p>
      </aside>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <div  className="flex flex-col lg:flex-row gap-5 cursor-pointer" onClick={handleEmailClick}>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" />
            </svg>
            <span> hachembouhadede@gmail.com</span>
          </div>
          <Link href="https://www.linkedin.com/in/hachem-bouhadede/" passHref className="flex flex-col lg:flex-row gap-5" target="_blank">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
            <span> Hachem Bouhadede</span>
          
          </Link>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
