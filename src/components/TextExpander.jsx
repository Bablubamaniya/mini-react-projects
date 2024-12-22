// import React from 'react'

import { useState } from "react";
const textStyle = {
  maxWidth: "40rem",
};
const rawText = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio
autem sapiente cumque iure a error fugiat molestias maiores impedit.
Accusamus ad consectetur voluptatum commodi debitis ea, aut doloribus
fugiat modi. Minima quas in distinctio id dolor. Atque in consequuntur
quo error cupiditate iusto fugit similique optio beatae? Accusantium sed
recusandae similique! Exercitationem adipisci quos, quae nobis iste vel
architecto voluptas excepturi voluptatem minima tempore consequuntur
assumenda corporis voluptatum earum sed commodi reprehenderit possimus
dolorem quibusdam saepe et! Perferendis ipsam tenetur voluptate
voluptates aut maiores consectetur accusamus et libero iure eius
quisquam deserunt porro consequuntur, ab laboriosam non enim quo! Qui
consequatur possimus obcaecati excepturi sunt ex totam ab pariatur!
Tempore, nam maxime commodi rem perspiciatis ipsum ex accusamus, fugit
velit voluptatibus ad perferendis magnam ratione quam? Esse laboriosam
nisi provident et, quo voluptates pariatur ipsa repudiandae labore
fugit. Nobis voluptas quo praesentium rem natus exercitationem mollitia
nostrum magni eos saepe. Quod dolore, quas sequi est veritatis
laudantium dolorum unde aut architecto voluptatem non, laboriosam quo
officia iusto omnis perferendis cumque quia maiores rerum. Unde,
nesciunt sunt. Veniam quo illo iure beatae possimus eligendi, earum hic
ipsum consectetur magnam aut officiis totam quisquam aliquid
exercitationem corporis. Enim pariatur voluptate, quia blanditiis unde,
impedit modi dolores commodi corrupti molestiae ipsa amet expedita
tempora optio, consequatur natus repellendus ratione voluptatem sunt.
Eaque possimus fugit rem maxime aliquid minus iusto, odit nulla autem
libero itaque veniam architecto cum ut repellendus aperiam quidem nisi
in unde placeat. Eaque error molestias illum cupiditate, repellendus id
dolores magni sit! Expedita temporibus quam, sequi odit fuga illo
recusandae nesciunt tenetur, facilis molestias sint corporis eveniet
excepturi ut reprehenderit dolor porro, laboriosam quas doloremque sed
repudiandae deserunt. Recusandae odit necessitatibus facilis sunt qui
accusantium fugit porro mollitia delectus. Iste explicabo tenetur ab
ipsa, error provident dignissimos aliquam, similique natus facere
consequuntur, quidem voluptas et autem! Dolore accusamus aliquam esse
sit labore magni quia placeat perferendis incidunt consectetur aut
architecto earum deleniti ad, repudiandae rerum obcaecati distinctio
nulla, delectus expedita commodi dolorum ipsam. Quas, eius tempore
doloribus rerum, facilis fuga eum modi aspernatur ab optio beatae a.
Impedit sed corrupti beatae quo odio doloremque doloribus voluptates,
quae libero obcaecati vel odit suscipit nesciunt ea, consequatur nisi
officia error omnis deserunt facilis. Expedita earum quisquam nostrum
quam esse saepe vero voluptates placeat ut beatae incidunt quo delectus
pariatur maiores, neque suscipit quod molestias possimus.`;


function TextExpander() {
  const [show, setShow] = useState(false);

  const text = show ? rawText : rawText.slice(0, 200);

  function handleClick() {
    setShow((show) => !show);
  }
  return (
    <div style={textStyle}>
      <p>
        {text}
      </p>
      <button onClick={handleClick}>
      {show ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default TextExpander;
