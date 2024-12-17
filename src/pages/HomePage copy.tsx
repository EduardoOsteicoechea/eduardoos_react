import Header from "../components/header/header001/Header001";

export default function HomePage()
{
   let text = "";

   fetch('http://eduardoos.com:8080/', { mode: 'no-cors' })
   .then(response => response.text())
   .then(data =>{ 
      text = data;
      console.log(text);
   })
   .catch(error => console.error('Error:', error));

   return (
      <div>
         <Header />
         <h1>{text}</h1>
      </div>
   );
}