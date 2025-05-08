import React from "react";

const Location = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.193092572639!2d90.31383517477508!3d23.88277067858034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c26b7218c943%3A0x291f309c2d3666e1!2zTXVyYWQgQXBwYXJlbHMgTHRkIOCmruCngeCmsOCmvuCmpiDgpoXgp43gpq_gpr7gpqrgpr7gprDgp4fgprLgprgg4Kay4Ka_4Kau4Ka_4Kaf4KeH4Kah!5e0!3m2!1sen!2sbd!4v1745953753129!5m2!1sen!2sbd"
        width="100%"
        height="450"
        style={{ marginRight: 10 + "em" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
